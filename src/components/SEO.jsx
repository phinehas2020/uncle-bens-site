import { Helmet } from 'react-helmet-async';

/**
 * SEO component for managing page meta tags
 * Following SEO skill guidelines for structured data and meta optimization
 */
export function SEO({
    title,
    description,
    canonical,
    type = 'website',
    image,
    article,
    noindex = false,
}) {
    const siteTitle = 'Quality Moving and Storage';
    const siteName = 'Quality Moving and Storage';
    const siteUrl = 'https://qualitymovingaustin.com'; // Replace with actual domain
    const defaultImage = `${siteUrl}/og-image.jpg`;
    const phone = '(512) 300-9543';

    const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Austin & Round Rock Movers Since 2006`;
    const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const ogImage = image ? `${siteUrl}${image}` : defaultImage;

    // Local Business structured data
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'MovingCompany',
        name: siteName,
        image: ogImage,
        '@id': siteUrl,
        url: siteUrl,
        telephone: phone,
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '1101 North Industrial Boulevard',
            addressLocality: 'Round Rock',
            addressRegion: 'TX',
            postalCode: '78681',
            addressCountry: 'US',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 30.5083,
            longitude: -97.6789,
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '09:00',
                closes: '17:00',
            },
        ],
        sameAs: [],
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '100',
        },
        areaServed: [
            { '@type': 'City', name: 'Austin' },
            { '@type': 'City', name: 'Round Rock' },
            { '@type': 'City', name: 'Cedar Park' },
            { '@type': 'City', name: 'Georgetown' },
            { '@type': 'City', name: 'Leander' },
            { '@type': 'City', name: 'Lakeway' },
            { '@type': 'City', name: 'Buda' },
            { '@type': 'City', name: 'Kyle' },
            { '@type': 'City', name: 'Manor' },
        ],
    };

    // Article schema for blog posts
    const articleSchema = article
        ? {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description: description,
            image: ogImage,
            author: {
                '@type': 'Organization',
                name: siteName,
            },
            publisher: {
                '@type': 'Organization',
                name: siteName,
                logo: {
                    '@type': 'ImageObject',
                    url: `${siteUrl}/logo.png`,
                },
            },
            datePublished: article.publishedTime,
            dateModified: article.modifiedTime || article.publishedTime,
        }
        : null;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="canonical" href={fullCanonical} />

            {/* Robots */}
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullCanonical} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Article specific */}
            {article && (
                <>
                    <meta property="article:published_time" content={article.publishedTime} />
                    {article.modifiedTime && (
                        <meta property="article:modified_time" content={article.modifiedTime} />
                    )}
                </>
            )}

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </script>
            {articleSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(articleSchema)}
                </script>
            )}
        </Helmet>
    );
}
