import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Adds `.is-in` to an element the first time it enters the viewport.
 * Returns a ref to attach and a boolean for conditional rendering.
 */
export function useReveal({ threshold = 0.16, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      el.classList.add('is-in');
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-in');
            setRevealed(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, revealed };
}

/** Pointer-driven parallax expressed as CSS custom properties on the target. */
export function usePointerParallax(ref, { strength = 1, enabled = true } = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!finePointer || prefersReducedMotion()) return;

    let frame = 0;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const apply = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      el.style.setProperty('--px', current.x.toFixed(3));
      el.style.setProperty('--py', current.y.toFixed(3));
      el.style.setProperty('--pxs', (current.x * 4 * strength).toFixed(2));
      el.style.setProperty('--pys', (current.y * 4 * strength).toFixed(2));
      if (Math.abs(target.x - current.x) > 0.001 || Math.abs(target.y - current.y) > 0.001) {
        frame = requestAnimationFrame(apply);
      } else {
        frame = 0;
      }
    };

    const kick = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const onMove = (event) => {
      const rect = el.getBoundingClientRect();
      target.x = (event.clientX - rect.left) / rect.width - 0.5;
      target.y = (event.clientY - rect.top) / rect.height - 0.5;
      kick();
    };

    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      kick();
    };

    const zone = el.parentElement || el;
    zone.addEventListener('pointermove', onMove);
    zone.addEventListener('pointerleave', onLeave);

    return () => {
      zone.removeEventListener('pointermove', onMove);
      zone.removeEventListener('pointerleave', onLeave);
      cancelAnimationFrame(frame);
    };
  }, [ref, strength, enabled]);
}

/** Tracks which section id is currently in view for the primary navigation. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.2, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

/** Locks page scroll while an overlay is open. */
export function useScrollLock(locked) {
  useEffect(() => {
    if (!locked) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
}
