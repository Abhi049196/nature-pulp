import type { Metadata } from "next";
import TermsConditionsClient from "./TermsConditionsClient";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description:
        "Read the terms and conditions governing the use of Jee Origin's website and services.",
    openGraph: {
        title: "Terms & Conditions | Jee Origin",
        description: "Terms governing the use of our website and services.",
    },
};

export default function TermsConditionsPage() {
    return <TermsConditionsClient />;
}
