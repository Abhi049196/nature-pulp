import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function sendContactNotification(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) {
    try {
        await resend.emails.send({
            from: "Nature Pulp <notifications@naturepulp.com>",
            to: "contact@naturepulp.com",
            subject: `New Contact Form: ${data.subject}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
        });
        return { success: true };
    } catch (error) {
        console.error("Failed to send email:", error);
        return { success: false, error };
    }
}

export async function sendCareerNotification(data: {
    name: string;
    email: string;
    department: string;
    cv_url?: string;
}) {
    try {
        await resend.emails.send({
            from: "Nature Pulp <notifications@naturepulp.com>",
            to: "contact@naturepulp.com",
            subject: `New Career Application: ${data.name} - ${data.department}`,
            html: `
        <h2>New Career Application</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Department:</strong> ${data.department}</p>
        ${data.cv_url ? `<p><strong>CV:</strong> <a href="${data.cv_url}">Download CV</a></p>` : ""}
      `,
        });
        return { success: true };
    } catch (error) {
        console.error("Failed to send email:", error);
        return { success: false, error };
    }
}
