# Product Spec

## Project Snapshot
- Project name: `uncle-bens-site`
- Product type: lead-generation website for a moving company
- Market: Austin, Texas, with supporting coverage for nearby Central Texas service areas
- Primary business goal: turn local search, referrals, and paid traffic into qualified quote requests and phone calls
- Working assumption: the final client brand package, legal business name, review proof, and CRM endpoint may still be pending; implementation must use approved data or clearly marked placeholders rather than invented claims

## Product Vision
Build a trust-first local services website that feels like a real moving company, not a generic marketing template. Within the first screen, a visitor should understand who the company helps, what services are offered, where the company operates, and how to request a written estimate or call immediately.

## Target Users
### Residential mover
Someone planning a local, regional, or long-distance household move who needs confidence that the crew is legitimate, careful, and reachable.

### Commercial mover
An office manager, operations lead, or small-business owner who needs clear scheduling, packing, staging, and minimal disruption.

### Comparison shopper
A visitor comparing multiple Austin movers who is scanning for legitimacy, service area fit, transparent process, and next-step clarity.

### Returning lead
Someone who already spoke to the company or clicked an ad and needs to find the quote form, phone number, or FAQ quickly on mobile.

## User Jobs To Be Done
- Confirm the company serves Austin and the visitor's origin or destination area
- Verify that the company handles the needed move type: local, apartment, house, office, packing, storage, or long-distance
- Decide whether the mover feels trustworthy enough to contact
- Understand what happens after submitting a quote request
- Choose the fastest path: call now or request a written estimate

## Business Outcomes
- Increase qualified quote starts and quote submissions
- Increase click-to-call interactions from mobile visitors
- Reduce bounce caused by vague messaging or generic local-service copy
- Create a stable foundation for future SEO city pages, proof sections, analytics, and CRM integration

## Experience Principles
- Local specificity over generic service-site filler
- Trust before persuasion
- Plainspoken copy over clever slogans
- Fast action paths over deep navigation
- Honest proof only: no fake review counts, fake badges, or unsupported claims
- Mobile-first layout and tap targets
- Intentional visual design that avoids template-like "premium SaaS" patterns

## Information Architecture
### Core public routes
- `/`: homepage focused on value proposition, trust, service snapshot, service area, and immediate CTAs
- `/services`: deeper service overview with local moving, commercial moves, packing, storage, and long-distance support
- `/about`: company story, process, operating values, and legitimacy cues
- `/faq`: answers to common objections around estimates, timing, packing, service area, and scheduling
- `/contact`: direct contact paths, contact form, hours, phone, email, and service-area reassurance
- `/quote`: primary conversion page for requesting a move estimate

### Secondary routes
- `/austin-top-movers`: optional SEO/supporting trust page if supported by approved content strategy
- `/admin` and `/admin/login`: non-public operational routes only if a real workflow exists; they are not required for the first public milestone
- `*`: branded 404 with clear return paths

## Core Product Requirements
### Site-wide requirements
- Responsive header with clear navigation, quote CTA, and accessible mobile menu
- Responsive footer with phone, service area summary, and navigation/support links
- Mobile sticky action bar that prioritizes call and quote on public pages
- Consistent visual system, typography, spacing, and CTA treatment
- Data-driven company profile stored in a single source of truth for phone, address, hours, services, and service areas

### Homepage requirements
- Hero section with Austin-specific headline, supporting proof, and dual CTA paths: call now and request a quote
- Concise trust signals near the first conversion decision
- Clear service overview with links to deeper content
- Simple explanation of how the process works
- Service area coverage that reassures Austin-area visitors they are in the right place
- Supporting review/testimonial or proof block only when backed by real data

### Quote and contact requirements
- Quote form collects the minimum viable lead information needed to follow up intelligently
- Contact form gives visitors a lower-friction path for general questions
- Form validation must be explicit and accessible
- Submission behavior must be real and honest: no fake production success state when delivery is unavailable
- If backend delivery is not configured, the UI must clearly communicate the limitation or fall back to an approved demo-only state

### SEO and discoverability requirements
- Route-level metadata with unique titles and descriptions
- Canonical handling that does not duplicate tags
- Structured data appropriate to a local moving company and FAQ content where applicable
- Crawlable public pages and SPA rewrites configured for production hosting
- Service-area and keyword strategy should favor factual local relevance over thin SEO pages

### Content requirements
- Copy must sound local, calm, and competent
- Claims about licensing, years in business, move counts, response times, and reviews require source approval
- Content should answer practical buyer concerns: hidden fees, scheduling, item protection, arrival windows, and service area fit
- Use real Austin/Central Texas geography when helpful, but avoid fabricating neighborhoods, partnerships, or awards

## Non-Goals
- Online booking and payment processing
- Live truck tracking or customer portals
- Full CMS/editorial workflow in the first implementation pass
- Automated review ingestion without a verified source
- Complex admin dashboards unless the client has a real operational need and approved workflow

## Technical Constraints
- Use the current React 19 + Vite 7 application structure already present in the repo
- Use React Router for public route handling
- Use the existing Tailwind CSS v4 setup and current component/data structure where practical
- Preserve deployability as a static SPA with host rewrites to `index.html`
- Keep company content centralized in data/config files where feasible
- `npm run lint`, `npm run build`, and `.agent/verify.sh` must remain viable verification paths
- Avoid fragile dependencies or unnecessary framework churn during milestone work

## Design Direction
- The site should feel grounded, service-oriented, and human
- Prefer restrained editorial layouts over glossy card-heavy marketing patterns
- White or light backgrounds are preferred over dark "luxury" aesthetics unless the real brand package demands otherwise
- Motion, if used, should support clarity rather than decoration
- Photography should read as documentation of real moving work, not stock-photo theater

## Success Metrics
- Visitors can reach a call or quote path within one interaction from the homepage
- Public route load and navigation feel coherent on mobile and desktop
- Quote and contact paths are clear, validated, and testable
- SEO foundations are present without duplicate metadata or obviously placeholder crawl output
- The project becomes a credible foundation for later conversion and SEO iterations

## Dependencies And Open Questions
- Final approved brand name, logo, and brand voice
- Verified licensing and compliance copy
- Approved testimonials, ratings, and review destinations
- CRM or form endpoint contract for production lead delivery
- Whether the admin routes are real product requirements or legacy scaffolding

## Required Deliverables
- Public-facing Austin moving company website with the core route set
- Trust-forward homepage and service architecture
- Working quote and contact lead-capture flows
- Reusable SEO and site-data foundation
- Planning artifacts that define milestones, acceptance, and validation clearly enough for implementation and QA
