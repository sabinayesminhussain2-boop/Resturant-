import { Diamond } from './Icons';
import { marqueeWords } from '../data/content';

function Group() {
  return (
    <span className="marquee__group">
      {marqueeWords.map((word) => (
        <span className="marquee__item" key={word}>
          <span>{word}</span>
          <span className="marquee__diamond" aria-hidden="true">
            <Diamond size={8} />
          </span>
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <Group />
        <Group />
      </div>
    </div>
  );
}
