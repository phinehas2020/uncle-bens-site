export const site = {
  name: 'Quality Moving & Storage',
  shortName: 'Quality Moving',
  tagline: 'White-glove relocation for homes, teams, and heirlooms.',
  description:
    'A premium Central Texas moving company specializing in residential, commercial, packing, and secure storage services.',
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
  reviewSummary: 'Hundreds of five-star reviews',
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
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/quote', label: 'Get Quote' },
  { to: '/contact', label: 'Contact' },
];

export const heroStats = [
  { value: `${yearsInBusiness}+`, label: 'Years in Texas homes' },
  { value: '4.9/5', label: 'Average client rating' },
  { value: '15k+', label: 'Successful moves completed' },
  { value: '24/7', label: 'Storage security monitoring' },
];

export const services = [
  {
    id: 'local-moving',
    title: 'Luxury Local Moving',
    summary:
      'From downtown high-rises to family homes, we execute local moves with elite logistics and calm precision.',
    details:
      'Every move receives a dedicated move captain, floor protection, premium wrapping, and live schedule communication so your day runs exactly to plan.',
    highlights: [
      'Dedicated move captain',
      'Custom protection for floors and walls',
      'Real-time arrival windows',
      'Furniture assembly and placement',
    ],
    image:
      'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'commercial-moving',
    title: 'Commercial Relocation',
    summary:
      'Office transitions engineered to minimize downtime and protect business continuity.',
    details:
      'We coordinate with building management, phase departments by priority, and move critical workstations on your timeline—often overnight or on weekends.',
    highlights: [
      'After-hours and weekend execution',
      'Department-by-department phasing',
      'IT and workstation coordination',
      'Asset labeling and inventory control',
    ],
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'packing',
    title: 'Museum-Grade Packing',
    summary:
      'Specialized packing systems for fragile collections, heirlooms, art, and specialty furniture.',
    details:
      'Our teams use category-specific materials, room-level inventory tracking, and custom crating when needed to ensure every item travels safely.',
    highlights: [
      'Custom crating available',
      'Room-by-room inventory control',
      'Fragile and fine-art protocols',
      'Sustainable packing options',
    ],
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'long-distance',
    title: 'Long-Distance Moves',
    summary:
      'Interstate and cross-state moves with transparent milestones, dedicated trucks, and no confusion.',
    details:
      'We map your relocation in advance, assign a primary coordinator, and provide predictable windows so your family or team can plan with confidence.',
    highlights: [
      'Dedicated transport options',
      'Milestone-based communication',
      'Guaranteed scheduling windows',
      'Interstate-compliant documentation',
    ],
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'storage',
    title: 'Secure Storage Solutions',
    summary:
      'Short-term bridge storage and longer-term protection in monitored facilities.',
    details:
      'Our storage workflow includes barcode tracking, clean wrapped staging, and retrieval scheduling that aligns with your renovation or move-in timeline.',
    highlights: [
      'Climate-conscious storage options',
      'Barcode inventory tracking',
      '24/7 security monitoring',
      'Flexible retrieval scheduling',
    ],
    image:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'specialty',
    title: 'Specialty Item Transport',
    summary:
      'Pianos, antiques, oversized mirrors, and high-value pieces handled by trained specialty crews.',
    details:
      'When your items require advanced rigging or precision handling, our specialty team prepares route plans, protective systems, and exact placement strategies.',
    highlights: [
      'Piano and antique specialists',
      'Rigging and access planning',
      'White-glove in-home placement',
      'Enhanced insurance options',
    ],
    image:
      'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1200&q=80',
  },
];

export const processSteps = [
  {
    title: '01 — Precision Discovery',
    text: 'We assess access points, inventory, timing, and risk factors so the move plan is accurate before move day.',
  },
  {
    title: '02 — Personalized Move Blueprint',
    text: 'You receive a guaranteed quote, schedule map, and service sequence tailored to your exact situation.',
  },
  {
    title: '03 — Flawless Execution',
    text: 'Your crew arrives prepared, protects every surface, and moves with disciplined speed and detail.',
  },
  {
    title: '04 — Placement & Final Walkthrough',
    text: 'We stage your space, assemble priority items, and close with a quality walkthrough before sign-off.',
  },
];

export const companyValues = [
  {
    title: 'Craft Over Chaos',
    text: 'We treat every move like a craft discipline—planned, measured, and cleanly executed.',
  },
  {
    title: 'Calm Communication',
    text: 'You always know what happens next, who is leading your move, and when each phase begins.',
  },
  {
    title: 'Accountable Teams',
    text: 'Licensed, insured, and performance-managed crews that own the result from first call to final placement.',
  },
];

export const milestones = [
  {
    year: String(site.yearFounded),
    event: 'Founded in Round Rock with a mission to raise the bar for Texas moving standards.',
  },
  {
    year: '2012',
    event: 'Expanded service area to include broader Central Texas markets and specialty services.',
  },
  {
    year: '2018',
    event: 'Launched dedicated commercial relocation program for multi-team office transitions.',
  },
  {
    year: '2023',
    event: 'Introduced premium storage workflows with inventory tagging and retrieval scheduling.',
  },
  {
    year: String(new Date().getFullYear()),
    event: `Celebrating ${yearsInBusiness} years of trusted service for families and businesses.`,
  },
];

export const testimonials = [
  {
    name: 'Maya G.',
    role: 'Family Relocation • Austin',
    quote:
      'The smoothest move we have ever had. The team wrapped everything beautifully, communicated constantly, and delivered exactly on schedule.',
  },
  {
    name: 'Jordan R.',
    role: 'Studio Founder • Round Rock',
    quote:
      'We moved an entire office over one weekend with zero Monday downtime. Their planning quality is unreal.',
  },
  {
    name: 'Elena T.',
    role: 'Homeowner • Cedar Park',
    quote:
      'Their crew handled heirloom furniture and artwork with museum-level care. Premium service from start to finish.',
  },
];

export const faqs = [
  {
    question: 'How far in advance should I book?',
    answer:
      'For peak periods, we recommend booking 2–4 weeks in advance. We also support urgent schedules whenever capacity allows.',
  },
  {
    question: 'Are your quotes guaranteed?',
    answer:
      'Yes. After assessment, we provide a guaranteed quote based on the agreed scope, timing, and services selected.',
  },
  {
    question: 'Can you move specialty items like pianos?',
    answer:
      'Absolutely. We offer dedicated specialty crews for pianos, antiques, fine art, and oversized high-value pieces.',
  },
  {
    question: 'Do you offer packing-only services?',
    answer:
      'Yes. We can provide full-home packing, partial-room packing, or custom packing for fragile inventories only.',
  },
];
