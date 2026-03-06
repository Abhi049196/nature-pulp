import type { Metadata } from "next";
import AdvisoryPageClient from "./AdvisoryPageClient";
import Index from "@/components/Advisory/Index";

export const metadata: Metadata = {
    title: "Advisory",
    description:
        "Expert insights and advisory services from Jee Origin on sustainable pulp manufacturing, agri-waste processing, and building circular economy models.",
    openGraph: {
        title: "Advisory Services | Jee Origin",
        description: "Expert advisory on sustainable pulp and paper manufacturing.",
    },
};

export default function AdvisoryPage() {
    return (
        <>
            <Index />
        </>
    )
}
