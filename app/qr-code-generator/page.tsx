import ToolPageTemplate from "@/components/tool-page-template"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free QR Code Generator – Create Custom QR Codes | Whatstask",
  description:
    "Generate custom QR codes instantly for marketing, business cards, and more. Free QR code generator with PNG and SVG export.",
  keywords: "qr code generator, free qr code, create qr codes, qr code maker",
  openGraph: {
    title: "Free QR Code Generator – Create Custom QR Codes | Whatstask",
    description:
      "Generate custom QR codes instantly for marketing, business cards, and more. Free QR code generator with PNG and SVG export.",
    url: "https://www.whatstask.com/qr-code-generator",
  },
}

export default function QrCodeGeneratorPage() {
  return (
    <ToolPageTemplate
      toolName="QR Code Generator"
      toolSlug="qr-code-generator"
      shortDescription="Create custom QR codes instantly and download them as PNG or SVG. Perfect for marketing campaigns, business cards, product packaging, and more."
      fullDescription="QR Code Generator is a free online tool that lets you create high-quality QR codes for any URL, text, or data. Whether you're running a marketing campaign, creating business materials, or labeling products, our generator makes it easy. Customize colors, sizes, and formats, then download your QR codes as PNG or SVG files. No signup required, no watermarks – generate unlimited QR codes completely free."
      features={[
        "Generate QR codes for URLs, text, and data",
        "Customize colors and design",
        "Export as PNG or SVG format",
      ]}
      steps={[
        {
          number: 1,
          title: "Enter Your Data",
          description: "Type the URL, text, or data you want to encode in the QR code.",
        },
        {
          number: 2,
          title: "Customize (Optional)",
          description: "Choose colors, size, and other design options for your QR code.",
        },
        {
          number: 3,
          title: "Download",
          description: "Download your QR code as PNG or SVG and use it anywhere.",
        },
      ]}
      faqs={[
        {
          question: "Can I create QR codes for free?",
          answer: "Yes! Generate unlimited QR codes completely free with no signup, watermarks, or hidden charges.",
        },
        {
          question: "What can I encode in a QR code?",
          answer: "You can encode URLs, phone numbers, email addresses, text, WiFi credentials, and much more.",
        },
        {
          question: "Can I customize the appearance of my QR code?",
          answer: "Yes! Customize colors, sizes, and design elements to match your brand.",
        },
        {
          question: "What formats can I download?",
          answer: "Download your QR codes as PNG images or SVG vectors for maximum flexibility.",
        },
      ]}
      relatedTools={[
        {
          name: "PDF Merger",
          slug: "pdf-merger",
          description: "Combine multiple PDFs together.",
        },
        {
          name: "PDF to JPG",
          slug: "pdf-to-jpg",
          description: "Convert PDF pages to images.",
        },
        {
          name: "GEO Analyzer",
          slug: "seo-analyzer",
          description: "Analyze your website SEO.",
        },
      ]}
      iframeSource="https://freeqrcodegenerator.whatstask.com"
    />
  )
}
