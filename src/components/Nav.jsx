import { useEffect, useRef, useState } from 'react';
import { navLinks, brand } from '../data/content';
import { useActiveSection, useScrollLock } from '../hooks/useMotion';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(['home', 'discover', 'story', 'menu']);
  const progressRef = useRef(null);
  const toggleRef = useRef(null);

  useScrollLock(open);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 32);

      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(y / max, 1) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <a className="skip-link" href="#discover">
        Skip to the plates
      </a>

      <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
        <div className="nav__progress" ref={progressRef} aria-hidden="true" />
        <div className="nav__inner container">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand__mark">{brand.mark}</span>
            <span className="brand__sub">{brand.sub}</span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav__link ${isActive ? 'is-active' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="nav__actions">
            <a className="btn btn--ghost nav__cta" href="#menu">
              <span>Explore the Menu</span>
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="nav__toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="nav__toggle-label">{open ? 'Close' : 'Menu'}</span>
              <span className={`nav__burger ${open ? 'is-open' : ''}`} aria-hidden="true">
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="mobile-menu__inner">
          <p className="eyebrow mobile-menu__eyebrow">Velora Table · New Delhi</p>
          <nav className="mobile-menu__links" aria-label="Mobile">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-menu__link"
                style={{ '--i': index }}
                onClick={closeMenu}
              >
                <span className="mobile-menu__num">0{index + 1}</span>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mobile-menu__foot">
            <a className="btn btn--solid" href="#menu" onClick={closeMenu}>
              Explore the Menu
            </a>
            <p>{brand.address}</p>
            <a href={brand.phoneHref}>{brand.phoneLabel}</a>
          </div>
        </div>
      </div>
    </>
  );
}
