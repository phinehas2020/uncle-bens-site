import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { site } from '../data/site';

export function ServiceAreasPage() {
  return (
    <>
      <SEO
        canonical="/service-areas"
        title="Service Areas — Austin, Round Rock, Cedar Park, Pflugerville & More"
        description="Quality Moving & Storage serves Austin, Round Rock, Cedar Park, Pflugerville, Lakeway, Georgetown, Leander, Buda, Kyle, Manor, and Marble Falls. Local crews who know Central Texas."
        keywords="movers Round Rock, Cedar Park movers, Pflugerville moving company, Lakeway movers, Georgetown Texas movers, Austin suburb movers"
      />

      <section className="section-tight pt-16 md:pt-24">
        <div className="wrap">
          <p className="eyebrow">Service areas</p>
          <h1 className="display-xl mt-5 max-w-5xl text-balance">
            We move people across{' '}
            <span className="serif-italic" style={{ color: 'var(--color-brand)' }}>Central Texas</span>,
            one neighborhood at a time.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-graphite)]">
            Our crews are based in Round Rock and know the roads, buildings,
            and loading-zone quirks of every city below. If your move starts or
            ends here, we can handle it.
          </p>
        </div>
      </section>

      {/* Neighborhood grid */}
      <section className="section-tight pt-10">
        <div className="wrap">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {site.neighborhoods.map((n, idx) => (
              <article
                key={n.name}
                className="group relative rounded-2xl border border-[var(--color-line)] bg-white p-6 transition-all hover:border-[var(--color-ink)] hover:shadow-[0_12px_30px_-18px_rgba(26,20,16,0.35)]"
              >
                <p className="font-display text-[0.8rem] uppercase tracking-[0.2em] text-[var(--color-dust)] tnum">
                  {String(idx + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-3 font-display text-2xl leading-tight text-[var(--color-ink)]">{n.name}</h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-graphite)]">{n.note}</p>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-[var(--color-stone)] group-hover:text-[var(--color-brand)]">
                  Request a quote
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </div>
                <Link to="/quote" className="absolute inset-0" aria-label={`Request a quote for a move in ${n.name}`}>
                  <span className="sr-only">Request a quote</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Full area list */}
      <section className="section surface-paper">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <div className="max-w-md">
              <p className="eyebrow">Full coverage list</p>
              <h2 className="display-lg mt-5 text-balance">
                Cities we quote <span className="serif-italic">regularly</span>.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--color-graphite)]">
                Don't see yours? If it's in the Austin metro or Central Texas,
                ask — we likely cover it or can point you to a trusted partner.
              </p>
              <Link to="/contact" className="mt-8 inline-flex btn btn-primary">
                Ask about your city
              </Link>
            </div>

            <ul className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
              {site.serviceAreas.map((area) => (
                <li key={area} className="border-b border-[var(--color-line-strong)] pb-3 font-display text-xl text-[var(--color-ink)]">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Long-distance band */}
      <section className="section">
        <div className="wrap">
          <div className="grid gap-8 rounded-3xl border border-[var(--color-line-strong)] bg-[var(--color-cream)] p-8 sm:p-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center grain">
            <div>
              <p className="eyebrow">Leaving Texas?</p>
              <h2 className="display-lg mt-5 max-w-2xl text-balance">
                We also handle <span className="serif-italic">long-distance</span> moves out of Austin.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-graphite)]">
                Cross-state and interstate moves with one coordinator, a
                written timeline, and scheduled communication checkpoints. No
                rotating phone trees, no brokered handoffs.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <Link to="/services#long-distance" className="btn btn-primary">
                Long-distance details
                <span aria-hidden="true">→</span>
              </Link>
              <Link to="/quote" className="u-link">Request a long-distance quote</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
