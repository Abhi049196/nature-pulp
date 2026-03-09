import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

const BRAND_COLOR = "#1B4D3E";
const BRAND_LIGHT = "#FDFBF4";
const ACCENT_COLOR = "#C87941";
const COMPANY_NAME = "Jee Origin";
const COMPANY_LEGAL = "Jee Origin Pvt Ltd";
const ADMIN_EMAIL = "support@jeeorigin.com";
const PHONE = "+91 97989 73570";
const WEBSITE = "https://www.jeeorigin.com";
const LOGO_URL = "/footer-logo.png";

// ═══════════════════════════════════════════════════════════════
//  SHARED EMAIL LAYOUTf
// ═══════════════════════════════════════════════════════════════

function emailWrapper(content: string): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>${COMPANY_NAME}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f5;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f6f5;padding:40px 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background-color:${BRAND_COLOR};padding:32px 40px;text-align:center;">
                            <img src="${LOGO_URL}" alt="${COMPANY_NAME}" width="120" style="max-width:120px;height:auto;filter:brightness(0) invert(1);" />
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td style="padding:40px;">
                            ${content}
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color:${BRAND_LIGHT};padding:32px 40px;border-top:1px solid #e8e8e8;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td style="text-align:center;">
                                        <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:${BRAND_COLOR};">${COMPANY_LEGAL}</p>
                                        <p style="margin:0 0 2px;font-size:12px;color:#888;">Building sustainable solutions for the future.</p>
                                        <p style="margin:12px 0 2px;font-size:12px;color:#888;">📞 ${PHONE}</p>
                                        <p style="margin:0 0 2px;font-size:12px;color:#888;">✉️ ${ADMIN_EMAIL}</p>
                                        <a href="${WEBSITE}" style="display:inline-block;margin-top:16px;padding:10px 28px;background-color:${BRAND_COLOR};color:#ffffff;text-decoration:none;border-radius:24px;font-size:13px;font-weight:600;">Visit Website</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
}

// ═══════════════════════════════════════════════════════════════
//  CONTACT FORM — ADMIN NOTIFICATION
// ═══════════════════════════════════════════════════════════════

function adminContactEmailHtml(data: {
    name: string;
    email: string;
    phone: string;
    address: string;
    subject: string;
    message: string;
    date: string;
}): string {
    return emailWrapper(`
        <h2 style="margin:0 0 8px;font-size:22px;color:${BRAND_COLOR};">🔔 New Website Submission</h2>
        <p style="margin:0 0 24px;font-size:14px;color:#888;">A new contact form submission has been received.</p>

        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
            <tr>
                <td style="padding:12px 16px;background-color:${BRAND_LIGHT};border-radius:10px;border-left:4px solid ${BRAND_COLOR};">
                    <p style="margin:0 0 6px;font-size:13px;color:#888;">Full Name</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#333;">${data.name}</p>
                </td>
            </tr>
        </table>

        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;">
            <tr>
                <td width="50%" style="padding:10px 0;vertical-align:top;">
                    <p style="margin:0 0 4px;font-size:12px;color:#888;">📧 Email</p>
                    <p style="margin:0;font-size:14px;color:#333;"><a href="mailto:${data.email}" style="color:${BRAND_COLOR};text-decoration:none;">${data.email}</a></p>
                </td>
                <td width="50%" style="padding:10px 0;vertical-align:top;">
                    <p style="margin:0 0 4px;font-size:12px;color:#888;">📞 Phone</p>
                    <p style="margin:0;font-size:14px;color:#333;">${data.phone || "Not provided"}</p>
                </td>
            </tr>
            <tr>
                <td width="50%" style="padding:10px 0;vertical-align:top;">
                    <p style="margin:0 0 4px;font-size:12px;color:#888;">📍 Address</p>
                    <p style="margin:0;font-size:14px;color:#333;">${data.address || "Not provided"}</p>
                </td>
                <td width="50%" style="padding:10px 0;vertical-align:top;">
                    <p style="margin:0 0 4px;font-size:12px;color:#888;">📌 Subject</p>
                    <p style="margin:0;font-size:14px;color:#333;">${data.subject}</p>
                </td>
            </tr>
        </table>

        <div style="padding:16px 20px;background-color:#f8faf8;border-radius:12px;border:1px solid #e4ebe4;margin-bottom:20px;">
            <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:${BRAND_COLOR};text-transform:uppercase;letter-spacing:1px;">Message</p>
            <p style="margin:0;font-size:14px;color:#444;line-height:1.7;white-space:pre-wrap;">${data.message}</p>
        </div>

        <p style="margin:0;font-size:12px;color:#aaa;">⏰ Submission Time: ${data.date}</p>
    `);
}

// ═══════════════════════════════════════════════════════════════
//  CONTACT FORM — USER CONFIRMATION
// ═══════════════════════════════════════════════════════════════

