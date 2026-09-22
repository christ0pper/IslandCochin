/* ---------------------------------------------------------------------
   Schema.org data for search engines and AI assistants, built from the
   same copy the page renders (site.js), so the two can never disagree.
   Injected into the HTML at build time — see scripts/prerender.mjs.

   Every claim here has to be one the owner confirmed (owner-answers.md).
   --------------------------------------------------------------------- */

import { site, dayOut, events, visit, food } from './site';

const abs = (path) => new URL(path, site.url).href;

/** The island itself: who, where, how to reach it, what it costs. */
function business() {
  return {
    '@type': ['LocalBusiness', 'EventVenue'],
    '@id': `${site.url}#island`,
    name: site.name,
    url: site.url,
    description:
      'Island D Cochin is a private 1.5-acre island on the backwaters of Kochi, about 15 minutes from Marine Drive and reached by a short boat ride. It hosts weddings, celebrations, corporate events and day outs for up to 200 guests.',
    slogan: site.tagline,
    telephone: `+${site.whatsappNumber}`,
    image: [abs('/img/hero.jpg'), abs('/img/lawn-night.jpg'), abs('/img/dayoutpackage.jpg')],
    logo: abs('/logo.png'),
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    isAccessibleForFree: false,
    address: {
      '@type': 'PostalAddress',
      // TODO: add streetAddress + postalCode once the owner sends the River D address
      addressLocality: 'Kochi',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Kochi' },
      { '@type': 'City', name: 'Ernakulam' },
      { '@type': 'State', name: 'Kerala' },
    ],
    maximumAttendeeCapacity: 200,
    publicAccess: false,
    sameAs: ['https://www.facebook.com/islandd.cochin/'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Reservations',
      telephone: `+${site.whatsappNumber}`,
      availableLanguage: ['en'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '20:00',
      },
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Air-conditioned banquet hall', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Air-conditioned DJ hall', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Open lawn', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Boat transfer', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Free mainland parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Kayaking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Campfire and barbecue', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Wheelchair accessible', value: false },
      { '@type': 'LocationFeatureSpecification', name: 'Accommodation', value: false },
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        name: dayOut.eyebrow,
        description: dayOut.copy,
        price: '1500',
        priceCurrency: 'INR',
        // per person, minimum 50 guests
        eligibleQuantity: { '@type': 'QuantitativeValue', minValue: 50, unitText: 'guests' },
        availability: 'https://schema.org/InStock',
        url: `${site.url}#dayout`,
        itemOffered: {
          '@type': 'Service',
          name: 'Day Out Package',
          serviceType: 'Private island day out',
          description: `Includes ${dayOut.included.join(', ').toLowerCase()}.`,
        },
      },
      {
        '@type': 'Offer',
        name: 'Events and weddings',
        description: events.copy,
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '50000',
          priceCurrency: 'INR',
        },
        url: `${site.url}#events`,
        itemOffered: {
          '@type': 'Service',
          name: 'Private island event venue',
          serviceType: 'Wedding, celebration and corporate event venue',
        },
      },
    ],
  };
}

/** The Plan Your Visit answers, in the format search and AI answers read. */
function faq() {
  return {
    '@type': 'FAQPage',
    '@id': `${site.url}#faq`,
    mainEntity: visit.groups.flatMap((group) =>
      group.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      }))
    ),
  };
}

export function structuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      business(),
      faq(),
      {
        '@type': 'WebSite',
        '@id': `${site.url}#website`,
        url: site.url,
        name: site.name,
        inLanguage: 'en-IN',
        publisher: { '@id': `${site.url}#island` },
      },
      {
        '@type': 'WebPage',
        '@id': site.url,
        url: site.url,
        name: 'Island D Cochin — An Island to Yourself in Kochi',
        isPartOf: { '@id': `${site.url}#website` },
        about: { '@id': `${site.url}#island` },
        primaryImageOfPage: abs('/img/hero.jpg'),
        // the sections a reader (or an assistant) can jump straight to
        hasPart: [
          { '@type': 'WebPageElement', name: dayOut.eyebrow, url: `${site.url}#dayout` },
          { '@type': 'WebPageElement', name: events.eyebrow, url: `${site.url}#events` },
          { '@type': 'WebPageElement', name: food.eyebrow, url: `${site.url}#food` },
          { '@type': 'WebPageElement', name: visit.eyebrow, url: `${site.url}#visit` },
        ],
      },
    ],
  };
}
