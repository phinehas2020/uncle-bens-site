import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { services } from '../data/site';

const serviceIds = ['local-moving', 'packing', 'long-distance', 'storage'];
const coreServices = services.filter((service) => serviceIds.includes(service.id));

const serviceGuide = {
  'local-moving': {
    bestFor: 'Homes, apartments, and office moves inside Austin and nearby cities.',
    pairedWith: 'Packing help or short-term storage when access or timing changes.',
    mention: 'Stairs, elevators, loading zones, and anything that affects truck access.',
  },
  packing: {
    bestFor: 'Fragile rooms, partial-home packing, or jobs where time is tight before move day.',
    pairedWith: 'Local or long-distance moves that need one inventory plan from the start.',
    mention: 'What you want packed by us, what you are packing yourself, and any specialty items.',
  },
  'long-distance': {
    bestFor: 'Texas cross-state and interstate moves that need one point of contact.',
    pairedWith: 'Storage holds or staged packing when delivery timing is not locked in yet.',
    mention: 'Pickup and delivery windows, access at both ends, and any deadline you cannot miss.',
  },
  storage: {
    bestFor: 'Delayed closings, renovation gaps, phased move-ins, and overflow between addresses.',
    pairedWith: 'Packing or long-distance work when items need to stay organized between stops.',
    mention: 'How long you expect the hold to last and whether retrieval needs to happen in stages.',
  },
};

const quoteChecklist = [
  'List both addresses and your target date window.',
  'Note access issues like stairs, elevators, parking limits, or long walks from the truck.',
  'Say whether packing, storage, or specialty-item handling is part of the job.',
  'Use one inventory list if you are comparing more than one mover.',
];

export function ServicesPage() {
  return (
    <>
      <SEO
        canonical="/services"
        title="Moving services"
        description="Austin-area moving service page for local moving, packing services, long-distance moving, and storage solutions across Austin, Round Rock, Cedar Park, Pflugerville, and Lakeway."
        keywords="moving services, local moving, long-distance moving, packing services, storage solutions"
      />

      <section className="section">
        <div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="max-w-md">
            <h1 className="text-balance text-4xl text-slate-900 sm:text-5xl">
              Four services, usually planned together.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-700">
              Most jobs are a mix of route planning, access coordination, packing, and temporary
              holding. This page is meant to show how those pieces fit.
            </p>
          </div>

          <div className="border-t border-slate-200">
            <div className="hidden grid-cols-[180px_1fr_1fr_1fr] gap-4 border-b border-slate-200 py-4 text-sm font-semibold text-slate-900 md:grid">
              <div>Service</div>
              <div>Good fit for</div>
              <div>Often paired with</div>
              <div>Mention this when asking for a quote</div>
            </div>

            {coreServices.map((service) => (
              <article className="grid gap-4 border-b border-slate-200 py-5 md:grid-cols-[180px_1fr_1fr_1fr]" key={service.id}>
                <div>
                  <p className="text-base font-semibold text-slate-900">{service.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.summary}</p>
                </div>
                <p className="text-sm leading-relaxed text-slate-700">{serviceGuide[service.id].bestFor}</p>
                <p className="text-sm leading-relaxed text-slate-700">{serviceGuide[service.id].pairedWith}</p>
                <p className="text-sm leading-relaxed text-slate-700">{serviceGuide[service.id].mention}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="site-container">
          {coreServices.map((service) => (
            <article className="grid gap-6 border-t border-slate-300 py-8 first:pt-0 lg:grid-cols-[220px_1fr]" id={service.id} key={service.id}>
              <div>
                <p className="text-sm leading-relaxed text-slate-700">{service.details}</p>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <h2 className="text-3xl text-slate-900">{service.title}</h2>
                  <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-slate-700 sm:grid-cols-2">
                    {service.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-slate-300 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                  <p className="text-sm font-semibold text-slate-900">Planning note</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    {serviceGuide[service.id].mention}
                  </p>
                  <Link
                    className="mt-4 inline-flex text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-accent"
                    to="/quote"
                  >
                    Request a quote for {service.title.toLowerCase()}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section border-t border-slate-200 bg-white">
        <div className="site-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-balance text-4xl text-slate-900">
              If you are comparing movers, keep the quote inputs the same.
            </h2>
          </div>

          <ol className="grid gap-4">
            {quoteChecklist.map((item, index) => (
              <li className="grid gap-3 border-t border-slate-200 py-4 sm:grid-cols-[28px_1fr]" key={item}>
                <span className="font-semibold text-slate-900">{index + 1}.</span>
                <span className="text-base leading-relaxed text-slate-700">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
