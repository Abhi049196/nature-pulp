"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, Recycle, TreePine, ChevronDown, Users, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const highlights = [
  { icon: <Leaf className="w-4 h-4" />, text: "Agri-Waste Sourced" },
  { icon: <Recycle className="w-4 h-4" />, text: "Zero Waste Process" },
  { icon: <TreePine className="w-4 h-4" />, text: "Eco Certified" },
];

const floatingStats = [
  {
    icon: <Leaf className="w-5 h-5 text-brand-soft-green" />,
    label: "Sustainable",
    value: "Zero Waste",
    position: "top-16 right-8",
    delay: 0.6,
    animDuration: 4,
    animDir: [-10, 10, -10] as number[],
  },
  {
    icon: <Users className="w-5 h-5 text-amber-400" />,
    label: "Empowering",
    value: "10M+ Farmers",
    position: "bottom-28 left-0",
    delay: 0.8,
    animDuration: 5,
    animDir: [10, -10, 10] as number[],
  },
  {
    icon: <Globe className="w-5 h-5 text-emerald-300" />,
    label: "Eco-Friendly",
    value: "Chemical-Free",
    position: "top-1/2 -right-4",
    delay: 1.0,
    animDuration: 6,
    animDir: [-8, 8, -8] as number[],
  },
];

export default function HeroBanner() {
  return (
    <section className="relative h-[100dvh] min-h-[700px] flex items-center overflow-hidden">

      {/* Fallback Image (shown while video loads) */}
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/assets/hero.webp"
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
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-32 sm:pt-24 pb-20 sm:pb-12">
        <div className="grid lg:grid-cols-5 gap-10 sm:gap-12 items-center">

          {/* Left: Main Content (takes 3 cols) */}
          <div className="lg:col-span-3">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6 sm:mb-8"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-sm mb-6 sm:mb-8 self-start"
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
              className="font-heading text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-4 sm:mb-6"
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
              className="text-[15px] sm:text-lg lg:text-xl text-white/60 leading-relaxed max-w-xl mb-8 sm:mb-10 font-light"
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
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:px-8 sm:py-4 bg-gradient-to-r from-brand-soft-green to-emerald-400 text-[#0A2619] rounded-full font-bold text-sm sm:text-base shadow-[0_8px_30px_rgba(165,187,160,0.3)] hover:shadow-[0_12px_40px_rgba(165,187,160,0.45)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
              >
                Request Samples
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#process"
                className="inline-flex items-center justify-center px-8 py-3.5 sm:px-8 sm:py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold text-sm sm:text-base border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
              >
                Learn About Our Process
              </Link>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 sm:gap-6 pt-6 border-t border-white/10"
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

          {/* Right Column — Circular Hero Image with Floating Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Central hero image circle */}
              <div className="absolute inset-12 rounded-full overflow-hidden border border-white/[0.1] shadow-[0_0_60px_rgba(16,185,129,0.15)]">
                <Image
                  src="/assets/hero.webp"
                  alt="Nature Pulp Sustainable Product"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A2619]/40" />
              </div>
              <div className="absolute inset-12 rounded-full bg-brand-soft-green/5 blur-2xl animate-pulse" />

              {/* Floating stat cards */}
              {floatingStats.map((stat) => (
                <motion.div
                  key={stat.value}
                  animate={{ y: stat.animDir }}
                  transition={{ duration: stat.animDuration, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute ${stat.position} z-10`}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: stat.delay }}
                    className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-xs text-white/50">{stat.label}</p>
                      <p className="text-sm font-bold text-white">{stat.value}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Central rotating element */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="w-24 h-24 rounded-full border border-white/[0.04] flex items-center justify-center"
                >
                  <Leaf className="w-10 h-10 text-white/[0.08]" />
                </motion.div>
              </div>

              {/* Orbiting ring */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 rounded-full border border-dashed border-white/[0.04] pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2"
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