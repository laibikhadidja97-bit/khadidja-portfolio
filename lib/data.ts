import {
  Github,
  Linkedin,
  Mail,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Khadidja Laibi",
  role: "Full-Stack Web & Mobile Developer",
  // Replace with your own custom domain if you add one later.
  siteUrl: "https://laibikhadidja97-bit.github.io/khadidja-portfolio",
  location: "Algiers, Algeria",
  email: "laibikhadidja97@gmail.com",
  yearsOfExperience: 7,
  headline: "I build production-grade web & mobile platforms — end to end.",
  subheadline:
    "Full-Stack developer specializing in multi-role SaaS: scalable REST/GraphQL APIs, secure role-based systems, and clean, business-focused delivery across React, Node.js, and Laravel.",
  bio: [
    "I'm a Full-Stack Web & Mobile Developer with 7 years of experience turning ideas into stable, production-ready products — from database schema to pixel-perfect UI.",
    "I specialize in multi-tenant SaaS platforms with role-based access, real payment and tax integrations (including ZATCA e-invoicing), and full Arabic/RTL support. I care about clean architecture, performance, and shipping features that actually move the business.",
  ],
  philosophy:
    "Great software is invisible: it just works, scales quietly, and gets out of the user's way.",
  resumeUrl: "/Khadidja-Laibi-CV.pdf",
  // Get a free form endpoint at https://formspree.io — paste the ID here (e.g. "xdorwkgb").
  formspreeId: "YOUR_FORM_ID",
};

export type Social = { name: string; href: string; icon: LucideIcon };

export const socials: Social[] = [
  { name: "GitHub", href: "https://github.com/laibikhadidja97-bit", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/khadidjalaibi-90670725b", icon: Linkedin },
  { name: "Email", href: "mailto:laibikhadidja97@gmail.com", icon: Mail },
];

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Vite",
      "MUI",
      "TanStack Query/Table",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "Laravel (PHP 8)",
      "GraphQL (Apollo)",
      "REST APIs",
      "Prisma",
      "Sequelize",
    ],
  },
  {
    title: "Mobile",
    items: ["Flutter", "FlutterFlow", "Android & iOS", "Firebase"],
  },
  {
    title: "Databases & Tools",
    items: [
      "MySQL",
      "SQLite",
      "Firebase",
      "JWT / Sanctum",
      "Socket.IO",
      "Git & GitHub",
    ],
  },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  live?: string;
  repo?: string;
  caseStudy?: string;
  featured?: boolean;
  badge?: string;
};

