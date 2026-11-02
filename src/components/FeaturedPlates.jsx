import { dishes, galleryPlates, stats } from '../data/content';
import Reveal from './Reveal';
import { ArrowUpRight, Diamond } from './Icons';

function Fork() {
  return (
    <svg className="gallery__fork" width="22" height="150" viewBox="0 0 22 150" fill="none" aria-hidden="true">
      <path
        d="M6 10v32c0 6 2.5 9 5 9s5-3 5-9V10M11 51v88M4 10v18M18 10v18M8.5 10v15M13.5 10v15"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FeaturedPlates({ onOpenDish }) {
  return (
    <section className="plates section" id="menu" aria-labelledby="plates-title">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">
            <span className="eyebrow__rule" aria-hidden="true" />
            04 — Featured Plates
            <span className="eyebrow__rule" aria-hidden="true" />
          </p>
          <h2 className="display" id="plates-title">
            Composed at <em>the pass</em>
          </h2>
          <p className="section-head__lede">
            Two plates that explain the room: a brass thali built for sharing, and
            a Margherita that never leaves the menu.
          </p>
        </Reveal>

        <div className="gallery">
          {galleryPlates.map((plate, index) => (
            <Reveal as="figure" className="gallery__item" key={plate.id} delay={index * 110}>
              <div className="gallery__frame">
                <img
                  src={plate.image}
                  alt={plate.alt}
                  width="1408"
                  height="768"
                  loading="lazy"
                  decoding="async"
                />
                <span className="gallery__sheen" aria-hidden="true" />
                <span className="gallery__index" aria-hidden="true">
                  0{index + 1}
                </span>
              </div>
              <figcaption className="gallery__caption">
                <div className="gallery__caption-head">
                  <h3>{plate.name}</h3>
                  <span className="gallery__meta">{plate.meta}</span>
                </div>
                <p>{plate.caption}</p>
              </figcaption>
            </Reveal>
          ))}
          <span className="gallery__divider" aria-hidden="true">
            <Fork />
          </span>
        </div>

        <Reveal className="stats">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="stat__value">{stat.value}</span>
              <span className="stat__label">{stat.label}</span>
            </div>
          ))}
        </Reveal>

        <div className="menu-index">
          <Reveal className="menu-index__head">
            <div>
              <p className="eyebrow">
                <span className="eyebrow__rule" aria-hidden="true" />
                The wider table
              </p>
              <h3 className="menu-index__title">
                The full menu, <em>plate by plate</em>
              </h3>
            </div>
            <p className="menu-index__note">
              Indian signatures first, then Italy and the international counter.
              Prices in INR, inclusive of taxes.
            </p>
          </Reveal>

          <ul className="menu-list">
            {dishes.map((dish) => (
              <li className="menu-list__item" key={dish.id}>
                <button
                  type="button"
                  className="menu-row"
                  onClick={() => onOpenDish(dish)}
                  aria-haspopup="dialog"
                >
                  <span className="menu-row__thumb" aria-hidden="true">
                    {dish.thumb ? (
                      <img src={dish.thumb} alt="" width="480" height="480" loading="lazy" decoding="async" />
                    ) : (
                      <span className="menu-row__mono">{dish.name.charAt(0)}</span>
                    )}
                  </span>
                  <span className="menu-row__body">
                    <span className="menu-row__cat">
                      {dish.category}
                      <span className="menu-row__dot" aria-hidden="true" />
                      {dish.region}
                    </span>
                    <span className="menu-row__name">{dish.name}</span>
                    <span className="menu-row__desc">{dish.description}</span>
                  </span>
                  <span className="menu-row__side">
                    <span className="menu-row__price">{dish.price}</span>
                  </span>
                  <span className="menu-row__arrow" aria-hidden="true">
                    <ArrowUpRight size={12} />
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <Reveal className="menu-index__foot">
            <span className="menu-index__orn" aria-hidden="true">
              <Diamond size={9} />
            </span>
            <p>
              Vegetarian, vegan and gluten-free versions of most plates are
              available — ask the maître d'. Menus change with the market.
            </p>
            <a className="btn btn--ghost" href="#contact">
              <span>Enquire about a table</span>
              <ArrowUpRight />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
