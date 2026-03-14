import { Helmet } from 'react-helmet-async';
import { AustinTopMoversTeaser } from '../components/AustinTopMoversTeaser';
import { PageBottomCta } from '../components/PageBottomCta';
import { SEO } from '../components/SEO';
import {
  austinMoverResearchSources,
  faqs,
  movingTips,
  site,
} from '../data/site';

const allFaqItems = [
  ...faqs,
  {
    question: 'Do you serve neighborhoods outside downtown Austin?',
    answer:
      'Yes. Our team covers Austin metro neighborhoods and nearby communities including Round Rock, Cedar Park, Pflugerville, Lakeway, Leander, and Georgetown.',
  },
  {
    question: 'Can packing and moving be quoted together?',
    answer:
      'Yes. If you want one timeline and one estimate, tell us early that packing should be included so we can scope it with the move instead of pricing it separately later.',
  },
];

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqItems.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export function FAQPage() {
  return (
    <>
      <SEO
        canonical="/faq"
        title="FAQ | Austin TX Movers | Packing, Moving, and Storage Questions"
        description="Answers from our moving team plus practical tips from an Austin TX movers perspective. Coverage includes Austin, Round Rock, Cedar Park, Pflugerville, and Lakeway for packing, local moving, and storage solutions."
        keywords="Austin TX Movers, moving FAQ, packing services, storage solutions, local moving"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqPageSchema)}</script>
      </Helmet>

      <section className="section">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="text-sm text-slate-600">FAQ</p>
            <h1 className="mt-4 text-balance text-4xl text-slate-900 sm:text-5xl">
              Questions we hear most often.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              These are the common questions about timing, quotes, packing, storage, and service
              areas.
            </p>
          </div>

          <div className="mt-8 grid gap-3">
            {faqs.map((faq) => (
              <details className="rounded-[1.5rem] border border-slate-200 bg-white p-5" key={faq.question}>
                <summary className="cursor-pointer text-sm font-medium text-slate-900">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </details>
            ))}
            <details className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer text-sm font-medium text-slate-900">
                Do you serve neighborhoods outside downtown Austin?
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Yes. Our team covers Austin metro neighborhoods and nearby communities including
                Round Rock, Cedar Park, Pflugerville, Lakeway, Leander, and Georgetown.
              </p>
            </details>
            <details className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer text-sm font-medium text-slate-900">
                Can packing and moving be quoted together?
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Yes. If you want one timeline and one estimate, tell us early that packing should be
                included so we can scope it with the move instead of pricing it separately later.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="site-container">
          <h2 className="text-3xl text-slate-900">Planning notes before move day</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
            A little prep goes a long way when you are comparing movers or trying to avoid surprises
            in the estimate.
          </p>

          <div className="mt-6 grid gap-px overflow-hidden rounded-[1.5rem] bg-slate-200 md:grid-cols-2">
            {movingTips.map((tip) => (
              <div className="bg-white p-5" key={tip.title}>
                <p className="text-base font-medium text-slate-900">{tip.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{tip.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-5">
            <h3 className="text-xl text-slate-900">Outside resources</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              If you want to compare more than one mover, these public sources are useful background
              reading. The final decision should still come from a walkthrough and a written scope.
            </p>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              {austinMoverResearchSources.map((source) => (
                <div key={source.url}>
                  <a
                    className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-accent"
                    href={source.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {source.title}
                  </a>
                  <p className="mt-1">
                    {source.snapshot}. {source.note}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-slate-600">
              <span className="font-medium text-slate-900">{site.name}</span> is licensed and insured,
              but we still recommend comparing details line by line before you book any mover.
            </div>
          </div>
        </div>
      </section>

      <AustinTopMoversTeaser />

      <PageBottomCta
        heading="Still unsure what to ask for in the estimate?"
        text="Send us the basic details and we can tell you what information matters before you commit."
      />
    </>
  );
}
