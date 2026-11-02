import { useMemo, useState } from 'react';
import { categories, dishes } from '../data/content';
import Reveal from './Reveal';
import { ArrowUpRight, Diamond } from './Icons';

function spotlight(event) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width) * 100}%`);
  card.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height) * 100}%`);
}

function PlateCard({ dish, index, onOpen }) {
  const hasPhoto = Boolean(dish.image);

  return (
    <Reveal className="plate-cell" delay={(index % 2) * 90} style={{ '--i': index }}>
      <button
        type="button"
        className={`plate-card ${hasPhoto ? '' : 'plate-card--letterpress'}`}
        onClick={() => onOpen(dish)}
        onPointerMove={spotlight}
        aria-haspopup="dialog"
        style={{ '--i': index }}
      >
        <span className="plate-card__media">
          {hasPhoto ? (
            <img
              className="plate-card__img"
              src={dish.image}
              alt={dish.alt}
              width="1408"
              height="768"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <span className="letterpress" aria-hidden="true">
              <span className="letterpress__frame" />
              <span className="letterpress__cat">
                {dish.category} · {dish.region}
              </span>
              <span className="letterpress__orn">
                <Diamond size={11} />
              </span>
              <span className="letterpress__name">{dish.name}</span>
              <span className="letterpress__rule" />
              <span className="letterpress__ingredients">{dish.ingredients}</span>
            </span>
          )}

          <span className="plate-card__spot" aria-hidden="true" />
          <span className="plate-card__index" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          {dish.badge && <span className="plate-card__badge">{dish.badge}</span>}
          <span className="plate-card__open" aria-hidden="true">
            <span>View plate</span>
            <ArrowUpRight size={12} />
          </span>
        </span>

        <span className="plate-card__meta">
          <span className="plate-card__cat">
            {dish.category}
            <span className="plate-card__dot" aria-hidden="true" />
            {dish.region}
          </span>
          <span className="plate-card__row">
            <span className="plate-card__name">{dish.name}</span>
            <span className="plate-card__price">{dish.price}</span>
          </span>
          <span className="plate-card__desc">{dish.description}</span>
        </span>
      </button>
    </Reveal>
  );
}

export default function SignatureSelection({ onOpenDish }) {
  const [filter, setFilter] = useState('All');

  const counts = useMemo(() => {
    const map = { All: dishes.length };
    dishes.forEach((dish) => {
      map[dish.category] = (map[dish.category] || 0) + 1;
    });
    return map;
  }, []);

  const filtered = useMemo(
    () => (filter === 'All' ? dishes : dishes.filter((dish) => dish.category === filter)),
    [filter]
  );

  return (
    <section className="selection section" id="discover" aria-labelledby="selection-title">
      <div className="container">
        <Reveal className="section-head">
          <div className="section-head__left">
            <p className="eyebrow">
              <span className="eyebrow__rule" aria-hidden="true" />
              02 — The Selection
            </p>
            <h2 className="display" id="selection-title">
              A curated
              <br />
              <em>table</em>
            </h2>
          </div>
          <div className="section-head__right">
            <p className="section-head__lede">
              Indian signatures anchor the menu — dum biryanis, slow dals and
              clay-oven plates — while a corner of Italy and a small international
              counter keep the room curious.
            </p>
            <div className="filters" role="group" aria-label="Filter plates by cuisine">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`filter ${filter === category ? 'is-active' : ''}`}
                  aria-pressed={filter === category}
                  onClick={() => setFilter(category)}
                >
                  <span>{category}</span>
                  <span className="filter__count">{String(counts[category] ?? 0).padStart(2, '0')}</span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="plate-grid" key={filter}>
          {filtered.map((dish, index) => (
            <PlateCard key={dish.id} dish={dish} index={index} onOpen={onOpenDish} />
          ))}
        </div>

        <Reveal className="selection__foot" delay={80}>
          <span className="selection__foot-rule" aria-hidden="true" />
          <p>
            Plates are photographed as they leave the pass. The newest are still
            set in our house letterpress until the next sitting.
          </p>
          <span className="selection__foot-rule" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}
