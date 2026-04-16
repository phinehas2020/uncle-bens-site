import { Link } from 'react-router-dom';
import { Phone, MapPin, ShieldCheck, Truck } from 'lucide-react';
import { HeroLeadForm } from './HeroLeadForm';
import { publicContact, site, trustLine } from '../data/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-cream)] grain">
      {/* Editorial background — warm cream with subtle topographic scatter */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-24 top-[-10rem] h-[32rem] w-[32rem] rounded-full opacity-50 blur-3xl"
          style={{ background: 'radial-gradient(closest-side, var(--color-brand-wash), transparent 70%)' }}
        />
        <div
          className="absolute -right-32 bottom-[-12rem] h-[36rem] w-[36rem] rounded-full opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(closest-side, var(--color-paper), transparent 72%)' }}
        />
      </div>

      <div className="wrap relative pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28">
        {/* Eyebrow */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.78rem]">
          <span className="eyebrow">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Austin · Round Rock · Central Texas
          </span>
          <span className="hidden h-3 w-px bg-[var(--color-line-strong)] md:inline-block" />
          <span className="inline-flex items-center gap-1.5 text-[var(--color-stone)]">
            <ShieldCheck className="h-3.5 w-3.5" style={{ color: 'var(--color-brand)' }} aria-hidden="true" />
            TXDMV registered · fully insured
          </span>
        </div>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-24">
          {/* Headline column */}
          <div className="max-w-[42rem]">
            <h1 className="display-xl text-[var(--color-ink)] text-balance">
              The careful way to move in{' '}
              <span className="serif-italic" style={{ color: 'var(--color-brand)' }}>Austin</span>.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-graphite)] sm:text-xl sm:leading-relaxed">
              Written estimates before anyone touches a box. One crew from walkthrough
              to placement. Local moves, storage, and long-distance work done
              without the usual drama.
            </p>

            {/* Primary actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/quote" className="btn btn-primary">
                Get a free estimate
                <span aria-hidden="true">→</span>
              </Link>
              {publicContact.hasPhone ? (
                <a href={publicContact.phoneHref} className="btn btn-ghost">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {site.phone.display}
                </a>
              ) : (
                <Link to="/contact" className="btn btn-ghost">
                  Talk through your move
                </Link>
              )}
            </div>

            {/* Trust line */}
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[0.875rem] text-[var(--color-stone)]">
              {trustLine.map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="inline-block h-1 w-1 rounded-full"
                    style={{ background: 'var(--color-brand)' }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* Editorial quote card — hidden on small for hierarchy */}
            <figure className="mt-10 hidden max-w-lg border-l-2 border-[var(--color-brand)] pl-5 md:block">
              <blockquote className="font-display text-xl italic leading-snug text-[var(--color-graphite)]">
                “Good movers don't start with a truck. They start with a plan —
                stairs, elevators, doorframes, and the three items nobody labels.”
              </blockquote>
              <figcaption className="mt-3 text-[0.8125rem] uppercase tracking-[0.15em] text-[var(--color-stone)]">
                Crew lead · Round Rock
              </figcaption>
            </figure>
          </div>

          {/* Form column */}
          <div className="relative">
            <div className="relative rounded-2xl border border-[var(--color-line)] bg-white p-5 shadow-[0_14px_40px_-20px_rgba(26,20,16,0.25)] sm:p-6">
              <div className="flex items-center justify-between">
                <p className="font-display text-[1.625rem] leading-tight text-[var(--color-ink)]">
                  Get your <span className="serif-italic">free</span> estimate
                </p>
                <Truck className="h-5 w-5" style={{ color: 'var(--color-brand)' }} aria-hidden="true" />
              </div>
              <p className="mt-1.5 text-sm text-[var(--color-stone)]">
                Three fields. We reply within one business day.
              </p>
              <HeroLeadForm />
            </div>

            {/* Small caption under card */}
            <p className="mt-4 text-center text-xs text-[var(--color-stone)]">
              Prefer to talk?{' '}
              {publicContact.hasPhone ? (
                <a
                  className="font-medium text-[var(--color-ink)] underline underline-offset-4 decoration-[var(--color-line-strong)] hover:decoration-[var(--color-brand)]"
                  href={publicContact.phoneHref}
                >
                  Call {site.phone.display}
                </a>
              ) : (
                <Link
                  className="font-medium text-[var(--color-ink)] underline underline-offset-4 decoration-[var(--color-line-strong)] hover:decoration-[var(--color-brand)]"
                  to="/contact"
                >
                  Talk through your move
                </Link>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
