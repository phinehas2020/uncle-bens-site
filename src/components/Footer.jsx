import { Link } from 'react-router-dom';
import { navigation, site } from '../data/site';
import { ButtonLink } from './Button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="texture-lines relative mt-14 border-t border-gold/25 bg-obsidian/78 py-14 backdrop-blur-md">
      <div className="layout-container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <p className="eyebrow">Quality Crafted Moves</p>
            <h2 className="font-family-display text-3xl text-white">
              Move with a crew that sweats the details.
            </h2>
            <p className="text-sm text-cloud/85">
              {site.tagline}
            </p>
            <ButtonLink href={`tel:${site.phone.digits}`} size="sm" variant="primary">
              {site.phone.display}
            </ButtonLink>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm text-cloud">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link className="transition-colors hover:text-white" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Contact
            </h3>
            <address className="not-italic space-y-3 text-sm text-cloud">
              <p>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </p>
              <p>
                <a className="transition-colors hover:text-white" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              <p>{site.hours.summary}</p>
            </address>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
              Service Area
            </h3>
            <p className="text-sm text-cloud/85">
              {site.serviceAreas.slice(0, 8).join(' • ')}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-fog/75">
              {site.reviewSummary}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-gold/20 pt-6 text-xs text-fog/85 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} {site.name}. All rights reserved.
          </p>
          <p>{site.license}</p>
          <p>TXDMV Contact: {site.tdmvPhone}</p>
        </div>
      </div>
    </footer>
  );
}
