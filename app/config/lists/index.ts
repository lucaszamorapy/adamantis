import { ICardStrategy, INavlinks, IOurServices, IProjects, ServicePlan } from "../types";

export const navLinks: INavlinks[] = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
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

export const ourServices: IOurServices[] = [
  {
    type: "Landing Pages",
    services: [
      {
        plan: ServicePlan.Start,
        price: 800,
        color: "#71717A",
        recommend: false,
        items: [
          "Até 5 seções do site",
          "Design personalizado",
          "Responsivo",
          "Formulário de Contato",
          "Redirecionamento para WhatsApp",
          "SEO Básico",
        ],
      },
      {
        plan: ServicePlan.Vibranium,
        price: 1200,
        color: "#3B82F6", // Azul / tecnologia
        recommend: true,
        items: [
          "Tudo do Start",
          "Até 8 seções do site",
          "Google Analytics",
          "Search Console",
          "Animações",
          "Performance otimizada",
        ],
      },
      {
        plan: ServicePlan.Adamantium,
        price: 1800,
        color: "#F59E0B", // Dourado / premium
        recommend: false,
        items: [
          "Tudo do Vibranium",
          "Seções ilimitadas do site",
          "Copy estratégica",
          "UX personalizada",
          "Animações premium",
        ],
      },
    ]
  },
  {
    type: "Sites Institucionais",
    services: [
      {
        plan: ServicePlan.Start,
        color: "#71717A",
        price: 1600,
        recommend: false,
        items: ["Até 5 páginas do site", "Responsivo", "Formulário de Contato", "Redirecionamento para WhatsApp", "SEO Básico"]
      },
      {
        plan: ServicePlan.Vibranium,
        color: "#3B82F6",
        price: 1200,
        recommend: true,
        items: ["Tudo do Start", "Até 10 páginas do site", "Blog", "Analytics", "Maps"]
      },
      {
        plan: ServicePlan.Adamantium,
        color: "#F59E0B",
        price: 1800,
        recommend: false,
        items: ["Tudo do Vibranium", "Páginas ilimitadas do site", "Integrações", "Performance premium", "Consultoria"]
      }
    ]
  },
  {
    type: "Sistemas Web",
    services: [
      {
        plan: ServicePlan.Start,
        color: "#71717A",
        price: 1600,
        recommend: false,
        items: [
          "Sistema web básico",
          "Até 5 páginas/telas",
          "Design responsivo",
          "Formulários personalizados",
          "Autenticação de usuários",
          "Banco de dados",
          "SEO Básico",
        ],
      },
      {
        plan: ServicePlan.Vibranium,
        color: "#3B82F6",
        price: 2800,
        recommend: true,
        items: [
          "Tudo do Start",
          "Até 10 páginas/telas",
          "Dashboard administrativo",
          "Integrações com APIs",
          "Analytics",
          "Sistema de permissões",
          "Performance otimizada",
        ],
      },
      {
        plan: ServicePlan.Adamantium,
        color: "#F59E0B",
        price: 4500,
        recommend: false,
        items: [
          "Tudo do Vibranium",
          "Páginas/telas ilimitadas",
          "Integrações avançadas",
          "Automações personalizadas",
          "Arquitetura escalável",
          "Performance premium",
          "Consultoria técnica",
        ],
      },
    ]
  },
  {
    type: "Identidade Visual",
    services: [
      {
        plan: ServicePlan.Start,
        color: "#71717A",
        price: 350,
        recommend: false,
        items: [
          "Logo"
        ],
      },
      {
        plan: ServicePlan.Vibranium,
        color: "#3B82F6",
        price: 700,
        recommend: true,
        items: [
          "Tudo do Start",
          "Manual",
        ],
      },
    ]
  }
]

export const projects: IProjects[] = [
  {
    title: "Dra. Advogada | Template",
    image: "/projects/images/370x500.svg",
    description: "Template desenvolvido como modelo de Landing Page para escritórios de advocacia, com foco em autoridade, credibilidade e conversão de potenciais clientes.",
    link: "https://advogado-template-lp.vercel.app/"
  },
  {
    title: "Lucas Zamora | Portfólio",
    image: "/projects/images/370x500.svg",
    description: "Landing page desenvolvida para o foco de portfólio pessoal de desenvolvedor, com a temática do jogo The Witcher.",
    link: "https://portfolio-seven-lemon-a13ilaptj1.vercel.app/"
  },
  {
    title: "R2R Eventos",
    image: "/projects/images/370x500.svg",
    description: "Landing page com o foco de divulgação de serviços do cliente, com formulário de contato e redirecionamento para WhatsApp.",
    link: "https://r2r-eventos.vercel.app/"
  },
  {
    title: "Ubank | Template",
    image: "/projects/images/370x500.svg",
    description: "Template criado para representar empresas do mercado financeiro com uma presença digital profissional.",
    link: "https://r2r-eventos.vercel.app/"
  },
]
