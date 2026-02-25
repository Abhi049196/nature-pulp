"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Leaf,
  Recycle,
  Globe,
  Zap,
  ArrowRight,
  TreePine,
  Factory,
  Package,
  Droplets,
  Heart,
  Target,
  Cpu,
  Users,
  Wheat,
  BookOpen,
  Monitor,
  ShoppingCart,
  UtensilsCrossed,
  Printer,
  Box,
  FileText,
  Layers,
} from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import ProductCard from "@/components/ProductCard";

/* ============== DATA ============== */

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

const products = [
  {
    icon: <Layers className="w-7 h-7" />,
    title: "Pulp Products",
    description:
      "Premium-grade pulp from sugarcane bagasse, wheat straw, virgin fibre, and recycled sources — engineered for consistency and strength.",
    href: "/products/pulp",
    gradient: "from-brand-dark-green/5 to-brand-soft-green/10",
  },
  {
    icon: <Box className="w-7 h-7" />,
    title: "Compostable Packaging",
    description:
      "100% biodegradable packaging solutions for food, logistics, and retail — designed to decompose, not pollute.",
    href: "/products",
    gradient: "from-brand-accent-brown/5 to-brand-earth-brown/10",
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: "Specialty Papers",
    description:
      "Bespoke paper grades for publishing, office supplies, and artisan applications — crafted with precision and planet-first principles.",
    href: "/products",
    gradient: "from-brand-soft-green/10 to-brand-dark-green/5",
  },
  {
    icon: <Printer className="w-7 h-7" />,
    title: "Advanced Paper Products",
    description:
      "Next-gen paper engineered with nanocellulose technology for enhanced durability, printability, and industrial applications.",
    href: "/products",
    gradient: "from-brand-earth-brown/5 to-brand-accent-brown/10",
  },
];

const industries = [
  {
    icon: <UtensilsCrossed className="w-8 h-8" />,
    name: "Food & Beverage",
    desc: "Sustainable food-grade packaging",
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    name: "E-commerce & Logistics",
    desc: "Eco-friendly shipping solutions",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    name: "Publishing & Office",
    desc: "Premium sustainable paper",
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    name: "Electronics & Industrial",
    desc: "Specialized protective packaging",
  },
  {
    icon: <Factory className="w-8 h-8" />,
    name: "Pulp & Paper Manufacturing",
    desc: "Raw material supply partner",
  },
];

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

/* ============== PAGE ============== */

