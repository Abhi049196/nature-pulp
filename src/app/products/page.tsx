import type { Metadata } from "next";
import ProductsPageClient from "./ProductsPageClient";

export const metadata: Metadata = {
    title: "Products",
    description:
        "Explore Nature Pulp's range of sustainable pulp products — virgin pulp, imported agri-waste pulp, and recycled pulp solutions for packaging, paper mills, and FMCG.",
    openGraph: {
        title: "Our Products | Nature Pulp",
        description:
            "Sustainable pulp products for packaging, paper mills, and FMCG industries.",
    },
};

export default function ProductsPage() {
    return <ProductsPageClient />;
}