export const projects: Project[] = [
  {
    title: "ERP & POS Accounting System",
    tagline: "ZATCA e-Invoicing (Fatoora)",
    badge: "Accounting SaaS",
    description:
      "A full ERP + point-of-sale accounting platform — invoicing, sales, quotations, inventory, and financial reporting — with ZATCA Phase-2 e-invoicing (cryptographic signing, QR codes, compliant XML), role-based access, a thermal-printer POS, and Excel/PDF exports.",
    tech: ["Laravel 10", "React", "Vite", "MUI", "MySQL", "ZATCA"],
    caseStudy: "/projects/erp-pos",
    featured: true,
  },
  {
    title: "Omkooora / Tomoh",
    tagline: "Sports Club Management SaaS",
    badge: "Multi-tenant",
    description:
      "A multi-tenant sports-management platform: 7 role-based web apps (clubs, teams, leagues, players, referees) on a single GraphQL API. Built per-app JWT auth and player transfer/loan workflows, and fixed a production loan-return defect with regression tests.",
    tech: ["Node.js", "GraphQL", "Sequelize", "MySQL", "Socket.IO", "Next.js"],
    live: "https://omkooora.com",
    featured: true,
  },
  {
    title: "Otoor Marketplace",
    tagline: "Multi-vendor E-commerce & Auctions",
    badge: "E-commerce",
    description:
      "A multi-vendor e-commerce & auction platform with storefront, seller space, and admin (Admin/Seller/Buyer roles) for orders, auctions, coupons, and returns. Integrated shipping and payments (Torod, MyFatoorah) for live transactions.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Prisma", "Socket.IO"],
    live: "https://fragraworld.com",
    featured: true,
  },
  {
    title: "Artisan DZ",
    tagline: "Artisans & Services Marketplace (Algeria)",
    badge: "Marketplace",
    description:
      "A marketplace connecting Algerian artisans and skilled workers with customers. A TypeScript monorepo — a Node.js/Express/Prisma API (~70 endpoints) and a React/Vite frontend — with notifications, real-time chat, reviews, and geo-based search, containerized with Docker (PostgreSQL + Redis).",
    tech: [
      "Node.js",
      "Express",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "React",
      "Vite",
      "Redis",
      "Docker",
    ],
    caseStudy: "/projects/artisan-dz",
    featured: true,
  },
  {
    title: "Accounting Desktop",
    tagline: "Offline Desktop Accounting App",
    badge: "Desktop App",
    description:
      "A fully offline desktop accounting application (Electron) backed by a local SQLite database. Covers invoicing, cashier/POS, products & inventory, customers & suppliers, warranties, maintenance, and reports — with a modern Radix + Tailwind UI, validated forms, and QR codes. Packages to a native Windows installer.",
    tech: [
      "Electron",
      "React",
      "TypeScript",
      "Vite",
      "SQLite",
      "Tailwind",
      "Radix UI",
      "Zod",
    ],
    caseStudy: "/projects/accounting-desktop",
    featured: true,
  },
  {
    title: "China Cars",
    tagline: "Car-Import Management (USD / DZD)",
    badge: "Web App",
    description:
      "A web app for managing car imports from China — it automatically computes purchase and sale prices in USD and Algerian Dinar, and tracks customer payments, debts, and profits. Fully client-side and offline, with a statistics dashboard and a bilingual Arabic/French, RTL interface.",
    tech: ["JavaScript", "HTML5", "CSS3", "LocalStorage", "RTL", "Responsive"],
    caseStudy: "/projects/china-cars",
  },
  {
    title: "Doctors Directory",
    tagline: "Healthcare Platform",
    badge: "Healthcare",
    description:
      "A complete platform (frontend + API) for patients, doctors, and administrators with secure token-based authentication. Stabilized dev/QA workflows by fixing migrations, seeding 151 doctors, and configuring runtime/CORS correctly.",
    tech: ["Laravel 12", "Sanctum", "Spatie", "React", "Vite", "TypeScript"],
    live: "https://whoismypsychologist.com",
  },
  {
    title: "Alnukbah",
    tagline: "Company Website & Admin Panel",
    badge: "CMS",
    description:
      "A dynamic, fully Arabic-localized (RTL) multi-page company website with a production admin panel (7+ modules) and a media workflow: multi-image uploads, gallery handling, and automatic Arabic watermarking.",
    tech: ["Laravel 9", "MySQL", "Blade", "Vite", "Tailwind CSS"],
    live: "https://alnukbah.souftech.com",
  },
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  location?: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full-Stack Web & Mobile Developer",
    org: "HOSKADEV",
    period: "Jan 2023 – Present",
    location: "Full-time",
    points: [
      "Deliver and maintain production web & mobile platforms across frontend and backend, from requirements to deployment.",
      "Design scalable REST/GraphQL APIs, role-based authentication, and admin operations for multi-user business systems.",
    ],
  },
  {
    role: "Full-Stack Web & Mobile Developer",
    org: "GAMADEV",
    period: "Mar 2019 – Jan 2023",
    location: "El Oued, Algeria",
    points: [
      "Delivered full-stack web & mobile applications end-to-end, from requirements gathering to launch.",
      "Built backend modules, authentication workflows, and database schemas; improved reliability of deployed systems.",
    ],
  },
];

export const education = [
  {
    title: "M.Sc. Computer Science",
    detail: "Distributed Systems & Artificial Intelligence",
    org: "University of El Oued",
    year: "2021",
  },
  {
    title: "B.Sc. (Licence) Computer Science",
    detail: "Information Systems",
    org: "University of El Oued",
    year: "2019",
  },
];

export const certifications = [
  "Machine Learning — Supervised Learning (Fakker AI, Dec 2025)",
  "Python & Git: Programming Essentials (Fakker AI, Nov 2025)",
];

export const stats = [
  { value: "7+", label: "Years of experience" },
  { value: "15+", label: "Projects delivered" },
  { value: "5", label: "Production platforms" },
  { value: "3", label: "Languages spoken" },
];

/* ------------------------------------------------------------------ */
/*  ERP & POS — product showcase page (/projects/erp-pos)             */
/* ------------------------------------------------------------------ */

export const erpShowcase = {
  slug: "erp-pos",
  title: "ERP & POS Accounting System",
  tagline: "ZATCA e-Invoicing (Fatoora) · Point of Sale · Accounting",
  // Brand mark shown as the page cover.
  cover: "/screenshots/erp-pos/01-overview.png",
  intro:
    "A complete ERP + point-of-sale accounting platform built for the Saudi market, with full ZATCA (Fatoora) Phase-2 e-invoicing. Manage sales, invoicing, inventory, and finances from one dashboard — with a fast, thermal-printer-ready POS.",
  tech: [
    "Laravel 10",
    "PHP 8.1",
    "React",
    "Vite",
    "MUI",
    "MySQL",
    "ZATCA (Fatoora)",
    "Spatie Permission",
    "Sanctum",
  ],
  features: [
    "Invoicing & sales with automatic tax (VAT) breakdowns",
    "ZATCA Phase-2 e-invoicing: cryptographic signing, QR codes & compliant XML",
    "Point of Sale (POS) with thermal-printer receipts and cash / card split",
    "Quotations, reservations & delivery management",
    "Role-based access & owner settings (Spatie Permission)",
    "Inventory, customers & suppliers management",
    "Excel import / export and PDF invoices & reports",
    "Sales-rep tracking and financial reports",
  ],
};

export type Screenshot = { src: string; alt: string; caption?: string };

