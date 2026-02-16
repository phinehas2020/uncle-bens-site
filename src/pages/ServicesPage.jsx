import { SEO } from '../components/SEO';
import { ServiceCard } from '../components/ServiceCard';
import { ButtonLink } from '../components/Button';
import { services, site } from '../data/site';

const coreServiceIds = new Set(['local-moving', 'packing', 'long-distance', 'storage']);
const coreServices = services.filter((service) => coreServiceIds.has(service.id));

export function ServicesPage() {
  return (
    <>
      <SEO
        canonical="/services"
        title="Services | Local, Long-Distance, Packing and Storage"
        description={`Moving services from ${site.name}: Austin movers for local moving, long-distance moving, packing services, and storage solutions in Central Texas.`
        }
        keywords="Austin movers, moving company, packing services, storage solutions, local moving, long-distance moving"
      />

      <section className="section">
        <div className="site-container max-w-2xl space-y-4">
          <h1 className="text-4xl font-semibold text-slate-900">Services</h1>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Pick the core support you need. We handle local and long-distance residential moves,
            packing services, and storage solutions, with optional office or specialty-item handling.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="grid gap-4 md:grid-cols-2">
            {coreServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-slate-900">Additional services</h2>
            <p className="mt-2 text-sm text-slate-600">
              Commercial relocation and specialty item handling are available when your move includes
              retail, office, pianos, antiques, or oversized furniture.
            </p>
            <div className="mt-4">
              <ButtonLink size="lg" to="/contact" variant="primary">
                Get a custom quote
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
