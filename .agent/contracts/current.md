# Current Milestone Contract

Milestone: M01

## Objective
Ship the first real public foundation for an Austin moving-company website so a visitor can understand the business, verify basic legitimacy, and complete one of the two primary actions: call now or request a quote.

## In Scope
- Define or clean up the site-wide business data source used by public pages
- Implement the public route set:
  - `/`
  - `/services`
  - `/about`
  - `/faq`
  - `/contact`
  - `/quote`
  - `*` branded 404
- Provide a consistent public shell with:
  - responsive header
  - responsive footer
  - mobile sticky call/quote action on public pages
- Build a homepage that includes:
  - Austin-specific headline or value proposition
  - service snapshot
  - trust or legitimacy section using approved facts only
  - route(s) to call and quote
- Build service, about, FAQ, contact, and quote pages with meaningful, non-placeholder structure
- Implement quote and contact forms with required-field validation and explicit submission states
- Ensure route-level SEO metadata exists for each public page without duplicate canonical behavior

## Out Of Scope
- Full CRM automation beyond the current approved submission path
- Online booking, payments, or account portals
- CMS/editor tools
- City-page rollout beyond any already-approved supporting route
- Admin workflows unless they are needed to keep the current build functional
- Analytics, A/B testing, or dashboard work beyond lightweight foundations already present

## Files Likely To Change
- `src/App.jsx`
- `src/data/site.js`
- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- `src/components/MobileStickyCallBar.jsx`
- `src/components/Hero.jsx`
- `src/components/SEO.jsx`
- `src/components/ContactForm.jsx`
- `src/components/HeroLeadForm.jsx`
- `src/components/Quote.jsx`
- `src/pages/HomePage.jsx`
- `src/pages/ServicesPage.jsx`
- `src/pages/AboutPage.jsx`
- `src/pages/FAQPage.jsx`
- `src/pages/ContactPage.jsx`
- `src/pages/QuotePage.jsx`
- `src/pages/NotFoundPage.jsx`
- `src/index.css`
- `src/lib/submitLead.js`

## Acceptance Criteria
### Public route coverage
- Navigating directly to each in-scope public route renders a complete page with no blank sections or obvious placeholder comments
- The header and footer appear on every public route
- The branded 404 page gives the user a clear next action back into the site

### Homepage behavior
- The first screen on a typical mobile viewport shows the business type, Austin relevance, and at least one visible primary CTA
- The homepage includes a second CTA path for visitors who prefer phone over form
- The page contains a concise explanation of offered move types or services

### Form behavior
- Quote form requires, at minimum, a lead name, a contact method, and enough move detail to support follow-up
- Contact form requires enough information to contact the visitor back
- Invalid submissions show visible inline error states instead of failing silently
- Submission states distinguish idle, submitting, success, and failure
- If no real endpoint is configured, the UI does not pretend the lead was delivered successfully in production mode

### SEO and metadata
- Every public page has a unique, route-appropriate title and description
- Canonical tags are not duplicated between `index.html` defaults and route-level SEO output
- Public-facing schema, if present, uses approved company facts

### Responsive and accessibility baseline
- Header navigation is reachable by keyboard
- Buttons and links remain tappable on mobile widths down to 360px
- Form fields have visible labels or equivalent accessible names
- No core public content is hidden behind the mobile sticky CTA

## Verification Commands
- `npm run lint`
- `npm run build`
- `bash .agent/verify.sh`

## Skeptical QA Checklist
1. Open `/` at mobile width and confirm the business reads as an Austin moving company before any scroll.
2. Confirm at least one tap target for `tel:` or equivalent call behavior is visible on the homepage without opening the menu.
3. Click through each public route from the header and footer and verify navigation never dead-ends.
4. Submit each form with missing required fields and verify the user gets specific validation feedback.
5. Submit each form with valid data in the configured environment and verify the resulting success or failure state is honest and visible.
6. Inspect the page head for two different public routes and confirm titles/descriptions are different and canonicals are not duplicated.
7. Check a short mobile viewport and confirm the sticky CTA does not cover the final form submit button or important legal text.

## Failure Conditions
- Any in-scope public route crashes, renders empty, or contains obvious placeholder comments/text
- The homepage could plausibly belong to a generic service business outside Austin
- Quote/contact forms fake a success path or silently fail
- A visitor cannot find a phone number or quote path within one interaction from the homepage
- Duplicate or conflicting metadata ships on public routes
