# agamlabs-site

Static website for Agam Labs — hosted on Cloudflare Pages at `agamlabs.in`.

## Stack
- Pure HTML + CSS — no JavaScript, no framework, no build step
- System fonts only (no Google Fonts)
- Dark theme matching PhotoFresh Material 3 palette

## Pages
| File | Route | Purpose |
|------|-------|---------|
| `index.html` | `/` | Landing page |
| `privacy.html` | `/privacy` | Privacy policy (Play Store requirement) |
| `support.html` | `/support` | Contact + FAQ |

## Deploy
Push to `main` → Cloudflare Pages auto-deploys.

## Rules
- No JavaScript unless absolutely necessary
- No external fonts, analytics, or tracking
- Copyright: `© 2026 Agam Labs. All rights reserved.`
