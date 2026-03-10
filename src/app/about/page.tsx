import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";
import Index from "@/components/AboutPage/Index";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Jee Origin's journey from agricultural waste to premium pulp. Discover our mission, values, and commitment to building a sustainable future.",
    alternates: {
        canonical: "https://www.jeeorigin.com/about",
    },
    openGraph: {
        title: "About Us | JEE ORIGIN",
        description:
            "Learn about Jee Origin's journey from agricultural waste to premium pulp. Discover our mission, values, and commitment to building a sustainable future.",
        url: "https://www.jeeorigin.com/about",
        images: [{ url: "/jeeorigin-og.png", width: 1200, height: 630, alt: "JEE ORIGIN - About Us" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | JEE ORIGIN",
        description: "Learn about Jee Origin's journey from agricultural waste to premium pulp.",
        images: ["/jeeorigin-og.png"],
    },
};

export default function AboutPage() {
    return (
        <>
            <Index />
        </>
    )
}
