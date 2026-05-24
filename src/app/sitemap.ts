import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = ["", "#about", "#products", "#services", "#enquiry", "#contact"];

  return sections.map((hash) => ({
    url: `${siteConfig.url}/${hash}`,
    lastModified: now,
    changeFrequency: hash === "" ? "weekly" : "monthly",
    priority: hash === "" ? 1.0 : 0.7,
  }));
}
