import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { faqs, movingTips } from '../data/site';

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
      'Yes. If you want one timeline and one estimate, say that early so we can scope the job as one plan instead of separate bookings.',
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
        title="FAQ"
        description="Answers from our moving team plus practical tips from an Austin-area moving perspective. Coverage includes Austin, Round Rock, Cedar Park, Pflugerville, and Lakeway for packing, local moving, and storage solutions."
        keywords="moving FAQ, packing services, storage solutions, local moving"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqPageSchema)}</script>
      </Helmet>

      <section className="section">
        <div className="site-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="max-w-md">
            <h1 className="text-balance text-4xl text-slate-900 sm:text-5xl">
              Common questions about timing, quotes, packing, and storage.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-700">
              This page is here so you can see the practical questions we get most often before you
              start comparing estimates.
            </p>
            <div className="mt-8 border-t border-slate-200 pt-5">
              <p className="text-sm font-semibold text-slate-900">Need the estimate path instead?</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                If you already know the route, start with the quote form so the office has your
                addresses, timing, and access notes in writing.
              </p>
              <Link
                className="mt-4 inline-flex text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-accent"
                to="/quote"
              >
                Open the quote form
              </Link>
            </div>
          </div>

          <div className="border-t border-slate-200">
            {allFaqItems.map((faq) => (
              <div className="border-b border-slate-200 py-5" key={faq.question}>
                <h2 className="text-xl text-slate-900">{faq.question}</h2>
                <p className="mt-3 text-base leading-relaxed text-slate-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-balance text-4xl text-slate-900">
              A few things worth checking before you book any mover.
            </h2>
            <div className="mt-8 border-t border-slate-300">
              {movingTips.map((tip) => (
                <div className="grid gap-3 border-b border-slate-300 py-5 lg:grid-cols-[220px_1fr]" key={tip.title}>
                  <h3 className="text-lg text-slate-900">{tip.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-700">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl text-slate-900">Need more detail before you call?</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              The service pages break down local moves, commercial relocation, packing, storage,
              and long-distance planning in more detail.
            </p>
            <div className="mt-6 border-t border-slate-300">
              {[
                {
                  title: 'Services overview',
                  detail: 'See how local moving, packing, storage, and longer routes are usually planned together.',
                  to: '/services',
                },
                {
                  title: 'Contact page',
                  detail: 'Use the lower-friction contact form when you have questions before you are ready for a full quote.',
                  to: '/contact',
                },
                {
                  title: 'Quote page',
                  detail: 'Use the estimate form when you already know the route, date window, and the services tied to the move.',
                  to: '/quote',
                },
              ].map((item) => (
                <div className="border-b border-slate-300 py-4" key={item.title}>
                  <Link
                    className="text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-accent"
                    to={item.to}
                  >
                    {item.title}
                  </Link>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
