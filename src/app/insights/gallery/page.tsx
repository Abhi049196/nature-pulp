import type { Metadata } from "next";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
    title: "Gallery",
    description:
        "Explore Jee Origin's visual journey — from farm fields to factory floors, see sustainability in action through our photo gallery.",
    openGraph: {
        title: "Gallery | Jee Origin",
        description: "See sustainability in action. Explore our visual story.",
    },
};

export default function GalleryPage() {
    return <GalleryPageClient />;
}
