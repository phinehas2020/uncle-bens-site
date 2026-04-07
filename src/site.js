const SITE_URL = 'https://austintxmovers.com';

export const BUSINESS = {
  company: 'Quality Moving & Storage',
  phoneDisplay: '(512) 300-9543',
  phoneHref: 'tel:+15123009543',
  phoneIntl: '+15123009543',
  address: '1101 N Industrial Blvd, Round Rock, TX 78681',
  streetAddress: '1101 N Industrial Blvd',
  locality: 'Round Rock',
  region: 'TX',
  postalCode: '78681',
  license: '#006027218C',
  yearsInBusiness: '19 years',
  hours: 'Mon-Sat 9:00 AM - 6:00 PM, Sun by appointment',
  footerTagline: 'Serving Austin, TX for 19 years',
  primaryCta: 'Get Your Free Quote',
  secondaryCta: 'Call (512) 300-9543',
};

export const TRUST_SIGNALS = [
  { label: '19 Years', description: 'Serving Austin' },
  { label: 'Licensed & Insured', description: 'TXDMV #006027218C' },
  { label: 'Guaranteed Quotes', description: 'No Hidden Fees' },
  { label: '5-Star Rated', description: 'Google & Yelp' },
];

export const SERVICES = [
  {
    slug: 'local-moving',
    title: 'Local Moving',
    description: 'Same-day and scheduled local moves throughout Greater Austin.',
    heroTitle: 'Local Moving Across Greater Austin',
    heroDescription:
      'Homes, apartments, condos, and office moves handled by licensed crews that know Austin, Round Rock, Cedar Park, Georgetown, and the surrounding cities.',
    intro:
      'When the move is across town, the job still lives or dies on details. We manage the loading order, protect the tight corners, and keep the day moving on one accountable schedule.',
    details: [
      'Same-day and scheduled local moves throughout Greater Austin.',
      'Apartment, home, office, and in-building relocations planned around access, elevators, and loading windows.',
      'Guaranteed quotes before move day so the bill does not drift once the truck arrives.',
    ],
    processTitle: 'What local moving includes',
    process: [
      {
        title: 'Walkthrough and quote',
        text: 'We confirm access, timing, inventory, and any tight turns before the truck is dispatched.',
      },
      {
        title: 'Load, protect, and transport',
        text: 'Furniture, boxes, and fragile pieces are wrapped, loaded in sequence, and moved with one crew owning the day.',
      },
      {
        title: 'Unload with placement',
        text: 'We do not just drop at the curb. The crew unloads with room-by-room placement so you can settle faster.',
      },
    ],
    image: '/hero-image.png',
    imageAlt: 'Quality Moving & Storage crew unloading boxes beside a truck at an Austin-area home.',
    seoTitle: 'Local Movers Austin TX | Quality Moving & Storage',
    seoDescription:
      'Same-day and scheduled local moving throughout Greater Austin. Licensed, insured, guaranteed quotes from Quality Moving & Storage. Call (512) 300-9543.',
    keywords: ['local movers Austin TX', 'local moving company Austin', 'Round Rock local movers'],
    relatedCities: ['Austin', 'Round Rock', 'Cedar Park', 'Pflugerville'],
  },
  {
    slug: 'long-distance-moving',
    title: 'Long Distance Moving',
    description: 'Interstate moves handled with care from quote to delivery.',
    heroTitle: 'Long Distance Moves Managed End to End',
    heroDescription:
      'Interstate relocations planned from the first inventory call to the final unload, with one company accountable for timing, care, and communication.',
    intro:
      'Long-haul moves get expensive fast when the hand-offs stack up. We keep the scope clear, the calendar locked, and the delivery plan stable so your move feels controlled from Austin to arrival.',
    details: [
      'Interstate moves handled with care from quote to delivery.',
      'Detailed inventory and timing planning before the first item is loaded.',
      'Guaranteed quotes that protect you from last-minute pricing surprises.',
    ],
    processTitle: 'How long distance moves stay organized',
    process: [
      {
        title: 'Scope the move before load day',
        text: 'We confirm inventory, route timing, destination details, and storage needs before the schedule is locked.',
      },
      {
        title: 'Load for transit, not just departure',
        text: 'Items are wrapped and staged for the realities of highway travel, multi-day timing, and final delivery order.',
      },
      {
        title: 'Deliver with one plan',
        text: 'Arrival windows, communication, and unload expectations are set early so you are not guessing from the road.',
      },
    ],
    image: '/long-distance.png',
    imageAlt: 'Moving truck driving a long-distance route at golden hour.',
    seoTitle: 'Long Distance Movers Austin TX | Quality Moving & Storage',
    seoDescription:
      'Interstate and long-distance moving from Austin, TX with guaranteed quotes, licensed crews, and careful delivery planning. Call Quality Moving & Storage at (512) 300-9543.',
    keywords: ['long distance movers Austin', 'interstate movers Austin TX', 'Austin long haul movers'],
    relatedCities: ['Austin', 'Georgetown', 'Kyle', 'Buda'],
  },
  {
    slug: 'packing-unpacking',
    title: 'Packing & Unpacking',
    description: 'Full-service packing with professional materials - nothing arrives broken.',
    heroTitle: 'Packing That Protects What Matters',
    heroDescription:
      'Full-service packing and unpacking with professional materials, cleaner labeling, and the kind of careful handling that keeps fragile pieces intact.',
    intro:
      'Packing is where a move either gets calmer or more chaotic. We bring materials, wrap with discipline, and keep box labels and room assignments usable when it is time to unload.',
    details: [
      'Full-service packing with professional materials - nothing arrives broken.',
      'Kitchen, artwork, decor, books, electronics, and fragile pieces packed with clear room labeling.',
      'Unpacking support available when you want the move finished instead of merely delivered.',
    ],
    processTitle: 'Our packing flow',
    process: [
      {
        title: 'Material prep',
        text: 'We bring professional cartons, wrap, tape, and protective materials based on the scope of the move.',
      },
      {
        title: 'Room-by-room packing',
        text: 'Items are wrapped and boxed by zone so the unload stays organized and your labels actually mean something.',
      },
      {
        title: 'Optional unpacking',
        text: 'If you want the new space functional faster, we can unpack, clear materials, and help reset the room.',
      },
    ],
    image: '/packing-service.png',
    imageAlt: 'Mover carefully wrapping a fragile vase in a living room during a packing service.',
    seoTitle: 'Packing Services Austin TX | Quality Moving & Storage',
    seoDescription:
      'Professional packing and unpacking services in Austin, TX. Fragile handling, organized labels, and guaranteed quotes from Quality Moving & Storage.',
    keywords: ['packing services Austin TX', 'professional packers Austin', 'Austin unpacking services'],
    relatedCities: ['Austin', 'Leander', 'Lakeway', 'Marble Falls'],
  },
  {
    slug: 'specialty-items',
    title: 'Specialty Items',
    description: 'Pianos, antiques, and artwork moved by experienced hands.',
    heroTitle: 'Specialty Moving for Pianos, Antiques, and Art',
    heroDescription:
      'Heavy, fragile, awkward, or irreplaceable items handled by experienced crews who understand that specialty moves need patience, equipment, and real planning.',
    intro:
      'Some items do not forgive sloppy handling. We plan the route, protect the surfaces, and move pianos, antiques, artwork, and other specialty pieces with the respect they require.',
    details: [
      'Pianos, antiques, and artwork moved by experienced hands.',
      'Access planning for stairs, tight hallways, loading ramps, and fragile finish protection.',
      'Coordinated wrapping and placement so the item arrives ready for the right room, not the nearest corner.',
    ],
    processTitle: 'How specialty moves are handled',
    process: [
      {
        title: 'Evaluate the item and path',
        text: 'We look at weight, fragility, dimensions, and the route in and out before anyone starts lifting.',
      },
      {
        title: 'Wrap and secure correctly',
        text: 'Specialty pieces get dedicated protection, controlled loading order, and careful tie-down planning.',
      },
      {
        title: 'Place with intent',
        text: 'The final unload includes careful positioning so delicate or heavy pieces are not moved twice.',
      },
    ],
    image: '/packing.png',
    imageAlt: 'Mover carefully wrapping a fragile glass vase over moving boxes.',
    seoTitle: 'Piano and Specialty Movers Austin TX | Quality Moving & Storage',
    seoDescription:
      'Specialty moving in Austin for pianos, antiques, and artwork. Licensed crews, careful handling, and guaranteed quotes from Quality Moving & Storage.',
    keywords: ['piano movers Austin', 'antique movers Austin TX', 'artwork moving Austin'],
    relatedCities: ['Austin', 'Lakeway', 'Burnet', 'Marble Falls'],
  },
  {
    slug: 'storage',
    title: 'Storage Solutions',
    description: 'Secure short and long-term storage at our Round Rock facility.',
    heroTitle: 'Secure Storage With One Crew Owning the Hand-Off',
    heroDescription:
      'Short and long-term storage from our Round Rock facility for moves with delayed closings, renovations, staged long-distance timing, or inventory overflow.',
    intro:
      'Storage works best when it is part of the move plan, not a last-second patch. We coordinate pickup, intake, and return delivery so you are not juggling multiple vendors in the middle of a move.',
    details: [
      'Secure short and long-term storage at our Round Rock facility.',
      'Helpful for delayed closings, remodel timelines, and phased long-distance moves.',
      'One accountable company handling pickup, storage, and the return delivery schedule.',
    ],
    processTitle: 'Storage without the hand-off chaos',
    process: [
      {
        title: 'Move items into storage cleanly',
        text: 'We inventory the load, protect it for transit, and deliver it into storage with the same crew standards used on move day.',
      },
      {
        title: 'Store for the right timeline',
        text: 'Short and long-term storage options help you bridge closings, staging, or renovation delays.',
      },
      {
        title: 'Schedule the final delivery',
        text: 'When the destination is ready, we coordinate the last-mile delivery instead of sending you to start over with another mover.',
      },
    ],
    image: '/storage-service.png',
    imageAlt: 'Mover walking through a secure indoor storage facility with wooden storage containers.',
    seoTitle: 'Moving Storage Austin TX | Quality Moving & Storage',
    seoDescription:
      'Short and long-term moving storage near Austin and Round Rock, TX. Secure storage with one accountable moving team and guaranteed quotes.',
    keywords: ['moving storage Austin', 'Round Rock storage movers', 'short term storage Austin TX'],
    relatedCities: ['Round Rock', 'Austin', 'Georgetown', 'Cedar Park'],
  },
  {
    slug: 'loading-unloading',
    title: 'Loading & Unloading',
    description: 'We handle the heavy lifting - your truck or ours.',
    heroTitle: 'Heavy Lifting Without the Guesswork',
    heroDescription:
      'Loading and unloading support whether the truck is yours or ours, with careful stacking, tighter protection, and crews who know how to move quickly without getting careless.',
    intro:
      'Sometimes you already have the vehicle and only need the muscle. We load for safety, unload with room-by-room placement, and keep the heavy part of the move from turning into the risky part.',
    details: [
      'We handle the heavy lifting - your truck or ours.',
      'Smart loading order for furniture, boxes, fragile items, and awkward pieces.',
      'Unloading support for rentals, portable containers, and partial move plans.',
    ],
    processTitle: 'Loading and unloading done right',
    process: [
      {
        title: 'Plan the order',
        text: 'The crew sorts the load before lifting so the truck fills safely and the unload is easier to manage.',
      },
      {
        title: 'Lift and secure',
        text: 'Heavy items, fragile pieces, and tight spaces are handled with the right pace instead of rushed improvisation.',
      },
      {
        title: 'Unload with placement',
        text: 'Boxes and furniture go where they need to go, not just wherever the ramp ends.',
      },
    ],
    image: '/hero-image.png',
    imageAlt: 'Movers unloading boxes from a truck into a home.',
    seoTitle: 'Loading and Unloading Help Austin TX | Quality Moving & Storage',
    seoDescription:
      'Professional loading and unloading help in Austin, TX for rental trucks, containers, and full-service moves. Call Quality Moving & Storage at (512) 300-9543.',
    keywords: ['loading unloading movers Austin', 'Austin moving labor', 'truck loading help Austin TX'],
    relatedCities: ['Austin', 'Manor', 'Kyle', 'Buda'],
  },
];

