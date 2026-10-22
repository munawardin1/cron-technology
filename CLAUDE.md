# Company Website — Project Guide for Claude Code

## Goal
Build a production-ready company website in Next.js that matches the provided Google Stitch UI design **exactly** (pixel-accurate layout, colors, fonts, spacing), then make it ready to deploy on Vercel.

## Source of truth: the design
- The Stitch design exports are in `design/`:
  - `design/html/` — exported HTML + Tailwind code, one file per screen
  - `design/screenshots/` — screenshots of each screen (use these to verify visual accuracy)
- Treat the screenshots as the final reference for how things must look. The exported HTML is a starting point, not final code.
- Do not invent new sections, change copy, or "improve" the design unless asked. If something in the design is unclear or missing (e.g. no mobile version, broken image), list it and ask before guessing.

## Tech stack
- Next.js (latest, App Router) with TypeScript
- Tailwind CSS
- `next/font` for fonts, `next/image` for images, `next/link` for internal links
- No UI component libraries unless I approve it
- Package manager: npm

## Project setup
- Create the Next.js app in the current folder (the folder containing this file), keeping `design/` and `CLAUDE.md` intact.
- Add `design/` to nothing special — just never delete or modify it.

## How to convert the Stitch HTML
1. Move the design tokens first: put all custom colors, font families, border radius and shadows from the Stitch HTML/Tailwind config into `tailwind.config` (or the `@theme` block in globals.css for Tailwind v4). Define them once; never hardcode the same hex value in many places.
2. Load fonts with `next/font` (remove CDN font links from the exported HTML).
3. Split every page into reusable components in `components/` (e.g. `Navbar`, `Hero`, `Services`, `Testimonials`, `Footer`). Shared components go in `components/`, section-specific ones can go in `components/sections/`.
4. `Navbar` and `Footer` live in `app/layout.tsx` so they appear on every page.
5. Each Stitch screen becomes a route: `app/page.tsx` (Home), `app/about/page.tsx`, `app/contact/page.tsx`, etc.
6. Convert HTML to valid JSX: `className`, self-closing tags, `style={{}}` objects, `htmlFor`.
7. Replace `<img>` with `next/image` and internal `<a href>` with `next/link`.
8. Download any externally hosted/placeholder images into `public/images/` with descriptive filenames. Use SVG for logos and icons where possible.
9. Repeated content (services list, team members, testimonials, nav links) goes into typed data arrays in `lib/data.ts` and is rendered with `.map()`.

## Responsiveness
- The site must work on mobile (375px), tablet (768px) and desktop (1280px+).
- If the design only has desktop screens, build a sensible mobile layout (stacked sections, hamburger menu for the navbar) and tell me what you decided.
- No horizontal scrolling at any width.

## SEO and quality
- Set page titles and meta descriptions with the Next.js `metadata` export on every page.
- Add a favicon and Open Graph basics in `app/layout.tsx`.
- Use semantic HTML (`header`, `nav`, `main`, `section`, `footer`) and one `h1` per page.
- All images need meaningful `alt` text.
- Forms (e.g. contact): build the UI only unless I say otherwise. Ask before adding any backend or email service.

## Workflow rules
- Before writing code, give me a short plan: list of pages, list of components, and any design issues you found. Wait for my approval.
- Build one page at a time, starting with Home. After each page, run `npm run build` and fix all errors and warnings.
- Run `npm run lint` before saying a page is done.
- Keep commits small and descriptive (one per page or major component).
- Explain briefly what you did after each step — I am learning Next.js, so mention any important concept you used.

## Deployment (Vercel)
- The project must build with zero errors using `npm run build`.
- No hardcoded localhost URLs. Any secrets go in `.env.local` (never committed) and must be listed in `.env.example`.
- Make sure `.gitignore` covers `node_modules`, `.next`, `.env*.local`.
- I will push to GitHub and import the repo into Vercel myself.

## Definition of done
- Every Stitch screen is implemented and visually matches its screenshot.
- Works on mobile, tablet and desktop.
- `npm run build` and `npm run lint` pass cleanly.
- Ready to push to GitHub and deploy on Vercel.
