import { useEffect, useRef } from 'react';
import { useScrollLock } from '../hooks/useMotion';
import { ArrowUpRight, Close, Diamond } from './Icons';

export default function DishModal({ dish, onClose, onEnquire }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  useScrollLock(Boolean(dish));

  useEffect(() => {
    if (!dish) return;

    const previousFocus = document.activeElement;
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      if (previousFocus instanceof HTMLElement) previousFocus.focus({ preventScroll: true });
    };
  }, [dish, onClose]);

  if (!dish) return null;

  return (
    <div className="modal">
      <button type="button" className="modal__backdrop" onClick={onClose} aria-label="Close plate details" />
      <div
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dish-title"
        ref={panelRef}
      >
        <div className={`modal__visual ${dish.image ? '' : 'modal__visual--letterpress'}`}>
          {dish.image ? (
            <img src={dish.image} alt={dish.alt} width="1408" height="768" decoding="async" />
          ) : (
            <div className="letterpress letterpress--modal" aria-hidden="true">
              <span className="letterpress__frame" />
              <span className="letterpress__cat">
                {dish.category} · {dish.region}
              </span>
              <span className="letterpress__orn">
                <Diamond size={12} />
              </span>
              <span className="letterpress__name">{dish.name}</span>
              <span className="letterpress__rule" />
              <span className="letterpress__ingredients">{dish.ingredients}</span>
            </div>
          )}
          <span className="modal__visual-label">{dish.category} · {dish.region}</span>
        </div>

        <div className="modal__body">
          <button type="button" className="modal__close" onClick={onClose} ref={closeRef} aria-label="Close plate details">
            <Close />
          </button>

          <p className="eyebrow">
            <span className="eyebrow__rule" aria-hidden="true" />
            From the kitchen
          </p>
          <h2 className="modal__title" id="dish-title">
            {dish.name}
          </h2>
          <p className="modal__desc">{dish.description}</p>
          <p className="modal__detail">{dish.detail}</p>

          <ul className="modal__notes" aria-label="Tasting notes">
            {dish.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>

          <dl className="modal__meta">
            <div>
              <dt>Price</dt>
              <dd>{dish.price}</dd>
            </div>
            <div>
              <dt>Origin</dt>
              <dd>{dish.region}</dd>
            </div>
            <div>
              <dt>Cuisine</dt>
              <dd>{dish.category}</dd>
            </div>
          </dl>

          <div className="modal__actions">
            <button type="button" className="btn btn--solid" onClick={() => onEnquire(dish.name)}>
              <span>Enquire about this plate</span>
              <ArrowUpRight />
            </button>
            <p className="modal__hint">
              No bookings are taken online — our maître d' replies personally,
              usually within the hour.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
