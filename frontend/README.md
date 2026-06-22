# Chamuditha Dilhara — Portfolio (React + TypeScript)

A full TypeScript/React port of the original static HTML portfolio. All
markup, styles, and behavior (scroll progress bar, nav compaction, active
section highlighting, scroll-reveal animations, mobile drawer, marquee) are
preserved 1:1.

## Setup

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

## Add your images

Drop these files into `public/images/`:

- `avatar.png` — nav logo headshot
- `donateweb.png` — School Donation Platform screenshot
- `1.png` — Fitzone Platform screenshot

(See `public/images/README.txt`.)

## Project structure

```
src/
  components/        One component per UI section (Navbar, Hero, About,
                      Projects, Matrix, Credentials, Writing, Contact, Footer,
                      plus small helpers: Reveal, ScrollIndicators, Marquee,
                      ProjectCard)
  data/
    content.ts        All copy/content (nav links, projects, certs, etc.)
    types.ts           Shared TypeScript interfaces for that content
  hooks/
    useScrollProgress.ts   Drives the top progress bar + scrolled nav state
    useActiveSection.ts    IntersectionObserver-based active nav link
    useReveal.ts            Scroll-triggered reveal animation hook
  styles/             Plain CSS, split by section, imported via index.css
  App.tsx             Assembles all sections
  main.tsx            React root
```

## Editing content

Everything text-based (project descriptions, certificates, articles, contact
links, nav labels) lives in `src/data/content.ts` — edit there rather than
inside the components.
