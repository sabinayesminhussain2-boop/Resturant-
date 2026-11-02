/**
 * Velora Table — content source.
 * A single landing page: all copy and plates live here so the brand can be
 * renamed or re-seasoned without touching layout code.
 */

export const brand = {
  name: 'Velora Table',
  mark: 'Velora',
  sub: 'Table',
  established: 'Hyderabad · Est. 2016',
  tagline: 'A Feast for the Senses',
  address: 'The Courtyard, 14 Sunder Nagar, New Delhi 110003',
  phoneLabel: '+91 11 4567 8910',
  phoneHref: 'tel:+911145678910',
  email: 'table@veloratable.com',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Discover', href: '#discover' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
];

export const marqueeWords = [
  'Saffron from Pampore',
  'Aged basmati',
  'Dum-cooked over embers',
  'Hand-rolled pasta',
  'Small batches, slow fire',
  'Spice ground to order',
];

export const categories = ['All', 'Indian', 'Italian', 'International'];

/**
 * `image` is optional on purpose: plates without a photograph are rendered as
 * letterpress menu plates, so the grid never shows a broken or borrowed image.
 */
export const dishes = [
  {
    id: 'hyderabadi-dum-biryani',
    name: 'Hyderabadi Dum Biryani',
    category: 'Indian',
    region: 'Hyderabad',
    price: '₹1,150',
    badge: 'House signature',
    image: '/images/hero-biryani.webp',
    thumb: '/images/thumbs/hero-biryani.webp',
    alt: 'Hyderabadi dum biryani in a black ceramic bowl with saffron rice, egg and mint',
    description:
      'Aged basmati layered with saffron milk, bone-in chicken and crisp shallots, sealed inside a copper handi before the slow fire.',
    detail: 'Two hours under the dum seal. Served with burani raita and mirchi ka salan.',
    notes: ['Aged basmati', 'Kashmiri saffron', 'Burani raita'],
  },
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    category: 'Indian',
    region: 'Old Delhi',
    price: '₹980',
    image: '/images/butter-chicken.webp',
    thumb: '/images/thumbs/butter-chicken.webp',
    alt: 'Butter chicken in a dark stone bowl with cream, coriander and dried chillies',
    description:
      'Tandoor-charred chicken folded into a velvet gravy of slow-roasted tomato, white butter and a whisper of kasuri methi.',
    detail: 'Finished at the pass with a spoon of cultured butter. Best with laccha paratha.',
    notes: ['Charred tandoor', 'White butter', 'Kasuri methi'],
  },
  {
    id: 'paneer-tikka',
    name: 'Paneer Tikka',
    category: 'Indian',
    region: 'Punjab',
    price: '₹820',
    image: '/images/paneer-tikka.webp',
    thumb: '/images/thumbs/paneer-tikka.webp',
    alt: 'Charred paneer tikka on a dark slate plate with mint chutney and lemon',
    description:
      'Hand-pressed paneer, hung yoghurt and green chilli, charred on skewers until the edges blister and smoke.',
    detail: 'Served with burnt onion, mint chutney and a dust of chaat masala.',
    notes: ['Hung curd', 'Mint chutney', 'Charred onion'],
  },
  {
    id: 'masala-dosa',
    name: 'Masala Dosa',
    category: 'Indian',
    region: 'Karnataka',
    price: '₹560',
    image: '/images/masala-dosa.webp',
    thumb: '/images/thumbs/masala-dosa.webp',
    alt: 'Crisp golden masala dosa on a dark stone plate with coconut chutney and sambar',
    description:
      'A lace-thin fermented crêpe wrapped around turmeric potato masala, with coconut chutney and a bowl of sambar.',
    detail: 'Batter fermented for twelve hours; dosa cast to order on a seasoned iron griddle.',
    notes: ['Coconut chutney', 'Sambar', 'Curry leaf'],
  },
  {
    id: 'chole-bhature',
    name: 'Chole Bhature',
    category: 'Indian',
    region: 'Punjab',
    price: '₹640',
    image: '/images/chole-bhature.webp',
    thumb: '/images/thumbs/chole-bhature.webp',
    alt: 'Chole bhature with puffed bread, chickpea curry, onion rings and lemon',
    description:
      'Black chickpeas simmered with tea leaves and black cardamom, served beside a puffed, feather-light bhatura.',
    detail: 'The bhatura is fried to order so it reaches the table still breathing steam.',
    notes: ['Black cardamom', 'Aged amchur', 'Pickled onion'],
  },
  {
    id: 'dal-makhani',
    name: 'Dal Makhani',
    category: 'Indian',
    region: 'North India',
    price: '₹720',
    image: '/images/dal-makhani.webp',
    thumb: '/images/thumbs/dal-makhani.webp',
    alt: 'Dal makhani in a dark bowl with cream, butter and coriander',
    description:
      'Urad dal kept at a murmur on the fire for eighteen hours, finished with cultured butter and a swirl of cream.',
    detail: 'Cooked in small copper deghs overnight. A house staple since the first menu.',
    notes: ['18-hour simmer', 'Cultured butter', 'Malabar pepper'],
  },
  {
    id: 'samosa',
    name: 'Samosa',
    category: 'Indian',
    region: 'Lucknow',
    price: '₹420',
    image: '/images/samosa.webp',
    thumb: '/images/thumbs/samosa.webp',
    alt: 'Three golden samosas on a slate plate with tamarind and mint chutneys',
    description:
      'Flaky pastry, spiced potato, green peas and pomegranate, with tamarind and mint chutneys at the side.',
    detail: 'Hand-folded each morning; the pastry is rested twice for its shattering layers.',
    notes: ['Hand-folded', 'Tamarind', 'Pomegranate'],
  },
  {
    id: 'rogan-josh',
    name: 'Rogan Josh',
    category: 'Indian',
    region: 'Kashmir',
    price: '₹1,280',
    image: '/images/rogan-josh.webp',
    thumb: '/images/thumbs/rogan-josh.webp',
    alt: 'Kashmiri rogan josh with lamb, ruby gravy and fennel in a dark bowl',
    description:
      'Lamb shoulder braised with fennel, dried ginger and Kashmiri chilli until it gives way to a spoon.',
    detail: 'Three hours in a sealed pot. Served with saffron pulao.',
    notes: ['Fennel', 'Dried ginger', 'Kashmiri chilli'],
  },
  {
    id: 'indian-thali',
    name: 'The Velora Thali',
    category: 'Indian',
    region: 'The House',
    price: '₹1,480',
    image: '/images/indian-thali.webp',
    thumb: '/images/thumbs/indian-thali.webp',
    alt: 'Brass Indian thali with nine small bowls of curries, rice, breads and dessert',
    description:
      'A brass platter of nine small plates — dal, seasonal vegetables, saffron rice, breads and a sweet to finish.',
    detail: 'The thali changes with the market each week. Vegetarian and non-vegetarian versions.',
    notes: ['Nine plates', 'Seasonal', 'House pickle'],
  },
  {
    id: 'margherita-pizza',
    name: 'Classic Margherita',
    category: 'Italian',
    region: 'Naples',
    price: '₹890',
    image: '/images/margherita-pizza.webp',
    thumb: '/images/thumbs/margherita-pizza.webp',
    alt: 'Neapolitan margherita pizza with basil and buffalo mozzarella on a dark slate',
    description:
      'Seventy-two-hour dough, San Marzano tomato, fior di latte and basil, blistered in the wood oven.',
    detail: 'Baked at 420°C for ninety seconds. One pizza at a time, always.',
    notes: ['72-hour dough', 'Fior di latte', 'Wood-fired'],
  },
  {
    id: 'fettuccine-alfredo',
    name: 'Creamy Fettuccine Alfredo',
    category: 'Italian',
    region: 'Rome',
    price: '₹940',
    description:
      'Ribbons of fresh egg fettuccine, Parmigiano-Reggiano and butter, emulsified at the pass into a silk.',
    detail: 'No cream — only pasta water, butter and cheese, worked until the sauce clings.',
    notes: ['Fresh egg pasta', 'Parmigiano 24-month', 'Cracked pepper'],
    ingredients: 'Egg fettuccine · Butter · Parmigiano · Black pepper',
  },
  {
    id: 'spaghetti-pomodoro',
    name: 'Spaghetti Pomodoro',
    category: 'Italian',
    region: 'Naples',
    price: '₹820',
    description:
      'Spaghetti tossed with crushed San Marzano tomatoes, garlic, olive oil and torn basil — nothing more.',
    detail: 'Our simplest plate, and the one the kitchen argues about most.',
    notes: ['San Marzano', 'Cold-pressed oil', 'Basil'],
    ingredients: 'Spaghetti · San Marzano · Garlic · Basil',
  },
  {
    id: 'lasagna',
    name: 'Lasagna Bolognese',
    category: 'Italian',
    region: 'Emilia-Romagna',
    price: '₹1,050',
    description:
      'Eight layers of spinach pasta, slow ragù and béchamel, baked until the top turns to gold.',
    detail: 'Ragù simmered four hours; pasta rolled thin enough to read through.',
    notes: ['Hand-rolled', 'Slow ragù', 'Béchamel'],
    ingredients: 'Spinach pasta · Ragù · Béchamel · Parmigiano',
  },
  {
    id: 'japanese-sushi',
    name: 'Japanese Sushi Selection',
    category: 'International',
    region: 'Tokyo',
    price: '₹1,380',
    description:
      "A chef's selection of nigiri and maki, cut from fish delivered at dawn and seasoned with aged soy.",
    detail: 'Eight pieces, changing daily with the arrival. Served at the counter.',
    notes: ["Chef's selection", 'Aged soy', 'Fresh wasabi'],
    ingredients: 'Nigiri · Maki · Aged soy · Fresh wasabi',
  },
  {
    id: 'mediterranean-grilled-vegetables',
    name: 'Mediterranean Grilled Vegetables',
    category: 'International',
    region: 'The Levant',
    price: '₹760',
    description:
      'Charred aubergine, courgette and peppers with tahini, lemon and a confit garlic oil.',
    detail: 'Grilled over charcoal, dressed while still warm so the vegetables drink the oil.',
    notes: ['Charcoal grill', 'Tahini', 'Confit garlic'],
    ingredients: 'Aubergine · Courgette · Tahini · Lemon',
  },
  {
    id: 'gourmet-risotto',
    name: 'Saffron Risotto',
    category: 'International',
    region: 'Lombardy',
    price: '₹980',
    description:
      'Carnaroli rice stirred slowly with saffron and aged parmesan until it is just loose at the centre.',
    detail: 'Finished with a knob of butter and a touch of lemon zest at the pass.',
    notes: ['Carnaroli', 'Saffron', 'Aged parmesan'],
    ingredients: 'Carnaroli rice · Saffron · Parmesan · Lemon',
  },
];

