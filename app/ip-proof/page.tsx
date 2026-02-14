import type { Metadata } from "next"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
import Script from "next/script"
import IPProofClient from "./ip-proof-client"

export const metadata: Metadata = {
  title: "IP Proof - Blockchain Proof of Creation | WhatsTask",
  description:
    "Protect your intellectual property with blockchain-verified proof of creation. Timestamp your files on Bitcoin for free. No file uploads - your work stays private.",
  keywords: [
    "ip proof",
    "proof of creation",
    "blockchain timestamp",
    "bitcoin timestamp",
    "intellectual property protection",
    "opentimestamps",
    "copyright proof",
    "file timestamping",
  ],
  openGraph: {
    title: "IP Proof - Blockchain Proof of Creation | WhatsTask",
    description: "Timestamp your creative work on the Bitcoin blockchain. Free, private, and legally defensible.",
    url: "https://www.whatstask.com/ip-proof",
    siteName: "WhatsTask",
    type: "website",
  },
  alternates: {
    canonical: "https://www.whatstask.com/ip-proof",
  },
}

export default function IPProofPage() {
  return (
    <>
      <PageLoader />
      <Navigation variant="dark" />
      <IPProofClient />

      {/* Schema */}
      <Script
        id="schema-ip-proof"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "WhatsTask IP Proof",
            description: "Blockchain-powered proof of creation service using Bitcoin and OpenTimestamps",
            applicationCategory: "SecurityApplication",
            operatingSystem: "Web, Telegram",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            creator: {
              "@type": "Organization",
              name: "WhatsTask",
              url: "https://www.whatstask.com",
            },
          }),
        }}
      />
    </>
  )
}
