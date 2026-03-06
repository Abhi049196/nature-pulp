"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  UtensilsCrossed,
  ShoppingCart,
  BookOpen,
  Monitor,
  Factory,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

/* ============== DATA (Original Content Preserved) ============== */
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

function Industries() {
  return (
    <section id="industries" className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#053523_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <SectionHeading
            badge="Industries"
            title="Industries We Serve"
            subtitle="From food packaging to paper manufacturing, our sustainable solutions power diverse industries across the globe."
          />
        </div>

        {/* Improved Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative flex flex-col items-center text-center p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-brand-soft-green/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500"
            >
              {/* Animated Icon Container */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-brand-dark-green/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                <div className="relative w-20 h-20 rounded-2xl bg-slate-50 text-brand-dark-green flex items-center justify-center group-hover:bg-brand-dark-green group-hover:text-white group-hover:-translate-y-2 transition-all duration-500 shadow-sm">
                  {industry.icon}
                </div>
              </div>

              <h3 className="font-heading font-bold text-brand-dark-green mb-3 text-base lg:text-lg leading-tight">
                {industry.name}
              </h3>
              
              <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                {industry.desc}
              </p>

              {/* Decorative Corner Element */}
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-brand-soft-green/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section - More balanced design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 flex flex-col items-center"
        >
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-3 px-10 py-5 bg-brand-dark-green text-white rounded-full font-bold text-base shadow-xl shadow-brand-dark-green/20 hover:shadow-brand-dark-green/40 hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us for Custom Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            
            <Link
              href="/about"
              className="flex items-center justify-center gap-3 px-10 py-5 bg-white border-2 border-brand-dark-green text-brand-dark-green rounded-full font-bold text-base hover:bg-brand-dark-green hover:text-white hover:shadow-lg transition-all duration-300"
            >
              Our Global Network
            </Link>
          </div>
          
          <p className="mt-8 text-slate-400 text-sm font-medium tracking-wide flex items-center gap-2">
            <span className="w-8 h-[1px] bg-slate-200"></span>
            Partnering with 500+ Businesses
            <span className="w-8 h-[1px] bg-slate-200"></span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Industries;