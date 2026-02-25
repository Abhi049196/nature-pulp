import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const data = {
            name: formData.get("name") as string,
            address: formData.get("address") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            subject: formData.get("subject") as string,
            message: formData.get("message") as string,
        };

        // Validate required fields
        if (!data.name || !data.email || !data.subject || !data.message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // TODO: Store in Supabase
        // const { error: dbError } = await supabase
        //   .from("contact_submissions")
        //   .insert([data]);
        // if (dbError) throw dbError;

        // TODO: Send email notification via Resend
        // await sendContactNotification(data);

        console.log("Contact form submission:", data);

        return NextResponse.json(
            { success: true, message: "Form submitted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Failed to process submission" },
            { status: 500 }
        );
    }
}