export default function HomePage() {
  return (
    <>
      {/* ─── 1. Hero Section ─── */}
      <Hero />

      {/* ─── 2. Why Choose Nature Pulp ─── */}
      <section id="why-choose-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why Choose Us"
            title="The Nature Pulp Advantage"
            subtitle="We're not just a pulp manufacturer — we're building the infrastructure for a sustainable paper economy that benefits people, planet, and profit."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-brand-light-bg hover:bg-white border border-transparent hover:border-brand-soft-green/20 hover:shadow-xl hover:shadow-brand-dark-green/5 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-dark-green/10 text-brand-dark-green flex items-center justify-center group-hover:bg-brand-dark-green group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-brand-dark-green mb-2">
                      {item.title}
                    </h3>
                    <p className="text-brand-dark-neutral/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. Mission & Vision ─── */}
      <section id="mission-vision" className="py-24 bg-brand-light-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-soft-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
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
              <p className="text-brand-dark-neutral/70 leading-relaxed mb-8">
                Our mission is to lead the global pulp and paper industry with sustainable, high-performance solutions crafted from sugarcane bagasse, wheat straw, imported agri-waste pulp, virgin pulp, recycled pulp, and responsibly sourced wood. We are dedicated to zero-waste production, leveraging AI, IoT, and nanocellulose technology to create compostable packaging and premium pulp.
              </p>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-brand-soft-green/20 shadow-sm">
                <Target className="w-10 h-10 text-brand-accent-brown shrink-0" />
                <div>
                  <p className="font-heading font-bold text-brand-dark-green">
                    Zero-Waste Commitment
                  </p>
                  <p className="text-sm text-brand-dark-neutral/60">
                    Every byproduct is reused, recycled, or upcycled — ensuring nothing goes to waste in our circular production model.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-accent-brown/10 text-brand-accent-brown mb-4">
                Our Vision
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brand-dark-green mb-6 leading-tight">
                A Future That{" "}
                <span className="text-gradient">Regenerates</span>
              </h2>
              <p className="text-brand-dark-neutral/70 leading-relaxed mb-8">
                Nature Pulp envisions a world where every pulp and paper product regenerates ecosystems, economies, and communities. By 2035, we aim to divert 10 million tons of agricultural waste from landfills, empower 100,000 farmers, and achieve net-zero emissions.
              </p>

              {/* Vision highlight cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl eco-gradient text-white">
                  <Leaf className="w-7 h-7 mb-3 opacity-80" />
                  <h4 className="font-heading font-bold text-base mb-1">Sustainability</h4>
                  <p className="text-white/70 text-xs">Every product regenerates ecosystems</p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-brand-soft-green/20 shadow-sm">
                  <Zap className="w-7 h-7 mb-3 text-brand-accent-brown" />
                  <h4 className="font-heading font-bold text-base text-brand-dark-green mb-1">Innovation</h4>
                  <p className="text-brand-dark-neutral/60 text-xs">AI & nanocellulose technology</p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-brand-soft-green/20 shadow-sm">
                  <Heart className="w-7 h-7 mb-3 text-brand-dark-green" />
                  <h4 className="font-heading font-bold text-base text-brand-dark-green mb-1">Empowerment</h4>
                  <p className="text-brand-dark-neutral/60 text-xs">Uplifting farming communities</p>
                </div>
                <div className="p-5 rounded-2xl bg-brand-accent-brown/10 border border-brand-accent-brown/20">
                  <Globe className="w-7 h-7 mb-3 text-brand-earth-brown" />
                  <h4 className="font-heading font-bold text-base text-brand-dark-green mb-1">Climate Action</h4>
                  <p className="text-brand-dark-neutral/60 text-xs">Net-zero by 2035 — our pledge</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 4. Products Overview ─── */}
      <section id="products-overview" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Products"
            title="Sustainable Solutions at Scale"
            subtitle="From raw pulp to finished paper products, our portfolio covers every stage of the sustainable paper value chain."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.title} {...product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/products"
              id="products-see-all"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-dark-green text-white rounded-full font-semibold text-base hover:bg-brand-dark-green/90 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-dark-green/25 hover:-translate-y-1"
            >
              See All Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── 5. Sustainability Commitment ─── */}
      <section id="sustainability" className="py-24 eco-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            badge="Sustainability"
            title="Our Commitment to the Planet"
            subtitle="Sustainability isn't a checkbox — it's the foundation of everything we build."
            light
          />

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {sustainabilityPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-4 group-hover:bg-white/20 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="font-heading font-bold text-white text-sm mb-2">{pillar.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          {/* 2035 Pledge Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-center font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
              Our 2035 Pledge
            </h3>
            <p className="text-center text-white/50 text-sm mb-12">
              Measurable goals. Tangible impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityStats.map((stat, index) => (
              <AnimatedCounter key={stat.label} {...stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. Industries We Serve ─── */}
      <section id="industries" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Industries"
            title="Industries We Serve"
            subtitle="From food packaging to paper manufacturing, our sustainable solutions power diverse industries across the globe."
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
                <h3 className="font-heading font-bold text-brand-dark-green mb-1 text-sm sm:text-base">
                  {industry.name}
                </h3>
                <p className="text-xs text-brand-dark-neutral/50">{industry.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <Link
              href="/contact"
              id="industries-contact-cta"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-dark-green text-white rounded-full font-semibold text-base hover:bg-brand-dark-green/90 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-dark-green/25 hover:-translate-y-1"
            >
              Contact Us for Custom Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              id="industries-network-cta"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-brand-dark-green text-brand-dark-green rounded-full font-semibold text-base hover:bg-brand-dark-green hover:text-white transition-all duration-300"
            >
              Our Global Network
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── 7. Final Call To Action ─── */}
      <section id="final-cta" className="py-24 bg-brand-light-bg relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-soft-green/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent-brown/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-accent-brown/10 text-brand-accent-brown mb-6">
              Join the Revolution
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark-green mb-6 leading-tight">
              Partner with Us to Make{" "}
              <span className="text-gradient">Sustainability</span>{" "}
              the Standard
            </h2>
            <p className="text-lg text-brand-dark-neutral/60 mb-10 max-w-2xl mx-auto">
              Partner with us to make sustainability the global standard, one innovative solution at a time. Together, we can build a future where every product tells a story of regeneration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                id="final-cta-contact"
                className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-brand-dark-green text-white rounded-full font-semibold text-base hover:bg-brand-dark-green/90 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-dark-green/25 hover:-translate-y-1"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/products"
                id="final-cta-products"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-brand-dark-green text-brand-dark-green rounded-full font-semibold text-base hover:bg-brand-dark-green hover:text-white transition-all duration-300"
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
