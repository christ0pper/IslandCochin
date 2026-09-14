import { useEffect, useRef, useState } from 'react';
import { bookingOptions, dayOut, enquiryMessage, site } from '../../data/site';
import Button from '../ui/Button';

const PREFILL_EVENT = 'booking:prefill';
const DAY_OUT_MIN_GUESTS = 50;

/**
 * Lets any section hand the bar a booking type (e.g. "Check dates" on the Day
 * Out Package). The bar scrolls itself into view and focuses the date. Call it
 * from a link to href="#book" with preventDefault, so the plain jump still
 * works without JS.
 */
export function prefillBooking(type) {
  window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: { type } }));
}

/**
 * Today as a local calendar date. `toISOString()` would give the UTC day, which
 * in IST (+05:30) reads as yesterday between midnight and 05:30 — enough to let
 * `min` accept a date that has already passed.
 */
const today = () => {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
};

/** 2026-10-03 → "Saturday, 3 October 2026": the weekday helps the island check the date at a glance. */
const readableDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

/**
 * Enquiry bar. Bookings are taken by phone and WhatsApp, so submitting opens a
 * WhatsApp chat with the island, the details already written out.
 */
export default function BookingBar() {
  const [form, setForm] = useState({ type: bookingOptions[0].label, date: '', guests: 50 });
  const [status, setStatus] = useState('');
  const dateRef = useRef(null);

  useEffect(() => {
    const onPrefill = (event) => {
      const { type } = event.detail || {};
      if (!bookingOptions.some((option) => option.label === type)) return;
      setStatus('');
      setForm((prev) => ({ ...prev, type }));

      // Scroll first, focus after: focusing mid-scroll makes Chrome re-centre
      // on the field and the bar lands halfway down the screen.
      // scrollIntoView follows html's scroll-behavior, so reduced motion jumps.
      // A timer backs up scrollend (Safari lacks it; an already-visible bar
      // never scrolls). Whichever fires first cancels the other.
      let timer;
      const focusDate = () => {
        clearTimeout(timer);
        window.removeEventListener('scrollend', focusDate);
        dateRef.current?.focus({ preventScroll: true });
      };
      timer = setTimeout(focusDate, 1200);
      window.addEventListener('scrollend', focusDate);
      document.getElementById('book')?.scrollIntoView({ block: 'start' });
    };
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  const update = (key) => (event) => {
    setStatus('');
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const isDayOut = form.type === dayOut.bookingType;
  const belowDayOutMinimum = isDayOut && Number(form.guests) < DAY_OUT_MIN_GUESTS;

  const onSubmit = (event) => {
    event.preventDefault();
    const message = enquiryMessage({
      option: bookingOptions.find((option) => option.label === form.type),
      date: form.date ? readableDate(form.date) : '',
      guests: form.guests,
    });

    window.open(
      `${site.whatsappHref}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setStatus(`Opening WhatsApp… If it doesn’t open, call ${site.phone}. ${site.replyNote}`);
  };

  return (
    <section className="bookbar" id="book" aria-label="Booking enquiry">
      <div className="wrap">
        <form className="bookbar__form" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="f-type">I am planning</label>
            <select
              id="f-type"
              name="type"
              autoComplete="off"
              value={form.type}
              onChange={update('type')}
            >
              {bookingOptions.map((option) => (
                <option key={option.label}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="f-date">Date</label>
            <input
              ref={dateRef}
              id="f-date"
              name="date"
              type="date"
              autoComplete="off"
              min={today()}
              value={form.date}
              onChange={update('date')}
            />
          </div>

          <div className="field">
            <label htmlFor="f-guests">Guests</label>
            <input
              id="f-guests"
              name="guests"
              type="number"
              inputMode="numeric"
              autoComplete="off"
              spellCheck={false}
              min="1"
              max="200"
              required
              value={form.guests}
              onChange={update('guests')}
              aria-describedby={belowDayOutMinimum ? 'f-guests-hint' : undefined}
            />
          </div>

          <Button type="submit" className="bookbar__go">
            Enquire on WhatsApp
          </Button>

          {belowDayOutMinimum && (
            <p className="bookbar__hint" id="f-guests-hint">
              The Day Out Package is for groups of {DAY_OUT_MIN_GUESTS} or more. For a smaller
              group, choose a custom event and tell us what you have in mind.
            </p>
          )}

          <p className="bookbar__status" role="status" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
