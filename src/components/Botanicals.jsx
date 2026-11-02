/**
 * Hand-drawn botanical linework used as floating ornament around the hero
 * composition. Stroke-based, so it sits over photography without clipping it
 * the way a cropped bitmap would.
 */

const drawStyle = {
  fill: 'rgba(201, 164, 95, 0.05)',
  stroke: 'currentColor',
  strokeWidth: 0.85,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function StarAnise({ size = 96 }) {
  const petals = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" {...drawStyle}>
      {petals.map((angle) => (
        <g key={angle} transform={`rotate(${angle} 50 50)`}>
          <path d="M50 50C43 38 43.5 20 50 7c6.5 13 7 31 0 43Z" />
          <path d="M50 45v-11" strokeWidth="0.5" opacity="0.7" />
        </g>
      ))}
      <circle cx="50" cy="50" r="4.6" />
      {petals.map((angle) => (
        <g key={`seed-${angle}`} transform={`rotate(${angle} 50 50)`}>
          <ellipse cx="50" cy="30" rx="1.7" ry="2.6" strokeWidth="0.5" opacity="0.8" />
        </g>
      ))}
    </svg>
  );
}

export function Cardamom({ size = 74 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" {...drawStyle}>
      <path d="M50 92c-3-9-11-22-13-36-2-15 4-27 13-38 9 11 15 23 13 38-2 14-10 27-13 36Z" />
      <path d="M50 92V18" strokeWidth="0.55" opacity="0.75" />
      <path d="M42 60c3-11 2-24-1-33M58 60c-3-11-2-24 1-33" strokeWidth="0.5" opacity="0.6" />
      <path d="M50 18c1-6 3-9 6-11" strokeWidth="0.6" />
      <ellipse cx="58" cy="6.5" rx="2.2" ry="1.4" transform="rotate(-24 58 6.5)" strokeWidth="0.5" opacity="0.8" />
    </svg>
  );
}

export function MintSprig({ size = 104 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" {...drawStyle}>
      <path d="M52 94c-2-20 1-42-2-66" strokeWidth="0.7" />
      <path d="M50 74c-9-6-16-9-25-11 3 10 11 16 22 18" />
      <path d="M51 61c-8-7-14-12-22-15 1 10 8 18 18 21" />
      <path d="M52 48c8-5 15-7 23-7-4 9-13 14-23 14" />
      <path d="M51 36c-7-6-12-11-19-14 0 9 6 16 15 19" />
      <path d="M52 26c6-6 11-10 18-12-1 8-7 14-15 16" />
      <path d="M50 28c-1-9 1-16 4-22" strokeWidth="0.6" />
    </svg>
  );
}

export function Clove({ size = 62 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" {...drawStyle}>
      <circle cx="50" cy="17" r="7" />
      <path d="M43 22c1 5 5 7 7 10 2-3 6-5 7-10" strokeWidth="0.6" />
      <path d="M50 32c4 9 5 22 4 34-1 9-4 16-7 22" />
      <path d="M47 88c-2-9-1-19 2-28" strokeWidth="0.5" opacity="0.7" />
      <path d="M58 26c4 6 6 13 6 20" strokeWidth="0.5" opacity="0.6" />
    </svg>
  );
}

export function Chilli({ size = 78 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" {...drawStyle}>
      <path d="M55 22c-6 6-9 17-9 29 0 17 6 31 18 39 9-6 13-17 12-30-1-14-8-25-15-31" />
      <path d="M55 22c-2-7 1-12 6-14" strokeWidth="0.7" />
      <path d="M55 22c5 1 9 4 11 8" strokeWidth="0.6" />
      <path d="M57 30c-4 12-4 27 1 40" strokeWidth="0.5" opacity="0.65" />
      <path d="M60 18c4-3 9-3 13 0" strokeWidth="0.6" />
    </svg>
  );
}

export function LeafSprig({ size = 88 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" {...drawStyle}>
      <path d="M20 86C34 66 52 44 82 16" strokeWidth="0.6" />
      <path d="M34 70c8-1 15-5 20-12-8-1-16 2-21 8" />
      <path d="M45 56c9 0 16-4 21-11-9-1-17 3-22 9" />
      <path d="M57 42c8 0 15-4 20-11-9-1-16 3-21 9" />
      <path d="M40 78c-8 1-14 4-19 10 9 1 16-2 21-7" />
    </svg>
  );
}
