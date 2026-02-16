import { Hero } from '../components/Hero';
import { SEO } from '../components/SEO';
import { ButtonLink } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { ReviewSection } from '../components/ReviewSection';
import { featuredServices, reviews, site, yearsInBusiness } from '../data/site';
import { PageBottomCta } from '../components/PageBottomCta';

export function HomePage() {
  return (
    <>
      <SEO
        canonical="/"
        title="Austin TX Movers | Quality Moving & Storage | Local & Long-Distance"
        description={`Austin TX Movers with ${yearsInBusiness}+ years of field experience, offering moving services in Round Rock, Cedar Park, Pflugerville, Lakeway, and all of Austin. Quality Moving & Storage provides local and long-distance moving, packing services, and storage solutions.`
        }
        keywords="Austin TX Movers, Austin movers, moving company, packing services, storage solutions, Round Rock movers, Cedar Park moving"
      />

      <Hero />

      <section className="section">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="subtle-badge">Featured services</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Core services for Austin-area moves</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              From Austin and Round Rock to Cedar Park, Pflugerville, and Lakeway, our teams combine careful handling with clear, timed communication for homes and businesses that need dependable execution.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <ReviewSection reviews={reviews} />

      <section className="section-surface">
        <div className="site-container">
          <div className="rounded-2xl border border-slate-200 bg-slate-900 px-6 py-8 text-white sm:px-10 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Need a fast, reliable estimate?</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight">
              Get a guaranteed quote for your next move, even when timelines are tight.
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-200">
              Share your dates and route, and our team will return with transparent pricing and a clear plan.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonLink size="md" to="/contact" variant="primary" className="bg-accent hover:bg-accent/85 border-accent">
                Request your quote
              </ButtonLink>
              <a
                className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-4 py-2.5 text-sm text-slate-100 transition hover:bg-slate-800"
                href={`tel:${site.phone.digits}`}
              >
                Call {site.phone.display}
              </a>
            </div>
          </div>
        </div>
      </section>

      <PageBottomCta
        heading="Need your moving date secured?"
        text="Tell us your route through the Austin area and we will lock the timeline with a practical quote and one clear action plan."
      />
    </>
  );
}
