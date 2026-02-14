import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
import Script from "next/script"
import {
  Shield,
  Bitcoin,
  FileCheck,
  Lock,
  Zap,
  Globe,
  Clock,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

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
  const features = [
    {
      icon: <Bitcoin className="h-6 w-6" />,
      title: "Bitcoin Blockchain Security",
      description: "Your proof is anchored to the most secure blockchain in existence. Immutable and permanent.",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Zero-Knowledge Privacy",
      description: "Files never leave your device. Only the cryptographic hash is stored and timestamped.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Registration",
      description: "Create proofs in seconds. Bitcoin confirmation typically takes 1-2 hours.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Globally Verifiable",
      description: "Anyone can verify your proof using the public Bitcoin blockchain.",
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "PDF Certificates",
      description: "Download professional certificates with QR codes for easy verification.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Legal Standing",
      description: "Blockchain timestamps are increasingly recognized in courts worldwide.",
    },
  ]

  const useCases = [
    {
      title: "Creative Work",
      items: ["Designs & artwork", "Photography", "Music & audio", "Videos & films", "Written content"],
    },
    {
      title: "Business Documents",
      items: ["Contracts & agreements", "Business plans", "Patents & inventions", "Research papers", "Trade secrets"],
    },
    {
      title: "Development",
      items: ["Source code", "Technical specs", "API documentation", "Architecture designs", "Algorithm proofs"],
    },
  ]

  const howItWorks = [
    {
      step: "1",
      title: "Select Your File",
      description: "Choose any file you want to timestamp. It never leaves your device.",
    },
    {
      step: "2",
      title: "Generate Hash",
      description: "A unique SHA-256 fingerprint is created locally in your browser.",
    },
    {
      step: "3",
      title: "Anchor to Bitcoin",
      description: "The hash is submitted to the Bitcoin blockchain via OpenTimestamps.",
    },
    {
      step: "4",
      title: "Get Your Proof",
      description: "Download a verifiable PDF certificate once confirmed on Bitcoin.",
    },
  ]

  const faqs = [
    {
      q: "Is my file uploaded to your servers?",
      a: "No. Your file never leaves your device. Only the SHA-256 hash (a 64-character fingerprint) is sent to our servers and anchored to Bitcoin.",
    },
    {
      q: "How long until my proof is confirmed?",
      a: "The hash is submitted immediately. Bitcoin confirmation typically takes 1-2 hours as the OpenTimestamps protocol batches multiple hashes into a single Bitcoin transaction.",
    },
    {
      q: "Is this legally valid?",
      a: "Blockchain timestamps are increasingly accepted as evidence in courts worldwide. The immutable nature of Bitcoin makes it excellent for proving when something existed.",
    },
    {
      q: "What if I modify my file?",
      a: "Even a tiny change to your file produces a completely different hash. This is by design - it proves the exact state of your file at the time of registration.",
    },
    {
      q: "How much does it cost?",
      a: "IP Proof is free for WhatsTask users. We use OpenTimestamps, which aggregates many proofs into single Bitcoin transactions, making it cost-effective.",
    },
  ]

  return (
    <>
      <PageLoader />
      <Navigation variant="dark" />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        {/* Hero */}
        <section className="container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/20 border border-violet-500/30 text-violet-400 text-sm mb-8">
              <Shield className="h-4 w-4" />
              Powered by Bitcoin & OpenTimestamps
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
              IP Proof
            </h1>
            <p className="text-2xl lg:text-3xl text-neutral-300 mb-6">
              Blockchain Proof of Creation
            </p>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
              Timestamp your creative work on the Bitcoin blockchain. Prove when you created something -
              without ever uploading your files. Free, private, and legally defensible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6 text-lg"
              >
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  Create Your First Proof
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-white/20 text-neutral-300 hover:bg-white/5"
              >
                <Link href="/verify">Verify a Proof</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="border-y border-white/5 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 text-neutral-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Files stay on your device</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Bitcoin-secured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Free to use</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Instant registration</span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Process</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">How It Works</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {howItWorks.map((item) => (
                <div
                  key={item.step}
                  className="relative p-6 border border-white/10 rounded-2xl bg-white/5 hover:border-violet-500/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-violet-500 text-white flex items-center justify-center font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="container mx-auto px-4 py-24 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Features</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose IP Proof</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 text-violet-400 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="container mx-auto px-4 py-24 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Use Cases</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">What Can You Protect?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {useCases.map((category) => (
                <div
                  key={category.title}
                  className="p-6 border border-white/10 rounded-2xl bg-white/5"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-neutral-400 text-sm">
                        <CheckCircle className="h-4 w-4 text-violet-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Common Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 border border-white/10 rounded-2xl bg-white/5"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-neutral-400 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-violet-500/10 to-violet-400/5 rounded-2xl p-12 border border-violet-500/20">
              <Clock className="h-12 w-12 text-violet-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Start Protecting Your Work Today</h2>
              <p className="text-lg text-neutral-300 mb-8">
                Create your first blockchain proof in seconds. No signup required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6 text-lg"
                >
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    Launch WhatsTask
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg border-white/20 text-neutral-300 hover:bg-white/5"
                >
                  <Link href="/verify">Verify Existing Proof</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-white/5 py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-neutral-400 text-sm">
              IP Proof is powered by{" "}
              <a
                href="https://opentimestamps.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300"
              >
                OpenTimestamps
              </a>
              , an open protocol for creating blockchain timestamps.
            </p>
            <p className="text-neutral-500 text-sm mt-4">
              © {new Date().getFullYear()} WhatsTask. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

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
