import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";
import Index from "@/components/AboutPage/Index";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Jee Origin's journey from agricultural waste to premium pulp. Discover our mission, values, and commitment to building a sustainable future.",
    openGraph: {
        title: "About Us | Jee Origin",
        description:
            "Learn about Jee Origin's journey from agricultural waste to premium pulp.",
    },
};

export default function AboutPage() {
    return (
        <>
            <Index />
        </>
    )
}
