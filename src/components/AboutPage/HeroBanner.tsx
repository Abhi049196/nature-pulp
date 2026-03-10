"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative h-[420px] md:h-[460px] flex items-center overflow-hidden pt-20">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero.webp"
          alt="About Jee Origin - Sustainable Pulp Manufacturing"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover"
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
              href="/"
              className="text-sm hover:text-white transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <span className="text-sm font-medium text-white">
              About
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Waste Is an <span className="text-brand-soft-green"> Opportunity</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
            At Jee Origin, we see possibility where others see waste. We are transforming agricultural residue into high-quality, sustainable pulp that serves industries worldwide.
          </p>

        </motion.div>
      </div>
    </section>
  );
}