/* ---------------------------------------------------------------------
   Every piece of copy on the site lives here.
   Components read from this file, so content edits never touch JSX.

   FACTS: every business detail below (prices, capacities, inclusions,
   policies, history) comes from owner-answers.md in the project root.
   Check it before adding or changing a claim, and don't add one it
   doesn't support.
   --------------------------------------------------------------------- */

const PHONE_DIGITS = '919746610999';

export const site = {
  name: 'Island D Cochin',
  tagline: 'An island to yourself.',
  blurb:
    'A private 1.5-acre island on the Kochi backwaters, for celebrations, corporate gatherings and days out.',

  phone: '+91 97466 10999',
  phoneHref: `tel:+${PHONE_DIGITS}`,
  whatsappNumber: PHONE_DIGITS,
  whatsappHref: `https://wa.me/${PHONE_DIGITS}`,
  // what the general "WhatsApp us" links start the chat with (the booking bar writes its own)
  whatsappHello: `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(
    "Hi Island D Cochin,\n\nI came across your website and I'm interested in the island. Could you tell me more about it?\n\nThank you."
  )}`,
  hours: '9:00 AM – 8:00 PM',
  replyNote: 'We usually reply within 15 minutes, between 9:00 AM and 8:00 PM.',

  // TODO: owner to send the full postal address and Google Maps link for River D
  pickup: 'River D, Cochin',
};

