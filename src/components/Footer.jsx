import { Link } from 'react-router-dom';
import { navigation, site } from '../data/site';
import { ButtonLink } from './Button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-shell">
      <div className="layout-shell">
        <div className="footer-grid">
          <div className="space-y-4">
            <p className="footer-title">Quality Crafted Moves</p>
            <h3 className="font-family-display text-3xl text-pearl">Built for real homes and real timelines.</h3>
            <p className="text-sm text-cloud/85">{site.tagline}</p>
            <ButtonLink href={`tel:${site.phone.digits}`} size="sm" variant="primary">
              {site.phone.display}
            </ButtonLink>
          </div>

          <div>
            <p className="footer-title">Navigation</p>
            <ul className="space-y-3 text-sm text-cloud">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link className="hover:text-white transition-colors" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-title">Contact</p>
            <address className="not-italic space-y-3 text-sm text-cloud">
              <p>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </p>
              <p>
                <a className="hover:text-white transition-colors" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              <p>{site.hours.summary}</p>
            </address>
          </div>

          <div>
            <p className="footer-title">Service area</p>
            <p className="text-sm text-cloud/85">{site.serviceAreas.join(' • ')}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-fog">
              {site.reviewSummary}
            </p>
          </div>
        </div>

        <div className="footer-bottom text-xs flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} {site.name}. All rights reserved.</p>
          <p>TXDMV {site.license}</p>
          <p>TXDMV Contact: {site.tdmvPhone}</p>
        </div>
      </div>
    </footer>
  );
}