export const craftSteps = [
  {
    number: '01',
    title: 'The sourcing',
    copy: 'Saffron from Pampore, basmati aged eighteen months, produce from the morning market. We buy small and we buy twice a week.',
    image: '/images/crops/saffron-study.webp',
    alt: 'Saffron strands, cardamom and basmati rice on emerald stone',
  },
  {
    number: '02',
    title: 'The dum seal',
    copy: 'Dough seals the handi so no steam escapes. The rice finishes in its own perfume — a technique we have kept for a decade.',
    image: '/images/crops/spice-cardamom.webp',
    alt: 'Green cardamom pods and saffron strands on emerald stone',
  },
  {
    number: '03',
    title: 'The pass',
    copy: 'Every plate leaves the pass in ninety seconds, finished with a hand-torn herb, a spoon of butter or a dust of chilli.',
    image: '/images/crops/chilli-study.webp',
    alt: 'Dried red chillies and fennel seeds on emerald stone',
  },
];

export const pantry = [
  { name: 'Star anise', origin: 'Sikkim', image: '/images/crops/spice-star-anise.webp' },
  { name: 'Mint', origin: 'The terrace', image: '/images/crops/herb-mint.webp' },
  { name: 'Green cardamom', origin: 'Idukki', image: '/images/crops/spice-cardamom.webp' },
  { name: 'Coriander', origin: 'Rajasthan', image: '/images/crops/herb-coriander.webp' },
  { name: 'Clove', origin: 'Nilgiris', image: '/images/crops/spice-clove.webp' },
];

export const galleryPlates = [
  {
    id: 'thali-gallery',
    name: 'The Velora Thali',
    caption: 'Nine plates, one brass platter — the whole table in a single setting.',
    meta: 'The House · Served at lunch',
    image: '/images/indian-thali.webp',
    alt: 'Brass thali with nine small dishes, rice, flatbreads and rose petals',
  },
  {
    id: 'margherita-gallery',
    name: 'Margherita, from the wood oven',
    caption: 'Leopard-spotted crust, San Marzano tomato, and mozzarella torn by hand.',
    meta: 'The Italian corner · Baked at 420°C',
    image: '/images/margherita-pizza.webp',
    alt: 'Margherita pizza with basil on a dark slate plate',
  },
];

export const stats = [
  { value: '10', label: 'Years at this address' },
  { value: '4 hrs', label: 'Average dum cook' },
  { value: '26', label: 'Spice blends in the pantry' },
];
