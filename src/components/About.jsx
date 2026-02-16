import { ButtonLink } from './Button';
import { companyValues, processSteps, yearsInBusiness } from '../data/site';

export function About() {
  return (
    <section className="section-space-sm">
      <div className="layout-shell about-grid">
        <article className="space-y-4">
          <p className="kicker">Operations-based moving</p>
          <h2 className="section-title">
            {yearsInBusiness} years of moves that stay on plan.
          </h2>
          <p className="section-copy">
            We use a simple promise: we prepare in advance, protect your property, and
            keep every step visible so there are no surprises on move day.
          </p>
          <div className="space-y-3">
            <p className="label-copy">Move-day guarantees</p>
            <ul className="space-y-2">
              {[
                'Transparent timelines with clear window updates.',
                'Protective floor and hallway coverage for every move.',
                'Clear handoff checklist when the team leaves.',
              ].map((item) => (
                <li className="text-sm text-cloud" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ButtonLink size="md" to="/contact" variant="secondary">
            Contact our team
          </ButtonLink>
        </article>

        <div className="space-y-4">
          <p className="kicker">Move process</p>
          <div className="space-y-3">
            {processSteps.map((step) => (
              <article className="surface-card" key={step.title}>
                <p className="label-copy">{step.title}</p>
                <p className="mt-2 text-sm text-cloud">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="layout-shell section-space-sm">
        <div className="space-y-3">
          <p className="kicker">What makes us different</p>
          <div className="value-grid">
            {companyValues.map((value) => (
              <article className="service-card" key={value.title}>
                <img
                  alt={value.title}
                  className="service-image"
                  height="760"
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80"
                  width="1200"
                />
                <div className="service-body">
                  <p className="text-2xl text-pearl font-family-display">{value.title}</p>
                  <p className="text-sm text-cloud">{value.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
