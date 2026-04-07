import { useEffect, useState } from 'react';
import {
  BUSINESS,
  CITY_GROUPS,
  CITIES,
  FAQ_CATEGORIES,
  INITIAL_FORM_STATE,
  MOVE_SIZES,
  NAV_ITEMS,
  QUICK_FACTS,
  SERVICES,
  TRUST_SIGNALS,
  buildBreadcrumbs,
  buildCityPath,
  buildServicePath,
  getCityBySlug,
  getCityLinks,
  getFooterLinks,
  getRoute,
  getServiceBySlug,
  getServiceLinks,
  isNavActive,
  normalizePath,
  syncDocumentHead,
} from './site.js';

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function SectionIntro({ title, subtitle, eyebrow, align = 'left' }) {
  return (
    <div className={cx('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className="section-heading">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
}

function Field({ label, htmlFor, children, className = '' }) {
  return (
    <label className={cx('field-group', className)} htmlFor={htmlFor}>
      <span className="field-label">{label}</span>
      {children}
    </label>
  );
}

function SiteNavLink({ href, label, currentPath, mobile = false, onClick }) {
  const active = isNavActive(currentPath, href);

  return (
    <a
      aria-current={active ? 'page' : undefined}
      className={cx('site-nav-link', active && 'is-active', mobile && 'is-mobile')}
      href={href}
      onClick={onClick}
    >
      {label}
    </a>
  );
}

function Breadcrumbs({ route }) {
  const crumbs = buildBreadcrumbs(route);

  if (crumbs.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol className="breadcrumbs-list">
        {crumbs.map((crumb, index) => (
          <li className="breadcrumbs-item" key={crumb.href}>
            {index < crumbs.length - 1 ? <a href={crumb.href}>{crumb.label}</a> : <span>{crumb.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function HeroActions({ className = '', style }) {
  return (
    <div className={cx('hero-actions', className)} style={style}>
      <a className="button-primary" href="/quote/">
        {BUSINESS.primaryCta}
      </a>
      <a className="button-secondary" href={BUSINESS.phoneHref}>
        {BUSINESS.secondaryCta}
      </a>
    </div>
  );
}

function TrustRail() {
  return (
    <section className="trust-rail reveal-section" data-reveal>
      <div className="site-shell">
        <div className="trust-grid">
          {TRUST_SIGNALS.map((signal, index) => (
            <article className={cx('trust-item', index > 0 && 'trust-divider')} key={signal.label}>
              <p className="trust-label">{signal.label}</p>
              <p className="trust-description">{signal.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeHero({ heroReady }) {
  return (
    <section className="poster-hero" id="top">
      <img
        alt="Quality Moving & Storage crew unloading boxes beside a moving truck at an Austin-area home during golden hour."
        className="poster-hero-image"
        fetchPriority="high"
        src="/hero-image.png"
      />
      <div aria-hidden="true" className="poster-hero-overlay" />
      <div aria-hidden="true" className="poster-hero-heat" />

      <div className="site-shell poster-hero-shell">
        <div className="poster-hero-copy">
          <p className={cx('hero-entrance brand-lockup', heroReady && 'is-ready')} style={{ '--delay': '0ms' }}>
            {BUSINESS.company}
          </p>
          <h1 className={cx('hero-entrance poster-title', heroReady && 'is-ready')} style={{ '--delay': '0ms' }}>
            Austin&apos;s Most Trusted Movers
          </h1>
          <p className={cx('hero-entrance poster-subtitle', heroReady && 'is-ready')} style={{ '--delay': '150ms' }}>
            19 years of stress-free moves. Licensed, insured, and guaranteed quotes - no surprises.
          </p>
          <HeroActions className={cx('hero-entrance', heroReady && 'is-ready')} style={{ '--delay': '300ms' }} />
        </div>
      </div>

      <p className="poster-hero-license">TXDMV #006027218C</p>
    </section>
  );
}

function PageHero({ route, heroReady, eyebrow, title, description, image, imageAlt }) {
  return (
    <section className="page-hero">
      <img alt={imageAlt} className="page-hero-image" fetchPriority="high" src={image} />
      <div aria-hidden="true" className="page-hero-overlay" />
      <div className="site-shell page-hero-shell">
        <div className="page-hero-content">
          <Breadcrumbs route={route} />
          <p className={cx('hero-entrance section-eyebrow', heroReady && 'is-ready')} style={{ '--delay': '0ms' }}>
            {eyebrow}
          </p>
          <h1 className={cx('hero-entrance page-title', heroReady && 'is-ready')} style={{ '--delay': '0ms' }}>
            {title}
          </h1>
          <p className={cx('hero-entrance page-subtitle', heroReady && 'is-ready')} style={{ '--delay': '150ms' }}>
            {description}
          </p>
          <HeroActions className={cx('hero-entrance', heroReady && 'is-ready')} style={{ '--delay': '300ms' }} />
        </div>
      </div>
    </section>
  );
}

function LinkRows({ items, variant = 'default' }) {
  return (
    <div className={cx('link-rows', variant === 'services' && 'link-rows-services')}>
      {items.map((item, index) => (
        <a className="link-row" href={item.href} key={item.href}>
          <div className="link-row-index">{String(index + 1).padStart(2, '0')}</div>
          <div className="link-row-copy">
            <h3 className="link-row-title">{item.label}</h3>
            <p className="link-row-description">{item.description}</p>
          </div>
          <span aria-hidden="true" className="link-row-arrow">
            View
          </span>
        </a>
      ))}
    </div>
  );
}

function ShowcaseSplit({ eyebrow, title, body, image, imageAlt, reverse = false, actions }) {
  return (
    <section className="section-shell reveal-section" data-reveal>
      <div className="site-shell">
        <div className={cx('showcase-split', reverse && 'is-reverse')}>
          <div className="showcase-copy">
            <p className="section-eyebrow">{eyebrow}</p>
            <h2 className="section-heading">{title}</h2>
            <p className="section-subtitle">{body}</p>
            {actions}
          </div>
          <div className="showcase-media">
            <img alt={imageAlt} loading="lazy" src={image} />
          </div>
        </div>
      </div>
    </section>
  );
}

function RegionGrid() {
  return (
    <section className="section-shell reveal-section" data-reveal>
      <div className="site-shell">
        <SectionIntro
          eyebrow="Central Texas"
          subtitle="From Georgetown to Buda, Cedar Park to Manor - if you're in Central Texas, we've got you."
          title="Service Area Built Around Real Routes"
        />

        <div className="region-grid">
          {CITY_GROUPS.map((group) => (
            <article className="region-panel" key={group.label}>
              <p className="region-label">{group.label}</p>
              <p className="region-description">{group.description}</p>
              <div className="region-links">
                {getCityLinks(group.cities).map((city) => (
                  <a className="region-link" href={city.href} key={city.href}>
                    {city.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceShowcaseRows() {
  return (
    <section className="section-shell reveal-section" data-reveal>
      <div className="site-shell">
        <SectionIntro
          eyebrow="Moving Services"
          subtitle="One crew, one phone number, one accountable company across local moving, long-distance work, packing, specialty handling, storage, and loading support."
          title="Everything You Need for a Seamless Move"
        />

        <div className="service-showcase-list">
          {SERVICES.map((service, index) => (
            <article className={cx('service-showcase', index % 2 === 1 && 'is-reverse')} key={service.slug}>
              <div className="service-showcase-media">
                <img alt={service.imageAlt} loading="lazy" src={service.image} />
              </div>
              <div className="service-showcase-copy">
                <p className="service-showcase-kicker">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="service-showcase-title">{service.title}</h3>
                <p className="service-showcase-text">{service.intro}</p>
                <ul className="service-showcase-points">
                  {service.details.slice(0, 3).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <a className="text-link" href={buildServicePath(service.slug)}>
                  View {service.title}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessRail({ title, steps }) {
  return (
    <section className="section-shell reveal-section" data-reveal>
      <div className="site-shell">
        <SectionIntro eyebrow="Process" subtitle="Clear prep, careful handling, and one plan from quote to final unload." title={title} />
        <div className="process-grid">
          {steps.map((step, index) => (
            <article className="process-step" key={step.title}>
              <p className="process-number">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-text">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FactsBand() {
  return (
    <section className="facts-band reveal-section" data-reveal>
      <div className="site-shell facts-grid">
        {QUICK_FACTS.map((fact) => (
          <div className="fact-item" key={fact.label}>
            <p className="fact-label">{fact.label}</p>
            {fact.href ? (
              <a className="fact-value" href={fact.href}>
                {fact.value}
              </a>
            ) : (
              <p className="fact-value">{fact.value}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function RelatedLinks({ title, links }) {
  return (
    <section className="section-shell reveal-section" data-reveal>
      <div className="site-shell">
        <SectionIntro eyebrow="Keep Exploring" subtitle="The next most relevant pages if you are still narrowing down the move." title={title} />
        <div className="related-links">
          {links.map((link) => (
            <a className="related-link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteForm({ formState, onChange, onSubmit, submittedQuote }) {
  return (
    <form className="quote-panel" onSubmit={onSubmit}>
      {submittedQuote ? (
        <div className="success-banner" role="status">
          We&apos;ll call you at {submittedQuote.phone} within the hour. Thank you, {submittedQuote.name}.
        </div>
      ) : null}

      <div className="quote-grid">
        <Field htmlFor="name" label="Name">
          <input className="field-input" id="name" name="name" required type="text" value={formState.name} onChange={onChange} />
        </Field>

        <Field htmlFor="phone" label="Phone">
          <input className="field-input" id="phone" name="phone" required type="tel" value={formState.phone} onChange={onChange} />
        </Field>

        <Field htmlFor="email" label="Email">
          <input className="field-input" id="email" name="email" required type="email" value={formState.email} onChange={onChange} />
        </Field>

        <Field htmlFor="movingFrom" label="Moving From">
          <input
            className="field-input"
            id="movingFrom"
            name="movingFrom"
            required
            type="text"
            value={formState.movingFrom}
            onChange={onChange}
          />
        </Field>

        <Field htmlFor="movingTo" label="Moving To">
          <input
            className="field-input"
            id="movingTo"
            name="movingTo"
            required
            type="text"
            value={formState.movingTo}
            onChange={onChange}
          />
        </Field>

        <Field htmlFor="moveDate" label="Move Date">
          <input
            className="field-input"
            id="moveDate"
            name="moveDate"
            required
            type="date"
            value={formState.moveDate}
            onChange={onChange}
          />
        </Field>

        <Field htmlFor="moveSize" label="Move Size">
          <select className="field-input" id="moveSize" name="moveSize" value={formState.moveSize} onChange={onChange}>
            {MOVE_SIZES.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </Field>

        <Field className="md:col-span-2" htmlFor="notes" label="Additional Notes">
          <textarea
            className="field-input field-textarea"
            id="notes"
            name="notes"
            rows="5"
            value={formState.notes}
            onChange={onChange}
          />
        </Field>
      </div>

      <button className="button-primary quote-submit" type="submit">
        Request My Free Quote →
      </button>
      <p className="quote-note">🔒 Your info is never sold or shared. Licensed TX Mover TXDMV #006027218C</p>
    </form>
  );
}

function QuoteSection({ formState, onChange, onSubmit, submittedQuote }) {
  return (
    <section className="section-shell reveal-section" data-reveal id="quote-form">
      <div className="site-shell">
        <SectionIntro
          align="center"
          eyebrow="Primary Conversion"
          subtitle="Takes 60 seconds. No obligation. We'll call you back within the hour."
          title="Get Your Free Guaranteed Quote"
        />
        <div className="quote-shell">
          <QuoteForm formState={formState} onChange={onChange} onSubmit={onSubmit} submittedQuote={submittedQuote} />
        </div>
      </div>
    </section>
  );
}

function ClosingCta({ title, body }) {
  return (
    <section className="closing-cta reveal-section" data-reveal>
      <div className="site-shell closing-cta-shell">
        <div>
          <p className="section-eyebrow">Ready When You Are</p>
          <h2 className="section-heading">{title}</h2>
          <p className="section-subtitle">{body}</p>
        </div>
        <HeroActions />
      </div>
    </section>
  );
}

function HomePage({ formState, heroReady, onChange, onSubmit, submittedQuote }) {
  const serviceRows = SERVICES.map((service) => ({
    label: service.title,
    href: buildServicePath(service.slug),
    description: service.description,
  }));

  const faqTeaser = FAQ_CATEGORIES.flatMap((category) => category.items).slice(0, 3);

  return (
    <>
      <HomeHero heroReady={heroReady} />
      <TrustRail />

      <section className="section-shell reveal-section" data-reveal>
        <div className="site-shell editorial-grid">
          <div className="editorial-copy">
            <p className="section-eyebrow">Austin Moving Company</p>
            <h2 className="section-heading">One crew for the move, not a patchwork of vendors.</h2>
            <p className="section-subtitle">
              Local moving, long-distance planning, packing, specialty handling, loading help, and storage all sit under one
              roof. That is how the move stays calm even when the schedule gets tight.
            </p>
          </div>
          <LinkRows items={serviceRows} variant="services" />
        </div>
      </section>

      <ShowcaseSplit
        actions={
          <a className="text-link" href="/about/">
            See why Austin keeps calling us
          </a>
        }
        body="Licensed crews, guaranteed quotes, secure storage in Round Rock, and real specialty-item handling make the hard parts of moving feel more controlled."
        eyebrow="Why It Works"
        image="/austin-tx-moving-storage-warehouse.jpg"
        imageAlt="Interior of a secure warehouse facility used by Quality Moving & Storage in Round Rock."
        title="Built for the moves that usually go sideways."
      />

      <RegionGrid />

      <section className="section-shell reveal-section" data-reveal>
        <div className="site-shell">
          <SectionIntro
            eyebrow="What People Ask"
            subtitle="The questions that come up most often before someone books a mover in Austin."
            title="Straight Answers Before the Truck Ever Rolls"
          />
          <div className="faq-preview-list">
            {faqTeaser.map((item) => (
              <article className="faq-preview-row" key={item.question}>
                <h3 className="faq-question">{item.question}</h3>
                <p className="faq-answer">{item.answer}</p>
              </article>
            ))}
          </div>
          <a className="text-link mt-8 inline-flex" href="/faq/">
            Read the full FAQ
          </a>
        </div>
      </section>

      <QuoteSection formState={formState} onChange={onChange} onSubmit={onSubmit} submittedQuote={submittedQuote} />
    </>
  );
}

function ServicesIndexPage({ heroReady, route }) {
  return (
    <>
      <PageHero
        description="Local moving, long-distance work, packing, specialty handling, loading help, and storage built for Austin-area households and businesses that want one accountable team."
        eyebrow="Service Menu"
        heroReady={heroReady}
        image="/hero-image.png"
        imageAlt="Quality Moving & Storage crew unloading a truck at a Central Texas home."
        route={route}
        title="Moving Services Built for Real-World Move Days"
      />
      <ServiceShowcaseRows />
      <ClosingCta
        body="Tell us the route, the timeline, and what needs extra care. We'll map the right service mix and lock in the quote."
        title="Need help deciding which service mix fits your move?"
      />
    </>
  );
}

function ServicePage({ heroReady, route }) {
  const service = getServiceBySlug(route.serviceSlug);

  return (
    <>
      <PageHero
        description={service.heroDescription}
        eyebrow="Austin Moving Service"
        heroReady={heroReady}
        image={service.image}
        imageAlt={service.imageAlt}
        route={route}
        title={service.heroTitle}
      />

      <section className="section-shell reveal-section" data-reveal>
        <div className="site-shell service-detail-grid">
          <div>
            <SectionIntro eyebrow={service.title} subtitle={service.intro} title="What this service is built to solve" />
          </div>
          <div className="detail-list">
            {service.details.map((detail) => (
              <p className="detail-row" key={detail}>
                {detail}
              </p>
            ))}
          </div>
        </div>
      </section>

      <ProcessRail steps={service.process} title={service.processTitle} />

      <RelatedLinks
        links={getCityLinks(service.relatedCities)}
        title={`Cities where ${service.title.toLowerCase()} is in steady demand`}
      />

      <ClosingCta
        body={`If ${service.title.toLowerCase()} is the main need, we can scope it quickly and lock the move plan in one call.`}
        title={`Book ${service.title.toLowerCase()} with a guaranteed quote`}
      />
    </>
  );
}

function ServiceAreasIndexPage({ heroReady, route }) {
  return (
    <>
      <PageHero
        description="Austin, Round Rock, Cedar Park, Georgetown, Leander, Pflugerville, Kyle, Buda, Lakeway, Manor, Jarrell, Burnet, and Marble Falls."
        eyebrow="Service Areas"
        heroReady={heroReady}
        image="/hero-image.png"
        imageAlt="Quality Moving & Storage truck serving neighborhoods in Greater Austin."
        route={route}
        title="Coverage Across Austin and Central Texas"
      />

      <RegionGrid />

      <ShowcaseSplit
        actions={
          <a className="text-link" href="/quote/">
            Get a guaranteed quote
          </a>
        }
        body="Being based in Round Rock lets us cover Austin proper, the north corridor, Hill Country routes, and the southbound cities without bouncing the move between different teams."
        eyebrow="Route Logic"
        image="/storage-service.png"
        imageAlt="Mover walking through the Quality Moving & Storage facility in Round Rock."
        reverse
        title="Coverage built around one operation, not a web of subcontractors."
      />

      <ClosingCta
        body="If your city is in Central Texas, send us the route and move size. We will confirm the schedule and the quote quickly."
        title="Need a mover for your city?"
      />
    </>
  );
}

function CityPage({ heroReady, route }) {
  const city = getCityBySlug(route.citySlug);
  const sameRegion = CITIES.filter((item) => item.regionLabel === city.regionLabel && item.slug !== city.slug).slice(0, 4);

  return (
    <>
      <PageHero
        description={city.heroDescription}
        eyebrow={`${city.name} Service Area`}
        heroReady={heroReady}
        image={city.image}
        imageAlt={city.imageAlt}
        route={route}
        title={city.heroTitle}
      />

      <section className="section-shell reveal-section" data-reveal>
        <div className="site-shell service-detail-grid">
          <div>
            <SectionIntro
              eyebrow={`${city.name}, ${BUSINESS.region}`}
              subtitle={city.lead}
              title={`What customers in ${city.name} usually need from a mover`}
            />
          </div>
          <div className="detail-list">
            <p className="detail-row">
              Licensed and insured crews serving {city.name} with guaranteed quotes before move day.
            </p>
            <p className="detail-row">
              Support for local moving, long-distance moves, packing, loading help, specialty items, and storage.
            </p>
            <p className="detail-row">
              One accountable company from first call to final unload, with our Round Rock facility supporting the route.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell reveal-section" data-reveal>
        <div className="site-shell">
          <SectionIntro
            eyebrow="Most Requested"
            subtitle={`The services customers in ${city.name} ask for most often.`}
            title={`Popular moving services in ${city.name}`}
          />
          <LinkRows items={getServiceLinks(city.serviceFocus)} />
        </div>
      </section>

      {sameRegion.length ? (
        <RelatedLinks
          links={sameRegion.map((item) => ({ label: item.name, href: buildCityPath(item.slug) }))}
          title={`Nearby service areas around ${city.name}`}
        />
      ) : null}

      <ClosingCta
        body={`Planning a move in ${city.name}? Send the route, date, and move size. We'll call back within the hour.`}
        title={`Book movers in ${city.name}, TX`}
      />
    </>
  );
}

function AboutPage({ heroReady, route }) {
  return (
    <>
      <PageHero
        description="19 years in business, licensed and insured, guaranteed quotes, and secure storage support from our Round Rock base."
        eyebrow="About Quality Moving & Storage"
        heroReady={heroReady}
        image="/austin-tx-moving-storage-warehouse.jpg"
        imageAlt="Secure indoor warehouse facility used by Quality Moving & Storage."
        route={route}
        title="A Texas moving company built around accountability"
      />

      <FactsBand />

      <ShowcaseSplit
        actions={
          <a className="text-link" href="/contact/">
            Contact the team
          </a>
        }
        body="We are independently owned and operated, based in Round Rock, and built to handle the practical side of moving well: showing up on schedule, keeping the scope clear, and protecting the items that make the move high-stakes."
        eyebrow="The Company"
        image="/storage-service.png"
        imageAlt="Mover walking alongside secure storage units inside the Round Rock facility."
        title="The job is not to sound smooth. The job is to make the move run smoothly."
      />

      <ProcessRail
        steps={[
          {
            title: 'Scope the move honestly',
            text: 'We confirm what is moving, where it is going, what needs protection, and what access challenges matter before move day.',
          },
          {
            title: 'Own the move day',
            text: 'The same company that quotes the move is the company loading the truck, coordinating timing, and handling the unload.',
          },
          {
            title: 'Stay useful after the truck leaves',
            text: 'If the move needs storage, a second delivery window, or extra labor, we can keep the hand-off inside one operation.',
          },
        ]}
        title="How the company works"
      />

      <ClosingCta
        body="If you want the license, the hours, the address, and the people behind the move to be easy to verify, start here."
        title="Want to talk to the team before you book?"
      />
    </>
  );
}

function FaqPage({ heroReady, route }) {
  return (
    <>
      <PageHero
        description="Answers on quotes, scheduling, packing, storage, specialty handling, and the Central Texas service area."
        eyebrow="Frequently Asked Questions"
        heroReady={heroReady}
        image="/packing.png"
        imageAlt="Mover wrapping a fragile glass item during a packing service."
        route={route}
        title="Questions Austin customers ask before they book"
      />

      <section className="section-shell reveal-section" data-reveal>
        <div className="site-shell faq-groups">
          {FAQ_CATEGORIES.map((category) => (
            <section className="faq-group" key={category.title}>
              <SectionIntro eyebrow="FAQ Category" subtitle="Real answers from the same team that books the move." title={category.title} />
              <div className="faq-preview-list">
                {category.items.map((item) => (
                  <article className="faq-preview-row" key={item.question}>
                    <h3 className="faq-question">{item.question}</h3>
                    <p className="faq-answer">{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <ClosingCta
        body="If your question is specific to your route, home size, or timeline, request the quote and we will answer it directly."
        title="Still have a move-specific question?"
      />
    </>
  );
}

function ContactPage({ heroReady, route }) {
  return (
    <>
      <PageHero
        description="Call, visit, or send your move details. We serve Austin and the surrounding Central Texas cities from our Round Rock office."
        eyebrow="Contact"
        heroReady={heroReady}
        image="/storage-service.png"
        imageAlt="Mover walking through secure storage units inside the Quality Moving & Storage facility."
        route={route}
        title="Talk to a real mover, not a script"
      />

      <section className="section-shell reveal-section" data-reveal>
        <div className="site-shell contact-grid">
          <div className="contact-block">
            <p className="section-eyebrow">Call</p>
            <a className="contact-value" href={BUSINESS.phoneHref}>
              {BUSINESS.phoneDisplay}
            </a>
          </div>
          <div className="contact-block">
            <p className="section-eyebrow">Visit</p>
            <p className="contact-value">{BUSINESS.address}</p>
          </div>
          <div className="contact-block">
            <p className="section-eyebrow">Hours</p>
            <p className="contact-value">{BUSINESS.hours}</p>
          </div>
          <div className="contact-block">
            <p className="section-eyebrow">TXDMV</p>
            <p className="contact-value">{BUSINESS.license}</p>
          </div>
        </div>
      </section>

      <RegionGrid />

      <ClosingCta
        body="Need the fastest response? Use the quote page with your move size, city pair, and date."
        title="Ready to get the move scheduled?"
      />
    </>
  );
}

function QuotePage({ formState, heroReady, onChange, onSubmit, route, submittedQuote }) {
  return (
    <>
      <PageHero
        description="Takes 60 seconds. No obligation. We'll call you back within the hour."
        eyebrow="Free Guaranteed Quote"
        heroReady={heroReady}
        image="/hero-image.png"
        imageAlt="Quality Moving & Storage crew unloading a truck during a local move."
        route={route}
        title="Get Your Free Guaranteed Quote"
      />

      <section className="section-shell reveal-section" data-reveal>
        <div className="site-shell quote-page-grid">
          <QuoteForm formState={formState} onChange={onChange} onSubmit={onSubmit} submittedQuote={submittedQuote} />
          <div className="quote-sidebar">
            <p className="section-eyebrow">What Happens Next</p>
            <div className="detail-list">
              <p className="detail-row">We call you back within the hour during business hours.</p>
              <p className="detail-row">We confirm route, move size, access details, and anything fragile or high-value.</p>
              <p className="detail-row">We lock in a guaranteed quote before move day.</p>
            </div>
            <div className="quote-callout">
              <p className="quote-callout-label">Need to talk now?</p>
              <a className="contact-value" href={BUSINESS.phoneHref}>
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function NotFoundPage({ heroReady, route }) {
  return (
    <>
      <PageHero
        description="The page you requested is not here, but the moving company still is."
        eyebrow="404"
        heroReady={heroReady}
        image="/hero-image.png"
        imageAlt="Quality Moving & Storage truck parked outside a home."
        route={route}
        title="Page not found"
      />
      <ClosingCta body="Head back to the homepage, browse the services, or request a quote." title="Need a different page?" />
    </>
  );
}

function SiteHeader({ currentPath, menuOpen, navSolid, onCloseMenu, onToggleMenu }) {
  return (
    <header
      className={cx(
        'site-header',
        currentPath !== '/' || navSolid || menuOpen ? 'is-solid' : 'is-transparent',
      )}
    >
      <nav aria-label="Primary" className="site-shell site-header-bar">
        <a className="brand-lockup" href="/" onClick={onCloseMenu}>
          {BUSINESS.company}
        </a>

        <div className="site-nav-desktop">
          {NAV_ITEMS.map((item) => (
            <SiteNavLink currentPath={currentPath} href={item.href} key={item.href} label={item.label} onClick={onCloseMenu} />
          ))}
        </div>

        <div className="site-header-actions">
          <a className="header-phone" href={BUSINESS.phoneHref}>
            {BUSINESS.phoneDisplay}
          </a>
          <a className="button-primary header-quote" href="/quote/">
            Get Free Quote
          </a>
        </div>

        <button
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="menu-toggle"
          type="button"
          onClick={onToggleMenu}
        >
          <span className="sr-only">Menu</span>
          <span className="hamburger-stack" aria-hidden="true">
            <span className={cx('hamburger-line', menuOpen && 'translate-y-[7px] rotate-45')} />
            <span className={cx('hamburger-line', menuOpen && 'opacity-0')} />
            <span className={cx('hamburger-line', menuOpen && '-translate-y-[7px] -rotate-45')} />
          </span>
        </button>
      </nav>

      <div className={cx('mobile-menu', menuOpen && 'is-open')} id="mobile-menu">
        <div className="site-shell mobile-menu-shell">
          {NAV_ITEMS.map((item) => (
            <SiteNavLink currentPath={currentPath} href={item.href} key={item.href} label={item.label} mobile onClick={onCloseMenu} />
          ))}
          <a className="mobile-phone" href={BUSINESS.phoneHref} onClick={onCloseMenu}>
            Call {BUSINESS.phoneDisplay}
          </a>
          <a className="button-primary mobile-quote" href="/quote/" onClick={onCloseMenu}>
            Get Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  const footerLinks = getFooterLinks();

  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div className="footer-brand">
          <a className="brand-lockup" href="/">
            {BUSINESS.company}
          </a>
          <p className="footer-copy">{BUSINESS.footerTagline}</p>
          <p className="footer-copy">{BUSINESS.address}</p>
          <a className="footer-copy footer-link" href={BUSINESS.phoneHref}>
            {BUSINESS.phoneDisplay}
          </a>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Services</p>
          {footerLinks.services.map((item) => (
            <a className="footer-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="footer-column">
          <p className="footer-heading">Popular Areas</p>
          {footerLinks.cities.map((item) => (
            <a className="footer-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="footer-column">
          <p className="footer-heading">Company</p>
          {footerLinks.company.map((item) => (
            <a className="footer-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="site-shell footer-bottom">
        <p>© 2026 Quality Moving & Storage</p>
        <p>TXDMV {BUSINESS.license}</p>
        <p>Independently owned and operated.</p>
      </div>
    </footer>
  );
}

function renderPage(route, props) {
  if (route.kind === 'home') {
    return <HomePage {...props} />;
  }

  if (route.kind === 'services-index') {
    return <ServicesIndexPage {...props} />;
  }

  if (route.kind === 'service') {
    return <ServicePage {...props} />;
  }

  if (route.kind === 'areas-index') {
    return <ServiceAreasIndexPage {...props} />;
  }

  if (route.kind === 'city') {
    return <CityPage {...props} />;
  }

  if (route.kind === 'about') {
    return <AboutPage {...props} />;
  }

  if (route.kind === 'faq') {
    return <FaqPage {...props} />;
  }

  if (route.kind === 'contact') {
    return <ContactPage {...props} />;
  }

  if (route.kind === 'quote') {
    return <QuotePage {...props} />;
  }

  return <NotFoundPage {...props} />;
}

export default function App({ initialPath = '/' }) {
  const currentPath = normalizePath(initialPath);
  const route = getRoute(currentPath);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(route.kind !== 'home');
  const [heroReady, setHeroReady] = useState(false);
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);
  const [submittedQuote, setSubmittedQuote] = useState(null);

  useEffect(() => {
    syncDocumentHead(route);
  }, [route]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setHeroReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [route.path]);

  useEffect(() => {
    const onScroll = () => {
      setNavSolid(route.kind !== 'home' || window.scrollY > 24);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, [route.kind]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-reveal]'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [route.path]);

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setFormState((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedQuote({ ...formState });
    setFormState(INITIAL_FORM_STATE);
  };

  const pageProps = {
    formState,
    heroReady,
    onChange: handleFormChange,
    onSubmit: handleSubmit,
    route,
    submittedQuote,
  };

  return (
    <div className="site-root">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader
        currentPath={currentPath}
        menuOpen={menuOpen}
        navSolid={navSolid}
        onCloseMenu={() => setMenuOpen(false)}
        onToggleMenu={() => setMenuOpen((current) => !current)}
      />
      <main id="main-content">{renderPage(route, pageProps)}</main>
      <SiteFooter />
    </div>
  );
}
