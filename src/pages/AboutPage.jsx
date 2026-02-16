import { ButtonLink } from '../components/Button';
import { SEO } from '../components/SEO';
import { milestones, site, yearsInBusiness } from '../data/site';

export function AboutPage() {
  return (
    <>
      <SEO
        canonical="/about"
        description={`Learn about ${site.name}, serving Central Texas for over ${yearsInBusiness} years with reliable moving and storage.`}
        title="About"
      />

      <section className="section-gap">
        <div className="wrap">
          <div className="split">
            <div className="space-y-4">
              <h1 className="heading-xl">About us</h1>
              <p className="body-lg">
                {site.name} started in Round Rock with one goal:
                do professional work and respect your time.
              </p>
              <p className="text-text-secondary">
                Over {yearsInBusiness} years, families and businesses have trusted
                us to keep details organized and handled with care.
              </p>
              <ButtonLink size="md" to="/quote" variant="primary">
                Talk with our team
              </ButtonLink>
            </div>

            <div className="space-y-3">
              <h2 className="heading-md mb-4">Milestones</h2>
              {milestones.map((milestone) => (
                <div className="card p-4" key={milestone.year}>
                  <p className="text-sm font-semibold text-text">{milestone.year}</p>
                  <p className="mt-1 text-sm text-text-secondary">{milestone.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
