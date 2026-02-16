import { SEO } from '../components/SEO';
import { PageBottomCta } from '../components/PageBottomCta';
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
        title="FAQ | Austin TX Movers | Packing, Moving, and Storage Questions"
        description={`Answers from our moving team plus practical tips from an Austin TX movers perspective. Coverage includes Austin, Round Rock, Cedar Park, Pflugerville, and Lakeway for packing, local moving, and storage solutions.`}
        keywords="Austin TX Movers, moving FAQ, packing services, storage solutions, local moving"
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
            <details className="rounded-2xl border border-slate-200 p-4 group">
              <summary className="cursor-pointer text-sm font-semibold text-slate-900">
                Do you serve neighborhoods outside downtown Austin?
              </summary>
              <p className="mt-2 text-sm text-slate-600">
                Yes. Our team covers Austin metro neighborhoods and nearby communities including Round Rock,
                Cedar Park, Pflugerville, Lakeway, Leander, and Georgetown.
              </p>
            </details>
            <details className="rounded-2xl border border-slate-200 p-4 group">
              <summary className="cursor-pointer text-sm font-semibold text-slate-900">
                How do I combine packing and local moving in one estimate?
              </summary>
              <p className="mt-2 text-sm text-slate-600">
                Start with your full inventory and home constraints. Then ask for one bundled scope review so your team has one quote and one timeline for both services.
              </p>
            </details>
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

      <PageBottomCta
        heading="Need a custom moving plan before you choose?"
        text="Request your custom quote and get one coordinator helping you through packing, moving, and storage decisions."
      />
    </>
  );
}
