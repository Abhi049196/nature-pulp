"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

/* ============== DATA (Original Content Preserved) ============== */
const processSteps = [
  { 
    step: "01", 
    title: "Discovery", 
    desc: "Understand your current operations, challenges, and sustainability goals" 
  },
  { 
    step: "02", 
    title: "Analysis", 
    desc: "Deep-dive into your supply chain, processes, and market positioning" 
  },
  { 
    step: "03", 
    title: "Strategy", 
    desc: "Develop actionable roadmaps with clear milestones and KPIs" 
  },
  { 
    step: "04", 
    title: "Implementation", 
    desc: "On-ground support to execute strategies and measure outcomes" 
  },
];

function Process() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-light-bg/50 -skew-x-12 translate-x-20 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <SectionHeading
              
              title="Our Advisory Process"
              subtitle="A structured approach to transforming your operations toward sustainability."
            />
          </div>
          <div className="hidden lg:block pb-4">
            <div className="flex gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-1 rounded-full bg-brand-soft-green/20" />
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic List Layout (Cleaner & More Professional) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {processSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 group"
            >
              {/* Vertical Side Number */}
              <div className="flex flex-col items-center">
                <div className="text-5xl font-black text-transparent stroke-text group-hover:text-brand-soft-green transition-all duration-500 font-heading opacity-20 group-hover:opacity-100"
                     style={{ WebkitTextStroke: '1px #053523' }}>
                  {item.step}
                </div>
                <div className="w-[2px] h-full bg-gradient-to-b from-brand-soft-green/50 to-transparent mt-4" />
              </div>

              {/* Text Content */}
              <div className="pt-2">
                <h3 className="text-2xl font-bold text-brand-dark-green mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed max-w-md">
                  {item.desc}
                </p>
                
                {/* Subtle Highlight line */}
                <motion.div 
                  className="h-1 bg-brand-soft-green mt-6 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "40px" }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px #053523;
        }
      `}</style>
    </section>
  );
}

export default Process;