"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Leaf } from "lucide-react";

const latestPost = {
  slug: "from-burning-fields-to-a-green-empire",
  title: "From the Burning Fields to a Green Empire",
  excerpt: "The personal story of our founder, Gopal Jee, on turning agricultural waste into a national treasure — saving forests and empowering rural India.",
  tag: "Sustainability",
  readingTime: "12 min read",
  date: "March 17, 2026",
  image: "/assets/blog/hero-burning-fields.png",
  href: "/blog/from-burning-fields-to-a-green-empire",
};

export default function BlogSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-light-bg">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-soft-green/5 rounded-full blur-[120px] -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[35%] h-[35%] bg-brand-dark-green/5 rounded-full blur-[100px] -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-dark-green/5 border border-brand-dark-green/10 mb-4"
            >
              <Leaf className="w-3.5 h-3.5 text-brand-dark-green" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-dark-green">
                Insights & Stories
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-dark-green"
            >
              Latest from <span className="text-brand-accent-brown">Our Blog</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-brand-dark-green font-bold text-sm tracking-wide hover:text-brand-accent-brown transition-colors"
            >
              View All Posts
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Featured Post Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative rounded-[2rem] overflow-hidden bg-white border border-brand-soft-green/20 shadow-[0_20px_50px_rgba(27,77,62,0.05)] hover:shadow-[0_40px_80px_rgba(27,77,62,0.1)] transition-all duration-500"
        >
          <Link href={latestPost.href} className="flex flex-col lg:flex-row h-full">
            {/* Image Side */}
            <div className="lg:w-[55%] relative min-h-[300px] lg:min-h-full overflow-hidden">
              <Image
                src={latestPost.image}
                alt={latestPost.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-green/40 to-transparent lg:hidden" />
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-brand-dark-green text-[10px] font-bold uppercase tracking-[0.15em] shadow-sm border border-brand-soft-green/20">
                  Featured Story
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-[45%] p-8 sm:p-12 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-xs font-semibold text-brand-dark-neutral/50 mb-6 uppercase tracking-widest">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {latestPost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {latestPost.readingTime}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-brand-dark-green mb-6 leading-[1.2] group-hover:text-brand-accent-brown transition-colors">
                {latestPost.title}
              </h3>

              <p className="text-brand-dark-neutral/70 text-base sm:text-lg leading-relaxed mb-8 line-clamp-3">
                {latestPost.excerpt}
              </p>

              <div className="flex items-center gap-3">
                <span className="w-12 h-[2px] bg-brand-accent-brown group-hover:w-16 transition-all duration-500" />
                <span className="text-brand-accent-brown font-bold text-sm uppercase tracking-widest group-hover:tracking-[0.2em] transition-all duration-500">
                  Read Full Story
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
