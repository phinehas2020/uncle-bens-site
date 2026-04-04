import { site, trustSignals } from '../data/site';

export function ReviewSection({ heading = 'What helps the first conversation go well' }) {
  return (
    <section className="section border-t border-slate-200 bg-white">
      <div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="max-w-md">
          <p className="text-sm font-semibold text-slate-900">Trust-first details</p>
          <h2 className="mt-5 text-balance text-4xl text-slate-900 sm:text-5xl">{heading}</h2>
          <p className="mt-5 text-base leading-relaxed text-slate-700">
            The trust story here is practical: clear contact paths, written estimates, and enough
            route detail to understand whether the job is a fit before move day.
          </p>

          <div className="mt-6 border-t border-slate-200 pt-5 text-sm leading-relaxed text-slate-600">
            <p>{site.hours.summary}</p>
            <p className="mt-2">
              {site.officeLabel} serving Austin, Cedar Park, Georgetown, Leander, Pflugerville,
              and nearby Central Texas communities.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200">
          {trustSignals.map((signal) => (
            <article
              className="grid gap-4 border-b border-slate-200 py-6 sm:grid-cols-[1fr_180px]"
              key={signal.label}
            >
              <div>
                <h3 className="text-xl text-slate-900">{signal.label}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-700">{signal.detail}</p>
              </div>
              <div className="text-sm text-slate-600 sm:text-right">
                <p className="font-semibold text-slate-900">Why it matters</p>
                <p className="mt-1">It keeps the quote and call decision grounded in real move details.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
