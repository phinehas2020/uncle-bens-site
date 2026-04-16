import { Link } from 'react-router-dom';
import { ArrowUpRight, Home, Package, Truck, Warehouse, Building2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { services, serviceDetails } from '../data/site';

const icons = {
  'local-moving': Home,
  packing: Package,
  'long-distance': Truck,
  storage: Warehouse,
  'commercial-moving': Building2,
};

export function ServicesPage() {
  return (
    <>
      <SEO
        canonical="/services"
        title="Moving Services in Austin — Local, Packing, Storage & Long-Distance"
        description="Moving services offered by Quality Moving & Storage across Austin, Round Rock, Cedar Park, Pflugerville, Lakeway, and Central Texas. Local moves, packing, storage, long-distance, and commercial relocation."
        keywords="moving services Austin, local moving, long-distance moving, packing services, storage solutions, commercial moving"
      />

      {/* Header */}
      <section className="section-tight pb-0 pt-16 md:pt-24">
        <div className="wrap">
          <p className="eyebrow">Services</p>
          <h1 className="display-xl mt-5 max-w-4xl text-balance">
            Every move is a <span className="serif-italic" style={{ color: 'var(--color-brand)' }}>project</span>. We run it like one.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-graphite)]">
            Local routes, packing, storage, and long hauls are rarely separate
            jobs. We scope and sequence them as one written plan — the same
            plan the crew follows on move day.
          </p>
        </div>
      </section>

      {/* Services jump index */}
      <section className="section-tight pt-10">
        <div className="wrap">
          <ul className="flex flex-wrap gap-2">
            {services.map((s) => {
              const Icon = icons[s.id] || Home;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-white px-4 py-2 text-sm text-[var(--color-graphite)] transition-colors hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
                  >
                    <Icon className="h-4 w-4" style={{ color: 'var(--color-brand)' }} aria-hidden="true" />
                    {s.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Service blocks */}
      <section className="section pt-10">
        <div className="wrap space-y-24 lg:space-y-32">
          {services.map((service, idx) => {
            const Icon = icons[service.id] || Home;
            const detail = serviceDetails.find((d) => d.id === service.id);
            const flip = idx % 2 === 1;
            return (
              <article key={service.id} id={service.id} className="scroll-mt-24">
                <div className={`grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16 ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-3xl">
                    {service.image ? (
                      <img
                        alt={service.imageAlt || service.title}
                        className="aspect-[4/5] w-full object-cover"
                        decoding="async"
                        loading="lazy"
                        src={service.image}
                      />
                    ) : (
                      <div className="aspect-[4/5] w-full surface-paper" />
                    )}
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,20,16,0.35), transparent 50%)' }} aria-hidden="true" />
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-[var(--color-ink)] backdrop-blur">
                      <Icon className="h-3.5 w-3.5" style={{ color: 'var(--color-brand)' }} aria-hidden="true" />
                      {service.shortTitle || service.title}
                    </div>
                  </div>

                  <div>
                    <p className="eyebrow">Service · {String(idx + 1).padStart(2, '0')}</p>
                    <h2 className="display-lg mt-4 text-balance">{service.title}</h2>
                    <p className="mt-5 text-lg leading-relaxed text-[var(--color-graphite)]">
                      {detail?.intro || service.summary}
                    </p>

                    {detail?.details?.length ? (
                      <div className="mt-6 space-y-4 text-[0.9375rem] leading-relaxed text-[var(--color-graphite)]">
                        {detail.details.slice(0, 2).map((p, i) => <p key={i}>{p}</p>)}
                      </div>
                    ) : null}

                    <ul className="mt-8 grid gap-3 text-sm text-[var(--color-graphite)] sm:grid-cols-2">
                      {service.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5">
                          <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: 'var(--color-brand)' }} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {detail?.related?.length ? (
                      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--color-stone)]">
                        <span className="font-medium text-[var(--color-ink)]">Often paired with:</span>
                        {detail.related.map((id) => {
                          const related = services.find((s) => s.id === id);
                          if (!related) return null;
                          return (
                            <a key={id} href={`#${id}`} className="u-link">
                              {related.title}
                            </a>
                          );
                        })}
                      </div>
                    ) : null}

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link to="/quote" className="btn btn-primary">
                        Quote this service
                        <span aria-hidden="true">→</span>
                      </Link>
                      <Link to="/contact" className="btn btn-ghost">
                        Ask a question
                      </Link>
                    </div>
                  </div>
                </div>

                {detail?.faqs?.length ? (
                  <div className="mt-12 rounded-2xl border border-[var(--color-line)] surface-bone p-6 sm:p-8">
                    <p className="eyebrow">Common questions</p>
                    <dl className="mt-5 divide-y divide-[var(--color-line)]">
                      {detail.faqs.map((f) => (
                        <div key={f.question} className="grid gap-2 py-4 sm:grid-cols-[1fr_2fr] sm:gap-8">
                          <dt className="font-display text-lg text-[var(--color-ink)]">{f.question}</dt>
                          <dd className="text-[0.9375rem] leading-relaxed text-[var(--color-graphite)]">{f.answer}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="section surface-ink grain">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="eyebrow" style={{ color: 'var(--color-brand-soft)' }}>Comparing movers?</p>
              <h2 className="display-lg mt-5 text-balance" style={{ color: 'var(--color-cream)' }}>
                Use the same inventory list for every quote.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
                If one mover is quoting a 2-bedroom apartment and another is
                quoting a 3-bedroom home with stairs, the comparison is already
                broken. We wrote a plain-English guide for comparing Austin movers fairly.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <Link to="/austin-top-movers" className="btn btn-brand">
                Read the Austin movers guide
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/pricing" className="text-sm font-medium text-white/85 underline underline-offset-4 decoration-white/30 hover:decoration-[var(--color-brand-soft)]">
                See typical Austin moving costs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
