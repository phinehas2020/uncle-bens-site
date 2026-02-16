import { site } from '../data/site';

export function ReviewSection({ heading = 'What customers say', reviews }) {
  return (
    <section className="section-surface">
      <div className="site-container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="subtle-badge">{site.reviewSummary || 'Trusted reviews'}</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">{heading}</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            We earn repeat work through reliability, care, and transparent communication.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article className="card-soft p-5" key={review.name}>
              <blockquote className="text-sm leading-relaxed text-slate-700">
                “{review.quote}”
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-slate-900">{review.name}</p>
              <p className="text-xs text-slate-500">{review.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
