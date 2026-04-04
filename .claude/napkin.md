# Napkin

## Corrections
| Date | Source | What Went Wrong | What To Do Instead |
|------|--------|----------------|-------------------|
| 2026-02-16 | user | Multiple "premium" redesigns still looked like AI slop | Strip decorative clutter entirely — no gradients, grid overlays, pseudo-element noise, hover lifts, or faux-luxury naming |
| 2026-02-16 | self | Used overly elaborate color naming (obsidian, pearl, ice, fog, cloud) | Use plain descriptive names (text, text-secondary, bg, border) |
| 2026-02-16 | self | Every section had the same kicker+title+grid pattern | Vary layouts per section — split grids, full-width, narrow containers |

## User Preferences
- User rejects template-like "premium" dark SaaS aesthetics
- User rejects AI slop: repetitive section patterns, decorative noise, fake luxury signals
- User wants designs that feel handmade and intentional, not generated
- Clean > ornate. Plain white background > beige with texture overlays

## Patterns That Work
- DM Serif Display + DM Sans: clean serif/sans pairing without being cliche
- White background, minimal border, no shadows = feels real, not generated
- Varying section layouts (split, grid, narrow single-column) breaks the template feeling
- Gap-px border trick for stat grids instead of individual card borders
- Warm off-white (#faf8f5) for alternating section backgrounds instead of gradients
- Simple `.card` class (border + radius + bg) with no hover effects = cleaner look
- Naming CSS classes plainly (wrap, card, split, grid-2) avoids the "design system theater" smell

## Patterns That Don't Work
- Hero image as a card (rounded-[2rem] + border + overlay) = AI slot; use restrained radius (rounded-lg) and no border so the photo reads as a photo
- Radial gradients, SVG grid overlays, pseudo-element decorative layers = instant AI slop detection
- Card hover lifts (translateY + shadow changes) on every card = template behavior
- "Kicker" labels (uppercase tracked text before every heading) = repetitive pattern
- Custom shadow names (shadow-soft, shadow-glow) = over-engineered for no reason
- Color names like "obsidian", "pearl", "ice" = pretentious, confusing, AI-generated feel
- ALL-CAPS tracked nav links = screams template
- "Move Command Board", "Mover Signal Board" = fake corporate jargon that AI loves
- `::before`/`::after` on body for decorative backgrounds = unnecessary

## Domain Notes
- Project: `uncle-bens-site` — Vite + React SPA for a moving company
- Global styles in `src/index.css`, data in `src/data/site.js`
- Fonts loaded via Google Fonts in both index.html and index.css
- Build: `npm run build` outputs to /dist
- No env vars needed for dev (form endpoint is optional)

## Corrections
| 2026-02-16 | self | Tried to read skill at `/Users/phinehasadams/.agents/.../napkin/SKILL.md`; actual file was in `/Users/phinehasadams/.codex/skills/napkin/SKILL.md`. | Use the path from the user-provided list as fallback and verify existence before reading. |
| 2026-02-16 | self | Ran a wide `rg` across `/Users/phinehasadams`; it produced permission errors from macOS directories. | Limit repo lookups to workspace path and avoid broad home-directory searches. |

## Corrections
| 2026-02-16 | self | Deleted and rewrote `src/data/site.js` before ensuring no duplicate reads in the same edit cycle. | Keep the old file content as baseline only once, then rewrite directly to avoid partial merges. |
| 2026-02-16 | user | Requested a full site rebuild with specific page list and block components. | Replaced routing and core pages/components rather than patching partial pieces so the requested architecture is coherent. |

## Session Notes (2026-03-02)
- Semrush skill helper script lives at `/Users/phinehasadams/.codex/skills/semrush-api/scripts/semrush_api.py`, not in this repo.
- Semrush API key in the skill-local `.env` currently has zero remaining units (`ERROR 132`), so report pulls are blocked.
- Mistake: Passed `--output` after the `report` subcommand once; top-level flags must come before subcommands in this helper.
- Setup completed: added `semrush` MCP server registration for this workspace via `claude mcp add semrush https://mcp.semrush.com/v1/mcp -t http`, and added an additional global entry in `~/.claude/mcp.json` to keep the endpoint handy across sessions.
- Verified again via Semrush MCP tools (`organic_research`, `overview_research`, `keyword_research`): account access is active but API units are insufficient, so all Semrush MCP report calls are currently blocked.

## Session Notes (2026-03-05)
- Production-readiness check: `npm run build` passes, but `npm run lint` currently fails on unused `motion` imports/props and the `react-hooks/set-state-in-effect` rule in `src/components/Header.jsx`.
- Route-level SEO tags are duplicated because `index.html` ships default canonical/description/OG tags and pages add another set with `react-helmet-async`; `/quote` ends up with two canonicals and two descriptions.
- Contact and quote forms silently fall back to demo success mode when `VITE_FORM_ENDPOINT` is unset, so verify deploy-time env vars before treating lead capture as production-ready.
- `src/pages/AustinTopMoversPage.jsx` and `src/components/AustinTopMoversTeaser.jsx` depend on data exports that do not exist in `src/data/site.js`; the code is currently dead, but wiring that route back in will break.
- Supabase MCP table inspection failed with `password authentication failed for user "supabase_read_only_user"`, so additive SQL files should assume the current schema could not be verified live.

## Corrections
| 2026-03-06 | self | Tried to land the visual cleanup as one oversized `apply_patch`, and one drifted hunk blocked the whole patch. | In this repo, split broad UI refactors into smaller file groups or full-file rewrites so dirty working tree changes do not derail the pass. |

## Session Notes (2026-03-10)
- Hero redesigned from CRO principles: location-specific H1, plain subhead, two CTAs, compact inline trust strip (rating, years, license, location), clean undecorated image.
- Removed TrustStrip from homepage — trust signals are now in the hero. The old TrustStrip was a separate component duplicating hero content.
- Added "Why choose us" section directly in HomePage addressing real buyer anxieties: written estimates, own crews not brokers, floor/door protection, clear scheduling.
- The old hero had 8 content blocks crammed in (subtitle, H1, description, CTAs, quick facts grid, "most people call us for" box, image card, two info boxes). Stripped to 5 focused elements.
- Image treatment: no border-radius, no border, no background color = photo reads as a photo, not a floating card.
- User provided detailed CRO brief citing Google Ads docs, NN/g, Stanford credibility, FTC/FMCSA, Unbounce benchmarks, CXL, Portent case studies. Core insight: relevance before cleverness, legitimacy is part of the offer, concrete proof over decorative bravado.

## Session Notes (2026-03-19)
- Conversion blueprint pass: **HeroLeadForm** (name, phone, move date) above the fold with first-person CTA **Get my free moving quote**; posts `formType: 'hero-capture'` via shared **`submitLead`** (`src/lib/submitLead.js`). On API failure, **navigate to `/quote`** with `state` prefill. **ContactForm** uses `submitLead`, `min-h-12` submit button, copy **Send my quote request**, and prefills from hero navigation state. **MobileStickyCallBar** restored (`Call now` + `Free quote`, `md:hidden`, safe-area bottom, no backdrop blur); **`AppLayout`** adds bottom padding only when sticky is shown; hidden on `/admin/*`. Hero headline/subhead rewritten for trust + anxiety (licensed, Google rating, strangers-in-home framing, no surprise fees).
- Hero rework (service-page CRO): shallow **16:10** image first on small screens (full-bleed `-mx-5`) so the fold is photo + proof of work, not a white column then a tall stock crop; desktop stays text-left / image-right with **4:5** image. Tighter section padding, **H1** leads with geography + services, shorter subhead, CTA **Get a written estimate**, trust line under CTAs (years + linked Google rating from `heroStats` + license). Figcaption shortened to ground the photo in a real job.
- Anti–AI-slop pass: restored **DM Sans + DM Serif Display** (per earlier pattern that tested well here), removed the repeated small semibold “kicker” line before most `h1`/`h2` blocks, dropped `max-w-[12ch]` + sans/tracking hero treatment so the hero reads as editorial serif body copy, aligned alternating section wash to `#faf8f5`, softened Austin shortlist snapshot lines (no faux-label semibold), fixed Services deep-dive duplicate title (details column only; `h2` carries the name), form inputs `rounded-xl` → `rounded-md` to match buttons, 404 page left-aligned like the rest of the site, `prefers-reduced-motion` turns off smooth scroll.

## Session Notes (2026-03-18)
- Running `unslop` against the Uncle Ben's site produced 20 visual samples successfully, but the automated analysis writeout stalled; manual analysis from the completed HTML and screenshots was faster and reliable enough to finish the profile.
- Important brand ambiguity: if prompts mention `Uncle Ben's` without anchoring `moving company`, generation can drift into generic local services or even pest control. Future prompt sets should explicitly pin "Austin / Round Rock moving company" early and often.
- The strongest repeated visual defaults from the unslop run were Inter everywhere, centered hero/card shells for nearly every content type, dark navy plus warm orange/yellow accents, uppercase pill badges, and generic trust-copy blocks like free quotes / family-owned / local expertise.
- Current app still drifts toward the same shell in production code: dark overlay hero, rounded panel grids, and repeated bottom CTA blocks across utility pages.
- Playwright caught a live React console warning from `fetchpriority` on the hero image; in JSX it needs `fetchPriority`.
- What worked in the March 18 cleanup: treating the site like a practical field guide instead of a “premium local service” landing page. Border-separated rows, inline utility links, and page-specific document structures removed most of the AI-shell feeling quickly.
- Repo tooling note: `npm run lint` scans `.tmp-unslop` and becomes noisy/slow because of vendored Playwright files; `eslint src` is the reliable code check unless those temp folders are ignored.

## Session Notes (2026-03-22)
- Homepage visual pass worked best when the hero headline stopped trying to list every service; a shorter promise plus a utility subhead made the first screen feel like a poster instead of a brochure column.
- Sticky left-column sections with one real photo and border-separated rows feel more intentional here than service cards or multi-card grids.
- Footer and header improved when treated as plain editorial mastheads: stronger name, simpler utility links, no boxed icon badges or decorative chrome.
- ESLint in this repo did not recognize `motion.figure` / `motion.div` member usage as a used binding; aliasing them to local `MotionFigure` / `MotionDiv` satisfied the linter cleanly.

## Session Notes (2026-03-06)
- What worked for de-slopping this site: light header and footer, sentence-case labels, no glass/backdrop treatment, no card hover lifts, no decorative overlays, and calmer CTA language.
- Rendering the mobile nav only when `mobileOpen` is true keeps hidden links out of the accessibility tree and avoids weird mobile snapshots.
- The services page reads better when it shows intros, included items, pairings, and FAQs only; long SEO filler paragraphs made the page feel AI-written even after the visual cleanup.
- Removed the fake-success fallback in `src/components/ContactForm.jsx`; if `VITE_FORM_ENDPOINT` is missing now, the UI shows an error instead of pretending the lead was captured.
- Verified after the refactor: `npm run build` and `npm run lint` both pass.

## Session Notes (2026-03-26)
- This repo's active planning harness lives under `.agent/` and already included placeholder `Prompt.md`, `Plan.md`, `Documentation.md`, and `contracts/current.md`; replacing those files is the right setup path instead of inventing a second planning structure.
- `.Codex/` exists but does not contain a napkin file here; continue maintaining repo notes in `.claude/napkin.md` unless the project adds a canonical `.Codex/napkin.md`.
- M01 implementation pass: removed shared SEO/review assumptions that were not backed by approved proof, especially aggregate ratings and optimistic review references in the public shell.
- Lead capture rule for this repo now needs to stay strict: no default endpoint fallback, no fake success mode, and any environment without `VITE_FORM_ENDPOINT` must say so plainly in the UI.
- Contact and quote flows now intentionally differ: contact is lower-friction for general questions, quote requires route detail and explicit inline validation.
- Evaluator harness nuance: if `.agent/reports/latest.md` is still `pending` and only says no evaluation has run yet, treat it as a verification-and-documentation pass only; do not invent fixes that were never reported.
- Verification environment note: sandboxed sessions here can run `npm run lint`, `npm run build`, and `bash .agent/verify.sh`, but starting a local dev server fails with `listen EPERM` on `127.0.0.1`, so browser QA may need to rely on code review or a different environment.
- Public identity/contact rule: keep production name, domain, phone, email, street address, license, and founding year out of repo defaults. Read them from approval-gated `VITE_PUBLIC_*` vars and fall back to generic Austin-moving copy until approved.
- When approved phone details are absent, public "call" affordances should degrade to `/contact` or quote-path copy instead of inventing a number or hiding the second CTA entirely.
- Milestone verification note: `.agent/reports/latest.md` can lag behind the actual source tree. Treat it as prior context only and always re-verify against current files plus the required commands before reusing its verdict.

## Corrections
| 2026-03-26 | self | Broke one `rg` command by nesting quote styles badly while searching for CTA/navigation evidence. | Prefer single-quoted regex patterns in shell commands and avoid mixing escaped quote styles unless the command is tested first. |
| 2026-03-26 | self | Tried to import `src/lib/submitLead.js` directly in raw Node to inspect `hasLeadEndpoint()`. | In this Vite repo, helpers that read `import.meta.env` need a Vite-aware runtime; use shell env inspection or browser/build context instead of plain Node imports. |
