const services = [
    {
        number: '01',
        title: 'Residential Moving',
        description:
            'Full-service home relocation with white-glove care. From starter apartments to luxury estates, we protect what matters most.',
        features: ['Furniture disassembly & reassembly', 'Blanket wrapping for all items', 'Floor & wall protection'],
    },
    {
        number: '02',
        title: 'Commercial Moving',
        description:
            'Minimize downtime with expertly coordinated office and business moves. We work around your schedule.',
        features: ['After-hours availability', 'IT equipment handling', 'Workstation setup'],
    },
    {
        number: '03',
        title: 'Packing Services',
        description:
            'Professional packing by trained specialists. We use premium materials to ensure your belongings arrive exactly as they left.',
        features: ['Custom crating available', 'Fragile item specialists', 'Unpacking services'],
    },
    {
        number: '04',
        title: 'Storage Solutions',
        description:
            'Climate-controlled storage facilities with 24/7 security. Flexible short and long-term options.',
        features: ['Climate controlled units', 'Monthly or long-term leases', 'Inventory management'],
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 lg:py-32 bg-cream">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-2xl mb-16 lg:mb-20">
                    <span className="text-xs font-semibold tracking-[0.25em] text-amber uppercase block mb-4">
                        What We Do
                    </span>
                    <h2 className="text-balance text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                        Comprehensive moving services
                    </h2>
                    <p className="text-pretty text-warm-gray text-lg">
                        Every move is unique. We offer flexible services tailored to your
                        specific needs and budget.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                    {services.map((service) => (
                        <article
                            key={service.number}
                            className="bg-bone p-8 lg:p-10 border border-border group hover:border-charcoal/20 transition-colors duration-150"
                        >
                            {/* Number */}
                            <span className="text-xs font-bold text-amber tracking-wider mb-4 block">
                                {service.number}
                            </span>

                            {/* Title */}
                            <h3 className="text-xl lg:text-2xl font-semibold text-charcoal mb-3">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-pretty text-warm-gray mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2">
                                {service.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 text-sm text-charcoal"
                                    >
                                        <svg
                                            className="size-4 text-navy shrink-0"
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
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
