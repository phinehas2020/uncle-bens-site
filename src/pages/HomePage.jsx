import { Link } from 'react-router-dom';
import { ButtonLink } from '../components/Button';
import { Hero } from '../components/Hero';
import { SEO } from '../components/SEO';
import { ReviewSection } from '../components/ReviewSection';
import { featuredServices, publicContact, site } from '../data/site';

const reasons = [
  {
    title: 'Written estimates, not guesses',
    text: 'Pricing starts with a walkthrough. Labor, packing materials, access issues, and timing get named before anyone books the truck.',
  },
  {
    title: 'One crew plan across the job',
    text: 'If packing, storage, or a long route are involved, we scope it as one move instead of handing you between separate teams.',
  },
  {
    title: 'House protection is part of the work',
    text: 'Doorways, floors, and furniture protection are planned at the same time as the truck load so the house is not treated like an afterthought.',
  },
  {
    title: 'Communication stays practical',
    text: 'Arrival windows, access issues, and day-of changes get handled in plain language so you know what is happening next.',
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

      <section className="section">
        <div className="site-container grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="lg:sticky lg:top-10">
            <div className="max-w-lg">
              <h2 className="text-balance text-4xl text-slate-900 sm:text-5xl">
                Most of the job is keeping the day calm.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-700">
                The lifting only goes smoothly when the access, timing, and inventory are settled
                first. We treat the move like one plan, not a stack of separate services.
              </p>
            </div>

            <figure className="mt-8">
              <img
                alt="Mover wrapping furniture before loading a truck"
                className="aspect-[5/4] w-full object-cover"
                decoding="async"
                loading="lazy"
                src="/hero-image.png"
              />
              <figcaption className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                Wrapping, staging, and truck order are planned before load-out so the crew is not
                improvising in the driveway.
              </figcaption>
            </figure>
          </div>

          <div className="border-t border-slate-200">
            {reasons.map((reason, index) => (
              <article
                className="group grid gap-4 border-b border-slate-200 py-6 sm:grid-cols-[64px_1fr]"
                key={reason.title}
              >
                <p className="text-3xl text-slate-300 transition-colors duration-300 group-hover:text-accent">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <div className="grid gap-3 lg:grid-cols-[220px_1fr]">
                  <h3 className="text-2xl text-slate-900">{reason.title}</h3>
                  <p className="max-w-3xl text-base leading-relaxed text-slate-700">{reason.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface border-t border-slate-200">
        <div className="site-container grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="max-w-lg">
            <h2 className="text-balance text-4xl text-slate-900 sm:text-5xl">
              Most jobs blend these services.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-700">
              A local move may still need full packing or a storage gap. A long route may start
              with apartment access and staging. We plan the pieces together.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              If your move does not fit neatly in one category, that is normal. The route and the
              access usually matter more than the page title.
            </p>

            <figure className="mt-8">
              <img
                alt="Packed moving boxes and supplies staged for pickup"
                className="aspect-[5/4] w-full object-cover"
                decoding="async"
                loading="lazy"
                src="/packing.png"
              />
              <figcaption className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                Packing, truck load, and storage are usually the same conversation, not three
                separate jobs.
              </figcaption>
            </figure>
          </div>

          <div className="border-t border-slate-300">
            {featuredServices.map((service) => (
              <article
                className="group grid gap-5 border-b border-slate-300 py-6 lg:grid-cols-[220px_1fr]"
                id={service.id}
                key={service.id}
              >
                <div>
                  <h3 className="text-xl text-slate-900 transition-colors duration-300 group-hover:text-accent">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.summary}</p>
                </div>

                <div>
                  <ul className="grid gap-x-8 gap-y-2 text-sm leading-relaxed text-slate-700 sm:grid-cols-2">
                    {service.highlights.map((highlight) => (
                      <li
                        className="transition-colors duration-300 group-hover:text-slate-900"
                        key={highlight}
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link
                    className="mt-4 inline-flex text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-accent"
                    to={`/services#${service.id}`}
                  >
                    Read the service notes
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ReviewSection />

      <section className="section border-t border-slate-200 bg-white">
        <div className="site-container grid gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <h2 className="text-balance text-4xl text-slate-900 sm:text-5xl">
              The cleaner the inventory, the cleaner the quote.
            </h2>
            <ol className="mt-8 border-t border-slate-200">
              {estimateChecklist.map((item, index) => (
                <li className="grid gap-3 border-b border-slate-200 py-5 sm:grid-cols-[36px_1fr]" key={item}>
                  <span className="font-semibold text-slate-900">{index + 1}.</span>
                  <span className="text-base leading-relaxed text-slate-700">{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:pt-2">
            <div className="border-y border-slate-200 py-6">
              <p className="text-sm font-semibold text-slate-900">Coverage</p>
              <p className="mt-5 text-base leading-relaxed text-slate-700">
                We work across Austin and nearby Central Texas cities including{' '}
                {site.serviceAreas.slice(0, 6).join(', ')}, and other routes in the metro when the
                scope is a fit.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {site.hours.summary}
                <br />
                {site.complianceNote}
              </p>
            </div>

            <div className="mt-8 flex flex-col items-start gap-4">
              <ButtonLink size="lg" to="/quote">
                Start the written estimate
              </ButtonLink>
              {publicContact.hasPhone ? (
                <a
                  className="text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-accent"
                  href={publicContact.phoneHref}
                >
                  Call {site.phone.display}
                </a>
              ) : (
                <Link
                  className="text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 hover:text-accent"
                  to="/contact"
                >
                  Talk through your move
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
