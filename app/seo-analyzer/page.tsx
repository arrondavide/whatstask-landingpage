import { redirect } from "next/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "GEO Analyzer - Redirecting | Whatstask",
  description: "Redirecting to GEO Analyzer - Free AI Search Optimization Tool",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/geoanalyzer",
  },
}

export default function SeoAnalyzerPage() {
  redirect("/geoanalyzer")
}
