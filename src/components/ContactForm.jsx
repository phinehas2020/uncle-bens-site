import { useState } from 'react';
import { Button } from './Button';

const initialFormState = {
  name: '',
  phone: '',
  email: '',
  moveType: 'local-moving',
  fromZip: '',
  toZip: '',
  moveDate: '',
  notes: '',
};

const moveTypeOptions = [
  { value: 'local-moving', label: 'Local moving' },
  { value: 'long-distance', label: 'Long-distance moving' },
  { value: 'packing', label: 'Packing services' },
  { value: 'storage', label: 'Storage solutions' },
  { value: 'other', label: 'Other' },
];

const SUPABASE_ENDPOINT = 'https://bfxemhxuwmfdbmbwegjz.supabase.co/functions/v1/submit-lead';

export function ContactForm({ endpoint = '' }) {
  const formEndpoint = endpoint || import.meta.env.VITE_FORM_ENDPOINT || SUPABASE_ENDPOINT;
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
      setSubmitError('This form is not connected yet. Please call or email us directly.');
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
          <span className="mb-1.5 block text-sm font-semibold text-slate-700">Name</span>
          <input
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900"
            name="name"
            onChange={handleChange}
            placeholder="Your name"
            required
            type="text"
            value={formData.name}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-slate-700">Phone</span>
          <input
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900"
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
        <span className="mb-1.5 block text-sm font-semibold text-slate-700">Email</span>
        <input
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900"
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
          <span className="mb-1.5 block text-sm font-semibold text-slate-700">Move type</span>
          <select
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-slate-900"
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
          <span className="mb-1.5 block text-sm font-semibold text-slate-700">Preferred move date</span>
          <input
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-slate-900"
            name="moveDate"
            onChange={handleChange}
            type="date"
            value={formData.moveDate}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-slate-700">Origin ZIP</span>
          <input
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900"
            name="fromZip"
            onChange={handleChange}
            placeholder="78701"
            required
            type="text"
            pattern="[0-9]{5}"
            value={formData.fromZip}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-slate-700">Destination ZIP</span>
          <input
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900"
            name="toZip"
            onChange={handleChange}
            placeholder="78664"
            required
            type="text"
            pattern="[0-9]{5}"
            value={formData.toZip}
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-slate-700">Notes</span>
        <textarea
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900"
          name="notes"
          onChange={handleChange}
          placeholder="Stairs, pianos, storage needs, anything unusual about the move..."
          rows={4}
          value={formData.notes}
        />
      </label>

      <Button className="w-full" disabled={isSubmitting} size="lg" type="submit" variant="primary">
        {isSubmitting ? 'Sending...' : 'Send request'}
      </Button>

      {isSubmitted && (
        <p className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700" role="status">
          Thanks — we received your request and will contact you soon.
        </p>
      )}

      {submitError && (
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {submitError}
        </p>
      )}
    </form>
  );
}
