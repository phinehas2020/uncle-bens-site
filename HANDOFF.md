# Client Handoff — Quality Moving and Storage

## Project summary
- Framework: React + Vite (SPA)
- Routing: React Router
- Styling: Tailwind CSS v4
- SEO: `react-helmet-async` with JSON-LD LocalBusiness schema

## Brand & contact
- Business name: Quality Moving and Storage
- Domain: https://qualitymoving.com
- Phone: (512) 300-9543
- Address: 1101 North Industrial Boulevard, Round Rock, TX 78681
- License: TXDMV #006027218C

## Key assets
- Open Graph image: public/og-image.png
- Logo: public/logo.svg
- Favicon: public/favicon.svg
- Apple touch icon: public/apple-touch-icon.png
- Web manifest: public/site.webmanifest

## SEO & discoverability
- Sitemap: public/sitemap.xml (last updated 2026-02-03)
- Robots: public/robots.txt
- Structured data: LocalBusiness + FAQ schema (Services page)
- Canonical URLs set via `SEO` component and `index.html`

## Required integrations
- Forms: Quote and Contact forms are UI-only and simulate submission. Connect to your form handler of choice (Formspree, Netlify Forms, custom API).
- Analytics: Add GA4 or preferred analytics (not installed).

## Hosting notes
- This is a single-page app. Configure the host to serve `index.html` for all routes (history API fallback) to support `/services`, `/about`, etc.

## Build & run
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
