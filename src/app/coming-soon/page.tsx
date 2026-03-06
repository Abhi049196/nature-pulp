import type { Metadata } from "next";
import ComingSoonClient from "./ComingSoonClient";

export const metadata: Metadata = {
    title: "Coming Soon",
    description: "This page is under development. Innovation is underway at Jee Origin.",
};

export default function ComingSoonPage() {
    return <ComingSoonClient />;
}
