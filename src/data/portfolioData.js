export const profile = {
  name: "Mário Fernandes",
  fullName: "Mário Antônio Fernandes de Oliveira",
  birthDate: { year: 1998, month: 8, day: 6 },
  email: "marioantonio340@gmail.com",
  github: "https://github.com/marioantonio340",
  githubUsername: "marioantonio340",
  linkedin: "https://www.linkedin.com/in/mariofernandes340/",
  avatarUrl: "https://avatars.githubusercontent.com/u/43358964?v=4",
  company: "Grupo Setta",
};

const baseProjects = [
  {
    id: "time-capsule",
    repoName: "time-capsule",
    category: "web",
    tech_stack: ["TypeScript", "React", "Next.js", "Node.js"],
    github_url: "https://github.com/marioantonio340/time-capsule",
    demo_url: "",
    accent: "olive",
  },
  {
    id: "convert-case",
    repoName: "convert-case",
    category: "mobile",
    tech_stack: ["HTML5", "CSS3", "JavaScript"],
    github_url: "https://github.com/marioantonio340/convert-case",
    demo_url: "",
    accent: "lime",
  },
  {
    id: "json-server-vercel",
    repoName: "json-server-vercel",
    category: "api",
    tech_stack: ["JavaScript", "Node.js", "JSON Server", "Vercel"],
    github_url: "https://github.com/marioantonio340/json-server-vercel",
    demo_url: "https://json-server-vercel-eta-virid.vercel.app",
    accent: "electric",
  },
  {
    id: "fortinite-meta-gaming",
    repoName: "fortinite-meta-gaming",
    category: "web",
    tech_stack: ["TypeScript", "Web App"],
    github_url: "https://github.com/marioantonio340/fortinite-meta-gaming",
    demo_url: "",
    accent: "olive",
  },
  {
    id: "desafios-full-cycle",
    repoName: "desafios-full-cycle",
    category: "api",
    tech_stack: ["Docker", "Go", "Node.js", "Architecture"],
    github_url: "https://github.com/marioantonio340/desafios-full-cycle",
    demo_url: "",
    accent: "lime",
  },
  {
    id: "aspnet-rest-api",
    repoName: "ASP.NET-REST-API",
    category: "api",
    tech_stack: ["C#", ".NET Core", "SQL Server", "Swagger"],
    github_url: "https://github.com/marioantonio340/ASP.NET-REST-API",
    demo_url: "",
    accent: "electric",
  },
  {
    id: "app-repositories",
    repoName: "App-Repositories",
    category: "mobile",
    tech_stack: ["Kotlin", "Android", "REST API"],
    github_url: "https://github.com/marioantonio340/App-Repositories",
    demo_url: "",
    accent: "olive",
  },
];

