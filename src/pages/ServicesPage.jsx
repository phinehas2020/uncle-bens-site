import { ButtonLink } from '../components/Button';
import { SEO } from '../components/SEO';
import { services, site } from '../data/site';

export function ServicesPage() {
  return (
    <>
      <SEO
        canonical="/services"
        description={`Residential, commercial, packing, long-distance, and storage services from ${site.name} in Central Texas.`}
        title="Services"
      />

      <section className="section-gap">
        <div className="wrap max-w-2xl space-y-4">
          <h1 className="heading-xl">Our services</h1>
          <p className="body-lg">
            Pick the support you need. Full-service moves, labor-only help,
            packing, storage, and specialty handling.
          </p>
        </div>
      </section>

      <section className="section-gap-sm">
        <div className="wrap space-y-6">
          {services.map((service, index) => (
            <article
              className={`service-detail-card ${index % 2 ? 'reverse' : ''}`}
              id={service.id}
              key={service.id}
            >
              <div className="p-6 space-y-4">
                <h2 className="heading-lg">{service.title}</h2>
                <p className="text-text-secondary">{service.summary}</p>
                <p className="text-sm text-text-muted">{service.details}</p>

                <ul className="grid gap-2 sm:grid-cols-2">
                  {service.highlights.map((item) => (
                    <li
                      className="rounded-md border border-border px-3 py-2 text-sm text-text-secondary"
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
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

          <div className="pt-2">
            <ButtonLink size="lg" to="/quote" variant="primary">
              Request a quote
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
