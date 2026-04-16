import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getLeadEndpoint, hasLeadEndpoint, submitLead } from '../lib/submitLead';
import { publicContact } from '../data/site';

const contactInitialState = {
  name: '',
  phone: '',
  email: '',
  subject: 'general-question',
  notes: '',
};

const quoteInitialState = {
  name: '',
  phone: '',
  email: '',
  moveType: 'local-moving',
  fromZip: '',
  toZip: '',
  moveDate: '',
  notes: '',
};

const subjectOptions = [
  { value: 'general-question', label: 'General question' },
  { value: 'service-area', label: 'Service area' },
  { value: 'packing-storage', label: 'Packing or storage' },
  { value: 'schedule', label: 'Scheduling' },
];

const moveTypeOptions = [
  { value: 'local-moving', label: 'Local moving' },
  { value: 'long-distance', label: 'Long-distance moving' },
  { value: 'packing', label: 'Packing services' },
  { value: 'storage', label: 'Storage solutions' },
  { value: 'commercial-moving', label: 'Commercial relocation' },
  { value: 'other', label: 'Other' },
];

function getInitialState(variant, routeState) {
  const initialState = variant === 'quote' ? { ...quoteInitialState } : { ...contactInitialState };
  if (variant === 'quote' && routeState?.fromHero) {
    initialState.name = typeof routeState.name === 'string' ? routeState.name : '';
    initialState.phone = typeof routeState.phone === 'string' ? routeState.phone : '';
    initialState.moveDate = typeof routeState.moveDate === 'string' ? routeState.moveDate : '';
  }
  return initialState;
}

function validateForm(formData, variant) {
  const errors = {};
  const phoneDigits = formData.phone.replace(/\D/g, '');
  const email = formData.email.trim();

  if (!formData.name.trim()) errors.name = 'Add your name so we know who to reply to.';
  if (!phoneDigits && !email) errors.contact = 'Add a phone number or email address.';
  if (phoneDigits && phoneDigits.length < 10) errors.phone = 'Enter a 10-digit phone number.';
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address.';

  if (variant === 'quote') {
    if (!/^\d{5}$/.test(formData.fromZip.trim())) errors.fromZip = 'Enter a 5-digit origin ZIP.';
    if (!/^\d{5}$/.test(formData.toZip.trim())) errors.toZip = 'Enter a 5-digit destination ZIP.';
    if (!formData.moveDate) errors.moveDate = 'Pick a target move date.';
    if (!formData.notes.trim()) errors.notes = 'Share a few move details (home size, stairs, etc.).';
  } else if (!formData.notes.trim()) {
    errors.notes = 'Tell us what you need help with.';
  }

  return errors;
}

function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-xs text-[var(--color-danger)]" id={id}>{message}</p>
  );
}

function getOfflineMessage() {
  if (publicContact.hasPhone && publicContact.hasEmail) {
    return 'Online form delivery is not configured yet. Please call or email us directly.';
  }
  if (publicContact.hasPhone) {
    return 'Online form delivery is not configured yet. Please call directly.';
  }
  return 'Online form delivery is not configured yet. Please try the quote path.';
}

