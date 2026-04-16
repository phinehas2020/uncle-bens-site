import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import {
  austinMoverFaqs,
  austinMoverMethodology,
  austinMoverRedFlags,
  austinMoverSelectionChecklist,
  austinTopMoverResearchSources,
  austinTopMovers,
  austinTopMoversUpdatedAt,
} from '../data/austinTopMovers';
import { publicContact, site } from '../data/site';

export function AustinTopMoversPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: austinMoverFaqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <SEO
        canonical="/austin-top-movers"
        title="Top Movers in Austin, TX (2026) — Guide & Comparison"
        description="An honest guide to the top-rated moving companies in Austin, Texas, with review data, quote questions, and a checklist for comparing movers fairly."
        keywords="top movers Austin, best Austin moving companies, Austin movers ranked, Austin moving quotes"
        article={{
          publishedTime: `${austinTopMoversUpdatedAt}T00:00:00-06:00`,
          modifiedTime: `${austinTopMoversUpdatedAt}T00:00:00-06:00`,
        }}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="section-tight pt-16 md:pt-24">
        <div className="wrap">
          <p className="eyebrow">Austin movers guide · Updated {austinTopMoversUpdatedAt}</p>
          <h1 className="display-xl mt-5 max-w-5xl text-balance">
            The top movers in <span className="serif-italic" style={{ color: 'var(--color-brand)' }}>Austin</span>, by the numbers.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--color-graphite)]">
            A clear-eyed shortlist of Austin movers, pulled from public review data, credential
            sources, and ranking marketplaces. Use it to build a better comparison — not to rank us.
          </p>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-tight">
        <div className="wrap">
          <div className="grid gap-4 md:grid-cols-3">
            {austinMoverMethodology.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[var(--color-line)] surface-bone p-6">
                <p className="font-display text-4xl leading-none text-[var(--color-ink)] tnum">{item.value}</p>
                <p className="mt-3 text-sm font-medium text-[var(--color-ink)]">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-graphite)]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranked list */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Ranked shortlist</p>
          <h2 className="display-lg mt-5 max-w-2xl text-balance">
            Four Austin movers worth a call.
          </h2>

          <div className="mt-12 space-y-6">
            {austinTopMovers.map((mover, idx) => (
              <article key={mover.name} className="overflow-hidden rounded-3xl border border-[var(--color-line)] bg-white">
                <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[auto_1.2fr_1fr]">
                  <div className="shrink-0">
                    <p className="font-display text-5xl leading-none tnum text-[var(--color-dust)]">
                      {String(idx + 1).padStart(2, '0')}
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.75rem] uppercase tracking-[0.14em] text-[var(--color-stone)]">{mover.snapshot}</p>
                    <h3 className="mt-2 font-display text-2xl text-[var(--color-ink)] sm:text-3xl">{mover.name}</h3>
                    <p className="mt-4 text-[0.9375rem] leading-relaxed text-[var(--color-graphite)]">{mover.summary}</p>

                    <ul className="mt-5 grid gap-2 text-sm text-[var(--color-graphite)]">
                      {mover.publicSignals.map((s) => (
                        <li key={s} className="flex items-start gap-2.5">
                          <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: 'var(--color-brand)' }} />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <aside className="rounded-2xl surface-bone p-5 lg:border-l lg:border-[var(--color-line)]">
                    <p className="text-[0.75rem] uppercase tracking-[0.14em] text-[var(--color-stone)]">Best fit</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-graphite)]">{mover.bestFor}</p>
                    <p className="mt-5 text-[0.75rem] uppercase tracking-[0.14em] text-[var(--color-stone)]">Verify before booking</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-graphite)]">{mover.watchFor}</p>
                  </aside>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist + flags */}
      <section className="section surface-paper">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="eyebrow">Compare fairly</p>
              <h2 className="display-lg mt-5 text-balance">
                Don't compare movers — compare <span className="serif-italic">quotes</span>.
              </h2>
              <ol className="mt-10 space-y-0 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
                {austinMoverSelectionChecklist.map((item, i) => (
                  <li key={item.title} className="grid gap-4 py-6 sm:grid-cols-[70px_1fr] sm:gap-8">
                    <span className="font-display text-2xl leading-none tnum text-[var(--color-dust)]">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="font-display text-xl leading-snug text-[var(--color-ink)]">{item.title}</h3>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--color-graphite)]">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <aside>
              <p className="eyebrow">Red flags</p>
              <h3 className="display-md mt-5 text-balance">If you see these, walk away.</h3>
              <ul className="mt-8 space-y-3">
                {austinMoverRedFlags.map((flag) => (
                  <li key={flag} className="rounded-xl border border-[var(--color-line)] bg-white p-4 text-sm leading-relaxed text-[var(--color-graphite)]">
                    {flag}
                  </li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl border border-[var(--color-ink)] bg-[var(--color-ink)] p-6 text-white">
                <p className="font-display text-xl text-[var(--color-cream)]">Run the list on us too.</p>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  Use the same checklist on our estimate. If anything is missing or vague, push back.
                </p>
                <div className="mt-5 flex flex-col items-start gap-2">
                  <Link to="/quote" className="btn btn-brand">Request our written quote</Link>
                  {publicContact.hasPhone ? (
                    <a href={publicContact.phoneHref} className="text-sm text-white/80 underline underline-offset-4 decoration-white/30 hover:decoration-[var(--color-brand-soft)]">
                      Or call {site.phone.display}
                    </a>
                  ) : null}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Sources + FAQ */}
      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Sources</p>
            <h2 className="display-md mt-5 text-balance">Methodology & references.</h2>
            <ul className="mt-8 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {austinTopMoverResearchSources.map((s) => (
                <li key={s.url} className="py-5">
                  <a className="inline-flex items-center gap-1.5 font-medium text-[var(--color-ink)] underline underline-offset-4 decoration-[var(--color-line-strong)] hover:decoration-[var(--color-brand)]" href={s.url} rel="noopener noreferrer" target="_blank">
                    {s.title}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <p className="mt-1 text-xs text-[var(--color-stone)]">{s.snapshot}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-graphite)]">{s.note}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Questions people ask</p>
            <h2 className="display-md mt-5 text-balance">FAQ about choosing Austin movers.</h2>
            <div className="mt-8 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {austinMoverFaqs.map((f) => (
                <div key={f.question} className="py-6">
                  <h3 className="font-display text-xl leading-snug text-[var(--color-ink)]">{f.question}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-graphite)]">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
