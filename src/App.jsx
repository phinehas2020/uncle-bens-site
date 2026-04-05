import { useEffect, useState } from 'react';

const BUSINESS = {
  company: 'Quality Moving & Storage',
  phoneDisplay: '(512) 300-9543',
  phoneHref: 'tel:+15123009543',
  address: '1101 N Industrial Blvd, Round Rock, TX 78681',
  license: '#006027218C',
  yearsInBusiness: '19 years',
  hours: 'Mon-Sat 9:00 AM - 6:00 PM, Sun by appointment',
  footerTagline: 'Serving Austin, TX since 2005',
};

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Service Area', href: '#service-area' },
  { label: 'Quote', href: '#quote' },
  { label: 'Contact', href: '#footer' },
];

const TRUST_SIGNALS = [
  { label: '19 Years', description: 'Serving Austin' },
  { label: 'Licensed & Insured', description: 'TXDMV #006027218C' },
  { label: 'Guaranteed Quotes', description: 'No Hidden Fees' },
  { label: '5-Star Rated', description: 'Google & Yelp' },
];

const SERVICES = [
  {
    title: 'Local Moving',
    description: 'Same-day and scheduled local moves throughout Greater Austin.',
  },
  {
    title: 'Long Distance Moving',
    description: 'Interstate moves handled with care from quote to delivery.',
  },
  {
    title: 'Packing & Unpacking',
    description: 'Full-service packing with professional materials - nothing arrives broken.',
  },
  {
    title: 'Specialty Items',
    description: 'Pianos, antiques, and artwork moved by experienced hands.',
  },
  {
    title: 'Storage Solutions',
    description: 'Secure short and long-term storage at our Round Rock facility.',
  },
  {
    title: 'Loading & Unloading',
    description: 'We handle the heavy lifting - your truck or ours.',
  },
];

const SERVICE_AREAS = [
  'Austin',
  'Round Rock',
  'Cedar Park',
  'Georgetown',
  'Leander',
  'Pflugerville',
  'Kyle',
  'Buda',
  'Lakeway',
  'Manor',
  'Jarrell',
  'Burnet',
  'Marble Falls',
];

const MAP_MARKERS = [
  { name: 'Austin', x: 362, y: 238 },
  { name: 'Round Rock', x: 408, y: 186 },
  { name: 'Cedar Park', x: 312, y: 186 },
  { name: 'Georgetown', x: 438, y: 128 },
  { name: 'Leander', x: 274, y: 132 },
  { name: 'Pflugerville', x: 470, y: 214 },
  { name: 'Kyle', x: 366, y: 322 },
  { name: 'Buda', x: 362, y: 288 },
  { name: 'Lakeway', x: 242, y: 252 },
  { name: 'Manor', x: 522, y: 252 },
  { name: 'Jarrell', x: 448, y: 70 },
  { name: 'Burnet', x: 182, y: 100 },
  { name: 'Marble Falls', x: 144, y: 176 },
];

const MOVE_SIZES = ['Studio', '1 Bed', '2 Bed', '3 Bed', '4+ Bed', 'Office'];

const INITIAL_FORM_STATE = {
  name: '',
  phone: '',
  email: '',
  movingFrom: '',
  movingTo: '',
  moveDate: '',
  moveSize: MOVE_SIZES[0],
  notes: '',
};

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function NavLink({ href, label, onClick, mobile = false }) {
  return (
    <a
      className={cx(
        'nav-link',
        mobile ? 'block py-3 text-lg text-[var(--color-text-primary)]' : 'text-sm uppercase tracking-[0.14em] text-[var(--color-text-muted)]',
      )}
      href={href}
      onClick={onClick}
    >
      {label}
    </a>
  );
}

