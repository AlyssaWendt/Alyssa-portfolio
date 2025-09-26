# Alyssa Portfolio Starter (Next.js + TypeScript + Sass)

This is a minimal, MDX-free starter designed to look and feel like your previous portfolio but built with Next.js App Router, TypeScript, and Sass.

## Quick start

```bash
npx create-next-app@latest alyssa-portfolio --ts --app --eslint --src-dir --use-npm --no-tailwind --import-alias "@/*"
cd alyssa-portfolio
npm i -D sass

# copy the files from this starter over the generated project (merge/overwrite)
# then run:
npm run dev
```

## What to add
- Put your avatar at `public/avatar.jpg` (or .png) – a square image works best (it gets rounded).
- Add any project cover images under `public/og/`.
- Update `src/data/projects.ts` with your projects and links.
- Update social links in `src/components/Hero.tsx`.

## Pages
- `/` Home with avatar hero and featured work
- `/work` list of projects
- `/work/[slug]` typed project detail pages (data-driven, no MDX)
- `/about` simple about
- `/contact` contact

## Notes
- Tabs + no semicolons are configured via `.prettierrc`.
- Global Sass tokens live in `src/styles/tokens.scss`.
- Accessible nav with `aria-current`, skip link, focus ring.
