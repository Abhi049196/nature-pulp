import type { Metadata } from "next";
import TeamPageClient from "./TeamPageClient";
import Index from "@/components/TeamPage/Index";

export const metadata: Metadata = {
    title: "Our Team",
    description:
        "Meet the passionate team behind Jee Origin — experts in sustainable manufacturing, agricultural science, and circular economy innovation.",
    openGraph: {
        title: "Our Team | Jee Origin",
        description: "Meet the team driving sustainable pulp innovation.",
    },
};

export default function TeamPage() {
    return (
        <>
            <Index />
        </>
    )
}
