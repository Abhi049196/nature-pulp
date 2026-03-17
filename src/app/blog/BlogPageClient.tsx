"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/lib/blog-data";
import BlogCard from "@/components/BlogCard";

export default function BlogPageClient() {
  return (
    <div className="min-h-screen bg-brand-light-bg">
      {/* Hero */}
      <section className="pt-40 pb-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-soft-green/5 rounded-full blur-[140px] -mr-24 -mt-24" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-dark-green/5 border border-brand-dark-green/10 mb-6"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark-green">
              Insights & Stories
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-brand-dark-green mb-6"
          >
            Our <span className="text-brand-accent-brown">Blog</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-brand-dark-neutral/70 leading-relaxed"
          >
            Deep dives into pulp science, sustainable packaging, and the circular journey of our founder Gopal Jee.
          </motion.p>
        </div>
      </section>

      {/* Blog list */}
      <section className="pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
