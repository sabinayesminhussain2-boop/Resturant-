# Velora Table

A premium, single-page culinary experience frontend demo — an original food brand
built around a deep-emerald, editorial art direction. Modern Indian cooking is the
headline, with a small Italian corner and an international counter.

**This is a frontend demonstration.** There is no backend, database, authentication,
payment or real reservation system. The invitation form validates input and responds
in the interface only — it sends nothing.

---

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the build locally
```

Built with **React + Vite**. No 3D engine is used: the depth comes from CSS
transforms, layered compositions, pointer parallax and scroll-linked animation, which
keeps the demo light and puts the visual budget into the food photography.

## Structure

```
index.html
src/
  main.jsx                     font + stylesheet entry
  App.jsx                      page composition, dialog & toast state
  data/content.js              all copy, dishes, pantry, gallery — the brand lives here
  hooks/useMotion.js           reveal observer, pointer parallax, active section, scroll lock
  components/
    Nav.jsx                    transparent → frosted header, scroll progress, mobile menu
    Hero.jsx                   signature dish composition with floating botanicals
    Botanicals.jsx             hand-drawn SVG spices & herbs used as ornaments
    Marquee.jsx                ingredient ticker
    SignatureSelection.jsx     filterable plate grid + letterpress menu plates
    CulinaryExperience.jsx     "The Craft" editorial section + pantry
    FeaturedPlates.jsx         gallery, statistics, full menu index
    Footer.jsx                 invitation form, details, social controls
    DishModal.jsx              accessible plate detail dialog
    Icons.jsx / Reveal.jsx
  styles/                      base tokens + one stylesheet per section
public/images/                 optimised WebP photography, thumbnails, macro crops
scripts/prepare-images.mjs     image pipeline (source JPG → WebP, thumbs, crops)
```

## Art direction

- **Palette** — forest/emerald grounds (`#05110d` → `#0a2019`), warm ivory type
  (`#f4eee1`), restrained gold (`#c9a45f`).
- **Type** — Cormorant Garamond for display and italic accents, Jost for interface
  and body, Italiana for the wordmark. All fonts are self-hosted via `@fontsource`,
  so the page has no external font requests.
- **Photography** — ten art-directed dishes photographed top-down on emerald stone,
  converted to WebP with 480px thumbnails and macro crops used for the pantry,
  process list and floating botanicals.
- **Depth** — masked hero composition with a shadow pool, pointer-driven parallax and
  tilt, soft floating SVG botanicals, gallery and plate drift linked to scroll where
  `animation-timeline` is supported, film-grain overlay.

Dishes without photography (Fettuccine Alfredo, Spaghetti Pomodoro, Lasagna, Sushi,
Grilled Vegetables, Saffron Risotto) render as **letterpress menu plates** — real
typographic menu cards rather than broken or borrowed images. Dish prices and copy are
demonstration content.

## Interaction

- Every nav link smooth-scrolls to its section; the active section is tracked and
  underlined, with a scroll-progress rule in the header.
- Category filters (All / Indian / Italian / International) re-render the plate grid.
- Any plate opens a detail dialog (Esc to close, focus trapped and restored).
- "Enquire about this plate" closes the dialog, carries the dish into the footer form
  and focuses it; the form validates the email and responds in place.
- Social controls are buttons that explain the demo status; contact details are real
  `tel:` / `mailto:` links, and directions open Google Maps.
- Mobile menu locks the page behind it and closes on selection or Esc.

## Responsive & accessible

Tested at 320, 390, 820, 1440 and 1920px with no horizontal overflow. The layout
stacks the hero, single-columns the plate grid and gallery, and reduces ornament
count and motion on small screens. `prefers-reduced-motion` removes parallax,
floating, marquee, drift and reveal transitions while leaving all content visible.
Contrast, focus rings, skip link, landmark structure and dialog semantics are in
place; an axe-core audit reports no violations.

## Changing the brand

`src/data/content.js` holds the brand name, contacts, navigation, dishes, prices and
section copy. Colour and type tokens sit at the top of `src/styles/base.css`.
