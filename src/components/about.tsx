import Image from "next/image";
import { Check, ArrowUpRight } from "lucide-react";
import { principles } from "@/lib/site";
import { projects } from "@/lib/projects";

export function Differentials() {
  return <section id="diferenciais" className="section container differences" aria-labelledby="differences-title"><div><p className="eyebrow">02 / NOSSO JEITO DE CONSTRUIR</p><h2 id="differences-title">Mais intenção.<br /><span>Em cada entrega.</span></h2><p className="section-description">Um bom projeto vai além da aparência.<br /> Precisa funcionar bem, fazer sentido e estar preparado para evoluir.</p><div className="principle-note"><span className="small-orbit">↗</span><span>Do planejamento ao código,<br /><strong>o seu negócio é o ponto de partida.</strong></span></div></div>
    <div className="principles">{principles.map((principle, index) => <article key={principle.title}><span className="principle-index">0{index + 1}</span><div><h3>{principle.title}</h3><p>{principle.description}</p></div><Check size={18} aria-hidden="true" /></article>)}</div>
  </section>;
}

export function Portfolio() {
  return <section id="portfolio" className="section portfolio-section" aria-labelledby="portfolio-title"><div className="container"><div className="section-heading"><div><p className="eyebrow">03 / PORTFÓLIO</p><h2 id="portfolio-title">Ideias que ganham<br /><span>forma e presença.</span></h2></div><p>Conheça os projetos que traduzem<br /> nosso olhar para design e tecnologia.</p></div>
    <div className="portfolio-grid">{projects.map((project) => (
      <article className="portfolio-card" key={project.slug} aria-labelledby={`project-${project.slug}`}>
        <div className="portfolio-cover"><Image src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 959px) calc((100vw - 92px) / 2), (max-width: 1100px) calc((100vw - 120px) / 3), (max-width: 1296px) calc((100vw - 152px) / 3), 382px" /></div>
        <div className="portfolio-content">
          <p className="portfolio-category">{project.category}</p>
          <h3 id={`project-${project.slug}`}>{project.title}</h3>
          <p className="portfolio-description">{project.description}</p>
          <span className="portfolio-type">{project.type}</span>
          <a className="button button-outline" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Ver demonstração de ${project.title} (abre em nova aba)`}>Ver demonstração <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </article>
    ))}</div>
  </div></section>;
}

export function About() {
  return <section id="sobre" className="section container about-section" aria-labelledby="about-title"><div><p className="eyebrow">04 / A VORTEXVISION</p><h2 id="about-title">Visão para criar.<br /><span>Tecnologia para realizar.</span></h2></div><div className="about-copy"><p>A VortexVision é uma software house que aproxima ideias de soluções digitais úteis, bem construídas e alinhadas a cada negócio.</p><p>Unimos design e desenvolvimento para criar landing pages, sites institucionais e sistemas web personalizados. Acreditamos em escolhas conscientes, comunicação clara e atenção ao que realmente importa para quem vai usar.</p><a className="text-link" href="#contato">Vamos entender o seu projeto <ArrowUpRight size={18} aria-hidden="true" /></a></div></section>;
}
