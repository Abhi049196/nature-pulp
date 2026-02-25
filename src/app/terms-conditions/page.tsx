import type { Metadata } from "next";
import TermsConditionsClient from "./TermsConditionsClient";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description:
        "Read the terms and conditions governing the use of Nature Pulp's website and services.",
    openGraph: {
        title: "Terms & Conditions | Nature Pulp",
        description: "Terms governing the use of our website and services.",
    },
};

export default function TermsConditionsPage() {
    return <TermsConditionsClient />;
}
