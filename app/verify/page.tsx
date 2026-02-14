import type { Metadata } from "next"
import { Suspense } from "react"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
import VerifyClient from "./verify-client"

export const metadata: Metadata = {
  title: "Verify IP Proof | WhatsTask - Blockchain Verification",
  description:
    "Verify the authenticity of your IP Proof certificate. Check if a file was registered on the Bitcoin blockchain via WhatsTask.",
  keywords: [
    "ip proof verification",
    "blockchain verification",
    "file timestamp verification",
    "bitcoin proof",
    "opentimestamps verify",
  ],
  openGraph: {
    title: "Verify IP Proof | WhatsTask",
    description: "Verify blockchain-anchored proof of creation certificates",
    url: "https://www.whatstask.com/verify",
    siteName: "WhatsTask",
  },
  alternates: {
    canonical: "https://www.whatstask.com/verify",
  },
}

export default function VerifyPage() {
  return (
    <>
      <PageLoader />
      <Navigation variant="dark" />
      <Suspense fallback={<VerifyLoadingFallback />}>
        <VerifyClient />
      </Suspense>
    </>
  )
}

function VerifyLoadingFallback() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-500/20 mb-6">
            <div className="w-8 h-8 border-2 border-violet-400 border-t-transparent rounded-full animate-spin" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Verify IP Proof
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Loading verification...
          </p>
        </div>
      </main>
    </div>
  )
}
