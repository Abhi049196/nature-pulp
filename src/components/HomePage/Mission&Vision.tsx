"use client";

import { motion } from "framer-motion";
import { Target, Leaf, Zap, Heart, Globe } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-32 bg-[#f4f6f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* ================= MISSION PANEL ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-14 shadow-xl border border-gray-100"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-dark-green mb-6 block">
              Our Mission
            </span>

            <h2 className="text-4xl font-bold text-brand-dark-green mb-8 leading-tight">
              Transforming Waste into{" "}
              <span className="text-gradient">Opportunity</span>
            </h2>

            <p className="text-brand-dark-neutral/70 leading-relaxed mb-10 text-lg">
              Our mission is to lead the global pulp and paper industry with sustainable, high-performance solutions crafted from sugarcane bagasse, wheat straw, imported agri-waste pulp, virgin pulp, recycled pulp, and responsibly sourced wood. We are dedicated to zero-waste production, leveraging AI, IoT, and nanocellulose technology to create compostable packaging and premium pulp.
            </p>

            <div className="flex gap-6 items-start p-6 bg-[#f8faf9] rounded-2xl border border-brand-soft-green/20">
              <div className="w-14 h-14 rounded-2xl bg-brand-accent-brown/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-brand-accent-brown" />
              </div>
              <div>
                <p className="font-bold text-brand-dark-green mb-2">
                  Zero-Waste Commitment
                </p>
                <p className="text-sm text-brand-dark-neutral/60">
                  Every byproduct is reused, recycled, or upcycled — ensuring nothing goes to waste in our circular production model.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================= VISION PANEL ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-14 shadow-xl border border-gray-100"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-accent-brown mb-6 block">
              Our Vision
            </span>

            <h2 className="text-4xl font-bold text-brand-dark-green mb-8 leading-tight">
              A Future That{" "}
              <span className="text-gradient">Regenerates</span>
            </h2>

            <p className="text-brand-dark-neutral/70 leading-relaxed mb-10 text-lg">
              Nature Pulp envisions a world where every pulp and paper product regenerates ecosystems, economies, and communities. By 2035, we aim to divert 10 million tons of agricultural waste from landfills, empower 100,000 farmers, and achieve net-zero emissions.
            </p>

            <div className="grid grid-cols-2 gap-6">

              <div className="p-6 rounded-2xl bg-[#f8faf9] border border-brand-soft-green/20">
                <Leaf className="w-6 h-6 mb-3 text-brand-dark-green" />
                <h4 className="font-semibold text-brand-dark-green mb-1">
                  Sustainability
                </h4>
                <p className="text-sm text-brand-dark-neutral/60">
                  Every product regenerates ecosystems
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f8faf9] border border-brand-soft-green/20">
                <Zap className="w-6 h-6 mb-3 text-brand-accent-brown" />
                <h4 className="font-semibold text-brand-dark-green mb-1">
                  Innovation
                </h4>
                <p className="text-sm text-brand-dark-neutral/60">
                  AI & nanocellulose technology
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f8faf9] border border-brand-soft-green/20">
                <Heart className="w-6 h-6 mb-3 text-brand-dark-green" />
                <h4 className="font-semibold text-brand-dark-green mb-1">
                  Empowerment
                </h4>
                <p className="text-sm text-brand-dark-neutral/60">
                  Uplifting farming communities
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#f8faf9] border border-brand-soft-green/20">
                <Globe className="w-6 h-6 mb-3 text-brand-earth-brown" />
                <h4 className="font-semibold text-brand-dark-green mb-1">
                  Climate Action
                </h4>
                <p className="text-sm text-brand-dark-neutral/60">
                  Net-zero by 2035 — our pledge
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}