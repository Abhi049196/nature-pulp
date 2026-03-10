import type { Metadata } from "next";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
    title: "Gallery",
    description:
        "Explore Jee Origin's visual journey — from farm fields to factory floors, see sustainability in action through our photo gallery.",
    alternates: {
        canonical: "https://www.jeeorigin.com/insights/gallery",
    },
    openGraph: {
        title: "Gallery | JEE ORIGIN",
        description: "Explore Jee Origin's visual journey — from farm fields to factory floors, see sustainability in action.",
        url: "https://www.jeeorigin.com/insights/gallery",
        images: [{ url: "/jeeorigin-og.png", width: 1200, height: 630, alt: "JEE ORIGIN - Gallery" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Gallery | JEE ORIGIN",
        description: "See sustainability in action. Explore our visual story.",
        images: ["/jeeorigin-og.png"],
    },
};

export default function GalleryPage() {
    return <GalleryPageClient />;
}
