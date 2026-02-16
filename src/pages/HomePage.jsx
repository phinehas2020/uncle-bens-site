import { Hero } from '../components/Hero';
import { SEO } from '../components/SEO';
import { ButtonLink } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { ReviewSection } from '../components/ReviewSection';
import { featuredServices, reviews, site, yearsInBusiness } from '../data/site';

export function HomePage() {
  return (
    <>
      <SEO
        canonical="/"
        title="Austin Movers | Quality Moving & Storage"
        description={`${site.name} provides Austin movers and local or long-distance moving, packing services, and storage solutions across Central Texas. Trusted for ${yearsInBusiness}+ years with guaranteed quotes.`}
        keywords="Austin movers, moving company, packing services, storage solutions, Austin local moving"
      />

      <Hero />

      <section className="section">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="subtle-badge">Featured services</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Core services for real moves</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              We cover the services families and businesses need most: moving, packing, and storage
              support across the Austin and Central Texas market.
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

      <section className="section">
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
              <ButtonLink size="md" to="/contact" variant="primary">
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
    </>
  );
}
