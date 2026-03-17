"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    slug: "from-burning-fields-to-a-green-empire",
    title: "From the Burning Fields to a Green Empire: My Journey to Save Rural India",
    excerpt: "The personal story of our founder, Gopal Jee, on turning agricultural waste into a national treasure.",
    tag: "Sustainability",
    readingTime: "12 min read",
    date: "March 17, 2026",
    image: "/assets/blog/hero-burning-fields.png",
    href: "/blog/from-burning-fields-to-a-green-empire",
    published: true,
  },
  {
    slug: "sustainable-packaging-trends-2025",
    title: "Sustainable Packaging Trends to Watch",
    excerpt:
      "A quick look at how pulp-based solutions are reshaping modern packaging.",
    tag: "Sustainability",
    readingTime: "4 min read",
    date: "TBD",
    image: "/assets/blog/circular-economy.png", // reusing an image for demonstration
    href: "#",
    published: false,
  },
  {
    slug: "inside-jee-origin-pulp-innovation",
    title: "Inside Jee Origin: Pulp Innovation",
    excerpt:
      "How we think about fiber, waste reduction, and circular design.",
    tag: "Jee Origin",
    readingTime: "3 min read",
    date: "TBD",
    image: "/assets/blog/vision-2040.png", // reusing an image for demonstration
    href: "#",
    published: false,
  },
];

export default function BlogPageClient() {
  return (
    <div className="min-h-screen bg-[#f8faf9]">
      {/* Hero */}
      <section className="pt-32 pb-10 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-dark-green/70 mb-3">
            Insights & Stories
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-dark-green mb-4">
            Blog
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-brand-dark-neutral/80">
            Explore perspectives around pulp, packaging, circularity, and the journey behind Jee
            Origin. New posts will appear here as we publish them.
          </p>
        </div>
      </section>

      {/* Blog list */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {posts.map((post, index) => {
              const CardContent = (
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.4 }}
                  className="group flex flex-col h-full rounded-3xl bg-white/90 border border-brand-soft-green/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                    {post.image ? (
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-brand-soft-green/20" />
                    )}
                  </div>
                  <div className="flex-1 p-6 sm:p-7 flex flex-col">
                    <div className="flex items-center gap-3 text-xs font-medium text-brand-dark-neutral/60 mb-3 flex-wrap">
                      <span className="inline-flex items-center rounded-full bg-brand-soft-green/25 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-brand-dark-green">
                        {post.tag}
                      </span>
                      <span className="text-[11px] sm:text-xs">{post.date} &bull; {post.readingTime}</span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-semibold text-brand-dark-green mb-2 group-hover:text-brand-accent-brown transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm sm:text-base text-brand-dark-neutral/80 mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-2">
                      <span className="text-xs sm:text-sm font-semibold text-brand-dark-green/80">
                        {post.published ? "Read Article" : "Coming soon"}
                      </span>
                      <span className="text-xs sm:text-sm text-brand-accent-brown group-hover:translate-x-0.5 inline-flex items-center gap-1 transition-transform">
                        {post.published ? "Read more" : "Read more later"}
                        <span aria-hidden>→</span>
                      </span>
                    </div>
                  </div>
                </motion.article>
              );

              return post.published ? (
                <Link href={post.href} key={post.slug} className="block h-full">
                  {CardContent}
                </Link>
              ) : (
                <div key={post.slug} className="block h-full opacity-80 cursor-not-allowed">
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
