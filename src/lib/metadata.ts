export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000");
export const isPublicSite = siteUrl.protocol === "https:" && !["localhost", "127.0.0.1", "[::1]"].includes(siteUrl.hostname);
