import { ButtonLink } from './Button';

export function Hero() {
    return (
        <section className="relative min-h-dvh bg-charcoal text-bone flex items-center">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=2574&auto=format&fit=crop)',
                }}
            >
                <div className="absolute inset-0 bg-charcoal/75" />
            </div>

            {/* Content */}
            <div className="relative z-above mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
                <div className="max-w-3xl">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs font-semibold tracking-[0.25em] text-amber uppercase">
                            Round Rock & Austin, TX
                        </span>
                        <span className="w-12 h-px bg-amber/50" />
                        <span className="text-xs font-medium tracking-wider text-bone/60">
                            19 Years of Service
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                        Move with
                        <span className="block text-amber">Ease</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-pretty text-lg lg:text-xl text-bone/70 max-w-xl mb-10 leading-relaxed">
                        Trusted and experienced moving professionals serving Austin, Round Rock, and Central Texas. We make your move stress-free and efficient.
                    </p>

                    {/* CTA Group */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <ButtonLink to="/quote" size="lg">
                            Get Your Free Quote
                        </ButtonLink>
                        <ButtonLink
                            href="tel:5123009543"
                            variant="secondary"
                            size="lg"
                            className="border-bone/30 text-bone hover:bg-bone hover:text-charcoal"
                        >
                            Call (512) 300-9543
                        </ButtonLink>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap items-center gap-6 lg:gap-8 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-amber text-lg">★★★★★</span>
                            <span className="text-bone/60">5-Star Reviews</span>
                        </div>
                        <span className="hidden sm:block w-px h-4 bg-bone/20" />
                        <span className="text-bone/60">Licensed & Insured</span>
                        <span className="hidden sm:block w-px h-4 bg-bone/20" />
                        <span className="text-bone/60">TXDMV #006027218C</span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-bone/40">
                <svg
                    className="size-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}
