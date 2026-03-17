import BlogPostClient from "./BlogPostClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "From Burning Fields to a Green Empire | JEE Origin",
  description:
    "Discover how Gopal Jee turned agricultural waste into sustainable pulp at JEE Origin—India's circular economy pioneer saving forests and empowering farmers.",
  keywords: [
    "agricultural waste to paper pulp",
    "stubble burning alternatives India",
    "circular economy in agriculture",
    "sustainable pulp manufacturer India",
    "JEE Origin Pvt Ltd",
    "sugarcane bagasse pulp",
    "eco-friendly packaging from agri-waste",
    "farmer income from crop residue",
    "agricultural residue management India",
    "smoke-free rural India",
    "bio-refinery India",
    "zero-waste manufacturing India",
  ],
  authors: [{ name: "Gopal Jee", url: "https://www.jeeorigin.com" }],
  openGraph: {
    type: "article",
    title: "From Burning Fields to a Green Empire",
    description:
      "A farmer's son turns crop residue into sustainable pulp at JEE Origin—saving forests, empowering farmers, and creating a smoke-free India.",
    url: "https://www.jeeorigin.com/blog/from-burning-fields-to-a-green-empire",
    siteName: "JEE Origin",
    images: [
      {
        url: "/assets/blog/hero-burning-fields-og.png",
        width: 1200,
        height: 630,
        alt: "From burning fields to a green empire — JEE Origin sustainable pulp story",
      },
    ],
    locale: "en_IN",
    publishedTime: "2025-01-15T00:00:00.000Z",
    modifiedTime: "2026-03-17T00:00:00.000Z",
    authors: ["Gopal Jee"],
    tags: [
      "sustainability",
      "circular economy",
      "agriculture",
      "stubble burning",
      "paper pulp",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "From Burning Fields to a Green Empire | JEE Origin",
    description:
      "A farmer's son turns crop residue into sustainable pulp — saving forests and empowering rural India.",
    images: ["/assets/blog/hero-burning-fields.png"],
  },
  alternates: {
    canonical:
      "https://www.jeeorigin.com/blog/from-burning-fields-to-a-green-empire",
  },
};

// JSON-LD structured data for the blog article
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "From Burning Fields to a Green Empire",
  description:
    "Discover how Gopal Jee turned agricultural waste into sustainable pulp at JEE Origin—India's circular economy pioneer saving forests and empowering farmers.",
  image: "https://www.jeeorigin.com/assets/blog/hero-burning-fields.png",
  author: {
    "@type": "Person",
    name: "Gopal Jee",
    jobTitle: "Founder & CEO",
    worksFor: {
      "@type": "Organization",
      name: "JEE Origin Pvt Ltd",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "JEE Origin Pvt Ltd",
    logo: {
      "@type": "ImageObject",
      url: "https://www.jeeorigin.com/logo.png",
    },
  },
  datePublished: "2025-01-15",
  dateModified: "2026-03-17",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.jeeorigin.com/blog/from-burning-fields-to-a-green-empire",
  },
  wordCount: 2800,
  keywords:
    "agricultural waste to paper pulp, stubble burning alternatives, circular economy agriculture, sustainable pulp India",
  articleSection: "Sustainability",
  inLanguage: "en",
};

export default function BlogPostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostClient />
    </>
  );
}
