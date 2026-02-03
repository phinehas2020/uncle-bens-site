import { useEffect, useState } from 'react';
import { Button } from './Button';
import { site } from '../data/site';

export function Quote() {
    const [formState, setFormState] = useState('idle'); // idle, submitting, success
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        fromZip: '',
        toZip: '',
        moveDate: '',
        service: '',
        details: '',
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

        // Simulate form submission
        setTimeout(() => {
            setFormState('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                fromZip: '',
                toZip: '',
                moveDate: '',
                service: '',
                details: '',
            });
        }, 1500);
    };

    const inputClasses =
        'w-full px-4 py-3 bg-bone border border-border text-charcoal placeholder:text-warm-gray focus:border-navy transition-colors duration-150';

    return (
        <section id="quote" className="py-24 lg:py-32 bg-cream">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
                    {/* Content */}
                    <div>
                        <span className="text-xs font-semibold tracking-[0.25em] text-amber uppercase block mb-4">
                            Free Quote
                        </span>
                        <h2 className="text-balance text-3xl lg:text-4xl font-bold text-charcoal mb-6">
                            Get Your Free Guaranteed Quote
                        </h2>
                        <p className="text-pretty text-warm-gray text-lg leading-relaxed mb-8">
                            We deliver free on-site or online quotes and we stand by them. A guaranteed quote means you do not have to worry about hidden or last-minute charges. Contact us today for your own free guaranteed moving quote.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <div className="text-3xl font-bold text-navy">Free</div>
                                <div className="text-sm text-warm-gray">No Obligation Quote</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-navy">Guaranteed</div>
                                <div className="text-sm text-warm-gray">No Hidden Fees</div>
                            </div>
                        </div>

                        {/* Contact info */}
                        <div className="mt-12 pt-8 border-t border-border">
                            <p className="text-sm text-warm-gray mb-4">
                                Prefer to talk? Call us directly:
                            </p>
                            <a
                                href={`tel:${site.phone.digits}`}
                                className="text-2xl font-bold text-charcoal hover:text-navy transition-colors"
                            >
                                {site.phone.display}
                            </a>
                            <p className="text-sm text-warm-gray mt-2">
                                {site.hours.summary}
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-bone p-8 lg:p-10 border border-border">
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
                                    Request Received!
                                </h3>
                                <p className="text-warm-gray">
                                    We will be in touch soon with your guaranteed quote.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="sr-only">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Full name…"
                                        autoComplete="name"
                                        required
                                        className={inputClasses}
                                    />
                                </div>

                                {/* Email & Phone */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="sr-only">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="name@example.com…"
                                            autoComplete="email"
                                            spellCheck={false}
                                            required
                                            className={inputClasses}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="sr-only">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="555-123-4567…"
                                            autoComplete="tel"
                                            inputMode="tel"
                                            required
                                            className={inputClasses}
                                        />
                                    </div>
                                </div>

                                {/* From/To Zip */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="fromZip" className="sr-only">
                                            Moving From (City/Zip)
                                        </label>
                                        <input
                                            type="text"
                                            id="fromZip"
                                            name="fromZip"
                                            value={formData.fromZip}
                                            onChange={handleChange}
                                            placeholder="Moving from (city or ZIP)…"
                                            autoComplete="postal-code"
                                            inputMode="numeric"
                                            required
                                            className={inputClasses}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="toZip" className="sr-only">
                                            Moving To (City/Zip)
                                        </label>
                                        <input
                                            type="text"
                                            id="toZip"
                                            name="toZip"
                                            onChange={handleChange}
                                            value={formData.toZip}
                                            placeholder="Moving to (city or ZIP)…"
                                            autoComplete="postal-code"
                                            inputMode="numeric"
                                            required
                                            className={inputClasses}
                                        />
                                    </div>
                                </div>

                                {/* Move Date & Service */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="moveDate" className="sr-only">
                                            Preferred Move Date
                                        </label>
                                    <input
                                        type="date"
                                        id="moveDate"
                                        name="moveDate"
                                        value={formData.moveDate}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        className={inputClasses}
                                    />
                                    </div>
                                    <div>
                                        <label htmlFor="service" className="sr-only">
                                            Service Type
                                        </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        required
                                        className={inputClasses}
                                    >
                                            <option value="" disabled>
                                                Select Service…
                                            </option>
                                            <option value="residential">Residential Moving</option>
                                            <option value="commercial">Commercial Moving</option>
                                            <option value="packing">Packing Services</option>
                                            <option value="storage">Storage</option>
                                            <option value="loading">Loading/Unloading Only</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Details */}
                                <div>
                                    <label htmlFor="details" className="sr-only">
                                        Additional Details
                                    </label>
                                    <textarea
                                        id="details"
                                        name="details"
                                        value={formData.details}
                                        onChange={handleChange}
                                        placeholder="Tell us about your move (home size, special items, etc.)…"
                                        autoComplete="off"
                                        rows={4}
                                        className={`${inputClasses} resize-none`}
                                    />
                                </div>

                                {/* Submit */}
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full"
                                    disabled={formState === 'submitting'}
                                >
                                    {formState === 'submitting'
                                        ? 'Sending…'
                                        : 'Get My Free Quote'}
                                </Button>

                                <p className="text-xs text-warm-gray text-center">
                                    Your information is secure and never shared.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
