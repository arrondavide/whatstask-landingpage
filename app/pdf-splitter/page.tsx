import ToolPageTemplate from "@/components/tool-page-template"
import { generateMetadata } from "@/lib/seo-metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
  title: "Free PDF Splitter Online - Extract Pages Easily | Whatstask 2025",
  description:
    "Split PDF files and extract specific pages instantly. Free PDF splitter with no signup or watermarks. Fast, secure, and easy to use in 2025.",
  canonicalUrl: "https://www.whatstask.com/pdf-splitter",
  ogImage: "/logo-black.png",
  keywords: [
    "pdf splitter",
    "split pdf",
    "extract pages",
    "free pdf splitter",
    "pdf splitter 2025",
    "split pdf online",
    "extract pdf pages",
  ],
})

export default function PDFSplitterPage() {
  return (
    <ToolPageTemplate
      toolName="PDF Splitter"
      toolSlug="pdf-splitter"
      shortDescription="Extract specific pages from your PDF documents and save them as separate files. Perfect for managing large PDFs."
      fullDescription="PDF Splitter is a free online tool that allows you to split large PDF files and extract the pages you need. Whether you're managing lengthy documents, removing unnecessary pages, or organizing specific sections, our splitter is incredibly efficient. Upload your PDF, select the pages you want to extract, and download them as new PDF files instantly. No signup needed, no watermarks, and completely secure – your files are processed entirely in your browser."
      features={[
        "Extract specific pages from any PDF",
        "Create multiple PDF files from one document",
        "Fast and secure browser-based processing",
      ]}
      steps={[
        {
          number: 1,
          title: "Upload Your PDF",
          description: "Select or drag your PDF file into the splitter.",
        },
        {
          number: 2,
          title: "Select Pages",
          description: "Choose which pages you want to extract and split.",
        },
        {
          number: 3,
          title: "Download Split PDFs",
          description: "Get your extracted pages as separate PDF files.",
        },
      ]}
      faqs={[
        {
          question: "Is PDF Splitter free to use?",
          answer: "Yes, 100% free! Split unlimited PDFs without any cost, signup, or subscription.",
        },
        {
          question: "Can I extract a single page from my PDF?",
          answer: "You can extract just one page or multiple specific pages from your document.",
        },
        {
          question: "Does splitting affect PDF quality?",
          answer: "No, your PDF quality remains exactly the same. We simply extract the pages you select.",
        },
        {
          question: "Are my files safe and private?",
          answer:
            "Your files are processed entirely in your browser and never uploaded to our servers. Complete privacy guaranteed.",
        },
      ]}
      relatedTools={[
        {
          name: "PDF Merger",
          slug: "pdf-merger",
          description: "Combine multiple PDF files into one.",
        },
        {
          name: "PDF Compressor",
          slug: "pdf-compressor",
          description: "Reduce PDF file size.",
        },
        {
          name: "PDF to JPG",
          slug: "pdf-to-jpg",
          description: "Convert PDF pages to images.",
        },
      ]}
      iframeSource="https://pdfsplitter.whatstask.com"
    />
  )
}
