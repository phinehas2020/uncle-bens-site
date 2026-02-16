import { SEO } from '../components/SEO';
import { PageBottomCta } from '../components/PageBottomCta';
import { ContactForm } from '../components/ContactForm';
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
    ? 'Get a Quote | Austin TX Movers | Quality Moving & Storage'
    : 'Contact Us | Austin TX Movers | Quality Moving & Storage';
  const pageDescription = isQuote
    ? `Request a free quote from Austin TX movers for local moving, long-distance moving, packing services, and storage solutions in Round Rock, Cedar Park, Pflugerville, and Lakeway.`
    : `Contact our Austin TX movers for local moving, long-distance moving, packing services, and storage solutions in Round Rock, Cedar Park, Pflugerville, and Lakeway.`;

  return (
    <>
      <SEO
        canonical={isQuote ? '/quote' : '/contact'}
        title={pageTitle}
        description={pageDescription}
        keywords="Austin TX Movers, contact, moving company, packing services, storage solutions"
      />

      <section className="section">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="subtle-badge">Contact / Quote</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900">
              {isQuote ? 'Get a quote' : 'Get in touch'}
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
              Reach us for scheduling, service scope review, packing help, or storage planning.
              We respond with a practical plan and a guaranteed quote.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-3 rounded-2xl border border-slate-200 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Fast response details</p>
              {contactInfo.map((item) => (
                <div className="text-sm" key={item.label}>
                  <p className="font-semibold text-slate-900">{item.label}</p>
                  {item.href ? (
                    <a className="text-slate-600 hover:text-slate-900" href={item.href}>
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-600">{item.value}</p>
                  )}
                </div>
              ))}
              <div className="pt-1 text-xs text-slate-500">
                <p className="font-semibold text-slate-700">Service areas</p>
                <p>{site.serviceAreas.join(', ')}</p>
              </div>
            </div>

            <div className="card-soft border-slate-300 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Get a custom quote</p>
              <h2 className="mb-3 mt-2 text-2xl font-semibold text-slate-900">Send a request</h2>
              <p className="mb-4 text-sm text-slate-600">
                Lock in your move date and service mix with one form. We will confirm next steps quickly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <PageBottomCta
        heading={isQuote ? 'Ready to move forward?' : 'Need to get started quickly?'}
        text="Message us with your dates and service needs so we can return with a practical quote and a clear plan."
      />
    </>
  );
}
