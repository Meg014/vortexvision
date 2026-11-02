import { Check, ArrowUpRight } from "lucide-react";
import { principles } from "@/lib/site";

export function Differentials() {
  return <section id="diferenciais" className="section container differences" aria-labelledby="differences-title"><div><p className="eyebrow">02 / NOSSO JEITO DE CONSTRUIR</p><h2 id="differences-title">Mais intenção.<br /><span>Em cada entrega.</span></h2><p className="section-description">Um bom projeto vai além da aparência.<br /> Precisa funcionar bem, fazer sentido e estar preparado para evoluir.</p><div className="principle-note"><span className="small-orbit">↗</span><span>Do planejamento ao código,<br /><strong>o seu negócio é o ponto de partida.</strong></span></div></div>
    <div className="principles">{principles.map((principle, index) => <article key={principle.title}><span className="principle-index">0{index + 1}</span><div><h3>{principle.title}</h3><p>{principle.description}</p></div><Check size={18} aria-hidden="true" /></article>)}</div>
  </section>;
}

export function Portfolio() {
  return <section id="portfolio" className="section portfolio-section" aria-labelledby="portfolio-title"><div className="container"><div className="section-heading"><div><p className="eyebrow">03 / PORTFÓLIO</p><h2 id="portfolio-title">Espaço para o que<br /><span>vamos construir.</span></h2></div><p>Cada projeto tem uma história.<br /> Este será o lugar para compartilhar as nossas.</p></div>
    <div className="portfolio-empty"><div className="portfolio-symbol" aria-hidden="true"><span /><span /><ArrowUpRight /></div><div><span className="label">PRÓXIMAS PUBLICAÇÕES</span><h3>Novas soluções vão ganhar espaço aqui.</h3><p>Nosso portfólio está em preparação. Os projetos serão apresentados após a conclusão e a autorização de publicação.</p></div><span className="portfolio-status"><span /> Em preparação</span></div>
  </div></section>;
}

export function About() {
  return <section id="sobre" className="section container about-section" aria-labelledby="about-title"><div><p className="eyebrow">04 / A VORTEXVISION</p><h2 id="about-title">Visão para criar.<br /><span>Tecnologia para realizar.</span></h2></div><div className="about-copy"><p>A VortexVision é uma software house que aproxima ideias de soluções digitais úteis, bem construídas e alinhadas a cada negócio.</p><p>Unimos design e desenvolvimento para criar landing pages, sites institucionais e sistemas web personalizados. Acreditamos em escolhas conscientes, comunicação clara e atenção ao que realmente importa para quem vai usar.</p><a className="text-link" href="#contato">Vamos entender o seu projeto <ArrowUpRight size={18} aria-hidden="true" /></a></div></section>;
}
