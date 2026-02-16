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

      <section className="section-space pt-8">
        <div className="layout-shell max-w-4xl space-y-5">
          <p className="kicker">Guaranteed quote</p>
          <h1 className="section-title">Tell us what move you are preparing.</h1>
          <p className="section-copy">
            We use your details to estimate faster, avoid surprises, and map your move day timing.
          </p>
        </div>
      </section>

      <Quote />

      <section className="section-space-sm">
        <div className="layout-shell space-y-6">
          <h2 className="section-title">Frequently asked questions</h2>

          <div className="faq-grid">
            {faqs.map((faq) => (
              <article className="surface-card p-5" key={faq.question}>
                <h3 className="text-base font-semibold text-pearl">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cloud/86">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
