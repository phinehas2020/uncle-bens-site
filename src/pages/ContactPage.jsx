import { ContactForm } from '../components/ContactForm';
import { PageBottomCta } from '../components/PageBottomCta';
import { SEO } from '../components/SEO';
import { site } from '../data/site';

export function ContactPage({ variant = 'contact' } = {}) {
  const contactInfo = [
    { label: 'Phone', value: site.phone.display, href: `tel:${site.phone.digits}` },
    { label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { label: 'Hours', value: site.hours.summary },
    {
      label: 'Address',
      value: `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`,
    },
  ];

  const isQuote = variant === 'quote';
  const pageTitle = isQuote
    ? 'Request an Estimate | Austin TX Movers | Quality Moving & Storage'
    : 'Contact Us | Austin TX Movers | Quality Moving & Storage';
  const pageDescription = isQuote
    ? 'Request a written estimate for local moving, long-distance moving, packing, or storage in Austin, Round Rock, Cedar Park, Pflugerville, and Lakeway.'
    : 'Contact our Austin-area moving team about local moving, long-distance moving, packing, and storage services.';

  return (
    <>
      <SEO
        canonical={isQuote ? '/quote' : '/contact'}
        title={pageTitle}
        description={pageDescription}
        keywords="Austin TX Movers, contact, moving company, packing services, storage solutions"
      />

      <section className="section">
        <div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="max-w-md">
            <p className="text-sm text-slate-600">{isQuote ? 'Estimate' : 'Contact'}</p>
            <h1 className="mt-4 text-balance text-4xl text-slate-900 sm:text-5xl">
              {isQuote ? 'Request an estimate' : 'Get in touch'}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              Tell us the route, the size of the move, and anything unusual like stairs, elevators,
              pianos, or storage timing. We will follow up with next steps and pricing details.
            </p>

            <div className="mt-8 grid gap-px overflow-hidden rounded-[1.5rem] bg-slate-200">
              {contactInfo.map((item) => (
                <div className="bg-white p-4" key={item.label}>
                  <p className="text-sm font-medium text-slate-600">{item.label}</p>
                  {item.href ? (
                    <a className="mt-1 block text-base text-slate-900 hover:text-accent" href={item.href}>
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-base text-slate-900">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-[1.5rem] border border-slate-200 bg-[#faf8f5] p-4">
              <p className="text-sm font-medium text-slate-600">Service areas</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {site.serviceAreas.join(', ')}
              </p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl text-slate-900">Tell us about the move</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
              The more detail you share here, the more accurate the estimate will be.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <PageBottomCta
        heading={isQuote ? 'Want to talk it through first?' : 'Need an estimate this week?'}
        text="Call or send the form. We will help you sort out timing, packing, storage, and anything else that could affect the move."
      />
    </>
  );
}
