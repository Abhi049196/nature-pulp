"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Box, FileText, Printer } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import DecorativeLeaf from "@/components/DecorativeLeaf";

/* ============== DATA (Original Content Maintained) ============== */
const products = [
  {
    icon: <Layers className="w-7 h-7" />,
    title: "Pulp Products",
    description:
      "Premium-grade pulp from sugarcane bagasse, wheat straw, virgin fibre, and recycled sources — engineered for consistency and strength.",
    href: "/products/pulp",
    gradient: "from-emerald-500/20 to-teal-500/10", // Enhanced gradients
  },
  {
    icon: <Box className="w-7 h-7" />,
    title: "Compostable Packaging",
    description:
      "100% biodegradable packaging solutions for food, logistics, and retail — designed to decompose, not pollute.",
    href: "/products",
    gradient: "from-orange-500/20 to-amber-500/10",
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: "Specialty Papers",
    description:
      "Bespoke paper grades for publishing, office supplies, and artisan applications — crafted with precision and planet-first principles.",
    href: "/products",
    gradient: "from-blue-500/20 to-indigo-500/10",
  },
  {
    icon: <Printer className="w-7 h-7" />,
    title: "Advanced Paper Products",
    description:
      "Next-gen paper engineered with nanocellulose technology for enhanced durability, printability, and industrial applications.",
    href: "/products",
    gradient: "from-lime-500/20 to-green-500/10",
  },
];

function ProductsOverview() {
  return (
    <section id="products-overview" className="relative py-24 bg-[#F8FAFC] overflow-hidden">
      {/* Decorative Background Elements - Design enhancement */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-brand-soft-green/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-brand-dark-green/5 blur-[120px]" />
      </div>

      <DecorativeLeaf className="w-28 h-28 top-20 left-[5%] text-brand-soft-green" rotation={15} delay={0.2} duration={11} opacity={0.1} />
      <DecorativeLeaf className="w-16 h-16 bottom-[30%] right-[10%] text-brand-dark-green" rotation={-30} delay={1.5} opacity={0.08} />
      <DecorativeLeaf className="w-20 h-20 bottom-10 left-[20%] text-brand-accent-brown" rotation={75} delay={0.8} duration={13} opacity={0.05} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionHeading
            badge="Our Products"
            title="Sustainable Solutions at Scale"
            subtitle="From raw pulp to finished paper products, our portfolio covers every stage of the sustainable paper value chain."
          />
        </div>

        {/* Product Grid with subtle staggered animation container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Wrapping ProductCard in a styled container for extra 'pop' */}
              <div className="h-full group relative bg-white rounded-3xl p-1 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
                <ProductCard {...product} index={index} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/products"
            id="products-see-all"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-brand-dark-green text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-300 shadow-xl shadow-brand-dark-green/20 hover:shadow-brand-dark-green/40 hover:-translate-y-1.5 active:scale-95"
          >
            {/* Glossy overlay effect on hover */}
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

            <span className="relative z-10">See All Solutions</span>
            <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>

          <p className="mt-6 text-sm font-medium text-slate-400 uppercase tracking-widest">
            Explore our full catalog
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ProductsOverview;