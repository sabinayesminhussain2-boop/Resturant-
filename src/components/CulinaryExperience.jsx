import { craftSteps, pantry } from '../data/content';
import Reveal from './Reveal';
import { Diamond } from './Icons';

export default function CulinaryExperience() {
  return (
    <section className="craft section" id="story" aria-labelledby="craft-title">
      <span className="craft__ghost" aria-hidden="true">
        Craft
      </span>

      <div className="container">
        <div className="craft__grid">
          <Reveal className="craft__visual">
            <div className="craft__plate">
              <span
                className="craft__plate-img"
                role="img"
                aria-label="Dal makhani finished with cultured butter and cream in a dark bowl"
              />
              <span className="craft__ring" aria-hidden="true" />
              <span className="craft__ring craft__ring--inner" aria-hidden="true" />
              <span className="craft__stamp" aria-hidden="true">
                <span className="craft__stamp-value">18</span>
                <span className="craft__stamp-unit">hrs</span>
                <span className="craft__stamp-label">on the fire</span>
              </span>
            </div>

            <span className="craft__aside" aria-hidden="true">
              The dum room · 04:00
            </span>

            <div className="craft__spice" aria-hidden="true">
              <img src="/images/crops/herb-coriander.webp" alt="" loading="lazy" decoding="async" />
            </div>

            <p className="craft__caption">
              <span className="craft__caption-label">In the bowl</span>
              Dal Makhani, eighteen hours in copper, finished with white butter
            </p>
          </Reveal>

          <div className="craft__copy">
            <Reveal>
              <p className="eyebrow">
                <span className="eyebrow__rule" aria-hidden="true" />
                03 — The Craft
              </p>
              <h2 className="display" id="craft-title">
                Patience,
                <br />
                <em>plated.</em>
              </h2>
              <p className="craft__lede">
                Our kitchen keeps two clocks: the wood oven in the Italian corner,
                and the copper handi in the dum room. One counts ninety seconds.
                The other counts hours.
              </p>
              <p className="craft__text">
                Velora began as a twelve-seat kitchen in Hyderabad, serving our
                grandmother's biryani until the handi was empty. The room is larger
                now, the menu wider, but the fire, the spice and the waiting are
                unchanged.
              </p>
            </Reveal>

            <ol className="process">
              {craftSteps.map((step, index) => (
                <Reveal as="li" className="process__item" key={step.number} delay={index * 80}>
                  <span className="process__num">{step.number}</span>
                  <div className="process__body">
                    <h3 className="process__title">{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                  <span className="process__thumb">
                    <img src={step.image} alt={step.alt} width="520" height="520" loading="lazy" decoding="async" />
                  </span>
                </Reveal>
              ))}
            </ol>

            <Reveal className="craft__quote">
              <Diamond size={12} />
              <blockquote>
                A great plate should feel inevitable — as though the ingredients
                had always meant to meet.
              </blockquote>
              <cite>Aarav Menon, Chef de Cuisine</cite>
            </Reveal>
          </div>
        </div>

        <Reveal className="pantry">
          <div className="pantry__head">
            <p className="eyebrow">In the pantry</p>
            <p className="pantry__note">
              Twenty-six blends, ground to order every morning.
            </p>
          </div>
          <ul className="pantry__list">
            {pantry.map((item, index) => (
              <li className="pantry__item" key={item.name} style={{ '--i': index }}>
                <span className="pantry__img">
                  <img src={item.image} alt="" width="520" height="520" loading="lazy" decoding="async" />
                </span>
                <span className="pantry__name">{item.name}</span>
                <span className="pantry__origin">{item.origin}</span>
              </li>
            ))}
          </ul>
          <p className="pantry__foot">
            Saffron from Pampore · Basmati aged eighteen months · Chili ground
            by hand
          </p>
        </Reveal>
      </div>
    </section>
  );
}
