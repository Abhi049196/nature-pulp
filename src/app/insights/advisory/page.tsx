import type { Metadata } from "next";
import AdvisoryPageClient from "./AdvisoryPageClient";

export const metadata: Metadata = {
    title: "Advisory",
    description:
        "Expert insights and advisory services from Nature Pulp on sustainable pulp manufacturing, agri-waste processing, and building circular economy models.",
    openGraph: {
        title: "Advisory Services | Nature Pulp",
        description: "Expert advisory on sustainable pulp and paper manufacturing.",
    },
};

export default function AdvisoryPage() {
    return <AdvisoryPageClient />;
}
