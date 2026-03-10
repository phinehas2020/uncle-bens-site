import { ButtonLink } from '../components/Button';
import { PageBottomCta } from '../components/PageBottomCta';
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
import { site } from '../data/site';

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

      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <section className="section">
        <div className="site-container">
          <div className="max-w-4xl">
            <p className="text-sm text-slate-600">Austin mover guide</p>
            <h1 className="mt-4 text-4xl text-slate-900 sm:text-5xl">
              Top movers in Austin: a public shortlist and a better quote checklist.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              This page is built for people who are comparing Austin movers and want more than
              a generic “best of” list. We reviewed current public ranking snapshots, review
              marketplaces, and local credential signals, then turned that into a shortlist you
              can actually use when quotes start coming in.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600">
              The names below are not a promise that one mover is perfect for every job. They are
              the Austin operators that show up most often when shoppers compare reputation,
              service coverage, and consistency. Last updated: March 5, 2026.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink size="lg" to="/quote">
                Compare your move with us
              </ButtonLink>
              <ButtonLink href={`tel:${site.phone.digits}`} size="lg" variant="secondary">
                Call {site.phone.display}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-slate-900">How this Austin shortlist was built</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              We did not rely on one review site. The shortlist combines a large Austin ranking
              dataset, marketplace sentiment, pricing context, and credential checks. That gives
              you a stronger starting point before you ask any mover for a written scope review.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {austinMoverMethodology.map((item) => (
              <div className="card-soft p-6" key={item.label}>
                <p className="text-3xl font-semibold text-slate-900">{item.value}</p>
                <p className="mt-2 text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-slate-900">Austin movers worth shortlisting</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              These are the movers that surfaced most often in current Austin comparison research
              or local credential review. Use the notes below to decide who deserves a quote, not
              to skip the quote process altogether.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {austinTopMovers.map((mover) => (
              <article className="card-soft p-6" key={mover.name}>
                <p className="text-sm text-slate-600">{mover.snapshot}</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">{mover.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{mover.summary}</p>

                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">Best fit</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{mover.bestFor}</p>
                </div>

                <div className="mt-5">
                  <p className="text-sm font-semibold text-slate-900">Public signals</p>
                  <ul className="mt-3 grid gap-2 text-sm text-slate-600">
                    {mover.publicSignals.map((signal) => (
                      <li className="rounded-xl border border-slate-200 px-3 py-2" key={signal}>
                        {signal}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 border-t border-slate-200 pt-5">
                  <p className="text-sm font-semibold text-slate-900">What to verify before booking</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{mover.watchFor}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">
                How to compare Austin moving quotes without getting surprised later
              </h2>
              <div className="mt-6 grid gap-3">
                {austinMoverSelectionChecklist.map((item) => (
                  <div className="rounded-2xl border border-slate-200 bg-white p-5" key={item.title}>
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold text-slate-900">Red flags that should slow you down</h3>
                <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-slate-600">
                  {austinMoverRedFlags.map((flag) => (
                    <li className="rounded-xl border border-slate-200 px-4 py-3" key={flag}>
                      {flag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-medium text-slate-600">Where Quality Moving fits in</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  If you need local moving, packing, and storage coordinated through one team,
                  {` ${site.name} `}is often the better shortlist option than splitting those services
                  across multiple vendors. That matters when dates shift, storage overlaps a move-in,
                  or a fragile-item packing plan has to stay synced with the truck schedule.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <ButtonLink size="md" to="/quote">
                    Request our quote
                  </ButtonLink>
                  <ButtonLink href={`tel:${site.phone.digits}`} size="md" variant="secondary">
                    Call {site.phone.display}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">Source notes and methodology</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                This is not a pay-to-play ranking. It is a public shortlist assembled from
                currently accessible Austin mover datasets, marketplace pages, and credential checks.
                If a mover looks strong here, the next step is still a real walkthrough and a written
                scope review.
              </p>
              <div className="mt-6 space-y-3">
                {austinTopMoverResearchSources.map((source) => (
                  <div className="rounded-2xl border border-slate-200 p-4" key={source.url}>
                    <a
                      className="text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-slate-700"
                      href={source.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {source.title}
                    </a>
                    <p className="mt-2 text-sm text-slate-600">{source.note}</p>
                    <p className="mt-2 text-sm text-slate-500">{source.snapshot}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-slate-900">Frequently asked questions</h2>
              <div className="mt-6 space-y-3">
                {austinMoverFaqs.map((faq) => (
                  <details className="rounded-2xl border border-slate-200 p-5" key={faq.question}>
                    <summary className="cursor-pointer text-sm font-semibold text-slate-900">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageBottomCta
        heading="Want us on your Austin shortlist?"
        text="Send your move details and we will build a written quote you can compare against every other mover on this page."
        buttonText="Request our Austin estimate"
        buttonTo="/quote"
      />
    </>
  );
}
