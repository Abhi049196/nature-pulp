"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Leaf } from "lucide-react";

import { blogPosts } from "@/lib/blog-data";
import BlogCard from "@/components/BlogCard";

export default function BlogSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-brand-light-bg">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-brand-soft-green/5 rounded-full blur-[120px] -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[35%] h-[35%] bg-brand-dark-green/5 rounded-full blur-[100px] -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
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

        {/* Blog Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {/* Bottom CTA for Blog index */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center lg:hidden"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-dark-green text-white rounded-full font-bold text-sm hover:bg-brand-dark-green/90 transition-all shadow-md active:scale-95"
          >
            Read All Stories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
