"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { CheckCircle, Award, Leaf, Beaker, BarChart3 } from "lucide-react";

const qualityMetrics = [
  { 
    icon: <Award className="w-8 h-8" />, 
    title: "ISO Certified", 
    desc: "Meets ISO quality and environmental standards for manufacturing excellence.",
    tag: "Standard" 
  },
  { 
    icon: <Leaf className="w-8 h-8" />, 
    title: "FSC Compatible", 
    desc: "Aligned with Forest Stewardship Council principles for responsible sourcing.",
    tag: "Ethical"
  },
  { 
    icon: <Beaker className="w-8 h-8" />, 
    title: "Lab Tested", 
    desc: "Every single batch is tested in-house for consistency, strength, and purity.",
    tag: "Rigorous"
  },
  { 
    icon: <BarChart3 className="w-8 h-8" />, 
    title: "Traceable", 
    desc: "End-to-end supply chain transparency from the farm to the final factory gate.",
    tag: "Transparent"
  },
];

function QualityAssurance() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-dark-green/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <SectionHeading
            badge="Compliance"
            title="Quality Assurance & Global Standards"
            subtitle="Our commitment to quality is backed by rigorous testing protocols and international certifications, ensuring every batch exceeds industry benchmarks."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualityMetrics.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="relative group p-8 rounded-[2rem] bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-dark-green/30 transition-all duration-500"
            >
              {/* Top Row: Icon & Tag */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-brand-dark-green/5 text-brand-dark-green group-hover:bg-brand-dark-green group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-2 py-1 rounded">
                  {item.tag}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-dark-green transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 text-sm italic">
            * All products are tested according to TAPPI and ISO laboratory standards.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default QualityAssurance;