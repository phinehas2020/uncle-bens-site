import { useState } from 'react';
import { Button } from '../components/Button';
import { SEO } from '../components/SEO';
import { site } from '../data/site';

const initialState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export function ContactPage() {
  const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT;
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    if (!formEndpoint) {
      await new Promise((resolve) => {
        window.setTimeout(resolve, 400);
      });
      setIsSubmitted(true);
      setFormData(initialState);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'contact',
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to send message.');
      }

      setIsSubmitted(true);
      setFormData(initialState);
    } catch {
      setSubmitError('Submission failed. Please call us directly for immediate support.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        canonical="/contact"
        description={`Contact ${site.name} for premium moving, packing, and storage support in Austin, Round Rock, and Central Texas.`}
        title="Contact"
      />

      <section className="section-space pt-20">
        <div className="layout-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <p className="eyebrow">Contact</p>
            <h1 className="section-title">
              Let’s make your move feel effortless.
            </h1>
            <p className="section-copy">
              Speak with our team about timing, logistics, and premium service
              options. We are here to guide every detail.
            </p>

            <div className="glass-panel space-y-4 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
                Reach us directly
              </p>
              <p className="text-sm text-cloud/86">
                Phone:{' '}
                <a className="text-gold-soft hover:text-white" href={`tel:${site.phone.digits}`}>
                  {site.phone.display}
                </a>
              </p>
              <p className="text-sm text-cloud/86">
                Email:{' '}
                <a className="text-gold-soft hover:text-white" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              <p className="text-sm text-cloud/86">Hours: {site.hours.summary}</p>
              <p className="text-sm text-cloud/86">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </p>
            </div>
          </div>

          <form className="glass-panel space-y-4 p-6 sm:p-8" onSubmit={handleSubmit}>
            <div className="grid gap-3 sm:grid-cols-2">
              <label>
                <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-cloud/78">
                  Name
                </span>
                <input
                  className="field"
                  name="name"
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  value={formData.name}
                />
              </label>

              <label>
                <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-cloud/78">
                  Phone
                </span>
                <input
                  className="field"
                  name="phone"
                  onChange={handleChange}
                  placeholder="(512) 555-0101"
                  type="tel"
                  value={formData.phone}
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-cloud/78">
                Email
              </span>
              <input
                className="field"
                name="email"
                onChange={handleChange}
                placeholder="you@example.com"
                required
                type="email"
                value={formData.email}
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-cloud/78">
                Subject
              </span>
              <select
                className="field"
                name="subject"
                onChange={handleChange}
                required
                value={formData.subject}
              >
                <option value="">Select subject</option>
                <option value="quote">Quote request</option>
                <option value="existing">Existing move support</option>
                <option value="commercial">Commercial inquiry</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-cloud/78">
                Message
              </span>
              <textarea
                className="field min-h-32 resize-y"
                name="message"
                onChange={handleChange}
                placeholder="How can we help?"
                required
                value={formData.message}
              />
            </label>

            <Button className="btn-full" disabled={isSubmitting} size="md" type="submit" variant="primary">
              Send Message
            </Button>

            {isSubmitted && (
              <p className="rounded-xl border border-gold/30 bg-night/68 px-4 py-3 text-sm text-gold-soft">
                Message sent. We will reply shortly.
              </p>
            )}

            {submitError && (
              <p className="rounded-xl border border-rose-300/35 bg-rose-950/30 px-4 py-3 text-sm text-rose-100">
                {submitError}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
