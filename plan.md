# Movers Conversion and Trust Growth Plan

## Objective
Drive measurable growth in qualified leads for Quality Moving & Storage by turning the site into a high-converting, trust-forward local moving lead engine for Austin and Central Texas.

## Vision
Every meaningful user path should move quickly toward one of three outcomes:
1. Start a quote
2. Call now
3. Open a trust or support information layer that removes friction and risk

## Primary Outcomes (90 days)
- Form starts up +35% month over month
- Quote completion rate up +25% from current baseline
- Mobile click-to-call +20%
- Page engagement: lower scroll bounce before first fold action
- Maintain or improve lead-to-booking conversion from current baseline

## Non-Negotiables
- Keep the first conversion decision to 2 taps/clicks on mobile.
- Keep quote collection transparent: what is included, what is optional, and what causes extra fees.
- Make legal/compliance trust signals visible without creating legal clutter.
- Preserve current brand tone while increasing clarity and perceived reliability.

## Baseline data to capture before Week 1 work
- Current funnel drop-off:
  - Hero CTA clicks → quote starts
  - Quote start → submit
  - /quote direct load → submit
  - Mobile tap-to-call
- Page-level conversion:
  - / (home), /services, /quote, /contact, /austin-top-movers
- Technical metrics:
  - LCP, INP, CLS by page
- SEO signals:
  - Core rank groups for top intent queries (e.g., movers Austin, movers Round Rock, moving company Austin)

---

## Week 1–2: Audit, Tracking, and Content Truthing

### Goals
- Remove unknowns before redesign.
- Prevent later rework from missing analytics and trust requirements.

### Deliverables
- [ ] Create `analytics` instrumentation plan for:
  - `hero_cta_click`
  - `quote_form_start`
  - `quote_form_step_complete`
  - `quote_form_submit`
  - `quote_form_error`
  - `phone_tap`
  - `review_link_click`
- [ ] Add consent-safe analytics wrapper and callsites in:
  - `src/components/Hero.jsx`
  - `src/components/Quote.jsx`
  - `src/components/Header.jsx`
  - `src/components/Footer.jsx`
- [ ] Compile source-of-truth compliance checklist in `site.js`-backed data:
  - TXDMV registration references
  - license and insurance language approval
  - cancellation + pricing caveat policy
- [ ] Set baseline KPI report format (weekly Slack/email or docs card).
- [ ] Capture screenshot + copy audit of `/` hero, quote CTA, and trust cues in both mobile and desktop.

### Exit criteria
- Analytics event names, payloads, and property keys are approved.
- Legal trust copy is versioned and not contradictory.

---

## Week 3–4: Homepage Trust & Conversion Gate

### Goals
- Strengthen trust immediately above the fold and reduce early hesitation.

### Deliverables
- [ ] Update `src/components/Hero.jsx`:
  - one clear outcome-first headline
  - one guaranteed-quote CTA and one call CTA
  - shortened trust list directly tied to objections (`No hidden fees`, `Licensed`, `Response timeline`)
- [ ] Add a new trust shelf section under hero:
  - `site.license`
  - `site.tdmvPhone`
  - estimated response SLA
  - review sample + social proof hook
  - move to a reusable block (component-level) for reuse.
- [ ] Update `src/components/Footer.jsx` contact block to add:
  - "Need help deciding?" micro-path to `/quote` and phone
  - short trust summary visible in footer rather than only top sections
- [ ] Update `src/components/Header.jsx`:
  - ensure mobile sticky CTA behavior is tested on short-height screens
  - ensure primary route CTA is always visible in viewport
- [ ] Add "trust breadcrumbs" on home to link to `/services`, `/about`, `/quote`.

### Exit criteria
- Mobile and desktop both show at least one trust statement within first screen scroll distance.
- Both CTA paths are visible in first interaction without secondary scroll.

---

## Week 5–6: Quote Flow Compression and Conversion Safety

### Goals
- Improve completion while reducing perceived risk.

### Deliverables
- [ ] Refactor `src/components/Quote.jsx` into a staged form:
  - Step 1: contact + move date + from/to
  - Step 2: service + project notes
  - Step 3: optional upsell preferences and preferred communication method
- [ ] Add confidence copy on each step:
  - "No charge to request"
  - "We confirm charges before scheduling"
- [ ] Add form-save-in-progress behavior:
  - keep typed values in localStorage for return
  - add edit/retry path