const projectCopy = {
  pt: {
    "time-capsule": {
      title: "Cápsula do Tempo • NLW Spacetime",
      subtitle: "Timeline Full Stack de Memórias",
      description:
        "Aplicação full-stack onde usuários registram textos, fotos e vídeos em uma linha do tempo cronológica organizada por mês e ano.",
    },
    "convert-case": {
      title: "Convert Case Pro",
      subtitle: "Produtividade & Formatação de Texto",
      description:
        "Transformador e formatador de texto instantâneo desenvolvido para agilizar edição e padronização de textos com foco em usabilidade e interface responsiva.",
    },
    "json-server-vercel": {
      title: "Rent a Battery API",
      subtitle: "REST API Serverless na Vercel",
      description:
        "API REST estruturada com JSON Server e deploy contínuo na Vercel para simulação e consumo de endpoints de locação de baterias.",
    },
    "fortinite-meta-gaming": {
      title: "Fortnite Meta Gaming",
      subtitle: "Aplicação Web em TypeScript",
      description:
        "Projeto web estruturado em TypeScript voltado à organização de dados e consulta de meta competitiva para jogadores.",
    },
    "desafios-full-cycle": {
      title: "Desafios Full Cycle",
      subtitle: "Docker, Go & Node.js",
      description:
        "Implementações práticas de engenharia de software e otimização de imagens Docker multi-stage com Go e Node.js.",
    },
    "aspnet-rest-api": {
      title: "ASP.NET Core REST API",
      subtitle: "CRUD Corporativo + Swagger",
      description:
        "Web API RESTful em .NET Core com persistência em SQL Server e documentação interativa de endpoints via Swagger.",
    },
    "app-repositories": {
      title: "App Repositories",
      subtitle: "Mobile Android Nativo",
      description:
        "Aplicativo Android desenvolvido em Kotlin para buscar, listar e inspecionar repositórios públicos do GitHub.",
    },
  },
  en: {
    "time-capsule": {
      title: "Time Capsule • NLW Spacetime",
      subtitle: "Full Stack Memory Timeline",
      description:
        "Full-stack application where users capture text, photos, and videos into a chronological timeline organized by month and year.",
    },
    "convert-case": {
      title: "Convert Case Pro",
      subtitle: "Text Productivity & Formatting",
      description:
        "Instant text transformer and formatter built to speed up text editing and standardization with a clean, responsive UI.",
    },
    "json-server-vercel": {
      title: "Rent a Battery API",
      subtitle: "Serverless REST API on Vercel",
      description:
        "REST API powered by JSON Server and continuous Vercel deployment to simulate and serve battery rental endpoints.",
    },
    "fortinite-meta-gaming": {
      title: "Fortnite Meta Gaming",
      subtitle: "TypeScript Web Application",
      description:
        "TypeScript web application focused on organizing game data and tracking competitive meta insights.",
    },
    "desafios-full-cycle": {
      title: "Full Cycle Challenges",
      subtitle: "Docker, Go & Node.js",
      description:
        "Hands-on software architecture exercises and multi-stage Docker image optimization using Go and Node.js.",
    },
    "aspnet-rest-api": {
      title: "ASP.NET Core REST API",
      subtitle: "Enterprise CRUD + Swagger",
      description:
        "RESTful Web API built with .NET Core, SQL Server persistence, and interactive endpoint documentation via Swagger.",
    },
    "app-repositories": {
      title: "App Repositories",
      subtitle: "Native Android App",
      description:
        "Android application built in Kotlin to search, list, and inspect public GitHub repositories.",
    },
  },
};