function userContactConfirmationHtml(data: {
    name: string;
    email: string;
    phone: string;
    subject: string;
}): string {
    return emailWrapper(`
        <h2 style="margin:0 0 8px;font-size:24px;color:${BRAND_COLOR};">Thank You, ${data.name}! 🌿</h2>
        <p style="margin:0 0 24px;font-size:15px;color:#555;line-height:1.7;">
            Thank you for reaching out to <strong>${COMPANY_NAME}</strong>.
            Your message has been successfully received by our team. We appreciate your interest in our services and sustainability initiatives.
        </p>
        <p style="margin:0 0 28px;font-size:15px;color:#555;line-height:1.7;">
            Our team will review your request and respond shortly.
        </p>

        <div style="padding:20px 24px;background-color:${BRAND_LIGHT};border-radius:12px;border:1px solid #e8dcc8;margin-bottom:28px;">
            <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:${ACCENT_COLOR};text-transform:uppercase;letter-spacing:1px;">Submission Summary</p>
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <td style="padding:6px 0;font-size:13px;color:#888;width:100px;">Name</td>
                    <td style="padding:6px 0;font-size:14px;color:#333;font-weight:500;">${data.name}</td>
                </tr>
                <tr>
                    <td style="padding:6px 0;font-size:13px;color:#888;">Email</td>
                    <td style="padding:6px 0;font-size:14px;color:#333;font-weight:500;">${data.email}</td>
                </tr>
                <tr>
                    <td style="padding:6px 0;font-size:13px;color:#888;">Phone</td>
                    <td style="padding:6px 0;font-size:14px;color:#333;font-weight:500;">${data.phone || "Not provided"}</td>
                </tr>
                <tr>
                    <td style="padding:6px 0;font-size:13px;color:#888;">Subject</td>
                    <td style="padding:6px 0;font-size:14px;color:#333;font-weight:500;">${data.subject}</td>
                </tr>
            </table>
        </div>

        <p style="margin:0;font-size:14px;color:#555;">
            Warm Regards,<br/>
            <strong style="color:${BRAND_COLOR};">Team ${COMPANY_NAME}</strong>
        </p>
    `);
}

// ═══════════════════════════════════════════════════════════════
//  CAREER FORM — ADMIN NOTIFICATION
// ═══════════════════════════════════════════════════════════════

function adminCareerEmailHtml(data: {
    name: string;
    email: string;
    phone: string;
    address: string;
    department: string;
    remarks: string;
    cvFileName?: string;
    date: string;
}): string {
    return emailWrapper(`
        <h2 style="margin:0 0 8px;font-size:22px;color:${BRAND_COLOR};">💼 New Career Application</h2>
        <p style="margin:0 0 24px;font-size:14px;color:#888;">A new career application has been received from the website.</p>

        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
            <tr>
                <td style="padding:12px 16px;background-color:${BRAND_LIGHT};border-radius:10px;border-left:4px solid ${ACCENT_COLOR};">
                    <p style="margin:0 0 6px;font-size:13px;color:#888;">Applicant Name</p>
                    <p style="margin:0;font-size:15px;font-weight:600;color:#333;">${data.name}</p>
                </td>
            </tr>
        </table>

        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:12px;">
            <tr>
                <td width="50%" style="padding:10px 0;vertical-align:top;">
                    <p style="margin:0 0 4px;font-size:12px;color:#888;">📧 Email</p>
                    <p style="margin:0;font-size:14px;color:#333;"><a href="mailto:${data.email}" style="color:${BRAND_COLOR};text-decoration:none;">${data.email}</a></p>
                </td>
                <td width="50%" style="padding:10px 0;vertical-align:top;">
                    <p style="margin:0 0 4px;font-size:12px;color:#888;">📞 Phone</p>
                    <p style="margin:0;font-size:14px;color:#333;">${data.phone}</p>
                </td>
            </tr>
            <tr>
                <td width="50%" style="padding:10px 0;vertical-align:top;">
                    <p style="margin:0 0 4px;font-size:12px;color:#888;">📍 Address</p>
                    <p style="margin:0;font-size:14px;color:#333;">${data.address || "Not provided"}</p>
                </td>
                <td width="50%" style="padding:10px 0;vertical-align:top;">
                    <p style="margin:0 0 4px;font-size:12px;color:#888;">🏢 Department</p>
                    <p style="margin:0;font-size:14px;color:#333;font-weight:600;">${data.department}</p>
                </td>
            </tr>
        </table>

        ${data.remarks ? `
        <div style="padding:16px 20px;background-color:#f8faf8;border-radius:12px;border:1px solid #e4ebe4;margin-bottom:20px;">
            <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:${BRAND_COLOR};text-transform:uppercase;letter-spacing:1px;">Remarks / Cover Note</p>
            <p style="margin:0;font-size:14px;color:#444;line-height:1.7;white-space:pre-wrap;">${data.remarks}</p>
        </div>
        ` : ""}

        ${data.cvFileName ? `
        <div style="padding:12px 16px;background-color:#eef5ee;border-radius:10px;margin-bottom:20px;">
            <p style="margin:0;font-size:13px;color:${BRAND_COLOR};">📎 CV Attached: <strong>${data.cvFileName}</strong></p>
        </div>
        ` : ""}

        <p style="margin:0;font-size:12px;color:#aaa;">⏰ Submission Time: ${data.date}</p>
    `);
}

