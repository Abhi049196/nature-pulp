"use client";

import { motion } from "framer-motion";
import { Globe, Recycle, Heart, Cpu } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import DecorativeLeaf from "@/components/DecorativeLeaf";

/* ============== DATA (Original Content Preserved) ============== */
const sustainabilityPillars = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Sustainable Sourcing",
    description: "Multi-continent agri-waste procurement ensures supply resilience while reducing deforestation.",
  },
  {
    icon: <Recycle className="w-6 h-6" />,
    title: "Zero-Waste Innovation",
    description: "Every byproduct is reused, recycled, or upcycled into a new product line — nothing goes to waste.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Rural Empowerment",
    description: "Fair-price procurement of agri-waste creates sustainable income for farming communities worldwide.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Technological Excellence",
    description: "AI-optimized processes and IoT monitoring ensure peak efficiency with minimal environmental footprint.",
  },
];

const sustainabilityStats = [
  {
    target: 10,
    suffix: "M+",
    label: "Tons Waste Diverted",
    description: "Agricultural waste transformed into premium pulp products",
    icon: "♻️",
  },
  {
    target: 10,
    suffix: "M",
    label: "Trees Saved",
    description: "Preventing deforestation through sustainable sourcing",
    icon: "🌳",
  },
  {
    target: 1,
    suffix: "M+",
    label: "CO2 Carbon Credit",
    description: "Significant contribution to global carbon reduction",
    icon: "💎",
  },
  {
    target: 2,
    suffix: "X",
    label: "Farmers Income Increase",
    description: "Doubling rural earnings through waste procurement",
    icon: "📈",
  },
  {
    target: 100000,
    suffix: "+",
    label: "Farmers Empowered",
    description: "Rural communities benefiting from our waste procurement",
    icon: "🌾",
  },
  {
    target: 100,
    suffix: "%",
    label: "Net-Zero Emissions",
    description: "Committed to net zero emissions by 2035",
    icon: "🌍",
  },
  {
    target: 5,
    suffix: "M",
    label: "Hectares Restored",
    description: "Contributing to reforestation and land restoration",
    icon: "🌿",
  },
];

function SustainabilityCommitment() {
  return (
    <section id="sustainability" className="relative py-24 bg-[#0A2619] overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-soft-green/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-brand-dark-green/30 rounded-full blur-[120px]" />
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        {/* Floating Leaves */}
        <DecorativeLeaf className="w-32 h-32 top-10 right-[15%] text-brand-soft-green" rotation={45} delay={0.5} duration={12} opacity={0.15} />
        <DecorativeLeaf className="w-24 h-24 top-1/2 left-[5%] text-brand-dark-green" rotation={-25} delay={1.8} duration={10} opacity={0.1} />
        <DecorativeLeaf className="w-16 h-16 bottom-[10%] right-[30%] text-white" rotation={80} delay={0.3} duration={14} opacity={0.08} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <SectionHeading
            badge="Sustainability"
            title="Our Commitment to the Planet"
            subtitle="Sustainability isn't a checkbox — it's the foundation of everything we build."
            light
          />
        </div>

        {/* Pillars - Refined Glassmorphism */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
          {sustainabilityPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-soft-green/50 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-soft-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-brand-soft-green mb-6 group-hover:scale-110 group-hover:bg-brand-soft-green group-hover:text-white transition-all duration-500 shadow-lg">
                  {pillar.icon}
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-3 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2035 Pledge Stats Section */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-soft-green/20 text-brand-soft-green text-xs font-bold uppercase tracking-[0.2em] mb-4">
              The Roadmap
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Our 2035 Pledge
            </h3>
            <div className="w-24 h-1 bg-brand-soft-green mx-auto rounded-full mb-4" />
            <p className="max-w-2xl mx-auto text-white/50 text-base italic">
              "Measurable goals. Tangible impact."
            </p>
          </motion.div>

          {/* Stats Slider - Auto-scrolling and draggable */}
          <div className="relative group">
            <div className="overflow-hidden bg-white/[0.02] border border-white/5 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 backdrop-blur-md">
              <motion.div
                className="flex gap-8 sm:gap-10"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 30,
                  ease: "linear",
                  repeat: Infinity,
                }}
                whileHover={{ animationPlayState: "paused" }}
                style={{ width: "fit-content" }}
              >
                {/* Doubling the items for a seamless loop */}
                {[...sustainabilityStats, ...sustainabilityStats].map((stat, idx) => (
                  <div
                    key={`${stat.label}-${idx}`}
                    className="flex-shrink-0 w-[280px] sm:w-[320px] relative"
                  >
                    <AnimatedCounter {...stat} index={idx} />
                    {/* Vertical Divider for Desktop (only if it's not the last item in the viewport) */}
                    <div className="absolute top-1/4 right-[-20px] w-[1px] h-1/2 bg-white/10 hidden sm:block" />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Fade effect on edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A2619] to-transparent z-10 pointer-events-none rounded-l-[40px]" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A2619] to-transparent z-10 pointer-events-none rounded-r-[40px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SustainabilityCommitment;