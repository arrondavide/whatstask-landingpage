import type { Metadata } from "next"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
import Script from "next/script"
import DeveloperDocsClient from "./developers-client"

export const metadata: Metadata = {
  title: "Developer API - Send Telegram Notifications | WhatsTask",
  description:
    "Send Telegram notifications from any application with WhatsTask Developer API. Simple REST API, webhook support for GitHub, Stripe, Vercel. No bot management required.",
  keywords:
    "telegram api, telegram notifications api, send telegram message api, telegram bot api alternative, webhook telegram, github telegram notifications, stripe telegram alerts",
  openGraph: {
    title: "Developer API - Send Telegram Notifications | WhatsTask",
    description:
      "Send Telegram notifications from any application. Simple REST API, webhook support. No bot management required.",
    url: "https://www.whatstask.com/developers",
    siteName: "Whatstask",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer API - Send Telegram Notifications | WhatsTask",
    description: "Send Telegram notifications from any application. Simple REST API, webhook support.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/developers",
  },
}

export default function DevelopersPage() {
  return (
    <>
      <PageLoader />
      <Navigation variant="dark" />
      <DeveloperDocsClient />

      {/* Schema */}
      <Script
        id="schema-developer-api"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: "WhatsTask Developer API Documentation",
            description: "Send Telegram notifications from any application with WhatsTask Developer API.",
            author: {
              "@type": "Organization",
              name: "WhatsTask",
            },
          }),
        }}
      />
    </>
  )
}
