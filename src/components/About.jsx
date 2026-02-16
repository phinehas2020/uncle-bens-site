import { ButtonLink } from './Button';
import { companyValues, processSteps, yearsInBusiness } from '../data/site';

export function About() {
  return (
    <section className="section-gap">
      <div className="wrap">
        <div className="split">
          <div className="space-y-4">
            <h2 className="heading-lg">
              {yearsInBusiness} years of careful moves.
            </h2>
            <p className="body-lg">
              We prepare in advance, protect your property, and keep every step
              visible so there are no surprises on move day.
            </p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>Transparent timelines with clear updates.</li>
              <li>Floor and hallway protection on every move.</li>
              <li>Final walkthrough before the crew leaves.</li>
            </ul>
            <ButtonLink size="md" to="/contact" variant="secondary">
              Contact our team
            </ButtonLink>
          </div>

          <div className="space-y-3">
            {processSteps.map((step) => (
              <div className="card p-4" key={step.title}>
                <p className="text-sm font-semibold text-text">{step.title}</p>
                <p className="mt-1 text-sm text-text-secondary">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="heading-lg mb-6">What sets us apart</h3>
          <div className="grid-3">
            {companyValues.map((value) => (
              <div className="card-warm p-5" key={value.title}>
                <h4 className="text-base font-semibold text-text">{value.title}</h4>
                <p className="mt-2 text-sm text-text-secondary">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
