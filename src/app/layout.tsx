import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import { site } from "@/lib/site";
import { isPublicSite, siteUrl } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "VortexVision | Software & Digital Solutions",
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/images/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/images/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: { index: isPublicSite, follow: isPublicSite },
  openGraph: { type: "website", locale: "pt_BR", siteName: site.name, title: site.slogan, description: site.description, url: "/" },
  twitter: { card: "summary_large_image", title: site.slogan, description: site.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body id="inicio">{children}</body></html>;
}
