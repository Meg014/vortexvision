import Image from "next/image";
import { site } from "@/lib/site";

export function Brand() {
  return <a href="#inicio" className="brand" aria-label="VortexVision — início">
    <Image src="/images/logo-horizontal.png" width={2172} height={724} sizes="(max-width: 639px) 205px, 240px" alt={`${site.name} — ${site.signature}`} />
  </a>;
}
