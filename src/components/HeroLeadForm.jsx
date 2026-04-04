import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { getLeadEndpoint, hasLeadEndpoint, submitLead } from '../lib/submitLead';
import { publicContact, site } from '../data/site';

const initial = { name: '', phone: '', moveDate: '' };

/**
 * Minimal above-the-fold capture (name, phone, move date) per moving LP best practice.
 * Sends the same edge function shape as the full contact form; empty fields satisfy payload keys.
 */
export function HeroLeadForm() {
  const navigate = useNavigate();
  const [data, setData] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const endpoint = getLeadEndpoint();
  const canSubmitOnline = hasLeadEndpoint();

  const validate = () => {
    const nextErrors = {};
    const phoneDigits = data.phone.replace(/\D/g, '');

    if (!data.name.trim()) {
      nextErrors.name = 'Enter your name so we know who to follow up with.';
    }

    if (phoneDigits.length < 10) {
      nextErrors.phone = 'Use a full phone number with at least 10 digits.';
    }

    if (!data.moveDate) {
      nextErrors.moveDate = 'Choose the move date or the closest target date.';
    }

    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) {
        return prev;
      }

      const next = { ...prev };
      delete next[name];
      return next;
    });

    if (status !== 'idle') {
      setStatus('idle');
      setSubmitMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error');
      setSubmitMessage('Please fix the highlighted fields and try again.');
      return;
    }

    if (!canSubmitOnline) {
      navigate('/quote', {
        state: {
          fromHero: true,
          name: data.name.trim(),
          phone: data.phone.trim(),
          moveDate: data.moveDate,
        },
      });
      return;
    }

    setStatus('submitting');

    try {
      await submitLead(
        {
          formType: 'hero-capture',
          name: data.name.trim(),
          phone: data.phone.trim(),
          email: '',
          moveType: 'local-moving',
          fromZip: '',
          toZip: '',
          moveDate: data.moveDate,
          notes: 'Lead from homepage hero (3-field capture). Follow up for walkthrough details.',
        },
        endpoint,
      );
      setStatus('success');
      setSubmitMessage('Thanks. We received the first details and can follow up to confirm the walkthrough.');
      setData(initial);
    } catch {
      setStatus('error');
      setSubmitMessage(
        publicContact.hasPhone
          ? 'We could not deliver this from the homepage. Use the full quote form or call the office directly.'
          : 'We could not deliver this from the homepage. Use the full quote form while the direct contact details are still pending approval.',
      );
    }
  };

  if (status === 'success') {
    return (
      <p className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700" role="status">
        {submitMessage} Need to add details now?{' '}
        <Link className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-2" to="/quote">
          Full quote form
        </Link>
      </p>
    );
  }

  return (
    <form aria-label="Start a moving quote" className="mt-6 space-y-3" onSubmit={handleSubmit}>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="mb-1 block text-sm font-medium text-slate-700">Name</span>
          <input
            autoComplete="name"
            aria-describedby={errors.name ? 'hero-name-error' : undefined}
            aria-invalid={errors.name ? 'true' : 'false'}
            className={`w-full rounded-md border bg-white px-3 py-2.5 text-sm outline-none placeholder:text-slate-400 focus:border-slate-900 ${
              errors.name ? 'border-red-300' : 'border-slate-300'
            }`}
            name="name"
            onChange={handleChange}
            placeholder="Your name"
            required
            type="text"
            value={data.name}
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-700" id="hero-name-error">
              {errors.name}
            </p>
          )}
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">Phone</span>
          <input
            autoComplete="tel"
            aria-describedby={errors.phone ? 'hero-phone-error' : undefined}
            aria-invalid={errors.phone ? 'true' : 'false'}
            className={`w-full rounded-md border bg-white px-3 py-2.5 text-sm outline-none placeholder:text-slate-400 focus:border-slate-900 ${
              errors.phone ? 'border-red-300' : 'border-slate-300'
            }`}
            inputMode="tel"
            name="phone"
            onChange={handleChange}
            placeholder="(512) …"
            required
            type="tel"
            value={data.phone}
          />
          {errors.phone && (
            <p className="mt-2 text-sm text-red-700" id="hero-phone-error">
              {errors.phone}
            </p>
          )}
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">Preferred move date</span>
          <input
            aria-describedby={errors.moveDate ? 'hero-date-error' : undefined}
            aria-invalid={errors.moveDate ? 'true' : 'false'}
            className={`w-full rounded-md border bg-white px-3 py-2.5 text-sm outline-none focus:border-slate-900 ${
              errors.moveDate ? 'border-red-300' : 'border-slate-300'
            }`}
            name="moveDate"
            onChange={handleChange}
            required
            type="date"
            value={data.moveDate}
          />
          {errors.moveDate && (
            <p className="mt-2 text-sm text-red-700" id="hero-date-error">
              {errors.moveDate}
            </p>
          )}
        </label>
      </div>

      <Button className="w-full min-h-12 sm:w-auto" disabled={status === 'submitting'} size="lg" type="submit" variant="primary">
        {status === 'submitting'
          ? 'Sending…'
          : canSubmitOnline
            ? 'Start my moving quote'
            : 'Open the full quote form'}
      </Button>

      <p className="text-xs leading-relaxed text-slate-500">
        {canSubmitOnline
          ? `No spam — we use this to call or email and schedule your walkthrough. ${site.complianceNote}`
          : publicContact.hasPhone
            ? 'Online delivery is not connected in this environment yet. Use this to jump to the full quote form or call the office directly.'
            : 'Online delivery is not connected in this environment yet. Use this to jump to the full quote form while direct contact details are pending approval.'}
      </p>

      {status === 'error' && submitMessage && (
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {submitMessage}
        </p>
      )}
    </form>
  );
}
