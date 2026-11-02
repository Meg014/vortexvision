import type { MetadataRoute } from "next";
import { isPublicSite, siteUrl } from "@/lib/metadata";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return isPublicSite ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${siteUrl.origin}/sitemap.xml` } : { rules: { userAgent: "*", disallow: "/" } };
}