export type Showcase = {
  slug: string;
  title: string;
  tagline: string;
  cover: string;
  intro: string;
  tech: string[];
  features: string[];
  eyebrow?: string;
  privateNote?: { title: string; body: string };
};

// To add real screenshots: drop image files into
// public/screenshots/erp-pos/ and add an entry here.
export const erpScreenshots: Screenshot[] = [
  // {
  //   src: "/screenshots/erp-pos/dashboard.png",
  //   alt: "ERP dashboard",
  //   caption: "Main dashboard — sales overview",
  // },
];

/* ------------------------------------------------------------------ */
/*  Artisan DZ — product showcase page (/projects/artisan-dz)         */
/* ------------------------------------------------------------------ */

export const artisanShowcase: Showcase = {
  slug: "artisan-dz",
  title: "Artisan DZ",
  tagline: "Artisans & Services Marketplace · Algeria",
  eyebrow: "Project Showcase",
  cover: "/screenshots/artisan-dz/icon.svg",
  intro:
    "Algeria's trusted marketplace connecting artisans and skilled workers with customers. A TypeScript monorepo with a Node.js/Express/Prisma API and a React/Vite web app — designed end-to-end, from PRD and user stories to a Dockerized production deployment.",
  tech: [
    "Node.js",
    "Express",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Redis",
    "React",
    "Vite",
    "Docker",
  ],
  features: [
    "Two-sided marketplace: customers hire artisans & skilled workers",
    "Real-time chat between customers and artisans",
    "Ratings & reviews system",
    "Geo-based search to find nearby artisans",
    "Notifications system (in-app & real-time)",
    "Secure authentication with role-based accounts",
    "~70-endpoint REST API (Express + Prisma)",
    "Dockerized deployment (PostgreSQL + Redis)",
  ],
  privateNote: {
    title: "Private repository",
    body: "This is my own project; the repository is currently private. Source code is available on request.",
  },
};

export const artisanScreenshots: Screenshot[] = [
  {
    src: "/screenshots/artisan-dz/og-image.svg",
    alt: "Artisan DZ brand preview",
    caption: "Brand preview",
  },
];

/* ------------------------------------------------------------------ */
/*  Accounting Desktop — showcase page (/projects/accounting-desktop) */
/* ------------------------------------------------------------------ */

export const accountingShowcase: Showcase = {
  slug: "accounting-desktop",
  title: "Accounting Desktop",
  tagline: "Offline Desktop Accounting App · Electron + SQLite",
  eyebrow: "Project Showcase",
  cover: "/screenshots/accounting-desktop/icon.png",
  intro:
    "A fully offline desktop accounting application built with Electron, React and TypeScript, backed by a local SQLite database. It runs entirely on the user's machine — no internet required — and packages to a native Windows installer.",
  tech: [
    "Electron",
    "React",
    "TypeScript",
    "Vite",
    "better-sqlite3",
    "Tailwind CSS",
    "Radix UI",
    "React Hook Form",
    "Zod",
    "TanStack Table",
  ],
  features: [
    "Fully offline — local SQLite database, no server needed",
    "Invoicing & cashier (POS) module",
    "Products & inventory management",
    "Customers & suppliers management",
    "Warranty tracking",
    "Maintenance management",
    "Reports & analytics",
    "QR codes, validated forms (Zod) & data tables",
    "Arabic / RTL support",
    "Native Windows installer (electron-builder)",
  ],
  privateNote: {
    title: "Private repository",
    body: "This is my own project; the repository is currently private. Source code and a demo build are available on request.",
  },
};

export const accountingScreenshots: Screenshot[] = [];

/* ------------------------------------------------------------------ */
/*  China Cars — showcase page (/projects/china-cars)                 */
/* ------------------------------------------------------------------ */

export const chinaCarsShowcase: Showcase = {
  slug: "china-cars",
  title: "China Cars",
  tagline: "Car-Import Management App · USD / DZD",
  eyebrow: "Project Showcase",
  cover: "/screenshots/china-cars/cover.svg",
  intro:
    "A web app for managing car imports from China. It automatically computes purchase and sale prices in USD and Algerian Dinar (DZD), and tracks customer payments, outstanding debts, and profits — all from a clean statistics dashboard. Fully client-side and offline, with a bilingual Arabic/French interface.",
  tech: [
    "JavaScript (Vanilla)",
    "HTML5",
    "CSS3",
    "LocalStorage",
    "Responsive",
    "Arabic / French (RTL)",
  ],
  features: [
    "Statistics dashboard: sales, net profit, customer debts & car count",
    "Automatic pricing: total USD, purchase/sale, remaining & profit",
    "Search & filter (all / paid / in-debt)",
    "Bilingual UI (Arabic / French) with full RTL support",
    "Responsive — table turns into cards on mobile",
    "Offline: data saved in the browser (LocalStorage)",
    "Backup: JSON export & import",
    "Zero install — just open in a browser",
  ],
  privateNote: {
    title: "Private repository",
    body: "This is my own project; the repository is currently private. As a pure client-side app, a live demo can be provided on request.",
  },
};

export const chinaCarsScreenshots: Screenshot[] = [];
