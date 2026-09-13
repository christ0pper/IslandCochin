import { useState } from 'react';
import { bookingOptions, site } from '../../data/site';
import Button from '../ui/Button';

/**
 * Today as a local calendar date. `toISOString()` would give the UTC day, which
 * in IST (+05:30) reads as yesterday between midnight and 05:30 — enough to let
 * `min` accept an arrival date that has already passed.
 */
const today = () => {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
};

/**
 * Enquiry bar. Nothing is submitted anywhere yet — wire `onSubmit` to a form
 * endpoint or booking engine when one exists.
 */
export default function BookingBar() {
  const [form, setForm] = useState({
    type: bookingOptions[0],
    arrival: '',
    departure: '',
    guests: 2,
  });
  const [status, setStatus] = useState('');

  const update = (key) => (event) => {
    const value = event.target.value;
    setStatus('');
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      // departure can never precede arrival
      if (key === 'arrival' && next.departure && next.departure < value) {
        next.departure = value;
      }
      return next;
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Enquiry', form);
    // No endpoint yet, but the form must not be a dead end: acknowledge the
    // enquiry and point at the one channel that does work today.
    setStatus(
      `Thanks — we have your enquiry. Call ${site.phone} to confirm dates and numbers.`
    );
  };

  return (
    <section className="bookbar" id="book" aria-label="Booking">
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
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="f-in">Arrival</label>
            <input
              id="f-in"
              name="arrival"
              type="date"
              autoComplete="off"
              min={today()}
              value={form.arrival}
              onChange={update('arrival')}
            />
          </div>

          <div className="field">
            <label htmlFor="f-out">Departure</label>
            <input
              id="f-out"
              name="departure"
              type="date"
              autoComplete="off"
              min={form.arrival || today()}
              value={form.departure}
              onChange={update('departure')}
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
              max="1000"
              value={form.guests}
              onChange={update('guests')}
            />
          </div>

          <Button type="submit" className="bookbar__go">
            Check availability
          </Button>

          <p className="bookbar__status" role="status" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}
