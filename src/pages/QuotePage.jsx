import { useEffect, useState } from 'react';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { site, yearsInBusiness } from '../data/site';

const initialFormData = {
    name: '',
    email: '',
    phone: '',
    fromAddress: '',
    fromZip: '',
    toAddress: '',
    toZip: '',
    moveDate: '',
    moveTime: '',
    homeSize: '',
    service: '',
    specialItems: [],
    details: '',
    hearAbout: '',
};

export function QuotePage() {
    const [formState, setFormState] = useState('idle');
    const [formData, setFormData] = useState(initialFormData);
    const isDirty = Object.values(formData).some((value) => {
        if (Array.isArray(value)) return value.length > 0;
        return String(value).trim() !== '';
    });

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
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prev) => ({
                ...prev,
                specialItems: checked
                    ? [...prev.specialItems, value]
                    : prev.specialItems.filter((item) => item !== value),
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('submitting');

        setTimeout(() => {
            setFormState('success');
            setFormData(initialFormData);
        }, 1500);
    };

    const inputClasses =
        'w-full px-4 py-3 bg-bone border border-border text-charcoal placeholder:text-warm-gray focus:border-navy transition-colors duration-150';

    const specialItems = [
        'Piano',
        'Pool Table',
        'Safe/Gun Safe',
        'Antiques',
        'Artwork',
        'Hot Tub/Spa',
    ];

    return (
        <>
            <SEO
                title="Get a Free Quote"
                description={`Request a free moving quote from Austin's trusted movers with over ${yearsInBusiness} years of experience. Transparent pricing, no hidden fees. We respond within 24 hours with a detailed estimate for your move.`}
                canonical="/quote"
            />

            {/* Hero */}
            <section className="bg-charcoal text-bone pt-32 pb-16 lg:pt-40 lg:pb-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <span className="text-xs font-semibold tracking-[0.25em] text-amber uppercase block mb-4">
                        Free Quote
                    </span>
                    <h1 className="text-balance text-4xl lg:text-5xl font-bold mb-6 max-w-2xl">
                        Get Your Free Moving Estimate
                    </h1>
                    <p className="text-pretty text-bone/70 text-lg max-w-xl">
                        Tell us about your move and we'll provide a detailed, transparent
                        quote within 24 hours. No obligation, no pressure.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 lg:py-24 bg-cream">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                        {/* Form */}
                        <div className="lg:col-span-2">
                            {formState === 'success' ? (
                                <div className="bg-bone p-12 border border-border text-center" role="status" aria-live="polite">
                                    <div className="size-20 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <svg aria-hidden="true"
                                            className="size-10 text-navy"
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
                                    <h2 className="text-2xl font-bold text-charcoal mb-4">
                                        Quote Request Received
                                    </h2>
                                    <p className="text-warm-gray mb-2">
                                        We've received your information and will be in touch within 24 hours.
                                    </p>
                                    <p className="text-warm-gray">
                                        For urgent requests, call us at{' '}
                                        <a href={`tel:${site.phone.digits}`} className="text-navy font-medium">
                                            {site.phone.display}
                                        </a>
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="bg-bone p-8 lg:p-10 border border-border">
                                    <h2 className="text-xl font-semibold text-charcoal mb-8">
                                        Your Information
                                    </h2>

                                    {/* Contact Info */}
                                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                        <div className="sm:col-span-2">
                                            <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                                                Full Name *
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
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                                                Email Address *
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
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                autoComplete="tel"
                                                inputMode="tel"
                                                required
                                                className={inputClasses}
                                            />
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-semibold text-charcoal mb-8">
                                        Move Details
                                    </h2>

                                    {/* From Address */}
                                    <div className="grid sm:grid-cols-3 gap-6 mb-6">
                                        <div className="sm:col-span-2">
                                            <label htmlFor="fromAddress" className="block text-sm font-medium text-charcoal mb-2">
                                                Moving From (Address) *
                                            </label>
                                            <input
                                                type="text"
                                                id="fromAddress"
                                                name="fromAddress"
                                                value={formData.fromAddress}
                                                onChange={handleChange}
                                                autoComplete="street-address"
                                                required
                                                className={inputClasses}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="fromZip" className="block text-sm font-medium text-charcoal mb-2">
                                                Zip Code *
                                            </label>
                                            <input
                                                type="text"
                                                id="fromZip"
                                                name="fromZip"
                                                value={formData.fromZip}
                                                onChange={handleChange}
                                                autoComplete="postal-code"
                                                inputMode="numeric"
                                                required
                                                className={inputClasses}
                                            />
                                        </div>
                                    </div>

                                    {/* To Address */}
                                    <div className="grid sm:grid-cols-3 gap-6 mb-6">
                                        <div className="sm:col-span-2">
                                            <label htmlFor="toAddress" className="block text-sm font-medium text-charcoal mb-2">
                                                Moving To (Address) *
                                            </label>
                                            <input
                                                type="text"
                                                id="toAddress"
                                                name="toAddress"
                                                value={formData.toAddress}
                                                onChange={handleChange}
                                                autoComplete="street-address"
                                                required
                                                className={inputClasses}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="toZip" className="block text-sm font-medium text-charcoal mb-2">
                                                Zip Code *
                                            </label>
                                            <input
                                                type="text"
                                                id="toZip"
                                                name="toZip"
                                                value={formData.toZip}
                                                onChange={handleChange}
                                                autoComplete="postal-code"
                                                inputMode="numeric"
                                                required
                                                className={inputClasses}
                                            />
                                        </div>
                                    </div>

                                    {/* Date, Time, Size */}
                                    <div className="grid sm:grid-cols-3 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="moveDate" className="block text-sm font-medium text-charcoal mb-2">
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
                                            <label htmlFor="moveTime" className="block text-sm font-medium text-charcoal mb-2">
                                                Preferred Time
                                            </label>
                                            <select
                                                id="moveTime"
                                                name="moveTime"
                                                value={formData.moveTime}
                                                onChange={handleChange}
                                                autoComplete="off"
                                                className={inputClasses}
                                            >
                                                <option value="">Select Time…</option>
                                                <option value="morning">Morning (8am-12pm)</option>
                                                <option value="afternoon">Afternoon (12pm-4pm)</option>
                                                <option value="flexible">Flexible</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="homeSize" className="block text-sm font-medium text-charcoal mb-2">
                                                Home Size *
                                            </label>
                                            <select
                                                id="homeSize"
                                                name="homeSize"
                                                value={formData.homeSize}
                                                onChange={handleChange}
                                                autoComplete="off"
                                                required
                                                className={inputClasses}
                                            >
                                                <option value="">Select Size…</option>
                                                <option value="studio">Studio</option>
                                                <option value="1br">1 Bedroom</option>
                                                <option value="2br">2 Bedrooms</option>
                                                <option value="3br">3 Bedrooms</option>
                                                <option value="4br">4+ Bedrooms</option>
                                                <option value="office">Office</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Service Type */}
                                    <div className="mb-6">
                                        <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
                                            Service Type *
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
                                                <option value="">Select Service…</option>
                                            <option value="full">Full Service (Packing + Moving)</option>
                                            <option value="moving">Moving Only</option>
                                            <option value="packing">Packing Only</option>
                                            <option value="labor">Labor Only (No Truck)</option>
                                        </select>
                                    </div>

                                    {/* Special Items */}
                                    <div className="mb-6">
                                        <p className="text-sm font-medium text-charcoal mb-3">
                                            Special Items (check all that apply)
                                        </p>
                                        <div className="grid sm:grid-cols-3 gap-3">
                                            {specialItems.map((item) => (
                                                <label
                                                    key={item}
                                                    className="flex items-center gap-3 cursor-pointer"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        name="specialItems"
                                                        value={item}
                                                        checked={formData.specialItems.includes(item)}
                                                        onChange={handleChange}
                                                        className="size-4 accent-navy"
                                                    />
                                                    <span className="text-sm text-charcoal">{item}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Additional Details */}
                                    <div className="mb-6">
                                        <label htmlFor="details" className="block text-sm font-medium text-charcoal mb-2">
                                            Additional Details
                                        </label>
                                        <textarea
                                            id="details"
                                            name="details"
                                            value={formData.details}
                                            onChange={handleChange}
                                            rows={4}
                                            placeholder="Stairs, elevators, parking restrictions, or other details to help us provide an accurate quote…"
                                            autoComplete="off"
                                            className={`${inputClasses} resize-none`}
                                        />
                                    </div>

                                    {/* How did you hear about us */}
                                    <div className="mb-8">
                                        <label htmlFor="hearAbout" className="block text-sm font-medium text-charcoal mb-2">
                                            How Did You Hear About Us?
                                        </label>
                                        <select
                                            id="hearAbout"
                                            name="hearAbout"
                                            value={formData.hearAbout}
                                            onChange={handleChange}
                                            autoComplete="off"
                                            className={inputClasses}
                                        >
                                                <option value="">Select One…</option>
                                            <option value="google">Google Search</option>
                                            <option value="referral">Friend/Family Referral</option>
                                            <option value="yelp">Yelp</option>
                                            <option value="nextdoor">Nextdoor</option>
                                            <option value="social">Social Media</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    {/* Submit */}
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full"
                                        disabled={formState === 'submitting'}
                                    >
                                        {formState === 'submitting' ? 'Submitting…' : 'Submit Quote Request'}
                                    </Button>

                                    <p className="text-xs text-warm-gray text-center mt-4">
                                        Your information is secure and never shared with third parties.
                                    </p>
                                </form>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Contact Card */}
                            <div className="bg-charcoal text-bone p-8">
                                <h3 className="text-lg font-semibold mb-4">Prefer to Talk?</h3>
                                <p className="text-bone/70 text-sm mb-4">
                                    Call us directly for immediate assistance or to schedule an in-home estimate.
                                </p>
                                <a
                                    href={`tel:${site.phone.digits}`}
                                    className="text-2xl font-bold text-amber hover:text-amber-muted transition-colors"
                                >
                                    {site.phone.display}
                                </a>
                                <p className="text-sm text-bone/50 mt-2">{site.hours.summary}</p>
                            </div>

                            {/* What to Expect */}
                            <div className="bg-bone p-8 border border-border">
                                <h3 className="text-lg font-semibold text-charcoal mb-4">What to Expect</h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <span className="text-amber font-bold">1</span>
                                        <div>
                                            <p className="font-medium text-charcoal">Quick response</p>
                                            <p className="text-sm text-warm-gray">We respond within 24 hours with your estimate</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-amber font-bold">2</span>
                                        <div>
                                            <p className="font-medium text-charcoal">Detailed quote</p>
                                            <p className="text-sm text-warm-gray">Transparent pricing with no hidden fees</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-amber font-bold">3</span>
                                        <div>
                                            <p className="font-medium text-charcoal">No obligation</p>
                                            <p className="text-sm text-warm-gray">Compare quotes. Decide when you're ready.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Trust Badges */}
                            <div className="bg-bone p-8 border border-border">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-amber text-lg">★★★★★</span>
                                    <span className="text-sm font-medium text-charcoal">Top-Rated Reviews</span>
                                </div>
                                <p className="text-sm text-warm-gray mb-4">
                                    {site.reviewSummary} on Google
                                </p>
                                <div className="space-y-2 text-sm text-warm-gray">
                                    <p>✓ Licensed {site.license}</p>
                                    <p>✓ $1M+ Liability Insurance</p>
                                    <p>✓ Full-time, Background-Checked Crews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
