import { services } from '../data/site';
import { ButtonLink } from './Button';

export function Services() {
  return (
    <section className="section-space">
      <div className="layout-shell space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="kicker">What we handle</p>
          <h2 className="section-title">
            Services built to match your exact move.
          </h2>
          <p className="section-copy">
            You can combine any level of support.
            From full-service planning to specialist-only help, we keep it practical.
          </p>
        </div>

        <div className="services-grid">
          {services.slice(0, 6).map((service, index) => (
            <article className="service-card" key={service.id}>
              <img
                alt={service.title}
                className="service-image"
                height="800"
                loading="lazy"
                src={service.image}
                width="1200"
              />
              <div className="service-body">
                <p className="service-index">Service {String(index + 1).padStart(2, '0')}</p>
                <h3 className="text-3xl text-pearl font-family-display">{service.title}</h3>
                <p className="text-sm text-cloud">{service.summary}</p>
                <ul className="text-xs uppercase tracking-[0.12em] text-fog">
                  {service.highlights.slice(0, 3).map((item) => (
                    <li className="mt-2" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <ButtonLink size="md" to="/services" variant="secondary">
          Explore full service specifications
        </ButtonLink>
      </div>
    </section>
  );
}
