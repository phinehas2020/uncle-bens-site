export const site = {
    name: 'Quality Moving and Storage',
    shortName: 'Quality Moving',
    description:
        'Trusted moving professionals serving Austin, Round Rock, and Central Texas with residential, commercial, packing, and storage services.',
    domain: 'https://qualitymoving.com',
    phone: {
        display: '(512) 300-9543',
        digits: '5123009543',
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
        summary: 'Mon–Sat, 9am–5pm',
        display: [
            'Monday - Friday: 9am - 5pm',
            'Saturday: 9am - 5pm',
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
    serviceAreas: [
        'Austin',
        'Round Rock',
        'Cedar Park',
        'Georgetown',
        'Leander',
        'Lakeway',
        'Buda',
        'Kyle',
        'Manor',
        'Pflugerville',
        'Burnet',
        'Jarrell',
        'Marble Falls',
    ],
    reviewSummary: 'Hundreds of five-star reviews',
    yearFounded: 2006,
    socials: {
        googleReviews: 'https://www.google.com/search?q=quality+moving+austin+reviews',
    },
};

export const yearsInBusiness = new Date().getFullYear() - site.yearFounded;
