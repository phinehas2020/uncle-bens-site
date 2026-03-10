import { ButtonLink } from '../components/Button';
import { PageBottomCta } from '../components/PageBottomCta';
import { SEO } from '../components/SEO';
import { companyValues, milestones, site, yearsInBusiness } from '../data/site';

const companyFacts = [
  { label: 'License', value: site.license },
  { label: 'Years in business', value: `${yearsInBusiness} years since ${site.yearFounded}` },
  { label: 'Coverage', value: 'Austin metro and nearby Central Texas cities' },
];

export function AboutPage() {
  return (
    <>
      <SEO
        canonical="/about"
        title="About | Austin TX Movers | Quality Moving & Storage"
        description={`Learn about ${site.name}, Austin TX movers with ${yearsInBusiness}+ years helping clients in Round Rock, Cedar Park, Pflugerville, and Lakeway with dependable local and long-distance moves.`}
        keywords="Austin TX Movers, Austin moving company, packing services, storage solutions, Central Texas movers"
      />

      <section className="section">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
            <div className="max-w-2xl">
            <p className="text-sm text-slate-600">About</p>
            <h1 className="mt-4 text-balance text-4xl text-slate-900 sm:text-5xl">
              A Round Rock moving company that keeps the day orderly.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              {site.name} started in Round Rock with a simple goal: show up prepared, protect the
              house, and communicate clearly from the walkthrough to final placement.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Over {yearsInBusiness} years, we have helped families and businesses across Austin,
              Round Rock, Cedar Park, Pflugerville, and Lakeway move without turning the day into a
              mess.
            </p>
            <div className="mt-6">
              <ButtonLink size="md" to="/contact" variant="secondary">
                Request an estimate
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[1.5rem] bg-slate-200">
            {companyFacts.map((fact) => (
              <div className="bg-white p-5" key={fact.label}>
                <p className="text-sm font-medium text-slate-600">{fact.label}</p>
                <p className="mt-2 text-base leading-relaxed text-slate-900">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl text-slate-900">How we work</h2>
          <div className="mt-5 grid gap-px overflow-hidden rounded-[1.5rem] bg-slate-200 sm:grid-cols-3">
            {companyValues.map((value) => (
              <div className="bg-white p-5" key={value.title}>
                <p className="text-base font-medium text-slate-900">{value.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl text-slate-900">Company timeline</h2>
          <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-white">
            {milestones.map((milestone, index) => (
              <div
                className={index === 0 ? 'grid gap-3 border-b border-slate-200 p-5 sm:grid-cols-[120px_1fr]' : index === milestones.length - 1 ? 'grid gap-3 p-5 sm:grid-cols-[120px_1fr]' : 'grid gap-3 border-b border-slate-200 p-5 sm:grid-cols-[120px_1fr]'}
                key={milestone.year}
              >
                <p className="text-sm font-medium text-slate-600">{milestone.year}</p>
                <p className="text-sm leading-relaxed text-slate-700">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <PageBottomCta
        heading="Want to talk through your move with us?"
        text="We can help with timing, packing, storage, or just the estimate itself."
      />
    </>
  );
}
