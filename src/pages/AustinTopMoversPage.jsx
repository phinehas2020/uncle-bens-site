import { ButtonLink } from '../components/Button';
import { SEO } from '../components/SEO';
import {
  austinMoverFaqs,
  austinMoverSelectionChecklist,
  austinTopMoverResearchSources,
  austinTopMovers,
  site,
} from '../data/site';

const updatedAt = '2026-02-16';

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Austin Movers Ranking Snapshot',
  dateModified: `${updatedAt}T00:00:00-06:00`,
  description: 'Top movers in Austin based on public ranking snapshots and customer review data.',
  itemListElement: austinTopMovers.map((mover, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: mover.name,
    item: {
      '@type': 'LocalBusiness',
      name: mover.name,
    },
  })),
};

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

const quickGuide = [
  {
    title: 'Start with your move scope',
    text: 'List stair access, parking limits, piano/piano-grade items, and your timing. Movers who ask these up front are usually better prepared.',
  },
  {
    title: 'Compare 2–3 shortlisted movers',
    text: 'Use the same room-by-room scope on every quote and require a fixed line-item breakdown before signing.',
  },
  {
    title: 'Confirm licenses and insurance',
    text: 'At least one licensed source on file for Texas operations and explicit responsibility for all belongings before final confirmation is non-negotiable.',
  },
  {
    title: 'Protect yourself on move day',
    text: 'Ask who is on the lead team, confirm arrival window, and require photo confirmation when loading and unload complete.',
  },
];

export function AustinTopMoversPage() {
  return (
    <>
      <SEO
        canonical="/austin-top-movers"
        description={`Top movers in Austin ranked in a single guide with a practical checklist and local booking tips for homes and offices.`}
        title="Top Movers in Austin (2026)"
        article={{
          publishedTime: `${updatedAt}T00:00:00-06:00`,
          modifiedTime: `${updatedAt}T00:00:00-06:00`,
        }}
      />

      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        type="application/ld+json"
      />

      <section className="section-space pt-20">
        <div className="layout-container grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div className="space-y-5">
            <p className="eyebrow">Austin Search Intent: Top Movers</p>
            <h1 className="section-title max-w-4xl">
              Top movers in Austin
              <span className="gold-gradient"> we analyzed for trust and performance.</span>
            </h1>
            <p className="section-copy max-w-3xl">
              If you are searching for an Austin mover this year, this is the practical place to begin:
              combine ranked performance snapshots with service fit checks and transparent pricing questions.
            </p>
            <p className="text-sm text-cloud/86">
              Last updated: {updatedAt}
            </p>
          </div>

          <div className="glass-panel space-y-4 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
              Research inputs
            </p>
            <div className="space-y-3 text-sm">
              {austinTopMoverResearchSources.map((source) => (
                <p className="rounded-2xl border border-cobalt/24 bg-night/70 p-3 text-cloud/88" key={source.url}>
                  <a
                    className="font-semibold text-gold-soft hover:text-white"
                    href={source.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {source.title}
                  </a>
                  <span className="ml-2 text-fog/78">• {source.snapshot}</span>
                  <br />
                  {source.note}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space-sm pt-0">
        <div className="layout-container space-y-5">
          <p className="eyebrow">Top Ranked Movers in Austin</p>
          <h2 className="section-title max-w-3xl">
            Snapshot ranking
            <span className="gold-gradient"> from current public data.</span>
          </h2>

          <div className="grid gap-4">
            {austinTopMovers.map((mover) => (
              <article className="surface-card p-5" key={mover.name}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <p className="font-family-display text-3xl text-white">#{mover.rank}</p>
                  <div className="rounded-full border border-cobalt/35 px-3 py-1 text-xs uppercase tracking-[0.12em] text-fog/85">
                    {mover.avgMoveDuration} avg move time
                  </div>
                </div>
                <h3 className="mt-3 font-family-display text-3xl text-white sm:text-4xl">
                  {mover.name}
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.13em] text-fog/84">
                  Score: {mover.score}/10 • BBB: {mover.bbb}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cloud/90">
                  {mover.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-sm">
        <div className="layout-container grid gap-6 lg:grid-cols-2">
          <div className="surface-card p-7">
            <p className="eyebrow">How the rank works</p>
            <h2 className="font-family-display text-4xl text-white">We score what moving teams actually do.</h2>
            <p className="mt-4 text-sm leading-relaxed text-cloud/86">
              Great Guys’ methodology is useful as a baseline because it focuses on review depth, consistency, punctuality,
              pricing clarity, professionalism, and care handling rather than ad-led visibility.
            </p>
            <ul className="mt-6 space-y-2">
              {austinTopMoverResearchSources.map((source) => (
                <li className="rounded-2xl border border-cobalt/24 bg-night/66 px-3 py-2 text-xs uppercase tracking-[0.12em] text-cloud/84" key={source.url}>
                  {source.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card p-7">
            <p className="eyebrow">Selection checklist</p>
            <h2 className="font-family-display text-4xl text-white">How to choose for your move.</h2>
            <p className="mt-4 text-sm leading-relaxed text-cloud/86">
              Ranking helps you shortlist faster. Then apply this checklist before you sign anything.
            </p>
            <ol className="mt-6 space-y-4">
              {austinMoverSelectionChecklist.map((item) => (
                <li className="space-y-2" key={item.title}>
                  <p className="text-sm font-semibold uppercase tracking-[0.11em] text-white">
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed text-cloud/86">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-space-sm">
        <div className="layout-container space-y-6">
          <p className="eyebrow">Move planning in 4 steps</p>
          <h2 className="section-title">A practical planning workflow for families and offices.</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {quickGuide.map((step) => (
              <article className="surface-card p-6" key={step.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-soft">
                  Step
                </p>
                <h3 className="mt-2 font-family-display text-2xl text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cloud/86">{step.text}</p>
              </article>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink size="lg" to="/quote" variant="primary">
              Get Your Quote in 1 Day
            </ButtonLink>
            <ButtonLink href={`tel:${site.phone.digits}`} size="lg" variant="secondary">
              Call {site.phone.display}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-space-sm">
        <div className="layout-container space-y-5">
          <p className="eyebrow">Frequently asked questions</p>
          <h2 className="section-title">FAQs for searching Austin movers</h2>
          <div className="space-y-3">
            {austinMoverFaqs.map((faq) => (
              <article className="surface-card p-5" key={faq.question}>
                <h3 className="text-base font-semibold text-white">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cloud/86">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
