const features = [
    {
        icon: (
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Fully Licensed & Insured',
        description: 'TXDMV #006027218C. Your belongings are protected from start to finish.',
    },
    {
        icon: (
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: 'Experienced Professionals',
        description: 'Our team of friendly and professional movers will work with you every step of the way.',
    },
    {
        icon: (
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Guaranteed Quotes',
        description: 'Upfront and honest pricing. No hidden or last-minute charges for little extras.',
    },
    {
        icon: (
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
        title: 'Quality Materials',
        description: 'We use high-quality packing materials and equipment to ensure your items are protected.',
    },
];

export function About() {
    return (
        <section id="about" className="py-24 lg:py-32 bg-charcoal text-bone">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Content */}
                    <div>
                        <span className="text-xs font-semibold tracking-[0.25em] text-amber uppercase block mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="text-balance text-3xl lg:text-4xl font-bold mb-6">
                            19 years of trusted service
                        </h2>
                        <p className="text-pretty text-bone/70 text-lg leading-relaxed mb-8">
                            As a locally owned and operated moving company, we take pride in serving our community. We have built a reputation for providing exceptional service and personalized attention to each of our customers.
                        </p>
                        <p className="text-pretty text-bone/70 leading-relaxed">
                            We understand that your belongings are valuable and precious, which is why we take great care in handling them. We are fully licensed and insured, so you can have peace of mind knowing that your belongings are in safe hands.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="group">
                                <div className="text-amber mb-4">{feature.icon}</div>
                                <h3 className="font-semibold text-bone mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-bone/60 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
