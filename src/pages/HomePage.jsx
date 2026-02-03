import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { Quote } from '../components/Quote';
import { site, yearsInBusiness } from '../data/site';

export function HomePage() {
    return (
        <>
            <SEO
                description={`${site.name} - your trusted moving partner in Austin and Round Rock, TX for over ${yearsInBusiness} years. Professional residential and commercial moving, packing, and storage. Free guaranteed quotes. ${site.license}. Call ${site.phone.display}.`}
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
