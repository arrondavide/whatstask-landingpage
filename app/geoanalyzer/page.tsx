import type { Metadata } from "next"
import GeoAnalyzerClient from "./geoanalyzer-client"

export const metadata: Metadata = {
  title: "GEO Analyzer - Free AI Search Optimization Tool | Generative Engine Optimization 2026",
  description:
    "Optimize your content for AI-powered search with GEO Analyzer. Free Generative Engine Optimization tool to rank in ChatGPT, Google SGE, Perplexity, and AI search engines. Analyze, optimize, and dominate AI search results.",
  keywords: [
    "GEO analyzer",
    "generative engine optimization",
    "AI search optimization",
    "optimize for ChatGPT",
    "Google SGE optimization",
    "Perplexity SEO",
    "AI search ranking",
    "LLM optimization",
    "content optimization for AI",
    "GEO SEO tool",
    "AI-powered search",
    "generative AI search",
    "optimize content for LLMs",
    "AI content analyzer",
    "free GEO tool",
    "whatstask GEO analyzer",
  ],
  authors: [{ name: "Whatstask" }],
  creator: "Whatstask",
  publisher: "Whatstask",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "GEO Analyzer - Free AI Search Optimization Tool | Whatstask",
    description:
      "Optimize your content for AI-powered search engines. Free Generative Engine Optimization tool to rank in ChatGPT, Google SGE, Perplexity, and more.",
    url: "https://www.whatstask.com/geoanalyzer",
    siteName: "Whatstask",
    images: [
      {
        url: "/og-geoanalyzer.png",
        width: 1200,
        height: 630,
        alt: "GEO Analyzer - Generative Engine Optimization Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO Analyzer - Free AI Search Optimization Tool",
    description:
      "Optimize your content for AI-powered search engines. Free GEO tool for ChatGPT, Google SGE, Perplexity optimization.",
    images: ["/og-geoanalyzer.png"],
  },
  alternates: {
    canonical: "https://www.whatstask.com/geoanalyzer",
  },
  category: "Technology",
}

export default function GeoAnalyzerPage() {
  return <GeoAnalyzerClient />
}
