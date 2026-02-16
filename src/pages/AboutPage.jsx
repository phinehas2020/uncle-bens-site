import { ButtonLink } from '../components/Button';
import { SEO } from '../components/SEO';
import { milestones, site, yearsInBusiness } from '../data/site';

export function AboutPage() {
  return (
    <>
      <SEO
        canonical="/about"
        description={`Learn the story behind ${site.name}, serving Central Texas for over ${yearsInBusiness} years with reliable moving and storage execution.`}
        title="About"
      />

      <section className="section-space">
        <div className="layout-shell about-grid">
          <div className="space-y-5">
            <p className="kicker">Our story</p>
            <h1 className="section-title">
              Central Texas moving that focuses on care and predictability.
            </h1>
            <p className="section-copy">
              {site.name} started in Round Rock with one goal:
              do professional work and respect your life moments.
            </p>
            <p className="section-copy">
              In more than {yearsInBusiness} years, families and businesses have trusted
              us to keep details organized and handled with care.
            </p>
            <ButtonLink size="md" to="/quote" variant="primary">
              Talk with our team
            </ButtonLink>
          </div>

          <div className="surface-card p-6">
            <p className="kicker">Milestones</p>
            <ol className="space-y-3">
              {milestones.map((milestone) => (
                <li className="surface-card p-4" key={milestone.year}>
                  <p className="label-copy">{milestone.year}</p>
                  <p className="text-sm text-cloud/88">{milestone.event}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
