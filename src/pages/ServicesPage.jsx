import { ButtonLink } from '../components/Button';
import { PageBottomCta } from '../components/PageBottomCta';
import { SEO } from '../components/SEO';
import { ServiceCard } from '../components/ServiceCard';
import { serviceDetails, services } from '../data/site';

const serviceIds = new Set(['local-moving', 'packing', 'long-distance', 'storage']);
const coreServices = services.filter((service) => serviceIds.has(service.id));

const overviewFacts = [
  { label: 'Base', value: 'Round Rock' },
  { label: 'Coverage', value: 'Austin and nearby cities' },
  { label: 'Schedule', value: 'Monday through Saturday' },
  { label: 'Storage', value: 'Short-term and long-term options' },
];

export function ServicesPage() {
  const detailsById = Object.fromEntries(serviceDetails.map((detail) => [detail.id, detail]));

  return (
    <>
      <SEO
        canonical="/services"
        title="Austin TX Movers Services | Local Moving, Packing, and Storage"
        description="Austin TX movers service page for local moving, packing services, long-distance moving, and storage solutions across Austin, Round Rock, Cedar Park, Pflugerville, and Lakeway."
        keywords="Austin TX Movers, moving services, local moving, long-distance moving, packing services, storage solutions"
      />

      <section className="section">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="text-sm text-slate-600">Services</p>
            <h1 className="mt-4 text-balance text-4xl text-slate-900 sm:text-5xl">
              Moving, packing, and storage that can be scheduled together.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              We handle local moves, long-distance routes, packing, and storage across Austin,
              Round Rock, Cedar Park, Pflugerville, and Lakeway. If you need more than one service,
              we build one plan instead of sending you between teams.
            </p>
            <div className="mt-6">
              <ButtonLink size="md" to="/contact" variant="primary">
                Request an estimate
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[1.5rem] bg-slate-200 sm:grid-cols-2">
            {overviewFacts.map((fact) => (
              <div className="bg-white p-5" key={fact.label}>
                <p className="text-sm font-medium text-slate-600">{fact.label}</p>
                <p className="mt-2 text-base leading-relaxed text-slate-900">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-surface">
        <div className="site-container">
          <div className="grid gap-px overflow-hidden rounded-[1.75rem] bg-slate-200 md:grid-cols-2">
            {coreServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container space-y-6">
          {coreServices.map((service) => {
            const details = detailsById[service.id];
            if (!details) {
              return null;
            }

            return (
              <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8" id={service.id} key={service.id}>
                <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-slate-600">{service.title}</p>
                    <h2 className="text-3xl text-slate-900">{details.title}</h2>
                    <p className="text-base leading-relaxed text-slate-700">{details.intro}</p>

                    <div className="rounded-[1.5rem] border border-slate-200 bg-[#faf8f5] p-4">
                      <p className="text-sm font-medium text-slate-900">Often paired with</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        <a
                          className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4"
                          href={`#${details.related[0]}`}
                        >
                          {detailsById[details.related[0]]?.title || ''}
                        </a>
                        {details.related.length > 1 ? (
                          <>
                            {' '}
                            and{' '}
                            <a
                              className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4"
                              href={`#${details.related[1]}`}
                            >
                              {detailsById[details.related[1]]?.title || ''}
                            </a>
                          </>
                        ) : null}
                        {' '}
                        if you want one plan instead of separate bookings.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[1.5rem] border border-slate-200 bg-[#faf8f5] p-4">
                      <p className="text-sm font-medium text-slate-900">What&apos;s included</p>
                      <ul className="mt-3 grid gap-2 text-sm text-slate-700">
                        {service.highlights.map((highlight) => (
                          <li className="rounded-xl border border-slate-200 bg-white px-3 py-2" key={highlight}>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-[1.5rem] border border-slate-200 p-4">
                      <p className="text-sm font-medium text-slate-900">Common questions</p>
                      <div className="mt-3 space-y-2">
                        {details.faqs.map((faq) => (
                          <details className="rounded-xl border border-slate-200 bg-white p-3" key={faq.question}>
                            <summary className="cursor-pointer text-sm font-medium text-slate-900">
                              {faq.question}
                            </summary>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                          </details>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}

          <div className="rounded-[1.75rem] border border-slate-200 bg-[#faf8f5] p-6 sm:p-8">
            <p className="text-sm font-medium text-slate-600">Custom work</p>
            <h3 className="mt-3 text-2xl text-slate-900">
              Need help with antiques, office equipment, or a tricky access setup?
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
              We also handle jobs that need extra planning before move day. Tell us what is unusual
              and we will build the estimate around that.
            </p>
            <div className="mt-5">
              <ButtonLink size="md" to="/contact" variant="primary">
                Start the estimate
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <PageBottomCta
        heading="Need help choosing the right service mix?"
        text="Tell us the route, the size of the move, and whether packing or storage is involved. We will recommend the cleanest way to handle it."
      />
    </>
  );
}
