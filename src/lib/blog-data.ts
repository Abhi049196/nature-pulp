export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  readingTime: string;
  date: string;
  image: string;
  href: string;
  published: boolean;
}

export const blogPosts: BlogPost[] = [
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
    slug: "circular-economy-in-agriculture",
    title: "Circular Economy in Action: Turning Waste into Wealth",
    excerpt: "How Jee Origin is bridging the gap between farms and industry through sustainable waste management.",
    tag: "Innovation",
    readingTime: "5 min read",
    date: "March 15, 2026",
    image: "/assets/blog/circular-economy.png",
    href: "#",
    published: true,
  },
  {
    slug: "vision-2040-smoke-free-india",
    title: "Vision 2040: Our Blueprint for a Smoke-Free Rural India",
    excerpt: "A look into the future of sustainable agriculture and zero-waste manufacturing models.",
    tag: "Vision",
    readingTime: "8 min read",
    date: "March 10, 2026",
    image: "/assets/blog/vision-2040.png",
    href: "#",
    published: true,
  },
];
