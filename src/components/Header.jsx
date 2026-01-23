import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

const navLinks = [
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
];

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Check if we're on the home page for transparent header
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    // Determine if header should be transparent (only on home page, not scrolled)
    const isTransparent = isHomePage && !scrolled;

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-header transition-all duration-200',
                isTransparent
                    ? 'bg-transparent'
                    : 'bg-bone/95 backdrop-blur-sm border-b border-border shadow-sm'
            )}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <nav className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex flex-col">
                        <span
                            className={cn(
                                'text-lg font-bold tracking-[0.12em] transition-colors duration-200',
                                isTransparent ? 'text-bone' : 'text-charcoal'
                            )}
                        >
                            QUALITY
                        </span>
                        <span className="text-[10px] font-semibold tracking-[0.15em] text-amber uppercase">
                            Moving and Storage
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={cn(
                                    'text-sm font-medium tracking-wide transition-colors duration-150',
                                    isTransparent
                                        ? 'text-bone/90 hover:text-bone'
                                        : 'text-charcoal hover:text-navy',
                                    location.pathname === link.to &&
                                    (isTransparent ? 'text-bone' : 'text-navy')
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="tel:5123009543"
                            className={cn(
                                'text-sm font-semibold tracking-wide transition-colors duration-150',
                                isTransparent ? 'text-bone' : 'text-charcoal'
                            )}
                        >
                            (512) 300-9543
                        </a>
                        <Link
                            to="/quote"
                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide uppercase bg-navy text-bone hover:bg-navy-light transition-colors duration-150"
                        >
                            Free Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={cn(
                            'lg:hidden p-2 -mr-2',
                            isTransparent ? 'text-bone' : 'text-charcoal'
                        )}
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        <svg
                            className="size-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-bone border-t border-border py-4 -mx-6 px-6">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={cn(
                                        'text-charcoal font-medium py-2',
                                        location.pathname === link.to && 'text-navy'
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <a
                                href="tel:5123009543"
                                className="text-charcoal font-semibold py-2"
                            >
                                (512) 300-9543
                            </a>
                            <Link
                                to="/quote"
                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide uppercase bg-navy text-bone hover:bg-navy-light transition-colors duration-150 w-full text-center mt-2"
                            >
                                Free Quote
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
