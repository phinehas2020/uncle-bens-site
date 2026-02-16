import { useState } from 'react';
import { Button } from './Button';

const initialFormState = {
  name: '',
  phone: '',
  email: '',
  moveType: 'local-moving',
  fromCity: '',
  toCity: '',
  moveDate: '',
  message: '',
};

const moveTypeOptions = [
  { value: 'local-moving', label: 'Local moving' },
  { value: 'long-distance', label: 'Long-distance moving' },
  { value: 'packing', label: 'Packing services' },
  { value: 'storage', label: 'Storage solutions' },
  { value: 'other', label: 'Other' },
];

export function ContactForm({ endpoint = '' }) {
  const formEndpoint = endpoint || import.meta.env.VITE_FORM_ENDPOINT;
  const [formData, setFormData] = useState(initialFormState);
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
        window.setTimeout(resolve, 350);
      });
      setIsSubmitted(true);
      setFormData(initialFormState);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'contact', ...formData }),
      });

      if (!response.ok) {
        throw new Error('Unable to submit the form');
      }

      setIsSubmitted(true);
      setFormData(initialFormState);
    } catch {
      setSubmitError('Could not submit the form. Please call or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-slate-700">Name</span>
          <input
            className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900"
            name="name"
            onChange={handleChange}
            placeholder="Your name"
            required
            type="text"
            value={formData.name}
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-slate-700">Phone</span>
          <input
            className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900"
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
          <span className="mb-1 block text-sm font-semibold text-slate-700">Email</span>
        <input
          className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900"
          name="email"
          onChange={handleChange}
          placeholder="you@example.com"
          required
          type="email"
          value={formData.email}
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-slate-700">Move type</span>
          <select
            className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900"
            name="moveType"
            onChange={handleChange}
            required
            value={formData.moveType}
          >
            {moveTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-slate-700">Preferred move date</span>
          <input
            className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900"
            name="moveDate"
            onChange={handleChange}
            type="date"
            value={formData.moveDate}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-slate-700">Moving from</span>
          <input
            className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900"
            name="fromCity"
            onChange={handleChange}
            placeholder="Austin, TX"
            required
            value={formData.fromCity}
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-semibold text-slate-700">Moving to</span>
          <input
            className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900"
            name="toCity"
            onChange={handleChange}
            placeholder="Round Rock, TX"
            required
            value={formData.toCity}
          />
        </label>
      </div>

      <label className="block">
          <span className="mb-1 block text-sm font-semibold text-slate-700">What can we help with?</span>
        <textarea
          className="min-h-28 w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900"
          name="message"
          onChange={handleChange}
          placeholder="Home size, stairs, elevators, and any special items."
          required
          value={formData.message}
        />
      </label>

      <Button
        className="w-full bg-accent border-accent text-white hover:bg-accent/90"
        disabled={isSubmitting}
        size="lg"
        type="submit"
        variant="primary"
      >
        Lock in your move date
      </Button>

      {isSubmitted && (
        <p className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
          Thanks — we received your request and will contact you soon.
        </p>
      )}

      {submitError && (
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </p>
      )}
    </form>
  );
}
