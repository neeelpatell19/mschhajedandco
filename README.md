# M.S. Chhajed & Co.

Website for M.S. Chhajed & Co., Chartered Accountants (Ahmedabad, Sanand, Baroda).

Built with **Next.js (App Router)**, **React**, **Tailwind CSS v4** and **lucide-react** icons. Animations use `framer-motion`.

## Getting started

```bash
yarn install
yarn dev        # http://localhost:3000
yarn build      # production build
yarn start      # serve the production build
yarn lint
```

## Project structure

```
src/
  app/                      # routes (App Router)
    layout.jsx              # fonts, <html>, navigation, footer, metadata
    globals.css             # Tailwind + design tokens + global styles
    page.jsx                # /
    about-us/               # /about-us
    career/                 # /career
    insights-newsroom/      # /insights-newsroom and /insights-newsroom/[Blogsname]
    practices/[practiceName]/   # /practices/<slug>
    not-found.jsx           # 404
  Components/               # page sections and shared UI
    ui/BrandIcons.jsx       # social brand icons (not part of lucide v1)
  assets/                   # imported images and the component stylesheets
public/                     # static files served from /
```

## Styling

Tailwind CSS v4 is installed **without its preflight reset**, so the original hand-written CSS keeps rendering exactly as before. Both can be used together:

- The component stylesheets (`src/assets/Styles/*.css`, `src/Components/**/*.css`) are unchanged in spirit and still apply globally.
- Design tokens from `globals.css` (`--navy`, `--brand`, `--surface`, ...) are also exposed to Tailwind: `bg-navy`, `text-brand`, `border-line`, `font-display`, `shadow-card`, ...
- The `lg` breakpoint is `992px` (the breakpoint the original layout used); `md` is Tailwind's default `768px`.
- Tailwind utilities live in a cascade layer, so un-layered custom CSS wins when both set the same property on the same element. For new components prefer fresh class names or Tailwind only.

## Adding content

- **Practice areas:** `src/Components/PracticesHomeCards/practicesData.js` (list + taglines) and the content map in `PracticesSeparate.jsx`.
- **Articles:** list entry in `src/Components/InSights/BlogData.jsx`, article body in `src/Components/AllBlogs/BlogSeparate.jsx`.
- **Navigation:** `src/Components/NavigationBar/NavigationLinksData.jsx`.
- **Jobs:** `src/Components/Career/CareerJobData.jsx`.

## Deployment

Deploys on Vercel as a standard Next.js project (`vercel.json` pins the framework to `nextjs`).
