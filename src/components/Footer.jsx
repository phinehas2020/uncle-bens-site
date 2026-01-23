import { Link } from 'react-router-dom';

const footerLinks = {
    services: [
        { label: 'Residential Moving', to: '/services#residential' },
        { label: 'Commercial Moving', to: '/services#commercial' },
        { label: 'Packing Services', to: '/services#packing' },
        { label: 'Storage Solutions', to: '/services#storage' },
    ],
    company: [
        { label: 'About Us', to: '/about' },
        { label: 'Contact', to: '/contact' },
        { label: 'Free Quote', to: '/quote' },
    ],
};

const serviceAreas = [
    'Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Leander',
    'Lakeway', 'Buda', 'Kyle', 'Manor', 'Pflugerville'
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-charcoal text-bone">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="inline-block mb-6">
                            <span className="text-lg font-bold tracking-[0.12em] block">
                                QUALITY
                            </span>
                            <span className="text-[10px] font-semibold tracking-[0.15em] text-amber uppercase">
                                Moving and Storage
                            </span>
                        </Link>
                        <p className="text-sm text-bone/60 leading-relaxed mb-6">
                            Your trusted moving partner in Austin and Central Texas for over 19 years. Licensed, insured, and committed to making your move stress-free.
                        </p>
                        <a
                            href="tel:5123009543"
                            className="text-lg font-semibold hover:text-amber transition-colors"
                        >
                            (512) 300-9543
                        </a>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xs font-semibold tracking-[0.2em] text-amber uppercase mb-4">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-bone/60 hover:text-bone transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-xs font-semibold tracking-[0.2em] text-amber uppercase mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-bone/60 hover:text-bone transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-semibold tracking-[0.2em] text-amber uppercase mb-4">
                            Contact
                        </h4>
                        <address className="not-italic text-sm text-bone/60 space-y-3">
                            <p>1101 N Industrial Blvd<br />Round Rock, TX 78681</p>
                            <p>
                                <a
                                    href="tel:5123009543"
                                    className="hover:text-bone transition-colors"
                                >
                                    (512) 300-9543
                                </a>
                            </p>
                            <p>Mon-Sat 9am-5pm</p>
                        </address>
                    </div>
                </div>

                {/* Service Areas */}
                <div className="border-t border-bone/10 mt-12 pt-8">
                    <h4 className="text-xs font-semibold tracking-[0.2em] text-amber uppercase mb-4">
                        Proudly Serving
                    </h4>
                    <p className="text-sm text-bone/50">
                        {serviceAreas.join(' • ')}
                    </p>
                </div>

                {/* Bottom */}
                <div className="border-t border-bone/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-bone/40 text-center md:text-left">
                        © {currentYear} Quality Moving and Storage. All Rights Reserved. TXDMV #006027218C
                    </p>
                    <p className="text-xs text-bone/40">
                        You may reach TXDMV at (888) 368-4689
                    </p>
                </div>
            </div>
        </footer>
    );
}
