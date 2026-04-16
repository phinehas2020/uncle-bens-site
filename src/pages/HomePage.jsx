import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  CalendarCheck,
  ClipboardCheck,
  Headphones,
  Package,
  ShieldCheck,
  Truck,
  Warehouse,
  Home,
  Building2,
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { SEO, LocalBusinessSchema } from '../components/SEO';
import { featuredServices, howItWorks, publicContact, site, trustSignals } from '../data/site';

const serviceIcons = {
  'local-moving': Home,
  packing: Package,
  'long-distance': Truck,
  storage: Warehouse,
  'commercial-moving': Building2,
};

export function HomePage() {
  return (
    <>
      <SEO
        canonical="/"
        title="Austin Movers — Local, Long-Distance, Packing & Storage"
        description="Quality Moving & Storage is an Austin-based moving company. Written estimates, careful crews, and one coordinator for every move across Round Rock, Cedar Park, Pflugerville, Lakeway, and Central Texas."
        keywords="Austin movers, moving company Austin, Round Rock movers, Cedar Park moving, long-distance movers Texas, packing services Austin, storage Austin"
      />
      <LocalBusinessSchema />

      <Hero />

      {/* Stat strip */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-bone)]">
        <div className="wrap py-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: '15 min', v: 'Free walkthrough' },
              { k: '24 hr', v: 'Arrival window confirmed' },
              { k: '1 crew', v: 'From pack to placement' },
              { k: '11+ cities', v: 'Across Central Texas' },
            ].map((s) => (
              <div key={s.k} className="flex items-baseline gap-3">
                <p className="font-display text-[2.25rem] leading-none text-[var(--color-ink)] tnum">{s.k}</p>
                <p className="text-sm text-[var(--color-stone)]">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — editorial grid */}
      <section className="section">
        <div className="wrap">
          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="max-w-2xl">
              <p className="eyebrow">Services</p>
              <h2 className="display-lg mt-5 text-balance">
                Most moves blend a few things.{' '}
                <span className="serif-italic" style={{ color: 'var(--color-brand)' }}>We plan them together.</span>
              </h2>
            </div>
            <p className="text-base leading-relaxed text-[var(--color-graphite)] lg:text-lg">
              A local move often still needs full packing or a storage gap.
              We scope every piece up front — so nothing falls between crews or gets
              surprise-billed after the truck leaves.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service, idx) => {
              const Icon = serviceIcons[service.id] || Home;
              const isFeature = idx === 0;
              return (
                <Link
                  key={service.id}
                  to={`/services#${service.id}`}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] transition-all duration-300 hover:border-[var(--color-ink)] hover:shadow-[0_20px_50px_-30px_rgba(26,20,16,0.4)] ${
                    isFeature ? 'lg:row-span-2 lg:col-span-2' : ''
                  }`}
                  style={{ background: isFeature ? 'var(--color-paper)' : 'white' }}
                >
                  {service.image && isFeature && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        alt={service.imageAlt || service.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        decoding="async"
                        loading="lazy"
                        src={service.image}
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full"
                        style={{ background: 'var(--color-brand-wash)', color: 'var(--color-brand-deep)' }}>
                        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-[var(--color-dust)] transition-colors group-hover:text-[var(--color-ink)]" aria-hidden="true" />
                    </div>
                    <h3 className={`mt-5 font-display ${isFeature ? 'text-3xl' : 'text-xl'} leading-tight text-[var(--color-ink)]`}>
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-graphite)]">
                      {service.summary}
                    </p>
                    {isFeature && (
                      <ul className="mt-6 grid gap-2 text-sm text-[var(--color-graphite)] sm:grid-cols-2">
                        {service.highlights.slice(0, 4).map((h) => (
                          <li key={h} className="flex items-start gap-2">
                            <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: 'var(--color-brand)' }} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link to="/services" className="u-link">
              See all services <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/pricing" className="u-link">
              What does a move cost in Austin? <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section surface-paper">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="max-w-md">
              <p className="eyebrow">How it works</p>
              <h2 className="display-lg mt-5 text-balance">
                A move plan, not a <span className="serif-italic">guess</span>.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--color-graphite)]">
                Four steps, clearly named. You will know what is happening,
                who is handling it, and what we promised on paper — at every stage.
              </p>
              <Link to="/quote" className="mt-8 inline-flex btn btn-primary">
                Start with a walkthrough
              </Link>
            </div>

            <ol className="relative border-l border-[var(--color-line-strong)] pl-0">
              {howItWorks.map((step) => (
                <li key={step.step} className="relative grid gap-2 border-b border-[var(--color-line-strong)] py-6 pl-8 last:border-b-0 sm:grid-cols-[120px_1fr] sm:gap-6 sm:py-7 sm:pl-10">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-7 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full text-[0.7rem] font-medium tnum"
                    style={{ background: 'var(--color-ink)', color: 'var(--color-cream)' }}
                  >
                    {step.step}
                  </span>
                  <h3 className="font-display text-xl text-[var(--color-ink)]">{step.title}</h3>
                  <p className="text-[0.9375rem] leading-relaxed text-[var(--color-graphite)]">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Trust grid */}
      <section className="section">
        <div className="wrap">
          <div className="max-w-3xl">
            <p className="eyebrow">Why people pick us</p>
            <h2 className="display-lg mt-5 text-balance">
              Careful moving is the boring kind.{' '}
              <span className="serif-italic" style={{ color: 'var(--color-brand)' }}>That's the point.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-graphite)]">
              Not every mover protects doorframes, measures elevators, or writes
              down the quote with the crew size and truck count. These details aren't glamorous — they are why your move day does not turn into a story.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {trustSignals.map((s, i) => {
              const icons = [ShieldCheck, Headphones, ClipboardCheck, CalendarCheck];
              const Icon = icons[i] || ShieldCheck;
              return (
                <article key={s.label} className="rounded-2xl border border-[var(--color-line)] bg-white p-6 sm:p-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line-strong)]" style={{ color: 'var(--color-brand)' }}>
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-xl leading-snug text-[var(--color-ink)]">{s.label}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-graphite)]">{s.detail}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage section */}
      <section className="section surface-ink grain">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="eyebrow" style={{ color: 'var(--color-brand-soft)' }}>Coverage</p>
              <h2 className="display-lg mt-5 text-balance" style={{ color: 'var(--color-cream)' }}>
                Austin, Round Rock & the cities in between.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/80">
                Our crews know which downtown Austin buildings share a loading
                dock, which Cedar Park driveways can fit a 26-foot truck, and
                which Pflugerville streets are a Friday-afternoon mistake.
                That's not on a website — that's a crew that lives here.
              </p>
              <Link to="/service-areas" className="mt-8 inline-flex btn btn-brand">
                Browse service areas
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                {site.neighborhoods.map((n) => (
                  <li key={n.name} className="border-b border-white/10 pb-3">
                    <p className="font-display text-lg leading-snug text-[var(--color-cream)]">{n.name}</p>
                    <p className="mt-0.5 text-xs text-white/60">{n.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process / testimonial hybrid */}
      <section className="section">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
            <div className="order-2 lg:order-1">
              <figure
                className="relative rounded-2xl border border-[var(--color-line)] bg-[var(--color-bone)] p-8 sm:p-10"
                style={{ rotate: '-0.6deg' }}
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-3 -top-6 font-display text-[6rem] leading-none text-[var(--color-brand)]"
                >
                  “
                </span>
                <blockquote className="relative font-display text-[1.375rem] italic leading-[1.35] text-[var(--color-ink)] sm:text-2xl">
                  The crew showed up ten minutes early, walked the house
                  before a single pad came off the truck, and knew exactly
                  where the piano was going. Worth every dollar.
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line-strong)] font-display text-sm text-[var(--color-ink)]"
                    style={{ background: 'var(--color-paper)' }}
                    aria-hidden="true"
                  >
                    M.
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-ink)]">A homeowner in Cedar Park</p>
                    <p className="text-xs text-[var(--color-stone)]">Local move · 3 bed / 2 bath</p>
                  </div>
                </figcaption>
              </figure>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {['Licensed', 'Insured', 'Walkthrough-first'].map((b) => (
                  <div key={b} className="rounded-xl border border-[var(--color-line)] bg-white px-3 py-3 text-center text-xs font-medium text-[var(--color-graphite)]">
                    {b}
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="eyebrow">What a good quote looks like</p>
              <h2 className="display-lg mt-5 text-balance">
                We tell you what the <span className="serif-italic">actual</span> price is.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--color-graphite)]">
                Every written estimate has the same skeleton. If a mover's
                quote is missing any of these, that is a flag to watch — not
                us being strict.
              </p>

              <dl className="mt-8 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
                {[
                  { t: 'Crew size & truck count', d: 'How many people, how many trucks, and whether they are rated for your access.' },
                  { t: 'Arrival window', d: 'A defined two-to-four-hour window, reconfirmed 24 hours before.' },
                  { t: 'Hourly rate vs flat rate', d: 'Which one applies, when the clock starts, and what stops it.' },
                  { t: 'Access & specialty fees', d: 'Stairs, elevators, long carries, heavy items. Named on the estimate — not invoiced later.' },
                  { t: 'Packing materials', d: 'Quoted per project. We show you the box and crate count before we use them.' },
                ].map((row) => (
                  <div key={row.t} className="grid gap-2 py-4 sm:grid-cols-[220px_1fr] sm:gap-8">
                    <dt className="text-sm font-medium text-[var(--color-ink)]">{row.t}</dt>
                    <dd className="text-sm leading-relaxed text-[var(--color-graphite)]">{row.d}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section surface-bone">
        <div className="wrap">
          <div className="relative overflow-hidden rounded-3xl border border-[var(--color-line-strong)] bg-[var(--color-cream)] p-8 sm:p-12 lg:p-16 grain">
            <div className="grid items-end gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <p className="eyebrow">Start here</p>
                <h2 className="display-lg mt-5 max-w-2xl text-balance">
                  Tell us about your move.{' '}
                  <span className="serif-italic" style={{ color: 'var(--color-brand)' }}>We'll take it from there.</span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-graphite)]">
                  Written estimates are free. So is the walkthrough. If the scope is not a fit we'll tell you — not quote you and hope.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 lg:items-end">
                <Link to="/quote" className="btn btn-primary">
                  Request a written estimate
                  <span aria-hidden="true">→</span>
                </Link>
                {publicContact.hasPhone ? (
                  <a
                    href={publicContact.phoneHref}
                    className="text-sm font-medium text-[var(--color-ink)] underline underline-offset-4 decoration-[var(--color-line-strong)] hover:decoration-[var(--color-brand)]"
                  >
                    Or call {site.phone.display}
                  </a>
                ) : (
                  <Link to="/contact" className="text-sm font-medium text-[var(--color-ink)] underline underline-offset-4 decoration-[var(--color-line-strong)] hover:decoration-[var(--color-brand)]">
                    Or talk through your move
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
