import {
  Github,
  Linkedin,
  Mail,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "Khadidja Laibi",
  role: "Full-Stack Web & Mobile Developer",
  // TODO: replace with your own domain once deployed
  siteUrl: "https://khadidjalaibi.dev",
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

// To add real screenshots: drop image files into
// public/screenshots/erp-pos/ and add an entry here.
export const erpScreenshots: Screenshot[] = [
  // {
  //   src: "/screenshots/erp-pos/dashboard.png",
  //   alt: "ERP dashboard",
  //   caption: "Main dashboard — sales overview",
  // },
];
