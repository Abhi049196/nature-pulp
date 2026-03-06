"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const milestones = [
  {
    id: "01",
    year: "Foundation",
    title: "The Seed Was Planted",
    desc: "Nature Pulp was born from a simple question: Why are we burning agricultural waste when it can build a sustainable future?",
  },
  {
    id: "02",
    year: "Growth",
    title: "Building the Model",
    desc: "Developed proprietary processes to convert wheat straw, rice husk, and sugarcane bagasse into premium-grade pulp.",
  },
  {
    id: "03",
    year: "Expansion",
    title: "Scaling Impact",
    desc: "Expanded partnerships with paper mills, packaging companies, and FMCG brands across India and international markets.",
  },
  {
    id: "04",
    year: "Future",
    title: "2035 Vision",
    desc: "On track to become the world's largest agri-waste pulp manufacturer with operations spanning continents.",
  },
];

export default function BrandStory() {
  return (
    <section className="py-20 bg-white text-brand-dark-green">
      <div className="max-w-6xl mx-auto px-6">

        {/* Strong Editorial Header */}
        <header className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h2 className="text-6xl md:text-7xl lg:text-[60px] font-semibold leading-[0.95] tracking-tight">
              From Farm Fields <br />
              <span className="text-brand-soft-green italic font-serif font-light">
                to the Future of Paper
              </span>
            </h2>

            <div className="max-w-3xl">
              <p className="text-2xl leading-relaxed text-brand-dark-neutral/80">
                India produces over 500 million tons of agricultural waste annually. 
                We saw this not as a problem, but as the world’s largest untapped raw material.
              </p>
            </div>
          </motion.div>
        </header>

        {/* Narrative Section */}
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl leading-relaxed text-brand-dark-neutral/75"
          >
            Nature Pulp was founded with a radical vision: to build a bridge between India’s farming communities and the global paper industry. By sourcing wheat straw, rice husk, and sugarcane bagasse directly from farmers, we create premium-grade pulp that meets international quality standards.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl leading-relaxed text-brand-dark-neutral/75"
          >
            Our model is simple but transformative: Buy waste from farmers, process it with advanced technology, and deliver sustainable raw materials — all while maintaining zero-waste operations and empowering rural economies.
          </motion.p>
        </div>

        {/* Evolution Timeline */}
        <div className="space-y-0">
          {milestones.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative py-20 border-t border-brand-dark-green/10 flex flex-col md:flex-row justify-between gap-12"
            >
              {/* Subtle Background Number */}
              <span className="absolute right-10 top-1/2 -translate-y-1/2 text-[10rem] font-black text-brand-dark-green/[0.03] pointer-events-none">
                {item.id}
              </span>

              <div className="relative z-10 max-w-md space-y-4">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-soft-green">
                  {item.year}
                </span>

                <h3 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-500">
                  {item.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-soft-green" />
                </h3>
              </div>

              <div className="relative z-10 max-w-lg">
                <p className="text-lg text-brand-dark-neutral/65 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-brand-dark-green/10" />
        </div>

      </div>
    </section>
  );
}