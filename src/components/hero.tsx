import { ArrowDown, ArrowUpRight } from "lucide-react";
import { WhatsAppLink } from "./whatsapp-link";
import Image from "next/image";

export function Hero() {
  return <section className="hero container" aria-labelledby="hero-title">
    <div className="hero-copy"><p className="eyebrow"><span /> SOFTWARE & DIGITAL SOLUTIONS</p>
      <h1 id="hero-title">Transformamos<br className="desktop-break" /> ideias em<br /> <span>soluções digitais.</span></h1>
      <p className="hero-description">Design com propósito. Tecnologia bem construída.<br className="desktop-break" /> Criamos sites e sistemas que conectam sua marca ao que vem a seguir.</p>
      <div className="hero-actions"><WhatsAppLink>Solicitar orçamento <ArrowUpRight size={18} /></WhatsAppLink><a className="text-link" href="#servicos">Explorar serviços <ArrowDown size={17} aria-hidden="true" /></a></div>
      <p className="hero-note"><span /> Do primeiro conceito à experiência final.</p>
    </div><div className="hero-art">
      <div className="art-coordinate" aria-hidden="true">VV / DIGITAL ENGINEERING</div>
      <Image src="/images/hero-vortexvision.png" width={1254} height={1254} alt="" preload sizes="(max-width: 639px) 340px, (max-width: 1100px) 45vw, 520px" />
      <div className="art-caption" aria-hidden="true"><span className="status-dot" /> IDEIA. CÓDIGO. MOVIMENTO.<span>01 — ∞</span></div>
    </div>
    <div className="hero-bottom"><span>ESTRATÉGIA + DESIGN + DESENVOLVIMENTO</span><a href="#servicos" aria-label="Conheça nossos serviços"><ArrowDown size={18} /></a><span>FEITO PARA O SEU PRÓXIMO PASSO</span></div>
  </section>;
}
