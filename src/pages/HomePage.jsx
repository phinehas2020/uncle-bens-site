import { Hero } from '../components/Hero';
import { SEO } from '../components/SEO';
import { ServiceCard } from '../components/ServiceCard';
import { ReviewSection } from '../components/ReviewSection';
import { featuredServices, reviews, yearsInBusiness } from '../data/site';
import { PageBottomCta } from '../components/PageBottomCta';
import { ButtonLink } from '../components/Button';

const reasons = [
  {
    title: 'Written estimates, not guesses',
    text: 'Pricing is based on a walkthrough of your home. Labor, materials, and access factors are included before you approve anything.',
  },
  {
    title: 'Our crews, not subcontractors',
    text: "We don\u2019t broker your move to someone else. The crew that shows up is ours \u2014 trained, background-checked, and familiar with the route.",
  },
  {
    title: 'Floors and doors protected',
    text: 'Floor coverings and door guards go down before anything moves. Furniture gets padded wraps. You should not have to fix your house after a move.',
  },
  {
    title: 'Clear schedule, real updates',
    text: 'Confirmed arrival window, named crew, and text updates through the day. No sitting around wondering when someone will show up.',
  },
];

export function HomePage() {
  return (
    <>
      <SEO
        canonical="/"
        title="Austin TX Movers | Quality Moving & Storage | Local & Long-Distance"
        description={`Austin TX Movers with ${yearsInBusiness}+ years of field experience, offering moving services in Round Rock, Cedar Park, Pflugerville, Lakeway, and all of Austin. Quality Moving & Storage provides local and long-distance moving, packing services, and storage solutions.`}
        keywords="Austin TX Movers, Austin movers, moving company, packing services, storage solutions, Round Rock movers, Cedar Park moving"
      />

      <Hero />

      <section className="section-tight">
        <div className="site-container">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl text-slate-900 sm:text-4xl">
              Why people hire us over other Austin movers
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              Moving is stressful enough. These are the things our customers say made the
              difference.
            </p>
          </div>

          <dl className="mt-10 grid gap-8 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title}>
                <dt className="text-lg font-medium text-slate-900">{r.title}</dt>
                <dd className="mt-2 text-base leading-relaxed text-slate-700">{r.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section border-t border-slate-200 bg-white">
        <div className="site-container">
          <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-[#faf8f5] p-6 sm:p-8 lg:grid-cols-[1.05fr_0.8fr] lg:items-end lg:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-accent">Services</p>
              <h2 className="mt-3 text-balance font-sans text-4xl font-semibold tracking-tight text-slate-900 sm:text-[3.25rem]">
                What we handle every day
              </h2>
            </div>

            <div className="max-w-md lg:justify-self-end">
              <p className="text-lg leading-relaxed text-slate-700">
                Local moves, packing, storage, and long-distance routes. One estimate, one crew
                plan.
              </p>
              <div className="mt-6">
                <ButtonLink size="md" to="/services" variant="secondary">
                  See all services
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <ReviewSection reviews={reviews} />

      <PageBottomCta
        heading="Need help figuring out the move?"
        text="Send us the address, timing, and anything that needs extra care. We will tell you what the job requires and what it should cost."
      />
    </>
  );
}
