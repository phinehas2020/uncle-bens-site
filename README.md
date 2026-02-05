# Quality Moving & Storage — Production Web Experience

Premium React + Vite marketing site for a moving company serving Austin, Round Rock, and Central Texas.

## Stack

- React 19
- Vite 7
- React Router 7
- Tailwind CSS v4 utilities with custom design tokens
- `react-helmet-async` for SEO and structured data

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Form integration

Quote and Contact forms can post to an endpoint when configured.

Create `.env` in project root:

```bash
VITE_FORM_ENDPOINT=https://your-api.example.com/forms
```

If `VITE_FORM_ENDPOINT` is not set, forms stay functional in demo mode with a local success state.

## SPA hosting requirement

Configure your host to rewrite all non-file routes to `index.html` so routes like `/services` and `/quote` resolve correctly.
