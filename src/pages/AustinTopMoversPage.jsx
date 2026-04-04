import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: austinMoverFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export function AustinTopMoversPage() {
  return (
    <>
      <SEO
        canonical="/austin-top-movers"
        description="A detailed Austin movers shortlist with public review signals, quote questions, and a practical checklist for comparing moving companies in 2026."
        title="Top Movers in Austin (2026)"
        keywords="top movers in Austin, best Austin movers, Austin moving companies, Austin moving quotes"
        article={{
          publishedTime: `${austinTopMoversUpdatedAt}T00:00:00-06:00`,
          modifiedTime: `${austinTopMoversUpdatedAt}T00:00:00-06:00`,
        }}
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="section">
        <div className="site-container grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="max-w-md">
            <h1 className="text-balance text-4xl text-slate-900 sm:text-5xl">
              Top movers in Austin: a public shortlist and a better quote checklist.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-700">
              This page is for people comparing Austin movers who want something more useful than a
              generic best-of list. We reviewed public ranking pages, review marketplaces, and
              credential sources, then turned that into a shortlist you can actually use.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Last updated: March 5, 2026. The names below are a starting point for quotes, not a
              substitute for a walkthrough and written scope.
            </p>
          </div>

          <div className="border-t border-slate-200">
            {austinMoverMethodology.map((item) => (
              <div className="grid gap-3 border-b border-slate-200 py-5 sm:grid-cols-[160px_1fr]" key={item.label}>
                <div>
                  <p className="text-3xl text-slate-900">{item.value}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{item.label}</p>
                </div>
                <p className="text-sm leading-relaxed text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 className="text-balance text-4xl text-slate-900">Austin movers worth comparing.</h2>
          </div>

          <div className="mt-8 border-t border-slate-300">
            {austinTopMovers.map((mover, index) => (
              <article className="grid gap-6 border-b border-slate-300 py-8 lg:grid-cols-[72px_1fr_0.7fr]" key={mover.name}>
                <div className="text-2xl text-slate-900">{String(index + 1).padStart(2, '0')}</div>

                <div>
                  <p className="text-sm text-slate-600">{mover.snapshot}</p>
                  <h3 className="mt-2 text-2xl text-slate-900">{mover.name}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-700">{mover.summary}</p>

                  <div className="mt-5 grid gap-3">
                    {mover.publicSignals.map((signal) => (
                      <div className="text-sm leading-relaxed text-slate-700" key={signal}>
                        {signal}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-300 pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                  <p className="text-sm font-semibold text-slate-900">Best fit</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{mover.bestFor}</p>
                  <p className="mt-5 text-sm font-semibold text-slate-900">Verify before booking</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{mover.watchFor}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-slate-200 bg-white">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-balance text-4xl text-slate-900">
              How to compare Austin moving quotes without wasting a week.
            </h2>
            <div className="mt-8 border-t border-slate-200">
              {austinMoverSelectionChecklist.map((item) => (
                <div className="grid gap-3 border-b border-slate-200 py-5 lg:grid-cols-[220px_1fr]" key={item.title}>
                  <h3 className="text-lg text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-700">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Red flags</p>
            <div className="mt-6 border-t border-slate-200">
              {austinMoverRedFlags.map((flag) => (
                <div className="border-b border-slate-200 py-4 text-sm leading-relaxed text-slate-700" key={flag}>
                  {flag}
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-slate-200 pt-5">
              <p className="text-sm font-semibold text-slate-900">How to use this page with our team</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                If you are also considering our Austin-area moving team, use the same checklist on
                us that you use for every other mover on this page. That keeps the comparison
                grounded in scope, route, and written estimate quality instead of marketing copy.
              </p>
              <div className="mt-4 flex flex-col items-start gap-3">
                <Link
                  className="text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-accent"
                  to="/quote"
                >
                  Request our written quote
                </Link>
                {publicContact.hasPhone ? (
                  <a
                    className="text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-accent"
                    href={publicContact.phoneHref}
                  >
                    Call {site.phone.display}
                  </a>
                ) : (
                  <Link
                    className="text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-accent"
                    to="/contact"
                  >
                    Talk through your move
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="site-container grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <h2 className="text-balance text-4xl text-slate-900">Source notes and methodology.</h2>
            <div className="mt-8 border-t border-slate-300">
              {austinTopMoverResearchSources.map((source) => (
                <div className="border-b border-slate-300 py-5" key={source.url}>
                  <a
                    className="text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-accent"
                    href={source.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {source.title}
                  </a>
                  <p className="mt-2 text-sm text-slate-600">{source.snapshot}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{source.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-balance text-3xl text-slate-900">Questions people ask</h2>
            <div className="mt-8 border-t border-slate-300">
              {austinMoverFaqs.map((faq) => (
                <div className="border-b border-slate-300 py-5" key={faq.question}>
                  <h3 className="text-xl text-slate-900">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
