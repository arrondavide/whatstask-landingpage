import ToolsClient from "./tools-client"
import { generateMetadata } from "@/lib/seo-metadata"
import type { Metadata } from "next"

export const metadata: Metadata = generateMetadata({
  title: "Free Online Tools - PDF Tools & More | Whatstask 2025",
  description:
    "Free online tools for productivity. PDF merger, compressor, converters, QR code generator, and SEO analyzer. No signups, no watermarks, no hassle.",
  canonicalUrl: "https://www.whatstask.com/tools",
  ogImage: "/logo.png",
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
