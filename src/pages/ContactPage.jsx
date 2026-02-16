import { SEO } from '../components/SEO';
import { ContactForm } from '../components/ContactForm';
import { site } from '../data/site';

export function ContactPage() {
  const contactInfo = [
    { label: 'Phone', value: site.phone.display, href: `tel:${site.phone.digits}` },
    { label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { label: 'Hours', value: site.hours.summary },
    {
      label: 'Address',
      value: `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`,
    },
  ];

  return (
    <>
      <SEO
        canonical="/contact"
        title="Contact Us | Get a Quote"
        description={`Contact our Austin moving company for packing services, local moves, long-distance moving, and storage solutions.`}
        keywords="Austin movers, moving company, packing services, storage solutions, contact quote"
      />

      <section className="section">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="subtle-badge">Contact / Quote</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900">Get in touch</h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
              Reach us for scheduling, service scope review, packing help, or storage planning.
              We respond with a practical plan and a guaranteed quote.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-3 rounded-2xl border border-slate-200 p-5">
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

            <div className="card-soft p-5">
              <h2 className="mb-4 text-xl font-semibold text-slate-900">Send a request</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