export const nav = [
  { label: 'Day Out', href: '#dayout' },
  { label: 'Events', href: '#events' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Food', href: '#food' },
  { label: 'Our Story', href: '#story' },
  { label: 'Plan Your Visit', href: '#visit' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'Private island · Kochi · Kerala',
  titleLines: ['An island to yourself,', 'fifteen minutes from Marine Drive.'],
  emphasis: 'to yourself',
  lead:
    'A private 1.5-acre island on the Kochi backwaters, with Chinese fishing nets on the horizon. Bring your people across by boat for a celebration, a company day or a day out.',
  photo: '/img/hero.jpg', // shown until the video plays, and instead of it for reduced motion
  artAlt: 'Aerial view of Island D Cochin surrounded by backwaters',
  video: '/video/hero.mp4',
  videoMobile: '/video/hero-720.mp4',
  poster: '/img/hero.jpg',
};

/* The booking bar's "I am planning" options. Each `plan` finishes the sentence
   "I'd like to …" in the WhatsApp message, so keep it lowercase and natural.
   `followUp` replaces the default closing question where it doesn't fit.
   dayOut.bookingType must match one of the labels exactly. */
export const bookingOptions = [
  {
    label: 'A Day Out Package',
    plan: 'book the Day Out Package',
    exactCount: true,
    // the price is already on the site, so ask about the next step instead
    followUp: 'Could you also let me know how to confirm the booking?',
  },
  { label: 'A wedding', plan: 'host a wedding' },
  { label: 'A celebration or party', plan: 'host a celebration' },
  { label: 'A corporate event', plan: 'host a corporate event' },
  { label: 'A family gathering', plan: 'host a family gathering' },
  { label: 'A custom event', plan: 'host a private event' },
];

/**
 * The enquiry the guest sends on WhatsApp. It reads like a message a person
 * would write: what, when, how many, then the two things they need to know.
 *   option  one of bookingOptions
 *   date    a readable date ("Saturday, 3 October 2026"), or '' if not chosen
 *   guests  a number
 */
export function enquiryMessage({ option, date, guests }) {
  const count = Number(guests);
  const people = `${count} ${count === 1 ? 'guest' : 'guests'}`;
  // A day-out price is per head, so that count is firm. For events it's an
  // estimate, except for small numbers where "around 4 guests" reads oddly.
  const headcount = option.exactCount || count < 10 ? people : `around ${people}`;

  const request = date
    ? `I'd like to ${option.plan} on ${date} for ${headcount}. Is the island available on that date?`
    : `I'd like to ${option.plan} for ${headcount}. My dates are flexible, so could you let me know what's available?`;

  return [
    `Hi ${site.name},`,
    '',
    request,
    '',
    option.followUp || "Could you also share the pricing and what's included?",
    '',
    'Thank you.',
  ].join('\n');
}

export const leadStatement = {
  eyebrow: 'An island to yourself',
  text:
    'Why hire a party hall when you can hire out a party island, just for you and your loved ones? Island D Cochin is a private 1.5-acre island on the backwaters of Kochi, a short boat ride from the mainland.',
};

export const dayOut = {
  eyebrow: 'Day Out Package',
  titleLines: ['A day on the island,', 'ten till six.'],
  copy:
    'Cross over in the morning and have the island until evening: lunch, air-conditioned halls with sound and lights, the open lawn for games, and kayaks on the water. Made for groups of 50 or more.',
  photo: '/img/dayoutpackage.jpg',
  artAlt: 'Tables dressed in gold and black on the lawn beside the backwater',
  facts: [
    { label: 'Hours', value: '10 AM – 6 PM' },
    { label: 'Per person', value: '₹1,500' },
    { label: 'Group', value: '50+ guests' },
  ],
  included: [
    'Boat transfer',
    'Welcome drink',
    'Lunch with two non-vegetarian dishes',
    'Tea and snacks',
    'A/C Banquet Hall',
    'Sound system and microphones',
    'A/C DJ Hall with DJ lighting and sound',
    'Open lawn for games and activities',
    'Kayaking',
  ],
  addOns: ['Sunset cruise', 'Speedboat rides'],
  customNote: 'Want something different? Every package can be tailored to your group.',
  bookingType: 'A Day Out Package',
  ctaLabel: 'Check dates',
};

export const events = {
  eyebrow: 'Events & Weddings',
  titleLines: ['A whole island,', 'for your guest list.'],
  copy:
    'Weddings, celebrations, corporate events, family gatherings and parties for up to 200 guests, with the island arranged around the way you want the day to run.',
  gallery: [
    {
      photo: '/img/lawn-night.jpg',
      alt: 'The island lawn at night from above, lined with lights around tables and a stage',
      caption: 'The open lawn, set for an evening event',
    },
    {
      photo: '/img/seating.jpg',
      alt: 'An air-conditioned hall set with rows of covered chairs facing a stage',
      caption: 'An air-conditioned hall, set for a gathering',
    },
  ],
  stats: [
    { label: 'Guests', value: '200', note: 'Overall event capacity, arranged to suit your format.' },
    { label: 'A/C Banquet Hall', value: '150', note: 'Guests seated.' },
    { label: 'Open lawn', value: '200', note: 'Guests outdoors, under the sky.' },
    { label: 'A/C DJ Hall', value: '50–60', note: 'Guests, depending on the set-up.' },
  ],
  note: {
    lead: 'Your event, your way.',
    body: 'Use our catering and DJ, or bring your own caterer, decorator, DJ and entertainment. Events start from about ₹50,000 depending on what you need, and can usually be booked a week ahead, subject to availability.',
    ctaLabel: 'Enquire about a date',
    ctaHref: '#book',
  },
  hosted: {
    heading: 'Hosted on the island',
    groups: [
      {
        label: 'Companies',
        names: [
          'TCS',
          'Wipro',
          'Mahindra',
          'ACC',
          'HSBC',
          'Cognizant',
          'Shobha Builders',
          'HDFC Bank',
          'Federal Bank',
          'MyG',
        ],
      },
      {
        label: 'Sporting guests',
        names: ['The Australian cricket team', 'The Indian cricket team'],
      },
    ],
  },
};

export const experiences = {
  eyebrow: 'Experiences',
  titleLines: ['Out on the water,', 'or out on the lawn.'],
  copy:
    'Take out a kayak, go for a sunset cruise or a speedboat ride, then bring the evening in with a campfire, a barbecue and the DJ hall.',
  artAlt: 'Aerial view of the island and the backwater around it',
  photo: '/img/experience.jpg',
  video: '/video/experience.mp4',
  poster: '/img/experience.jpg',
  chips: [
    'Kayaking',
    'Sunset cruise',
    'Speedboat rides',
    'A/C DJ Hall',
    'Campfire',
    'BBQ',
    'Outdoor games',
    'Boat transfers',
  ],
  notes: [
    'Sunset cruises, speedboat rides, campfire and BBQ are available at extra cost.',
    'Life jackets for every boat ride and kayak, a trained boat crew, first aid and fire-fighting equipment on the island.',
  ],
};

export const food = {
  eyebrow: 'Food',
  titleLines: ['Your menu,', 'served on the island.'],
  copy:
    'There’s no restaurant on the island. Food is arranged for each booking through professional caterers and built around your menu, including vegetarian, vegan and Jain requirements.',
  items: [
    {
      id: 'catering',
      photo: '/img/outdoor.jpg',
      artAlt: 'A long table set on the island lawn beside the backwater',
      title: 'Catering to your menu',
      copy: 'Tell us what you’d like to serve and we’ll arrange it, typically for groups of 50 to 150. For events, you’re also welcome to bring your own caterer.',
      linkLabel: 'Ask about food',
      href: '#contact',
    },
    {
      id: 'evenings',
      photo: '/img/nightlights.jpg',
      artAlt: 'Fairy-lit trees over the path to a food counter at night',
      title: 'Evenings on the island',
      copy: 'Planning an evening event? Add a campfire and a barbecue to your booking, at extra cost.',
      linkLabel: 'Add to your booking',
      href: '#contact',
    },
  ],
};

export const story = {
  eyebrow: 'Our Story',
  titleLines: ['From Sandalwood Island', 'to Island D.'],
  photo: '/img/lights.jpg',
  artAlt: 'The island at dusk, with lit palms along the path',
  paragraphs: [
    'Pazhampilly Thomas bought the island in the 1960s, and for years it was a private retreat and farm for him and his family.',
    'In 1994 his son, Denny Thomas, turned it into a resort and event destination. Known then as Sandalwood Island, it drew guests from around the world, including international visitors and celebrities, and was hired by hospitality groups such as Taj and CGH Earth for private experiences and events.',
    'Renamed Island D Cochin, it has kept what set it apart from the start: the feeling of a private escape, surrounded by the backwaters of Kochi.',
  ],
  timeline: [
    { year: '1960s', text: 'Bought by Pazhampilly Thomas as a family retreat and farm' },
    { year: '1994', text: 'Opened as Sandalwood Island by Denny Thomas' },
    { year: 'Today', text: 'Island D Cochin' },
  ],
};

export const visit = {
  eyebrow: 'Plan Your Visit',
  titleLines: ['Good to know', 'before you cross.'],
  copy: `Anything else? Call or WhatsApp ${site.phone}, ${site.hours}.`,
  groups: [
    {
      heading: 'Getting there',
      items: [
        {
          q: 'Where do we board the boat?',
          a: 'At River D, Cochin, on the mainland. Park outside River D, wait in the designated area, and the boat will bring you across.',
        },
        {
          q: 'How far is the island from the city?',
          a: 'About 15 minutes from Marine Drive, depending on the journey.',
        },
        {
          q: 'How long is the boat ride, and does it cost extra?',
          a: 'About 15 minutes, and it’s free for booked guests. Boats start at your booked time and keep running until the last guest leaves.',
        },
        {
          q: 'Is there parking?',
          a: 'Yes, free parking on the mainland for about 50 to 70 vehicles. There’s no valet.',
        },
        {
          q: 'Can we arrive another way?',
          a: 'Yes. Come by your own boat, take a taxi or auto to River D, or hire a boat from Marine Drive, which takes about 20 minutes.',
        },
        {
          q: 'What happens in bad weather?',
          a: 'For everyone’s safety, the boat may not run in harsh weather.',
        },
      ],
    },
    {
      heading: 'Booking & payment',
      items: [
        {
          q: 'How do we book?',
          a: `Call or WhatsApp ${site.phone}. A 50% advance payment confirms your booking.`,
        },
        {
          q: 'Can we cancel or change the date?',
          a: 'The advance isn’t refundable, and there’s no refund if you cancel. You can ask to move to another date in advance, and we’ll change it if that date is available.',
        },
        {
          q: 'How far ahead should we book?',
          a: 'Events can usually be booked about a week ahead, subject to availability.',
        },
        { q: 'How can we pay?', a: 'All standard payment methods are accepted.' },
        {
          q: 'Do we need ID?',
          a: 'Yes. The person who made the booking should bring a valid ID card.',
        },
      ],
    },
    {
      heading: 'On the island',
      items: [
        {
          q: 'Can we stay overnight?',
          a: 'No. There’s no accommodation on the island; it’s for events and days out.',
        },
        { q: 'Are children and pets welcome?', a: 'Yes, both are welcome.' },
        {
          q: 'Can we bring alcohol?',
          a: 'We don’t serve alcohol, but you can bring your own, subject to the rules and responsible use. Illicit articles aren’t permitted.',
        },
        {
          q: 'Is the island accessible?',
          a: 'Elderly guests can board the boat with assistance. There’s currently no wheelchair access.',
        },
        {
          q: 'Is it safe on the water?',
          a: 'Life jackets are provided for boat rides and kayaking, the boat crew is trained, and there’s a first-aid kit and fire-fighting equipment on the island.',
        },
        { q: 'Are you open all year?', a: 'Yes, Island D Cochin is open throughout the year.' },
      ],
    },
  ],
};

export const callToAction = {
  eyebrow: 'Plan your day',
  title: 'Bring your people across the water.',
  copy: `Call or WhatsApp ${site.phone}. ${site.replyNote}`,
};

export const footer = {
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/islandd.cochin/' },
    // TODO: Instagram — owner confirmed a page; the link is still needed
  ],
  // TODO: Privacy Policy and Terms don't exist yet; add { label, href } entries once written
  legal: [],
};
