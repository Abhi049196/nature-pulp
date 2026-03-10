import type { Metadata } from "next";
import TeamPageClient from "./TeamPageClient";
import Index from "@/components/TeamPage/Index";

export const metadata: Metadata = {
    title: "Our Team",
    description:
        "Meet the passionate team behind Jee Origin — experts in sustainable manufacturing, agricultural science, and circular economy innovation.",
    alternates: {
        canonical: "https://www.jeeorigin.com/insights/team",
    },
    openGraph: {
        title: "Our Team | JEE ORIGIN",
        description: "Meet the passionate team behind Jee Origin — experts in sustainable manufacturing, agricultural science, and circular economy innovation.",
        url: "https://www.jeeorigin.com/insights/team",
        images: [{ url: "/jeeorigin-og.png", width: 1200, height: 630, alt: "JEE ORIGIN - Our Team" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Team | JEE ORIGIN",
        description: "Meet the team driving sustainable pulp innovation.",
        images: ["/jeeorigin-og.png"],
    },
};

export default function TeamPage() {
    return (
        <>
            <Index />
        </>
    )
}
