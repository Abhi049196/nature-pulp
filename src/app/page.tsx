"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Leaf,
  Recycle,
  Globe,
  Zap,
  Shield,
  ArrowRight,
  TreePine,
  Factory,
  Package,
  Droplets,
  Heart,
  Target,
} from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";

const whyChooseUs = [
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Agri-Waste Innovation",
    description:
      "We convert agricultural waste — wheat straw, rice husk, sugarcane bagasse — into world-class pulp, reducing dependence on forests.",
  },
  {
    icon: <Recycle className="w-6 h-6" />,
    title: "Circular Economy Model",
    description:
      "Our zero-waste approach ensures every byproduct is reused, recycled, or upcycled into a new product line.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Standards",
    description:
      "Meeting international quality benchmarks with FSC-friendly, bleach-free, and toxin-free production processes.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Technology-Driven",
    description:
      "State-of-the-art machinery and R&D capabilities enable us to deliver consistent quality at competitive pricing.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Supply Chain Trust",
    description:
      "Reliable sourcing, transparent operations, and long-term partner relationships built on trust and performance.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Rural Empowerment",
    description:
      "Creating livelihoods for thousands of farming communities by buying their agricultural waste at fair prices.",
  },
];

const industries = [
  { icon: <Package className="w-8 h-8" />, name: "Packaging", desc: "Sustainable packaging solutions" },
  { icon: <Factory className="w-8 h-8" />, name: "Paper Mills", desc: "Premium raw material supply" },
  { icon: <Droplets className="w-8 h-8" />, name: "FMCG", desc: "Eco-friendly consumer goods" },
  { icon: <TreePine className="w-8 h-8" />, name: "Textiles", desc: "Natural fiber alternatives" },
  { icon: <Globe className="w-8 h-8" />, name: "Agriculture", desc: "Waste-to-value partnerships" },
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
    target: 100000,
    suffix: "+",
    label: "Farmers Empowered",
    description: "Rural communities benefiting from our waste procurement",
    icon: "🌾",
  },
  {
    target: 100,
    suffix: "%",
    label: "Net Zero Target",
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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Why Choose Nature Pulp */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why Choose Us"
            title="The Nature Pulp Advantage"
            subtitle="We're not just a pulp manufacturer — we're building the infrastructure for a sustainable paper economy that benefits people, planet, and profit."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-brand-light-bg hover:bg-white border border-transparent hover:border-brand-soft-green/20 hover:shadow-xl hover:shadow-brand-dark-green/5 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-dark-green/10 text-brand-dark-green flex items-center justify-center mb-5 group-hover:bg-brand-dark-green group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-dark-green mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-dark-neutral/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-brand-light-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-soft-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-dark-green/5 text-brand-dark-green mb-4">
                Our Mission
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark-green mb-6 leading-tight">
                Transforming Waste into{" "}
                <span className="text-gradient">Opportunity</span>
              </h2>
              <p className="text-brand-dark-neutral/70 leading-relaxed mb-6">
                At Nature Pulp, our mission is to transform the global paper industry through radical sustainability. By sourcing agricultural waste from farming communities, we create premium-grade pulp that rivals traditional wood-based products — while protecting forests, empowering farmers, and reducing carbon emissions.
              </p>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-brand-soft-green/20">
                <Target className="w-10 h-10 text-brand-accent-brown shrink-0" />
                <div>
                  <p className="font-heading font-bold text-brand-dark-green">
                    2035 Vision
                  </p>
                  <p className="text-sm text-brand-dark-neutral/60">
                    To become the world&apos;s largest agri-waste pulp manufacturer, proving that sustainability and profitability are not mutually exclusive.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="p-6 rounded-3xl eco-gradient text-white">
                    <Leaf className="w-8 h-8 mb-3 opacity-80" />
                    <h4 className="font-heading font-bold text-lg mb-1">Sustainability</h4>
                    <p className="text-white/70 text-sm">Every product we make heals the planet</p>
                  </div>
                  <div className="p-6 rounded-3xl bg-white border border-brand-soft-green/20 shadow-sm">
                    <Zap className="w-8 h-8 mb-3 text-brand-accent-brown" />
                    <h4 className="font-heading font-bold text-lg text-brand-dark-green mb-1">Innovation</h4>
                    <p className="text-brand-dark-neutral/60 text-sm">Cutting-edge technology meets nature</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="p-6 rounded-3xl bg-white border border-brand-soft-green/20 shadow-sm">
                    <Heart className="w-8 h-8 mb-3 text-brand-dark-green" />
                    <h4 className="font-heading font-bold text-lg text-brand-dark-green mb-1">Empowerment</h4>
                    <p className="text-brand-dark-neutral/60 text-sm">Uplifting rural farming communities</p>
                  </div>
                  <div className="p-6 rounded-3xl bg-brand-accent-brown/10 border border-brand-accent-brown/20">
                    <Globe className="w-8 h-8 mb-3 text-brand-earth-brown" />
                    <h4 className="font-heading font-bold text-lg text-brand-dark-green mb-1">Climate Action</h4>
                    <p className="text-brand-dark-neutral/60 text-sm">Net zero by 2035 — our promise</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our 2035 Pledge - Sustainability Stats */}
      <section className="py-24 eco-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            badge="Our 2035 Pledge"
            title="Building a World Without Waste"
            subtitle="Measurable goals. Tangible impact. Every metric tells the story of waste transformed into value."
            light
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityStats.map((stat, index) => (
              <AnimatedCounter key={stat.label} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Industries"
            title="Serving Global Industries"
            subtitle="From packaging to paper mills, our sustainable pulp solutions power industries across the value chain."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group text-center p-6 rounded-3xl bg-brand-light-bg hover:bg-white border border-transparent hover:border-brand-soft-green/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-dark-green/10 text-brand-dark-green flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-dark-green group-hover:text-white transition-all duration-300">
                  {industry.icon}
                </div>
                <h3 className="font-heading font-bold text-brand-dark-green mb-1">
                  {industry.name}
                </h3>
                <p className="text-xs text-brand-dark-neutral/50">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-accent-brown/10 text-brand-accent-brown mb-6">
              Let&apos;s Build Together
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark-green mb-6 leading-tight">
              Ready to Make Paper That{" "}
              <span className="text-gradient">Matters?</span>
            </h2>
            <p className="text-lg text-brand-dark-neutral/60 mb-10 max-w-2xl mx-auto">
              Whether you&apos;re a paper mill, packaging company, or sustainability-driven brand — partner with us to build a future where every sheet of paper tells a story of regeneration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-brand-dark-green text-white rounded-full font-semibold text-base hover:bg-brand-dark-green/90 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-dark-green/25 hover:-translate-y-1"
              >
                Contact Our Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-brand-dark-green text-brand-dark-green rounded-full font-semibold text-base hover:bg-brand-dark-green/5 transition-all duration-300"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
