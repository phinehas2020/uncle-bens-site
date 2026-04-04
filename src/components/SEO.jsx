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
}) {
  const siteUrl = site.domain;
  const shouldPublishOrganizationIdentity = site.hasApprovedBusinessName;
  const titleSuffix = site.seoTitleSuffix;
  const withSiteOrigin = (value) => {
    if (!value) {
      return value;
    }

    if (/^https?:\/\//.test(value)) {
      return value;
    }

    return siteUrl ? `${siteUrl}${value}` : value;
  };

  const defaultImage = withSiteOrigin('/og-image.png');
  const fallbackDescription = site.description;
  const metaDescription = description || fallbackDescription;
  const fullTitle = title
    ? (title.includes(titleSuffix) ? title : `${title} | ${titleSuffix}`)
    : titleSuffix;
  const fullCanonical = canonical ? withSiteOrigin(canonical) : siteUrl || '/';
  const ogImage = image ? withSiteOrigin(image) : defaultImage;
  const ogImageAlt = imageAlt || `${site.shortName} helping with moves across Central Texas`;
  const ogImageWidth = 1200;
  const ogImageHeight = 630;

  const articleSchema = article
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: metaDescription,
        image: ogImage,
        datePublished: article.publishedTime,
        dateModified: article.modifiedTime || article.publishedTime,
        ...(shouldPublishOrganizationIdentity
          ? {
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
          : {}),
      }
    : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta content={metaDescription} name="description" />
      {keywords ? <meta content={keywords} name="keywords" /> : null}
      <link href={fullCanonical} rel="canonical" />
      {shouldPublishOrganizationIdentity ? <meta content={site.name} name="author" /> : null}
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
      {shouldPublishOrganizationIdentity ? <meta content={site.name} property="og:site_name" /> : null}
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
    </Helmet>
  );
}
