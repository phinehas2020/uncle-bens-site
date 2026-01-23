const testimonials = [
    {
        quote:
            "Best moving experience I've ever had. The crew was professional, careful, and actually showed up on time. They handled our antique furniture like it was their own.",
        author: 'Sarah M.',
        location: 'Westlake Hills',
        rating: 5,
    },
    {
        quote:
            "After a nightmare experience with another company, Quality was a breath of fresh air. Fair pricing, great communication, and zero surprises on moving day.",
        author: 'Michael T.',
        location: 'Downtown Austin',
        rating: 5,
    },
    {
        quote:
            "They moved our entire office over a weekend with minimal disruption. Our team was up and running Monday morning. Highly recommend for commercial moves.",
        author: 'Jennifer R.',
        location: 'Mueller',
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 lg:py-32 bg-bone">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
                    <span className="text-xs font-semibold tracking-[0.25em] text-amber uppercase block mb-4">
                        Customer Reviews
                    </span>
                    <h2 className="text-balance text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                        What our customers say
                    </h2>
                    <p className="text-pretty text-warm-gray text-lg">
                        Don't just take our word for it. Here's what Austin residents have
                        to say about working with us.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <article
                            key={index}
                            className="bg-cream p-8 border border-border"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-6 text-amber">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <span key={i} className="text-lg">★</span>
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="text-pretty text-charcoal leading-relaxed mb-6">
                                "{testimonial.quote}"
                            </blockquote>

                            {/* Author */}
                            <footer>
                                <div className="font-semibold text-charcoal">
                                    {testimonial.author}
                                </div>
                                <div className="text-sm text-warm-gray">
                                    {testimonial.location}
                                </div>
                            </footer>
                        </article>
                    ))}
                </div>

                {/* Google Reviews CTA */}
                <div className="text-center mt-12">
                    <p className="text-warm-gray mb-4">
                        <span className="font-semibold text-charcoal">500+</span> 5-star
                        reviews on Google
                    </p>
                    <a
                        href="https://www.google.com/search?q=quality+moving+austin+reviews"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-navy font-medium hover:underline underline-offset-4"
                    >
                        Read all reviews on Google
                        <svg
                            className="size-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
