function getPublicEnv(key) {
  const value = import.meta.env[key];
  return typeof value === 'string' ? value.trim() : '';
}

const approvedBusinessName = getPublicEnv('VITE_PUBLIC_BUSINESS_NAME') || 'Quality Moving & Storage';
const approvedBusinessShortName = getPublicEnv('VITE_PUBLIC_BUSINESS_SHORT_NAME') || 'Quality Moving';
const fallbackDisplayName = approvedBusinessName;
const fallbackSeoTitleSuffix = 'Austin & Central Texas Movers';
const fallbackCopyrightLabel = approvedBusinessName;

function getApprovedPhone() {
  const display = getPublicEnv('VITE_PUBLIC_PHONE');
  const digits = display.replace(/\D/g, '');

  if (!display || !digits) {
    return null;
  }

  return { display, digits };
}

function getApprovedAddress() {
  const street = getPublicEnv('VITE_PUBLIC_ADDRESS_STREET');
  const city = getPublicEnv('VITE_PUBLIC_ADDRESS_CITY');
  const region = getPublicEnv('VITE_PUBLIC_ADDRESS_REGION');
  const postalCode = getPublicEnv('VITE_PUBLIC_ADDRESS_POSTAL_CODE');

  if (!street || !city || !region || !postalCode) {
    return null;
  }

  return {
    street,
    city,
    region,
    postalCode,
    country: getPublicEnv('VITE_PUBLIC_ADDRESS_COUNTRY') || 'US',
  };
}

const runtimeOrigin = typeof window !== 'undefined' ? window.location.origin : '';
const approvedSiteOrigin =
  getPublicEnv('VITE_PUBLIC_SITE_ORIGIN').replace(/\/+$/, '') || runtimeOrigin || 'https://qualitymoving.com';
const approvedPhone = getApprovedPhone();
const approvedAddress = getApprovedAddress();
const approvedYearFoundedValue = Number.parseInt(getPublicEnv('VITE_PUBLIC_YEAR_FOUNDED'), 10);
const approvedYearFounded = Number.isInteger(approvedYearFoundedValue)
  ? approvedYearFoundedValue
  : null;

export const site = {
  name: approvedBusinessName,
  displayName: approvedBusinessName || fallbackDisplayName,
  shortName: approvedBusinessShortName || approvedBusinessName || fallbackDisplayName,
  hasApprovedBusinessName: true,
  seoTitleSuffix: fallbackSeoTitleSuffix,
  copyrightLabel: approvedBusinessName || fallbackCopyrightLabel,
  tagline:
    'Careful local and long-distance moving, packing, and storage across Austin and Central Texas.',
  description:
    'Quality Moving & Storage is an Austin-based moving company serving Round Rock, Cedar Park, Pflugerville, Lakeway, Georgetown, and Leander. Written estimates, one crew from walkthrough to placement, and honest scope reviews for every move.',
  domain: approvedSiteOrigin,
  email: getPublicEnv('VITE_PUBLIC_EMAIL'),
  phone: approvedPhone,
  address: approvedAddress,
  geo: null,
  hours: {
    summary: 'Mon–Sat · 9am – 5pm',
    summaryList: [
      'Monday – Friday: 9:00 AM – 5:00 PM',
      'Saturday: 9:00 AM – 5:00 PM',
      'Sunday: Closed',
    ],
    specification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
  },
  license: getPublicEnv('VITE_PUBLIC_LICENSE') || 'TXDMV Registered Texas Mover',
  complianceNote: 'Written estimates confirm scope, schedule, and service fit before booking.',
  officeLabel: approvedAddress ? `${approvedAddress.city} office` : 'Round Rock office',
  socials: {},
  yearFounded: approvedYearFounded,
  serviceAreas: [
    'Austin',
    'Round Rock',
    'Cedar Park',
    'Georgetown',
    'Leander',
    'Lakeway',
    'Buda',
    'Kyle',
    'Pflugerville',
    'Manor',
    'Marble Falls',
  ],
  neighborhoods: [
    { name: 'Round Rock', note: 'Home office. Most same-day scheduling.' },
    { name: 'Cedar Park', note: 'Large homes, often paired with packing.' },
    { name: 'Pflugerville', note: 'Apartment and growing-family moves.' },
    { name: 'Lakeway & Steiner Ranch', note: 'Hillside access and long driveways.' },
    { name: 'Georgetown', note: 'Downsizing and estate transitions.' },
    { name: 'Leander', note: 'New-construction and phased move-ins.' },
    { name: 'Downtown Austin & East Side', note: 'Elevator timing and loading-zone coordination.' },
    { name: 'South Austin & Buda', note: 'Relocations heading in and out of Travis County.' },
  ],
};

export const yearsInBusiness = site.yearFounded
  ? new Date().getFullYear() - site.yearFounded
  : null;

export const publicContact = {
  hasPhone: Boolean(site.phone?.digits),
  hasEmail: Boolean(site.email),
  hasAddress: Boolean(site.address),
  phoneHref: site.phone ? `tel:${site.phone.digits}` : '',
  emailHref: site.email ? `mailto:${site.email}` : '',
  talkHref: site.phone ? `tel:${site.phone.digits}` : '/contact',
  talkLabel: site.phone ? `Call ${site.phone.display}` : 'Talk through your move',
  shortTalkLabel: site.phone ? 'Call now' : 'Contact us',
};

export const navigation = [
  { to: '/services', label: 'Services' },
  { to: '/service-areas', label: 'Service areas' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export const heroStats = [
  { value: 'Austin', suffix: '+ Central TX', label: 'Coverage' },
  { value: 'Written', suffix: 'estimates', label: 'Every quote' },
  { value: 'One crew', suffix: 'start to finish', label: 'On your move' },
  { value: 'Mon–Sat', suffix: '9–5', label: 'Office hours' },
];

export const trustLine = [
  'TXDMV registered',
  'Fully insured',
  'Walkthrough before every quote',
  'One coordinator per move',
];

export const services = [
  {
    id: 'local-moving',
    title: 'Local Moving',
    shortTitle: 'Local',
    summary: 'Home, apartment, and office moves across Austin and Round Rock.',
    details:
      'Doorway guards, floor protection, and careful furniture placement keep the house in good shape — start to finish.',
    highlights: [
      'Clear arrival windows',
      'Floor and doorframe protection',
      'Disassembly and reassembly',
      'Apartment and house moves',
    ],
    image: '/local-moving-service.jpg',
    imageAlt: 'Two movers carrying a sofa through a bright room during a residential move.',
  },
  {
    id: 'commercial-moving',
    title: 'Commercial Relocation',
    shortTitle: 'Commercial',
    summary: 'Office and retail moves planned around your business hours and continuity.',
    details:
      'We coordinate with supervisors, label assets by department, and keep the sequence clear so teams can get back to work.',
    highlights: [
      'Department-by-department planning',
      'IT and workstation coordination',
      'After-hours scheduling',
      'Labeled inventory process',
    ],
    image: '/commercial-moving-service.jpg',
    imageAlt: 'A team labeling office boxes during a commercial relocation.',
  },
  {
    id: 'packing',
    title: 'Packing Services',
    shortTitle: 'Packing',
    summary: 'Full, partial, and fragile-only packing with sturdy materials and clean labels.',
    details:
      'We use sturdy materials, clear room labels, and packing plans that make move day — and unpacking — less chaotic.',
    highlights: [
      'Full-home or partial packing',
      'Kitchen, art, and electronics',
      'Room-by-room labeling',
      'Custom crating when needed',
    ],
    image: '/packing-service-real.jpg',
    imageAlt: 'Fragile dishes being wrapped with bubble wrap before a move.',
  },
  {
    id: 'long-distance',
    title: 'Long-Distance Moving',
    shortTitle: 'Long-distance',
    summary: 'Cross-state and interstate moves with one coordinator from pickup to delivery.',
    details:
      'You get a written timeline, scheduled checkpoints, and planning around access at both ends — without the rotating phone tree.',
    highlights: [
      'Single point of contact',
      'Scheduled communication',
      'Interstate paperwork',
      'Clear delivery windows',
    ],
    image: '/austin-tx-long-distance-moving-truck.jpg',
    imageAlt: 'Long-distance moving truck heading out of Austin, Texas.',
  },
  {
    id: 'storage',
    title: 'Storage Solutions',
    shortTitle: 'Storage',
    summary: 'Short- and long-term storage for closing gaps, renovations, or phased move-ins.',
    details:
      'Items are wrapped, logged, and easy to retrieve when your timeline shifts — which in this market, it will.',
    highlights: [
      'Monitored facilities',
      'Item tracking and labeling',
      'Flexible retrieval',
      'Bridge storage for renovations',
    ],
    image: '/storage-service-real.jpg',
    imageAlt: 'Two workers carrying labeled boxes through a warehouse storage aisle.',
  },
];

export const featuredServices = services.filter((service) =>
  ['local-moving', 'packing', 'long-distance', 'storage'].includes(service.id),
);

export const homeGallery = [
  {
    title: 'Room-by-room handling',
    text: 'Large furniture moved on planned paths with the final placement decided before unloading starts.',
    image: '/room-by-room-handling.jpg',
    imageAlt: 'A mover carrying a sofa through a narrow hallway during a residential move.',
  },
  {
    title: 'Fragile packing',
    text: 'Kitchens, dishes, and breakables wrapped correctly before they ever touch the truck.',
    image: '/packing-service-real.jpg',
    imageAlt: 'Fragile dishes being wrapped with bubble wrap before a move.',
  },
  {
    title: 'Tracked storage',
    text: 'Items labeled, carried, and handed into storage when the timeline between homes shifts.',
    image: '/storage-service-real.jpg',
    imageAlt: 'Two workers carrying labeled boxes through a warehouse storage aisle.',
  },
];

export const serviceDetails = [
  {
    id: 'local-moving',
    title: 'Local Moving in Austin',
    intro:
      'Local moves for homes, apartments, and small offices across Austin, Round Rock, Cedar Park, Pflugerville, and Lakeway.',
    details: [
      'In the Austin metro, local move logistics hinge on timing and access. We do not use one-size-fits-all plans. Every job starts with a walkthrough — in person or virtual — where we measure stair access, verify parking options, and confirm elevator windows before anyone touches a box.',
      'When you work with our local moving team, you get transparent sequencing from first call to final placement. We lock your move date, assign your crew early, and confirm exact arrival windows again 24 hours before show time so your home and schedule stay protected.',
      'Our crews are trained for homes, condos, and office moves. We use corner protection, protective wraps, dollies, and padded load plans for every fragile item, then complete a room-by-room walkthrough at drop-off so every piece lands where it should.',
      'For Austin neighborhoods with narrow driveways or shared entrances, we prepare alternate paths before unloading starts. For premium pieces, antiques, or heavy electronics, we assign handling crews with dedicated loading and placement roles.',
      'The final phase is practical: a closeout inspection against the original plan, photos where needed, and a direct review of any storage hold or retrieval requirements.',
    ],
    faqs: [
      {
        question: 'Can you move from Austin to Round Rock or Lakeway on the same day as scheduling changes?',
        answer:
          'Yes. When route windows are flexible and we have available crews, we can revise the window with advance notice and keep pricing locked to the approved move scope.',
      },
      {
        question: 'Do you handle apartment-only logistics like elevators and shared hallways?',
        answer:
          'Yes. We plan elevator timing, hallway clearance, and parking placement before moving day so your move stays coordinated with the building’s rules.',
      },
    ],
    related: ['packing', 'storage'],
  },
  {
    id: 'packing',
    title: 'Packing Services for Austin Homes',
    intro:
      'Full packing, partial packing, or fragile-only help for Austin-area homes and small businesses.',
    details: [
      'Packing quality is the single biggest predictor of move-day speed. Our team starts with a move map: which rooms are packed first, what must be packed only by hand, and which items can be staged separately for easy transport.',
      'We use high-density boxes, wardrobe and dish packing strategies, protective bubble wrap, corner guards, and crates for legacy furniture. In Cedar Park and Pflugerville, timing, weekend constraints, and family schedules vary widely, so we tailor the workflow around your calendar instead of forcing one standard method.',
      'For mixed load plans, we pair full-service packing on priority items with assisted self-packing for low-risk goods. This keeps costs practical while ensuring every fragile shipment receives the right level of labor.',
      'Our packing advisors also help with moving-day planning: what to keep in your car, what to keep separate for immediate access, and how to protect sensitive electronics so they arrive ready for use.',
    ],
    faqs: [
      {
        question: 'Do you offer packing-only services without transport?',
        answer:
          'Yes. We provide full, partial, or fragile-only packing plans when transport is being handled separately or in a different phase.',
      },
      {
        question: 'Can we keep some items packed and not move them on day one?',
        answer:
          'Absolutely. Staged packing is common — essentials are packed first and season-sensitive items are boxed and stored for later stages.',
      },
    ],
    related: ['local-moving', 'storage'],
  },
  {
    id: 'long-distance',
    title: 'Long-Distance Moving',
    intro:
      'Cross-state and interstate moves with one coordinator from pickup to delivery.',
    details: [
      'A long-distance move can create uncertainty around timing, documentation, and arrival confirmation. We remove that by creating a written move timeline with clear responsibility checkpoints. Each stage includes who is handling route updates, who monitors delivery milestones, and how disputes are resolved.',
      'Your move starts with a detailed scope review. We document stair access, equipment constraints, and special handling requirements — sensitive systems like instruments, antique furniture, or home-office electronics. For cross-state routes, we flag permit and parking variables early.',
      'Because mileage matters, we provide practical sequencing for loading, unloading, and transport staging: weight balance, protective cushioning, and room-specific retrieval order when your destination inventory gets set up.',
      'Many clients in Round Rock and Austin want temporary storage in case destination keys are delayed or renovations extend. We can combine long-distance moves with short-term storage so you are not forced to choose between schedule and safety.',
    ],
    faqs: [
      {
        question: 'How are long-distance costs estimated?',
        answer:
          'We provide a written estimate based on distance, volume, access constraints, packing level, and optional services. Final pricing is confirmed after scope review so there are no hidden milestones.',
      },
      {
        question: 'Do you support destination check-in help?',
        answer:
          'Yes. Destination arrival coordination steps are part of the plan so your receiver-side timeline is clear before unloading starts.',
      },
    ],
    related: ['local-moving', 'storage'],
  },
  {
    id: 'storage',
    title: 'Storage Solutions in the Austin Area',
    intro:
      'Short-term and long-term storage for delayed closings, renovations, and move-in gaps.',
    details: [
      'Storage should support your move, not replace planning. Our storage solutions are built for practical use cases — delayed home access, renovation delays, and estate cleanout transitions. We keep your move active while your living space waits.',
      'Each unit run is logged with item-level notes and retrieval tags so you can request staged pickups without relearning where every box was packed. Families using storage from Austin or Lakeway often appreciate the clarity: they can move in phases while construction or rental timing is finalized.',
      'Security and access are central. We use monitored access controls, layered check-in, and regular condition checks for large boxed items and furniture. For fragile or high-value items, we recommend protective crates before storage handoff.',
    ],
    faqs: [
      {
        question: 'Can storage be used for just one or two weeks?',
        answer:
          'Yes. Short-duration holds are common when move dates shift.',
      },
      {
        question: 'Are there pickup limits on stored goods?',
        answer:
          'No fixed minimum exists for retrieval windows. We can schedule staged pickup plans that align with your move-in progress.',
      },
    ],
    related: ['packing', 'local-moving'],
  },
];

export const howItWorks = [
  {
    step: '01',
    title: 'Walkthrough',
    text: 'In person or virtual. We measure access, note stairs, elevators, and specialty items — the things that actually change your quote.',
  },
  {
    step: '02',
    title: 'Written estimate',
    text: 'A line-item quote with scope, crew, truck count, and timing. No surprise fees tacked on after the truck leaves.',
  },
  {
    step: '03',
    title: 'Move day',
    text: 'Arrival window confirmed 24 hours before. Floor and doorframe protection standard. Room-by-room placement at drop-off.',
  },
  {
    step: '04',
    title: 'Closeout',
    text: 'Walkthrough against the original plan. Any storage hold or retrieval scheduled before we leave the driveway.',
  },
];

export const trustSignals = [
  {
    label: 'Written estimates after a walkthrough',
    detail: 'We use the walkthrough to scope access, timing, and the services tied to your move. What we quote is what you pay.',
    icon: 'shield-check',
  },
  {
    label: 'One coordinator from first call to placement',
    detail: 'Packing, storage, local moves, and long-distance work are planned together — not handed between separate teams.',
    icon: 'user-check',
  },
  {
    label: 'Licensed and insured in Texas',
    detail: 'TXDMV-registered Texas mover with full insurance coverage. Verification paperwork is shared with every estimate.',
    icon: 'cube',
  },
  {
    label: 'Grounded in Austin, not dispatched from elsewhere',
    detail: 'Our crews know which downtown buildings have shared loading docks and which Cedar Park driveways can actually fit a 26-foot truck.',
    icon: 'star',
  },
];

export const companyValues = [
  {
    title: 'Prepared crews',
    text: 'Teams arrive with the right tools, materials, and pre-move walkthrough notes — not a clipboard and a guess.',
  },
  {
    title: 'Clear communication',
    text: 'You know who is coming, when they arrive, and what happens next at every stage of the move.',
  },
  {
    title: 'Careful handling',
    text: 'Homes, offices, and specialty items are treated the way we would want our own handled.',
  },
];

export const milestones = site.yearFounded && yearsInBusiness
  ? [
      {
        year: String(site.yearFounded),
        event: 'Opened with a focus on reliable local moving and respectful service.',
      },
      {
        year: '2018',
        event: 'Built a dedicated commercial moving team for office and retail relocations.',
      },
      {
        year: '2023',
        event: 'Expanded storage operations with stronger tracking and retrieval scheduling.',
      },
      {
        year: String(new Date().getFullYear()),
        event: `Now in year ${yearsInBusiness}, serving Austin and surrounding cities with packing, moving, and storage.`,
      },
    ]
  : [
      {
        year: 'Walkthrough',
        event: 'Written scope reviews cover access, timing, and service fit before scheduling.',
      },
      {
        year: 'Packing',
        event: 'Packing, storage, and route planning stay coordinated as one job instead of separate bookings.',
      },
      {
        year: 'Move day',
        event: 'Crews follow the same written plan used during the estimate stage.',
      },
    ];

export const faqs = [
  {
    question: 'How far in advance should I book my Austin move?',
    answer:
      'During busy season (May through August, and the first week of every month), 2–4 weeks is ideal. For urgent windows, call the office — we do our best to fit you in.',
  },
  {
    question: 'Are your quotes guaranteed?',
    answer:
      'Yes. After the walkthrough, we provide a written quote tied to the approved scope and timing. If the scope does not change, the price does not change.',
  },
  {
    question: 'Can you move specialty items like pianos, gun safes, or art?',
    answer:
      'Yes. Pianos, antiques, artwork, safes, and larger legacy furniture are handled with a dedicated plan — crew assignments, equipment, and placement sequence documented before move day.',
  },
  {
    question: 'Do you offer packing-only services?',
    answer: 'Yes. Full packing, partial packing, and fragile-only packing are all available as standalone services.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'Austin, Round Rock, Cedar Park, Pflugerville, Lakeway, Georgetown, Leander, Buda, Kyle, Manor, Marble Falls — plus long-distance moves originating in Central Texas.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. We are a TXDMV-registered Texas mover, fully insured. Credential paperwork is shared with every written estimate.',
  },
];

export const movingTips = [
  {
    title: 'Lock scope before move day',
    text: 'List stair access, parking limits, heavy doors, fragile items, and access constraints before the walkthrough.',
  },
  {
    title: 'Demand clear line-item pricing',
    text: 'A good quote names access fees, labor assumptions, and every optional add-on before you approve.',
  },
  {
    title: 'Confirm licensing and insurance',
    text: 'Ask for active Texas registration and insurance coverage terms in writing before you sign.',
  },
  {
    title: 'Protect value items yourself too',
    text: 'Take photos and confirm final placement plans for artwork, antiques, and pianos before loading starts.',
  },
];

export const reviews = [
  {
    name: 'Proof pending',
    role: 'Customer review content is waiting on client approval',
    quote:
      'Customer quotes and star ratings will be added here once the approved review source and wording are supplied.',
  },
];

export const austinMoverResearchSources = [
  {
    title: 'Great Guys Moving – Austin Movers Ranking',
    url: 'https://www.greatguysmove.com/movers/texas/austin/',
    snapshot: 'Updated Jun 24, 2025',
    note: 'Analyzed 143 Austin movers across 122,105 review data points with a 24,000+ benchmark.',
  },
  {
    title: 'Great Guys Moving Rating System',
    url: 'https://www.greatguysmove.com/ggm-rating-index/',
    snapshot: 'Methodology page',
    note: 'Uses an 11-point scoring model including quality, punctuality, communication, and care metrics.',
  },
  {
    title: 'Angi Austin Movers Review Market',
    url: 'https://www.angi.com/companylist/us/tx/austin/moving.htm',
    snapshot: 'Last update Feb 16, 2026',
    note: 'Shows the active Austin movers ecosystem and verified review activity across multiple platforms.',
  },
];

/* Approximate pricing ranges for editorial use. Final pricing is always the written estimate. */
export const movingCostRanges = [
  {
    type: 'Studio / 1-bedroom apartment',
    local: '$450 – $900',
    crew: '2 movers · 3–5 hours',
    note: 'Typical inside Austin ZIPs with elevator access.',
  },
  {
    type: '2-bedroom home or apartment',
    local: '$900 – $1,600',
    crew: '2–3 movers · 5–7 hours',
    note: 'Stairs or long carries push toward the upper end.',
  },
  {
    type: '3-bedroom home',
    local: '$1,500 – $2,800',
    crew: '3 movers · 6–9 hours',
    note: 'Packing, heavy items, or multiple stops change scope.',
  },
  {
    type: '4-bedroom home or larger',
    local: '$2,500 – $5,000+',
    crew: '3–4 movers · 7–10+ hours',
    note: 'Usually quoted after an in-home walkthrough.',
  },
];

export const pricingNotes = [
  'Hourly crews in the Austin metro typically run $140 – $220 per hour depending on crew size and season.',
  'Packing materials are quoted per project, not bundled with labor.',
  'Long-distance moves are priced by weight, distance, and access, not by the hour.',
  'A walkthrough is free. If the quote is off, we revise before you book — not after the truck is loaded.',
];
