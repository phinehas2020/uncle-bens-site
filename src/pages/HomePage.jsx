import { Link } from 'react-router-dom';
import { ButtonLink } from '../components/Button';
import { Hero } from '../components/Hero';
import { SEO } from '../components/SEO';
import { ReviewSection } from '../components/ReviewSection';
import { featuredServices, publicContact, site } from '../data/site';

const reasons = [
  {
    number: '01',
    title: 'Written estimates, not guesses',
    text: 'Pricing starts with a walkthrough. Labor, materials, access, and timing get named before anyone books the truck.',
  },
  {
    number: '02',
    title: 'One crew, one plan',
    text: 'Packing, storage, and long routes are scoped as one move — not handed between separate teams.',
  },
  {
    number: '03',
    title: 'Your home stays protected',
    text: 'Doorways, floors, and furniture protection are planned at the same time as the truck load.',
  },
  {
    number: '04',
    title: 'Clear communication',
    text: 'Arrival windows, access issues, and day-of changes get handled in plain language.',
  },
];

const estimateChecklist = [
  'Your addresses and preferred move date',
  'Home size, stairs, elevators, or long walks from the truck',
  'Any packing help, storage gap, or split delivery',
  'Pianos, antiques, safes, gym equipment, or other heavy pieces',
];

export function HomePage() {
  return (
    <>
      <SEO
        canonical="/"
        title="Local and long-distance moving"
        description="Austin-area movers for local moves, commercial relocation, packing, storage, and long-distance planning across Round Rock, Cedar Park, Pflugerville, Lakeway, and nearby Central Texas cities."
        keywords="Austin movers, moving company, packing services, storage solutions, Round Rock movers, Cedar Park moving"
      />

      <Hero />

      {/* Why us — horizontal cards */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="site-container py-12 sm:py-16">
          <p className="text-center text-sm font-semibold tracking-wide text-slate-500 uppercase">
            Why families and businesses choose us
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div
                className="group rounded-xl border border-slate-200 bg-white p-5 transition-shadow duration-300 hover:shadow-md"
                key={reason.number}
              >
                <p className="text-2xl font-light text-slate-300 transition-colors duration-300 group-hover:text-accent">
                  {reason.number}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services — clean cards with hover */}
      <section className="section border-t border-slate-200">
        <div className="site-container">
          <div className="max-w-2xl">
            <h2 className="text-balance text-4xl text-slate-900 sm:text-5xl">
              Most jobs blend these services.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              A local move may still need full packing or a storage gap. We plan the
              pieces together so nothing falls between teams.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {featuredServices.map((service) => (
              <Link
                className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-lg"
                key={service.id}
                to={`/services#${service.id}`}
              >
                {service.image && (
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      alt={service.imageAlt || service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      decoding="async"
                      loading="lazy"
                      src={service.image}
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-accent">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {service.summary}
                  </p>
                  <ul className="mt-4 grid gap-1.5 text-sm text-slate-700">
                    {service.highlights.slice(0, 3).map((highlight) => (
                      <li className="flex items-start gap-2" key={highlight}>
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm font-semibold text-accent">
                    Learn more &rarr;
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof / trust */}
      <ReviewSection />

      {/* CTA — estimate section */}
      <section className="section-surface border-t border-slate-200">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-4xl text-slate-900 sm:text-5xl">
              The cleaner the inventory, the cleaner the quote.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-700">
              Before we quote, we need a few details about your move. The more precise the
              inventory, the more accurate the estimate.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                What to have ready
              </p>
              <ol className="mt-4 space-y-0">
                {estimateChecklist.map((item, index) => (
                  <li
                    className="flex items-start gap-4 border-b border-slate-200 py-4"
                    key={item}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <span className="text-base leading-relaxed text-slate-700">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
              <div>
                <p className="text-sm font-semibold text-slate-900">Coverage</p>
                <p className="mt-3 text-base leading-relaxed text-slate-700">
                  We work across Austin and nearby Central Texas cities including{' '}
                  {site.serviceAreas.slice(0, 6).join(', ')}, and other routes in the metro
                  when the scope is a fit.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {site.hours.summary}
                  <br />
                  {site.complianceNote}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <ButtonLink size="lg" to="/quote" className="text-center">
                  Start the written estimate
                </ButtonLink>
                {publicContact.hasPhone ? (
                  <a
                    className="text-center text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-accent"
                    href={publicContact.phoneHref}
                  >
                    Or call {site.phone.display}
                  </a>
                ) : (
                  <Link
                    className="text-center text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-accent"
                    to="/contact"
                  >
                    Or talk through your move
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
