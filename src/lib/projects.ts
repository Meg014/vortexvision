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
      alt: "Página inicial do PULSO Training Club, com o título Supere seus limites e uma foto em preto e branco de um atleta levantando uma barra.",
      width: 1200,
      height: 565,
    },
  },
  {
    slug: "oromake",
    title: "OROMAKE Japanese Kitchen",
    category: "Landing Page • Gastronomia",
    type: "Projeto demonstrativo",
    url: "https://oromake-demo.pages.dev/",
    description: "Site demonstrativo de restaurante japonês, com identidade própria, cardápio interativo, fotografias gastronômicas e layout responsivo.",
    cover: {
      src: "/images/portfolio/oromake.webp",
      alt: "Hero do OROMAKE Japanese Kitchen, com o título Seu próximo sabor favorito é japonês e uma fotografia de um combinado de sushi e sashimi.",
      width: 1200,
      height: 625,
    },
  },
];
