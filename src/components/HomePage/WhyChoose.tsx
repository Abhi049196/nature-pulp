"use client";

import { motion } from "framer-motion";
import { Leaf, Cpu, Users, Zap } from "lucide-react";
import DecorativeLeaf from "@/components/DecorativeLeaf";

const whyChooseUs = [
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Diverse, Sustainable Sourcing",
    description:
      "Agro-waste, imported pulp, virgin pulp, recycled pulp, and ethical wood for zero-waste impact. Our multi-source strategy ensures unmatched supply resilience.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Technological Leadership",
    description:
      "AI, IoT, and nanocellulose technology drive smarter, greener production — optimizing every stage from fibre processing to final output.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Global Rural Empowerment",
    description:
      "Sourcing agri-waste locally and globally to uplift farming communities, creating fair-income livelihoods for thousands of families.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Scalable Solutions",
    description:
      "High-performance products for industries worldwide, engineered for scale with consistent quality and competitive pricing.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-20 bg-[#f7f9f8] overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-soft-green/5 rounded-full blur-[140px]" />

      {/* Decorative Leaves */}
      <DecorativeLeaf className="w-16 h-16 top-10 left-[10%] text-brand-soft-green" rotation={30} delay={0.5} opacity={0.15} />
      <DecorativeLeaf className="w-24 h-24 bottom-20 right-[5%] text-brand-dark-green" rotation={-45} delay={1.2} duration={10} opacity={0.05} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-brand-dark-green mb-4">
            The Jee Origin Advantage
          </h2>
          <p className="text-lg text-brand-dark-neutral/60 max-w-2xl">
            We're not just a pulp manufacturer — we're building the infrastructure for a sustainable paper economy that benefits people, planet, and profit.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-6 md:p-10 rounded-3xl bg-white border border-brand-soft-green/10 shadow-sm hover:shadow-2xl hover:shadow-brand-dark-green/10 transition-all duration-500"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-dark-green text-white flex items-center justify-center font-bold text-base md:text-lg shadow-lg z-10">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-brand-dark-green/10 text-brand-dark-green flex items-center justify-center mb-6 group-hover:bg-brand-dark-green group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-brand-dark-green mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-brand-dark-neutral/60 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}