export function ContactForm({ endpoint = '', variant = 'contact' }) {
  const { state } = useLocation();
  const formEndpoint = getLeadEndpoint(endpoint);
  const canSubmitOnline = hasLeadEndpoint(endpoint);
  const [formData, setFormData] = useState(() => getInitialState(variant, state));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name] && !((name === 'phone' || name === 'email') && prev.contact)) return prev;
      const next = { ...prev };
      delete next[name];
      if (name === 'phone' || name === 'email') delete next.contact;
      return next;
    });
    if (status !== 'idle') {
      setStatus('idle');
      setSubmitMessage('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateForm(formData, variant);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('error');
      setSubmitMessage('Fix the highlighted fields to continue.');
      return;
    }
    setStatus('submitting');
    setSubmitMessage('');

    if (!canSubmitOnline || !formEndpoint) {
      setStatus('error');
      setSubmitMessage(getOfflineMessage());
      return;
    }

    try {
      await submitLead(
        { formType: variant === 'quote' ? 'quote' : 'contact', ...formData },
        formEndpoint,
      );
      setStatus('success');
      setSubmitMessage(
        variant === 'quote'
          ? 'Got it. Your estimate request is in. We\'ll reply within one business day.'
          : 'Got it. Your message is in. We\'ll reply within one business day.',
      );
      setErrors({});
      setFormData(getInitialState(variant));
    } catch {
      setStatus('error');
      setSubmitMessage(getOfflineMessage());
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      {!canSubmitOnline && (
        <p className="rounded-lg bg-[var(--color-warning-bg)] px-4 py-3 text-sm text-[var(--color-graphite)]" role="status">
          {getOfflineMessage()}
        </p>
      )}

      {errors.contact && (
        <p className="rounded-lg border border-[color-mix(in_srgb,var(--color-danger)_35%,white)] bg-[color-mix(in_srgb,var(--color-danger)_8%,white)] px-4 py-3 text-sm text-[var(--color-danger)]" id={`${variant}-contact-error`}>
          {errors.contact}
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="field-label">Name</span>
          <input
            autoComplete="name"
            aria-describedby={errors.name ? `${variant}-name-error` : undefined}
            aria-invalid={errors.name ? 'true' : 'false'}
            className="field"
            name="name"
            onChange={handleChange}
            placeholder="Jane Sanchez"
            required
            type="text"
            value={formData.name}
          />
          <FieldError id={`${variant}-name-error`} message={errors.name} />
        </label>
        <label className="block">
          <span className="field-label">Phone</span>
          <input
            autoComplete="tel"
            aria-invalid={errors.phone || errors.contact ? 'true' : 'false'}
            className="field"
            name="phone"
            onChange={handleChange}
            placeholder="(512) 555-0110"
            type="tel"
            value={formData.phone}
          />
          <FieldError id={`${variant}-phone-error`} message={errors.phone} />
        </label>
      </div>

      <label className="block">
        <span className="field-label">Email</span>
        <input
          autoComplete="email"
          aria-invalid={errors.email || errors.contact ? 'true' : 'false'}
          className="field"
          name="email"
          onChange={handleChange}
          placeholder="you@example.com"
          type="email"
          value={formData.email}
        />
        <FieldError id={`${variant}-email-error`} message={errors.email} />
      </label>

      {variant === 'quote' ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="field-label">Move type</span>
              <select className="field" name="moveType" onChange={handleChange} required value={formData.moveType}>
                {moveTypeOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="field-label">Preferred move date</span>
              <input
                aria-invalid={errors.moveDate ? 'true' : 'false'}
                className="field"
                name="moveDate"
                onChange={handleChange}
                type="date"
                value={formData.moveDate}
              />
              <FieldError id={`${variant}-moveDate-error`} message={errors.moveDate} />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="field-label">Origin ZIP</span>
              <input
                aria-invalid={errors.fromZip ? 'true' : 'false'}
                className="field"
                inputMode="numeric"
                name="fromZip"
                onChange={handleChange}
                placeholder="78701"
                type="text"
                value={formData.fromZip}
              />
              <FieldError id={`${variant}-fromZip-error`} message={errors.fromZip} />
            </label>
            <label className="block">
              <span className="field-label">Destination ZIP</span>
              <input
                aria-invalid={errors.toZip ? 'true' : 'false'}
                className="field"
                inputMode="numeric"
                name="toZip"
                onChange={handleChange}
                placeholder="78664"
                type="text"
                value={formData.toZip}
              />
              <FieldError id={`${variant}-toZip-error`} message={errors.toZip} />
            </label>
          </div>
        </>
      ) : (
        <label className="block">
          <span className="field-label">What can we help with?</span>
          <select className="field" name="subject" onChange={handleChange} value={formData.subject}>
            {subjectOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </label>
      )}

      <label className="block">
        <span className="field-label">
          {variant === 'quote' ? 'Move details' : 'Message'}
        </span>
        <textarea
          aria-invalid={errors.notes ? 'true' : 'false'}
          className="field"
          name="notes"
          onChange={handleChange}
          placeholder={
            variant === 'quote'
              ? 'Home size, stairs, elevators, storage needs, specialty items, or anything else that affects the move...'
              : 'Tell us your question, service area, or the kind of move you\'re planning...'
          }
          rows={5}
          value={formData.notes}
        />
        <FieldError id={`${variant}-notes-error`} message={errors.notes} />
      </label>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn btn-primary w-full"
      >
        {status === 'submitting'
          ? 'Sending…'
          : variant === 'quote'
            ? 'Send my estimate request'
            : 'Send message'}
        <span aria-hidden="true">→</span>
      </button>

      {status === 'success' && submitMessage && (
        <p className="rounded-lg bg-[var(--color-bone)] px-4 py-3 text-sm text-[var(--color-graphite)]" role="status">
          {submitMessage}
        </p>
      )}

      {status === 'error' && submitMessage && (
        <p className="rounded-lg border border-[color-mix(in_srgb,var(--color-danger)_35%,white)] bg-[color-mix(in_srgb,var(--color-danger)_8%,white)] px-4 py-3 text-sm text-[var(--color-danger)]" role="alert">
          {submitMessage}
        </p>
      )}
    </form>
  );
}
