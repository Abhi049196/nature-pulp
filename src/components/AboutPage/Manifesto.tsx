"use client";

import { motion } from "framer-motion";
import { TreePine } from "lucide-react";

export default function Manifesto() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#071e18]">

      {/* Subtle star particles */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#87A685_1px,transparent_1px)] [background-size:25px_25px]" />

      {/* Glow rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-[#87A685]/40 blur-sm" />
        <div className="absolute w-[350px] h-[350px] rounded-full border border-[#87A685]/60 blur-sm" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative backdrop-blur-xl bg-white/5 border border-white/30 rounded-3xl p-16 shadow-[0_0_80px_rgba(0,0,0,0.6)]"
        >

          {/* Tree icon */}
          <div className="flex justify-center mb-10">
            <TreePine className="w-12 h-12 text-[#87A685]" />
          </div>

          {/* Quote */}
          <blockquote className="text-2xl md:text-3xl leading-[1.6] text-white font-medium mb-12">
            “Waste is an <span className="text-[#87A685] italic">opportunity</span>. 
            Every straw we save from burning, every farmer we empower, 
            every sheet of paper we produce — it all counts toward a world 
            where <span className="underline decoration-[#87A685] decoration-2 underline-offset-4">sustainability</span> is the standard.”
          </blockquote>

          {/* Bottom label */}
          <div className="flex items-center gap-6">
            <div className="w-24 h-[2px] bg-[#87A685]" />
            <span className="text-white tracking-[0.3em] uppercase text-sm">
              Nature Pulp Manifesto
            </span>
          </div>

        </motion.div>
      </div>

    </section>
  );
}