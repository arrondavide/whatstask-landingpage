import ToolPageTemplate from "@/components/tool-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free PDF Compressor – Reduce File Size | Whatstask",
  description:
    "Compress PDF files online and reduce file size by up to 70%. Fast, free PDF compressor with zero quality loss. No signup needed.",
  keywords: "pdf compressor, reduce pdf size, compress pdf online, free pdf compressor",
  openGraph: {
    title: "Free PDF Compressor – Reduce File Size | Whatstask",
    description:
      "Compress PDF files online and reduce file size by up to 70%. Fast, free PDF compressor with no quality loss.",
    url: "https://www.whatstask.com/pdf-compressor",
  },
}

export default function PDFCompressorPage() {
  return (
    <ToolPageTemplate
      toolName="PDF Compressor"
      toolSlug="pdf-compressor"
      shortDescription="Reduce PDF file size by up to 70% without sacrificing quality. Perfect for email attachments, cloud storage, and faster downloads."
      fullDescription="PDF Compressor is a free, online tool that reduces PDF file sizes while maintaining excellent visual quality. Whether you need to send a large PDF via email, save cloud storage space, or speed up document uploads, our compressor makes it effortless. Simply upload your PDF, select your compression level, and download your optimized file. No signup, no watermarks, and completely secure – your files are processed instantly in your browser."
      features={[
        "Reduce file size by up to 70% without quality loss",
        "Multiple compression levels to choose from",
        "Instant processing and download",
      ]}
      steps={[
        {
          number: 1,
          title: "Upload Your PDF",
          description: "Click to select or drag and drop your PDF file to compress.",
        },
        {
          number: 2,
          title: "Choose Compression Level",
          description: "Select your preferred compression level based on quality and size requirements.",
        },
        {
          number: 3,
          title: "Download Compressed File",
          description: "Click download to get your compressed PDF instantly.",
        },
      ]}
      faqs={[
        {
          question: "Is PDF Compressor free to use?",
          answer:
            "Yes, completely free! You can compress unlimited PDFs without any cost, signup, or subscription required.",
        },
        {
          question: "Will compression affect my PDF quality?",
          answer:
            "Our compressor is designed to minimize quality loss while maximizing file size reduction. You can choose different compression levels to balance quality and size.",
        },
        {
          question: "Is my PDF file safe?",
          answer:
            "Your files are processed entirely in your browser and never uploaded to our servers. They're automatically deleted after processing.",
        },
        {
          question: "What file types does this work with?",
          answer: "PDF Compressor works exclusively with PDF files. For other formats, check our other free tools.",
        },
      ]}
      relatedTools={[
        {
          name: "PDF Merger",
          slug: "pdf-merger",
          description: "Combine multiple PDF files into one.",
        },
        {
          name: "PDF Splitter",
          slug: "pdf-splitter",
          description: "Extract pages from your PDF documents.",
        },
        {
          name: "PDF to JPG",
          slug: "pdf-to-jpg",
          description: "Convert PDF pages to images.",
        },
      ]}
      iframeSource="https://pdfcompressor.whatstask.com"
    />
  )
}
