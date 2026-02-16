import { SEO } from '../components/SEO';
import {
  austinMoverResearchSources,
  faqs,
  movingTips,
  site,
} from '../data/site';

export function FAQPage() {
  return (
    <>
      <SEO
        canonical="/faq"
        title="FAQ | Austin Moving Questions"
        description={`Answers from our moving team plus search-backed tips on selecting packing services, moving companies, and storage solutions for Austin and Central Texas.`}
        keywords="Austin movers, moving company, packing services, storage solutions, moving FAQ"
      />

      <section className="section">
        <div className="site-container">
          <p className="subtle-badge">Moving help</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">Frequently asked questions</h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-600 sm:text-base">
            Questions from families and teams across Austin, plus practical guidance from our move planning
            process and market research review points.
          </p>

          <div className="mt-8 grid gap-3">
            {faqs.map((faq) => (
              <details className="rounded-2xl border border-slate-200 p-4 group" key={faq.question}>
                <summary className="cursor-pointer text-sm font-semibold text-slate-900">
                  {faq.question}
                </summary>
                <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="site-container">
          <h2 className="text-3xl font-semibold text-slate-900">Expanded tips for your move</h2>
          <p className="mt-2 text-sm text-slate-600">
            We build these from the same practical insights we use when helping clients hire the right team.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {movingTips.map((tip) => (
              <div className="rounded-2xl border border-slate-200 p-4" key={tip.title}>
                <p className="font-semibold text-slate-900">{tip.title}</p>
                <p className="mt-2 text-sm text-slate-600">{tip.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-slate-900">Search-backed references</h3>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <p>
                Reference checks are from public mover datasets and review marketplaces. Use them as
                directional signals alongside move-day scope details.
              </p>
              {austinMoverResearchSources.map((source) => (
                <div key={source.url}>
                  <a
                    className="text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-slate-700"
                    href={source.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {source.title}
                  </a>
                  <span className="ml-2 text-xs text-slate-500">
                    {source.snapshot} — {source.note}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-sm text-slate-600">
              <span className="font-semibold text-slate-900">{site.name}</span> is a licensed and insured
              moving company that relies on direct estimates and scope reviews as the final decision point.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
