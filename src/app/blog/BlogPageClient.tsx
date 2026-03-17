"use client";

import { motion } from "framer-motion";

const posts = [
  {
    slug: "sustainable-packaging-trends-2025",
    title: "Sustainable Packaging Trends to Watch",
    excerpt:
      "A quick look at how pulp-based solutions are reshaping modern packaging.",
    tag: "Sustainability",
    readingTime: "4 min read",
  },
  {
    slug: "inside-jee-origin-pulp-innovation",
    title: "Inside Jee Origin: Pulp Innovation",
    excerpt:
      "How we think about fiber, waste reduction, and circular design.",
    tag: "Jee Origin",
    readingTime: "3 min read",
  },
  {
    slug: "getting-started-with-eco-design",
    title: "Getting Started with Eco-first Design",
    excerpt:
      "Simple principles for teams that want to reduce their packaging footprint.",
    tag: "Guides",
    readingTime: "5 min read",
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
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.4 }}
                className="group flex flex-col h-full rounded-3xl bg-white/90 border border-brand-soft-green/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="flex-1 p-6 sm:p-7 flex flex-col">
                  <div className="flex items-center gap-3 text-xs font-medium text-brand-dark-neutral/60 mb-3">
                    <span className="inline-flex items-center rounded-full bg-brand-soft-green/25 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-brand-dark-green">
                      {post.tag}
                    </span>
                    <span className="text-[11px] sm:text-xs">{post.readingTime}</span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold text-brand-dark-green mb-2 group-hover:text-brand-accent-brown transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm sm:text-base text-brand-dark-neutral/80 mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="text-xs sm:text-sm font-semibold text-brand-dark-green/80">
                      Coming soon
                    </span>
                    <span className="text-xs sm:text-sm text-brand-accent-brown group-hover:translate-x-0.5 inline-flex items-center gap-1 transition-transform">
                      Read more later
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
