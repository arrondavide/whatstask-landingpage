import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import PageLoader from "@/components/page-loader"
export const metadata: Metadata = {
  title: "Project Management for Agencies | Whatstask",
  description:
    "Manage multiple clients, track billable hours, and collaborate with your team. Simple project management built for creative and marketing agencies.",
  keywords: [
    "agency project management",
    "creative agency tools",
    "marketing agency project management",
    "client management",
    "billable hours tracking",
    "agency time tracking",
  ],
  openGraph: {
    title: "Project Management for Agencies | Whatstask",
    description: "Manage clients, track hours, collaborate. Simple project management for agencies.",
    url: "https://www.whatstask.com/use-cases/agencies",
    siteName: "Whatstask",
    type: "website",
  },
  alternates: {
    canonical: "https://www.whatstask.com/use-cases/agencies",
  },
}

export default function AgenciesPage() {
  const benefits = [
    {
      title: "Multi-Client Workspaces",
      description: "Keep each client's projects separate. Switch between them instantly. No mixing up deliverables.",
    },
    {
      title: "Billable Hours Tracking",
      description: "Track time on every task. Generate reports for clients. Bill accurately, get paid fairly.",
    },
    {
      title: "Team Collaboration",
      description: "Assign tasks, set roles, track progress. Know who's working on what, always.",
    },
    {
      title: "Client-Ready Reports",
      description: "Show clients what you've done. Time spent, tasks completed, progress made.",
    },
  ]

  const painPoints = [
    {
      problem: "Juggling multiple clients gets messy",
      solution: "Separate workspaces for each client keep everything organized",
    },
    {
      problem: "Losing track of billable hours",
      solution: "Built-in time tracking on every task, no third-party tools needed",
    },
    {
      problem: "Team doesn't know what to work on",
      solution: "Clear task assignments with priorities and deadlines",
    },
    {
      problem: "Current tools are too complex",
      solution: "4 views. No training needed. Start working in 30 seconds",
    },
  ]

  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-white text-slate-900">
        <header className="border-b border-slate-200">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-black.png" alt="Whatstask Logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-bold">Whatstask</span>
            </Link>
            <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-6">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                Try Free
              </a>
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <section className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-sm text-slate-500 mb-6">For Agencies</p>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Project management that agencies actually use
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Manage multiple clients without the chaos. Track billable hours without the headache.
              Collaborate without complex tools getting in the way.
            </p>

            <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6 text-lg">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                <Send className="h-5 w-5 mr-2" />
                Start Free
              </a>
            </Button>
          </section>

          <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Built for agency workflows</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Agency problems, solved</h2>
            <div className="space-y-4">
              {painPoints.map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-red-400 mb-1">The problem:</p>
                      <p className="text-slate-700">{item.problem}</p>
                    </div>
                    <div>
                      <p className="text-sm text-violet-400 mb-1">Our solution:</p>
                      <p className="text-slate-700">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-violet-500/10 to-white/5 rounded-3xl p-8 border border-violet-500/20">
              <h2 className="text-2xl font-bold mb-6">Why agencies choose Whatstask</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  {[
                    "Manage unlimited clients in one place",
                    "Track billable hours automatically",
                    "AI helps create and organize tasks",
                    "Team members see only what they need",
                  ].map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
                <ul className="space-y-3">
                  {[
                    "Works in Telegram - no new app to learn",
                    "Free AI features (competitors charge $12-28/user)",
                    "Simple pricing, no per-seat surprises",
                    "Start in 30 seconds, not 30 days",
                  ].map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="max-w-3xl mx-auto text-center">
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
              <h2 className="text-3xl font-bold mb-4">Ready to simplify your agency?</h2>
              <p className="text-slate-600 mb-8">
                Join agencies who've ditched complex tools for something that actually works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    <Send className="h-5 w-5 mr-2" />
                    Start Free
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300">
                  <Link href="/enterprise">Need Custom Solution?</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-100 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
