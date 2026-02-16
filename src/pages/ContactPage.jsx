import { useState } from 'react';
import { SEO } from '../components/SEO';
import { site } from '../data/site';
import { Button } from '../components/Button';

export function ContactPage() {
  const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT;
  const initialState = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

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
        description={`Contact ${site.name} for moving, packing, and storage support in Austin, Round Rock, and Central Texas.`}
        title="Contact"
      />

      <section className="section-gap">
        <div className="wrap">
          <div className="split">
            <div className="space-y-5">
              <h1 className="heading-xl">Contact us</h1>
              <p className="body-lg">
                Reach us for scheduling, scope planning, or any questions about your move.
              </p>

              <div className="card p-5 space-y-3 text-sm text-text-secondary">
                <p>
                  <span className="font-semibold text-text">Phone: </span>
                  <a className="text-teal hover:underline" href={`tel:${site.phone.digits}`}>
                    {site.phone.display}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-text">Email: </span>
                  <a className="text-teal hover:underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-text">Hours: </span>
                  {site.hours.summary}
                </p>
                <p>
                  <span className="font-semibold text-text">Address: </span>
                  {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}
                </p>
              </div>
            </div>

            <form className="card p-5 space-y-4" onSubmit={handleSubmit}>
              <div className="grid-2">
                <label className="block">
                  <span className="field-label">Name</span>
                  <input
                    className="field"
                    name="name"
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    value={formData.name}
                  />
                </label>

                <label className="block">
                  <span className="field-label">Phone</span>
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
                <span className="field-label">Email</span>
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
                <span className="field-label">Subject</span>
                <select
                  className="field"
                  name="subject"
                  onChange={handleChange}
                  required
                  value={formData.subject}
                >
                  <option value="">Select a subject</option>
                  <option value="quote">Quote request</option>
                  <option value="existing">Existing move support</option>
                  <option value="commercial">Commercial inquiry</option>
                  <option value="other">Other</option>
                </select>
              </label>

              <label className="block">
                <span className="field-label">Message</span>
                <textarea
                  className="field min-h-28 resize-y"
                  name="message"
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                  value={formData.message}
                />
              </label>

              <Button className="w-full" disabled={isSubmitting} size="lg" type="submit" variant="primary">
                Send message
              </Button>

              {isSubmitted && (
                <p className="rounded-md border border-teal/30 bg-teal/5 px-4 py-3 text-sm text-teal">
                  Message sent. We will reply shortly.
                </p>
              )}

              {submitError && (
                <p className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {submitError}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
