import { Quote } from '../components/Quote';
import { SEO } from '../components/SEO';
import { faqs, site } from '../data/site';

export function QuotePage() {
  return (
    <>
      <SEO
        canonical="/quote"
        description={`Request a guaranteed moving quote from ${site.name}. Clear planning for homes and businesses across Central Texas.`}
        title="Get Quote"
      />

      <section className="section-gap pt-8">
        <div className="wrap max-w-2xl space-y-4">
          <h1 className="heading-xl">Get a quote</h1>
          <p className="body-lg">
            Tell us about your move. We use your details to give you an accurate,
            guaranteed written quote.
          </p>
        </div>
      </section>

      <Quote />

      <section className="section-gap-sm">
        <div className="wrap space-y-6" style={{ maxWidth: 'var(--container-narrow)' }}>
          <h2 className="heading-lg">Common questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div className="card p-4" key={faq.question}>
                <h3 className="text-base font-semibold text-text">{faq.question}</h3>
                <p className="mt-2 text-sm text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
