import { SEO } from '../components/SEO';
import { ServiceCard } from '../components/ServiceCard';
import { ButtonLink } from '../components/Button';
import { PageBottomCta } from '../components/PageBottomCta';
import { serviceDetails, services } from '../data/site';

const serviceIds = new Set(['local-moving', 'packing', 'long-distance', 'storage']);
const coreServices = services.filter((service) => serviceIds.has(service.id));

export function ServicesPage() {
  const detailsById = Object.fromEntries(serviceDetails.map((detail) => [detail.id, detail]));

  return (
    <>
      <SEO
        canonical="/services"
        title="Austin TX Movers Services | Local Moving, Packing, and Storage"
        description={`Austin TX movers service page for local moving, packing services, long-distance moving, and storage solutions across Austin, Round Rock, Cedar Park, Pflugerville, and Lakeway.`}
        keywords="Austin TX Movers, moving services, local moving, long-distance moving, packing services, storage solutions"
      />

      <section className="section">
        <div className="site-container">
          <div className="rounded-2xl border border-slate-200 bg-slate-950 px-6 py-8 text-white sm:px-10 sm:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Service plans</p>
            <h1 className="mt-3 text-4xl font-black">Austin TX Movers service options built for real schedules</h1>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base">
              You can book core support in one request: local moving, packing, long-distance logistics, and
              storage solutions. We support homes and businesses across Austin metro neighborhoods and
              in Round Rock, Cedar Park, Pflugerville, and Lakeway.
            </p>
            <div className="mt-6">
              <ButtonLink size="lg" to="/contact" className="bg-accent border-accent hover:bg-accent/85" variant="primary">
                Lock In Your Move Date
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="site-container">
          <div className="grid gap-4 md:grid-cols-2">
            {coreServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container space-y-8">
          {coreServices.map((service) => {
            const details = detailsById[service.id];
            if (!details) {
              return null;
            }

            return (
              <article className="card-soft border-slate-300 p-6" id={service.id} key={service.id}>
                <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
                  <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Service detail</p>
                    <h2 className="text-3xl font-semibold text-slate-900">{details.title}</h2>
                    <p className="text-sm leading-relaxed text-slate-600">{details.intro}</p>
                    <div className="space-y-3 text-sm leading-relaxed text-slate-700">
                      {details.details.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    <p className="text-sm font-semibold text-slate-900">Need this service with another?</p>
                    <p className="text-sm text-slate-600">
                      Pair it with{' '}
                      <a className="font-semibold text-slate-900 underline decoration-slate-300" href={`#${details.related[0]}`}>
                        {detailsById[details.related[0]]?.title || ''}
                      </a>
                      {details.related.length > 1 ? (
                        <>
                          {' '}
                          and{' '}
                          <a className="font-semibold text-slate-900 underline decoration-slate-300" href={`#${details.related[1]}`}>
                            {detailsById[details.related[1]]?.title || ''}
                          </a>
                          {' '}
                          when you need a smoother flow between planning, loading, and staging.
                        </>
                      ) : (
                        '.'
                      )}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm font-semibold text-slate-900">Service FAQ</p>
                      <div className="mt-3 space-y-2">
                        {details.faqs.map((faq) => (
                          <details className="rounded-lg border border-slate-200 bg-white p-3" key={faq.question}>
                            <summary className="cursor-pointer text-sm font-semibold text-slate-900">{faq.question}</summary>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                          </details>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 p-4">
                      <p className="text-sm font-semibold text-slate-900">Quick action checklist</p>
                      <ul className="mt-3 grid gap-2 text-sm text-slate-700">
                        <li className="rounded-md border border-slate-200 px-3 py-2">
                          Confirm move dates and preferred windows.
                        </li>
                        <li className="rounded-md border border-slate-200 px-3 py-2">
                          Share access constraints and stair details.
                        </li>
                        <li className="rounded-md border border-slate-200 px-3 py-2">
                          Tell us whether packing is included or partial.
                        </li>
                        <li className="rounded-md border border-slate-200 px-3 py-2">
                          Ask for storage hold timing before your move-in date.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}

          <div className="rounded-2xl bg-slate-950 px-6 py-8 text-white">
            <p className="text-sm font-semibold text-slate-300">Custom projects</p>
            <h3 className="mt-2 text-2xl font-semibold">Need specialty coordination beyond core services?</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-200">
              For office transitions, oversized freight, antiques, and complex access environments, we build custom
              plans and assign a dedicated planner before day one.
            </p>
            <div className="mt-4">
              <ButtonLink size="md" to="/contact" variant="primary" className="bg-accent border-accent hover:bg-accent/85">
                Build a custom quote
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <PageBottomCta
        heading="Lock in your preferred moving bundle today"
        text="Use one request to combine local moving, packing, and storage planning for a stronger outcome and one confirmed date."
      />
    </>
  );
}
