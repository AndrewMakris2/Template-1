/**
 * ============================================================================
 *  CONTENT — EDIT THIS FILE PER CLIENT / PER RESKIN
 * ============================================================================
 *  Every piece of text, every link, and every image path on the site comes
 *  from this file. Components never hardcode copy — they read it from here.
 *
 *  Everything below is PLACEHOLDER content. Each placeholder is marked with
 *  `// TODO: replace with real client content`. Search for "TODO" before
 *  launching a client site and make sure none are left.
 *
 *  Images:
 *    Placeholders point at picsum.photos. For a real client, drop their photos
 *    into /public/images and reference them here with root-relative paths,
 *    e.g.  src: '/images/hero.jpg'   (files in /public are served from "/").
 *    Every image needs meaningful `alt` text describing the photo.
 * ============================================================================
 */

export const content = {
  // --------------------------------------------------------------------------
  // SEO & SITE META — used for <title>, meta description and Open Graph tags
  // --------------------------------------------------------------------------
  site: {
    lang: 'en',
    // Full production URL, no trailing slash. Used for canonical + og:url.
    url: 'https://hairstylist-template-1.netlify.app', // Template 1 demo URL — TODO: replace with real client content
    title: 'Mara Ellison Hair — Colour & Cutting Studio, Portland', // TODO: replace with real client content
    description:
      'Independent hairstylist in Portland specialising in lived-in balayage, curly cuts and colour correction. Book your appointment online.', // TODO: replace with real client content
    // Absolute URL recommended for social previews (1200×630 works best).
    ogImage: 'https://picsum.photos/seed/t1-og/1200/630?grayscale', // TODO: replace with real client content
    ogImageAlt: 'Placeholder: model with softly layered balayage hair', // TODO: replace with real client content
  },

  // --------------------------------------------------------------------------
  // BUSINESS BASICS
  // --------------------------------------------------------------------------
  business: {
    name: 'Mara Ellison', // TODO: replace with real client content — shown as the text logo
    tagline: 'Considered colour and quiet, precise cuts.', // TODO: replace with real client content
    location: 'Portland, Oregon', // TODO: replace with real client content
  },

  // External booking platform (StyleSeat, Vagaro, Booksy, Schedulicity, …).
  // The site never takes bookings itself — every "Book" button links here.
  booking: {
    url: 'https://styleseat.com/PLACEHOLDER', // TODO: replace with real client content
    label: 'Book now',
  },

  // --------------------------------------------------------------------------
  // NAVIGATION — `href` must match a section id below
  // --------------------------------------------------------------------------
  nav: {
    links: [
      { label: 'About', href: '#about' },
      { label: 'Work', href: '#gallery' },
      { label: 'Services', href: '#services' },
      { label: 'Kind words', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    menuOpenLabel: 'Open menu',
    menuCloseLabel: 'Close menu',
    skipLinkLabel: 'Skip to content',
  },

  // --------------------------------------------------------------------------
  // HERO
  // --------------------------------------------------------------------------
  hero: {
    eyebrow: 'Hair studio — Portland, Oregon', // TODO: replace with real client content
    heading: 'Mara Ellison', // TODO: replace with real client content
    tagline: 'Considered colour and quiet, precise cuts.', // TODO: replace with real client content
    ctaLabel: 'Book now',
    secondaryCtaLabel: 'View the work',
    secondaryCtaHref: '#gallery',
    image: {
      src: 'https://picsum.photos/seed/t1-hero/2000/1400?grayscale', // TODO: replace with real client content
      alt: 'Placeholder: model with softly layered, sun-lit balayage hair photographed in natural light', // TODO: replace with real client content
    },
  },

  // --------------------------------------------------------------------------
  // ABOUT
  // --------------------------------------------------------------------------
  about: {
    label: 'About',
    heading: 'Hair that grows out as beautifully as it walks out.', // TODO: replace with real client content
    // One string per paragraph.
    bio: [
      'I’m Mara — a colourist and cutter with twelve years behind the chair, the last five in my own private studio. I work with one client at a time, so every appointment is unhurried, focused and entirely yours.', // TODO: replace with real client content
      'My approach is simple: understand how you actually live with your hair, then design colour and shape that suit it — soft, dimensional and low-maintenance between visits.', // TODO: replace with real client content
    ],
    specialtiesLabel: 'Specialties',
    specialties: ['Balayage', 'Curly cuts', 'Colour correction'], // TODO: replace with real client content
    image: {
      src: 'https://picsum.photos/seed/t1-about/900/1125?grayscale', // TODO: replace with real client content
      alt: 'Placeholder: portrait of the stylist standing in her bright, minimal studio', // TODO: replace with real client content
    },
  },

  // --------------------------------------------------------------------------
  // GALLERY — any number of images; 9+ recommended. `full` is the larger
  // version shown in the lightbox (falls back to `src` if omitted).
  // --------------------------------------------------------------------------
  gallery: {
    label: 'Selected work',
    heading: 'Recent colour & cuts',
    lightboxCloseLabel: 'Close image',
    lightboxPrevLabel: 'Previous image',
    lightboxNextLabel: 'Next image',
    openImageLabel: 'Enlarge image', // prefixed to each image's alt for screen readers
    // TODO: replace with real client content — all 9 images below
    images: [
      { src: 'https://picsum.photos/seed/t1-g1/800/1000?grayscale', full: 'https://picsum.photos/seed/t1-g1/1600/2000?grayscale', alt: 'Placeholder: soft honey balayage on long, loose waves' },
      { src: 'https://picsum.photos/seed/t1-g2/800/1000?grayscale', full: 'https://picsum.photos/seed/t1-g2/1600/2000?grayscale', alt: 'Placeholder: defined curly cut with shaped layers' },
      { src: 'https://picsum.photos/seed/t1-g3/800/1000?grayscale', full: 'https://picsum.photos/seed/t1-g3/1600/2000?grayscale', alt: 'Placeholder: blunt chin-length bob with a glossy finish' },
      { src: 'https://picsum.photos/seed/t1-g4/800/1000?grayscale', full: 'https://picsum.photos/seed/t1-g4/1600/2000?grayscale', alt: 'Placeholder: brunette to caramel colour melt' },
      { src: 'https://picsum.photos/seed/t1-g5/800/1000?grayscale', full: 'https://picsum.photos/seed/t1-g5/1600/2000?grayscale', alt: 'Placeholder: before-and-after colour correction from brassy to neutral blonde' },
      { src: 'https://picsum.photos/seed/t1-g6/800/1000?grayscale', full: 'https://picsum.photos/seed/t1-g6/1600/2000?grayscale', alt: 'Placeholder: curtain bangs with face-framing layers' },
      { src: 'https://picsum.photos/seed/t1-g7/800/1000?grayscale', full: 'https://picsum.photos/seed/t1-g7/1600/2000?grayscale', alt: 'Placeholder: coily hair shaped into a rounded silhouette' },
      { src: 'https://picsum.photos/seed/t1-g8/800/1000?grayscale', full: 'https://picsum.photos/seed/t1-g8/1600/2000?grayscale', alt: 'Placeholder: cool-toned platinum with a shadow root' },
      { src: 'https://picsum.photos/seed/t1-g9/800/1000?grayscale', full: 'https://picsum.photos/seed/t1-g9/1600/2000?grayscale', alt: 'Placeholder: long layered cut styled with a smooth blow-dry' },
    ],
  },

  // --------------------------------------------------------------------------
  // SERVICES
  // --------------------------------------------------------------------------
  services: {
    label: 'Services',
    heading: 'Services & pricing',
    intro: 'Every appointment begins with a consultation. Prices are starting points and may vary with length, density and time required.', // TODO: replace with real client content
    columnLabels: { service: 'Service', duration: 'Duration', price: 'Price' },
    // TODO: replace with real client content — all services below
    items: [
      { name: 'Signature cut & style', description: 'Consultation, wash, precision cut and finish.', duration: '60 min', price: '$95+' },
      { name: 'Curly cut', description: 'Dry, curl-by-curl cutting for natural texture.', duration: '75 min', price: '$110+' },
      { name: 'Balayage', description: 'Hand-painted, lived-in dimension. Includes toner.', duration: '3 hr', price: '$285+' },
      { name: 'Full highlights', description: 'Foiled brightness from root to end.', duration: '2.5 hr', price: '$240+' },
      { name: 'Root touch-up', description: 'Single-process colour at the regrowth.', duration: '90 min', price: '$120+' },
      { name: 'Gloss & tone', description: 'Refreshes shine and corrects tone between colour visits.', duration: '45 min', price: '$75+' },
      { name: 'Colour correction', description: 'Priced after consultation. Multiple sessions may be required.', duration: 'By consult', price: '$150/hr' },
      { name: 'Blow-dry & style', description: 'Wash and a smooth or voluminous finish.', duration: '45 min', price: '$65+' },
    ],
    note: 'New clients: please book a complimentary 15-minute consultation before any colour correction.', // TODO: replace with real client content
    ctaLabel: 'Book a service',
  },

  // --------------------------------------------------------------------------
  // TESTIMONIALS
  // --------------------------------------------------------------------------
  testimonials: {
    label: 'Kind words',
    heading: 'From the chair',
    // TODO: replace with real client content — all testimonials below
    items: [
      { quote: 'I’ve never had colour grow out this gracefully. Four months later and it still looks intentional.', name: 'Jordan P.', detail: 'Balayage client' },
      { quote: 'The first stylist who has actually understood my curls. I left with a shape I can wear straight out of the shower.', name: 'Alicia R.', detail: 'Curly cut client' },
      { quote: 'Mara rescued a box-dye disaster over two calm, honest sessions. Worth every minute.', name: 'Sam T.', detail: 'Colour correction client' },
    ],
  },

  // --------------------------------------------------------------------------
  // CONTACT
  // --------------------------------------------------------------------------
  contact: {
    label: 'Contact',
    heading: 'Let’s talk about your hair.',
    intro: 'Questions before you book? Send a note and I’ll reply within two business days. Ready to go? Book directly online.', // TODO: replace with real client content
    email: 'hello@example.com', // TODO: replace with real client content
    phone: '(503) 555-0142', // TODO: replace with real client content
    address: '1234 SE Placeholder St, Suite 5, Portland, OR 97214', // TODO: replace with real client content
    detailsLabels: { email: 'Email', phone: 'Phone', studio: 'Studio' },
    bookingHeading: 'Prefer to book directly?',
    bookingLabel: 'Book an appointment',
    form: {
      name: 'contact', // Netlify form name — shows up in the Netlify dashboard
      fields: {
        name: { label: 'Name', placeholder: '' },
        email: { label: 'Email', placeholder: '' },
        phone: { label: 'Phone (optional)', placeholder: '' },
        message: { label: 'Message', placeholder: 'Tell me a little about your hair and what you’re hoping for.' },
      },
      honeypotLabel: 'Don’t fill this out if you’re human:',
      submitLabel: 'Send message',
      sendingLabel: 'Sending…',
      successMessage: 'Thank you — your message is on its way. I’ll be in touch soon.',
      errorMessage: 'Sorry, something went wrong. Please try again, or email me directly.',
    },
  },

  // --------------------------------------------------------------------------
  // SOCIAL LINKS — `platform` picks the icon. Supported: instagram, facebook,
  // tiktok, pinterest, youtube, x. The first `instagram` entry also appears
  // in the nav. Remove any the client doesn't use.
  // --------------------------------------------------------------------------
  social: [
    { platform: 'instagram', label: 'Instagram', url: 'https://instagram.com/PLACEHOLDER' }, // TODO: replace with real client content
    { platform: 'tiktok', label: 'TikTok', url: 'https://tiktok.com/@PLACEHOLDER' }, // TODO: replace with real client content
    { platform: 'pinterest', label: 'Pinterest', url: 'https://pinterest.com/PLACEHOLDER' }, // TODO: replace with real client content
  ],

  // --------------------------------------------------------------------------
  // FOOTER
  // --------------------------------------------------------------------------
  footer: {
    hoursHeading: 'Studio hours',
    // TODO: replace with real client content
    hours: [
      { days: 'Tue – Fri', time: '10am – 7pm' },
      { days: 'Saturday', time: '9am – 4pm' },
      { days: 'Sun – Mon', time: 'Closed' },
    ],
    contactHeading: 'Visit',
    socialHeading: 'Follow',
    // "© {year} {copyrightName}. {copyrightSuffix}" — year is filled in at build time
    copyrightName: 'Mara Ellison Hair', // TODO: replace with real client content
    copyrightSuffix: 'All rights reserved.',
    backToTopLabel: 'Back to top',
  },
};
