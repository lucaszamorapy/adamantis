import { ICardStrategy, INavlinks } from "../types";

export const navLinks: INavlinks[] = [
  { href: "/", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

export const services: string[] = ["Landing Pages", "Sites Institucionais", "Sistemas Web", "Design"]

export const strategys: ICardStrategy[] = [
  {
    title: "01. DESIGN & ESTRATÉGIA",
    description: "Interfaces pensadas para conectar sua marca ao seu público."
  },
  {
    title: "02. DESENVOLVIMENTO",
    description: "Sites e aplicações desenvolvidos com tecnologia moderna e performance."
  },
  {
    title: "03. EXPERIÊNCIA DIGITAL",
    description: "Experiências digitais projetadas para gerar resultados."
  },
  {
    title: "04. INOVAÇÃO",
    description: "Soluções criativas que transformam ideias em novas possibilidades."
  },
]
