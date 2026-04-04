function getPublicEnv(key) {
  const value = import.meta.env[key];
  return typeof value === 'string' ? value.trim() : '';
}

const approvedBusinessName = getPublicEnv('VITE_PUBLIC_BUSINESS_NAME');
const approvedBusinessShortName = getPublicEnv('VITE_PUBLIC_BUSINESS_SHORT_NAME');
const hasApprovedBusinessName = Boolean(approvedBusinessName);
const fallbackDisplayName = 'Austin-area movers';
const fallbackSeoTitleSuffix = 'Austin and Central Texas movers';
const fallbackCopyrightLabel = 'Austin-area moving website';

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

const approvedSiteOrigin = getPublicEnv('VITE_PUBLIC_SITE_ORIGIN').replace(/\/+$/, '');
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
  hasApprovedBusinessName,
  seoTitleSuffix: approvedBusinessName || fallbackSeoTitleSuffix,
  copyrightLabel: approvedBusinessName || fallbackCopyrightLabel,
  tagline:
    'Austin-area moving, packing, storage, and long-distance planning across Central Texas homes and businesses.',
  description:
    'Austin-area moving support for local moves, commercial relocations, packing, storage, and long-distance planning across Central Texas.',
  domain: approvedSiteOrigin,
  email: getPublicEnv('VITE_PUBLIC_EMAIL'),
  phone: approvedPhone,
  address: approvedAddress,
  geo: null,
  hours: {
    summary: 'Mon–Sat • 9:00 AM – 5:00 PM',
    summaryList: [
      'Monday–Friday: 9:00 AM – 5:00 PM',
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
  license: getPublicEnv('VITE_PUBLIC_LICENSE'),
  complianceNote: 'Written estimates confirm scope, schedule, and service fit before booking.',
  officeLabel: approvedAddress ? `${approvedAddress.city} office` : 'Central Texas office',
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
  neighborhoods: ['Round Rock', 'Cedar Park', 'Pflugerville', 'Lakeway'],
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
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export const heroStats = [
  { value: 'Austin + Central Texas', label: 'Coverage' },
  { value: 'Written estimates', label: 'Quote process' },
  { value: 'Homes and businesses', label: 'Move types' },
  { value: 'Mon–Sat', label: 'Office schedule' },
];

export const services = [
  {
    id: 'local-moving',
    title: 'Local Moving',
    summary: 'Home and apartment moves across Austin, Round Rock, and nearby cities.',
    details:
      'Doorway guards, floor protection, and careful furniture placement keep the house in good shape.',
    highlights: [
      'Clear arrival windows',
      'In-home protection for flooring and doorways',
      'Furniture disassembly and reassembly',
      'Apartment and house move support',
    ],
    image:
      'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'commercial-moving',
    title: 'Commercial Relocation',
    summary:
      'Office and retail moves built around your business operations and work-hour constraints.',
    details:
      'We coordinate with supervisors, label assets by department, and keep the sequence clear.',
    highlights: [
      'Department-by-department planning',
      'IT and workstation coordination',
      'After-hours scheduling options',
      'Labeled inventory process',
    ],
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'packing',
    title: 'Packing Services',
    summary: 'Full packing, partial packing, or fragile-only packing tailored to your move.',
    details:
      'We use sturdy materials and room labels so unpacking is less chaotic.',
    highlights: [
      'Full-home or partial packing',
      'Fragile kitchen, art, and electronics packing',
      'Clear room-by-room labeling',
      'Custom crating when needed',
    ],
    image: '/packing-service.png',
  },
  {
    id: 'long-distance',
    title: 'Long-Distance Moving',
    summary: 'Cross-state and interstate moves with one point of contact from start to delivery.',
    details:
      'You get a written timeline, regular updates, and planning around access at both ends.',
    highlights: [
      'Single point of contact',
      'Scheduled communication checkpoints',
      'Interstate paperwork support',
      'Clear delivery windows',
    ],
    image: '/austin-tx-long-distance-moving-truck.jpg',
    imageAlt: 'Long-distance moving truck on a highway for Austin-area interstate moves.',
  },
  {
    id: 'storage',
    title: 'Storage Solutions',
    summary: 'Short-term and long-term storage when move-in dates shift or spaces are tight.',
    details:
      'Items are wrapped, logged, and easy to retrieve when your timeline changes.',
    highlights: [
      'Monitored climate-conscious facilities',
      'Item tracking and labeling',
      'Flexible retrieval dates',
      'Bridge storage for renovations',
    ],
    image: '/austin-tx-moving-storage-warehouse.jpg',
    imageAlt: 'Warehouse storage space with palletized inventory for Austin-area moving and storage.',
  },
];

export const featuredServices = services.filter((service) =>
  ['local-moving', 'packing', 'long-distance', 'storage'].includes(service.id),
);

export const serviceDetails = [
  {
    id: 'local-moving',
    title: 'Local Moving in Austin',
    intro:
      'Local moves for homes and apartments across Austin, Round Rock, Cedar Park, Pflugerville, and Lakeway.',
    details: [
      'In the Austin metro, local move logistics are heavily influenced by timing and access. We do not use one-size-fits-all plans for every job. The first part of our process is an in-person or virtual walkthrough where we measure stair access, verify parking options, and confirm elevator availability before we ever move a box.',
      'When you work with our local moving team, you get transparent sequencing from first call to final placement. We lock your move date, assign your crew early, and confirm exact arrival windows again 24 hours before show time so your home and schedule stay protected. That is how we keep neighbors and neighborhoods from being disrupted by avoidable confusion.',
      'Our crews are trained for homes, condos, and office moves. We use corner protection, protective wraps, dollies, and padded load plans for every fragile item, then complete a room-by-room walkthrough at drop-off to verify every piece is in the right place. For Austin neighborhoods with narrow driveways or shared entrances, we prepare alternate paths before unloading starts.',
      'Local moves are not just about getting things from point A to point B. We protect doorframes, cover floors, reduce noise where possible, and communicate with your building managers when access rules are strict. The team updates progress through clear text checkpoints so everyone in your household knows what has moved and what is waiting for your review.',
      'If your move includes premium pieces, antiques, or heavy electronics, we assign handling crews with dedicated loading and placement roles. That extra structure keeps your items secure and gives families peace of mind in the busiest week of their move.',
      'The final phase is practical: a closeout inspection against the original plan, photos where needed, and a direct review of any storage hold or retrieval requirements. That keeps your schedule predictable and prevents unresolved questions after the truck is loaded out.',
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
          'Yes. We plan for elevator timing, hallway clearance, and parking placement before moving day so your move stays coordinated with the building’s rules.',
      },
    ],
    related: ['packing', 'storage'],
  },
  {
    id: 'packing',
    title: 'Packing Services for Austin Homes',
    intro:
      'Full packing, partial packing, or fragile-only help for Austin-area homes.',
    details: [
      'Packing quality is usually the single biggest predictor of move-day speed. Our team starts with a move map: which rooms are packed first, what must be packed only by hand, and which items can be staged separately for easy transport.',
      'Our packing services include high-density boxes, wardrobe and dish packing strategies, protective bubble wraps, corner guards, and crate options for legacy furniture. In neighborhoods like Cedar Park and Pflugerville, we see seasonal timing, weekend constraints, and family schedules vary widely, so we tailor the workflow around your calendar instead of forcing one standard method.',
      'For clients with mixed load plans, we pair full-service packing on priority items with assisted self-packing for low-risk goods. This keeps costs practical while ensuring every fragile or high-value shipment receives the right level of labor. We label every box clearly by room and handling sensitivity so unpacking is organized, not chaotic.',
      'A common Austin challenge is uncertain timing in the final 48 hours. Weather, school commitments, and last-minute access changes can add stress. Our team handles that by sequencing fragile items, appliances, and heavy boxes with clear checkpoints, then sharing a quick room status report before loading begins.',
      'Our packing advisors also help with moving-day planning, including what to keep in your car, what to keep separate for immediate access, and how to protect sensitive electronics so they arrive ready for use and not exposed to avoidable vibration.',
      'When your move spans multiple trips or is tied to job transitions, we can stage packing by priority zone. Essential rooms are packed first, and non-urgent goods can stay protected while timelines are finalized.',
    ],
    faqs: [
      {
        question: 'Do you offer packing-only services without transport?',
        answer:
          'Yes. We can provide full packing, partial packing, or fragile-only packing plans when transport is being handled separately or in a different phase.',
      },
      {
        question: 'Can we keep some items packed and not move them on day one?',
        answer:
          'Absolutely. We frequently coordinate staged packing where essentials are packed first and season-sensitive items are boxed and stored for later stages.',
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
      'Your move starts with a detailed scope review. We document stair access, equipment constraints, special handling requirements, and whether your move includes sensitive systems like instruments, antique furniture, or home office electronics. For cross-border or multi-state routes, we also flag permit and parking variables early so you are not waiting at the truck for missing documents.',
      'Because mileage matters, we provide practical sequencing for loading, unloading, and transport staging. This means we prioritize weight balance, protective cushioning, and room-specific retrieval order when your destination inventory gets set up. We keep the same chain of command from pickup to unload so your family has one clear coordinator, not a rotating phone tree.',
      'In and around Pflugerville, Round Rock, and Austin, many clients also want temporary storage on hold in case destination keys are delayed or renovations extend. We can combine long-distance moves with short-term storage so you are not forced to choose between schedule and safety.',
      'On arrival, we confirm drop-off condition and completion notes against your pre-move photo set. That gives both sides a clean record of how freight was handled and helps resolve any concerns quickly, especially on high-value shipments.',
      'Arrival support includes short reroutes when destination access is delayed. We coordinate final steps with destination contacts so your move can continue safely even if delivery timing changes.',
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
          'Yes. We include destination arrival coordination steps so your receiver-side timeline is clear before unloading starts.',
      },
    ],
    related: ['local-moving', 'storage'],
  },
  {
    id: 'storage',
    title: 'Storage Solutions in Austin Area',
    intro:
      'Short-term and long-term storage for delayed closings, renovations, and move-in gaps.',
    details: [
      'Storage should support your move, not replace planning. Our storage solutions are built for practical use cases like delayed home access, renovation delays, and estate cleanout transitions. We keep your move active while your living space waits.',
      'Each unit run is logged with item-level notes and retrieval tags so you can request staged pickups without relearning where every box was packed. Families using our storage from Austin or Lakeway often appreciate the clarity: they can move in phases while construction or rental timing is finalized.',
      'We combine storage with pickup windows designed around your calendar. If your new home is behind by a week, we hold your boxes and furniture safely and then coordinate staggered releases so your unpacking aligns with your new layout.',
      'Security and access are central in our process. We use monitored access controls, layered check-in, and regular condition checks for large boxed items and furniture where practical. For fragile or high-value items, we recommend protective crates or custom packaging before storage handoff.',
      'In fast-moving household transitions, storage is most effective when paired with packing planning. We help you prioritize seasonal and sensitive categories for early retrieval while keeping bulky items safe and accessible.',
      'For renovations or delayed home access, we combine storage with delivery planning so furniture can move between zones without extra handling cycles and protect sensitive assets during temporary holds.',
    ],
    faqs: [
      {
        question: 'Can storage be used for just one or two weeks?',
        answer:
          'Yes. We offer short-duration holds when move dates move and you need a controlled holding period.',
      },
      {
        question: 'Are there pickup limits on stored goods?',
        answer:
          'No fixed minimum exists for retrieval windows, and we can schedule staged pickup plans that align with your move-in progress.',
      },
    ],
    related: ['packing', 'local-moving'],
  },
];

export const trustSignals = [
  {
    label: 'Written estimates after a walkthrough',
    detail: 'We use the walkthrough to scope access, timing, and the services tied to your move.',
    icon: 'shield-check',
  },
  {
    label: 'Austin-area coverage with one point of contact',
    detail: 'Local routes, packing, storage, and longer hauls are planned together instead of as separate jobs.',
    icon: 'user-check',
  },
  {
    label: 'Clear contact and quote paths',
    detail: 'Every public page keeps the next step visible whether you want to talk through the move or send details in writing.',
    icon: 'cube',
  },
  {
    label: 'Operational facts only',
    detail: 'The site avoids unsupported review counts, badges, and claims until final proof is approved.',
    icon: 'star',
  },
];

export const companyValues = [
  {
    title: 'Prepared Crews',
    text: 'Teams arrive with the right tools, materials, and pre-move walkthrough notes.',
  },
  {
    title: 'Clear Communication',
    text: 'You know who is coming, when they arrive, and what happens next at every stage.',
  },
  {
    title: 'Careful Handling',
    text: 'Homes, offices, and specialty items are treated as if they were your own.',
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
        year: '2012',
        event: 'Expanded routes across Central Texas, including Austin and Cedar Park.',
      },
      {
        year: String(new Date().getFullYear()),
        event: `Now in year ${yearsInBusiness}, serving Austin and surrounding cities with packing, moving, and storage solutions.`,
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
    question: 'How far in advance should I book?',
    answer:
      'During busy seasons, 2–4 weeks is ideal. For urgent windows, call us and we do our best to fit your move in.',
  },
  {
    question: 'Are your quotes guaranteed?',
    answer:
      'Yes. After walkthrough review, we provide a written quote tied to the approved scope and timing.',
  },
  {
    question: 'Can you move specialty items like pianos?',
    answer: 'Yes. We move pianos, antiques, artwork, and larger legacy furniture with a dedicated handling plan.',
  },
  {
    question: 'Do you offer packing-only services?',
    answer: 'Yes. We offer full packing, partial packing, and fragile-item packing options.',
  },
];

export const movingTips = [
  {
    title: 'Lock scope before move day',
    text: 'List stair access, parking limits, heavy doors, fragile items, and access constraints before our walkthrough.',
  },
  {
    title: 'Demand clear line-item pricing',
    text: 'A good quote includes access fees, labor assumptions, and every optional add-on before you approve.',
  },
  {
    title: 'Confirm licensing and insurance',
    text: 'Ask for active Texas registration and insurance coverage terms before you sign.',
  },
  {
    title: 'Protecting value items',
    text: 'Take photos and confirm final placement plans for artwork, antiques, and pianos before loading.',
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
