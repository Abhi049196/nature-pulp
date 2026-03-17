"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    tag: string;
    readingTime: string;
    date: string;
    image: string;
    href: string;
    published: boolean;
  };
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const CardContent = (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      className="group flex flex-col h-full rounded-[2rem] bg-white border border-brand-soft-green/20 shadow-[0_10px_30px_rgba(27,77,62,0.05)] hover:shadow-[0_20px_50px_rgba(27,77,62,0.1)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
    >
      <div className="relative w-full h-56 sm:h-64 overflow-hidden">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 bg-brand-soft-green/10" />
        )}
        <div className="absolute top-5 left-5 z-10">
          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-brand-dark-green text-[10px] font-bold uppercase tracking-[0.14em] shadow-sm border border-brand-soft-green/10">
            {post.tag}
          </span>
        </div>
      </div>

      <div className="flex-1 p-7 sm:p-8 flex flex-col">
        <div className="flex items-center gap-4 text-[11px] font-semibold text-brand-dark-neutral/50 mb-4 uppercase tracking-widest">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-brand-accent-brown" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-accent-brown" />
            {post.readingTime}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-dark-green mb-4 leading-snug group-hover:text-brand-accent-brown transition-colors">
          {post.title}
        </h3>

        <p className="text-brand-dark-neutral/70 text-[15px] leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-6 border-t border-brand-soft-green/10 flex items-center justify-between">
          <span className="text-[13px] font-bold text-brand-dark-green/60">
            {post.published ? "Read Article" : "Coming Soon"}
          </span>
          <div className="flex items-center gap-2 text-brand-accent-brown group-hover:gap-3 transition-all">
            <span className="text-xs font-bold uppercase tracking-widest">
              {post.published ? "Read More" : "Stay Tuned"}
            </span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.article>
  );

  if (post.published && post.href !== "#") {
    return (
      <Link href={post.href} className="block h-full cursor-pointer">
        {CardContent}
      </Link>
    );
  }

  return (
    <div className="block h-full opacity-90 grayscale-[20%]">
      {CardContent}
    </div>
  );
}
