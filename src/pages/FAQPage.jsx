import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import { SEO } from '../components/SEO';
import { faqs, movingTips } from '../data/site';

const extraFaqs = [
  {
    question: 'Do you serve neighborhoods outside downtown Austin?',
    answer:
      'Yes. Our crews cover Austin metro neighborhoods and nearby communities including Round Rock, Cedar Park, Pflugerville, Lakeway, Leander, Georgetown, Buda, Kyle, and Marble Falls.',
  },
  {
    question: 'Can packing and moving be quoted together?',
    answer:
      'Yes. If you want one timeline and one estimate, say that early so we can scope the job as one plan instead of separate bookings.',
  },
  {
    question: 'How long does a typical Austin local move take?',
    answer:
      'A 1-bedroom apartment usually runs 3–5 hours with a two-person crew. A 3-bedroom home with packing and stairs can run 7–9 hours. Access and parking conditions change that — which is why we walk through first.',
  },
  {
    question: 'Do you offer binding estimates?',
    answer:
      'For most local moves we quote a not-to-exceed range tied to your inventory. If the scope doesn\'t change, neither does the price. For long-distance moves we provide a formal binding estimate after the walkthrough.',
  },
];

function FaqItem({ question, answer, open, onToggle, id }) {
  return (
    <li className="border-b border-[var(--color-line)]">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`${id}-body`}
        id={`${id}-btn`}
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-xl leading-snug text-[var(--color-ink)] sm:text-2xl">{question}</span>
        <span
          aria-hidden="true"
          className="mt-1.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-line-strong)] text-[var(--color-ink)] transition-colors"
          style={open ? { background: 'var(--color-ink)', color: 'var(--color-cream)', borderColor: 'var(--color-ink)' } : undefined}
        >
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && (
        <div id={`${id}-body`} role="region" aria-labelledby={`${id}-btn`} className="pb-7 pr-12">
          <p className="text-[0.9375rem] leading-relaxed text-[var(--color-graphite)]">{answer}</p>
        </div>
      )}
    </li>
  );
}

export function FAQPage() {
  const allFaqs = [...faqs, ...extraFaqs];
  const [openIdx, setOpenIdx] = useState(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <SEO
        canonical="/faq"
        title="Moving FAQ — Austin & Round Rock Moving Company"
        description="Answers to the most common questions about Austin moving: pricing, timing, packing, storage, credentials, and how we quote your move."
        keywords="Austin moving FAQ, Austin movers questions, moving company FAQ, how much do movers cost Austin"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="section-tight pt-16 md:pt-24">
        <div className="wrap">
          <p className="eyebrow">FAQ</p>
          <h1 className="display-xl mt-5 max-w-4xl text-balance">
            The questions we <span className="serif-italic" style={{ color: 'var(--color-brand)' }}>actually</span> get every week.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-graphite)]">
            No filler. If you have a question that isn't answered here, call the office or ping us on the contact form — we'll add the answer.
          </p>
        </div>
      </section>

      <section className="section pt-12">
        <div className="wrap">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[0.75rem] uppercase tracking-[0.14em] text-[var(--color-stone)]">Quick links</p>
              <ul className="mt-4 grid gap-2 text-sm">
                <li><Link to="/quote" className="u-link">Request a written estimate</Link></li>
                <li><Link to="/pricing" className="u-link">Typical Austin moving costs</Link></li>
                <li><Link to="/service-areas" className="u-link">Service area coverage</Link></li>
                <li><Link to="/austin-top-movers" className="u-link">Comparing Austin movers</Link></li>
                <li><Link to="/contact" className="u-link">Talk to the office</Link></li>
              </ul>
            </aside>

            <ul className="border-t border-[var(--color-line)]">
              {allFaqs.map((f, i) => (
                <FaqItem
                  key={f.question}
                  id={`faq-${i}`}
                  question={f.question}
                  answer={f.answer}
                  open={openIdx === i}
                  onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Moving tips */}
      <section className="section surface-paper">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div className="max-w-md">
              <p className="eyebrow">Before you book</p>
              <h2 className="display-lg mt-5 text-balance">
                A short checklist for <span className="serif-italic">any</span> mover.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--color-graphite)]">
                Use this list on every mover you call — including us. It is the
                single best way to compare quotes fairly.
              </p>
            </div>
            <ol className="space-y-0 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {movingTips.map((t, i) => (
                <li key={t.title} className="grid gap-3 py-6 sm:grid-cols-[60px_1fr] sm:gap-8">
                  <span className="font-display text-3xl leading-none text-[var(--color-dust)] tnum">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-xl leading-snug text-[var(--color-ink)]">{t.title}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--color-graphite)]">{t.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
