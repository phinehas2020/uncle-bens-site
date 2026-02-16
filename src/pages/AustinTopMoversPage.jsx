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
    text: 'List stair access, parking limits, piano or fragile items, and your timing. Movers who ask this upfront are usually better prepared.',
  },
  {
    title: 'Compare 2 to 3 shortlisted movers',
    text: 'Use the same scope notes for every quote and require a line-item breakdown before signing.',
  },
  {
    title: 'Verify license and insurance',
    text: 'At least one active Texas license and clear insurance responsibility on all belongings is non-negotiable.',
  },
];

export function AustinTopMoversPage() {
  return (
    <>
      <SEO
        canonical="/austin-top-movers"
        description="Top movers in Austin ranked from public snapshots with practical guidance for local move hiring."
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

      <section className="section-space">
        <div className="layout-shell space-y-5">
          <p className="kicker">Austin movers, research-backed</p>
          <h1 className="section-title">
            Top movers in Austin:
            <br />
            practical rankings and booking checks.
          </h1>
          <p className="section-copy">
            Use this list as your shortlist. We combine ranking snapshots with questions that
            matter before you commit.
          </p>
          <p className="text-sm text-fog">Last updated: {updatedAt}</p>
        </div>
      </section>

      <section className="section-space-sm">
        <div className="layout-shell">
          <div className="rank-grid">
            {austinTopMovers.map((mover) => (
              <article className="rank-card" key={mover.name}>
                <p className="label-copy">Rank #{mover.rank}</p>
                <h2 className="text-3xl text-pearl font-family-display">{mover.name}</h2>
                <p className="text-sm uppercase tracking-[0.13em] text-fog">
                  Score {mover.score}/10 • BBB {mover.bbb}
                </p>
                <p className="text-sm text-cloud">{mover.note}</p>
                <p className="text-xs text-fog">Avg move window: {mover.avgMoveDuration}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-sm">
        <div className="layout-shell">
          <div className="service-detail-card">
            <div className="service-detail-copy p-6">
              <p className="kicker">How rankings work</p>
              <h2 className="text-3xl text-pearl font-family-display">
                Score methodology is a filter, not the final answer.
              </h2>
              <p className="section-copy">
                Rankings are a useful first pass, especially for review depth and communication quality.
              </p>
              <ul className="mt-4 space-y-2">
                {austinTopMoverResearchSources.map((source) => (
                  <li
                    className="rounded-2xl border border-cobalt-soft/35 bg-night/66 px-3 py-2 text-xs uppercase tracking-[0.12em] text-cloud"
                    key={source.url}
                  >
                    {source.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-detail-media">
              <div className="p-6">
                <p className="kicker">Source list</p>
                <ol className="space-y-3 text-sm">
                  {austinTopMoverResearchSources.map((source) => (
                    <li key={source.url}>
                      <a
                        className="text-cloud hover:text-white underline-offset-4 hover:underline"
                        href={source.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {source.title}
                      </a>
                      <p className="text-fog mt-1">{source.snapshot}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space-sm">
        <div className="layout-shell">
          <div className="service-detail-card">
            <div className="service-detail-copy p-6">
              <p className="kicker">Selection checklist</p>
              <h2 className="text-3xl text-pearl font-family-display">What to check before signing.</h2>
              <div className="steps-grid">
                {austinMoverSelectionChecklist.map((item) => (
                  <div key={item.title}>
                  <p className="label-copy">{item.title}</p>
                    <p className="text-sm text-cloud mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="service-detail-media p-6">
              <p className="kicker">Quick playbook</p>
              {quickGuide.map((step) => (
                <div key={step.title} className="mt-4">
                    <p className="text-sm font-semibold text-pearl">{step.title}</p>
                  <p className="text-sm text-cloud mt-1">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space-sm">
        <div className="layout-shell">
          <p className="kicker">Top FAQs</p>
          <div className="faq-grid">
            {austinMoverFaqs.map((faq) => (
              <article className="surface-card p-5" key={faq.question}>
                <h3 className="text-base font-semibold text-pearl">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cloud/86">{faq.answer}</p>
              </article>
            ))}
          </div>

          <div className="hero-cta-row mt-5">
            <ButtonLink size="lg" to="/quote" variant="primary">
              Get your Austin quote
            </ButtonLink>
            <ButtonLink href={`tel:${site.phone.digits}`} size="lg" variant="secondary">
              Call {site.phone.display}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