const REGION_COPY = {
  'Metro Core': {
    lead: 'Downtown access, condo elevators, busy neighborhoods, and tighter move-day timing all stay in-bounds when the crew knows the city.',
    image: '/hero-image.png',
    imageAlt: 'Moving truck parked at an Austin-area home during a local move.',
  },
  North: {
    lead: 'Round Rock-based crews keep northbound schedules tighter, faster to book, and easier to manage without extra hand-offs.',
    image: '/storage-service.png',
    imageAlt: 'Secure storage and moving support based out of Round Rock, Texas.',
  },
  West: {
    lead: 'Hill Country routes, lake communities, and longer drive windows need real planning. We build the route before move day instead of improvising it on the truck.',
    image: '/long-distance.png',
    imageAlt: 'Moving truck driving a long route through open hill country terrain.',
  },
  East: {
    lead: 'New-build neighborhoods, growing communities, and eastbound local routes stay efficient when one team owns the timeline.',
    image: '/packing.png',
    imageAlt: 'Mover wrapping a fragile glass item for a local move.',
  },
  South: {
    lead: 'Southbound moves around the I-35 corridor stay cleaner when the schedule, truck plan, and unload order are locked before the crew arrives.',
    image: '/packing-service.png',
    imageAlt: 'Mover packing fragile household items inside a home.',
  },
};

