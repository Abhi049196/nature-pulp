import type { Metadata } from "next";
import ProductsPageClient from "./_ProductsPageClient";

export const metadata: Metadata = {
    title: "Products",
    description:
        "Explore Jee Origin's range of sustainable pulp products — virgin pulp, imported agri-waste pulp, and recycled pulp solutions for packaging, paper mills, and FMCG.",
    openGraph: {
        title: "Our Products | Jee Origin",
        description:
            "Sustainable pulp products for packaging, paper mills, and FMCG industries.",
    },
};

export default function ProductsPage() {
    return <ProductsPageClient />;
}
