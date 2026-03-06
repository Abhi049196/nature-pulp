"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="pt-2 px-4 md:px-8 bg-white">
      <div className="relative max-w-8xl mx-auto">

        {/* Green Rounded Block */}
        <div className="relative bg-brand-dark-green rounded-t-[60px] px-8 md:px-16 py-16 md:py-20 overflow-hidden">

          {/* Subtle radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative text-center"
          >

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                <Target className="w-7 h-7 text-white" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Join Our Mission
            </h2>

            {/* Paragraph */}
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you&apos;re a buyer, farmer, investor, or simply someone who cares — we&apos;d love to have you on this journey.
            </p>

            {/* Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-brand-dark-green rounded-full font-semibold text-base transition-all duration-300 hover:bg-white/90 hover:-translate-y-1 hover:shadow-2xl"
            >
              Get in Touch
            </Link>

          </motion.div>
        </div>

      </div>
    </section>
  );
}