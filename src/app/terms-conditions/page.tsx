import type { Metadata } from "next";
import TermsConditionsClient from "./TermsConditionsClient";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description:
        "Read the terms and conditions governing the use of Jee Origin's website and services.",
    alternates: {
        canonical: "https://www.jeeorigin.com/terms-conditions",
    },
    openGraph: {
        title: "Terms & Conditions | JEE ORIGIN",
        description: "Read the terms and conditions governing the use of Jee Origin's website and services.",
        url: "https://www.jeeorigin.com/terms-conditions",
        images: [{ url: "/jeeorigin-og.png", width: 1200, height: 630, alt: "JEE ORIGIN - Terms & Conditions" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms & Conditions | JEE ORIGIN",
        description: "Terms governing the use of our website and services.",
        images: ["/jeeorigin-og.png"],
    },
};

export default function TermsConditionsPage() {
    return <TermsConditionsClient />;
}
