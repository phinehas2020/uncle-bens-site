import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { companyValues, site } from '../data/site';

const principles = [
  {
    num: '01',
    title: 'Walkthrough before quote, always.',
    text: 'A quote is only as good as the information behind it. A 15-minute walkthrough turns a guess into a number you can trust.',
  },
  {
    num: '02',
    title: 'One coordinator, one plan.',
    text: 'The person who scopes your move is still the person tracking it when the truck leaves. No handoffs between departments.',
  },
  {
    num: '03',
    title: 'Protection isn\'t an upsell.',
    text: 'Floor runners, doorframe pads, and corner guards are standard. The crew shows up with them — you don\'t get billed for them.',
  },
  {
    num: '04',
    title: 'If we can\'t do it right, we say so.',
    text: 'If the access or timing makes the job unsafe or the scope unrealistic, we tell you before booking. Not after.',
  },
];

export function AboutPage() {
  return (
    <>
      <SEO
        canonical="/about"
        title="About Quality Moving & Storage — Austin & Round Rock Movers"
        description="Quality Moving & Storage is a TXDMV-registered Austin-area moving company. Meet the team behind the written estimates, careful crews, and one-coordinator moves across Central Texas."
        keywords="Quality Moving Austin, Round Rock moving company, Austin movers about, Texas licensed movers"
      />

      <section className="section-tight pt-16 md:pt-24">
        <div className="wrap">
          <p className="eyebrow">About</p>
          <h1 className="display-xl mt-5 max-w-4xl text-balance">
            A moving company built on the{' '}
            <span className="serif-italic" style={{ color: 'var(--color-brand)' }}>boring details</span>{' '}
            that actually matter.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-graphite)]">
            We started Quality Moving & Storage because too many Austin moves
            were being run like dispatch operations — pass the job, collect
            the card, move on. A move is one of the most physically chaotic
            days of a family's year. It deserves more care than that.
          </p>
        </div>
      </section>

      {/* Facts block */}
      <section className="section-tight">
        <div className="wrap">
          <div className="grid gap-6 rounded-3xl border border-[var(--color-line)] surface-bone p-8 sm:grid-cols-3 sm:p-10">
            <div>
              <p className="text-[0.75rem] uppercase tracking-[0.14em] text-[var(--color-stone)]">Based in</p>
              <p className="mt-3 font-display text-2xl text-[var(--color-ink)]">
                {site.address ? `${site.address.city}, ${site.address.region}` : 'Round Rock, TX'}
              </p>
              <p className="mt-1 text-sm text-[var(--color-graphite)]">
                Serving Austin & Central Texas
              </p>
            </div>
            <div>
              <p className="text-[0.75rem] uppercase tracking-[0.14em] text-[var(--color-stone)]">Credentials</p>
              <p className="mt-3 font-display text-2xl text-[var(--color-ink)]">{site.license}</p>
              <p className="mt-1 text-sm text-[var(--color-graphite)]">Fully insured · written estimates</p>
            </div>
            <div>
              <p className="text-[0.75rem] uppercase tracking-[0.14em] text-[var(--color-stone)]">Scope</p>
              <p className="mt-3 font-display text-2xl text-[var(--color-ink)]">Local · Long-distance · Storage</p>
              <p className="mt-1 text-sm text-[var(--color-graphite)]">Homes, apartments, offices, and specialty items</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="max-w-md">
              <p className="eyebrow">Principles</p>
              <h2 className="display-lg mt-5 text-balance">
                The rules we refuse to <span className="serif-italic">shortcut</span>.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[var(--color-graphite)]">
                These aren't mission-statement bullets. They are the four
                things that actually separate a careful move from a cheap one.
              </p>
            </div>

            <ol className="space-y-0 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {principles.map((p) => (
                <li key={p.num} className="grid gap-4 py-6 sm:grid-cols-[80px_1fr] sm:gap-8">
                  <span className="font-display text-3xl leading-none tnum text-[var(--color-dust)]">{p.num}</span>
                  <div>
                    <h3 className="font-display text-2xl leading-snug text-[var(--color-ink)]">{p.title}</h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-graphite)]">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section surface-paper">
        <div className="wrap">
          <h2 className="display-lg max-w-3xl text-balance">
            What you can expect on move day.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {companyValues.map((v) => (
              <article key={v.title} className="rounded-2xl border border-[var(--color-line)] bg-white p-7">
                <p className="font-display text-2xl text-[var(--color-ink)]">{v.title}</p>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-[var(--color-graphite)]">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section">
        <div className="wrap">
          <div className="grid gap-8 border-t border-[var(--color-line-strong)] pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="display-md max-w-2xl text-balance">
              The walkthrough is free, and the written estimate is yours to keep.
            </h2>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <Link to="/quote" className="btn btn-primary">
                Request a written estimate
                <span aria-hidden="true">→</span>
              </Link>
              <Link to="/contact" className="u-link">Contact the office</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
