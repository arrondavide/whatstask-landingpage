import ToolPageTemplate from "@/components/tool-page-template"
import { generateMetadata } from "@/lib/seo-metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
  title: "Free Online PDF Merger - Combine PDFs Securely | Whatstask 2025",
  description:
    "Merge multiple PDF files into one document for free. No signup, browser-based, secure. Combine unlimited PDFs with our free online PDF merger tool.",
  canonicalUrl: "https://www.whatstask.com/pdf-merger",
  ogImage: "/logo-black.png",
  keywords: [
    "pdf merger",
    "combine pdfs",
    "merge pdf files",
    "free pdf merger",
    "online pdf merger",
    "pdf merger 2025",
    "combine pdf online",
    "merge pdf free",
  ],
})

export default function PDFMergerPage() {
  return (
    <ToolPageTemplate
      toolName="PDF Merger"
      toolSlug="pdf-merger"
      shortDescription="Combine multiple PDF files into a single document in seconds. Our free PDF merger works directly in your browser—no software to install, no account required. Your files stay private and are automatically deleted after processing."
      fullDescription="Combine multiple PDF files into a single document in seconds. Our free PDF merger works directly in your browser—no software to install, no account required. Your files stay private and are automatically deleted after processing."
      features={[
        "100% free, no hidden costs",
        "No signup or email required",
        "Files processed in browser, never stored",
        "Works on any device",
      ]}
      steps={[
        {
          number: 1,
          title: "Upload",
          description: "Select or drag multiple PDF files",
        },
        {
          number: 2,
          title: "Arrange",
          description: "Reorder pages if needed",
        },
        {
          number: 3,
          title: "Merge & Download",
          description: "Get your combined PDF instantly",
        },
      ]}
      faqs={[
        {
          question: "How many PDFs can I merge?",
          answer: "You can merge up to 20 PDF files at once.",
        },
        {
          question: "Is there a file size limit?",
          answer: "Each file can be up to 50MB.",
        },
        {
          question: "Is my data secure?",
          answer: "Yes. Files are processed locally and never uploaded to our servers.",
        },
      ]}
      relatedTools={[
        {
          name: "PDF Compressor",
          slug: "pdf-compressor",
          description: "Reduce PDF file size without losing quality.",
        },
        {
          name: "PDF Splitter",
          slug: "pdf-splitter",
          description: "Extract specific pages from your PDF documents.",
        },
        {
          name: "JPG to PDF",
          slug: "jpg-to-pdf",
          description: "Turn images into PDF documents.",
        },
      ]}
      iframeSource="https://pdfmerger.whatstask.com"
    />
  )
}
