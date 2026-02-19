import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { SEO } from '../components/SEO';
import { ServiceCard } from '../components/ServiceCard';
import { ReviewSection } from '../components/ReviewSection';
import { featuredServices, reviews, yearsInBusiness } from '../data/site';
import { PageBottomCta } from '../components/PageBottomCta';
import { motion } from 'framer-motion';

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

      <section className="section bg-slate-50 relative isolate overflow-hidden">
        <div className="absolute top-0 right-0 -m-32 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
        <div className="site-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="subtle-badge mb-4">Featured services</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">Core services for <span className="text-accent">Austin-area moves</span></h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              From Austin and Round Rock to Cedar Park, Pflugerville, and Lakeway, our teams combine careful handling with clear, timed communication for homes and businesses that need dependable execution.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
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
