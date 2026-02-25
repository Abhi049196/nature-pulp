import type { Metadata } from "next";
import TeamPageClient from "./TeamPageClient";

export const metadata: Metadata = {
    title: "Our Team",
    description:
        "Meet the passionate team behind Nature Pulp — experts in sustainable manufacturing, agricultural science, and circular economy innovation.",
    openGraph: {
        title: "Our Team | Nature Pulp",
        description: "Meet the team driving sustainable pulp innovation.",
    },
};

export default function TeamPage() {
    return <TeamPageClient />;
}
