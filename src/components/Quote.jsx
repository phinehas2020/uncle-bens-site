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
  { value: 'local-moving', label: 'Luxury Local Moving' },
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
    <section className="section-space-sm">
      <div className="layout-container">
        <div className="glass-panel grid gap-7 p-6 sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:p-10">
          <div className="space-y-4">
            <p className="eyebrow">Get Started</p>
            <h2 className="section-title">
              Start your quote request.
            </h2>
            <p className="section-copy">
              A few details help us estimate your move accurately and respond quickly.
            </p>
            <p className="rounded-2xl border border-cobalt/28 bg-night/72 px-4 py-3 text-xs uppercase tracking-[0.14em] text-fog/80">
              Typical turnaround: within one business day
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-3 sm:grid-cols-2">
              <label>
                <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-cloud/78">
                  Full Name
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
                  required
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

            <div className="grid gap-3 sm:grid-cols-2">
              <label>
                <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-cloud/78">
                  Moving From
                </span>
                <input
                  className="field"
                  name="fromCity"
                  onChange={handleChange}
                  placeholder="Current city"
                  required
                  value={formData.fromCity}
                />
              </label>

              <label>
                <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-cloud/78">
                  Moving To
                </span>
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

            <div className="grid gap-3 sm:grid-cols-2">
              <label>
                <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-cloud/78">
                  Preferred Date
                </span>
                <input
                  className="field"
                  name="moveDate"
                  onChange={handleChange}
                  type="date"
                  value={formData.moveDate}
                />
              </label>

              <label>
                <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-cloud/78">
                  Service Type
                </span>
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
              <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-cloud/78">
                Project Details
              </span>
              <textarea
                className="field min-h-28 resize-y"
                name="message"
                onChange={handleChange}
                placeholder="Include home size, stairs/elevator access, specialty items, and preferred timing."
                value={formData.message}
              />
            </label>

            <Button className="btn-full" disabled={isSubmitting} size="md" type="submit" variant="primary">
              Send Quote Request
            </Button>

            {isSubmitted && (
              <p className="rounded-xl border border-gold/28 bg-night/65 px-4 py-3 text-sm text-gold-soft">
                Thank you. We received your request and will reach out shortly.
              </p>
            )}

            {submitError && (
              <p className="rounded-xl border border-rose-300/35 bg-rose-950/30 px-4 py-3 text-sm text-rose-100">
                {submitError}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
