import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Send,
  ArrowRight,
} from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Project Management for Marketing Teams | Whatstask",
  description:
    "Manage marketing campaigns, content calendars, and team collaboration in Telegram. Simple project management built for marketing teams who move fast.",
  keywords:
    "marketing project management, marketing team collaboration, campaign management, content calendar tool, marketing task management telegram",
  openGraph: {
    title: "Project Management for Marketing Teams | Whatstask",
    description:
      "Run campaigns, manage content, and collaborate with your marketing team - all in Telegram.",
    url: "https://www.whatstask.com/solutions/marketing",
    siteName: "Whatstask",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Management for Marketing Teams | Whatstask",
    description: "Simple project management built for marketing teams.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/solutions/marketing",
  },
}

export default function MarketingSolutionPage() {
  const features = [
    {
      title: "Content Calendar",
      description:
        "Plan and schedule content across channels. See what's publishing when with calendar and timeline views.",
    },
    {
      title: "Campaign Tracking",
      description:
        "Organize campaigns with tasks, deadlines, and assignees. Track progress from ideation to launch.",
    },
    {
      title: "Team Collaboration",
      description:
        "Work with designers, copywriters, and stakeholders. Share updates and get approvals in real-time.",
    },
    {
      title: "Time Tracking",
      description:
        "Track time spent on campaigns and clients. Generate reports for billing and capacity planning.",
    },
    {
      title: "Client Communication",
      description:
        "Keep client feedback organized. Comment threads on tasks mean nothing gets lost in email.",
    },
    {
      title: "Project Analytics",
      description:
        "See team workload, project progress, and bottlenecks at a glance with built-in dashboards.",
    },
  ]

  const useCases = [
    {
      title: "Product Launch Campaign",
      description: "Coordinate messaging, assets, channels, and timing for a successful launch.",
      tasks: ["Create launch timeline", "Assign content creation", "Schedule social posts", "Track deliverables"],
    },
    {
      title: "Monthly Content Calendar",
      description: "Plan blog posts, social content, and newsletters with clear ownership.",
      tasks: ["Map content themes", "Assign writers", "Set review deadlines", "Schedule publishing"],
    },
    {
      title: "Brand Refresh Project",
      description: "Manage complex rebrand projects with multiple stakeholders and deliverables.",
      tasks: ["Define brand guidelines", "Coordinate with design", "Update all touchpoints", "Train team"],
    },
  ]

  const benefits = [
    "No app downloads - your team is already on Telegram",
    "AI helps create tasks from campaign briefs",
    "Free PDF tools for proposals and reports",
    "Simple enough to actually use daily",
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-black.png" alt="Whatstask Logo" width={32} height={32} className="h-8 w-8" />
            <span className="text-xl font-bold">Whatstask</span>
          </Link>
          <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-6">
            <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
              <Send className="h-4 w-4 mr-2" />
              Try Free
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: "Solutions", href: "/solutions/marketing" },
            { label: "Marketing Teams", href: "/solutions/marketing" },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-16 mt-8">
          <p className="text-sm text-slate-500 mb-6">For Marketing Teams</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Run Campaigns Without the Chaos
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Marketing moves fast. Your project management should keep up. Whatstask helps marketing
            teams ship campaigns, manage content, and collaborate—all without leaving Telegram.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                Start Free on Telegram
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300">
              <Link href="/templates">View Marketing Templates</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Built for How Marketing Teams Work</h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          From content calendars to campaign launches, Whatstask adapts to your marketing workflow.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-violet-500/30 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Marketing Use Cases</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
              <p className="text-slate-600 mb-6">{useCase.description}</p>
              <ul className="space-y-2">
                {useCase.tasks.map((task, i) => (
                  <li key={i} className="text-sm text-slate-700">
                    • {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Marketing Teams Choose Whatstask</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="text-slate-700">
                    • {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black/50 rounded-2xl p-8 border border-slate-200">
              <div className="text-4xl font-bold text-pink-400 mb-2">30 seconds</div>
              <p className="text-slate-600 mb-6">Average time to create a campaign in Whatstask</p>
              <div className="text-4xl font-bold text-pink-400 mb-2">$0</div>
              <p className="text-slate-600">Cost to start using Whatstask for your team</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Marketing Workflow?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Join marketing teams who've switched from complex tools to Whatstask's simple approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-violet-500 hover:bg-violet-600 text-white rounded-full px-8 py-6">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                Start Free in Telegram
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300">
              <Link href="/compare/monday" className="flex items-center gap-2">
                Compare to Monday.com
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-black.png" alt="Whatstask Logo" width={24} height={24} />
              <span className="font-bold">Whatstask</span>
            </Link>
            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <Link href="/solutions/development" className="hover:text-slate-900 transition-colors">Development Teams</Link>
              <Link href="/solutions/remote" className="hover:text-slate-900 transition-colors">Remote Teams</Link>
              <Link href="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
            </div>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Whatstask. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
