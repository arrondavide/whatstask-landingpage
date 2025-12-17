import ToolPageTemplate from "@/components/tool-page-template"
import { generateMetadata } from "@/lib/seo-metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
  title: "Free JPG to PDF Converter - Create PDFs from Images | Whatstask 2025",
  description:
    "Convert JPG images to PDF documents instantly. Free JPG to PDF converter with batch support. No signup or watermarks. Turn images into PDFs for 2025.",
  canonicalUrl: "https://www.whatstask.com/jpg-to-pdf",
  ogImage: "/logo.png",
  keywords: [
    "jpg to pdf",
    "convert jpg to pdf",
    "image to pdf",
    "free image converter",
    "jpg to pdf 2025",
    "jpeg to pdf converter",
    "convert image to pdf online",
  ],
})

export default function JpgToPdfPage() {
  return (
    <ToolPageTemplate
      toolName="JPG to PDF Converter"
      toolSlug="jpg-to-pdf"
      shortDescription="Turn one or multiple JPG images into a single PDF document. Arrange images in any order and create professional PDFs in seconds."
      fullDescription="JPG to PDF Converter is a free, online tool that combines your JPG images into polished PDF documents. Whether you're digitizing photos, creating image-based documents, or organizing scanned files, our converter makes it simple. Upload your JPG images, arrange them in the desired order, and generate your PDF instantly. No signup required, no watermarks, and completely secure – all processing happens in your browser."
      features={[
        "Convert single or multiple JPG images to PDF",
        "Arrange images in custom order",
        "Create professional PDF documents",
      ]}
      steps={[
        {
          number: 1,
          title: "Upload JPG Images",
          description: "Click or drag your JPG image files into the converter.",
        },
        {
          number: 2,
          title: "Arrange Order",
          description: "Reorder your images to arrange them as desired in the PDF.",
        },
        {
          number: 3,
          title: "Create & Download PDF",
          description: "Click convert and download your new PDF file instantly.",
        },
      ]}
      faqs={[
        {
          question: "Can I convert JPG images to PDF for free?",
          answer:
            "Yes, completely free! No costs, no subscriptions, no hidden fees. Convert as many images as you need.",
        },
        {
          question: "Can I upload multiple JPG files at once?",
          answer: "Yes! You can upload multiple JPG images and combine them all into a single PDF document.",
        },
        {
          question: "Do you add watermarks to the PDF?",
          answer: "No watermarks whatsoever. Your PDF comes out clean and professional, ready to use or share.",
        },
        {
          question: "Is my data private?",
          answer: "Completely private. Files are processed in your browser and never stored on our servers.",
        },
      ]}
      relatedTools={[
        {
          name: "PDF to JPG",
          slug: "pdf-to-jpg",
          description: "Convert PDF pages into JPG images.",
        },
        {
          name: "PDF Merger",
          slug: "pdf-merger",
          description: "Combine multiple PDF files.",
        },
        {
          name: "PDF Compressor",
          slug: "pdf-compressor",
          description: "Reduce PDF file size.",
        },
      ]}
      iframeSource="https://jpgtopdf.whatstask.com"
    />
  )
}
