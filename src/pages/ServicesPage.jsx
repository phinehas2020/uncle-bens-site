import { ButtonLink } from '../components/Button';
import { SEO } from '../components/SEO';
import { services, site } from '../data/site';

export function ServicesPage() {
  return (
    <>
      <SEO
        canonical="/services"
        description={`Explore residential, commercial, packing, long-distance, and storage services from ${site.name} in Central Texas.`}
        title="Services"
      />

      <section className="section-space">
        <div className="layout-shell space-y-5">
          <p className="kicker">Service portfolio</p>
          <h1 className="section-title">Services built for your actual move.</h1>
          <p className="section-copy">
            Pick the mix you need. We support full-service moves, labor-only help,
            packing, storage, and specialty-item handling.
          </p>
        </div>
      </section>

      <section className="section-space-sm">
        <div className="layout-shell space-y-7">
          {services.map((service, index) => (
            <article
              className={`service-detail-card ${index % 2 ? 'reverse' : ''}`}
              id={service.id}
              key={service.id}
            >
              <div className="service-detail-copy p-6">
                <p className="label-copy">Service {String(index + 1).padStart(2, '0')}</p>
                <h2 className="text-3xl sm:text-4xl font-family-display text-pearl">{service.title}</h2>
                <p className="mt-4 text-base text-cloud">{service.summary}</p>
                <p className="mt-3 text-sm leading-relaxed text-fog">{service.details}</p>

                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {service.highlights.map((item) => (
                    <li
                      className="rounded-xl border border-cobalt-soft/35 bg-night/55 px-3 py-2 text-xs uppercase tracking-[0.11em] text-cloud"
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-detail-media">
                <img
                  alt={service.title}
                  className="h-full w-full object-cover"
                  height="900"
                  loading="lazy"
                  src={service.image}
                  width="1200"
                />
              </div>
            </article>
          ))}

          <div className="pt-1">
            <ButtonLink size="lg" to="/quote" variant="primary">
              Request a quote
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
