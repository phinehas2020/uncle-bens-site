import { About } from '../components/About';
import { AustinTopMoversTeaser } from '../components/AustinTopMoversTeaser';
import { Hero } from '../components/Hero';
import { Quote } from '../components/Quote';
import { SEO } from '../components/SEO';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
import { site, yearsInBusiness } from '../data/site';

export function HomePage() {
  return (
    <>
      <SEO
        canonical="/"
        description={`${site.name} delivers premium moving, packing, and storage services across Central Texas. Trusted for ${yearsInBusiness}+ years with guaranteed quotes and white-glove crews.`}
      />

      <Hero />
      <AustinTopMoversTeaser />
      <Services />
      <About />
      <Testimonials />
      <Quote />
    </>
  );
}
