import type { Metadata } from "next";
import CareerPageClient from "./CareerPageClient";

export const metadata: Metadata = {
    title: "Careers",
    description:
        "Join Jee Origin and help build the future of sustainable paper manufacturing. Explore career opportunities in pulp technology, sustainability, and more.",
    openGraph: {
        title: "Careers | Jee Origin",
        description: "Join us in building a sustainable future. Explore open positions.",
    },
};

export default function CareerPage() {
    return <CareerPageClient />;
}
