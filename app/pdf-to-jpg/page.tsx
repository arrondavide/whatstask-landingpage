import ToolPageTemplate from "@/components/tool-page-template"
import { generateMetadata } from "@/lib/seo-metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
  title: "Free PDF to JPG Converter Online - High Quality Images | Whatstask 2025",
  description:
    "Convert PDF pages to high-quality JPG images instantly. Free PDF to JPG converter with batch processing. No signup required. Browser-based tool for 2025.",
  canonicalUrl: "https://www.whatstask.com/pdf-to-jpg",
  ogImage: "/logo-black.png",
  keywords: [
    "pdf to jpg",
    "convert pdf to jpg",
    "pdf to image",
    "free pdf converter",
    "pdf to jpg 2025",
    "pdf to jpeg converter",
    "convert pdf to image online",
  ],
})

export default function PDFToJpgPage() {
  return (
    <ToolPageTemplate
      toolName="PDF to JPG Converter"
      toolSlug="pdf-to-jpg"
      shortDescription="Convert PDF pages into high-quality JPG images instantly. Download individual pages or all pages as a ZIP file."
      fullDescription="PDF to JPG Converter is a free online tool that transforms your PDF documents into crisp, high-quality JPG images. Perfect for sharing individual pages, creating image galleries, or converting documents for social media. Upload your PDF, select which pages to convert, and download them as individual JPGs or a convenient ZIP file. No signup needed, no watermarks – just instant, secure conversion right in your browser."
      features={["Convert individual pages or entire PDFs", "High-quality JPG output", "Batch download as ZIP file"]}
      steps={[
        {
          number: 1,
          title: "Upload Your PDF",
          description: "Select or drag your PDF file into the converter.",
        },
        {
          number: 2,
          title: "Choose Pages",
          description: "Select which pages you want to convert to JPG images.",
        },
        {
          number: 3,
          title: "Download Images",
          description: "Get your JPG files individually or as a ZIP archive.",
        },
      ]}
      faqs={[
        {
          question: "Is this converter really free?",
          answer:
            "Yes, absolutely free with no hidden fees. Convert unlimited PDFs without any cost or account needed.",
        },
        {
          question: "What quality will my JPG images have?",
          answer:
            "We convert to high-quality JPG format. You can expect clear, readable images suitable for printing or sharing online.",
        },
        {
          question: "Can I convert just specific pages?",
          answer: "Yes! You can select exactly which pages from your PDF you want to convert to JPG images.",
        },
        {
          question: "How are my files handled?",
          answer:
            "Your PDFs are processed entirely in your browser and never stored on our servers. Complete privacy guaranteed.",
        },
      ]}
      relatedTools={[
        {
          name: "JPG to PDF",
          slug: "jpg-to-pdf",
          description: "Convert images back into PDF documents.",
        },
        {
          name: "PDF Merger",
          slug: "pdf-merger",
          description: "Combine multiple PDFs together.",
        },
        {
          name: "PDF Compressor",
          slug: "pdf-compressor",
          description: "Reduce PDF file size.",
        },
      ]}
      iframeSource="https://pdftojpg.whatstask.com"
    />
  )
}
