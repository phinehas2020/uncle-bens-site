export const site = {
  name: 'Quality Moving & Storage',
  shortName: 'Quality Moving',
  tagline:
    'Careful, transparent moving for Austin and Central Texas homes and businesses.',
  description:
    'A Round Rock moving company helping Austin, Round Rock, and Central Texas customers with home moves, packing, storage, and local or long-distance support.',
  domain: 'https://qualitymoving.com',
  email: 'hello@qualitymoving.com',
  phone: {
    display: '(512) 300-9543',
    digits: '15123009543',
  },
  address: {
    street: '1101 North Industrial Boulevard',
    city: 'Round Rock',
    region: 'TX',
    postalCode: '78681',
    country: 'US',
  },
  geo: {
    latitude: 30.5083,
    longitude: -97.6789,
  },
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
  license: 'TXDMV #006027218C',
  tdmvPhone: '(888) 368-4689',
  socials: {
    googleReviews: 'https://www.google.com/search?q=quality+moving+austin+reviews',
  },
  yearFounded: 2006,
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
};

export const yearsInBusiness = new Date().getFullYear() - site.yearFounded;

export const navigation = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact / Quote' },
];

export const heroStats = [
  { value: `${yearsInBusiness}+`, label: 'Years serving Central Texas' },
  { value: '15,000+', label: 'Moves completed' },
  { value: '4.9/5', label: 'Average review rating' },
  { value: 'Mon–Sat', label: 'Service availability' },
];

export const services = [
  {
    id: 'local-moving',
    title: 'Local Moving',
    summary: 'Home moves across Austin, Round Rock, and nearby cities with careful crews.',
    details:
      'Doorway guards, floor protection, and precise furniture placement keep your home organized and protected.',
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
      'We coordinate with supervisors, label assets by department, and set practical start/stop checkpoints.',
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
      'We use quality materials, room labels, and inventory notes so unpacking is straightforward.',
    highlights: [
      'Full-home or partial packing',
      'Fragile kitchen, art, and electronics packing',
      'Clear room-by-room labeling',
      'Custom crating when needed',
    ],
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'long-distance',
    title: 'Long-Distance Moving',
    summary: 'Cross-state and interstate moves with one point of contact from start to delivery.',
    details:
      'You receive written timelines, proactive updates, and route-aware planning for stairs and loading access.',
    highlights: [
      'Single point of contact',
      'Scheduled communication checkpoints',
      'Interstate paperwork support',
      'Clear delivery windows',
    ],
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'storage',
    title: 'Storage Solutions',
    summary: 'Short-term and long-term storage when move-in dates shift or spaces are tight.',
    details:
      'Items are wrapped, logged, and monitored so retrieval is easy when your timeline changes.',
    highlights: [
      'Monitored climate-conscious facilities',
      'Item tracking and labeling',
      'Flexible retrieval dates',
      'Bridge storage for renovations',
    ],
    image:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80',
  },
];

export const featuredServices = services.filter((service) =>
  ['local-moving', 'packing', 'long-distance', 'storage'].includes(service.id),
);

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

export const milestones = [
  {
    year: String(site.yearFounded),
    event: 'Opened in Round Rock with a focus on reliable local moving and respectful service.',
  },
  { year: '2012', event: 'Expanded routes across Central Texas, including Austin and Cedar Park.' },
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
    event: `Now in year ${yearsInBusiness}, serving Austin and surrounding cities with packing, moving, and storage solutions.`,
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
    name: 'Maya G.',
    role: 'Family Relocation • Austin',
    quote:
      'Best move we have had. The crew was on time, careful with our furniture, and easy to work with all day.',
  },
  {
    name: 'Jordan R.',
    role: 'Studio Founder • Round Rock',
    quote:
      'They moved our office over the weekend and we were fully running Monday morning. Great planning and execution.',
  },
  {
    name: 'Elena T.',
    role: 'Homeowner • Cedar Park',
    quote:
      'We had antiques and a piano to move. Everything arrived safely and was placed exactly where we asked.',
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
