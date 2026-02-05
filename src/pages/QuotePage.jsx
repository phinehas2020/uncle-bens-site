import { Quote } from '../components/Quote';
import { SEO } from '../components/SEO';
import { faqs, site } from '../data/site';

export function QuotePage() {
  return (
    <>
      <SEO
        canonical="/quote"
        description={`Request a guaranteed moving quote from ${site.name}. Premium relocation planning for homes and businesses across Central Texas.`}
        title="Get Quote"
      />

      <section className="section-space pt-20 pb-2">
        <div className="layout-container max-w-4xl space-y-5">
          <p className="eyebrow">Guaranteed Quote</p>
          <h1 className="section-title">
            Tell us what you are moving.
          </h1>
          <p className="section-copy">
            Share the basics and we will send back a clear quote,
            next-step plan, and recommended service options.
          </p>
        </div>
      </section>

      <Quote />

      <section className="section-space-sm pt-1">
        <div className="layout-container max-w-5xl space-y-4">
          <h2 className="font-family-display text-4xl text-white sm:text-5xl">
            Frequently asked questions
          </h2>

          <div className="grid gap-3 md:grid-cols-2">
            {faqs.map((faq) => (
              <article className="surface-card p-5" key={faq.question}>
                <h3 className="text-base font-semibold text-white">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cloud/86">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
