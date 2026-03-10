import type { Metadata } from "next";
import CareerPageClient from "./CareerPageClient";

export const metadata: Metadata = {
    title: "Careers",
    description:
        "Join Jee Origin and help build the future of sustainable paper manufacturing. Explore career opportunities in pulp technology, sustainability, and more.",
    alternates: {
        canonical: "https://www.jeeorigin.com/insights/career",
    },
    openGraph: {
        title: "Careers | JEE ORIGIN",
        description: "Join Jee Origin and help build the future of sustainable paper manufacturing. Explore career opportunities.",
        url: "https://www.jeeorigin.com/insights/career",
        images: [{ url: "/jeeorigin-og.png", width: 1200, height: 630, alt: "JEE ORIGIN - Careers" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Careers | JEE ORIGIN",
        description: "Join us in building a sustainable future. Explore open positions.",
        images: ["/jeeorigin-og.png"],
    },
};

export default function CareerPage() {
    return <CareerPageClient />;
}
