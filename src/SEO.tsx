/* eslint-disable react/require-default-props */
import Head from "next/head";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  shouldExcludeTitleSuffix?: boolean;
  shouldIndexPage?: boolean;
}

export function SEO({
  title,
  description,
  image,
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true,
}: SEOProps) {
  const pageTitle = `${title} ${
    !shouldExcludeTitleSuffix ? ` |  ${process.env.NEXT_PUBLIC_SITE_NAME}` : ""
  }`;
  const pageImage = image
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/assets/images/${image}`
    : null;

  return (
    <Head>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      {image && <meta name="image" content={pageImage ?? undefined} />}
      {!shouldIndexPage && <meta name="robots" content="noindex, nofollow" />}
      <meta
        name="keywords"
        content="mecanismo de busca de empregos, buscar vagas de emprego, oportunidades de emprego, lista de emprego, trabalho, vagas de trabalho, oportunidades de trabalho, vagas, rss jobs feed xml, encontrar desenvolvedor, desenvolvedor frontend, desenvolvedor backend, devops, desenvolvedor mobile, desenvolvedor javascript, desenvolvedor java, desenvolvedor php, desenvolvedor fullstack"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#057A55" />
      <meta name="msapplication-TileColor" content="#057A55" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={pageImage ?? undefined} />
      <meta property="og:image:secure_url" content={pageImage ?? undefined} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="process.env.NEXT_PUBLIC_SITE_URL" />
      <meta name="twitter:image" content={pageImage ?? undefined} />
      <meta name="twitter:image:src" content={pageImage ?? undefined} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />
    </Head>
  );
}
