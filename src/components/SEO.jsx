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
  keywords,
  type = 'website',
  image,
  imageAlt,
  article,
  noindex = false,
}) {
  const siteUrl = site.domain;
  const defaultImage = `${siteUrl}/og-image.png`;
  const fallbackDescription = site.description;
  const metaDescription = description || fallbackDescription;
  const fullTitle = title
    ? `${title} | ${site.name}`
    : `${site.name} | Trusted Central Texas Movers`;
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const ogImage = image ? `${siteUrl}${image}` : defaultImage;
  const ogImageAlt = imageAlt || `${site.shortName} moving services in Central Texas`;
  const ogImageWidth = 1200;
  const ogImageHeight = 630;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: site.name,
    image: [ogImage],
    '@id': `${siteUrl}/#business`,
    url: siteUrl,
    telephone: site.phone.display,
    email: site.email,
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

  const articleSchema = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: metaDescription,
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
      <title>{fullTitle}</title>
      <meta content={metaDescription} name="description" />
      {keywords ? <meta content={keywords} name="keywords" /> : null}
      <link href={fullCanonical} rel="canonical" />
      <meta content={site.name} name="author" />
      <meta content="#ffffff" name="theme-color" />

      {noindex && <meta content="noindex, nofollow" name="robots" />}

      <meta content={type} property="og:type" />
      <meta content={fullCanonical} property="og:url" />
      <meta content={fullTitle} property="og:title" />
      <meta content={metaDescription} property="og:description" />
      <meta content={ogImage} property="og:image" />
      <meta content={ogImageAlt} property="og:image:alt" />
      <meta content={String(ogImageWidth)} property="og:image:width" />
      <meta content={String(ogImageHeight)} property="og:image:height" />
      <meta content={site.name} property="og:site_name" />
      <meta content="en_US" property="og:locale" />

      <meta content="summary_large_image" name="twitter:card" />
      <meta content={fullCanonical} name="twitter:url" />
      <meta content={fullTitle} name="twitter:title" />
      <meta content={metaDescription} name="twitter:description" />
      <meta content={ogImage} name="twitter:image" />
      <meta content={ogImageAlt} name="twitter:image:alt" />

      {article && (
        <>
          <meta content={article.publishedTime} property="article:published_time" />
          {article.modifiedTime && (
            <meta content={article.modifiedTime} property="article:modified_time" />
          )}
        </>
      )}

      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      {articleSchema && (
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      )}
    </Helmet>
  );
}
