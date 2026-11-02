import { useEffect, useRef, useState } from 'react';
import { brand, navLinks } from '../data/content';
import Reveal from './Reveal';
import { ArrowRight, Instagram, Leaf, Pinterest } from './Icons';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Footer({ enquiry, onClearEnquiry, onToast }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [hasError, setHasError] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!enquiry) return;
    setStatus('');
    setHasError(false);
    const id = window.setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 650);
    return () => window.clearTimeout(id);
  }, [enquiry]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = email.trim();

    if (!EMAIL_PATTERN.test(value)) {
      setHasError(true);
      setStatus('Please enter a valid email address so we can reach you.');
      return;
    }

    setHasError(false);
    setEmail('');
    setStatus(
      enquiry
        ? `Thank you — we'd write to ${value} about the ${enquiry} within the hour.`
        : `Thank you — we'd write to ${value} with the next available evenings.`
    );
  };

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <Reveal className="invite">
          <div className="invite__copy">
            <p className="eyebrow">
              <span className="eyebrow__rule" aria-hidden="true" />
              05 — The Invitation
            </p>
            <h2 className="display">
              Bring your people.
              <br />
              <em>We'll bring the fire.</em>
            </h2>
            <p className="invite__text">
              Tell us when you'd like the room and we'll write back personally —
              first with the evening, then with the menu we're cooking that week.
            </p>
          </div>

          <div className="invite__panel">
            <p className="invite__label">Request an invitation</p>

            {enquiry && (
              <div className="invite__enquiry">
                <span>
                  Enquiring about <strong>{enquiry}</strong>
                </span>
                <button type="button" onClick={onClearEnquiry}>
                  Clear
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="invite__field">
                <label className="sr-only" htmlFor="footer-email">
                  Email address
                </label>
                <input
                  className="invite__input"
                  id="footer-email"
                  ref={inputRef}
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  aria-invalid={hasError || undefined}
                  aria-describedby="invite-status"
                />
                <button className="invite__submit" type="submit" aria-label="Request an invitation">
                  <ArrowRight size={15} />
                </button>
              </div>
              <p className={`invite__status ${hasError ? 'is-error' : ''}`} id="invite-status" role="status">
                {status}
              </p>
              <p className="invite__disclaimer">
                A frontend demonstration — this form does not send email, and no
                reservations are stored.
              </p>
            </form>
          </div>
        </Reveal>

        <div className="footer__cols">
          <div className="footer__brand">
            <p className="footer__brand-mark">{brand.mark}</p>
            <span className="footer__brand-sub">{brand.sub}</span>
            <p className="footer__tagline">
              Modern Indian, quietly global. A dining room built around slow fire,
              aged spice and the long table.
            </p>
            <p className="footer__badge">
              <Leaf size={16} />
              Since 2016 · New Delhi
            </p>
          </div>

          <div>
            <p className="footer__heading">Visit</p>
            <ul className="footer__list">
              <li>{brand.address}</li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sunder+Nagar+New+Delhi"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get directions
                </a>
              </li>
              <li>
                <a href="#menu">View the menu</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer__heading">Hours</p>
            <ul className="footer__list footer__hours">
              <li>
                <span>Tuesday — Sunday</span>
              </li>
              <li>Lunch · 12:30 — 15:00</li>
              <li>Dinner · 19:00 — 23:30</li>
              <li>Closed Mondays</li>
            </ul>
          </div>

          <div>
            <p className="footer__heading">Contact</p>
            <ul className="footer__list">
              <li>
                <a href={brand.phoneHref}>{brand.phoneLabel}</a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </li>
            </ul>
            <p className="footer__heading footer__heading--social">Follow</p>
            <div className="footer__social">
              <button
                type="button"
                className="social-btn"
                onClick={() => onToast('Instagram — this is a demonstration site, so the account is not live.')}
              >
                <Instagram />
                Instagram
              </button>
              <button
                type="button"
                className="social-btn"
                onClick={() => onToast('Pinterest — this is a demonstration site, so the account is not live.')}
              >
                <Pinterest />
                Pinterest
              </button>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Velora Table · A frontend demonstration, plated with care.</p>
          <nav aria-label="Footer">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="footer__top" href="#home">
            Back to top
            <ArrowRight size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
