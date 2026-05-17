# Taylon Timepieces

Next.js 16 + React 19 + Tailwind CSS v4 + Framer Motion. Vookum-style luxury watch ecom storefront.

## Run locally

```bash
cd /Users/matthewpark/Downloads/current-projects/fordillonsdad
npm run dev
```

Open http://localhost:3000 (or whatever port it picks if 3000 is busy).

## Project layout

```
src/app/
  layout.tsx     ← html shell + Assistant font
  page.tsx       ← all sections (announcement, header, hero, products, footer)
  globals.css    ← Tailwind v4 import + custom CSS (buttons, ticker, fade-up)
public/          ← static assets (drop watch photos here when you have them)
postcss.config.mjs ← Tailwind v4 PostCSS plugin (do not touch unless upgrading)
```

## Troubleshooting

### Error: `Can't resolve 'tailwindcss' in '/Users/matthewpark/Downloads/current-projects'`

This means the build cache has stale paths from an earlier run. It's not a missing package — `tailwindcss` is installed correctly. The cache just got confused.

**Fix (run from inside the `fordillonsdad/` directory):**

```bash
# 1. Make sure you're in the right directory
cd /Users/matthewpark/Downloads/current-projects/fordillonsdad

# 2. Delete the stale build cache
rm -rf .next

# 3. Start the dev server again
npm run dev
```

That's it. The `.next` folder is just a build cache — Next.js regenerates it on every run. Safe to delete anytime.

### If the error keeps coming back after `rm -rf .next`

The `node_modules` install is corrupted. Reinstall:

```bash
cd /Users/matthewpark/Downloads/current-projects/fordillonsdad
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Error: `Port 3000 is in use`

Either:
- Stop whatever else is running on port 3000 (probably another `npm run dev` from a different project), OR
- Just use the port Next picks for you (it auto-falls-back to 3001, 3002, etc.)

To find and kill the process on port 3000:

```bash
lsof -ti:3000 | xargs kill -9
```

### Error: `Module not found` for some other package

Run `npm install` from inside `fordillonsdad/`. If it still complains, nuke and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Padding / margin utilities aren't working (everything hugs the left edge)

If `px-6`, `mx-auto`, `max-w-[1400px]` etc. seem to do nothing and your content sticks to the viewport edge, check `globals.css` for this anti-pattern:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

Tailwind v4 puts utilities in `@layer utilities`. A bare `* {}` rule outside any
`@layer` loads **after** the utilities layer in the cascade, so `* { padding: 0 }`
silently overrides every padding utility on the site. Same for margin.

Tailwind v4's preflight already resets these properly. Just delete the block.
If you really want a `*` selector for something custom, wrap it in `@layer base`
so it loads in the correct order:

```css
@layer base {
  * { /* your rules */ }
}
```

### The site loads but styles look broken

You're probably caching the old CSS. Hard refresh:

- **Mac Chrome / Edge:** Cmd+Shift+R
- **Mac Safari:** Cmd+Option+R

Or open in an incognito window to bypass the cache entirely.

## Stack notes

- **Tailwind v4** uses `@import "tailwindcss";` at the top of `globals.css`. Do NOT use the old `@tailwind base; @tailwind components; @tailwind utilities;` directives — that's v3 syntax and won't work here.
- **Next.js 16** has breaking changes vs older versions. If you're following a tutorial written for Next 14/15, double-check the docs in `node_modules/next/dist/docs/` before copying patterns.
- **Fonts:** Loaded via Google Fonts `<link>` in `layout.tsx` (Assistant, weights 300–800).
- **Images:** Currently using Unsplash URLs for watch photos. Replace with real product images in `public/` when you have them, then update the `featured` and `inventory` arrays in `page.tsx`.

## What's where on the homepage

`src/app/page.tsx` has named functions you can search for:

| Component            | What it is                                                  |
|----------------------|-------------------------------------------------------------|
| `AnnouncementBar`    | Black ticker bar at the very top                            |
| `Header`             | Logo + nav + search/account/cart icons (sticky)             |
| `Hero`               | Full-bleed watch photo with title + Shop All / Deals CTAs   |
| `FeaturedInventory`  | 4-up product grid ("Just Listed")                           |
| `BuySellTrade`       | 3-column info cards on cream background                     |
| `Authenticity`       | Split image + bulleted copy ("Authenticity Guaranteed")     |
| `CurrentInventory`   | 8-up product grid + "View All" CTA                          |
| `Newsletter`         | Black band with VIP signup form                             |
| `Footer`             | Contact info, shop/company columns, socials                 |

To swap products, edit the `featured` and `inventory` arrays at the top of `page.tsx`.
# taylontimespiecesremodel
