import { SEO } from '../components/SEO';
import { ButtonLink } from '../components/Button';
import { site, yearsInBusiness } from '../data/site';

const milestones = [
    { year: String(site.yearFounded), event: 'Founded in Round Rock with a commitment to doing things right' },
    { year: '2010', event: 'Expanded service area to cover all of Central Texas' },
    { year: '2015', event: 'Opened storage facility with 24/7 security monitoring' },
    { year: '2020', event: 'Expanded commercial moving division' },
    { year: String(new Date().getFullYear()), event: `Celebrating ${yearsInBusiness} years of service to Austin and Round Rock` },
];

export function AboutPage() {
    return (
        <>
            <SEO
                title="About Us"
                description={`Quality Moving and Storage has served Austin and Round Rock since ${site.yearFounded}. Family-owned, locally operated, and committed to making every move stress-free. Learn about our story and commitment to quality.`}
                canonical="/about"
            />

            {/* Hero */}
            <section className="bg-charcoal text-bone pt-32 pb-20 lg:pt-40 lg:pb-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <span className="text-xs font-semibold tracking-[0.25em] text-amber uppercase block mb-4">
                        About Us
                    </span>
                    <h1 className="text-balance text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 max-w-3xl">
                        Your trusted moving partner for {yearsInBusiness} years
                    </h1>
                    <p className="text-pretty text-bone/70 text-lg lg:text-xl max-w-2xl leading-relaxed">
                        Quality Moving and Storage is a locally owned and operated moving company serving Austin, Round Rock, and all of Central Texas.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="py-20 lg:py-28 bg-bone">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <h2 className="text-balance text-3xl lg:text-4xl font-bold text-charcoal mb-6">
                                Moving with Care
                            </h2>
                            <div className="space-y-4 text-pretty text-warm-gray leading-relaxed">
                                <p>
                                    Welcome to Quality Moving and Storage, your trusted moving partner in Austin, TX. Our team of experienced professionals is dedicated to making your move stress-free and efficient.
                                </p>
                                <p>
                                    Whether you are moving to a new home or office, locally or long distance, we have the expertise and equipment necessary to handle any move.
                                </p>
                                <p>
                                    We understand that moving can be a challenging and stressful experience, which is why we offer a wide range of moving services to meet your specific needs. Our services include packing, loading, unloading, unpacking, and storage solutions. We also offer specialty moving services for fragile items, pianos, and other large items.
                                </p>
                                <p>
                                    As a locally owned and operated moving company, we take pride in serving our community. We have been in business for over {yearsInBusiness} years, and we have built a reputation for providing exceptional service and personalized attention to each of our customers.
                                </p>
                            </div>
                        </div>
                        <div className="aspect-[4/3] bg-cream overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                                alt="Quality Moving crew at work"
                                className="w-full h-full object-cover"
                                width="800"
                                height="600"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 lg:py-28 bg-cream">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-balance text-3xl lg:text-4xl font-bold text-charcoal mb-12 text-center">
                        Our Commitment to You
                    </h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="text-center">
                            <div className="size-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg aria-hidden="true" className="size-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-charcoal mb-3">Transparency</h3>
                            <p className="text-pretty text-warm-gray">
                                We believe in transparency and communication. We provide upfront and honest pricing, and we keep you informed throughout the moving process.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="size-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg aria-hidden="true" className="size-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-charcoal mb-3">Guaranteed Quotes</h3>
                            <p className="text-pretty text-warm-gray">
                                We deliver free on-site or online quotes and we stand by them. A guaranteed quote means no hidden or last-minute charges.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="size-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg aria-hidden="true" className="size-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-charcoal mb-3">Care & Protection</h3>
                            <p className="text-pretty text-warm-gray">
                                Your belongings are valuable and precious. We use high-quality packing materials and equipment to ensure your items are protected. We are fully licensed and insured.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 lg:py-28 bg-charcoal text-bone">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <h2 className="text-balance text-3xl lg:text-4xl font-bold mb-12 text-center">
                        Our Journey
                    </h2>
                    <div className="space-y-8">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="flex gap-6">
                                <div className="text-amber font-bold text-lg tabular-nums w-16 shrink-0">
                                    {milestone.year}
                                </div>
                                <div className="text-bone/70">{milestone.event}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-20 lg:py-28 bg-bone">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-balance text-3xl lg:text-4xl font-bold text-charcoal mb-8 text-center">
                        Proudly Serving Central Texas
                    </h2>
                    <p className="text-center text-warm-gray mb-8 max-w-2xl mx-auto">
                        We serve the Austin area and surrounding communities throughout Central Texas.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {site.serviceAreas.map((area) => (
                            <span
                                key={area}
                                className="px-4 py-2 bg-cream text-charcoal font-medium rounded-full"
                            >
                                {area}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 lg:py-28 bg-navy text-bone text-center">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <h2 className="text-balance text-3xl lg:text-4xl font-bold mb-6">
                        Experience the Difference
                    </h2>
                    <p className="text-bone/70 text-lg mb-8">
                        Contact us today to schedule your move and experience the difference that our expertise and personalized attention can make.
                    </p>
                    <ButtonLink
                        to="/quote"
                        size="lg"
                        className="bg-bone text-charcoal hover:bg-bone/90"
                    >
                        Get a Free Quote
                    </ButtonLink>
                </div>
            </section>
        </>
    );
}
