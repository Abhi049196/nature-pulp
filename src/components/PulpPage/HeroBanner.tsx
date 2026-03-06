"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative h-[420px] md:h-[460px] flex items-center overflow-hidden pt-20">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/factory.jpg"  // <-- apni image path daalna
          alt="Pulp Collection"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-white"
        >

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-white/70">
            <Link
              href="/products"
              className="text-sm hover:text-white transition-colors"
            >
              Products
            </Link>
            <span>/</span>
            <span className="text-sm font-medium text-white">
              Pulp
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Pulp <span className="text-brand-soft-green">Collection</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
            Three categories of sustainable pulp, each engineered for specific industry needs. All derived from agricultural waste, all contributing to a circular economy.
          </p>

        </motion.div>
      </div>
    </section>
  );
}