import type { Metadata } from "next";
import ComingSoonClient from "./ComingSoonClient";

export const metadata: Metadata = {
    title: "Coming Soon",
    description: "This page is under development. Innovation is underway at JEE ORIGIN.",
    alternates: {
        canonical: "https://www.jeeorigin.com/coming-soon",
    },
    openGraph: {
        title: "Coming Soon | JEE ORIGIN",
        description: "This page is under development. Innovation is underway at JEE ORIGIN.",
        url: "https://www.jeeorigin.com/coming-soon",
        images: [{ url: "/jeeorigin-og.png", width: 1200, height: 630, alt: "JEE ORIGIN - Coming Soon" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Coming Soon | JEE ORIGIN",
        description: "Innovation is underway at JEE ORIGIN.",
        images: ["/jeeorigin-og.png"],
    },
};

export default function ComingSoonPage() {
    return <ComingSoonClient />;
}
