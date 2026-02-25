import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Nature Pulp's privacy policy details how we collect, use, and protect your personal information.",
    openGraph: {
        title: "Privacy Policy | Nature Pulp",
        description: "Our commitment to protecting your personal information.",
    },
};

export default function PrivacyPolicyPage() {
    return <PrivacyPolicyClient />;
}