export const CITIES = [
  { slug: 'austin', name: 'Austin', regionLabel: 'Metro Core' },
  { slug: 'round-rock', name: 'Round Rock', regionLabel: 'North' },
  { slug: 'cedar-park', name: 'Cedar Park', regionLabel: 'West' },
  { slug: 'georgetown', name: 'Georgetown', regionLabel: 'North' },
  { slug: 'leander', name: 'Leander', regionLabel: 'West' },
  { slug: 'pflugerville', name: 'Pflugerville', regionLabel: 'East' },
  { slug: 'kyle', name: 'Kyle', regionLabel: 'South' },
  { slug: 'buda', name: 'Buda', regionLabel: 'South' },
  { slug: 'lakeway', name: 'Lakeway', regionLabel: 'West' },
  { slug: 'manor', name: 'Manor', regionLabel: 'East' },
  { slug: 'jarrell', name: 'Jarrell', regionLabel: 'North' },
  { slug: 'burnet', name: 'Burnet', regionLabel: 'West' },
  { slug: 'marble-falls', name: 'Marble Falls', regionLabel: 'West' },
].map((city, index) => {
  const region = REGION_COPY[city.regionLabel];
  const serviceRotation = [
    ['Local Moving', 'Packing & Unpacking', 'Loading & Unloading'],
    ['Long Distance Moving', 'Storage Solutions', 'Packing & Unpacking'],
    ['Local Moving', 'Specialty Items', 'Storage Solutions'],
    ['Local Moving', 'Long Distance Moving', 'Specialty Items'],
  ];

  return {
    ...city,
    heroTitle: `${city.name}, TX Movers Who Show Up Ready`,
    heroDescription: `${BUSINESS.company} serves ${city.name}, TX with licensed crews, guaranteed quotes, and a cleaner moving process from first call to final unload.`,
    lead: region.lead,
    image: region.image,
    imageAlt: region.imageAlt,
    serviceFocus: serviceRotation[index % serviceRotation.length],
    seoTitle: `${city.name} TX Movers | Quality Moving & Storage`,
    seoDescription: `${city.name}, TX movers for local moving, packing, specialty items, and storage. Licensed and insured with guaranteed quotes. Call Quality Moving & Storage at (512) 300-9543.`,
    keywords: [`${city.name} TX movers`, `${city.name} moving company`, `${city.name} local movers`],
  };
});

