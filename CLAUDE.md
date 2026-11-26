# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing website for **iGymBro** — a free, offline-only strength training app for iPhone and Apple Watch. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Configured for static export (`output: "export"`) so the final build is a plain HTML/CSS/JS site with no server runtime.

## Commands

```bash
npm run dev      # local dev server (hot reload)
npm run build    # static export → /out directory
npm run lint     # ESLint via Next.js
npm start        # serve the .next build (not the static export)
```

The `out/` directory is the deployable artifact — it's what gets uploaded/hosted.

## Architecture

Single-page marketing site with one additional route:

- `src/app/page.tsx` — full landing page (Hero → Features → iPhone → Apple Watch → How It Works → Privacy → FAQ → Download CTA → Footer). All section content (feature cards, FAQ items, steps, etc.) is defined as plain JS arrays near the top of the file, not in separate data files.
- `src/app/privacy/page.tsx` — standalone privacy policy page. Uses a local `Section` component defined in the same file (not exported).
- `src/app/layout.tsx` — root layout; sets all SEO metadata (OpenGraph, Twitter card, icons, robots).

Shared components in `src/components/`:

- **`AnimatedSection`** — `"use client"` wrapper using Framer Motion's `useInView`. Wraps any section content to fade-up on scroll. Props: `children`, `className`, `delay` (seconds).
- **`IPhoneMockup`** — SVG/CSS iPhone frame with Dynamic Island, side buttons, and a placeholder screen showing label + description text. No real screenshots; a note in the page says to replace with actual simulator screenshots before publishing.
- **`WatchMockup`** — same concept for Apple Watch.
- **`Navbar`** — site navigation bar.

## Styling conventions

- Dark theme throughout: background `#09090b`, primary text `#fafafa`.
- Accent color `#007AFF` (iOS blue), defined as `--accent` CSS var, `accent` Tailwind token, and used inline as `rgba(0,122,255,...)`.
- Reusable Tailwind component classes defined in `globals.css` via `@layer components`: `.card`, `.btn-primary`, `.section-label`, `.gradient-text`, `.glow-blue`.
- Font: Inter (Google Fonts import in `globals.css`).

## Static export constraints

Because `next.config.ts` sets `output: "export"`:
- No server-side rendering or API routes.
- `images.unoptimized: true` — the `<Image>` component works but does no optimization.
- `trailingSlash: true` — links must end with `/` or Next.js will generate incorrect paths.
- `AnimatedSection` requires `"use client"` because Framer Motion uses browser APIs; this is the only client component.

## App Store URL

Defined once at the top of `src/app/page.tsx`:
```ts
const APP_STORE_URL = "https://apps.apple.com/app/igymbroapp";
```
Update here to change all App Store links site-wide.
