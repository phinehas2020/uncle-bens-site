---
milestone: M01
verdict: fail
---

# Evaluator Report

## Summary
The public-site foundation is mostly in place: the required routes exist, the shared shell is wired, the homepage is Austin-specific, and the required automated checks all pass. M01 still fails because the public site and route-level SEO publish company identity and legitimacy facts as established truths even though the repo documentation says those facts are not yet approved for production use.

## Required Checks
- `npm run lint` — pass
- `npm run build` — pass
- `bash .agent/verify.sh` — pass
  - verifier note: no dedicated `typecheck` or `test` script exists in this repo

## Findings
### 1. Public SEO and page content ship unapproved business facts
- Contract impact: fail. M01 requires trust/legitimacy content and schema to use approved company facts only.
- Evidence:
  - Repo documentation says the brand identity is still not documented and licensing/review proof still need confirmation before the implementation can claim production readiness: [.agent/Documentation.md](/Users/phinehasadams/uncle-bens-site/.agent/Documentation.md#L55), [.agent/Documentation.md](/Users/phinehasadams/uncle-bens-site/.agent/Documentation.md#L57)
  - The shared public data source hardcodes the business name, domain, email, phone, street address, license number, and founding year as settled facts: [src/data/site.js](/Users/phinehasadams/uncle-bens-site/src/data/site.js#L1), [src/data/site.js](/Users/phinehasadams/uncle-bens-site/src/data/site.js#L8), [src/data/site.js](/Users/phinehasadams/uncle-bens-site/src/data/site.js#L14), [src/data/site.js](/Users/phinehasadams/uncle-bens-site/src/data/site.js#L47), [src/data/site.js](/Users/phinehasadams/uncle-bens-site/src/data/site.js#L51)
  - The SEO component publishes those values as `MovingCompany` schema and canonical metadata on public routes: [src/components/SEO.jsx](/Users/phinehasadams/uncle-bens-site/src/components/SEO.jsx#L15), [src/components/SEO.jsx](/Users/phinehasadams/uncle-bens-site/src/components/SEO.jsx#L28), [src/components/SEO.jsx](/Users/phinehasadams/uncle-bens-site/src/components/SEO.jsx#L101), [src/components/SEO.jsx](/Users/phinehasadams/uncle-bens-site/src/components/SEO.jsx#L134)
  - Public pages and shell also render the same unapproved facts directly to visitors: [src/pages/AboutPage.jsx](/Users/phinehasadams/uncle-bens-site/src/pages/AboutPage.jsx#L5), [src/pages/AboutPage.jsx](/Users/phinehasadams/uncle-bens-site/src/pages/AboutPage.jsx#L32), [src/pages/ContactPage.jsx](/Users/phinehasadams/uncle-bens-site/src/pages/ContactPage.jsx#L19), [src/components/Footer.jsx](/Users/phinehasadams/uncle-bens-site/src/components/Footer.jsx#L16), [src/components/Header.jsx](/Users/phinehasadams/uncle-bens-site/src/components/Header.jsx#L45)
- Repro steps:
  1. Open [.agent/Documentation.md](/Users/phinehasadams/uncle-bens-site/.agent/Documentation.md#L55) and note that the brand, licensing, and review proof are still unresolved.
  2. Open [src/data/site.js](/Users/phinehasadams/uncle-bens-site/src/data/site.js#L1) and confirm the site still hardcodes those details as final facts.
  3. Open [src/components/SEO.jsx](/Users/phinehasadams/uncle-bens-site/src/components/SEO.jsx#L28) and confirm the same facts are emitted as structured data on public pages.
  4. Compare that behavior to the contract requirement that public trust content and schema use approved facts only.

## What Passed
- The required public routes and branded 404 are implemented in the shared shell: [src/App.jsx](/Users/phinehasadams/uncle-bens-site/src/App.jsx#L40), [src/pages/NotFoundPage.jsx](/Users/phinehasadams/uncle-bens-site/src/pages/NotFoundPage.jsx#L7)
- The homepage clearly reads as an Austin moving company and exposes both quote and phone paths near the top of the page: [src/components/Hero.jsx](/Users/phinehasadams/uncle-bens-site/src/components/Hero.jsx#L47), [src/components/Hero.jsx](/Users/phinehasadams/uncle-bens-site/src/components/Hero.jsx#L66), [src/components/Hero.jsx](/Users/phinehasadams/uncle-bens-site/src/components/Hero.jsx#L76)
- Header, footer, and mobile sticky CTA are present in the main public layout: [src/App.jsx](/Users/phinehasadams/uncle-bens-site/src/App.jsx#L41), [src/App.jsx](/Users/phinehasadams/uncle-bens-site/src/App.jsx#L59), [src/App.jsx](/Users/phinehasadams/uncle-bens-site/src/App.jsx#L60), [src/components/MobileStickyCallBar.jsx](/Users/phinehasadams/uncle-bens-site/src/components/MobileStickyCallBar.jsx#L12)
- Contact and quote flows have inline validation plus honest offline/failure states when no endpoint is configured: [src/components/ContactForm.jsx](/Users/phinehasadams/uncle-bens-site/src/components/ContactForm.jsx#L53), [src/components/ContactForm.jsx](/Users/phinehasadams/uncle-bens-site/src/components/ContactForm.jsx#L146), [src/components/ContactForm.jsx](/Users/phinehasadams/uncle-bens-site/src/components/ContactForm.jsx#L190), [src/components/HeroLeadForm.jsx](/Users/phinehasadams/uncle-bens-site/src/components/HeroLeadForm.jsx#L61), [src/components/HeroLeadForm.jsx](/Users/phinehasadams/uncle-bens-site/src/components/HeroLeadForm.jsx#L72)
- Route-level titles/descriptions/canonicals are defined, and `index.html` does not add a default canonical tag that would duplicate them: [src/pages/HomePage.jsx](/Users/phinehasadams/uncle-bens-site/src/pages/HomePage.jsx#L37), [src/pages/ServicesPage.jsx](/Users/phinehasadams/uncle-bens-site/src/pages/ServicesPage.jsx#L41), [src/pages/AboutPage.jsx](/Users/phinehasadams/uncle-bens-site/src/pages/AboutPage.jsx#L32), [src/pages/FAQPage.jsx](/Users/phinehasadams/uncle-bens-site/src/pages/FAQPage.jsx#L36), [src/pages/ContactPage.jsx](/Users/phinehasadams/uncle-bens-site/src/pages/ContactPage.jsx#L39), [index.html](/Users/phinehasadams/uncle-bens-site/index.html#L4)

## Browser QA Gaps
- Local browser verification could not be completed here because the sandbox blocks Vite from binding a local port. Repro: `npm run dev -- --host 127.0.0.1 --port 4173` failed with `listen EPERM: operation not permitted 127.0.0.1:4173`.
- When a real browser environment is available, test:
  1. `/` at 360px width for above-the-fold Austin messaging plus a visible `tel:` action without opening the menu.
  2. Header and footer navigation across `/`, `/services`, `/about`, `/faq`, `/contact`, `/quote`, and a bad route for the 404 recovery path.
  3. Invalid and valid submissions on `/contact` and `/quote`, especially with a real `VITE_FORM_ENDPOINT`.
  4. Head metadata on at least two public routes to confirm unique titles/descriptions and a single canonical.
  5. Short mobile viewport overlap between the sticky CTA and the last submit button or any important footer/legal text.
