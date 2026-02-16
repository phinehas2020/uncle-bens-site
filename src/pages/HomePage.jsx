import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { SEO } from '../components/SEO';
import { ServiceCard } from '../components/ServiceCard';
import { ReviewSection } from '../components/ReviewSection';
import { featuredServices, reviews, yearsInBusiness } from '../data/site';
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
      <TrustStrip />

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

      <PageBottomCta
        heading="Need your moving date secured?"
        text="Tell us your route through the Austin area and we will lock the timeline with a practical quote and one clear action plan."
      />
    </>
  );
}
