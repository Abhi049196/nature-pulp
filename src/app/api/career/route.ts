import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { sendCareerNotification } from "@/lib/resend";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

// ─── Simple in-memory rate limiter ───
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60 * 60 * 1000;

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
    const digits = phone.replace(/\D/g, "");
    return digits.length >= 7 && digits.length <= 15;
}

// ─── Constants ───
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

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
            phone: sanitize((formData.get("phone") as string) || ""),
            email: ((formData.get("email") as string) || "").trim().toLowerCase(),
            department: sanitize((formData.get("department") as string) || ""),
            remarks: sanitize((formData.get("remarks") as string) || ""),
        };

        const cvFile = formData.get("cv") as File | null;

        // ─── Validate required fields ───
        const errors: Record<string, string> = {};

        if (!data.name || data.name.length < 2) {
            errors.name = "Full name is required (minimum 2 characters).";
        }
        if (!data.email || !isValidEmail(data.email)) {
            errors.email = "Please enter a valid email address.";
        }
        if (!data.phone || !isValidPhone(data.phone)) {
            errors.phone = "Please enter a valid phone number.";
        }
        if (!data.department) {
            errors.department = "Please select a department.";
        }

        // ─── Validate CV file ───
        if (!cvFile || cvFile.size === 0) {
            errors.cv = "Please upload your CV.";
        } else {
            const ext = path.extname(cvFile.name).toLowerCase();
            if (!ALLOWED_EXTENSIONS.includes(ext)) {
                errors.cv = "Only PDF, DOC, and DOCX files are allowed.";
            }
            if (cvFile.size > MAX_FILE_SIZE) {
                errors.cv = "File size must be under 5MB.";
            }
        }

        if (Object.keys(errors).length > 0) {
            return NextResponse.json(
                { error: "Validation failed", errors },
                { status: 400 }
            );
        }

        // ─── Save CV file to public/uploads ───
        let cvFileUrl = "";
        let cvFileName = "";

        if (cvFile) {
            const bytes = await cvFile.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const ext = path.extname(cvFile.name).toLowerCase();
            const safeName = `cv_${Date.now()}_${Math.random().toString(36).slice(2, 8)}${ext}`;
            const uploadDir = path.join(process.cwd(), "public", "uploads", "cv");

            // Ensure directory exists
            await mkdir(uploadDir, { recursive: true });

            const filePath = path.join(uploadDir, safeName);
            await writeFile(filePath, buffer);

            cvFileUrl = `/uploads/cv/${safeName}`;
            cvFileName = cvFile.name;

            console.log("✅ CV saved:", cvFileUrl);
        }

        // ─── Store in MongoDB ───
        const { db } = await connectToDatabase();
        const collection = db.collection("career_applications");

        await collection.insertOne({
            ...data,
            cvFileUrl,
            cvFileName,
            createdAt: new Date(),
        });

        console.log("✅ Career application saved to MongoDB:", data.name);

        // ─── Send emails via Resend ───
        const emailResult = await sendCareerNotification({
            ...data,
            cvFileName,
        });

        if (!emailResult.success) {
            console.warn("⚠️ Application saved but email failed:", emailResult.error);
        }

        return NextResponse.json(
            { success: true, message: "Application submitted successfully. A confirmation email has been sent." },
            { status: 200 }
        );
    } catch (error) {
        console.error("❌ Career form error:", error);
        return NextResponse.json(
            { error: "Failed to process application. Please try again." },
            { status: 500 }
        );
    }
}