const baseStackCategories = [
  {
    id: "frontend",
    accent: "olive",
    items: [
      { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg", invertDark: true },
      { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "shadcn/ui", badge: "UI" },
      { name: "Radix UI", badge: "A11y" },
    ],
  },
  {
    id: "backend",
    accent: "electric",
    items: [
      { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg" },
      { name: "Prisma", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg", invertDark: true },
      { name: "Zod", badge: "Schema" },
      { name: ".NET / C#", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg" },
      { name: "Cloudflare Workers", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cloudflare/cloudflare-original.svg" },
    ],
  },
  {
    id: "databases",
    accent: "lime",
    items: [
      { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
      { name: "Cloudflare D1", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cloudflare/cloudflare-original.svg" },
      { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
      { name: "SQL Server", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    ],
  },
  {
    id: "salesforce",
    accent: "electric",
    items: [
      { name: "Apex", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/salesforce/salesforce-original.svg" },
      { name: "Flows", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/salesforce/salesforce-original.svg" },
      { name: "SF CLI", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/salesforce/salesforce-original.svg" },
      { name: "DevOps Center", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/salesforce/salesforce-original.svg" },
    ],
  },
  {
    id: "integrations",
    accent: "olive",
    items: [
      { name: "TOTVS Protheus", badge: "ERP" },
      { name: "Power BI Embedded", badge: "BI" },
      { name: "Microsoft Entra ID", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" },
      { name: "SharePoint", badge: "M365" },
      { name: "MCP Servers", badge: "AI" },
      { name: "Claude Code", badge: "AI" },
    ],
  },
  {
    id: "testing",
    accent: "lime",
    items: [
      { name: "Vitest", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vitest/vitest-original.svg" },
      { name: "Playwright", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/playwright/playwright-original.svg" },
      { name: "ESLint", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg" },
      { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-plain.svg" },
      { name: "Linux (Fedora)", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fedora/fedora-plain.svg" },
      { name: "Git & GitHub", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
    ],
  },
];

const translations = {
  pt: {
    location: "Patos de Minas, MG • Brasil",
    role: "Desenvolvedor Full Stack",
    nav: {
      items: [
        { id: "sobre", label: "Sobre" },
        { id: "experiencia", label: "Experiência" },
        { id: "projetos", label: "Projetos" },
        { id: "stack", label: "Stack" },
        { id: "certificacoes", label: "Certificações" },
        { id: "contato", label: "Contato" },
      ],
      mobileItems: [
        { id: "sobre", label: "Sobre Mim" },
        { id: "experiencia", label: "Experiência & Formação" },
        { id: "projetos", label: "Projetos" },
        { id: "stack", label: "Stack Tecnológica" },
        { id: "certificacoes", label: "Certificações" },
        { id: "contato", label: "Contato" },
      ],
      cta: "Falar Comigo",
      mobileCta: "Entrar em Contato",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },
    hero: {
      greeting: "Olá, eu sou",
      typeSequence: [
        "A Full-Stack Developer.",
        1600,
        "Desenvolvedor Full Stack no Grupo Setta.",
        1600,
        "Formado em Sistemas de Informação — UNIPAM.",
        1400,
        "A problem solver.",
        1300,
        "An innovative thinker.",
        1300,
        "A....",
        900,
        "A.... cool guy?",
        1400,
        "Ok...",
        900,
        "Ok... I'm running out of ideas...",
        1300,
        "Uhh...",
        900,
        "Uhh... you can scroll down now...",
        1500,
        "Seriously???",
        1100,
        "You're uh...",
        900,
        "You're uh... still here?",
        1300,
        "Ok, this has been fun, but I'm gonna restart the loop now...",
        1400,
        "See ya! :)",
        900,
      ],
      yearsOldLabel: "anos",
      introBeforeAge: "Tenho",
      introMiddle: "e atuo como",
      introRole: "Desenvolvedor Full Stack",
      introAt: "no",
      introAfterCompany:
        ", projetando sistemas internos de ponta a ponta — de front-ends em React, Next.js e TypeScript a back-ends em Node.js, integrações com ERP TOTVS Protheus, Microsoft e ecossistema Salesforce.",
      ctaProjects: "Explorar Projetos",
      metrics: [
        { val: "Front-end", label: "React, Next.js & TS", tone: "" },
        { val: "Back-end & DB", label: "Node, Prisma & SQL", tone: "olive" },
        { val: "Salesforce & IA", label: "Apex, Flows & MCP", tone: "lime" },
      ],
      card: {
        focusItems: [
          {
            id: "fullstack",
            accent: "olive",
            title: "Sistemas Web Ponta a Ponta",
            desc: "CRMs próprios, portais de BI, APIs em Node.js/.NET e interfaces em React, Next.js e TypeScript.",
          },
          {
            id: "integrations",
            accent: "electric",
            title: "Integrações ERP, Microsoft & Salesforce",
            desc: "TOTVS Protheus, Microsoft Entra ID, Power BI Embedded, SharePoint, Apex e Flows.",
          },
          {
            id: "ai",
            accent: "lime",
            title: "IA Aplicada & Qualidade",
            desc: "Claude Code, servidores MCP, Vitest, Playwright e revisão contínua de código.",
          },
        ],
        footerBadge: "Full Stack Developer",
      },
    },
    about: {
      eyebrow: "Sobre Mim",
      heading: "Desenvolvimento Full Stack orientado a resolver problemas reais.",
      subtitle:
        "Sistemas internos de ponta a ponta, integrações corporativas e engenharia moderna com foco em qualidade e entrega contínua.",
      birthDisplay: "06 de agosto de 1998",
      birthShort: "06/08/1998",
      ageUnitShort: "a",
      monthUnitShort: "m",
      dayUnitShort: "d",
      yearsLabel: "anos",
      storyP1BeforeAge: "Sou",
      storyP1Tenho: ", tenho",
      storyP1Born: "(nascido em",
      storyP1AfterBorn: ") e sou natural de",
      storyP1Grad: "Graduado em",
      storyP1Degree: "Sistemas de Informação pelo UNIPAM",
      storyP1AfterGrad: "(2023), atuo como",
      storyP1Role: "Desenvolvedor Full Stack no Grupo Setta",
      storyP2:
        "Construo sistemas internos completos de ponta a ponta — incluindo CRM próprio, portais de BI, integrações com o ERP TOTVS Protheus e com a plataforma Microsoft (Entra ID, Power BI Embedded e SharePoint). Também trabalho com o ecossistema Salesforce (Apex, Flows, SF CLI, DevOps Center), conduzindo a evolução e migração de processos comerciais para aplicações próprias.",
      storyP3:
        "Utilizo AI-Driven Engineering no dia a dia com Claude Code e servidores MCP para acelerar entregas, sempre aliado a revisão de código, boas práticas de arquitetura e testes automatizados com Vitest e Playwright.",
      factsTitle: "Ficha Técnica",
      factsLabels: {
        ageLive: "Idade (Tempo Real)",
        birth: "Nascimento",
        role: "Cargo Atual",
        company: "Empresa",
        education: "Formação",
        languages: "Idiomas",
      },
      factsValues: {
        role: "Desenvolvedor Full Stack",
        education: "Sistemas de Informação • UNIPAM",
        languages: "Português (Nativo) • Inglês (Interm.)",
      },
      pillars: [
        {
          id: "fullstack-erp",
          accent: "olive",
          badge: "Ponta a Ponta",
          title: "Desenvolvimento Full Stack & Arquitetura",
          description:
            "Construção completa de aplicações web, APIs e sistemas internos — do banco de dados e regras de negócio ao front-end moderno em React, Next.js e TypeScript.",
        },
        {
          id: "salesforce",
          accent: "electric",
          badge: "Integrações & CRM",
          title: "ERP, Microsoft & Ecossistema Salesforce",
          description:
            "Integrações corporativas com TOTVS Protheus e Microsoft (Entra ID, Power BI Embedded, SharePoint), além de Apex, Flows, SF CLI e migração de processos para apps próprios.",
        },
        {
          id: "ai-driven",
          accent: "lime",
          badge: "Qualidade & IA",
          title: "AI-Driven Engineering & Testes",
          description:
            "Uso prático de IA no fluxo de desenvolvimento (Claude Code e servidores MCP) aliado a revisão rigorosa de código e testes automatizados com Vitest e Playwright.",
        },
      ],
    },
    experience: {
      eyebrow: "Trajetória & Formação",
      heading: "Experiência profissional e acadêmica.",
      subtitle:
        "Histórico sólido conectando operação de negócios, ecossistema Salesforce, ERP e engenharia de software moderna.",
      items: [
        {
          period: "Dez 2023 — Atual",
          role: "Desenvolvedor Full Stack",
          organization: "Grupo Setta",
          location: "Patos de Minas, MG",
          type: "Tempo integral",
          accent: "olive",
          summary:
            "Desenvolvimento de sistemas internos de ponta a ponta (CRM, portais de BI, integrações com ERP e ferramentas de apoio ao time), além de atuação direta no ecossistema Salesforce.",
          highlights: [
            "Desenvolvimento full stack com React, Next.js, TypeScript, Node.js, Prisma e PostgreSQL/MySQL.",
            "Integrações corporativas com o ERP TOTVS Protheus e plataforma Microsoft (Entra ID, Power BI Embedded, SharePoint).",
            "Atuação em Salesforce (Apex, Flows, SF CLI, DevOps Center) e migração de processos comerciais para aplicações próprias.",
            "Entrega acelerada com AI-Driven Engineering (Claude Code & MCP) com validação via Vitest, Playwright e ESLint.",
          ],
        },
        {
          period: "2018 — 2023",
          role: "Bacharelado em Sistemas de Informação",
          organization: "UNIPAM — Centro Universitário de Patos de Minas",
          location: "Patos de Minas, MG",
          type: "Formação Acadêmica",
          accent: "electric",
          summary:
            "Formação sólida em engenharia de software, estruturas de dados, bancos de dados relacionais, arquitetura de sistemas e gestão de infraestrutura de TI.",
          highlights: [
            "Base acadêmica consolidada em desenvolvimento web, mobile, APIs REST e engenharia de requisitos.",
          ],
        },
      ],
      certsEyebrow: "Licenças & Certificações",
      certsHeading: "Qualificações verificadas.",
      certsSubtitle:
        "Certificações oficiais em Salesforce, Arquitetura de Software, Containers, ITIL e Desenvolvimento Mobile.",
      certifications: [
        { title: "Salesforce Certified Associate", issuer: "Salesforce", category: "CRM & Cloud", accent: "electric" },
        { title: "Fundamentos da Arquitetura de Software", issuer: "Full Cycle", category: "Arquitetura", accent: "olive" },
        { title: "Curso de Docker", issuer: "Full Cycle", category: "Containers & Infra", accent: "olive" },
        { title: "Gestão da Biblioteca de Infraestrutura de TI", issuer: "Alura", category: "Governança & ITIL", accent: "lime" },
        { title: "Inter Android Developer", issuer: "Digital Innovation One (DIO)", category: "Mobile Android", accent: "electric" },
        { title: "Santander Bootcamp | Mobile Developer", issuer: "Digital Innovation One (DIO)", category: "Mobile Kotlin", accent: "lime" },
      ],
    },
    projects: {
      eyebrow: "Portfólio & Código Aberto",
      heading: "Projetos e entregas em destaque.",
      subtitle:
        "Seleção de aplicações web, APIs, containers e projetos mobile publicados no meu GitHub.",
      categories: [
        { id: "all", label: "Todos" },
        { id: "web", label: "Web & Full Stack" },
        { id: "api", label: "APIs & Arquitetura" },
        { id: "mobile", label: "Mobile & Utilitários" },
      ],
      liveDemo: "Acessar Projeto",
      viewRepo: "Ver Repositório",
      starsTooltip: "Stars no GitHub",
      moreCodeTitle: "Quer explorar mais código?",
      moreCodeDescPrefix: "+",
      moreCodeDescSuffix:
        "repositórios públicos no GitHub cobrindo TypeScript, Node.js, Docker, C# e Kotlin.",
    },
    stack: {
      eyebrow: "Tecnologias & Ferramentas",
      heading: "Stack completa do front ao deploy.",
      subtitle:
        "Conjunto de linguagens, frameworks, bancos de dados, ecossistema Salesforce e ferramentas de IA usadas em produção.",
      titles: {
        frontend: "Front-end",
        backend: "Back-end & APIs",
        databases: "Bancos de Dados",
        salesforce: "Salesforce",
        integrations: "Integrações & IA",
        testing: "Testes & Infraestrutura",
      },
    },
    contact: {
      badge: "Contato Direto",
      title: "Vamos conversar sobre engenharia de software, projetos ou oportunidades.",
      text: "Sempre aberto para trocar ideias sobre desenvolvimento Full Stack, arquitetura de sistemas, integrações corporativas, ecossistema Salesforce e novos desafios técnicos.",
      sendEmail: "Enviar E-mail",
      connectLinkedIn: "Conectar no LinkedIn",
      primaryEmailLabel: "E-mail Principal",
      copy: "Copiar",
      copied: "Copiado!",
      copyAria: "Copiar e-mail",
    },
    footer: {
      bio: "Desenvolvedor Full Stack no Grupo Setta focado em aplicações web modernas, APIs, integrações corporativas e ecossistema Salesforce.",
      navTitle: "Navegação",
      channelsTitle: "Conexões",
      navLinks: [
        { id: "top", label: "Início" },
        { id: "sobre", label: "Sobre Mim" },
        { id: "experiencia", label: "Experiência & Certificações" },
        { id: "projetos", label: "Projetos" },
        { id: "stack", label: "Stack Tecnológica" },
      ],
      copyrightSuffix: "Portfólio Pessoal.",
      tagline: "Full Stack Developer • React, TypeScript & Node.js",
    },
    scrollToTop: "Voltar ao topo",
  },

  en: {
    location: "Patos de Minas, MG • Brazil",
    role: "Full Stack Developer",
    nav: {
      items: [
        { id: "sobre", label: "About" },
        { id: "experiencia", label: "Experience" },
        { id: "projetos", label: "Projects" },
        { id: "stack", label: "Stack" },
        { id: "certificacoes", label: "Certifications" },
        { id: "contato", label: "Contact" },
      ],
      mobileItems: [
        { id: "sobre", label: "About Me" },
        { id: "experiencia", label: "Experience & Education" },
        { id: "projetos", label: "Projects" },
        { id: "stack", label: "Tech Stack" },
        { id: "certificacoes", label: "Certifications" },
        { id: "contato", label: "Contact" },
      ],
      cta: "Get in Touch",
      mobileCta: "Get in Touch",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      greeting: "Hi, I'm",
      typeSequence: [
        "A Full-Stack Developer.",
        1600,
        "Full Stack Developer at Grupo Setta.",
        1600,
        "A UNIPAM Information Systems graduate.",
        1400,
        "A problem solver.",
        1300,
        "An innovative thinker.",
        1300,
        "A....",
        900,
        "A.... cool guy?",
        1400,
        "Ok...",
        900,
        "Ok... I'm running out of ideas...",
        1300,
        "Uhh...",
        900,
        "Uhh... you can scroll down now...",
        1500,
        "Seriously???",
        1100,
        "You're uh...",
        900,
        "You're uh... still here?",
        1300,
        "Ok, this has been fun, but I'm gonna restart the loop now...",
        1400,
        "See ya! :)",
        900,
      ],
      yearsOldLabel: "years old",
      introBeforeAge: "I'm",
      introMiddle: "and work as a",
      introRole: "Full Stack Developer",
      introAt: "at",
      introAfterCompany:
        ", building internal systems end-to-end — from React, Next.js, and TypeScript front-ends to Node.js back-ends, TOTVS Protheus ERP, Microsoft integrations, and the Salesforce ecosystem.",
      ctaProjects: "Explore Projects",
      metrics: [
        { val: "Front-end", label: "React, Next.js & TS", tone: "" },
        { val: "Back-end & DB", label: "Node, Prisma & SQL", tone: "olive" },
        { val: "Salesforce & AI", label: "Apex, Flows & MCP", tone: "lime" },
      ],
      card: {
        focusItems: [
          {
            id: "fullstack",
            accent: "olive",
            title: "End-to-End Web Systems",
            desc: "Custom CRMs, BI portals, Node.js/.NET APIs, and modern React, Next.js & TypeScript interfaces.",
          },
          {
            id: "integrations",
            accent: "electric",
            title: "ERP, Microsoft & Salesforce Integrations",
            desc: "TOTVS Protheus, Microsoft Entra ID, Power BI Embedded, SharePoint, Apex, and Flows.",
          },
          {
            id: "ai",
            accent: "lime",
            title: "Applied AI & Quality",
            desc: "Claude Code, MCP servers, Vitest, Playwright, and continuous code review.",
          },
        ],
        footerBadge: "Full Stack Developer",
      },
    },
    about: {
      eyebrow: "About Me",
      heading: "Full Stack engineering focused on solving real business problems.",
      subtitle:
        "End-to-end internal systems, enterprise integrations, and modern software engineering with a strong focus on quality and continuous delivery.",
      birthDisplay: "August 6, 1998",
      birthShort: "08/06/1998",
      ageUnitShort: "y",
      monthUnitShort: "m",
      dayUnitShort: "d",
      yearsLabel: "years old",
      storyP1BeforeAge: "I'm",
      storyP1Tenho: ", I'm",
      storyP1Born: "(born on",
      storyP1AfterBorn: ") and based in",
      storyP1Grad: "I hold a Bachelor's degree in",
      storyP1Degree: "Information Systems from UNIPAM",
      storyP1AfterGrad: "(2023) and work as a",
      storyP1Role: "Full Stack Developer at Grupo Setta",
      storyP2:
        "I build complete internal systems from end to end — including custom CRMs, BI portals, and integrations with the TOTVS Protheus ERP and Microsoft ecosystem (Entra ID, Power BI Embedded, and SharePoint). I also work across the Salesforce platform (Apex, Flows, SF CLI, DevOps Center), migrating commercial workflows into dedicated in-house applications.",
      storyP3:
        "I apply AI-Driven Engineering in my daily workflow using Claude Code and MCP servers to accelerate delivery, always paired with code review, clean architecture, and automated testing with Vitest and Playwright.",
      factsTitle: "Profile Facts",
      factsLabels: {
        ageLive: "Age (Real-Time)",
        birth: "Birthdate",
        role: "Current Role",
        company: "Company",
        education: "Education",
        languages: "Languages",
      },
      factsValues: {
        role: "Full Stack Developer",
        education: "B.S. Information Systems • UNIPAM",
        languages: "Portuguese (Native) • English (Interm.)",
      },
      pillars: [
        {
          id: "fullstack-erp",
          accent: "olive",
          badge: "End-to-End",
          title: "Full Stack Development & Architecture",
          description:
            "Complete delivery of web applications, APIs, and internal tools — from database modeling and business logic to modern React, Next.js, and TypeScript UIs.",
        },
        {
          id: "salesforce",
          accent: "electric",
          badge: "Integrations & CRM",
          title: "ERP, Microsoft & Salesforce Ecosystem",
          description:
            "Enterprise integrations with TOTVS Protheus and Microsoft (Entra ID, Power BI Embedded, SharePoint), alongside Apex, Flows, SF CLI, and process migration.",
        },
        {
          id: "ai-driven",
          accent: "lime",
          badge: "Quality & AI",
          title: "AI-Driven Engineering & Testing",
          description:
            "Pragmatic AI tooling in the development workflow (Claude Code & MCP servers) backed by thorough code reviews and automated tests with Vitest and Playwright.",
        },
      ],
    },
    experience: {
      eyebrow: "Background & Education",
      heading: "Professional and academic experience.",
      subtitle:
        "Proven track record bridging business operations, Salesforce, enterprise ERPs, and modern full-stack engineering.",
      items: [
        {
          period: "Dec 2023 — Present",
          role: "Full Stack Developer",
          organization: "Grupo Setta",
          location: "Patos de Minas, MG • Brazil",
          type: "Full-time",
          accent: "olive",
          summary:
            "End-to-end engineering of internal systems (CRM, BI portals, ERP integrations, and internal tooling) alongside active development in the Salesforce ecosystem.",
          highlights: [
            "Full-stack development with React, Next.js, TypeScript, Node.js, Prisma, and PostgreSQL/MySQL.",
            "Enterprise integrations with TOTVS Protheus ERP and Microsoft platform (Entra ID, Power BI Embedded, SharePoint).",
            "Salesforce development and governance (Apex, Flows, SF CLI, DevOps Center) and migration of sales workflows into custom apps.",
            "AI-Driven Engineering (Claude Code & MCP) paired with automated testing via Vitest, Playwright, and ESLint.",
          ],
        },
        {
          period: "2018 — 2023",
          role: "B.S. in Information Systems",
          organization: "UNIPAM — University Center of Patos de Minas",
          location: "Patos de Minas, MG • Brazil",
          type: "Education",
          accent: "electric",
          summary:
            "Solid academic foundation in software engineering, data structures, relational databases, systems architecture, and IT infrastructure management.",
          highlights: [
            "Core background in web and mobile development, REST APIs, and software requirements engineering.",
          ],
        },
      ],
      certsEyebrow: "Licenses & Certifications",
      certsHeading: "Verified credentials.",
      certsSubtitle:
        "Official certifications across Salesforce, Software Architecture, Containers, ITIL, and Mobile Development.",
      certifications: [
        { title: "Salesforce Certified Associate", issuer: "Salesforce", category: "CRM & Cloud", accent: "electric" },
        { title: "Software Architecture Fundamentals", issuer: "Full Cycle", category: "Architecture", accent: "olive" },
        { title: "Docker Course", issuer: "Full Cycle", category: "Containers & Infra", accent: "olive" },
        { title: "IT Infrastructure Library Management (ITIL)", issuer: "Alura", category: "Governance & ITIL", accent: "lime" },
        { title: "Inter Android Developer", issuer: "Digital Innovation One (DIO)", category: "Mobile Android", accent: "electric" },
        { title: "Santander Bootcamp | Mobile Developer", issuer: "Digital Innovation One (DIO)", category: "Mobile Kotlin", accent: "lime" },
      ],
    },
    projects: {
      eyebrow: "Portfolio & Open Source",
      heading: "Featured projects and builds.",
      subtitle:
        "A selection of web applications, REST APIs, container setups, and mobile apps published on GitHub.",
      categories: [
        { id: "all", label: "All" },
        { id: "web", label: "Web & Full Stack" },
        { id: "api", label: "APIs & Architecture" },
        { id: "mobile", label: "Mobile & Utilities" },
      ],
      liveDemo: "Live Demo",
      viewRepo: "View Repository",
      starsTooltip: "GitHub Stars",
      moreCodeTitle: "Want to explore more code?",
      moreCodeDescPrefix: "+",
      moreCodeDescSuffix:
        "public repositories on GitHub covering TypeScript, Node.js, Docker, C#, and Kotlin.",
    },
    stack: {
      eyebrow: "Technologies & Tools",
      heading: "Full-stack toolkit from UI to deployment.",
      subtitle:
        "Languages, frameworks, databases, Salesforce tooling, and AI workflows used in production.",
      titles: {
        frontend: "Front-end",
        backend: "Back-end & APIs",
        databases: "Databases",
        salesforce: "Salesforce",
        integrations: "Integrations & AI",
        testing: "Testing & Infrastructure",
      },
    },
    contact: {
      badge: "Direct Contact",
      title: "Let's talk about software engineering, projects, or opportunities.",
      text: "Always open to discussing full-stack development, system architecture, enterprise integrations, Salesforce, and new technical challenges.",
      sendEmail: "Send Email",
      connectLinkedIn: "Connect on LinkedIn",
      primaryEmailLabel: "Primary Email",
      copy: "Copy",
      copied: "Copied!",
      copyAria: "Copy email",
    },
    footer: {
      bio: "Full Stack Developer at Grupo Setta focused on modern web applications, APIs, enterprise integrations, and the Salesforce ecosystem.",
      navTitle: "Navigation",
      channelsTitle: "Connect",
      navLinks: [
        { id: "top", label: "Home" },
        { id: "sobre", label: "About Me" },
        { id: "experiencia", label: "Experience & Certifications" },
        { id: "projetos", label: "Projects" },
        { id: "stack", label: "Tech Stack" },
      ],
      copyrightSuffix: "Personal Portfolio.",
      tagline: "Full Stack Developer • React, TypeScript & Node.js",
    },
    scrollToTop: "Back to top",
  },
};

export function getPortfolioContent(lang = "pt") {
  const safeLang = lang === "en" ? "en" : "pt";
  const t = translations[safeLang];

  return {
    ...t,
    projects: {
      ...t.projects,
      list: baseProjects.map((project) => ({
        ...project,
        ...projectCopy[safeLang][project.id],
      })),
    },
    stack: {
      ...t.stack,
      categories: baseStackCategories.map((cat) => ({
        ...cat,
        title: t.stack.titles[cat.id],
      })),
    },
  };
}

export const projectsList = getPortfolioContent("pt").projects.list;
export const stackCategories = getPortfolioContent("pt").stack.categories;
