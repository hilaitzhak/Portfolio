# Hila Itzhak — Portfolio

A personal portfolio for **Hila Itzhak**, Full-Stack & Backend Developer.
Design: **"Ink & Signal"** — editorial-premium, monochrome base with a single
cobalt accent, light/dark themes, and scroll-reveal motion. Built with React +
TypeScript.

🔗 **Live:** https://portfolio.hilaitzhak.com/

## Highlights

- **Sticky nav** with section anchors and a sun/moon **light/dark toggle**
- **Hero** with value proposition, availability status, and CV / work CTAs
- **About** with a quick-facts panel
- **Experience** timeline (Paygilant, Girit Interactive, HIT)
- **Capabilities** grid grouped by Languages/Frameworks · APIs/Databases · Cloud/Infra · Tools
- **Selected work** with alternating project rows, tech chips, and GitHub / live links
- **Contact** with direct details and social links
- Scroll-reveal animations (respects `prefers-reduced-motion`) and a subtle film-grain texture

## Tech Stack

React · TypeScript · CSS custom properties · deployed on AWS S3.
Fonts: Instrument Serif (display) · Space Grotesk (body) · JetBrains Mono (labels).

## Getting Started

```bash
npm install
npm start          # runs at http://localhost:3000
```

## Configuration

- **Download CV:** drop your résumé at `public/Hila_Itzhak_CV.pdf` (the hero and
  contact buttons link to `/Hila_Itzhak_CV.pdf`).

## Build & Deploy

```bash
npm run build      # production build into /build
npm run deploy     # build + sync to S3 (npm run deploy-s3)
```

## Project Structure

```
src/
├── App.tsx              # theme state + section composition
├── index.tsx           # entry
└── redesign/
    ├── portfolio.css   # design tokens, themes, layout, motion
    ├── ui.tsx          # Btn, Mono, Tag, SecHead, Reveal, ThemeToggle, icons
    ├── SectionsTop.tsx     # Nav, Hero, About
    ├── SectionsWork.tsx    # Experience, Skills, Work
    └── SectionsContact.tsx # Contact, Footer
```

> A snapshot of the matching Claude Design "design system" project is kept under
> `.design-sync/backup-existing-project/` for reference.

---

© Hila Itzhak. All rights reserved.
