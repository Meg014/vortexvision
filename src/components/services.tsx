import { ArrowUpRight, AppWindow, Globe2, PanelsTopLeft, Wrench } from "lucide-react";
import { services } from "@/lib/site";

const icons = { landing: PanelsTopLeft, website: Globe2, system: AppWindow, support: Wrench };

export function Services() {
  return <section id="servicos" className="section services-section" aria-labelledby="services-title"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">01 / O QUE FAZEMOS</p><h2 id="services-title">A solução certa.<br /><span>Para o seu momento.</span></h2></div><p>Da primeira presença online a uma operação mais eficiente. Desenvolvemos o que faz sentido para o seu negócio.</p></div>
    <div className="services-grid">{services.map(service => { const Icon = icons[service.icon]; return <article key={service.number} className="service-item"><div className="service-top"><Icon size={27} strokeWidth={1.4} aria-hidden="true" /><span>{service.number}</span></div><h3>{service.title}</h3><p>{service.description}</p><div className="service-bottom"><span>{service.tags}</span><ArrowUpRight size={17} aria-hidden="true" /></div></article>; })}</div>
  </div></section>;
}
