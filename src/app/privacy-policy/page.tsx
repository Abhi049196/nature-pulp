import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Jee Origin's privacy policy details how we collect, use, and protect your personal information.",
    alternates: {
        canonical: "https://www.jeeorigin.com/privacy-policy",
    },
    openGraph: {
        title: "Privacy Policy | JEE ORIGIN",
        description: "Jee Origin's privacy policy details how we collect, use, and protect your personal information.",
        url: "https://www.jeeorigin.com/privacy-policy",
        images: [{ url: "/jeeorigin-og.png", width: 1200, height: 630, alt: "JEE ORIGIN - Privacy Policy" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | JEE ORIGIN",
        description: "Our commitment to protecting your personal information.",
        images: ["/jeeorigin-og.png"],
    },
};

export default function PrivacyPolicyPage() {
    return <PrivacyPolicyClient />;
}
