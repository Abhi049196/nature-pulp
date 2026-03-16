import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { sendContactNotification } from "@/lib/resend";

// Ensure this route runs on the Node.js runtime (not Edge) so process.env and MongoDB driver work
export const runtime = "nodejs";

// ─── Simple in-memory rate limiter ───
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // max submissions
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    if (!entry || now > entry.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
        return false;
    }

    entry.count++;
    return entry.count > RATE_LIMIT;
}

// ─── Input sanitization ───
function sanitize(input: string): string {
    return input
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
        .trim();
}

// ─── Validation helpers ───
function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
    // Allow numbers, spaces, +, -, (, ) — minimum 7 digits
    const digits = phone.replace(/\D/g, "");
    return digits.length >= 7 && digits.length <= 15;
}

export async function POST(request: Request) {
    try {
        // Rate limiting
        const forwarded = request.headers.get("x-forwarded-for");
        const ip = forwarded?.split(",")[0]?.trim() || "unknown";

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: "Too many submissions. Please try again later." },
                { status: 429 }
            );
        }

        const formData = await request.formData();

        const data = {
            name: sanitize((formData.get("name") as string) || ""),
            address: sanitize((formData.get("address") as string) || ""),
            email: ((formData.get("email") as string) || "").trim().toLowerCase(),
            phone: sanitize((formData.get("phone") as string) || ""),
            subject: sanitize((formData.get("subject") as string) || ""),
            message: sanitize((formData.get("message") as string) || ""),
        };

        // ─── Validate required fields ───
        const errors: Record<string, string> = {};

        if (!data.name || data.name.length < 2) {
            errors.name = "Full name is required (minimum 2 characters).";
        }
        if (!data.email || !isValidEmail(data.email)) {
            errors.email = "Please enter a valid email address.";
        }
        if (data.phone && !isValidPhone(data.phone)) {
            errors.phone = "Please enter a valid phone number.";
        }
        if (!data.subject || data.subject.length < 3) {
            errors.subject = "Subject is required (minimum 3 characters).";
        }
        if (!data.message || data.message.length < 10) {
            errors.message = "Message is required (minimum 10 characters).";
        }

        if (Object.keys(errors).length > 0) {
            return NextResponse.json(
                { error: "Validation failed", errors },
                { status: 400 }
            );
        }

        // ─── Store in MongoDB ───
        const { db } = await connectToDatabase();
        const collection = db.collection("contacts");

        await collection.insertOne({
            ...data,
            createdAt: new Date(),
        });

        console.log("✅ Contact saved to MongoDB:", data.name);

        // ─── Send emails via Resend ───
        const emailResult = await sendContactNotification(data);

        if (!emailResult.success) {
            console.warn("⚠️ Contact saved but email failed:", emailResult.error);
        }

        return NextResponse.json(
            { success: true, message: "Form submitted successfully. A confirmation email has been sent." },
            { status: 200 }
        );
    } catch (error) {
        console.error("❌ Contact form error:", error);
        const message = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json(
            {
                error: "Failed to process submission. Please try again.",
                detail: message,
            },
            { status: 500 }
        );
    }
}
