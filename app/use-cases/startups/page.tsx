import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Send, Zap, Users, Clock, Brain } from "lucide-react"
import PageLoader from "@/components/page-loader"
import { Breadcrumbs } from "@/components/breadcrumbs"

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
      icon: Zap,
      title: "Start in 30 Seconds",
      description: "No setup wizards. No configuration. Open Telegram, start the bot, create your first task. Done.",
    },
    {
      icon: Brain,
      title: "Free AI Features",
      description: "Natural language task creation, smart suggestions, daily digest. Included free—not a $28/user add-on.",
    },
    {
      icon: Users,
      title: "Grow Without Complexity",
      description: "Same simple tool whether you're 2 people or 200. Scale without switching platforms.",
    },
    {
      icon: Clock,
      title: "Track Time, Not Tools",
      description: "Built-in time tracking. Know where hours go. No integrations needed.",
    },
  ]

  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-white text-slate-900">
        <header className="border-b border-slate-200">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Whatstask Logo" width={32} height={32} className="h-8 w-8" />
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
          <Breadcrumbs
            items={[
              { label: "Use Cases", href: "/use-cases/startups" },
              { label: "Startups", href: "/use-cases/startups" },
            ]}
          />

          <section className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-violet-400" />
              <span className="text-sm text-violet-400">For Startups</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Move fast. Stay organized.
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              You're building something new. Your tools should help, not slow you down.
              Simple project management with AI built-in. Free to start.
            </p>

            <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6 text-lg">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                <Send className="h-5 w-5 mr-2" />
                Start Free
              </a>
            </Button>
          </section>

          <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Built for startup speed</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <benefit.icon className="h-10 w-10 text-violet-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-violet-500/10 to-white/5 rounded-3xl p-8 border border-violet-500/20">
              <h2 className="text-2xl font-bold mb-4 text-center">Why startups choose Whatstask over ClickUp/Monday/Asana</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-violet-400 mb-2">30s</p>
                  <p className="text-slate-600">to first task (not 30 days)</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-violet-400 mb-2">$0</p>
                  <p className="text-slate-600">for AI features (not $28/user)</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-violet-400 mb-2">4</p>
                  <p className="text-slate-600">views that matter (not 15+)</p>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">What you get</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "List, Kanban, Calendar, Timeline views",
                "AI task creation and suggestions",
                "Built-in time tracking",
                "Team collaboration with roles",
                "Works in Telegram (your team's already there)",
                "Multi-project workspaces",
                "Mobile-first experience",
                "Free to start, affordable to scale",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <Check className="h-5 w-5 text-violet-400 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">From seed to scale</h2>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <p className="text-slate-600 text-center mb-8">
                The same tool works whether you're 2 co-founders or a 200-person company.
                No migrations. No retraining. Just keep shipping.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <p className="font-bold mb-2">Seed Stage</p>
                  <p className="text-sm text-slate-500">2-5 people, free tier</p>
                </div>
                <div className="text-center p-4">
                  <p className="font-bold mb-2">Growth Stage</p>
                  <p className="text-sm text-slate-500">10-50 people, same simplicity</p>
                </div>
                <div className="text-center p-4">
                  <p className="font-bold mb-2">Scale Stage</p>
                  <p className="text-sm text-slate-500">100+ people, enterprise options</p>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 md:p-12 border border-slate-200">
              <h2 className="text-3xl font-bold mb-4">Ready to move faster?</h2>
              <p className="text-slate-600 mb-8">
                Join startups who've chosen simplicity over complexity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    <Send className="h-5 w-5 mr-2" />
                    Start Free
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300">
                  <Link href="/pricing">See Pricing</Link>
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
