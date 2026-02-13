import type { Metadata } from "next"
import WorkspaceClient from "./workspace-client"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Workspace - Complete PM Inside Telegram | Whatstask",
  description:
    "Full project management workspace inside Telegram. Kanban boards, time tracking, AI task creation, team analytics, and more. No app switching required.",
  keywords: [
    "telegram project management",
    "telegram workspace",
    "telegram kanban",
    "telegram time tracking",
    "AI task management",
    "team collaboration telegram",
    "project management bot",
  ],
  openGraph: {
    title: "Workspace - Complete PM Inside Telegram | Whatstask",
    description:
      "Full project management workspace inside Telegram. Kanban boards, time tracking, AI task creation, and team analytics.",
    url: "https://www.whatstask.com/workspace",
    siteName: "Whatstask",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whatstask Workspace - PM Inside Telegram",
    description:
      "Full project management workspace inside Telegram. Kanban boards, time tracking, AI task creation.",
  },
  alternates: {
    canonical: "https://www.whatstask.com/workspace",
  },
}

export default function WorkspacePage() {
  return (
    <>
      <WorkspaceClient />

      <Script
        id="schema-workspace"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Whatstask Workspace",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Telegram",
            description:
              "Complete project management workspace inside Telegram with Kanban boards, time tracking, AI task creation, and team analytics.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: "Free during early access",
            },
            featureList: [
              "Kanban boards",
              "Time tracking",
              "AI task creation",
              "Team analytics",
              "Task assignments",
              "Due date management",
              "File attachments",
              "Team collaboration",
            ],
          }),
        }}
      />
    </>
  )
}
