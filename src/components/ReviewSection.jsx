import { site } from '../data/site';

export function ReviewSection({ heading = 'What customers say', reviews }) {
  return (
    <section className="section border-t border-slate-200 bg-white">
      <div className="site-container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="max-w-md">
          <p className="text-sm text-slate-600">Reviews</p>
          <h2 className="mt-4 text-balance text-4xl text-slate-900 sm:text-5xl">{heading}</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            People remember whether the crew showed up steady, protected the house, and made the
            day easier. That is the part we care about.
          </p>
          <a
            className="mt-6 inline-flex items-center text-sm font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-accent"
            href={site.socials.googleReviews}
            rel="noopener noreferrer"
            target="_blank"
          >
            Read Google reviews
          </a>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[1.75rem] bg-slate-200">
          {reviews.map((review, index) => (
            <article
              className={index === 0 ? 'bg-[#faf8f5] p-6 sm:p-8' : 'bg-white p-6 sm:p-8'}
              key={review.name}
            >
              <blockquote className="text-lg leading-relaxed text-slate-900">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-slate-200 pt-4">
                <p className="text-sm font-medium text-slate-900">{review.name}</p>
                <p className="mt-1 text-sm text-slate-600">{review.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
