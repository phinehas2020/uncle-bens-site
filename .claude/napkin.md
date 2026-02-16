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
