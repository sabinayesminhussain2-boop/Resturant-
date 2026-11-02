export function ArrowUpRight({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 12.5 12.5 3.5M5.5 3.5h7v7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2.5 9h13M10 3.5 15.5 9 10 14.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Close({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m4 4 12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function Diamond({ size = 10 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M6 0.8 11.2 6 6 11.2 0.8 6z" stroke="currentColor" strokeWidth="0.9" />
    </svg>
  );
}

export function Instagram({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2.6" y="2.6" width="14.8" height="14.8" rx="4.4" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="10" cy="10" r="3.6" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="14.4" cy="5.6" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function Pinterest({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.1" />
      <path d="M8.3 15.4c.5-1.9 1.1-4.2 1.6-6.4.1-.6-.2-1.5.5-1.9.9-.5 1.9.3 1.7 1.4-.2 1.1-1.1 2.5-2 2.1-.8-.4.1-2.3.9-3.1.9-.9 2.5-.8 3 .4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function Leaf({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M6 22c0-9 5.5-15 17-16-1 11-7 16-17 16Z" stroke="currentColor" strokeWidth="0.9" strokeLinejoin="round" />
      <path d="M6 22c3.5-4.6 7.6-8 13-10.4" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

export function ScrollCue() {
  return (
    <svg width="14" height="40" viewBox="0 0 14 40" fill="none" aria-hidden="true">
      <path d="M7 1v30" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 4" />
      <path d="m2.5 26.5 4.5 5 4.5-5" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
