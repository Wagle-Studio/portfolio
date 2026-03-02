# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev       # Start dev server (accessible on network via --host)
npm run build     # Type-check with tsc then bundle with Vite
npm run lint      # Run ESLint
npm run preview   # Preview the production build locally
```

There are no tests in this project.

## Architecture

Single-page portfolio app built with React 19, TypeScript, and SCSS (via sass-embedded). Bundled with Vite 6.

**Entry point:** `src/main.tsx` → wraps `<App>` in `<AppContextProvider>` (dark/light theme state).

**Theme system:** `AppContext` (`src/ui/AppContext.tsx`) manages `isDarkMode` using `localStorage` and `prefers-color-scheme`. The `app--dark` CSS class is toggled on the root `#app` div, and all colors are CSS custom properties defined in `src/ui/globals.scss` under `:root` (light) and `.app--dark` (dark).

**Layout structure in `App.tsx`:**
```
Header → main[About, Skills, Recommendations, Projects, Contact] → Footer
```

**Directory conventions:**
- `src/data/` — static content data files (plain TS exports). To update site content, edit these files.
- `src/ui/blocs/` — page sections (About, Skills, Recommendations, Projects, Contact). Each bloc has three files: `BlocName.tsx`, `bloc-name.scss`, `useBlocNameAnim.tsx`.
- `src/ui/components/` — shared UI components (Header, Footer, ButtonLink, Tag, SectionTitle, icons).

**Animation pattern:** Every bloc uses a dedicated `use<BlocName>Anim` hook that encapsulates GSAP + ScrollTrigger logic. Animations respect `prefers-reduced-motion`. The pattern: create a GSAP context on a `sectionRef`, build a paused timeline, attach a `ScrollTrigger` with `once: true`, and play immediately if the section is already in the viewport on load.

**Icons:** All SVG icons live in `src/ui/components/icons/`. They accept `IconProps` (`className?`, `size?: "small" | "medium" | "large"`). Export them through `index.ts`.

**Path alias:** `@/` maps to `src/` (configured in Vite and tsconfig).

## Deployment

Pushes to `master` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`) which:
1. Builds a Docker image using `Dockerfile.prod` and pushes it to GHCR.
2. Deploys to a remote server via SFTP + SSH, updating `docker-compose.prod.yml` and restarting the container.

The production container serves the Vite `dist/` folder with `serve` on port 4173.
