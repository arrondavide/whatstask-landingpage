import ToolsClient from "./tools-client"
import { generateMetadata } from "@/lib/seo-metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
  title: "Free PDF Tools & Utilities | Whatstask",
  description:
    "Free online PDF tools: merge, compress, convert, split PDFs. Plus QR code generator and SEO analyzer. No signup required. Use instantly →",
  canonicalUrl: "https://www.whatstask.com/tools",
  ogImage: "/logo-black.png",
  keywords: [
    "free online tools",
    "pdf tools",
    "pdf merger",
    "pdf compressor",
    "pdf to jpg",
    "jpg to pdf",
    "qr code generator",
    "seo analyzer",
    "free tools 2025",
  ],
})

export default function ToolsPage() {
  return <ToolsClient />
}
