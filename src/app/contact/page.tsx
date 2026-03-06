import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with Jee Origin for sustainable pulp solutions, product inquiries, and partnership opportunities. Reach us in Delhi, India.",
    openGraph: {
        title: "Contact Us | Jee Origin",
        description: "Reach out for sustainable pulp solutions and partnerships.",
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