export const CITY_GROUPS = [
  {
    label: 'Metro Core',
    description: 'Fast-turn city moves, condo schedules, office moves, and tighter downtown access windows.',
    cities: ['Austin'],
  },
  {
    label: 'North',
    description: 'Round Rock-based crews handling northbound local moves and longer regional schedules.',
    cities: ['Round Rock', 'Georgetown', 'Jarrell'],
  },
  {
    label: 'West',
    description: 'Hill Country and lake-area moves with better route planning and longer-drive coordination.',
    cities: ['Cedar Park', 'Leander', 'Lakeway', 'Burnet', 'Marble Falls'],
  },
  {
    label: 'East',
    description: 'Growing east-side communities with flexible local scheduling and packing support.',
    cities: ['Pflugerville', 'Manor'],
  },
  {
    label: 'South',
    description: 'Moves along the I-35 corridor, from quick local jobs to full-home relocations.',
    cities: ['Kyle', 'Buda'],
  },
];

export const FAQ_CATEGORIES = [
  {
    title: 'Quotes & Scheduling',
    items: [
      {
        question: 'How fast can I get a moving quote in Austin?',
        answer:
          'Most quote requests get a callback within the hour during business hours. Send the move details and we will confirm scope, timing, and pricing without hidden fees.',
      },
      {
        question: 'How far in advance should I book my move?',
        answer:
          'The earlier the better, especially for month-end dates, but we also handle same-day and short-notice local moves throughout Greater Austin when the schedule allows.',
      },
      {
        question: 'What does a guaranteed quote mean?',
        answer:
          'It means the scope and pricing are agreed before move day, so you are not dealing with surprise costs once the truck is already in the driveway.',
      },
    ],
  },
  {
    title: 'Services & Handling',
    items: [
      {
        question: 'Are you licensed and insured for Texas moves?',
        answer:
          'Yes. Quality Moving & Storage is a licensed and insured Texas mover with TXDMV license #006027218C.',
      },
      {
        question: 'Do you move pianos, antiques, and artwork?',
        answer:
          'We do. Specialty items are one of our core services, and our crews use the right equipment, wrapping, and handling process for pianos, antiques, and framed artwork.',
      },
      {
        question: 'Can you handle loading and unloading only?',
        answer:
          'Yes. If you already have the truck or container, we can provide the crew for safe loading, unloading, and room-by-room placement.',
      },
    ],
  },
  {
    title: 'Packing, Storage & Coverage',
    items: [
      {
        question: 'Do you offer full-service packing and unpacking?',
        answer:
          'Yes. We provide full-service packing with professional materials, plus unpacking support when you want the new space functional faster.',
      },
      {
        question: 'Do you offer storage near Austin?',
        answer:
          'Yes. We provide short and long-term storage at our Round Rock facility, which is helpful for delayed closings, remodels, and staged long-distance moves.',
      },
      {
        question: 'Which cities do you serve around Austin?',
        answer:
          'We regularly serve Austin, Round Rock, Cedar Park, Georgetown, Leander, Pflugerville, Kyle, Buda, Lakeway, Manor, Jarrell, Burnet, and Marble Falls.',
      },
    ],
  },
];

export const NAV_ITEMS = [
  { label: 'Services', href: '/services/' },
  { label: 'Service Areas', href: '/service-areas/' },
  { label: 'About', href: '/about/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact', href: '/contact/' },
];

export const QUICK_FACTS = [
  { label: 'Phone', value: BUSINESS.phoneDisplay, href: BUSINESS.phoneHref },
  { label: 'Address', value: BUSINESS.address },
  { label: 'Hours', value: BUSINESS.hours },
  { label: 'TXDMV', value: BUSINESS.license },
];

export const MOVE_SIZES = ['Studio', '1 Bed', '2 Bed', '3 Bed', '4+ Bed', 'Office'];

export const INITIAL_FORM_STATE = {
  name: '',
  phone: '',
  email: '',
  movingFrom: '',
  movingTo: '',
  moveDate: '',
  moveSize: MOVE_SIZES[0],
  notes: '',
};

function buildServicePath(serviceSlug) {
  return `/services/${serviceSlug}/`;
}

function buildCityPath(citySlug) {
  return `/service-areas/${citySlug}/`;
}

function cityNamesFromSlugs(slugs) {
  return slugs
    .map((name) => CITIES.find((city) => city.name === name) || CITIES.find((city) => city.slug === name))
    .filter(Boolean);
}

export const SERVICE_PATHS = SERVICES.map((service) => buildServicePath(service.slug));
export const CITY_PATHS = CITIES.map((city) => buildCityPath(city.slug));

export const ROUTES = [
  {
    kind: 'home',
    path: '/',
    title: 'Austin TX Movers | Quality Moving & Storage | (512) 300-9543',
    description:
      "Quality Moving & Storage - Austin's trusted movers for 19 years. Local, long distance, packing, storage. Licensed & insured. Free guaranteed quotes. Call (512) 300-9543.",
    keywords: [
      'Austin TX movers',
      'moving company Austin Texas',
      'local movers Austin',
      'long distance movers Austin',
      'Round Rock movers',
      'Cedar Park moving company',
    ],
    heroImage: '/hero-image.png',
    heroImageAlt: 'Quality Moving & Storage crew unloading boxes at an Austin-area home.',
  },
  {
    kind: 'services-index',
    path: '/services/',
    title: 'Moving Services in Austin TX | Quality Moving & Storage',
    description:
      'Local moving, long distance moving, packing, specialty items, loading help, and storage for Austin and Central Texas. Guaranteed quotes from Quality Moving & Storage.',
    keywords: ['Austin moving services', 'packing and moving Austin', 'storage movers Round Rock'],
    heroImage: '/packing-service.png',
  },
  ...SERVICES.map((service) => ({
    kind: 'service',
    path: buildServicePath(service.slug),
    serviceSlug: service.slug,
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.keywords,
    heroImage: service.image,
  })),
  {
    kind: 'areas-index',
    path: '/service-areas/',
    title: 'Service Areas | Austin & Central Texas Movers | Quality Moving & Storage',
    description:
      'Quality Moving & Storage serves Austin, Round Rock, Cedar Park, Georgetown, Leander, Pflugerville, Kyle, Buda, Lakeway, Manor, Jarrell, Burnet, and Marble Falls.',
    keywords: ['Austin service area movers', 'Central Texas movers', 'Round Rock moving company'],
    heroImage: '/hero-image.png',
  },
  ...CITIES.map((city) => ({
    kind: 'city',
    path: buildCityPath(city.slug),
    citySlug: city.slug,
    title: city.seoTitle,
    description: city.seoDescription,
    keywords: city.keywords,
    heroImage: city.image,
  })),
  {
    kind: 'quote',
    path: '/quote/',
    title: 'Free Moving Quote | Quality Moving & Storage Austin TX',
    description:
      'Request a free guaranteed moving quote from Quality Moving & Storage. Licensed Austin-area movers for local moves, long distance, packing, and storage.',
    keywords: ['Austin moving quote', 'free mover estimate Austin', 'moving quote Round Rock'],
    heroImage: '/hero-image.png',
  },
  {
    kind: 'contact',
    path: '/contact/',
    title: 'Contact Quality Moving & Storage | Austin TX Movers',
    description:
      'Call Quality Moving & Storage at (512) 300-9543 or visit our Round Rock office. Licensed Austin-area movers with guaranteed quotes and storage support.',
    keywords: ['contact Austin movers', 'Round Rock moving company phone number', 'Quality Moving & Storage'],
    heroImage: '/storage-service.png',
  },
  {
    kind: 'about',
    path: '/about/',
    title: 'About Quality Moving & Storage | Licensed Austin TX Movers',
    description:
      'Learn about Quality Moving & Storage, a licensed and insured Austin-area moving company with 19 years in business, guaranteed quotes, and storage support in Round Rock.',
    keywords: ['about Austin movers', 'licensed movers Austin TX', 'Round Rock moving company'],
    heroImage: '/austin-tx-moving-storage-warehouse.jpg',
  },
  {
    kind: 'faq',
    path: '/faq/',
    title: 'Austin Movers FAQ | Quality Moving & Storage',
    description:
      'Answers about moving quotes, packing, storage, specialty items, and the Austin service area from Quality Moving & Storage.',
    keywords: ['Austin movers FAQ', 'moving questions Austin TX', 'packing and storage faq Austin'],
    heroImage: '/packing.png',
  },
];

export const ROUTE_MAP = new Map(ROUTES.map((route) => [route.path, route]));

export function normalizePath(input = '/') {
  const base = input.split(/[?#]/)[0] || '/';
  const cleaned = base.replace(/\/{2,}/g, '/');

  if (cleaned === '/') {
    return '/';
  }

  return cleaned.endsWith('/') ? cleaned : `${cleaned}/`;
}

export function getServiceBySlug(slug) {
  return SERVICES.find((service) => service.slug === slug);
}

export function getCityBySlug(slug) {
  return CITIES.find((city) => city.slug === slug);
}

export function getRoute(inputPath = '/') {
  const path = normalizePath(inputPath);
  const route = ROUTE_MAP.get(path);

  if (route) {
    return route;
  }

  return {
    kind: 'not-found',
    path,
    title: 'Page Not Found | Quality Moving & Storage',
    description: 'The page you requested could not be found.',
    keywords: ['Austin movers'],
    heroImage: '/hero-image.png',
    robots: 'noindex,follow',
  };
}

function buildBreadcrumbs(route) {
  const crumbs = [{ label: 'Home', href: '/' }];

  if (route.kind === 'home' || route.kind === 'not-found') {
    return crumbs;
  }

  if (route.kind === 'services-index') {
    crumbs.push({ label: 'Services', href: route.path });
    return crumbs;
  }

  if (route.kind === 'service') {
    const service = getServiceBySlug(route.serviceSlug);
    crumbs.push({ label: 'Services', href: '/services/' });
    crumbs.push({ label: service.title, href: route.path });
    return crumbs;
  }

  if (route.kind === 'areas-index') {
    crumbs.push({ label: 'Service Areas', href: route.path });
    return crumbs;
  }

  if (route.kind === 'city') {
    const city = getCityBySlug(route.citySlug);
    crumbs.push({ label: 'Service Areas', href: '/service-areas/' });
    crumbs.push({ label: city.name, href: route.path });
    return crumbs;
  }

  const staticLabels = {
    quote: 'Quote',
    contact: 'Contact',
    about: 'About',
    faq: 'FAQ',
  };

  crumbs.push({ label: staticLabels[route.kind] || 'Page', href: route.path });
  return crumbs;
}

function buildBaseMeta(route) {
  return {
    title: route.title,
    description: route.description,
    keywords: route.keywords.join(', '),
    canonical: `${SITE_URL}${route.path}`,
    image: `${SITE_URL}/og-image.png`,
    imageAlt: 'Quality Moving & Storage moving truck and crew serving Austin and Central Texas.',
    ogTitle: route.kind === 'home' ? 'Quality Moving & Storage | Austin TX Movers' : route.title,
    ogDescription: route.description,
    preloadImage: route.heroImage || null,
    robots: route.robots || 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  };
}

function buildMovingCompanySchema() {
  return {
    '@type': 'MovingCompany',
    '@id': `${SITE_URL}/#moving-company`,
    name: BUSINESS.company,
    url: `${SITE_URL}/`,
    telephone: BUSINESS.phoneIntl,
    priceRange: '$$',
    image: [`${SITE_URL}/og-image.png`, `${SITE_URL}/hero-image.png`, `${SITE_URL}/storage-service.png`],
    logo: `${SITE_URL}/apple-touch-icon.png`,
    description:
      'Quality Moving & Storage is a licensed and insured moving company serving Austin, TX and surrounding areas for 19 years.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.locality,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: 'US',
    },
    areaServed: CITIES.map((city) => city.name),
    openingHours: 'Mo-Sa 09:00-18:00',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
  };
}

function buildWebPageSchema(route) {
  return {
    '@type': 'WebPage',
    '@id': `${SITE_URL}${route.path}#webpage`,
    url: `${SITE_URL}${route.path}`,
    name: route.title,
    description: route.description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    about: {
      '@id': `${SITE_URL}/#moving-company`,
    },
  };
}

function buildBreadcrumbSchema(route) {
  const crumbs = buildBreadcrumbs(route);

  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `${SITE_URL}${crumb.href}`,
    })),
  };
}

function buildHomeSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: BUSINESS.company,
    inLanguage: 'en-US',
  };
}

function buildServiceSchema(service) {
  return {
    '@type': 'Service',
    name: `${service.title} - ${BUSINESS.company}`,
    serviceType: service.title,
    description: service.heroDescription,
    provider: {
      '@id': `${SITE_URL}/#moving-company`,
    },
    areaServed: CITIES.map((city) => city.name),
    url: `${SITE_URL}${buildServicePath(service.slug)}`,
  };
}

function buildFAQSchema() {
  return {
    '@type': 'FAQPage',
    mainEntity: FAQ_CATEGORIES.flatMap((category) =>
      category.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    ),
  };
}

function buildCitySchema(city) {
  return {
    '@type': 'Service',
    name: `${city.name} TX Movers`,
    serviceType: 'Moving Services',
    areaServed: city.name,
    provider: {
      '@id': `${SITE_URL}/#moving-company`,
    },
    description: city.heroDescription,
    url: `${SITE_URL}${buildCityPath(city.slug)}`,
  };
}

export function getPageMeta(route) {
  const base = buildBaseMeta(route);
  const schemas = [buildMovingCompanySchema(), buildWebPageSchema(route), buildBreadcrumbSchema(route)];

  if (route.kind === 'home') {
    schemas.unshift(buildHomeSchema());
  }

  if (route.kind === 'service') {
    schemas.push(buildServiceSchema(getServiceBySlug(route.serviceSlug)));
  }

  if (route.kind === 'city') {
    schemas.push(buildCitySchema(getCityBySlug(route.citySlug)));
  }

  if (route.kind === 'faq') {
    schemas.push(buildFAQSchema());
  }

  return {
    ...base,
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': schemas,
    },
  };
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function renderHeadMarkup(route) {
  const meta = getPageMeta(route);

  const tags = [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="keywords" content="${escapeHtml(meta.keywords)}" />`,
    `<meta name="robots" content="${meta.robots}" />`,
    `<meta name="author" content="${escapeHtml(BUSINESS.company)}" />`,
    `<link rel="canonical" href="${meta.canonical}" />`,
    `<link rel="alternate" hreflang="en-US" href="${meta.canonical}" />`,
    `<meta property="og:site_name" content="${escapeHtml(BUSINESS.company)}" />`,
    '<meta property="og:locale" content="en_US" />',
    `<meta property="og:title" content="${escapeHtml(meta.ogTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.ogDescription)}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:url" content="${meta.canonical}" />`,
    `<meta property="og:image" content="${meta.image}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    `<meta property="og:image:alt" content="${escapeHtml(meta.imageAlt)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(meta.ogTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.ogDescription)}" />`,
    `<meta name="twitter:image" content="${meta.image}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(meta.imageAlt)}" />`,
  ];

  if (meta.preloadImage) {
    tags.push(`<link rel="preload" as="image" href="${meta.preloadImage}" />`);
  }

  tags.push(
    `<script type="application/ld+json">${JSON.stringify(meta.jsonLd).replace(/</g, '\\u003c')}</script>`,
  );

  return tags.join('\n    ');
}

function upsertHeadTag(key, createTag) {
  const selector = `[data-app-head="${key}"]`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = createTag();
    element.setAttribute('data-app-head', key);
    document.head.append(element);
  }

  return element;
}

export function syncDocumentHead(route) {
  if (typeof document === 'undefined') {
    return;
  }

  const meta = getPageMeta(route);
  document.title = meta.title;

  upsertHeadTag('description', () => document.createElement('meta')).setAttribute('name', 'description');
  document.head.querySelector('[data-app-head="description"]').setAttribute('content', meta.description);

  upsertHeadTag('keywords', () => document.createElement('meta')).setAttribute('name', 'keywords');
  document.head.querySelector('[data-app-head="keywords"]').setAttribute('content', meta.keywords);

  upsertHeadTag('robots', () => document.createElement('meta')).setAttribute('name', 'robots');
  document.head.querySelector('[data-app-head="robots"]').setAttribute('content', meta.robots);

  upsertHeadTag('author', () => document.createElement('meta')).setAttribute('name', 'author');
  document.head.querySelector('[data-app-head="author"]').setAttribute('content', BUSINESS.company);

  upsertHeadTag('canonical', () => document.createElement('link')).setAttribute('rel', 'canonical');
  document.head.querySelector('[data-app-head="canonical"]').setAttribute('href', meta.canonical);

  upsertHeadTag('alternate', () => document.createElement('link')).setAttribute('rel', 'alternate');
  const alternate = document.head.querySelector('[data-app-head="alternate"]');
  alternate.setAttribute('hreflang', 'en-US');
  alternate.setAttribute('href', meta.canonical);

  const metaPairs = [
    ['og:site_name', BUSINESS.company],
    ['og:locale', 'en_US'],
    ['og:title', meta.ogTitle],
    ['og:description', meta.ogDescription],
    ['og:type', 'website'],
    ['og:url', meta.canonical],
    ['og:image', meta.image],
    ['og:image:width', '1200'],
    ['og:image:height', '630'],
    ['og:image:alt', meta.imageAlt],
    ['twitter:card', 'summary_large_image'],
    ['twitter:title', meta.ogTitle],
    ['twitter:description', meta.ogDescription],
    ['twitter:image', meta.image],
    ['twitter:image:alt', meta.imageAlt],
  ];

  metaPairs.forEach(([property, content]) => {
    const key = property.replace(/[:]/g, '-');
    const isOg = property.startsWith('og:');
    const tag = upsertHeadTag(key, () => document.createElement('meta'));

    if (isOg) {
      tag.setAttribute('property', property);
      tag.removeAttribute('name');
    } else {
      tag.setAttribute('name', property);
      tag.removeAttribute('property');
    }

    tag.setAttribute('content', content);
  });

  const jsonLdTag = upsertHeadTag('json-ld', () => document.createElement('script'));
  jsonLdTag.setAttribute('type', 'application/ld+json');
  jsonLdTag.textContent = JSON.stringify(meta.jsonLd);
}

export function renderSitemapXml() {
  const lastmod = '2026-04-07';
  const urls = ROUTES.filter((route) => route.kind !== 'not-found')
    .map(
      (route) => `  <url>\n    <loc>${SITE_URL}${route.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function buildStaticPath(routePath) {
  if (routePath === '/') {
    return 'index.html';
  }

  const trimmed = routePath.replace(/^\//, '').replace(/\/$/, '');
  return `${trimmed}/index.html`;
}

export function isNavActive(currentPath, href) {
  if (href === '/') {
    return currentPath === '/';
  }

  return currentPath === href || currentPath.startsWith(href);
}

export function getServiceLinks(serviceNames) {
  return serviceNames
    .map((name) => SERVICES.find((service) => service.title === name))
    .filter(Boolean)
    .map((service) => ({
      label: service.title,
      href: buildServicePath(service.slug),
      description: service.description,
    }));
}

export function getCityLinks(cityNames) {
  return cityNamesFromSlugs(cityNames).map((city) => ({
    label: city.name,
    href: buildCityPath(city.slug),
  }));
}

export function getFooterLinks() {
  return {
    services: SERVICES.map((service) => ({
      label: service.title,
      href: buildServicePath(service.slug),
    })),
    cities: CITIES.slice(0, 6).map((city) => ({
      label: city.name,
      href: buildCityPath(city.slug),
    })),
    company: [
      { label: 'About', href: '/about/' },
      { label: 'FAQ', href: '/faq/' },
      { label: 'Contact', href: '/contact/' },
      { label: 'Get Quote', href: '/quote/' },
    ],
  };
}

export { SITE_URL, buildCityPath, buildServicePath, buildBreadcrumbs };
