import { Helmet } from 'react-helmet-async';
import { site } from '../data/site';

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
  children,
}) {
  const siteUrl = site.domain;
  const titleSuffix = site.seoTitleSuffix;
  const withSiteOrigin = (value) => {
    if (!value) return value;
    if (/^https?:\/\//.test(value)) return value;
    return siteUrl ? `${siteUrl}${value}` : value;
  };

  const defaultImage = withSiteOrigin('/og-image.png');
  const fallbackDescription = site.description;
  const metaDescription = description || fallbackDescription;
  const fullTitle = title
    ? title.includes(titleSuffix)
      ? title
      : `${title} | ${site.shortName || site.name} — ${titleSuffix}`
    : `${site.name} — ${titleSuffix}`;
  const fullCanonical = canonical ? withSiteOrigin(canonical) : siteUrl || '/';
  const ogImage = image ? withSiteOrigin(image) : defaultImage;
  const ogImageAlt = imageAlt || `${site.shortName} — Austin and Central Texas movers`;

  const articleSchema = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: metaDescription,
        image: ogImage,
        datePublished: article.publishedTime,
        dateModified: article.modifiedTime || article.publishedTime,
        author: {
          '@type': 'Organization',
          name: site.name,
        },
        publisher: {
          '@type': 'Organization',
          name: site.name,
          logo: {
            '@type': 'ImageObject',
            url: withSiteOrigin('/logo.svg'),
          },
        },
      }
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta content={metaDescription} name="description" />
      {keywords ? <meta content={keywords} name="keywords" /> : null}
      <link href={fullCanonical} rel="canonical" />
      <meta content={site.name} name="author" />
      <meta content="#faf5ea" name="theme-color" />

      {noindex && <meta content="noindex, nofollow" name="robots" />}

      <meta content={type} property="og:type" />
      <meta content={fullCanonical} property="og:url" />
      <meta content={fullTitle} property="og:title" />
      <meta content={metaDescription} property="og:description" />
      <meta content={ogImage} property="og:image" />
      <meta content={ogImageAlt} property="og:image:alt" />
      <meta content="1200" property="og:image:width" />
      <meta content="630" property="og:image:height" />
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

      {articleSchema && (
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      )}

      {children}
    </Helmet>
  );
}

/**
 * LocalBusiness + MovingCompany structured data.
 * Render once on the home page for strongest local SEO signals.
 */
export function LocalBusinessSchema() {
  const phone = site.phone?.display;
  const address = site.address;
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    '@id': `${site.domain}/#organization`,
    name: site.name,
    description: site.description,
    url: site.domain,
    image: `${site.domain}/og-image.png`,
    logo: `${site.domain}/logo.svg`,
    priceRange: '$$',
    ...(phone ? { telephone: phone } : {}),
    ...(site.email ? { email: site.email } : {}),
    ...(address
      ? {
          address: {
            '@type': 'PostalAddress',
            streetAddress: address.street,
            addressLocality: address.city,
            addressRegion: address.region,
            postalCode: address.postalCode,
            addressCountry: address.country || 'US',
          },
        }
      : {}),
    areaServed: site.serviceAreas.map((a) => ({
      '@type': 'City',
      name: `${a}, TX`,
    })),
    openingHoursSpecification: site.hours.specification,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Moving and storage services',
      itemListElement: [
        'Local moving', 'Long-distance moving', 'Packing services', 'Storage solutions', 'Commercial relocation',
      ].map((name, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: { '@type': 'Service', name, provider: { '@type': 'MovingCompany', name: site.name } },
      })),
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export function BreadcrumbSchema({ items }) {
  if (!items?.length) return null;
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url?.startsWith('http') ? it.url : `${site.domain}${it.url}`,
    })),
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
