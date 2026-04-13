// ============================================================
// Portfolio Data — Ethan Chung
// Obsidian Editorial Design System
// ============================================================

export const HERO_DATA = {
  name: "Ethan Chung",
  title: "Full-Stack Developer",
  tagline: "Building scalable systems and elegant interfaces — from database to deployment.",
  location: "San Francisco, CA",
  githubUrl: "https://github.com/ethanchung",
  linkedinUrl: "https://linkedin.com/in/ethanchung",
  twitterUrl: "https://twitter.com/ethanchung",
  email: "ethan@ethanchung.dev",
  resumeUrl: "#",
  available: true,
};

export const TECH_STACK = [
  { name: "TypeScript", icon: "ts" },
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "node" },
  { name: "Python", icon: "python" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "Docker", icon: "docker" },
  { name: "Kubernetes", icon: "k8s" },
  { name: "AWS", icon: "aws" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Nexus API Gateway",
    description: "A high-performance API gateway built with Node.js and Redis. Handles rate limiting, authentication, and request routing for microservices architectures at scale.",
    tags: ["TypeScript", "Node.js", "Redis", "Docker"],
    liveUrl: "https://nexus-gateway.dev",
    repoUrl: "https://github.com/ethanchung/nexus-gateway",
    stars: 847,
    featured: true,
    status: "Production",
  },
  {
    id: 2,
    title: "Obsidian ORM",
    description: "A lightweight, type-safe ORM for PostgreSQL with zero runtime dependencies. Generates TypeScript types from your schema automatically.",
    tags: ["TypeScript", "PostgreSQL", "Open Source"],
    liveUrl: "https://obsidian-orm.dev",
    repoUrl: "https://github.com/ethanchung/obsidian-orm",
    stars: 1243,
    featured: true,
    status: "Active",
  },
  {
    id: 3,
    title: "Slate Dashboard",
    description: "Real-time analytics dashboard for monitoring distributed systems. Built with React, WebSockets, and Recharts. Supports custom metric definitions.",
    tags: ["React", "WebSockets", "Recharts", "Python"],
    liveUrl: "https://slate-dashboard.io",
    repoUrl: "https://github.com/ethanchung/slate-dashboard",
    stars: 412,
    featured: false,
    status: "Beta",
  },
  {
    id: 4,
    title: "Forge CLI",
    description: "Developer productivity CLI tool that scaffolds full-stack projects with opinionated defaults. Supports React, Next.js, and Express templates.",
    tags: ["Node.js", "CLI", "Scaffolding"],
    liveUrl: null,
    repoUrl: "https://github.com/ethanchung/forge-cli",
    stars: 289,
    featured: false,
    status: "Active",
  },
  {
    id: 5,
    title: "Helix Auth",
    description: "Plug-and-play authentication library supporting OAuth 2.0, PKCE, and JWT. Framework-agnostic with adapters for Express and Fastify.",
    tags: ["TypeScript", "OAuth", "Security", "JWT"],
    liveUrl: "https://helix-auth.dev",
    repoUrl: "https://github.com/ethanchung/helix-auth",
    stars: 634,
    featured: false,
    status: "Production",
  },
  {
    id: 6,
    title: "DataPipe",
    description: "ETL pipeline framework for Python. Declarative YAML-based pipeline definitions with built-in connectors for S3, Postgres, and BigQuery.",
    tags: ["Python", "ETL", "AWS S3", "BigQuery"],
    liveUrl: null,
    repoUrl: "https://github.com/ethanchung/datapipe",
    stars: 198,
    featured: false,
    status: "Active",
  },
];

export const SKILLS_CATEGORIES = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "CSS / Tailwind", level: 88 },
      { name: "Vue.js", level: 72 },
      { name: "WebGL / Three.js", level: 58 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js / Express", level: 94 },
      { name: "Python / FastAPI", level: 88 },
      { name: "Go", level: 70 },
      { name: "GraphQL", level: 82 },
      { name: "REST API Design", level: 96 },
    ],
  },
  {
    category: "Infrastructure",
    skills: [
      { name: "Docker / Kubernetes", level: 85 },
      { name: "AWS (EC2, S3, Lambda)", level: 82 },
      { name: "PostgreSQL", level: 90 },
      { name: "Redis", level: 80 },
      { name: "CI/CD (GitHub Actions)", level: 87 },
    ],
  },
  {
    category: "Tools & Practices",
    skills: [
      { name: "Git / GitHub", level: 97 },
      { name: "System Design", level: 85 },
      { name: "TDD / Testing", level: 83 },
      { name: "Technical Writing", level: 78 },
      { name: "Code Review", level: 90 },
    ],
  },
];

export const OPEN_SOURCE = [
  {
    project: "React",
    contribution: "Fixed memory leak in useEffect cleanup for concurrent mode",
    prUrl: "https://github.com/facebook/react/pull/12345",
    merged: true,
  },
  {
    project: "Prisma",
    contribution: "Added support for composite unique constraints in migration engine",
    prUrl: "https://github.com/prisma/prisma/pull/8901",
    merged: true,
  },
  {
    project: "Fastify",
    contribution: "Improved TypeScript generics for route handler inference",
    prUrl: "https://github.com/fastify/fastify/pull/4567",
    merged: true,
  },
  {
    project: "Vite",
    contribution: "Optimized HMR boundary detection for large monorepos",
    prUrl: "https://github.com/vitejs/vite/pull/7890",
    merged: false,
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Building a Type-Safe API Layer Without Code Generation",
    excerpt: "How I eliminated a class of runtime errors by leveraging TypeScript's type system to enforce API contracts at compile time — without any code generation step.",
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["TypeScript", "API Design", "DX"],
    slug: "type-safe-api-layer",
    featured: true,
  },
  {
    id: 2,
    title: "Kubernetes at the Edge: Lessons from Running k3s in Production",
    excerpt: "Six months of running lightweight Kubernetes clusters on edge hardware. What worked, what didn't, and the operational patterns that saved us.",
    date: "2024-02-08",
    readTime: "12 min read",
    tags: ["Kubernetes", "DevOps", "Edge Computing"],
    slug: "k8s-edge-production",
    featured: true,
  },
  {
    id: 3,
    title: "The Hidden Cost of Premature Abstraction",
    excerpt: "A case study on how over-engineering a data layer cost us three weeks of refactoring. The YAGNI principle, applied to real production code.",
    date: "2024-01-22",
    readTime: "6 min read",
    tags: ["Software Design", "Refactoring", "Engineering"],
    slug: "premature-abstraction",
    featured: false,
  },
  {
    id: 4,
    title: "PostgreSQL Query Optimization: Beyond EXPLAIN ANALYZE",
    excerpt: "Practical techniques for diagnosing and fixing slow queries — covering index strategies, query planning, and the often-ignored statistics collector.",
    date: "2023-12-10",
    readTime: "10 min read",
    tags: ["PostgreSQL", "Performance", "Database"],
    slug: "postgres-query-optimization",
    featured: false,
  },
];
