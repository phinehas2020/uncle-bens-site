import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { useEffect, useState } from 'react';
import { site } from '../data/site';

export function ContactPage() {
    const [formState, setFormState] = useState('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const isDirty = Object.values(formData).some((value) => String(value).trim() !== '');

    useEffect(() => {
        if (!isDirty) return undefined;
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = '';
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [isDirty]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('submitting');
        setTimeout(() => {
            setFormState('success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 1500);
    };

    const inputClasses =
        'w-full px-4 py-3 bg-bone border border-border text-charcoal placeholder:text-warm-gray focus:border-navy transition-colors duration-150';

    return (
        <>
            <SEO
                title="Contact Us"
                description={`Contact ${site.name} in ${site.address.city}, ${site.address.region}. Call ${site.phone.display} for a free moving quote. Serving Austin, Round Rock, Georgetown, Cedar Park, and all of Central Texas.`}
                canonical="/contact"
            />

            {/* Hero */}
            <section className="bg-charcoal text-bone pt-32 pb-16 lg:pt-40 lg:pb-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <span className="text-xs font-semibold tracking-[0.25em] text-amber uppercase block mb-4">
                        Contact Us
                    </span>
                    <h1 className="text-balance text-4xl lg:text-5xl font-bold mb-6 max-w-2xl">
                        Get in Touch
                    </h1>
                    <p className="text-pretty text-bone/70 text-lg max-w-xl">
                        Have questions about your move? We are here to help. Reach out by phone, email,
                        or the contact form below.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 lg:py-24 bg-bone">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-charcoal mb-8">
                                How to reach us
                            </h2>

                            <div className="space-y-8">
                                {/* Phone */}
                                <div className="flex gap-4">
                                    <div className="size-12 bg-navy/10 rounded-full flex items-center justify-center shrink-0">
                                        <svg aria-hidden="true" className="size-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-charcoal mb-1">Phone</h3>
                                        <a
                                            href={`tel:${site.phone.digits}`}
                                            className="text-lg text-navy font-medium hover:underline"
                                        >
                                            {site.phone.display}
                                        </a>
                                        <p className="text-sm text-warm-gray mt-1">{site.hours.summary}</p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex gap-4">
                                    <div className="size-12 bg-navy/10 rounded-full flex items-center justify-center shrink-0">
                                        <svg aria-hidden="true" className="size-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-charcoal mb-1">Office</h3>
                                        <address className="not-italic text-warm-gray">
                                            {site.address.street}<br />
                                            {site.address.city}, {site.address.region} {site.address.postalCode}
                                        </address>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex gap-4">
                                    <div className="size-12 bg-navy/10 rounded-full flex items-center justify-center shrink-0">
                                        <svg aria-hidden="true" className="size-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-charcoal mb-1">Business Hours</h3>
                                        <div className="text-warm-gray space-y-1 text-sm">
                                            {site.hours.display.map((line) => (
                                                <p key={line}>{line}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* License */}
                                <div className="flex gap-4">
                                    <div className="size-12 bg-navy/10 rounded-full flex items-center justify-center shrink-0">
                                        <svg aria-hidden="true" className="size-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-charcoal mb-1">Licensed & Insured</h3>
                                        <p className="text-warm-gray text-sm">{site.license}</p>
                                        <p className="text-warm-gray text-sm mt-1">
                                            You may reach TXDMV at {site.tdmvPhone}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Service Area */}
                            <div className="mt-12 pt-8 border-t border-border">
                                <h3 className="font-semibold text-charcoal mb-4">Service Area</h3>
                                <p className="text-pretty text-warm-gray mb-4">
                                    Proudly serving Austin and surrounding communities:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {site.serviceAreas.map((city) => (
                                        <span
                                            key={city}
                                            className="px-3 py-1 bg-cream text-sm text-charcoal rounded-full"
                                        >
                                            {city}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-cream p-8 lg:p-10 border border-border">
                            <h2 className="text-xl font-semibold text-charcoal mb-6">
                                Send Us a Message
                            </h2>

                            {formState === 'success' ? (
                                <div className="text-center py-12" role="status" aria-live="polite">
                                    <div className="size-16 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg aria-hidden="true"
                                            className="size-8 text-navy"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-charcoal mb-2">
                                        Message Sent!
                                    </h3>
                                    <p className="text-warm-gray">
                                        We will get back to you as soon as possible.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            autoComplete="name"
                                            required
                                            className={inputClasses}
                                        />
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                autoComplete="email"
                                                spellCheck={false}
                                                required
                                                className={inputClasses}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                                                Phone
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                autoComplete="tel"
                                                inputMode="tel"
                                                className={inputClasses}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            autoComplete="off"
                                            required
                                            className={inputClasses}
                                        >
                                            <option value="">Select a Subject…</option>
                                            <option value="quote">Request a Quote</option>
                                            <option value="existing">Existing Move Question</option>
                                            <option value="feedback">Feedback</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            autoComplete="off"
                                            required
                                            rows={5}
                                            className={`${inputClasses} resize-none`}
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full"
                                        disabled={formState === 'submitting'}
                                    >
                                        {formState === 'submitting' ? 'Sending…' : 'Send Message'}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
