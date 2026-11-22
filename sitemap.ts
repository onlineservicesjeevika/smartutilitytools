import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://smartutilitytools.pages.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "", "/image-compressor/", "/image-resizer/", "/signature-resizer/",
    "/about/", "/contact/", "/privacy-policy/", "/terms/",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
