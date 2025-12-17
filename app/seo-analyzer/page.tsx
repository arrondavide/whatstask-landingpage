import ToolPageTemplate from "@/components/tool-page-template"
import { generateMetadata } from "@/lib/seo-metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
  title: "Free SEO Analyzer Tool - Optimize Content for AI Search | Whatstask 2025",
  description:
    "Analyze and optimize your content for AI-powered search and LLMs. Free SEO and GEO analyzer for Generative Engine Optimization. Future-proof your content for 2025.",
  canonicalUrl: "https://www.whatstask.com/seo-analyzer",
  ogImage: "/logo.png",
  keywords: [
    "seo analyzer",
    "geo analyzer",
    "generative engine optimization",
    "seo for ai",
    "llm optimization",
    "ai search optimization",
    "content optimization 2025",
  ],
})

export default function SeoAnalyzerPage() {
  return (
    <ToolPageTemplate
      toolName="GEO Analyzer"
      toolSlug="seo-analyzer"
      shortDescription="Optimize your content for AI-powered search experiences like Google SGE. Analyze and structure your content for large language models."
      fullDescription="GEO Analyzer is a free online tool that helps you optimize your content for Generative Engine Optimization (GEO) and AI-powered search experiences. As search engines increasingly use AI and large language models, content structure and clarity have become crucial. Our analyzer examines your content for AI readability, structured data, and optimization opportunities. Perfect for content creators, SEO professionals, and website owners looking to future-proof their digital presence."
      features={[
        "Analyze content for AI-powered search readability",
        "Check structured data and semantic markup",
        "Get actionable optimization recommendations",
      ]}
      steps={[
        {
          number: 1,
          title: "Enter Your Content",
          description: "Paste your article, webpage content, or text into the analyzer.",
        },
        {
          number: 2,
          title: "Analyze",
          description: "Our GEO analyzer examines your content for AI optimization.",
        },
        {
          number: 3,
          title: "Get Recommendations",
          description: "Receive actionable insights to improve your content for AI systems.",
        },
      ]}
      faqs={[
        {
          question: "What is Generative Engine Optimization (GEO)?",
          answer:
            "GEO is the practice of optimizing content specifically for AI systems and large language models. It focuses on clarity, structure, and context to ensure content is properly understood by AI.",
        },
        {
          question: "Why is GEO important?",
          answer:
            "As AI-powered search experiences like Google SGE become more prevalent, optimizing for AI readability ensures your content is discovered and ranked by these new systems.",
        },
        {
          question: "Is this analyzer free?",
          answer: "Yes, completely free! Analyze unlimited content without any signup, costs, or subscriptions.",
        },
        {
          question: "What should I do with the recommendations?",
          answer:
            "Use the recommendations to improve your content structure, add relevant data, and enhance clarity for both humans and AI systems.",
        },
      ]}
      relatedTools={[
        {
          name: "PDF Merger",
          slug: "pdf-merger",
          description: "Combine multiple PDF files.",
        },
        {
          name: "QR Code Generator",
          slug: "qr-code-generator",
          description: "Create custom QR codes.",
        },
        {
          name: "PDF to JPG",
          slug: "pdf-to-jpg",
          description: "Convert PDF pages to images.",
        },
      ]}
      iframeSource="https://geoanalyzer.whatstask.com"
    />
  )
}
