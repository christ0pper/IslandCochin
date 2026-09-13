/* ---------------------------------------------------------------------
   Every piece of copy on the site lives here.
   Components read from this file, so content edits never touch JSX.

   To attach a real photo to any slot, add a `photo` key pointing at a file
   in /public, e.g.  photo: '/img/hero.jpg'
   --------------------------------------------------------------------- */

export const site = {
  name: 'Island D Cochin',
  tagline: 'A private backwater island on the national waterway at Mulavukad, Kochi.',

  // TODO: replace before launch — see README "Content status"
  phone: '+91 00000 00000',
  phoneHref: 'tel:+910000000000',
  email: 'hello@islanddcochin.com',
};

export const nav = [
  { label: 'Stay & Camping', href: '#stay' },
  { label: 'Dining', href: '#dining' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Events & Weddings', href: '#events' },
  { label: 'Discover Kochi', href: '#discover' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'Mulavukad · Kochi · Kerala',
  titleLines: ['An island of your own,', 'fifteen minutes from the city.'],
  emphasis: 'fifteen minutes',
  lead:
    'Set on the national waterway off Vypin, Island D Cochin is a private backwater island reached by a free ferry from Vaduthala — where the day ends around a campfire and the water is the only road in.',
  art: 'aerial',
  artAlt: 'Aerial view of Island D Cochin surrounded by backwaters',
  video: '/video/hero.mp4',
  videoMobile: '/video/hero-720.mp4',
  poster: '/img/hero.jpg',
};

export const bookingOptions = [
  'A day out',
  'An overnight stay',
  'Camping',
  'A wedding or reception',
  'A corporate event',
];

export const leadStatement = {
  eyebrow: 'The island',
  text:
    'Coconut palms, still water and a horizon of Chinese fishing nets. Island D Cochin is a small private island on the backwaters at Mulavukad — open lawns, a riverside camp, a floating deck for dinner and a pool under the palms, all a short crossing from the mainland.',
};

export const stay = {
  eyebrow: 'Stay & Camping',
  titleLines: ['Sleep with the backwater', 'at your doorstep.'],
  copy:
    'Tents pitched along the water for a night under the sky, or air-conditioned rooms when you would rather have four walls and a fan of palms outside the window. Every stay includes the ferry across.',
  ctaLabel: 'Explore stays',
  ctaHref: '#contact',
  items: [
    {
      id: 'tent',
      art: 'tent',
      photo: '/img/nightlights.jpg',
      caption: 'Riverside Camp',
      title: 'Riverside Camping Tent',
      copy: 'Canvas tents on the water’s edge, a campfire lit at dusk and the sound of ferries somewhere in the dark.',
    },
    {
      id: 'room',
      art: 'room',
      photo: '/img/lights.jpg',
      caption: 'Island Room',
      title: 'Island AC Room',
      copy: 'Air-conditioned rooms on the island for guests staying the night, steps from the lawn and the jetty.',
    },
    {
      id: 'family',
      art: 'family',
      caption: 'Family Stay',
      title: 'Family Room',
      copy: 'Extra beds, a shaded verandah and the pool within sight — built for families travelling together.',
    },
    {
      id: 'group',
      art: 'group',
      caption: 'Group Camp',
      title: 'Group Camp',
      copy: 'Multiple tents and a shared fire pit for teams, college groups and reunions taking the island for a night.',
    },
    {
      id: 'dayout',
      art: 'dayout',
      caption: 'Day Out',
      title: 'Day Out Package',
      copy: 'Ferry across after breakfast, spend the day on the water and the lawn, and be back on the mainland by dusk.',
    },
  ],
};

export const dining = {
  eyebrow: 'Dining',
  titleLines: ['Kerala on the plate,', 'water on every side.'],
  copy:
    'Karimeen grilled over coals, a buffet under the open sky, or dinner on a deck that floats. Meals here follow the tide and the time of day.',
  items: [
    {
      id: 'lawn',
      art: 'dining',
      photo: '/img/outdoor.jpg',
      artAlt: 'A long banquet table set on the island lawn beside the backwater',
      title: 'Open Dining Lawn',
      copy: 'Long tables under the palms with a Kerala sadya, grilled catch and a live counter — the everyday heart of the island, and the setting for most day-out packages.',
      linkLabel: 'Dining options',
      href: '#contact',
    },
    {
      id: 'deck',
      art: 'float',
      artAlt: 'Floating dining deck on the backwater',
      title: 'The Floating Deck',
      copy: 'A dining platform on the backwater itself, seating up to 450 for a feast that moves gently with the water. Best booked for sunset.',
      linkLabel: 'Reserve the deck',
      href: '#contact',
    },
    {
      id: 'fire',
      art: 'fire',
      photo: '/img/camping.jpg',
      artAlt: 'Aerial view of the island lawn at night, lined with lights around dining tables',
      title: 'Campfire & Barbecue',
      copy: 'The fire is lit once the light goes. Barbecue, music and the island’s own quiet — the way most nights here end.',
      linkLabel: 'Add to your stay',
      href: '#contact',
    },
  ],
};

export const experiences = {
  eyebrow: 'Experiences',
  titleLines: ['Give the day to the water,', 'or do nothing at all.'],
  copy:
    'Boating, angling and birdwatching on one side of the island; a pool, a DJ hall and a lawn made for a boat race crowd on the other.',
  art: 'water',
  artAlt: 'Boating on the Kochi backwaters',
  chips: [
    'Boating',
    'Fishing',
    'Bird watching',
    'Swimming pool',
    'Boat race',
    'DJ party hall',
    'Campfire',
    'Kayak & pedal boats',
  ],
};

export const events = {
  eyebrow: 'Events & Weddings',
  titleLines: ['A whole island,', 'booked for one day.'],
  copy:
    'Destination weddings, receptions, conferences and company days. Guests arrive by ferry, which is usually the part they remember.',
  stats: [
    { label: 'Guests', value: '1,000', note: 'Total island capacity across lawn, hall and deck.' },
    { label: 'Open lawn', value: '800', note: 'Standing capacity, with seating for 300 under cover.' },
    { label: 'Floating hall', value: '450', note: 'Expandable feast hall on the water for seated dining.' },
    { label: 'Parking', value: '100+', note: 'Cars at the mainland jetty, plus 300 two-wheelers and valet.' },
  ],
  note: {
    lead: 'Included with every event.',
    body: 'Complimentary ferry crossing for your guest list, backup power, Wi-Fi, 24/7 security with CCTV, and island rooms for guests staying the night. Décor, catering and entertainment are built into a package around your date.',
    ctaLabel: 'Request a proposal',
    ctaHref: '#contact',
  },
};

export const discover = {
  eyebrow: 'Discover Kochi',
  titleLines: ['Beyond the island.'],
  copy:
    'Mulavukad sits in the middle of the harbour, between Fort Kochi’s colonial waterfront and the long green quiet of Vypin.',
  items: [
    {
      id: 'fortkochi',
      art: 'nets',
      artAlt: 'Chinese fishing nets at Fort Kochi',
      title: 'Fort Kochi & the Chinese Nets',
      copy: 'Fifteen minutes across the harbour: cantilevered fishing nets, Portuguese and Dutch streets, the spice warehouses of Mattancherry and a beach that faces the shipping lane.',
      linkLabel: 'Ask about Fort Kochi',
      href: '#contact',
    },
    {
      id: 'vypin',
      art: 'palms',
      artAlt: 'Backwater channels lined with coconut palms',
      title: 'The Backwaters of Vypin',
      copy: 'Narrow channels, prawn farms and villages built along the bunds. Our boats leave the jetty at first light, when the birds are on the water and the nets are coming up.',
      linkLabel: 'Ask about the boat trip',
      href: '#contact',
    },
  ],
};

export const callToAction = {
  eyebrow: 'Cross the water',
  title: 'Book your island day.',
  ctaLabel: 'Enquire now',
  ctaHref: '#contact',
};

export const footer = {
  columns: [
    {
      heading: 'Find us',
      lines: [
        ['Island jetty — Mulavukad,', 'Ernakulam, Kochi, Kerala'],
        ['Mainland parking — Pazhampilly Thomas Road,', 'Don Bosco Road, Vaduthala,', 'Ernakulam, Kochi 682023'],
      ],
    },
  ],
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/islandd.cochin/' },
    { label: 'Instagram', href: '#' },
    { label: 'WhatsApp', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
};
