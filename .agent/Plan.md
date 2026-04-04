# Project Plan

## Intended Architecture
- `src/data/site.js` remains the primary source of truth for business identity, contact data, services, service areas, trust data, and reusable copy inputs
- `src/App.jsx` owns route registration and the public application shell
- Shared layout components live in `src/components` and provide header, footer, CTAs, forms, trust blocks, and SEO helpers
- Route-level pages in `src/pages` compose reusable sections into user-facing journeys
- Form submission logic lives in shared utilities so quote and contact flows behave consistently
- SEO metadata and structured data are generated from route-aware inputs instead of hardcoded page duplication

## Milestones

### M01 - Foundation And Lead Funnel Skeleton
Scope:
- Establish the Austin moving-company public route set and layout shell
- Lock the core business data model and navigation structure
- Build the first trustworthy version of the homepage, services, about, FAQ, contact, and quote pages
- Ship working quote/contact capture behavior with honest validation and fallback handling
- Set the SEO and accessibility baseline for all public pages

Acceptance criteria:
- All public routes render inside a consistent header/footer/mobile CTA shell
- Homepage clearly communicates Austin service area, service types, and two primary actions: call and quote
- Quote and contact forms validate required fields, expose errors accessibly, and do not fake a successful production submission
- Each public page has distinct route-level metadata and no obviously duplicated canonical handling
- Site content uses approved facts or explicit placeholders instead of invented proof

Validation commands:
- `npm run lint`
- `npm run build`
- `bash .agent/verify.sh`

Failure conditions:
- Any core public route is missing, broken, or unreachable
- Forms appear functional but silently discard or fake submission outcomes
- Metadata is duplicated or obviously contradictory across public pages
- Mobile primary CTA paths are hidden, clipped, or inaccessible

### M02 - Trust, Proof, And Conversion Refinement
Scope:
- Strengthen above-the-fold trust messaging and mid-page reassurance
- Add approved testimonials, proof blocks, and clearer process explanations
- Improve CTA copy, form framing, and objection handling
- Tighten layout and copy so the site feels intentional rather than template-driven

Acceptance criteria:
- The homepage and quote journey each include concrete, approved reassurance near the main conversion path
- Testimonials or proof blocks show sourceable content, not placeholder social proof
- Service and FAQ content addresses real concerns such as timing, item protection, estimates, and service area fit
- Visual treatment is cohesive across desktop and mobile

Validation commands:
- `npm run lint`
- `npm run build`
- `bash .agent/verify.sh`

Failure conditions:
- Trust sections rely on invented statistics, ratings, or badges
- Conversion pages still read like generic filler with no objection handling
- Layout regressions make core sections harder to scan than in M01

### M03 - Local SEO And Service Depth
Scope:
- Expand route-level content for Austin-centric search intent and approved service areas
- Improve internal linking between services, FAQs, quote paths, and any supporting local pages
- Strengthen structured data and metadata conventions for public pages
- Add approved service-depth sections that support both users and discoverability

Acceptance criteria:
- Service and support pages show clear Austin/Central Texas relevance without thin or duplicated content
- Internal links create obvious paths between homepage, services, FAQ, contact, and quote
- Structured data is route-appropriate and not contradictory
- Any supporting location page has a factual purpose and a clear user path to quote/contact

Validation commands:
- `npm run lint`
- `npm run build`
- `bash .agent/verify.sh`

Failure conditions:
- City or service pages are thin rewrites with no unique value
- Metadata or schema conflicts across routes
- Internal linking becomes confusing, spammy, or circular

### M04 - Launch Readiness And Operational Hardening
Scope:
- Final QA pass across responsive behavior, accessibility, SEO output, and lead capture
- Confirm hosting/deployment assumptions for SPA rewrites and asset behavior
- Stabilize analytics hooks or operational instrumentation if approved
- Clean up dead routes, stale content, and launch blockers

Acceptance criteria:
- Public routes pass final smoke testing on desktop and mobile dimensions
- Lead capture behavior is verified for the configured environment
- No known blocking accessibility, metadata, or layout defects remain open
- Launch notes document dependencies, risks, and required post-launch follow-up

Validation commands:
- `npm run lint`
- `npm run build`
- `bash .agent/verify.sh`

Failure conditions:
- Deployment configuration cannot serve deep routes reliably
- Accessibility or lead-capture blockers remain unresolved
- Launch state depends on unapproved placeholder claims or missing operational wiring
