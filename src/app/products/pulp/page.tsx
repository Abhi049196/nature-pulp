import type { Metadata } from "next";
import PulpPageClient from "./PulpPageClient";
import Index from "@/components/PulpPage/Index";

export const metadata: Metadata = {
    title: "Pulp Products",
    description:
        "Discover Jee Origin's complete range of pulp products — virgin, imported agri-waste, and recycled pulp. Sustainable, high-quality raw materials for the paper and packaging industry.",
    alternates: {
        canonical: "https://www.jeeorigin.com/products/pulp",
    },
    openGraph: {
        title: "Pulp Products | JEE ORIGIN",
        description: "Discover Jee Origin's complete range of sustainable pulp products — virgin, imported agri-waste, and recycled pulp for paper and packaging.",
        url: "https://www.jeeorigin.com/products/pulp",
        images: [{ url: "/jeeorigin-og.png", width: 1200, height: 630, alt: "JEE ORIGIN - Pulp Products" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Pulp Products | JEE ORIGIN",
        description: "Complete range of sustainable pulp products for paper and packaging.",
        images: ["/jeeorigin-og.png"],
    },
};

export default function PulpPage() {
    return (
        <>
            <Index />
        </>
    )
}
