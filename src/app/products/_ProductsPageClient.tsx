"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import {
    ArrowRight,
    CheckCircle,
    TreePine,
    Sprout,
    Recycle,
} from "lucide-react";

const productCategories = [
    {
        title: "Virgin Pulp",
        description:
            "Premium-quality virgin pulp derived from sustainably sourced agri-waste fibers. Ideal for high-grade paper, tissue, and specialty packaging applications requiring superior brightness and strength.",
        icon: "🌿",
        href: "/products/pulp",
        badge: "Premium Grade",
        features: [
            "High brightness and purity",
            "FSC-friendly sourcing",
            "Bleach-free processing",
            "Consistent fiber quality",
        ],
    },
    {
        title: "Imported Agri-Waste Pulp",
        description:
            "Sourced from diverse agricultural residues worldwide — wheat straw, rice husk, sugarcane bagasse, and more. Our imported pulp offers versatile strength characteristics for mid-range paper products.",
        icon: "🌾",
        href: "/products/pulp",
        badge: "Global Sourcing",
        features: [
            "Multi-crop fiber blends",
            "International quality standards",
            "Competitive pricing",
            "Bulk supply capability",
        ],
    },
    {
        title: "Recycled Pulp",
        description:
            "High-quality recycled pulp processed from post-consumer and post-industrial waste. A cost-effective, eco-conscious choice for corrugated packaging, newsprint, and industrial paper.",
        icon: "♻️",
        href: "/products/pulp",
        badge: "Eco-Certified",
        features: [
            "100% recycled content",
            "Reduced carbon footprint",
            "Cost-effective solution",
            "Certified sustainable",
        ],
    },
    {
        title: "Molded Solutions",
        description:
            "Premium eco-friendly molded products engineered from sustainable agri-waste fiber. Coming soon to offer superior protection and sustainability for diverse industrial applications.",
        icon: "📦",
        href: "/coming-soon",
        badge: "Coming Soon",
        features: [
            "Custom molded shapes",
            "Shock-absorbent design",
            "100% compostable",
            "Zero plastic content",
        ],
    },
    {
        title: "Kraft Solution",
        description:
            "Strong, durable carbon-neutral kraft paper products designed for heavy-duty packaging and industrial use. A sustainable alternative to traditional wood-pulp kraft paper.",
        icon: "📜",
        href: "/coming-soon",
        badge: "Coming Soon",
        features: [
            "High tensile strength",
            "Eco-friendly fiber sourcing",
            "Versatile weight GSM",
            "Natural brown finish",
        ],
    },
    {
        title: "Dippering Solution",
        description:
            "Specialized sustainable paper solutions for dipper applications, combining absorbency with wet strength. Engineered specifically for the unique needs of the industry.",
        icon: "💧",
        href: "/coming-soon",
        badge: "Coming Soon",
        features: [
            "Controlled absorbency",
            "High wet strength",
            "Uniform texture",
            "Sustainable fiber base",
        ],
    },
    {
        title: "Packaging Solution",
        description:
            "A comprehensive suite of eco-friendly packaging materials designed to replace single-use plastics and non-recyclable materials in global supply chains.",
        icon: "🎁",
        href: "/coming-soon",
        badge: "Coming Soon",
        features: [
            "Food-grade safety",
            "Biodegradable barrier tech",
            "Customizable printing",
            "Global logistics safety",
        ],
    },
];

export default function ProductsPageClient() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 warm-gradient" />
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-24 right-[12%] w-36 h-36 bg-brand-soft-green/10 rounded-full blur-2xl"
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-dark-green/5 text-brand-dark-green mb-6">
                            Our Products
                        </span>
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark-green leading-tight mb-6">
                            Sustainable Pulp{" "}
                            <span className="text-gradient">Solutions</span>
                        </h1>
                        <p className="text-lg text-brand-dark-neutral/70 leading-relaxed max-w-2xl">
                            From virgin-grade agri-waste pulp to certified recycled materials — we offer a comprehensive range of sustainable raw materials for the global paper and packaging industry.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Product Cards Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {productCategories.map((product, index) => (
                            <ProductCard
                                key={product.title}
                                title={product.title}
                                description={product.description}
                                icon={product.icon}
                                href={product.href}
                                badge={product.badge}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Product Showcase */}
            <section className="py-24 bg-brand-light-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        badge="Product Details"
                        title="Built for Performance & Planet"
                        subtitle="Each of our pulp products is engineered to meet the highest industry standards while maintaining a near-zero environmental footprint."
                    />

                    {productCategories.map((product, index) => (
                        <motion.div
                            key={product.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                } gap-12 items-center mb-20 last:mb-0`}
                        >
                            {/* Visual */}
                            <div className="lg:w-1/2">
                                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-brand-soft-green/10 shadow-lg">
                                    <div className="absolute inset-0 eco-gradient opacity-5" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <span className="text-7xl mb-4 block">{product.icon}</span>
                                            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-brand-dark-green/10 text-brand-dark-green">
                                                {product.badge}
                                            </span>
                                        </div>
                                    </div>
                                    {/* Decorative elements */}
                                    <div className="absolute top-4 right-4 w-20 h-20 bg-brand-soft-green/10 rounded-full blur-xl" />
                                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-brand-accent-brown/10 rounded-full blur-lg" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="lg:w-1/2">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-dark-green/10 text-brand-dark-green">
                                        {product.badge}
                                    </span>
                                </div>
                                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-brand-dark-green mb-4">
                                    {product.title}
                                </h3>
                                <p className="text-brand-dark-neutral/70 leading-relaxed mb-6">
                                    {product.description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {product.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center gap-3 text-sm text-brand-dark-neutral/70"
                                        >
                                            <CheckCircle className="w-5 h-5 text-brand-dark-green shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={product.href}
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-brand-dark-green text-white rounded-full font-semibold text-sm hover:bg-brand-dark-green/90 transition-all duration-300 hover:shadow-lg hover:shadow-brand-dark-green/20 group"
                                >
                                    Learn More
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Why Our Pulp */}
            <section className="py-24 eco-gradient relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <SectionHeading
                        badge="The Difference"
                        title="Why Choose Our Pulp?"
                        light
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <TreePine className="w-8 h-8" />,
                                title: "Zero Deforestation",
                                desc: "100% agri-waste based — no trees are harmed in our production process.",
                            },
                            {
                                icon: <Sprout className="w-8 h-8" />,
                                title: "Farmer-First",
                                desc: "Direct procurement from farming communities at fair market prices.",
                            },
                            {
                                icon: <Recycle className="w-8 h-8" />,
                                title: "Circular Economy",
                                desc: "Our byproducts become inputs for other industries — nothing goes to waste.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center mx-auto mb-5">
                                    {item.icon}
                                </div>
                                <h3 className="font-heading text-xl font-bold text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark-green mb-6">
                            Need Custom Specifications?
                        </h2>
                        <p className="text-brand-dark-neutral/60 mb-10">
                            Every industry has unique requirements. Let&apos;s discuss how our pulp solutions can be tailored to your specific needs.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-10 py-4 bg-brand-dark-green text-white rounded-full font-semibold hover:bg-brand-dark-green/90 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-dark-green/25 hover:-translate-y-1 group"
                        >
                            Request a Quote
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
