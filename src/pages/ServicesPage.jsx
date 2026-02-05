import { ButtonLink } from '../components/Button';
import { SEO } from '../components/SEO';
import { services, site } from '../data/site';

export function ServicesPage() {
  return (
    <>
      <SEO
        canonical="/services"
        description={`Explore premium residential, commercial, packing, long-distance, and storage services from ${site.name} in Central Texas.`}
        title="Services"
      />

      <section className="section-space pt-20">
        <div className="layout-container space-y-5">
          <p className="eyebrow">Service Portfolio</p>
          <h1 className="section-title max-w-4xl">
            Every move type.
            <span className="gold-gradient">One uncompromising standard.</span>
          </h1>
          <p className="section-copy max-w-3xl">
            We combine concierge-level care with disciplined logistics to deliver
            reliable outcomes across homes, offices, and specialty moves.
          </p>
        </div>
      </section>

      <section className="section-space-sm pt-0">
        <div className="layout-container space-y-5">
          {services.map((service, index) => (
            <article
              className="surface-card grid overflow-hidden lg:grid-cols-[1.08fr_0.92fr]"
              id={service.id}
              key={service.id}
            >
              <div className={`p-6 sm:p-8 lg:p-10 ${index % 2 ? 'lg:order-2' : ''}`}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">
                  Service {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="font-family-display text-4xl text-white sm:text-5xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-cloud/90">
                  {service.summary}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-fog/88">
                  {service.details}
                </p>

                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {service.highlights.map((item) => (
                    <li
                      className="rounded-xl border border-cobalt/24 bg-night/70 px-3 py-2 text-xs uppercase tracking-[0.11em] text-cloud/88"
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <img
                alt={service.title}
                className={`h-72 w-full object-cover lg:h-full ${index % 2 ? 'lg:order-1' : ''}`}
                height="900"
                loading="lazy"
                src={service.image}
                width="1200"
              />
            </article>
          ))}

          <div className="pt-4">
            <ButtonLink size="lg" to="/quote" variant="primary">
              Request Your Custom Quote
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