- [ ] Add a quick-call alternative after one failed submit:
  - inline CTA `Call [phone] now to continue by phone`
- [ ] Add lightweight anti-friction changes to `/quote` page shell:
  - shorter title
  - stronger urgency signal tied to availability

### Exit criteria
- Quote form error rate drops after validation pass.
- At least one completion path is available even with partial form data.

---

## Week 7–8: Local SEO and Intent-Matched Content Expansion

### Goals
- Improve local discoverability and trust with factual location content.

### Deliverables
- [ ] Build city landing sections from `src/data/site.js` `serviceAreas`:
  - dynamic city route strategy (static paths first, then extend)
  - one canonicalized content block per city
- [ ] Add city-level internal links from:
  - `src/components/Services.jsx`
  - `src/pages/AboutPage.jsx`
  - `src/pages/ServicesPage.jsx`
- [ ] Strengthen structured data on every route:
  - ensure `src/components/SEO.jsx` supports `Service` or `MovingCompany` variants by page
  - standardize FAQ schema presence where FAQs are shown
- [ ] Add explicit trust/legal section on `/quote` and `/contact`:
  - binding vs non-binding estimates
  - surcharge list
  - cancellation and cancellation fee policy

### Exit criteria
- Every major city in service area has a discoverable, SEO-safe path in the internal link graph.
- No conflicting structured data across pages.

---

## Week 9–10: Social Proof and Evidence Layer

### Goals
- Convert "brand claims" into actionable evidence and reduce risk anxiety.

### Deliverables
- [ ] Upgrade `src/components/Testimonials.jsx`:
  - include review platform source and date
- [ ] Add 2 short case snippets in `src/pages/AboutPage.jsx` and `src/pages/ServicesPage.jsx`:
  - one residential
  - one commercial
- [ ] Add "before and after" trust proof format on `/austin-top-movers`:
  - explicit checklist outcomes
  - FAQ links to quote and service pages
- [ ] Implement testimonial rotation logic (or weighted static ordering) by intent.

### Exit criteria
- Visitors can connect claims to evidence on a single scroll path.
- At least one evidence block is visible without navigation from each primary funnel page.

---

## Week 11–12: Optimization, QA, and Launch

### Goals
- Remove conversion friction from the real data and launch stable version.

### Deliverables
- [ ] Run two-week A/B matrix with low-risk tests:
  - primary CTA label variants
  - helper copy on quote fields
  - review badge order
- [ ] Remove or simplify weak fields in quote steps based on drop-off telemetry.
- [ ] Run a content and component-level accessibility pass:
  - keyboard flow for form and CTA
  - readable contrast in all new tiles
  - mobile tap-target sizing
- [ ] Capture final performance checks:
  - LCP/INP/CLS against previous baseline
- [ ] Publish post-launch operating SOP:
  - weekly KPI review
  - monthly hypothesis backlog
  - response-time target enforcement

### Exit criteria
- All must-have KPIs meet guardrails by week 12.
- A/B learnings are documented and fed into next sprint.

---

## Data and tooling checklist
- Event store: GA4 or equivalent + server-side lead capture logs (if available)
- Session storage notes for quote continuation behavior
- Screenshot evidence in a `/planning/` artifact folder (or internal doc)
- Conversion KPI dashboard template with owners and due dates

## Open design and engineering dependencies
- Analytics account owner for event schema approval
- Legal/compliance review for disclosures and fee language
- CRM endpoint expectations for form payload compatibility (`formType`, existing fields)
- Content owner for city-level copy and case snippets

## Definition of done for each sprint
- UI and copy are mobile-first and tested for 360×800 and 390×844
- Event tracking implemented on new interactions with non-PII naming conventions
- Structured data validates for modified routes
- No layout shifts in newly modified sections
- Pull request includes before/after screenshots for all changed pages

## Risk log
- Too much form friction from over-validation → mitigate with staged errors and progressive disclosure
- Overstating certifications or claims → legal review before publish
- Mismatched structured data between components → add route-level schema lint/check step
- Missing quote endpoint responses → add fallback UX for non-200 submissions

## Suggested review cadence
- Weekly: analytics trend + top 5 blockers
- Bi-weekly: copy + UX review
- Monthly: ranking and local map/listing audit
- Quarterly: full funnel and pricing communication rewrite
