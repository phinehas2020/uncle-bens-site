import { ButtonLink } from '../components/Button';
import { SEO } from '../components/SEO';
import { companyValues, milestones, site, yearsInBusiness } from '../data/site';

export function AboutPage() {
  return (
    <>
      <SEO
        canonical="/about"
        title="About | Austin Moving Company"
        description={`Learn about ${site.name}, a moving company in Austin and Central Texas with over ${yearsInBusiness}+ years of local, packing, and storage expertise.`}
        keywords="Austin movers, moving company, packing services, storage solutions, central texas movers"
      />

      <section className="section">
        <div className="site-container">
          <div className="grid gap-8 md:grid-cols-[1fr_0.9fr]">
            <div className="space-y-4">
              <p className="subtle-badge">Company background</p>
              <h1 className="text-4xl font-semibold text-slate-900">About us</h1>
              <p className="text-base text-slate-600">
                {site.name} started in Round Rock with one clear goal: do moving work that is careful,
                explain the process up front, and respect your time and budget.
              </p>
              <p className="text-sm text-slate-600">
                Over {yearsInBusiness} years, families and businesses have trusted us to keep every
                detail organized, from walk-through to final placement.
              </p>
              <ButtonLink size="md" to="/quote" variant="primary">
                Talk with our team
              </ButtonLink>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900">Trust credentials</h2>
              <div className="space-y-2 rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-900">License</p>
                <p className="text-sm text-slate-600">{site.license}</p>
              </div>
              <div className="space-y-2 rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-900">Years in business</p>
                <p className="text-sm text-slate-600">{yearsInBusiness} years since {site.yearFounded}</p>
              </div>
              <div className="space-y-2 rounded-2xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-900">Service coverage</p>
                <p className="text-sm text-slate-600">Austin metro and Central Texas cities, weekdays and Saturdays</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-slate-900">How we work</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {companyValues.map((value) => (
                <div className="rounded-2xl border border-slate-200 p-4" key={value.title}>
                  <p className="text-base font-semibold text-slate-900">{value.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{value.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-slate-900">Milestones</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {milestones.map((milestone) => (
                <div className="rounded-2xl border border-slate-200 p-4" key={milestone.year}>
                  <p className="text-sm font-semibold text-slate-900">{milestone.year}</p>
                  <p className="mt-1 text-sm text-slate-600">{milestone.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
