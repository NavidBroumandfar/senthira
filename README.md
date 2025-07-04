# Senthira – AI Solutions Website

A clean, minimal, and responsive corporate website for Senthira, built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS (dark mode enabled)
- Deployed on Vercel

## Project Structure
```
/
├── .gitignore
├── README.md
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── senthira-site/
    ├── app/
    ├── components/
    ├── public/
    └── styles/
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build && npm start
   ```

## Features & Sections
- **Landing page**: Hero section with title, subtitle, and CTA.
- **Mission & Vision**: Our mission and vision statements. (`components/MissionVision.tsx`)
- **Products**: Three product boxes describing Senthira's offerings. (`components/Products.tsx`)
- **Technologies**: Grid of tech stack logos with hover effect. (`components/Technologies.tsx`)
- **About**: Meet the founders with bios and roles. (`components/About.tsx`)
- **Contact**: Non-functional contact form for collaboration inquiries. (`components/Contact.tsx`)
- **Footer**: Copyright, LinkedIn links for founders, GitHub repo, and theme toggle. (`components/Footer.tsx`)
- **Dark/Light mode toggle**: Persistent, global, and accessible.

---

© 2025 Senthira. All rights reserved. 