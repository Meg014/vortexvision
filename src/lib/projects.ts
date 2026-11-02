export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  type: "Projeto demonstrativo" | "Projeto de cliente";
  url: string;
  description: string;
  cover: { src: string; alt: string; width: number; height: number };
};

export const projects: readonly PortfolioProject[] = [
  {
    slug: "pulso",
    title: "PULSO Training Club",
    category: "Landing Page • Fitness",
    type: "Projeto demonstrativo",
    url: "https://pulso-training-demo.pages.dev/",
    description: "Landing page para academia fictícia, com identidade visual própria, modalidades, planos e galeria interativa.",
    cover: {
      src: "/images/portfolio/pulso.webp",
      alt: "Página inicial do PULSO Training Club, com o título Supere seus limites e um atleta sobre fundo verde-lima.",
      width: 1200,
      height: 565,
    },
  },
];
