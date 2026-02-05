import { services } from '../data/site';
import { ButtonLink } from './Button';

export function Services() {
  return (
    <section className="section-space">
      <div className="layout-container space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Capabilities</p>
          <h2 className="section-title">
            Practical services for
            <span className="gold-gradient"> real-world moves.</span>
          </h2>
          <p className="section-copy">
            Whether you are moving an apartment, a family home, or an office,
            we tailor the plan to your timeline and priorities.
          </p>
        </div>

        <div className="grid-auto-cards">
          {services.slice(0, 6).map((service) => (
            <article className="surface-card overflow-hidden" key={service.id}>
              <img
                alt={service.title}
                className="h-52 w-full object-cover"
                height="800"
                loading="lazy"
                src={service.image}
                width="1200"
              />
              <div className="space-y-4 p-6">
                <h3 className="font-family-display text-3xl text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-cloud/88">{service.summary}</p>
                <ul className="space-y-2 text-xs uppercase tracking-[0.12em] text-cloud/78">
                  {service.highlights.slice(0, 3).map((item) => (
                    <li className="flex items-center gap-2" key={item}>
                      <span className="h-[5px] w-[5px] rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <ButtonLink size="md" to="/services" variant="secondary">
          View Full Service Details
        </ButtonLink>
      </div>
    </section>
  );
}
