import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { Quote } from '../components/Quote';

export function HomePage() {
    return (
        <>
            <SEO
                description="Quality Moving and Storage - your trusted moving partner in Austin and Round Rock, TX for 19 years. Professional residential and commercial moving, packing, and storage. Free guaranteed quotes. TXDMV #006027218C. Call (512) 300-9543."
                canonical="/"
            />
            <Hero />
            <Services />
            <About />
            <Testimonials />
            <Quote />
        </>
    );
}
