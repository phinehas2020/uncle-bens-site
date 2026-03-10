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

## Session Notes (2026-03-06)
- What worked for de-slopping this site: light header and footer, sentence-case labels, no glass/backdrop treatment, no card hover lifts, no decorative overlays, and calmer CTA language.
- Rendering the mobile nav only when `mobileOpen` is true keeps hidden links out of the accessibility tree and avoids weird mobile snapshots.
- The services page reads better when it shows intros, included items, pairings, and FAQs only; long SEO filler paragraphs made the page feel AI-written even after the visual cleanup.
- Removed the fake-success fallback in `src/components/ContactForm.jsx`; if `VITE_FORM_ENDPOINT` is missing now, the UI shows an error instead of pretending the lead was captured.
- Verified after the refactor: `npm run build` and `npm run lint` both pass.
