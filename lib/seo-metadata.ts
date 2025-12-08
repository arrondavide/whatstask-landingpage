import type { Metadata } from "next"

interface SEOMetadataParams {
  title: string
  description: string
  canonicalUrl: string
  ogImage?: string
  keywords?: string[]
  author?: string
  robotsIndex?: boolean
  twitterHandle?: string
}

/**
 * Generate metadata for pages with index, follow (default for main content)
 * Use this for main landing pages and tool pages that should be indexed
 */
export function generateMetadata(params: SEOMetadataParams): Metadata {
  const {
    title,
    description,
    canonicalUrl,
    ogImage = "/logo.png",
    keywords = [],
    author = "Whatstask Team",
    robotsIndex = true,
    twitterHandle = "@whatstask",
  } = params

  const fullTitle = title.includes("Whatstask") ? title : `${title} | Whatstask`

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: author }],
    creator: "Whatstask",
    metadataBase: new URL("https://www.whatstask.com"),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: "Whatstask",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: twitterHandle,
    },
    robots: {
      index: robotsIndex,
      follow: robotsIndex,
      googleBot: {
        index: robotsIndex,
        follow: robotsIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

/**
 * Generate metadata for subdomain pages with noindex, nofollow
 * Use this for tool subdomains (pdfmerger.whatstask.com, etc.)
 */
export function generateSubdomainMetadata(params: SEOMetadataParams): Metadata {
  const metadata = generateMetadata({
    ...params,
    robotsIndex: false,
  })

  return {
    ...metadata,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  }
}

/**
 * Generate structured data for SEO (JSON-LD)
 */
export function generateStructuredData(type: "SoftwareApplication" | "WebPage" | "Product", data: Record<string, any>) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }
}
