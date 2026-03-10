"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Gopal Jee",
    designation: "Co-Founder And CEO",
    bio: "Visionary leader with 10+ years in sustainable manufacturing and agri-waste innovation.",
    image: "/assets/team-image/gopal.webp",
    linkedin: "https://www.linkedin.com/in/gopaljeeyis",
    email: "mailto:ceo@company.com",
  },
  {
    name: "Ganesh Agrawal",
    designation: "Co-Founder and CMO",
    bio: "Supply chain specialist with deep experience in rural procurement and logistics.",
    image: "/assets/team-image/ganesh-agrawal.webp",
    linkedin: "#",
    email: "mailto:coo@company.com",
  },
  {
    name: "Santosh Agrawal",
    designation: "Director",
    bio: "Expert in pulping technology, process engineering, and green manufacturing systems.",
    image: "/assets/team-image/santosh-agrawall.webp",
    linkedin: "#",
    email: "mailto:cto@company.com",
  },
  {
    name: "Nitish Kumar",
    designation: "COO (Plant)",
    bio: "Environmental scientist driving our zero-waste and net-zero carbon initiatives.",
    image: "/assets/team-image/nitish.webp",
    linkedin: "https://www.linkedin.com/in/nitish-kumar-134443205",
    email: "mailto:sustainability@company.com",
  },
  {
    name: "Amrish Kumar",
    designation: "Operation Manager ( Plant)",
    bio: "Financial strategist focused on impact investing and sustainable business growth.",
    image: "/assets/team-image/amrishh.webp",
    linkedin: "https://www.linkedin.com/in/amrish-kumar-3b476918b",
    email: "mailto:cfo@company.com",
  },
  {
    name: "Kunal Jee",
    designation: "Asst. Manager (Plant)",
    bio: "Brand storyteller connecting sustainability with global B2B market opportunities.",
    image: "/assets/team-image/kunal.webp",
    linkedin: "https://www.linkedin.com/in/kunal-jee-4411141b5",
    email: "mailto:marketing@company.com",
  },
];

function TeamGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Leadership"
          title="Meet Our Team"
          subtitle="Passionate professionals driving sustainable innovation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden bg-brand-light-bg border border-brand-soft-green/10 hover:shadow-xl hover:shadow-brand-dark-green/5 transition-all duration-500 hover:-translate-y-2">

                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  {/* <div className="absolute inset-0 bg-brand-dark-green/80 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>

                    <a
                      href={member.email}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                  </div> */}
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-brand-dark-green">
                        {member.name}
                      </h3>
                      <p className="text-sm text-brand-accent-brown font-medium">
                        {member.designation}
                      </p>
                    </div>
                    {member.linkedin !== "#" && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        className="shrink-0 w-9 h-9 rounded-xl bg-brand-dark-green/8 hover:bg-brand-dark-green text-brand-dark-green hover:text-white flex items-center justify-center transition-all duration-300"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-brand-dark-neutral/50 leading-relaxed mt-2">
                    {member.bio}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamGrid;