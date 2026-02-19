import { Link } from 'react-router-dom';
import { navigation, site } from '../data/site';
import { ButtonLink } from './Button';
import { Truck, MapPin, Mail, Clock } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] bg-accent/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="site-container relative z-10 pt-20 pb-12">
        <div className="grid gap-12 lg:grid-cols-4 mb-16">
          <div className="space-y-6 lg:col-span-2">
            <div className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/20">
                <Truck className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">{site.name}</span>
            </div>
            <p className="max-w-md text-base leading-relaxed text-slate-400">{site.tagline}</p>
            <div className="pt-2">
              <ButtonLink className="bg-white/5 border-white/10 hover:bg-white/10 text-white shadow-none" size="sm" variant="secondary" href={`tel:${site.phone.digits}`}>
                {site.phone.display}
              </ButtonLink>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Navigation</p>
            <ul className="space-y-3 font-medium text-slate-400">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link className="hover:text-accent transition-colors" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Contact & Hours
            </p>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <address className="not-italic">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region} {site.address.postalCode}
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a className="hover:text-white transition-colors" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p>{site.hours.summary}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>&copy; {currentYear} {site.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">{site.license}</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">{site.tdmvPhone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
