import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with Jee Origin for sustainable pulp solutions, product inquiries, and partnership opportunities. Reach us in Haryana, India.",
    alternates: {
        canonical: "https://www.jeeorigin.com/contact",
    },
    openGraph: {
        title: "Contact Us | JEE ORIGIN",
        description: "Get in touch with Jee Origin for sustainable pulp solutions, product inquiries, and partnership opportunities.",
        url: "https://www.jeeorigin.com/contact",
        images: [{ url: "/jeeorigin-og.png", width: 1200, height: 630, alt: "JEE ORIGIN - Contact Us" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us | JEE ORIGIN",
        description: "Reach out for sustainable pulp solutions and partnerships.",
        images: ["/jeeorigin-og.png"],
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
