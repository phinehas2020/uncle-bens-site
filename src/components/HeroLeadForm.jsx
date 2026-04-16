import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getLeadEndpoint, hasLeadEndpoint, submitLead } from '../lib/submitLead';
import { publicContact } from '../data/site';

const initial = { name: '', phone: '', moveDate: '' };

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
    if (!data.name.trim()) nextErrors.name = 'Add your name.';
    if (phoneDigits.length < 10) nextErrors.phone = 'Enter a 10-digit phone number.';
    if (!data.moveDate) nextErrors.moveDate = 'Pick a target move date.';
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
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
      setSubmitMessage('Fix the highlighted fields to continue.');
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
      setSubmitMessage('Got it. We will be in touch within one business day.');
      setData(initial);
    } catch {
      setStatus('error');
      setSubmitMessage(
        publicContact.hasPhone
          ? 'Delivery from the homepage failed. Use the full quote form or call the office.'
          : 'Delivery from the homepage failed. Use the full quote form to try again.',
      );
    }
  };

  if (status === 'success') {
    return (
      <p className="mt-5 rounded-lg bg-[var(--color-bone)] px-4 py-3 text-sm text-[var(--color-graphite)]" role="status">
        {submitMessage}{' '}
        <Link className="font-medium underline decoration-[var(--color-line-strong)] underline-offset-4 hover:decoration-[var(--color-brand)]" to="/quote">
          Add more details
        </Link>
      </p>
    );
  }

  return (
    <form aria-label="Start a moving quote" className="mt-5 space-y-3" onSubmit={handleSubmit}>
      <label className="block">
        <span className="field-label">Your name</span>
        <input
          autoComplete="name"
          aria-describedby={errors.name ? 'hero-name-error' : undefined}
          aria-invalid={errors.name ? 'true' : 'false'}
          className="field"
          name="name"
          onChange={handleChange}
          placeholder="Jane Sanchez"
          required
          type="text"
          value={data.name}
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-[var(--color-danger)]" id="hero-name-error">{errors.name}</p>
        )}
      </label>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="field-label">Phone</span>
          <input
            autoComplete="tel"
            aria-describedby={errors.phone ? 'hero-phone-error' : undefined}
            aria-invalid={errors.phone ? 'true' : 'false'}
            className="field"
            inputMode="tel"
            name="phone"
            onChange={handleChange}
            placeholder="(512) 555-0110"
            required
            type="tel"
            value={data.phone}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-[var(--color-danger)]" id="hero-phone-error">{errors.phone}</p>
          )}
        </label>
        <label className="block">
          <span className="field-label">Move date</span>
          <input
            aria-describedby={errors.moveDate ? 'hero-date-error' : undefined}
            aria-invalid={errors.moveDate ? 'true' : 'false'}
            className="field"
            name="moveDate"
            onChange={handleChange}
            required
            type="date"
            value={data.moveDate}
          />
          {errors.moveDate && (
            <p className="mt-1.5 text-xs text-[var(--color-danger)]" id="hero-date-error">{errors.moveDate}</p>
          )}
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn btn-brand w-full mt-1"
      >
        {status === 'submitting' ? 'Sending…' : canSubmitOnline ? 'Request my estimate' : 'Continue to full quote form'}
        <span aria-hidden="true">→</span>
      </button>

      <p className="text-[0.7rem] leading-relaxed text-[var(--color-stone)]">
        No spam. No hidden fees. Your details are used only to schedule a walkthrough.
      </p>

      {status === 'error' && submitMessage && (
        <p className="rounded-lg border border-[color-mix(in_srgb,var(--color-danger)_35%,white)] bg-[color-mix(in_srgb,var(--color-danger)_8%,white)] px-3 py-2 text-xs text-[var(--color-danger)]" role="alert">
          {submitMessage}
        </p>
      )}
    </form>
  );
}
