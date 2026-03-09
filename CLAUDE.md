# agamlabs-site

Static website for Agam Labs — hosted on Cloudflare Pages at `agamlabs.in`.

## Stack
- Next.js 15 (App Router) with static export (`output: "export"`)
- Tailwind CSS v4 + shadcn/ui (base-nova style, base-ui primitives)
- next-themes for dark/light mode (dark default)
- System fonts only (no Google Fonts)
- Zero analytics, zero cookies, zero tracking

## Routes
| Route | Purpose |
|-------|---------|
| `/` | Landing page (hero + product cards) |
| `/about` | About Agam Labs (mission, philosophy) |
| `/photofresh` | PhotoFresh product page |
| `/photofresh/privacy` | Privacy policy (Play Store URL target) |
| `/photofresh/support` | FAQ + contact |
| `/notifresh` | Coming soon placeholder |
| `/notifresh/privacy` | Privacy placeholder |
| `/notifresh/support` | Support placeholder |

## Key Files
- `src/lib/products.ts` — All product data (features, FAQs, privacy)
- `src/components/` — Navbar, Footer, ProductCard, FeatureCard, ComingSoon
- `public/_redirects` — Cloudflare Pages redirects (old URLs → new)

## Deploy
Push to `main` → Cloudflare Pages auto-deploys.
- Build command: `npm run build`
- Output directory: `out`

## Rules
- No Google Fonts — system fonts only
- No analytics, tracking, or cookies
- No `next/image` optimization (static export)
- Copyright: `© 2026 Agam Labs. All rights reserved.`
- shadcn/ui v4 uses base-ui (not radix) — use `render` prop, not `asChild`