function SectionHeading({ title, subtitle, align = 'left' }) {
  return (
    <div className={cx('max-w-3xl', align === 'center' ? 'mx-auto text-center' : '')}>
      <h2 className="section-heading text-[var(--color-text-primary)]">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-muted)]">{subtitle}</p>
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);
  const [heroReady, setHeroReady] = useState(false);
  const [formState, setFormState] = useState(INITIAL_FORM_STATE);
  const [submittedQuote, setSubmittedQuote] = useState(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setHeroReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setNavSolid(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        rootMargin: '0px 0px -12% 0px',
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setFormState((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submission = {
      ...formState,
    };

    setSubmittedQuote(submission);
    setFormState(INITIAL_FORM_STATE);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)]">
      <header
        className={cx(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          navSolid || menuOpen
            ? 'border-b border-[var(--color-border)] bg-[rgba(22,27,34,0.94)] backdrop-blur-xl'
            : 'bg-transparent',
        )}
      >
        <nav aria-label="Primary" className="site-shell flex h-[var(--header-height)] items-center justify-between gap-6">
          <a
            className="brand-lockup max-w-[12rem] text-[var(--color-brand)] sm:max-w-none"
            href="#top"
            onClick={closeMenu}
          >
            {BUSINESS.company}
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} onClick={closeMenu} />
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a className="text-sm font-semibold text-[var(--color-accent)]" href={BUSINESS.phoneHref}>
              {BUSINESS.phoneDisplay}
            </a>
            <a className="button-primary button-pill" href="#quote">
              Get Free Quote
            </a>
          </div>

          <button
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[rgba(13,17,23,0.72)] text-[var(--color-text-primary)] md:hidden"
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="sr-only">Menu</span>
            <span className="hamburger-stack" aria-hidden="true">
              <span className={cx('hamburger-line', menuOpen && 'translate-y-[7px] rotate-45')} />
              <span className={cx('hamburger-line', menuOpen && 'opacity-0')} />
              <span className={cx('hamburger-line', menuOpen && '-translate-y-[7px] -rotate-45')} />
            </span>
          </button>
        </nav>

        <div
          className={cx(
            'md:hidden',
            menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
          )}
          id="mobile-menu"
        >
          <div className="border-t border-[var(--color-border)] bg-[rgba(22,27,34,0.98)]">
            <div className="site-shell flex flex-col gap-2 py-5">
              {NAV_LINKS.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} mobile onClick={closeMenu} />
              ))}
              <a
                className="mt-2 text-base font-semibold text-[var(--color-accent)]"
                href={BUSINESS.phoneHref}
                onClick={closeMenu}
              >
                Call {BUSINESS.phoneDisplay}
              </a>
              <a className="button-primary mt-3 w-full justify-center" href="#quote" onClick={closeMenu}>
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section" id="top">
          <img
            alt="Quality Moving & Storage crew unloading boxes beside a moving truck at an Austin-area home during golden hour."
            className="hero-image"
            fetchPriority="high"
            src="/hero-image.png"
          />
          <div aria-hidden="true" className="hero-overlay" />
          <div aria-hidden="true" className="hero-heat" />

          <div className="site-shell relative flex min-h-[100svh] items-end pb-20 pt-28 sm:pb-24 sm:pt-32 lg:items-center lg:pb-24">
            <div className="max-w-[42rem]">
              <p
                className={cx('hero-entrance text-display text-[var(--color-brand)]', heroReady && 'is-ready')}
                style={{ '--delay': '0ms' }}
              >
                {BUSINESS.company}
              </p>
              <h1
                className={cx('hero-entrance text-hero text-[var(--color-text-primary)]', heroReady && 'is-ready')}
                style={{ '--delay': '0ms' }}
              >
                Austin&apos;s Most Trusted Movers
              </h1>
              <p
                className={cx(
                  'hero-entrance mt-5 max-w-2xl text-lg leading-8 text-[var(--color-text-primary)]/88 sm:text-xl',
                  heroReady && 'is-ready',
                )}
                style={{ '--delay': '150ms' }}
              >
                19 years of stress-free moves. Licensed, insured, and guaranteed quotes - no surprises.
              </p>
              <div
                className={cx('hero-entrance mt-8 flex flex-col gap-4 sm:flex-row', heroReady && 'is-ready')}
                style={{ '--delay': '300ms' }}
              >
                <a className="button-primary" href="#quote">
                  Get Your Free Quote
                </a>
                <a className="button-secondary" href={BUSINESS.phoneHref}>
                  Call {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <p className="hero-license">TXDMV #006027218C</p>
        </section>

        <section className="trust-bar reveal-section" data-reveal>
          <div className="site-shell">
            <div className="grid gap-y-6 sm:grid-cols-2 md:grid-cols-4 md:gap-y-0">
              {TRUST_SIGNALS.map((signal, index) => (
                <article
                  className={cx(
                    'trust-item',
                    index > 0 && 'md:border-l md:border-[var(--color-border)]',
                  )}
                  key={signal.label}
                >
                  <p className="trust-label">{signal.label}</p>
                  <p className="trust-description">{signal.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="anchor-section reveal-section section-shell" data-reveal id="services">
          <div className="site-shell">
            <SectionHeading
              subtitle="Local crews, long-haul coordination, packing, storage, and specialty handling under one roof."
              title="Everything You Need for a Seamless Move"
            />

            <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-5">
              {SERVICES.map((service) => (
                <article
                  className="service-tile"
                  key={service.title}
                >
                  <h3 className="service-title">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)] sm:text-base sm:leading-7">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="anchor-section reveal-section section-shell border-t border-[var(--color-border)]" data-reveal id="service-area">
          <div className="site-shell">
            <SectionHeading
              subtitle="From Georgetown to Buda, Cedar Park to Manor - if you&apos;re in Central Texas, we&apos;ve got you."
              title="We Move All of Greater Austin"
            />

            <div className="mt-12 border-y border-[var(--color-border)] py-8 sm:py-10">
              <svg
                aria-labelledby="service-area-map-title service-area-map-desc"
                className="h-auto w-full"
                role="img"
                viewBox="0 0 760 460"
              >
                <title id="service-area-map-title">Stylized Central Texas service area map for Quality Moving &amp; Storage</title>
                <desc id="service-area-map-desc">
                  Austin metro outline with markers for Austin, Round Rock, Cedar Park, Georgetown, Leander, Pflugerville, Kyle,
                  Buda, Lakeway, Manor, Jarrell, Burnet, and Marble Falls.
                </desc>

                <defs>
                  <linearGradient id="mapFill" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(22,27,34,0.96)" />
                    <stop offset="100%" stopColor="rgba(13,17,23,0.98)" />
                  </linearGradient>
                </defs>

                <g aria-hidden="true">
                  <path
                    d="M118 76L212 40L328 54L444 30L610 92L664 182L632 266L676 342L580 404L430 420L336 392L220 430L138 370L88 264L98 166Z"
                    fill="url(#mapFill)"
                    stroke="var(--color-border)"
                    strokeWidth="3"
                  />
                  <path
                    d="M178 120L540 310"
                    stroke="rgba(240,165,0,0.24)"
                    strokeDasharray="12 18"
                    strokeWidth="2"
                  />
                  <path
                    d="M238 316L446 132"
                    stroke="rgba(240,165,0,0.18)"
                    strokeDasharray="10 16"
                    strokeWidth="2"
                  />
                </g>

                {MAP_MARKERS.map((city) => (
                  <g key={city.name}>
                    <circle cx={city.x} cy={city.y} fill="rgba(232,80,26,0.18)" r="16" />
                    <circle cx={city.x} cy={city.y} fill="var(--color-brand)" r="6" />
                  </g>
                ))}
              </svg>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-3 text-sm leading-6 text-[var(--color-text-muted)] sm:text-[14px]">
              {SERVICE_AREAS.map((city) => (
                <span className="city-pill" key={city}>
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="anchor-section reveal-section section-shell border-t border-[var(--color-border)]" data-reveal id="quote">
          <div className="site-shell">
            <SectionHeading
              align="center"
              subtitle="Takes 60 seconds. No obligation. We&apos;ll call you back within the hour."
              title="Get Your Free Guaranteed Quote"
            />

            <form className="quote-form-shell mx-auto mt-12 max-w-5xl" onSubmit={handleSubmit}>
              {submittedQuote ? (
                <div className="success-banner" role="status">
                  We&apos;ll call you at {submittedQuote.phone} within the hour. Thank you, {submittedQuote.name}.
                </div>
              ) : null}

              <div className="grid gap-5 md:grid-cols-2">
                <Field htmlFor="name" label="Name">
                  <input
                    className="field-input"
                    id="name"
                    name="name"
                    required
                    type="text"
                    value={formState.name}
                    onChange={handleFormChange}
                  />
                </Field>

                <Field htmlFor="phone" label="Phone">
                  <input
                    className="field-input"
                    id="phone"
                    name="phone"
                    required
                    type="tel"
                    value={formState.phone}
                    onChange={handleFormChange}
                  />
                </Field>

                <Field htmlFor="email" label="Email">
                  <input
                    className="field-input"
                    id="email"
                    name="email"
                    required
                    type="email"
                    value={formState.email}
                    onChange={handleFormChange}
                  />
                </Field>

                <Field htmlFor="movingFrom" label="Moving From">
                  <input
                    className="field-input"
                    id="movingFrom"
                    name="movingFrom"
                    required
                    type="text"
                    value={formState.movingFrom}
                    onChange={handleFormChange}
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
                    onChange={handleFormChange}
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
                    onChange={handleFormChange}
                  />
                </Field>

                <Field htmlFor="moveSize" label="Move Size">
                  <select
                    className="field-input"
                    id="moveSize"
                    name="moveSize"
                    value={formState.moveSize}
                    onChange={handleFormChange}
                  >
                    {MOVE_SIZES.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field className="md:col-span-2" htmlFor="notes" label="Additional Notes (optional)">
                  <textarea
                    className="field-input min-h-36 resize-y"
                    id="notes"
                    name="notes"
                    value={formState.notes}
                    onChange={handleFormChange}
                  />
                </Field>
              </div>

              <div className="mt-6 space-y-4">
                <button className="button-primary w-full justify-center text-center" type="submit">
                  Request My Free Quote &rarr;
                </button>
                <p className="quote-trust-note text-sm text-[var(--color-text-muted)]">
                  <span aria-hidden="true">&#128274;</span> Your info is never sold or shared. Licensed TX Mover TXDMV #006027218C
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/84" id="footer">
        <div className="site-shell grid gap-10 py-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div>
            <a className="brand-lockup text-[var(--color-brand)]" href="#top">
              {BUSINESS.company}
            </a>
            <p className="mt-5 text-base leading-7 text-[var(--color-text-primary)]">{BUSINESS.footerTagline}</p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--color-text-muted)]">{BUSINESS.address}</p>
            <p className="mt-1 text-sm leading-7 text-[var(--color-text-muted)]">{BUSINESS.hours}</p>
            <a className="mt-5 inline-flex text-base font-semibold text-[var(--color-accent)]" href={BUSINESS.phoneHref}>
              {BUSINESS.phoneDisplay}
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="footer-heading">Navigate</p>
              <div className="mt-4 flex flex-col gap-3">
                {NAV_LINKS.map((item) => (
                  <a className="footer-link" href={item.href} key={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="footer-heading">Reach Us</p>
              <div className="mt-4 flex flex-col gap-3 text-sm leading-7 text-[var(--color-text-muted)]">
                <span>Local Moving</span>
                <span>Long Distance Moving</span>
                <span>Packing &amp; Unpacking</span>
                <span>Short &amp; Long-Term Storage</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)]">
          <div className="site-shell flex flex-col gap-2 py-5 text-sm text-[var(--color-text-muted)] md:flex-row md:items-center md:justify-between">
            <p>&copy; {new Date().getFullYear()} {BUSINESS.company}</p>
            <p>TXDMV {BUSINESS.license}</p>
            <p>Independently owned and operated.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
