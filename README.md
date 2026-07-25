# Khadidja Laibi — Portfolio

A modern, high-performance personal portfolio built with **Next.js (App Router)**,
**TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide** icons.
Dark, minimalist design with glassmorphism, scroll animations, full responsiveness,
accessibility, and SEO.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

> This project targets Node 20+. If your default Node is newer/older, run with Node 22:
> `PATH="/opt/homebrew/opt/node@22/bin:$PATH" npm run dev`

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — lint

## Customize

Almost everything lives in **`lib/data.ts`** — profile, socials, skills, projects,
experience, education, and certifications. Edit that one file to update content.

### Enable the contact form (no backend)
1. Create a free form at https://formspree.io and copy its ID.
2. Set `formspreeId` in `lib/data.ts` (e.g. `"xdorwkgb"`).
   Until then, the form falls back to opening the visitor's mail app.

### Resume button
Replace `public/Khadidja-Laibi-CV.pdf` with your latest PDF (keep the same name),
or change `resumeUrl` in `lib/data.ts`.

## Structure

```
app/            App Router: layout (SEO/metadata), page, globals, sitemap, robots
components/     Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer
components/ui/  Reveal (scroll animation), SectionHeading
lib/            data.ts (all content), motion.ts (animation variants)
public/         favicon, resume PDF
```

## Deploy

Push to GitHub and import into **Vercel** (zero-config for Next.js).
Set your production domain in `profile.siteUrl` (`lib/data.ts`) for correct SEO/OG tags.
