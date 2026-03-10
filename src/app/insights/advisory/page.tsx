import type { Metadata } from "next";
import AdvisoryPageClient from "./AdvisoryPageClient";
import Index from "@/components/Advisory/Index";

export const metadata: Metadata = {
    title: "Advisory",
    description:
        "Expert insights and advisory services from Jee Origin on sustainable pulp manufacturing, agri-waste processing, and building circular economy models.",
    alternates: {
        canonical: "https://www.jeeorigin.com/insights/advisory",
    },
    openGraph: {
        title: "Advisory Services | JEE ORIGIN",
        description: "Expert insights and advisory services on sustainable pulp manufacturing, agri-waste processing, and circular economy models.",
        url: "https://www.jeeorigin.com/insights/advisory",
        images: [{ url: "/jeeorigin-og.png", width: 1200, height: 630, alt: "JEE ORIGIN - Advisory Services" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Advisory Services | JEE ORIGIN",
        description: "Expert advisory on sustainable pulp and paper manufacturing.",
        images: ["/jeeorigin-og.png"],
    },
};

export default function AdvisoryPage() {
    return (
        <>
            <Index />
        </>
    )
}
