import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from './Button';
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

  if (!formData.name.trim()) {
    errors.name = 'Enter your name so we know who to reply to.';
  }

  if (!phoneDigits && !email) {
    errors.contact = 'Add a phone number or email address so we can get back to you.';
  }

  if (phoneDigits && phoneDigits.length < 10) {
    errors.phone = 'Use a full phone number with at least 10 digits.';
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (variant === 'quote') {
    if (!/^\d{5}$/.test(formData.fromZip.trim())) {
      errors.fromZip = 'Enter a 5-digit origin ZIP code.';
    }

    if (!/^\d{5}$/.test(formData.toZip.trim())) {
      errors.toZip = 'Enter a 5-digit destination ZIP code.';
    }

    if (!formData.moveDate) {
      errors.moveDate = 'Choose your preferred move date or the closest target date.';
    }

    if (!formData.notes.trim()) {
      errors.notes = 'Add a few move details like home size, stairs, elevators, or specialty items.';
    }
  } else if (!formData.notes.trim()) {
    errors.notes = 'Tell us what you need help with so we can reply usefully.';
  }

  return errors;
}

function getFieldClass(error) {
  return `w-full rounded-md border bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900 ${
    error ? 'border-red-300' : 'border-slate-300'
  }`;
}

function FieldError({ id, message }) {
  if (!message) {
    return null;
  }

  return (
    <p className="mt-2 text-sm text-red-700" id={id}>
      {message}
    </p>
  );
}

function getOfflineMessage() {
  if (publicContact.hasPhone && publicContact.hasEmail) {
    return 'Online form delivery is not connected in this environment. Please call or email us directly.';
  }

  if (publicContact.hasPhone) {
    return 'Online form delivery is not connected in this environment. Please call us directly or use the full quote path.';
  }

  return 'Online form delivery is not connected in this environment. Please use the quote path or try again when direct contact details are published.';
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
      if (!prev[name] && !((name === 'phone' || name === 'email') && prev.contact)) {
        return prev;
      }

      const next = { ...prev };
      delete next[name];
      if (name === 'phone' || name === 'email') {
        delete next.contact;
      }
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
      setSubmitMessage('Please fix the highlighted fields and try again.');
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
        {
          formType: variant === 'quote' ? 'quote' : 'contact',
          ...formData,
        },
        formEndpoint,
      );
      setStatus('success');
      setSubmitMessage(
        variant === 'quote'
          ? 'Thanks. Your quote request was sent and the office can follow up with the next step.'
          : 'Thanks. Your message was sent and we will reply as soon as we can.',
      );
      setErrors({});
      setFormData(getInitialState(variant));
    } catch {
      setStatus('error');
      setSubmitMessage(getOfflineMessage());
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {!canSubmitOnline && (
        <p className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900" role="status">
          {getOfflineMessage()} You can still review the form before the approved delivery path is
          connected.
        </p>
      )}

      {errors.contact && (
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" id={`${variant}-contact-error`}>
          {errors.contact}
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-slate-700">Name</span>
          <input
            autoComplete="name"
            aria-describedby={errors.name ? `${variant}-name-error` : undefined}
            aria-invalid={errors.name ? 'true' : 'false'}
            className={getFieldClass(errors.name)}
            name="name"
            onChange={handleChange}
            placeholder="Your name"
            required
            type="text"
            value={formData.name}
          />
          <FieldError id={`${variant}-name-error`} message={errors.name} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-slate-700">Phone</span>
          <input
            autoComplete="tel"
            aria-describedby={
              [errors.phone ? `${variant}-phone-error` : '', errors.contact ? `${variant}-contact-error` : '']
                .filter(Boolean)
                .join(' ') || undefined
            }
            aria-invalid={errors.phone || errors.contact ? 'true' : 'false'}
            className={getFieldClass(errors.phone || errors.contact)}
            name="phone"
            onChange={handleChange}
            placeholder="(512) 555-0101"
            type="tel"
            value={formData.phone}
          />
          <FieldError id={`${variant}-phone-error`} message={errors.phone} />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-slate-700">Email</span>
        <input
          autoComplete="email"
          aria-describedby={
            [errors.email ? `${variant}-email-error` : '', errors.contact ? `${variant}-contact-error` : '']
              .filter(Boolean)
              .join(' ') || undefined
          }
          aria-invalid={errors.email || errors.contact ? 'true' : 'false'}
          className={getFieldClass(errors.email || errors.contact)}
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
              <span className="mb-1.5 block text-sm font-semibold text-slate-700">Move type</span>
              <select
                aria-invalid="false"
                className={getFieldClass(false)}
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
                aria-describedby={errors.moveDate ? `${variant}-moveDate-error` : undefined}
                aria-invalid={errors.moveDate ? 'true' : 'false'}
                className={getFieldClass(errors.moveDate)}
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
              <span className="mb-1.5 block text-sm font-semibold text-slate-700">Origin ZIP</span>
              <input
                aria-describedby={errors.fromZip ? `${variant}-fromZip-error` : undefined}
                aria-invalid={errors.fromZip ? 'true' : 'false'}
                className={getFieldClass(errors.fromZip)}
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
              <span className="mb-1.5 block text-sm font-semibold text-slate-700">Destination ZIP</span>
              <input
                aria-describedby={errors.toZip ? `${variant}-toZip-error` : undefined}
                aria-invalid={errors.toZip ? 'true' : 'false'}
                className={getFieldClass(errors.toZip)}
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
          <span className="mb-1.5 block text-sm font-semibold text-slate-700">What do you need help with?</span>
          <select
            className={getFieldClass(false)}
            name="subject"
            onChange={handleChange}
            value={formData.subject}
          >
            {subjectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      )}

      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold text-slate-700">
          {variant === 'quote' ? 'Move details' : 'Message'}
        </span>
        <textarea
          aria-describedby={errors.notes ? `${variant}-notes-error` : undefined}
          aria-invalid={errors.notes ? 'true' : 'false'}
          className={getFieldClass(errors.notes)}
          name="notes"
          onChange={handleChange}
          placeholder={
            variant === 'quote'
              ? 'Home size, stairs, elevators, storage needs, specialty items, or anything else that affects the move...'
              : 'Tell us your question, your service area, or what kind of move you are planning...'
          }
          rows={4}
          value={formData.notes}
        />
        <FieldError id={`${variant}-notes-error`} message={errors.notes} />
      </label>

      <Button className="w-full min-h-12" disabled={status === 'submitting'} size="lg" type="submit" variant="primary">
        {status === 'submitting'
          ? 'Sending…'
          : variant === 'quote'
            ? 'Send my quote request'
            : 'Send my message'}
      </Button>

      {status === 'success' && submitMessage && (
        <p className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700" role="status">
          {submitMessage}
        </p>
      )}

      {status === 'error' && submitMessage && (
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {submitMessage}
        </p>
      )}
    </form>
  );
}
