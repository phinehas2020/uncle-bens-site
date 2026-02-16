export const site = {
  name: 'Quality Moving & Storage',
  shortName: 'Quality Moving',
  tagline: 'Careful, transparent moving for Austin and Central Texas homes and businesses.',
  description:
    'A Round Rock moving company helping Austin, Round Rock, and Central Texas customers with home moves, office relocations, packing, storage, and specialty items.',
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
    display: [
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
  yearFounded: 2006,
  reviewSummary: 'Trusted by families and teams across Central Texas',
  socials: {
    googleReviews: 'https://www.google.com/search?q=quality+moving+austin+reviews',
  },
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
  { to: '/austin-top-movers', label: 'Austin Movers' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/quote', label: 'Get Quote' },
  { to: '/contact', label: 'Contact' },
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
    title: 'Home Moving',
    summary:
      'Local moves across Austin, Round Rock, and nearby cities with experienced crews and careful handling.',
    details:
      'We protect floors and doorways, blanket-wrap furniture, and place items where you want them in your new home.',
    highlights: [
      'Careful in-home protection',
      'Clear arrival windows',
      'Furniture disassembly and setup',
      'Apartment and house moves',
    ],
    image:
      'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'commercial-moving',
    title: 'Commercial Relocation',
    summary:
      'Office and retail moves planned to reduce downtime and keep your team productive.',
    details:
      'We coordinate with property managers, label assets by team, and schedule work around your operating hours.',
    highlights: [
      'After-hours scheduling available',
      'Department-by-department planning',
      'Workstation and IT coordination',
      'Labeled inventory process',
    ],
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'packing',
    title: 'Professional Packing',
    summary:
      'Full packing, partial packing, or fragile-only packing based on what you need help with.',
    details:
      'We use quality materials, room labels, and clear inventory notes so unpacking is easier on the other side.',
    highlights: [
      'Full-home or partial packing',
      'Fragile kitchen and artwork packing',
      'Room-by-room labels',
      'Custom crating when needed',
    ],
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'long-distance',
    title: 'Long-Distance Moves',
    summary:
      'Cross-state and interstate moves with one point of contact and a clear timeline.',
    details:
      'You get scheduled checkpoints, straightforward communication, and a team that prepares in advance for route and access logistics.',
    highlights: [
      'Single point of contact',
      'Scheduled communication updates',
      'Interstate paperwork support',
      'Planned delivery windows',
    ],
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'storage',
    title: 'Storage Solutions',
    summary:
      'Short-term and long-term storage options when move-in dates shift or space is tight.',
    details:
      'Items are wrapped, logged, and stored in monitored facilities, then returned on your schedule.',
    highlights: [
      'Monitored storage facilities',
      'Item tracking and labeling',
      'Flexible retrieval dates',
      'Bridge storage for renovations',
    ],
    image:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'specialty',
    title: 'Pianos & Specialty Items',
    summary:
      'Pianos, antiques, and oversized pieces moved by crews trained for high-risk handling.',
    details:
      'We plan pathways, protect touch points, and use the right equipment for heavy or delicate items.',
    highlights: [
      'Piano moving expertise',
      'Antique and art handling',
      'Stair and tight-access planning',
      'Careful final placement',
    ],
    image:
      'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1200&q=80',
  },
];

export const processSteps = [
  {
    title: '01 — Walkthrough & Estimate',
    text: 'We review your inventory, home access, timing, and any specialty items before we quote.',
  },
  {
    title: '02 — Schedule & Prep',
    text: 'You receive a written plan with arrival windows, crew details, and packing or storage options.',
  },
  {
    title: '03 — Move Day',
    text: 'Our team arrives prepared, protects your space, and loads and unloads with clear communication throughout.',
  },
  {
    title: '04 — Setup & Final Check',
    text: 'We place furniture where you want it, reassemble key items, and do a final walkthrough before we leave.',
  },
];

export const companyValues = [
  {
    title: 'Prepared Crews',
    text: 'Our teams come prepared with the right tools, materials, and plan for your specific move.',
  },
  {
    title: 'Clear Communication',
    text: 'You know who is coming, when they will arrive, and what happens next at every stage.',
  },
  {
    title: 'Careful Handling',
    text: 'We treat your home and belongings with respect, from first box to final furniture placement.',
  },
];

export const milestones = [
  {
    year: String(site.yearFounded),
    event: 'Opened in Round Rock with a focus on reliable local moving and respectful service.',
  },
  {
    year: '2012',
    event: 'Expanded service routes across Central Texas, including Austin and Cedar Park.',
  },
  {
    year: '2018',
    event: 'Built a dedicated commercial moving team for office and retail relocations.',
  },
  {
    year: '2023',
    event: 'Expanded storage operations with improved inventory tracking and retrieval scheduling.',
  },
  {
    year: String(new Date().getFullYear()),
    event: `Now in year ${yearsInBusiness}, continuing to serve families and businesses across Central Texas.`,
  },
];

export const testimonials = [
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

export const austinTopMovers = [
  {
    rank: 1,
    name: 'Einstein Moving Company',
    score: '9.62',
    bbb: 'A+',
    avgMoveDuration: '4 hours',
    note: 'Overall top recommended in Great Guys Moving Austin ranking.',
  },
  {
    rank: 2,
    name: 'Webster & Company Moving Services',
    score: '9.59',
    bbb: 'A+',
    avgMoveDuration: '3 hours',
    note: 'Second-place local Austin mover in the latest Great Guys list.',
  },
  {
    rank: 3,
    name: 'Word of Mouth Moving',
    score: '9.56',
    bbb: 'NR',
    avgMoveDuration: '2.75 hours',
    note: 'Ranked for speed and reliable reviews in recent comparison data.',
  },
  {
    rank: 4,
    name: 'MoverTron Moving',
    score: '9.48',
    bbb: 'NR',
    avgMoveDuration: 'N/A',
    note: 'Top 10 Austin mover in a data-based comparison list.',
  },
  {
    rank: 5,
    name: 'Movers League',
    score: '9.40',
    bbb: 'NR',
    avgMoveDuration: '3 hours',
    note: 'Strong value from Austin ranking snapshot data.',
  },
  {
    rank: 6,
    name: 'Valet Moving Services - Round Rock Movers',
    score: '9.37',
    bbb: 'NR',
    avgMoveDuration: 'N/A',
    note: 'Round Rock-based operator appearing in Austin top 10 comparison.',
  },
  {
    rank: 7,
    name: 'Muscleman Elite Moving & Storage',
    score: '9.36',
    bbb: 'A+',
    avgMoveDuration: '2 hours',
    note: 'Top movers dataset shows an A+ license-backed profile.',
  },
  {
    rank: 8,
    name: 'Limestone Moving Co.',
    score: '9.35',
    bbb: 'NR',
    avgMoveDuration: '2.5 hours',
    note: 'High-scoring Austin mover with quick execution profile.',
  },
];

export const austinTopMoverResearchSources = [
  {
    title: 'Great Guys Moving – Austin Movers Ranking',
    url: 'https://www.greatguysmove.com/movers/texas/austin/',
    snapshot: 'Updated Jun 24, 2025',
    note: 'Analyzed 143 Austin movers across 122,105 review data points with a 24,000+ mover benchmark.',
  },
  {
    title: 'Great Guys Moving Rating System',
    url: 'https://www.greatguysmove.com/ggm-rating-index/',
    snapshot: 'Methodology page',
    note: 'Uses an 11-point scoring model including quality, punctuality, pricing, communication, and care metrics.',
  },
  {
    title: 'Angi Austin Movers Review Market',
    url: 'https://www.angi.com/companylist/us/tx/austin/moving.htm',
    snapshot: 'Last update Feb 16, 2026',
    note: 'Shows the matched Austin movers ecosystem, including 4.5 average homeowner rating and 557 verified moving reviews.',
  },
];

export const austinMoverSelectionChecklist = [
  {
    title: 'Verify licensing and insurance',
    detail:
      'Ask for active TX moving registration and any federal credentials listed for long-distance lanes.',
  },
  {
    title: 'Demand line-by-line quotes',
    detail:
      'Get every fee in writing before you book: hourly pricing, packing extras, stairs access, and overtime triggers.',
  },
  {
    title: 'Check move-day responsiveness',
    detail:
      'Top movers score higher when they communicate quickly, confirm arrival windows, and stay transparent about changes.',
  },
  {
    title: 'Protect high-value items',
    detail:
      'Ask for specialty handling plans for pianos, artwork, antiques, and fragile boxes before the quote is confirmed.',
  },
  {
    title: 'Validate recent customer signals',
    detail:
      'Use multi-platform reviews and look for patterns in complaint handling, not just headline averages.',
  },
];

export const austinMoverFaqs = [
  {
    question: 'How is a top mover ranked in Austin?',
    answer:
      'Public mover comparison data can be based on different formulas. The current snapshots we track blend review volume, score consistency, rating quality, and operating behavior into a ranked list.',
  },
  {
    question: 'Should I prioritize the #1 rank above all else?',
    answer:
      'Not always. Use rank as a starting point, then filter by your move type, timing, and required add-ons like packing and storage.',
  },
  {
    question: 'How do I avoid hidden moving fees?',
    answer:
      'Ask for a full estimate document and walk through each add-on. If a fee is unclear, request the exact trigger that would add it.',
  },
  {
    question: 'Can a top-rated Austin mover still overcharge?',
    answer:
      'Yes, which is why verified pricing terms and response quality are just as important as a star score.',
  },
  {
    question: 'Why do ratings differ between sites?',
    answer:
      'Different sites weight review recency, verification, and complaint handling differently, so a single score can never tell the full story.',
  },
];

export const faqs = [
  {
    question: 'How far in advance should I book?',
    answer:
      'During busy seasons, 2–4 weeks is ideal. If your schedule is tight, call us and we will do our best to fit you in.',
  },
  {
    question: 'Are your quotes guaranteed?',
    answer:
      'Yes. After the walkthrough and scope review, we provide a guaranteed quote for the agreed services.',
  },
  {
    question: 'Can you move specialty items like pianos?',
    answer:
      'Yes. We regularly move pianos, antiques, artwork, and other large or delicate items.',
  },
  {
    question: 'Do you offer packing-only services?',
    answer:
      'Yes. We offer full packing, partial packing, and fragile-item packing depending on your needs.',
  },
];
