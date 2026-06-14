# LiLan.io

Landing page for LiLan LLC. A cabinet of free, fun curiosities (personality tests and more), where each one lives on its own subdomain (`name.lilan.io`).

## Live curiosities

- `testme.lilan.io` - MBTI-style personality test

## Stack

- [Astro](https://astro.build) static site
- Deployed via Cloudflare Pages (auto-deploys on push to GitHub)

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
```

## Cloudflare Pages settings

- Build command: `npm run build`
- Build output directory: `dist`
- Framework preset: Astro

## Style notes

- IMPORTANT: never use em dashes in site copy or docs.
- Dark cinematic theme, orchid-violet accent (兰 = orchid).
- Fonts: Space Grotesk (display), Inter (body).
- Logo: two interlocking L letterforms (Li + Lan).
