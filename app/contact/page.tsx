import type { Metadata } from "next"
import ContactClient from "./contact-client"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | Whatstask",
  description:
    "Contact Whatstask for questions, enterprise solutions, or partnership opportunities. We typically respond within 24 hours.",
  keywords: [
    "contact whatstask",
    "enterprise solutions",
    "partnership",
    "custom development",
    "white-label PM",
    "telegram bot development",
  ],
  openGraph: {
    title: "Contact Us - Whatstask",
    description: "Questions, feedback, or interested in working together? Get in touch with the Whatstask team.",
    url: "https://www.whatstask.com/contact",
    siteName: "Whatstask",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Whatstask",
    description: "Get in touch with the Whatstask team for questions, enterprise solutions, or partnerships.",
  },
  alternates: {
    canonical: "https://www.whatstask.com/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactClient />

      {/* Contact Page Schema */}
      <Script
        id="schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Whatstask",
            description: "Contact page for Whatstask - AI-powered work infrastructure",
            url: "https://www.whatstask.com/contact",
            mainEntity: {
              "@type": "Organization",
              name: "Whatstask",
              email: "charlesaarondavid@gmail.com",
              contactPoint: {
                "@type": "ContactPoint",
                email: "charlesaarondavid@gmail.com",
                contactType: "customer support",
                availableLanguage: "English"
              }
            }
          }),
        }}
      />
    </>
  )
}
