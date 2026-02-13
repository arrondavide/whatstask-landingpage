import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Script from "next/script"
import { ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Trello + Telegram Integration | Connect Field Workers | Whatstask",
  description:
    "Bridge Trello to your Telegram workers. Keep using Trello for planning. Let field workers receive and complete tasks in Telegram. Two-way sync.",
  keywords: [
    "trello telegram integration",
    "trello telegram",
    "trello field workers",
    "trello worker app",
    "trello dispatch workers",
    "trello mobile workers",
  ],
  openGraph: {
    title: "Trello + Telegram Integration | Whatstask PM Connect",
    description: "Bridge Trello to Telegram workers. Managers keep Trello. Workers get tasks in Telegram.",
    url: "https://www.whatstask.com/compare/trello",
    siteName: "Whatstask",
    type: "website",
  },
  alternates: {
    canonical: "https://www.whatstask.com/compare/trello",
  },
}

export default function TrelloIntegrationPage() {
  const benefits = [
    {
      title: "Managers stay in Trello",
      description: "No workflow changes. Keep using the simple boards your team already knows.",
    },
    {
      title: "Workers get tasks in Telegram",
      description: "Field workers receive cards instantly. No app to download. No login to remember.",
    },
    {
      title: "Two-way sync",
      description: "When workers complete tasks in Telegram, Trello cards move automatically.",
    },
    {
      title: "Photos & notes sync back",
      description: "Workers can attach photos and notes. Everything appears on your Trello cards.",
    },
  ]

  const useCases = [
    {
      title: "Small Service Teams",
      description: "Manage jobs on simple Trello boards. Workers get cards in Telegram with all the details.",
      workers: "Handymen, Repair Services",
    },
    {
      title: "Cleaning Companies",
      description: "Schedule cleanings on Trello. Cleaners receive job cards in Telegram automatically.",
      workers: "Cleaners, Housekeeping",
    },
    {
      title: "Local Delivery",
      description: "Track deliveries on Trello boards. Drivers get delivery cards with addresses.",
      workers: "Local Couriers",
    },
    {
      title: "Small Agencies",
      description: "Manage projects in Trello. Freelancers get task cards in Telegram without board access.",
      workers: "Freelancers, Contractors",
    },
  ]

  const howItWorks = [
    "Create cards in Trello as usual",
    "Assign to a worker (mapped to their Telegram ID)",
    "Worker receives card instantly in Telegram",
    "Worker taps Start, Complete, or Problem",
    "Card moves to the right column in Trello",
  ]

  return (
    <>
      <Navigation variant="dark" />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        <main className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
              <span className="text-blue-400 text-sm font-medium">PM Connect</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Trello + Telegram
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light mb-10">
              Keep using Trello's simple boards. Connect your field workers through Telegram.
              No one has to switch tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Set Up Integration
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 border-white/20 text-white hover:bg-white/10 bg-transparent">
                <Link href="/pm-connect">Learn About PM Connect</Link>
              </Button>
            </div>
          </section>

          {/* The Bridge Diagram */}
          <section className="mb-24">
            <div className="border border-blue-500/30 bg-blue-500/10 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Trello */}
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-[#0079bf]/20 border border-[#0079bf]/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-[#0079bf]">T</span>
                  </div>
                  <p className="font-semibold text-white text-lg">Trello</p>
                  <p className="text-sm text-neutral-400">Your managers plan here</p>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center">
                  <div className="hidden md:flex items-center gap-2">
                    <div className="w-12 h-px bg-blue-500/50" />
                    <ArrowRight className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="md:hidden flex flex-col items-center gap-2">
                    <div className="h-6 w-px bg-blue-500/50" />
                    <ChevronDown className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="w-14 h-14 rounded-full bg-white/10 border-2 border-blue-500/50 flex items-center justify-center my-3">
                    <Image src="/logo.png" alt="Whatstask" width={28} height={28} />
                  </div>
                  <p className="text-xs text-blue-400 font-medium">PM Connect</p>
                  <div className="hidden md:flex items-center gap-2 mt-3">
                    <div className="w-12 h-px bg-blue-500/50" />
                    <ArrowRight className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="md:hidden flex flex-col items-center gap-2 mt-3">
                    <div className="h-6 w-px bg-blue-500/50" />
                    <ChevronDown className="w-5 h-5 text-blue-400" />
                  </div>
                </div>

                {/* Telegram */}
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                    </svg>
                  </div>
                  <p className="font-semibold text-white text-lg">Telegram</p>
                  <p className="text-sm text-neutral-400">Your workers execute here</p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">Benefits</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why bridge instead of replace?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:border-white/20 transition-all"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">How It Works</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Simple flow, no switching</h2>
            </div>

            <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
              <div className="space-y-4">
                {howItWorks.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm flex-shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-neutral-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">Use Cases</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Who uses Trello + Telegram?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/5 transition-all"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">{useCase.description}</p>
                  <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                    {useCase.workers}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* What Syncs */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">Sync Details</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">What syncs between Trello & Telegram</h2>
            </div>

            <div className="border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left p-6 font-semibold text-white">From Trello</th>
                    <th className="text-left p-6 font-semibold text-white">Worker sees in Telegram</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { trello: "Card title", telegram: "Task notification with title" },
                    { trello: "Card description", telegram: "Full details in message" },
                    { trello: "Due date", telegram: "Due date with reminder" },
                    { trello: "Labels", telegram: "Priority/category indicators" },
                    { trello: "Checklist items", telegram: "Step-by-step instructions" },
                    { trello: "Member", telegram: "Routes to correct worker" },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-white/5 last:border-0">
                      <td className="p-6 text-neutral-400">{row.trello}</td>
                      <td className="p-6 text-neutral-300">{row.telegram}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left p-6 font-semibold text-white">Worker action in Telegram</th>
                    <th className="text-left p-6 font-semibold text-white">Trello update</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { telegram: "Taps 'Start'", trello: "Card moves to 'In Progress'" },
                    { telegram: "Sends photo", trello: "Attachment added to card" },
                    { telegram: "Types note", trello: "Comment added to card" },
                    { telegram: "Taps 'Done'", trello: "Card moves to 'Done'" },
                    { telegram: "Reports problem", trello: "Card labeled, comment added" },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-white/5 last:border-0">
                      <td className="p-6 text-neutral-400">{row.telegram}</td>
                      <td className="p-6 text-neutral-300">{row.trello}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Common questions</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Do I need to change how I use Trello?",
                  a: "No. Keep using Trello exactly as you do now. PM Connect just routes cards to workers in Telegram and syncs updates back.",
                },
                {
                  q: "Do workers need Trello accounts?",
                  a: "No. Workers only need Telegram (free). They never need to log into Trello or be board members.",
                },
                {
                  q: "How do I map Trello members to Telegram?",
                  a: "In PM Connect settings, you map each Trello member to their Telegram ID. Workers get their ID by starting @whatstaskbot.",
                },
                {
                  q: "What Trello fields are supported?",
                  a: "Card title, description, due date, labels, checklists, and members. Attachments and comments sync both ways.",
                },
                {
                  q: "Is this official Trello integration?",
                  a: "PM Connect uses Trello's webhook API. It's a third-party integration built specifically for field worker use cases.",
                },
              ].map((item, index) => (
                <div key={index} className="border border-white/10 rounded-xl p-6 hover:border-white/20 hover:bg-white/5 transition-colors">
                  <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                  <p className="text-neutral-400">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="border border-blue-500/30 bg-blue-500/10 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Connect Trello to your Telegram workers
              </h2>
              <p className="text-neutral-300 mb-10 text-lg font-light">
                Set up in 5 minutes. No workflow changes. Free during early access.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Set Up Integration
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 py-6 border-white/20 text-white hover:bg-white/10 bg-transparent">
                  <Link href="/pm-connect">Learn More About PM Connect</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
          </div>
        </footer>
      </div>

      <Script
        id="schema-trello-integration"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Whatstask PM Connect for Trello",
            description: "Bridge Trello to Telegram workers. Two-way sync for field service teams.",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Telegram",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: "Free during early access",
            },
          }),
        }}
      />
    </>
  )
}
