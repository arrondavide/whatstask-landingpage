import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"

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

  const reasons = [
    "Manage unlimited clients in one place",
    "Track billable hours automatically",
    "AI helps create and organize tasks",
    "Team members see only what they need",
    "Works in Telegram - no new app to learn",
    "Free AI features (competitors charge $12-28/user)",
    "Simple pricing, no per-seat surprises",
    "Start in 30 seconds, not 30 days",
  ]

  return (
    <>
      <PageLoader />
      <Navigation variant="solid" />
      <div className="min-h-screen bg-white text-slate-900 pt-16">
        <main className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">For Agencies</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
              Project management that agencies actually use
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light mb-10">
              Manage multiple clients without the chaos. Track billable hours without the headache.
            </p>
            <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-8 py-6">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                Start Free
              </a>
            </Button>
          </section>

          {/* Benefits */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Features</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Built for agency workflows</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-2xl p-8 hover:border-slate-300 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pain Points */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Solutions</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Agency problems, solved</h2>
            </div>
            <div className="space-y-4">
              {painPoints.map((item, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">The problem</p>
                      <p className="text-slate-700">{item.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-violet-600 mb-2">Our solution</p>
                      <p className="text-slate-700">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose */}
          <section className="mb-24">
            <div className="border border-slate-200 rounded-2xl p-10 md:p-12">
              <div className="text-center mb-10">
                <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Benefits</p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why agencies choose Whatstask</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {reasons.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="w-1 h-1 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="border border-slate-200 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ready to simplify your agency?</h2>
              <p className="text-slate-500 mb-10 text-lg font-light">
                Join agencies who've ditched complex tools for something that actually works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-8 py-6">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    Start Free
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-lg px-8 py-6 border-slate-300 hover:bg-slate-50">
                  <Link href="/enterprise">Need Custom Solution?</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-100 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
