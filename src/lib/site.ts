export const site = {
  name: "VortexVision",
  signature: "Software & Digital Solutions",
  slogan: "Transformamos ideias em soluções digitais.",
  description: "Landing pages, sites institucionais e sistemas web sob medida. A VortexVision conecta design, tecnologia e os objetivos do seu negócio.",
  whatsapp: "5561982559528",
  phoneDisplay: "+55 (61) 98255-9528",
  initialMessage: "Olá! Conheci a VortexVision pelo site e gostaria de solicitar um orçamento.",
} as const;

export function whatsappUrl(message: string = site.initialMessage): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navigation = [
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
] as const;

export const services = [
  { icon: "landing", number: "01", title: "Landing Pages", description: "Uma página com direção clara. Design e conteúdo organizados para apresentar sua oferta e facilitar o próximo passo.", tags: "Campanhas · Lançamentos · Captação" },
  { icon: "website", number: "02", title: "Sites Institucionais", description: "Sua marca bem representada na web. Uma presença profissional que comunica quem você é e o que seu negócio oferece.", tags: "Presença digital · Credibilidade" },
  { icon: "system", number: "03", title: "Sistemas Web", description: "Tecnologia que se adapta à sua operação. Ferramentas personalizadas para organizar processos e simplificar rotinas.", tags: "Gestão · Automação · Integrações" },
  { icon: "support", number: "04", title: "Suporte & Evolução", description: "Seu projeto continua em movimento. Manutenção, ajustes e melhorias planejadas de acordo com novas necessidades.", tags: "Manutenção · Melhorias contínuas" },
] as const;

export const principles = [
  { title: "Qualidade em cada detalhe", description: "Design consistente e código organizado para uma experiência sólida, do primeiro acesso à manutenção." },
  { title: "Clareza do início ao fim", description: "Escopo definido, etapas organizadas e comunicação direta para você acompanhar a construção do seu projeto." },
  { title: "Uma boa experiência em toda tela", description: "Interfaces responsivas e acessíveis, pensadas para funcionar com naturalidade no celular e no computador." },
  { title: "Seu contexto, sua solução", description: "Cada decisão parte do que seu negócio precisa. A tecnologia acompanha o objetivo, sem complexidade desnecessária." },
] as const;
