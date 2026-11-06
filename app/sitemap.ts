import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/menu", "/about", "/gallery", "/contact"].map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: p === "/menu" ? "weekly" : "monthly",
    priority: p === "" ? 1 : 0.8,
  }));
}
