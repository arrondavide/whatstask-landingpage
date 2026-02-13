import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "Project Management for Startups | Whatstask",
  description:
    "Fast, simple project management for fast-moving startups. Free AI features, instant setup, no complexity. Built for teams that ship.",
  keywords: [
    "startup project management",
    "project management for startups",
    "simple project management",
    "fast project management",
    "startup tools",
    "team collaboration startup",
  ],
  openGraph: {
    title: "Project Management for Startups | Whatstask",
    description: "Fast, simple, free AI. Project management for teams that ship.",
    url: "https://www.whatstask.com/use-cases/startups",
    siteName: "Whatstask",
    type: "website",
  },
  alternates: {
    canonical: "https://www.whatstask.com/use-cases/startups",
  },
}

export default function StartupsPage() {
  const benefits = [
    {
      title: "Start in 30 Seconds",
      description: "No setup wizards. No configuration. Open Telegram, start the bot, create your first task. Done.",
    },
    {
      title: "Free AI Features",
      description: "Natural language task creation, smart suggestions, daily digest. Included free—not a $28/user add-on.",
    },
    {
      title: "Grow Without Complexity",
      description: "Same simple tool whether you're 2 people or 200. Scale without switching platforms.",
    },
    {
      title: "Track Time, Not Tools",
      description: "Built-in time tracking. Know where hours go. No integrations needed.",
    },
  ]

  const features = [
    "List, Kanban, Calendar, Timeline views",
    "AI task creation and suggestions",
    "Built-in time tracking",
    "Team collaboration with roles",
    "Works in Telegram (your team's already there)",
    "Multi-project workspaces",
    "Mobile-first experience",
    "Free to start, affordable to scale",
  ]

  const stages = [
    { name: "Seed Stage", description: "2-5 people, free tier" },
    { name: "Growth Stage", description: "10-50 people, same simplicity" },
    { name: "Scale Stage", description: "100+ people, enterprise options" },
  ]

  return (
    <>
      <PageLoader />
      <Navigation variant="dark" />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        <main className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">For Startups</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Move fast. Stay organized.
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light mb-10">
              You're building something new. Your tools should help, not slow you down.
            </p>
            <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                Start Free
              </a>
            </Button>
          </section>

          {/* Benefits */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Features</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Built for startup speed</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose */}
          <section className="mb-24">
            <div className="border border-white/10 rounded-2xl p-10 md:p-12">
              <div className="text-center mb-10">
                <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Comparison</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Why startups choose Whatstask</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-4xl font-light text-white mb-2">30s</p>
                  <p className="text-sm text-neutral-400">to first task (not 30 days)</p>
                </div>
                <div>
                  <p className="text-4xl font-light text-white mb-2">$0</p>
                  <p className="text-sm text-neutral-400">for AI features (not $28/user)</p>
                </div>
                <div>
                  <p className="text-4xl font-light text-white mb-2">4</p>
                  <p className="text-sm text-neutral-400">views that matter (not 15+)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Included</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">What you get</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-sm text-neutral-300 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-1 h-1 rounded-full bg-neutral-500 mt-2 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Scale */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Growth</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">From seed to scale</h2>
            </div>
            <div className="border border-white/10 rounded-2xl p-10 md:p-12">
              <p className="text-neutral-400 text-center mb-8 font-light">
                The same tool works whether you're 2 co-founders or a 200-person company.
                No migrations. No retraining. Just keep shipping.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {stages.map((stage, index) => (
                  <div key={index} className="text-center p-4">
                    <p className="font-semibold text-white mb-2">{stage.name}</p>
                    <p className="text-sm text-neutral-400">{stage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="border border-white/10 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to move faster?</h2>
              <p className="text-neutral-400 mb-10 text-lg font-light">
                Join startups who've chosen simplicity over complexity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    Start Free
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-lg px-8 py-6 border-white/20 hover:bg-white/5">
                  <Link href="/pricing">See Pricing</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-neutral-400">
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
