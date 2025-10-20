# Alyssa Wendt Portfolio

A modern, accessible, and visually engaging portfolio built with Next.js App Router, TypeScript, and Sass. Designed for Software Engineers who value clean code, performance, and great user experience.

---

## 🚀 Features
- **Next.js 15 App Router** – Fast, scalable routing and SSR
- **TypeScript** – Type-safe, maintainable codebase
- **Sass Modules** – Modular, themeable styles
- **Google Fonts (next/font)** – Optimized, self-hosted typography
- **Responsive Design** – Mobile-first, pixel-perfect layouts
- **Light/Dark Theme Toggle** – Accessible, user-controlled theming
- **Accessible Navigation** – Skip links, focus ring, aria-current
- **Data-driven Projects** – Typed project pages, no MDX required
- **Easy Customization** – Update images, projects, and social links in one place

---

## 🛠 Tech Stack
- Next.js 15
- React 19
- TypeScript
- Sass (SCSS modules)
- Google Fonts (Space Grotesk, Tomorrow, Racing Sans One)

---

## 📦 Quick Start

```bash
npx create-next-app@latest alyssa-portfolio --ts --app --eslint --src-dir --use-npm --no-tailwind --import-alias "@/*"
cd alyssa-portfolio
npm i -D sass
# Copy starter files over the generated project
npm run dev
```

---

## ✨ Customization
- **Avatar:** Place your image at `public/avatar.jpg` (or .png)
- **Project Covers:** Add images to `public/og/`
- **Projects:** Edit `src/data/projects.ts`
- **Social Links:** Edit `src/components/Hero.tsx`
- **Fonts:** Change or add Google Fonts in `src/app/layout.tsx` using `next/font`
- **Theme:** Customize colors in `src/styles/tokens.scss`

---

## 📄 Pages
- `/` – Home: Hero, featured work
- `/projects` – All projects
- `/about` – About you


---

## ♿ Accessibility
- Keyboard navigation, skip to content
- Focus ring and aria-current for navigation
- Color contrast and responsive design

---

## 📚 Notes
- Tabs + no semicolons via `.prettierrc`
- Global Sass tokens in `src/styles/tokens.scss`
- No MDX, no Tailwind – just clean, modern React and SCSS

---

## 👋 Contact
**Alyssa Wendt**  
Software Engineer  
[LinkedIn](https://www.linkedin.com/in/alyssawendt) • [GitHub](https://github.com/AlyssaWendt)

---

> Built for hiring managers who value code quality, accessibility, and design. Ready to ship, easy to customize, and a joy to use.
