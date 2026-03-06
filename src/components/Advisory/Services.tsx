"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Lightbulb, TrendingUp, Users, ShieldCheck, BookOpen, Globe } from "lucide-react";

/* ============== DATA (Original Content Maintained) ============== */
const services = [
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: "Raw Material Sourcing Strategy",
    description:
      "We help companies identify, evaluate, and secure sustainable agri-waste fiber sources across India and Southeast Asia. From wheat straw to sugarcane bagasse, our sourcing expertise ensures quality and reliability.",
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Process Optimization",
    description:
      "Leverage our R&D expertise to optimize your pulping processes for agri-waste fibers. We provide technical consultation on chemical recovery, bleaching alternatives, and energy efficiency improvements.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Supply Chain Design",
    description:
      "Build resilient, transparent supply chains that connect farming communities with paper mills. We help design farmer engagement models, quality control protocols, and logistics networks.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Sustainability Compliance",
    description:
      "Navigate the complex landscape of environmental regulations and sustainability certifications. We guide companies through FSC, ISO 14001, and other relevant standards for green manufacturing.",
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: "Market Intelligence",
    description:
      "Stay ahead with our industry reports, market analysis, and demand forecasting for sustainable pulp products. Understand pricing trends, competitor movements, and emerging opportunities.",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Impact Assessment",
    description:
      "Measure and communicate the environmental and social impact of your operations. We help build ESG reports, carbon footprint calculations, and impact narratives for stakeholders.",
  },
];

function Services() {
  return (
    <section className="py-28 bg-[#FDFDFD] relative overflow-hidden">
      {/* Background Aesthetic Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-soft-green/5 rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-dark-green/5 rounded-full blur-[100px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <SectionHeading
            badge="What We Offer"
            title="Our Advisory Services"
            subtitle="Comprehensive support for companies transitioning to sustainable pulp and paper operations."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="h-full p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_-20px_rgba(5,53,35,0.1)] transition-all duration-500 flex flex-col items-start hover:-translate-y-2">
                
                {/* Icon with refined background */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-brand-dark-green/10 rounded-2xl scale-125 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-16 h-16 rounded-2xl bg-slate-50 text-brand-dark-green flex items-center justify-center group-hover:bg-brand-dark-green group-hover:text-white transition-all duration-500 shadow-inner">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-extrabold text-brand-dark-green mb-4 leading-tight group-hover:text-brand-soft-green transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-[0.95rem] leading-relaxed font-normal">
                  {service.description}
                </p>

                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;