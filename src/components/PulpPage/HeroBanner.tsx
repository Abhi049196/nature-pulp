"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, Recycle, TreePine, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const highlights = [
  { icon: <Leaf className="w-4 h-4" />, text: "Agri-Waste Sourced" },
  { icon: <Recycle className="w-4 h-4" />, text: "Zero Waste Process" },
  { icon: <TreePine className="w-4 h-4" />, text: "Eco Certified" },
];

export default function HeroBanner() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center overflow-hidden">

      {/* Fallback Image (shown while video loads) */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/assets/factory.jpg"
          alt="Sustainable Pulp Factory"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none w-[110vw] h-[110vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <iframe
          src="https://player.vimeo.com/video/1171814387?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full object-cover scale-[1.05]"
          title="Background Video"
        />
      </div>

      {/* Multi-layer Overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2619]/90 via-[#0A2619]/75 to-[#0A2619]/95 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2619]/60 via-transparent to-[#0A2619]/40 z-[2]" />

      {/* Animated grain texture overlay */}
      <div className="absolute inset-0 z-[3] opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* Decorative glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-soft-green/10 rounded-full blur-[150px] z-[3]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-dark-green/15 rounded-full blur-[120px] z-[3]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
        <div className="grid lg:grid-cols-5 gap-12 items-center">

          {/* Left: Main Content (takes 3 cols) */}
          <div className="lg:col-span-3">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-8"
            >
              <span className="text-sm text-white/40 font-medium">Products</span>
              <span className="text-white/20">/</span>
              <span className="text-sm text-brand-soft-green font-semibold tracking-wide">
                Pulp Collection
              </span>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-soft-green animate-pulse" />
              <span className="text-xs font-semibold text-white/70 uppercase tracking-[0.15em]">
                Sustainable Raw Materials
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              Pulp{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-soft-green via-emerald-300 to-teal-300">
                  Collection
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-1 left-0 h-[3px] bg-gradient-to-r from-brand-soft-green to-emerald-400 rounded-full"
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-xl mb-10 font-light"
            >
              Three categories of sustainable pulp, each engineered for specific
              industry needs. All derived from agricultural waste, all contributing
              to a circular economy.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-soft-green to-emerald-400 text-[#0A2619] rounded-full font-bold text-base shadow-[0_8px_30px_rgba(165,187,160,0.3)] hover:shadow-[0_12px_40px_rgba(165,187,160,0.45)] hover:-translate-y-1 transition-all duration-300"
              >
                Request Samples
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-semibold text-base hover:bg-white/[0.06] hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
              >
                Learn About Our Process
              </Link>
            </motion.div>

            {/* Highlight pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm"
                >
                  <span className="text-brand-soft-green">{item.icon}</span>
                  <span className="text-xs font-medium text-white/50">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating Stats Panel (takes 2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="relative">
              {/* Glass card */}
              <div className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-[2rem] p-8 space-y-6">
                {/* Card header */}
                <div className="flex items-center gap-3 pb-6 border-b border-white/[0.06]">
                  <div className="w-10 h-10 rounded-xl bg-brand-soft-green/20 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-brand-soft-green" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Pulp Portfolio</p>
                    <p className="text-xs text-white/40">3 Product Categories</p>
                  </div>
                </div>

                {/* Stats */}
                {[
                  { label: "Virgin Pulp", brightness: "70-85%", badge: "Premium", color: "from-emerald-400 to-teal-400" },
                  { label: "Imported Agri-Waste", brightness: "65-75%", badge: "Versatile", color: "from-amber-400 to-orange-400" },
                  { label: "Recycled Pulp", brightness: "60-72%", badge: "Eco-Certified", color: "from-blue-400 to-indigo-400" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.15 }}
                    className="group flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300 cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${item.color}`} />
                      <div>
                        <p className="text-sm font-semibold text-white/90">{item.label}</p>
                        <p className="text-xs text-white/40">Brightness: {item.brightness} ISO</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/30 bg-white/[0.05] px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </motion.div>
                ))}

                {/* Bottom note */}
                <div className="pt-4 border-t border-white/[0.06] text-center">
                  <p className="text-xs text-white/30 italic">
                    "All pulp grades sourced from agricultural waste"
                  </p>
                </div>
              </div>

              {/* Decorative glow behind card */}
              <div className="absolute -inset-4 bg-brand-soft-green/5 rounded-[3rem] blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
          Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}