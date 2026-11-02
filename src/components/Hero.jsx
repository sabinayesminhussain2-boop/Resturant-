import { useRef } from 'react';
import { usePointerParallax } from '../hooks/useMotion';
import { ArrowUpRight, ScrollCue } from './Icons';
import { Cardamom, Chilli, Clove, LeafSprig, MintSprig, StarAnise } from './Botanicals';
import { brand } from '../data/content';

const ornaments = [
  { className: 'orn--star', depth: 1.6, duration: '19s', delay: '-2s', art: StarAnise, size: 132 },
  { className: 'orn--mint', depth: 2.6, duration: '23s', delay: '-7s', art: MintSprig, size: 132 },
  { className: 'orn--cardamom', depth: 2, duration: '21s', delay: '-4s', art: Cardamom, size: 86 },
  { className: 'orn--clove', depth: 1.2, duration: '25s', delay: '-11s', art: Clove, size: 60 },
  { className: 'orn--chilli', depth: 2.2, duration: '22s', delay: '-9s', art: Chilli, size: 92 },
  { className: 'orn--leaf', depth: 1.4, duration: '26s', delay: '-5s', art: LeafSprig, size: 96 },
];

export default function Hero() {
  const visualRef = useRef(null);
  usePointerParallax(visualRef, { strength: 1 });

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__aura" aria-hidden="true" />
      <span className="hero__ghost" aria-hidden="true">
        Velora
      </span>

      <div className="hero__grid container">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">
            <span className="eyebrow__rule" aria-hidden="true" />
            {brand.established}
          </p>

          <h1 className="hero__title" id="hero-title">
            A Feast
            <br />
            for the <em>Senses</em>
          </h1>

          <p className="hero__lede">
            A modern Indian dining room where Hyderabadi dum cooking meets the
            Italian coast — saffron, smoke and hand-rolled pasta, served in
            candlelight.
          </p>

          <div className="hero__actions">
            <a className="btn btn--solid" href="#menu">
              <span>Explore the Menu</span>
              <ArrowUpRight />
            </a>
            <a className="btn btn--text" href="#story">
              <span>Our Story</span>
              <span className="btn__line" aria-hidden="true" />
            </a>
          </div>

          <div className="hero__signature">
            <span className="seal-medallion" aria-hidden="true">
              AM
            </span>
            <div className="hero__signature-text">
              <p className="hero__signature-name">Aarav Menon</p>
              <p className="hero__signature-role">Chef de Cuisine · The dum room</p>
            </div>
            <span className="hero__signature-rule" aria-hidden="true" />
            <p className="hero__signature-note">
              Ten years
              <br />
              of slow fire
            </p>
          </div>
        </div>

        <div className="hero__stage">
          <div className="hero__visual" ref={visualRef}>
            <div className="hero__halo" aria-hidden="true" />
            <div className="hero__shadow" aria-hidden="true" />
            <div className="hero__arc" aria-hidden="true" />

            <div className="hero__scene">
              <img
                className="hero__image"
                src="/images/hero-biryani.webp"
                alt="Hyderabadi dum biryani with saffron basmati, boiled egg and mint, served in a black ceramic bowl with raita and whole spices scattered on emerald stone"
                width="1408"
                height="768"
                fetchPriority="high"
                decoding="async"
              />
              <span className="hero__scene-shade" aria-hidden="true" />
            </div>

            {ornaments.map((ornament) => {
              const Art = ornament.art;
              return (
                <span
                  key={ornament.className}
                  className={`ornament ${ornament.className}`}
                  style={{
                    '--depth': ornament.depth,
                    '--float-duration': ornament.duration,
                    '--float-delay': ornament.delay,
                  }}
                  aria-hidden="true"
                >
                  <Art size={ornament.size} />
                </span>
              );
            })}

            <div className="hero__seal" aria-hidden="true">
              <span className="hero__seal-ring" />
              <span className="hero__seal-inner">
                <span className="hero__seal-kicker">Slow fire</span>
                <span className="hero__seal-value">02 hrs</span>
                <span className="hero__seal-kicker">Dum-cooked</span>
              </span>
            </div>
          </div>

          <p className="hero__caption">
            <span className="hero__caption-index">No. 01</span>
            <span className="hero__caption-name">Hyderabadi Dum Biryani</span>
          </p>
        </div>
      </div>

      <div className="hero__foot container">
        <a className="scroll-cue" href="#discover">
          <ScrollCue />
          <span>Scroll to discover</span>
        </a>
        <p className="hero__note">
          Open Tuesday — Sunday
          <span aria-hidden="true"> · </span>
          12:30 — 23:30
        </p>
      </div>
    </section>
  );
}
