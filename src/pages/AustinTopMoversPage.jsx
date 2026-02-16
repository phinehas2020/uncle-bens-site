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
    text: 'List stair access, parking limits, piano or fragile items, and your timing.',
  },
  {
    title: 'Compare 2 to 3 shortlisted movers',
    text: 'Use the same scope notes for every quote and require a line-item breakdown.',
  },
  {
    title: 'Verify license and insurance',
    text: 'At least one active Texas license and clear insurance responsibility is non-negotiable.',
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

      <section className="section-gap">
        <div className="wrap max-w-2xl space-y-4">
          <h1 className="heading-xl">Top movers in Austin</h1>
          <p className="body-lg">
            Rankings from public data to help you shortlist. Use this alongside
            your own research before committing.
          </p>
          <p className="text-sm text-text-muted">Last updated: {updatedAt}</p>
        </div>
      </section>

      <section className="section-gap-sm">
        <div className="wrap">
          <div className="grid-2">
            {austinTopMovers.map((mover) => (
              <div className="card p-4" key={mover.name}>
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="text-base font-semibold text-text">
                    #{mover.rank} {mover.name}
                  </h2>
                  <span className="text-sm tabular-nums text-text-muted">{mover.score}/10</span>
                </div>
                <p className="mt-1 text-sm text-text-secondary">{mover.note}</p>
                <div className="mt-2 flex gap-4 text-xs text-text-muted">
                  <span>BBB: {mover.bbb}</span>
                  <span>Avg duration: {mover.avgMoveDuration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap-sm" style={{ background: 'var(--color-bg-warm)' }}>
        <div className="wrap">
          <div className="split">
            <div className="space-y-4">
              <h2 className="heading-lg">How to pick a mover</h2>
              <div className="space-y-3">
                {austinMoverSelectionChecklist.map((item) => (
                  <div key={item.title}>
                    <p className="text-sm font-semibold text-text">{item.title}</p>
                    <p className="mt-1 text-sm text-text-secondary">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="heading-md">Quick playbook</h3>
              <div className="space-y-3">
                {quickGuide.map((step) => (
                  <div className="card p-4" key={step.title}>
                    <p className="text-sm font-semibold text-text">{step.title}</p>
                    <p className="mt-1 text-sm text-text-secondary">{step.text}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-2">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wide">Sources</p>
                {austinTopMoverResearchSources.map((source) => (
                  <p key={source.url} className="text-sm">
                    <a
                      className="text-teal hover:underline"
                      href={source.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {source.title}
                    </a>
                    <span className="text-text-muted"> &mdash; {source.snapshot}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap-sm">
        <div className="wrap space-y-6" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 className="heading-lg">FAQs</h2>
          <div className="space-y-3">
            {austinMoverFaqs.map((faq) => (
              <div className="card p-4" key={faq.question}>
                <h3 className="text-base font-semibold text-text">{faq.question}</h3>
                <p className="mt-2 text-sm text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
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
