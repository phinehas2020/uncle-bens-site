import { SEO } from '../components/SEO';
import { ButtonLink } from '../components/Button';

const services = [
    {
        id: 'residential',
        title: 'Residential Moving',
        description:
            'Whether you are moving to a new home locally or long distance, we have the expertise and equipment to handle any move. Our experienced professionals make your move stress-free and efficient.',
        features: [
            'Local and long-distance moves',
            'Furniture disassembly and reassembly',
            'Blanket wrapping for all furniture',
            'Floor and wall protection',
            'Loading and unloading',
            'Free on-site or online quotes',
        ],
        pricing: 'Contact us for a free guaranteed quote',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    },
    {
        id: 'commercial',
        title: 'Commercial Moving',
        description:
            'Minimize business disruption with expertly coordinated office and commercial relocations. We work around your schedule to get you moved and operational quickly.',
        features: [
            'Office relocations',
            'After-hours and weekend moves',
            'IT equipment handling',
            'Workstation setup',
            'Secure document transport',
            'Project coordination',
        ],
        pricing: 'Custom quotes based on scope',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    },
    {
        id: 'packing',
        title: 'Packing and Unpacking',
        description:
            'We use high-quality packing materials and techniques to protect your items during transport. Our team can handle full packing, partial packing, and unpacking services.',
        features: [
            'Full-service packing',
            'Partial packing available',
            'High-quality packing materials',
            'Fragile item specialists',
            'Unpacking services',
            'Custom crating available',
        ],
        pricing: 'Included with full-service or add-on',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    },
    {
        id: 'storage',
        title: 'Storage Solutions',
        description:
            'Short-term and long-term storage solutions for your convenience. Our secure storage facility is monitored 24/7 for your peace of mind.',
        features: [
            '24/7 security monitoring',
            'Climate-controlled options',
            'Short-term storage',
            'Long-term storage',
            'Flexible access',
            'Pickup and delivery available',
        ],
        pricing: 'Contact us for storage rates',
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80',
    },
    {
        id: 'specialty',
        title: 'Specialty Moving',
        description:
            'Expert handling for items that require special care. Pianos, antiques, artwork, and other specialty items are handled with expertise and the right equipment.',
        features: [
            'Piano moving',
            'Antique handling',
            'Artwork transport',
            'Large item moving',
            'Fragile items',
            'Specialty equipment',
        ],
        pricing: 'Specialty items quoted individually',
        image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80',
    },
    {
        id: 'labor',
        title: 'Loading and Unloading',
        description:
            'Already have a truck or pod? Our professional movers can handle the heavy lifting. Perfect for DIY moves or when you just need an extra hand.',
        features: [
            'Load/unload trucks',
            'Load/unload pods',
            'Hourly labor rates',
            'In-home furniture moving',
            'Rearranging services',
            'Experienced crews',
        ],
        pricing: 'Hourly rates available',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    },
];

// FAQ structured data for SEO
const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What services do you offer?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'We offer a wide range of moving services, including packing and unpacking, loading and unloading, local and long-distance moving, and specialty moving services for items like pianos, antiques, and artwork.',
            },
        },
        {
            '@type': 'Question',
            name: 'What areas do you serve?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'We serve the Austin area and surrounding communities, including Georgetown, Round Rock, Burnet, Cedar Park, Kyle, Jarrell, Marble Falls, Lakeway, Buda, Leander, Manor, and Pflugerville.',
            },
        },
        {
            '@type': 'Question',
            name: 'How do you ensure the safety of my belongings during the move?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'We take great care to ensure the safety of your belongings during the move. We use high-quality packing materials and techniques to protect your items during transport, and our experienced movers are trained to handle your belongings with care.',
            },
        },
        {
            '@type': 'Question',
            name: 'Do you offer storage solutions?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, we offer short-term and long-term storage solutions for your convenience. Our secure storage facility is monitored 24/7 for your peace of mind.',
            },
        },
        {
            '@type': 'Question',
            name: 'How much does a move typically cost?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The cost of a move depends on several factors, including the distance of the move, the size of your home or office, and the services you require. We offer competitive pricing and will provide you with a detailed, guaranteed estimate before your move with no hidden fees.',
            },
        },
    ],
};

export function ServicesPage() {
    return (
        <>
            <SEO
                title="Moving Services"
                description="Professional moving services in Austin and Round Rock, TX. Residential and commercial moving, packing, storage, and specialty item handling. Licensed (TXDMV #006027218C), insured, and trusted for 19 years."
                canonical="/services"
            />

            {/* Hero */}
            <section className="bg-charcoal text-bone pt-32 pb-20 lg:pt-40 lg:pb-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <span className="text-xs font-semibold tracking-[0.25em] text-amber uppercase block mb-4">
                        Our Services
                    </span>
                    <h1 className="text-balance text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 max-w-3xl">
                        Complete moving solutions for Central Texas
                    </h1>
                    <p className="text-pretty text-bone/70 text-lg lg:text-xl max-w-2xl leading-relaxed">
                        From local apartment moves to long-distance relocations, we have the experience, equipment, and trained crews to handle your move with care.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-20 lg:py-28 bg-bone">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="space-y-20 lg:space-y-28">
                        {services.map((service, index) => (
                            <article
                                key={service.id}
                                id={service.id}
                                className="scroll-mt-24"
                            >
                                <div
                                    className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                                        }`}
                                >
                                    {/* Content */}
                                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                                        <h2 className="text-balance text-2xl lg:text-3xl font-bold text-charcoal mb-4">
                                            {service.title}
                                        </h2>
                                        <p className="text-pretty text-warm-gray text-lg leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                                            {service.features.map((feature, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-center gap-3 text-charcoal"
                                                >
                                                    <svg
                                                        className="size-5 text-navy shrink-0"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Pricing */}
                                        <p className="text-sm text-warm-gray mb-6">
                                            <span className="font-semibold text-charcoal">Pricing:</span>{' '}
                                            {service.pricing}
                                        </p>

                                        <ButtonLink to="/quote">Get a Free Quote</ButtonLink>
                                    </div>

                                    {/* Image */}
                                    <div
                                        className={`aspect-[4/3] bg-cream overflow-hidden ${index % 2 === 1 ? 'lg:col-start-1' : ''
                                            }`}
                                    >
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 lg:py-28 bg-cream">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <h2 className="text-balance text-3xl lg:text-4xl font-bold text-charcoal mb-12 text-center">
                        Frequently asked questions
                    </h2>

                    <dl className="space-y-8">
                        {faqSchema.mainEntity.map((faq, index) => (
                            <div key={index} className="border-b border-border pb-8">
                                <dt className="text-lg font-semibold text-charcoal mb-3">
                                    {faq.name}
                                </dt>
                                <dd className="text-pretty text-warm-gray leading-relaxed">
                                    {faq.acceptedAnswer.text}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 lg:py-28 bg-navy text-bone text-center">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <h2 className="text-balance text-3xl lg:text-4xl font-bold mb-6">
                        Ready to get started?
                    </h2>
                    <p className="text-bone/70 text-lg mb-8">
                        Contact us today for your own free guaranteed moving quote.
                    </p>
                    <ButtonLink
                        to="/quote"
                        size="lg"
                        className="bg-bone text-charcoal hover:bg-bone/90"
                    >
                        Get Your Free Quote
                    </ButtonLink>
                </div>
            </section>

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
