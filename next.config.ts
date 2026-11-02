import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  poweredByHeader: false,
  // Os headers de produção são aplicados pelo Cloudflare Pages via public/_headers.
};
export default nextConfig;
