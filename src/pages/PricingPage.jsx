import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { movingCostRanges, pricingNotes, publicContact, site } from '../data/site';

export function PricingPage() {
  return (
    <>
      <SEO
        canonical="/pricing"
        title="How Much Do Movers Cost in Austin? — 2026 Moving Cost Guide"
        description="What does a move cost in Austin, Texas? Typical price ranges by home size, hourly crew rates, and what actually changes the number. Honest pricing guide from a local TXDMV-registered mover."
        keywords="Austin moving cost, how much do movers cost Austin, Austin movers price, moving company cost Texas, hourly moving rate Austin"
      />

      <section className="section-tight pt-16 md:pt-24">
        <div className="wrap">
          <p className="eyebrow">Pricing guide</p>
          <h1 className="display-xl mt-5 max-w-4xl text-balance">
            What does a move in{' '}
            <span className="serif-italic" style={{ color: 'var(--color-brand)' }}>Austin</span>{' '}
            actually cost?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-graphite)]">
            Honest ranges, plain English. These are the numbers local Austin households usually see — not a national average, and not a coupon to bait you in.
          </p>
        </div>
      </section>

      {/* Price table */}
      <section className="section pt-10">
        <div className="wrap">
          <div className="overflow-hidden rounded-3xl border border-[var(--color-line)] bg-white">
            <div className="hidden grid-cols-[2fr_1fr_1.2fr_2fr] gap-6 border-b border-[var(--color-line)] bg-[var(--color-bone)] px-6 py-4 text-[0.75rem] uppercase tracking-[0.14em] text-[var(--color-stone)] md:grid md:px-8">
              <div>Home size</div>
              <div>Typical range</div>
              <div>Crew & time</div>
              <div>Notes</div>
            </div>
            {movingCostRanges.map((row, idx) => (
              <div
                key={row.type}
                className={`grid gap-3 px-6 py-5 md:grid-cols-[2fr_1fr_1.2fr_2fr] md:items-center md:gap-6 md:px-8 md:py-6 ${
                  idx !== movingCostRanges.length - 1 ? 'border-b border-[var(--color-line)]' : ''
                }`}
              >
                <div className="font-display text-xl leading-snug text-[var(--color-ink)]">{row.type}</div>
                <div className="font-display text-xl tnum text-[var(--color-brand-deep)]">{row.local}</div>
                <div className="text-sm text-[var(--color-graphite)]">{row.crew}</div>
                <div className="text-sm leading-relaxed text-[var(--color-stone)]">{row.note}</div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm text-[var(--color-stone)]">
            Ranges assume moves within the Austin / Round Rock / Cedar Park / Pflugerville / Lakeway area. Long-distance moves are priced separately.
          </p>
        </div>
      </section>

      {/* What changes the number */}
      <section className="section surface-paper">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="max-w-md">
              <p className="eyebrow">The real variables</p>
              <h2 className="display-lg mt-5 text-balance">
                What actually <span className="serif-italic">moves</span> the number.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--color-graphite)]">
                Two identical homes can get two very different quotes. Here's
                what makes the difference in Austin, specifically.
              </p>
            </div>

            <ol className="space-y-0 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {[
                { t: 'Access & stairs', d: 'Three flights of apartment stairs without an elevator can add 1–2 hours to a small move.' },
                { t: 'Parking & loading zone', d: 'Downtown Austin and East Side addresses often need loading-zone coordination — worth 30 minutes of setup.' },
                { t: 'Packing', d: 'Full-service packing for a 3-bedroom home runs 6–12 hours and is quoted separately from labor.' },
                { t: 'Specialty items', d: 'Pianos, safes, large art, and gym equipment are flat-fee add-ons — named in writing, never surprise.' },
                { t: 'Season & day of week', d: 'End-of-month weekends during May–August are premium windows. Mid-week and mid-month are typically less.' },
                { t: 'Distance for long-haul', d: 'Long-distance moves are priced on weight, distance, and access — not hours.' },
              ].map((row) => (
                <li key={row.t} className="grid gap-2 py-5 sm:grid-cols-[200px_1fr] sm:gap-8">
                  <p className="font-medium text-[var(--color-ink)]">{row.t}</p>
                  <p className="text-[0.9375rem] leading-relaxed text-[var(--color-graphite)]">{row.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Honest notes */}
      <section className="section">
        <div className="wrap">
          <div className="rounded-3xl border border-[var(--color-ink)] bg-[var(--color-ink)] p-8 sm:p-12 lg:p-16 text-[var(--color-cream)] grain">
            <p className="eyebrow" style={{ color: 'var(--color-brand-soft)' }}>A few honest notes</p>
            <h2 className="display-lg mt-5 max-w-3xl text-balance" style={{ color: 'var(--color-cream)' }}>
              What the cheap quote is hiding.
            </h2>
            <ul className="mt-8 grid gap-5 md:grid-cols-2">
              {pricingNotes.map((note) => (
                <li key={note} className="rounded-2xl border border-white/15 p-5 text-[0.9375rem] leading-relaxed text-white/85">
                  {note}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/quote" className="btn btn-brand">
                Request your written estimate
                <span aria-hidden="true">→</span>
              </Link>
              {publicContact.hasPhone ? (
                <a href={publicContact.phoneHref} className="text-sm font-medium text-white underline underline-offset-4 decoration-white/30 hover:decoration-[var(--color-brand-soft)]">
                  Or call {site.phone.display}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
