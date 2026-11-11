export const profile = {
  name: "Mário Fernandes",
  fullName: "Mário Antônio Fernandes de Oliveira",
  birthDate: { year: 1998, month: 8, day: 6 },
  birthLabel: "06/08/1998",
  headline: "Full Stack Developer (React, TypeScript & Node.js) | Salesforce | AI-Driven Engineering",
  role: "Desenvolvedor Full Stack",
  company: "Grupo Setta",
  location: "Patos de Minas, MG • Brasil",
  email: "marioantonio340@gmail.com",
  github: "https://github.com/marioantonio340",
  githubUsername: "marioantonio340",
  linkedin: "https://www.linkedin.com/in/mariofernandes340/",
  avatarUrl: "https://avatars.githubusercontent.com/u/43358964?v=4",
};

export const engineeringPillars = [
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
];

export const experiences = [
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
];

export const certifications = [
  {
    title: "Salesforce Certified Associate",
    issuer: "Salesforce",
    category: "CRM & Cloud",
    accent: "electric",
  },
  {
    title: "Fundamentos da Arquitetura de Software",
    issuer: "Full Cycle",
    category: "Arquitetura",
    accent: "olive",
  },
  {
    title: "Curso de Docker",
    issuer: "Full Cycle",
    category: "Containers & Infra",
    accent: "olive",
  },
  {
    title: "Gestão da Biblioteca de Infraestrutura de TI",
    issuer: "Alura",
    category: "Governança & ITIL",
    accent: "lime",
  },
  {
    title: "Inter Android Developer",
    issuer: "Digital Innovation One (DIO)",
    category: "Mobile Android",
    accent: "electric",
  },
  {
    title: "Santander Bootcamp | Mobile Developer",
    issuer: "Digital Innovation One (DIO)",
    category: "Mobile Kotlin",
    accent: "lime",
  },
];

export const projectCategories = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web & Full Stack" },
  { id: "api", label: "APIs & Arquitetura" },
  { id: "mobile", label: "Mobile & Utilitários" },
];

export const projectsList = [
  {
    id: "time-capsule",
    repoName: "time-capsule",
    title: "Cápsula do Tempo • NLW Spacetime",
    subtitle: "Timeline Full Stack de Memórias",
    category: "web",
    featured: true,
    description:
      "Aplicação full-stack onde usuários registram textos, fotos e vídeos em uma linha do tempo cronológica organizada por mês e ano.",
    tech_stack: ["TypeScript", "React", "Next.js", "Node.js"],
    github_url: "https://github.com/marioantonio340/time-capsule",
    demo_url: "",
    accent: "olive",
  },
  {
    id: "convert-case",
    repoName: "convert-case",
    title: "Convert Case Pro",
    subtitle: "Produtividade & Formatação de Texto",
    category: "mobile",
    featured: true,
    description:
      "Transformador e formatador de texto instantâneo desenvolvido para agilizar edição e padronização de textos com foco em usabilidade e interface responsiva.",
    tech_stack: ["HTML5", "CSS3", "JavaScript"],
    github_url: "https://github.com/marioantonio340/convert-case",
    demo_url: "",
    accent: "lime",
  },
  {
    id: "json-server-vercel",
    repoName: "json-server-vercel",
    title: "Rent a Battery API",
    subtitle: "REST API Serverless na Vercel",
    category: "api",
    featured: true,
    description:
      "API REST estruturada com JSON Server e deploy contínuo na Vercel para simulação e consumo de endpoints de locação de baterias.",
    tech_stack: ["JavaScript", "Node.js", "JSON Server", "Vercel"],
    github_url: "https://github.com/marioantonio340/json-server-vercel",
    demo_url: "https://json-server-vercel-eta-virid.vercel.app",
    accent: "electric",
  },
  {
    id: "fortinite-meta-gaming",
    repoName: "fortinite-meta-gaming",
    title: "Fortnite Meta Gaming",
    subtitle: "Aplicação Web em TypeScript",
    category: "web",
    featured: false,
    description:
      "Projeto web estruturado em TypeScript voltado à organização de dados e consulta de meta competitiva para jogadores.",
    tech_stack: ["TypeScript", "Web App"],
    github_url: "https://github.com/marioantonio340/fortinite-meta-gaming",
    demo_url: "",
    accent: "olive",
  },
  {
    id: "desafios-full-cycle",
    repoName: "desafios-full-cycle",
    title: "Desafios Full Cycle",
    subtitle: "Docker, Go & Node.js",
    category: "api",
    featured: false,
    description:
      "Implementações práticas de engenharia de software e otimização de imagens Docker multi-stage com Go e Node.js.",
    tech_stack: ["Docker", "Go", "Node.js", "Arquitetura"],
    github_url: "https://github.com/marioantonio340/desafios-full-cycle",
    demo_url: "",
    accent: "lime",
  },
  {
    id: "aspnet-rest-api",
    repoName: "ASP.NET-REST-API",
    title: "ASP.NET Core REST API",
    subtitle: "CRUD Corporativo + Swagger",
    category: "api",
    featured: false,
    description:
      "Web API RESTful em .NET Core com persistência em SQL Server e documentação interativa de endpoints via Swagger.",
    tech_stack: ["C#", ".NET Core", "SQL Server", "Swagger"],
    github_url: "https://github.com/marioantonio340/ASP.NET-REST-API",
    demo_url: "",
    accent: "electric",
  },
  {
    id: "app-repositories",
    repoName: "App-Repositories",
    title: "App Repositories",
    subtitle: "Mobile Android Nativo",
    category: "mobile",
    featured: false,
    description:
      "Aplicativo Android desenvolvido em Kotlin para buscar, listar e inspecionar repositórios públicos do GitHub.",
    tech_stack: ["Kotlin", "Android", "REST API"],
    github_url: "https://github.com/marioantonio340/App-Repositories",
    demo_url: "",
    accent: "olive",
  },
];

export const stackCategories = [
  {
    title: "Front-end",
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
    title: "Back-end & APIs",
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
    title: "Bancos de Dados",
    accent: "lime",
    items: [
      { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
      { name: "Cloudflare D1", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cloudflare/cloudflare-original.svg" },
      { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
      { name: "SQL Server", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    ],
  },
  {
    title: "Salesforce",
    accent: "electric",
    items: [
      { name: "Apex", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/salesforce/salesforce-original.svg" },
      { name: "Flows", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/salesforce/salesforce-original.svg" },
      { name: "SF CLI", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/salesforce/salesforce-original.svg" },
      { name: "DevOps Center", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/salesforce/salesforce-original.svg" },
    ],
  },
  {
    title: "Integrações & IA",
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
    title: "Testes & Infraestrutura",
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
