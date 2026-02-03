import { Helmet } from 'react-helmet-async';
import { site } from '../data/site';

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
    imageAlt,
    article,
    noindex = false,
}) {
    const siteUrl = site.domain;
    const defaultImage = `${siteUrl}/og-image.png`;
    const fullTitle = title
        ? `${title} | ${site.name}`
        : `${site.name} | Austin & Round Rock Movers Since ${site.yearFounded}`;
    const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const ogImage = image ? `${siteUrl}${image}` : defaultImage;
    const ogImageAlt = imageAlt || `${site.shortName} moving services in Austin and Round Rock, TX`;
    const ogImageWidth = 1200;
    const ogImageHeight = 630;

    // Local Business structured data
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'MovingCompany',
        name: site.name,
        image: [ogImage],
        '@id': `${siteUrl}/#business`,
        url: siteUrl,
        telephone: site.phone.display,
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            streetAddress: site.address.street,
            addressLocality: site.address.city,
            addressRegion: site.address.region,
            postalCode: site.address.postalCode,
            addressCountry: site.address.country,
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: site.geo.latitude,
            longitude: site.geo.longitude,
        },
        openingHoursSpecification: site.hours.specification,
        foundingDate: String(site.yearFounded),
        areaServed: site.serviceAreas.map((city) => ({ '@type': 'City', name: city })),
    };

    const sameAsLinks = Object.values(site.socials || {}).filter(Boolean);
    if (sameAsLinks.length) {
        localBusinessSchema.sameAs = sameAsLinks;
    }

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
                name: site.name,
            },
            publisher: {
                '@type': 'Organization',
                name: site.name,
                logo: {
                    '@type': 'ImageObject',
                    url: `${siteUrl}/logo.svg`,
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
            <link rel="canonical" href={fullCanonical} />
            <meta name="author" content={site.name} />
            <meta name="theme-color" content="#1E3A5F" />

            {/* Robots */}
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:alt" content={ogImageAlt} />
            <meta property="og:image:width" content={String(ogImageWidth)} />
            <meta property="og:image:height" content={String(ogImageHeight)} />
            <meta property="og:site_name" content={site.name} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullCanonical} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:image:alt" content={ogImageAlt} />

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
