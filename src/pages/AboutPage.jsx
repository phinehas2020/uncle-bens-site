import { ButtonLink } from '../components/Button';
import { SEO } from '../components/SEO';
import { milestones, site, yearsInBusiness } from '../data/site';

export function AboutPage() {
  return (
    <>
      <SEO
        canonical="/about"
        description={`Learn the story behind ${site.name}, serving Central Texas for over ${yearsInBusiness} years with premium moving and storage execution.`}
        title="About"
      />

      <section className="section-space pt-20">
        <div className="layout-container grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5">
            <p className="eyebrow">Our Story</p>
            <h1 className="section-title max-w-3xl">
              A local team focused on
              <span className="gold-gradient"> honest, careful moving.</span>
            </h1>
            <p className="section-copy max-w-2xl">
              {site.name} started in Round Rock with a simple goal:
              do quality moving work and treat people well.
            </p>
            <p className="section-copy max-w-2xl">
              For more than {yearsInBusiness} years, families and businesses
              across Central Texas have trusted us to protect what matters most.
            </p>
            <ButtonLink size="md" to="/quote" variant="primary">
              Talk With Our Team
            </ButtonLink>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Milestones
            </p>
            <ol className="space-y-4">
              {milestones.map((milestone) => (
                <li className="rounded-xl border border-cobalt/22 bg-night/68 p-4" key={milestone.year}>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">
                    {milestone.year}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-cloud/88">
                    {milestone.event}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-space-sm pt-0">
        <div className="layout-container">
          <article className="surface-card grid gap-6 overflow-hidden p-6 sm:p-8 lg:grid-cols-[1fr_1fr] lg:p-10">
            <div className="space-y-4">
              <h2 className="font-family-display text-4xl text-white sm:text-5xl">
                What clients can expect
                <span className="gold-gradient"> on every move.</span>
              </h2>
              <p className="section-copy">
                Licensed and insured crews, transparent quotes, and respectful
                communication from first call through final placement.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                'Licensed & insured crews',
                'Dedicated move captains',
                'Specialty item handling',
                'Transparent communication',
              ].map((item) => (
                <div
                  className="rounded-2xl border border-cobalt/24 bg-night/72 p-4 text-sm uppercase tracking-[0.11em] text-cloud/88"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
