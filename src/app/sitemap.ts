import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jeeorigin.com";
  const now = new Date();

  // Keep this list explicit for reliability.
  // As you add new pages, append here (or later we can auto-discover via a content registry).
  const routes: Array<{ path: string; changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"]; priority?: number }> = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/products/pulp", changeFrequency: "monthly", priority: 0.8 },
    { path: "/insights/advisory", changeFrequency: "monthly", priority: 0.6 },
    { path: "/insights/team", changeFrequency: "monthly", priority: 0.6 },
    { path: "/insights/career", changeFrequency: "monthly", priority: 0.6 },
    { path: "/insights/gallery", changeFrequency: "monthly", priority: 0.5 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms-conditions", changeFrequency: "yearly", priority: 0.3 },

    // Blog
    { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
    { path: "/blog/from-burning-fields-to-a-green-empire", changeFrequency: "yearly", priority: 0.8 },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
