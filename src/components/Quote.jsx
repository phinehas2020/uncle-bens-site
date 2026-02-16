import { useState } from 'react';
import { Button } from './Button';

const initialState = {
  name: '',
  phone: '',
  email: '',
  fromCity: '',
  toCity: '',
  moveDate: '',
  service: 'local-moving',
  message: '',
};

const serviceOptions = [
  { value: 'local-moving', label: 'Local Moving' },
  { value: 'commercial-moving', label: 'Commercial Relocation' },
  { value: 'packing', label: 'Packing Services' },
  { value: 'long-distance', label: 'Long-Distance Moving' },
  { value: 'storage', label: 'Secure Storage' },
  { value: 'specialty', label: 'Specialty Item Handling' },
];

export function Quote() {
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
          formType: 'quote',
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to submit quote request.');
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
    <section className="section-gap-sm">
      <div className="wrap" style={{ maxWidth: 'var(--container-narrow)' }}>
        <div className="card p-6 space-y-5">
          <div>
            <h2 className="heading-lg">Request a quote</h2>
            <p className="mt-2 text-text-secondary">
              We reply within one business day with a guaranteed written quote.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="field-label">Full name</span>
              <input
                className="field"
                name="name"
                onChange={handleChange}
                placeholder="Your name"
                required
                type="text"
                value={formData.name}
              />
            </label>

            <div className="grid-2">
              <label className="block">
                <span className="field-label">Phone</span>
                <input
                  className="field"
                  name="phone"
                  onChange={handleChange}
                  placeholder="(512) 555-0101"
                  required
                  type="tel"
                  value={formData.phone}
                />
              </label>

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
            </div>

            <div className="grid-2">
              <label className="block">
                <span className="field-label">Moving from</span>
                <input
                  className="field"
                  name="fromCity"
                  onChange={handleChange}
                  placeholder="Current city"
                  required
                  value={formData.fromCity}
                />
              </label>

              <label className="block">
                <span className="field-label">Moving to</span>
                <input
                  className="field"
                  name="toCity"
                  onChange={handleChange}
                  placeholder="Destination city"
                  required
                  value={formData.toCity}
                />
              </label>
            </div>

            <div className="grid-2">
              <label className="block">
                <span className="field-label">Preferred date</span>
                <input
                  className="field"
                  name="moveDate"
                  onChange={handleChange}
                  type="date"
                  value={formData.moveDate}
                />
              </label>

              <label className="block">
                <span className="field-label">Service type</span>
                <select
                  className="field"
                  name="service"
                  onChange={handleChange}
                  required
                  value={formData.service}
                >
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block">
              <span className="field-label">Details</span>
              <textarea
                className="field min-h-24 resize-y"
                name="message"
                onChange={handleChange}
                placeholder="Home size, stairs, elevators, special items..."
                value={formData.message}
              />
            </label>

            <Button className="w-full" disabled={isSubmitting} size="lg" type="submit" variant="primary">
              Send quote request
            </Button>

            {isSubmitted && (
              <p className="rounded-md border border-teal/30 bg-teal/5 px-4 py-3 text-sm text-teal">
                Thank you. We received your request and will reach out shortly.
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
  );
}
