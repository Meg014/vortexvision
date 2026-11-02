import type { MetadataRoute } from "next";
import { isPublicSite, siteUrl } from "@/lib/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return isPublicSite ? [{ url: siteUrl.origin, changeFrequency: "monthly", priority: 1 }] : [];
}
