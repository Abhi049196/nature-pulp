import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Jee Origin's privacy policy details how we collect, use, and protect your personal information.",
    openGraph: {
        title: "Privacy Policy | Jee Origin",
        description: "Our commitment to protecting your personal information.",
    },
};

export default function PrivacyPolicyPage() {
    return <PrivacyPolicyClient />;
}
