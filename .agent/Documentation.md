---
status: in_progress
current_milestone: M01
---

# Project Documentation

## Summary
This 2026-03-31 pass addressed the evaluator's remaining M01 failure. The public site no longer treats `Austin TX Movers` as a fallback company identity: approved business identity now stays behind `VITE_PUBLIC_*` config, public shell labels fall back to descriptive Austin-moving copy, and route-level SEO titles/descriptions use approval-safe wording until real business facts are supplied.

## Milestone status
- M01: evaluator issue fixed in code, verified locally, ready for re-evaluation
- M02: pending
- M03: pending
- M04: pending

## Files changed in this pass
- `.agent/Documentation.md`
- `src/components/Footer.jsx`
- `src/components/Header.jsx`
- `src/components/Hero.jsx`
- `src/components/SEO.jsx`
- `src/data/site.js`
- `src/pages/AboutPage.jsx`
- `src/pages/ContactPage.jsx`
- `src/pages/FAQPage.jsx`
- `src/pages/HomePage.jsx`
- `src/pages/ServicesPage.jsx`

## Decisions
- 2026-03-26: Set the project direction as an Austin, Texas moving-company lead-generation site.
- 2026-03-26: Treated brand/legal proof and backend lead delivery as dependencies that must be approved rather than invented.
- 2026-03-26: Removed optimistic form-endpoint fallback behavior so quote/contact flows do not imply successful delivery when `VITE_FORM_ENDPOINT` is missing.
- 2026-03-26: Replaced unsupported review/rating trust copy in the public M01 funnel with operations-based trust cues.
- 2026-03-26: Replaced hardcoded public identity/contact facts with approval-gated `VITE_PUBLIC_*` inputs plus generic Austin-moving fallbacks.
- 2026-03-26: Removed public `MovingCompany` JSON-LD until approved company facts are available for schema output.
- 2026-03-26: Switched canonical generation to use an approved site origin when present and relative route canonicals otherwise.
- 2026-03-26: Changed public call/contact affordances to degrade gracefully to `/contact` when no approved phone number is configured.
- 2026-03-31: Split approved business identity from descriptive fallback labels in `src/data/site.js` so the public shell no longer implies a finalized company name when config is empty.
- 2026-03-31: Replaced the remaining `Austin TX Movers` fallback strings in public route titles/descriptions with approval-safe generic SEO wording.

## Verification history
- 2026-03-26: Initial M01 lint/build/verify pass completed successfully.
- 2026-03-26: Public-facts cleanup pass completed successfully; verifier confirmed there is no dedicated `typecheck` or `test` script in this repo.
- 2026-03-31: Re-read the evaluator finding against current source and confirmed the remaining issue was fallback pseudo-brand exposure in public shell copy and route-level SEO titles/descriptions.
- 2026-03-31: `npm run lint` passed.
- 2026-03-31: `npm run build` passed.
- 2026-03-31: `bash .agent/verify.sh` passed; the verifier again reported no dedicated `typecheck` or `test` script.

## What changed
- `src/data/site.js` now separates approved identity from descriptive fallback labels via `name`, `displayName`, `seoTitleSuffix`, and `copyrightLabel`.
- `src/components/SEO.jsx` now builds route titles from an approval-safe suffix instead of a fallback pseudo-brand, while organization-level metadata remains gated behind approved company identity.
- `src/components/Header.jsx`, `src/components/Hero.jsx`, and `src/components/Footer.jsx` now render descriptive fallback shell labels instead of presenting an unapproved company name as settled fact.
- `src/pages/HomePage.jsx`, `src/pages/ServicesPage.jsx`, `src/pages/AboutPage.jsx`, `src/pages/FAQPage.jsx`, and `src/pages/ContactPage.jsx` now use generic route titles and approval-safe metadata wording.

## What passed
- `npm run lint`
- `npm run build`
- `bash .agent/verify.sh`

## What failed
- No automated verification commands failed in this pass.
- Manual browser QA from the skeptical checklist was not rerun here because the sandbox still blocks local Vite port binding with `listen EPERM`.
- A fresh evaluator run has not happened yet, so M01 is not closed until the harness re-scores this revision.

## Known issues
- Final approved client brand identity, direct contact details, compliance copy, and review proof are still not documented in the harness.
- Live lead delivery still depends on a real `VITE_FORM_ENDPOINT`; without it, the UI shows an honest limitation message instead of a success state.
- Browser QA still needs a non-sandbox environment because local dev-server binding is blocked here.
- The repo contains broader in-progress app changes outside the harness files; milestone work should stay scoped to evaluator findings.

## What remains
- Re-run the evaluator to confirm the public-facts issue is cleared.
- Run the manual M01 QA checklist across mobile and desktop, especially sticky CTA overlap, route navigation, and head metadata on multiple pages.
- Supply approved `VITE_PUBLIC_*` values before publishing any final business identity, direct contact details, or compliance proof.
- Wire the production lead endpoint contract so quote and contact submissions can be verified beyond local/build checks.

## Next step
Request a fresh M01 evaluator pass against this approval-safe public-site configuration.
