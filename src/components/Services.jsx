import { services } from '../data/site';
import { ButtonLink } from './Button';

export function Services() {
  return (
    <section className="section-gap-sm" style={{ background: 'var(--color-bg-warm)' }}>
      <div className="wrap space-y-8">
        <div className="max-w-xl">
          <h2 className="heading-lg">What we do</h2>
          <p className="mt-3 body-lg">
            Pick what you need. We handle the rest.
          </p>
        </div>

        <div className="grid-3">
          {services.slice(0, 6).map((service) => (
            <article className="card overflow-hidden" key={service.id}>
              <img
                alt={service.title}
                className="h-44 w-full object-cover"
                height="800"
                loading="lazy"
                src={service.image}
                width="1200"
              />
              <div className="p-4 space-y-2">
                <h3 className="heading-md">{service.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{service.summary}</p>
              </div>
            </article>
          ))}
        </div>

        <ButtonLink size="md" to="/services" variant="secondary">
          View all services
        </ButtonLink>
      </div>
    </section>
  );
}
