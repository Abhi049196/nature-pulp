import type { Metadata } from "next";
import PulpPageClient from "./PulpPageClient";
import Index from "@/components/PulpPage/Index";

export const metadata: Metadata = {
    title: "Pulp Products",
    description:
        "Discover Nature Pulp's complete range of pulp products — virgin, imported agri-waste, and recycled pulp. Sustainable, high-quality raw materials for the paper and packaging industry.",
    openGraph: {
        title: "Pulp Products | Nature Pulp",
        description:
            "Complete range of sustainable pulp products for paper and packaging.",
    },
};

export default function PulpPage() {
    return (
        <>
        <Index />
        </>
    )
}
