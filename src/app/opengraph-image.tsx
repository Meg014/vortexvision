import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "VortexVision — Transformamos ideias em soluções digitais.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#0F172A", color: "#F1F5F9", display: "flex", flexDirection: "column", padding: 80, justifyContent: "space-between", borderBottom: "12px solid #136EF8" }}><div style={{ display: "flex", fontSize: 32 }}>Vortex<span style={{ color: "#38BDF8" }}>Vision</span></div><div style={{ display: "flex", flexDirection: "column", fontSize: 66, fontWeight: 700 }}><span>Transformamos ideias</span><span style={{ color: "#38BDF8" }}>em soluções digitais.</span></div><div style={{ fontSize: 22, color: "#A4B2C8" }}>Software & Digital Solutions</div></div>, size);
}
