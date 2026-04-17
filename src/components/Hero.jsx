import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { HeroLeadForm } from './HeroLeadForm';
import { BrandSeal, ScribbleUnderline, Numeral } from './BrandMark';
import { publicContact, site, trustLine } from '../data/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-cream)] grain">
      {/* Warm ambient wash */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-32 top-[-10rem] h-[34rem] w-[34rem] rounded-full opacity-55 blur-3xl"
          style={{ background: 'radial-gradient(closest-side, var(--color-brand-wash), transparent 70%)' }}
        />
        <div
          className="absolute -right-40 bottom-[-14rem] h-[40rem] w-[40rem] rounded-full opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(closest-side, var(--color-paper), transparent 70%)' }}
        />
      </div>

      {/* Editorial ruled header */}
      <div className="relative border-b border-[var(--color-line-strong)]/60">
        <div className="wrap flex items-center justify-between py-3 text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-stone)]">
          <span className="inline-flex items-center gap-2.5">
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: 'var(--color-brand)' }} />
            Austin · Round Rock · Central Texas
          </span>
          <span className="hidden sm:inline-flex items-center gap-2.5">
            <span className="tnum">{site.license}</span>
          </span>
        </div>
      </div>

      <div className="wrap relative pt-10 pb-20 md:pt-14 md:pb-28 lg:pt-16 lg:pb-32">
        {/* Chapter marker */}
        <div className="flex items-center gap-6">
          <Numeral value={1} label="A careful move" />
          <span aria-hidden="true" className="h-px flex-1 bg-[var(--color-line-strong)]/60" />
        </div>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1.2fr_0.85fr] lg:gap-20 xl:gap-28">
          {/* Headline column */}
          <div className="relative max-w-[44rem]">
            <h1 className="display-xl relative text-[var(--color-ink)] text-balance">
              The careful way{' '}
              <span className="whitespace-nowrap">
                to move in{' '}
                <span className="relative inline-block">
                  <span className="serif-italic relative z-10">Austin</span>
                  <ScribbleUnderline
                    className="pointer-events-none absolute -bottom-1 left-0 h-[0.38em] w-[115%] -translate-x-[2%] select-none"
                    color="var(--color-brand)"
                    thickness={3}
                  />
                </span>
              </span>
              .
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-graphite)] sm:text-xl sm:leading-[1.55]">
              Written estimates before anyone touches a box. One crew from walkthrough
              to placement. Local moves, storage, and long-distance work —
              done the boring, careful way.
            </p>

            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Link to="/quote" className="btn btn-primary">
                Get a free estimate
                <span aria-hidden="true" className="ml-0.5">→</span>
              </Link>
              {publicContact.hasPhone ? (
                <a href={publicContact.phoneHref} className="btn btn-ghost">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {site.phone.display}
                </a>
              ) : (
                <Link to="/contact" className="btn btn-ghost">Talk through your move</Link>
              )}
            </div>

            <ul className="mt-10 grid gap-x-6 gap-y-2 text-[0.85rem] text-[var(--color-stone)] sm:flex sm:flex-wrap sm:items-center">
              {trustLine.map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="inline-block h-1 w-1 rounded-full"
                    style={{ background: 'var(--color-brand)' }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Pull quote — intentionally off-grid */}
            <figure className="relative mt-14 hidden max-w-lg md:block">
              <div
                className="absolute -left-3 top-1 h-full w-[3px] rounded-full"
                style={{ background: 'var(--color-brand)' }}
                aria-hidden="true"
              />
              <blockquote className="pl-6 font-display text-[1.375rem] italic leading-snug text-[var(--color-graphite)]">
                “Good movers don't start with a truck. They start with a plan —
                stairs, elevators, doorframes, and the three items nobody labels.”
              </blockquote>
              <figcaption className="mt-3 pl-6 text-[0.72rem] uppercase tracking-[0.2em] text-[var(--color-stone)]">
                — A crew lead, Round Rock
              </figcaption>
            </figure>
          </div>

          {/* Form column — offset with overlapping seal */}
          <div className="relative">
            {/* Brand seal peeking from behind the card */}
            <BrandSeal
              size={160}
              className="pointer-events-none absolute -left-10 -top-8 z-0 rotate-[-8deg] opacity-35"
              color="var(--color-ink)"
            />

            <div
              className="relative z-10 rounded-[20px] border border-[var(--color-line-strong)] bg-white p-6 shadow-[0_30px_60px_-28px_rgba(26,20,16,0.32)] sm:p-7"
              style={{ rotate: '0.4deg' }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--color-stone)]">
                    Free written estimate
                  </p>
                  <p className="mt-2 font-display text-[1.75rem] leading-[1.05] text-[var(--color-ink)]">
                    Tell us <span className="serif-italic">a little</span> about your move.
                  </p>
                </div>
                <span
                  className="shrink-0 rounded-full border border-[var(--color-line-strong)] px-2.5 py-1 text-[0.64rem] uppercase tracking-[0.22em] text-[var(--color-stone)]"
                >
                  № 01
                </span>
              </div>

              <HeroLeadForm />
            </div>

            {/* Under-card note, hand-written feel */}
            <p className="relative z-10 mt-5 pl-2 font-display text-[0.95rem] italic text-[var(--color-stone)]">
              Or, if you'd rather — just call the office.{' '}
              {publicContact.hasPhone ? (
                <a
                  className="font-medium text-[var(--color-ink)] underline underline-offset-[5px] decoration-[1.5px] decoration-[var(--color-brand)]"
                  href={publicContact.phoneHref}
                >
                  {site.phone.display}
                </a>
              ) : (
                <Link className="font-medium text-[var(--color-ink)] underline underline-offset-[5px] decoration-[1.5px] decoration-[var(--color-brand)]" to="/contact">
                  send a note
                </Link>
              )}
              .
            </p>
          </div>
        </div>
      </div>

      {/* Bottom hairline rule like a newspaper section break */}
      <div aria-hidden="true" className="wrap">
        <div className="flex items-center gap-3 border-t border-[var(--color-line-strong)]/60 pt-5 pb-5">
          <span className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-stone)]">
            Est. in Round Rock · Licensed in Texas · Central TX since day one
          </span>
          <span className="h-px flex-1 bg-[var(--color-line-strong)]/40" />
          <span className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-stone)]">
            Mon – Sat · 9 to 5
          </span>
        </div>
      </div>
    </section>
  );
}