// ═══════════════════════════════════════════════════════════════
//  CAREER FORM — USER CONFIRMATION
// ═══════════════════════════════════════════════════════════════

function userCareerConfirmationHtml(data: {
    name: string;
    email: string;
    department: string;
}): string {
    return emailWrapper(`
        <h2 style="margin:0 0 8px;font-size:24px;color:${BRAND_COLOR};">Application Received! 🌿</h2>
        <p style="margin:0 0 24px;font-size:15px;color:#555;line-height:1.7;">
            Dear <strong>${data.name}</strong>,
        </p>
        <p style="margin:0 0 16px;font-size:15px;color:#555;line-height:1.7;">
            Thank you for your interest in joining <strong>${COMPANY_NAME}</strong>. We have successfully received your application for the <strong>${data.department}</strong> department.
        </p>
        <p style="margin:0 0 28px;font-size:15px;color:#555;line-height:1.7;">
            Our HR team will carefully review your application and get back to you within <strong>5-7 business days</strong>. If your profile matches our requirements, we will contact you for the next steps.
        </p>

        <div style="padding:20px 24px;background-color:${BRAND_LIGHT};border-radius:12px;border:1px solid #e8dcc8;margin-bottom:28px;">
            <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:${ACCENT_COLOR};text-transform:uppercase;letter-spacing:1px;">Application Summary</p>
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <td style="padding:6px 0;font-size:13px;color:#888;width:110px;">Name</td>
                    <td style="padding:6px 0;font-size:14px;color:#333;font-weight:500;">${data.name}</td>
                </tr>
                <tr>
                    <td style="padding:6px 0;font-size:13px;color:#888;">Email</td>
                    <td style="padding:6px 0;font-size:14px;color:#333;font-weight:500;">${data.email}</td>
                </tr>
                <tr>
                    <td style="padding:6px 0;font-size:13px;color:#888;">Department</td>
                    <td style="padding:6px 0;font-size:14px;color:#333;font-weight:500;">${data.department}</td>
                </tr>
            </table>
        </div>

        <p style="margin:0;font-size:14px;color:#555;">
            Warm Regards,<br/>
            <strong style="color:${BRAND_COLOR};">Team ${COMPANY_NAME}</strong>
        </p>
    `);
}

// ═══════════════════════════════════════════════════════════════
//  EXPORTED EMAIL SENDING FUNCTIONS
// ═══════════════════════════════════════════════════════════════

export async function sendContactNotification(data: {
    name: string;
    email: string;
    phone: string;
    address: string;
    subject: string;
    message: string;
}) {
    const dateStr = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    try {
        // 1. Admin notification
        await resend.emails.send({
            from: `${COMPANY_NAME} <support@jeeorigin.com>`,
            to: ADMIN_EMAIL,
            subject: `New Website Submission – ${COMPANY_NAME}`,
            html: adminContactEmailHtml({ ...data, date: dateStr }),
        });

        // 2. User confirmation
        await resend.emails.send({
            from: `${COMPANY_NAME} <support@jeeorigin.com>`,
            to: data.email,
            subject: `Thank You for Contacting ${COMPANY_NAME}`,
            html: userContactConfirmationHtml({
                name: data.name,
                email: data.email,
                phone: data.phone,
                subject: data.subject,
            }),
        });

        return { success: true };
    } catch (error) {
        console.error("❌ Failed to send contact emails:", error);
        return { success: false, error };
    }
}

export async function sendCareerNotification(data: {
    name: string;
    email: string;
    phone: string;
    address: string;
    department: string;
    remarks: string;
    cvFileName?: string;
}) {
    const dateStr = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    try {
        // 1. Admin notification
        await resend.emails.send({
            from: `${COMPANY_NAME} <support@jeeorigin.com>`,
            to: ADMIN_EMAIL,
            subject: `New Career Application – ${data.name} (${data.department})`,
            html: adminCareerEmailHtml({ ...data, date: dateStr }),
        });

        // 2. User confirmation
        await resend.emails.send({
            from: `${COMPANY_NAME} <support@jeeorigin.com>`,
            to: data.email,
            subject: `Application Received – ${COMPANY_NAME}`,
            html: userCareerConfirmationHtml({
                name: data.name,
                email: data.email,
                department: data.department,
            }),
        });

        return { success: true };
    } catch (error) {
        console.error("❌ Failed to send career emails:", error);
        return { success: false, error };
    }
}
