import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Send,
  ArrowRight,
} from "lucide-react"
export const metadata: Metadata = {
  title: "Project Management for Small Teams (2-10 People) | Whatstask",
  description:
    "Simple, affordable project management for small teams. No enterprise bloat, no complicated setup. Just task management that works for teams of 2-10 people.",
  keywords:
    "small team project management, team task management, affordable project management, simple team collaboration, small business tasks",
  openGraph: {
    title: "Project Management for Small Teams | Whatstask",
    description:
      "Simple project management for teams of 2-10. No enterprise bloat.",
    url: "https://www.whatstask.com/solutions/small-teams",
    siteName: "Whatstask",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Management for Small Teams | Whatstask",
    description: "Simple project management for teams of 2-10.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/solutions/small-teams",
  },
}

export default function SmallTeamsSolutionPage() {
  const painPoints = [
    {
      problem: "Enterprise tools are overkill",
      description: "You don't need 50 features. You need a place to track who's doing what.",
    },
    {
      problem: "Per-seat pricing adds up",
      description: "At $15/user, a team of 5 pays $75/month just for task management.",
    },
    {
      problem: "Setup takes days, not minutes",
      description: "You don't have time for training sessions and configuration.",
    },
    {
      problem: "Everyone needs another app",
      description: "More logins, more notifications, more tabs to manage.",
    },
  ]

  const features = [
    {
      title: "30-Second Setup",
      description: "Start your team on Whatstask in 30 seconds. No installation, no configuration, no training required.",
    },
    {
      title: "Actually Affordable",
      description: "Free for basic use. Pro is $4.99/user/month. A team of 5? That's less than one coffee run.",
    },
    {
      title: "Built for Small Teams",
      description: "Not a stripped-down enterprise tool. Designed from scratch for teams of 2-10 people.",
    },
    {
      title: "No New App to Learn",
      description: "Works in Telegram, which your team already uses. Zero learning curve.",
    },
    {
      title: "Just What You Need",
      description: "Tasks, deadlines, assignees, and 4 views. That's it. No feature bloat.",
    },
    {
      title: "Time Tracking Included",
      description: "Track hours without a separate tool. Perfect for billable work or capacity planning.",
    },
  ]

  const comparison = [
    { feature: "Team of 5, monthly cost", whatstask: "Free - $25", competitors: "$50 - $150" },
    { feature: "Setup time", whatstask: "30 seconds", competitors: "Hours to days" },
    { feature: "Training needed", whatstask: "None", competitors: "Yes" },
    { feature: "App download required", whatstask: "No", competitors: "Yes" },
    { feature: "AI features", whatstask: "Included free", competitors: "Extra $5-10/user" },
  ]

  const testimonialStyle = [
    {
      quote: "We tried Asana, Monday, and ClickUp. They're all built for 100-person companies. Whatstask actually fits how we work.",
      author: "Small agency founder",
    },
    {
      quote: "My team of 3 doesn't need Gantt charts. We need to know who's doing what this week.",
      author: "Startup CTO",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Whatstask Logo" width={32} height={32} className="h-8 w-8" />
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
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm text-neutral-400 mb-6">For Teams of 2-10</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Project Management That Doesn't Insult Your Intelligence
          </h1>
          <p className="text-xl text-neutral-300 leading-relaxed mb-8">
            You're a small team. You don't need enterprise software. You need to know who's doing
            what and when it's due. That's it. That's Whatstask.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                Start Free on Telegram
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-6 border-white/20">
              <Link href="/pricing">See Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">We Get It</h2>
        <p className="text-neutral-300 text-center mb-12 max-w-2xl mx-auto">
          Most project management tools are built for enterprises. You're not an enterprise.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-red-400 font-medium mb-2">"{point.problem}"</p>
              <p className="text-neutral-300">{point.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Whatstask is Different</h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
            Built specifically for small teams. Simple by design, not by limitation.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div>
              <p className="text-4xl font-bold text-white mb-2">$0</p>
              <p className="text-neutral-300">to get started</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">30 sec</p>
              <p className="text-neutral-300">to set up your team</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-2">4</p>
              <p className="text-neutral-300">views (not 40)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Small Teams Love Whatstask</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-violet-500/30 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-neutral-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">The Real Comparison</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-white/5 p-4 font-semibold">
              <div>Feature</div>
              <div>Whatstask</div>
              <div className="text-neutral-300">Others</div>
            </div>
            {comparison.map((row, index) => (
              <div key={index} className="grid grid-cols-3 p-4 border-t border-white/5">
                <div className="text-neutral-300">{row.feature}</div>
                <div className="font-medium">{row.whatstask}</div>
                <div className="text-neutral-400">{row.competitors}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonialStyle.map((testimonial, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-lg text-neutral-300 mb-4">"{testimonial.quote}"</p>
              <p className="text-sm text-neutral-400">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Perfect For */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            "Startup teams",
            "Small agencies",
            "Design studios",
            "Consulting firms",
            "Side projects",
            "Non-profits",
            "Research teams",
            "Creator teams",
          ].map((team, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-4 text-neutral-300 text-center">
              {team}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Keep It Simple?</h2>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Join small teams who've stopped fighting their tools and started getting things done.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-violet-500 hover:bg-violet-600 text-white rounded-full px-8 py-6">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                Start Free in Telegram
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-6 border-white/20">
              <Link href="/use-cases/freelancers" className="flex items-center gap-2">
                Working Solo? See Freelancer Page
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Whatstask Logo" width={24} height={24} />
              <span className="font-bold">Whatstask</span>
            </Link>
            <div className="flex flex-wrap gap-6 text-sm text-neutral-300">
              <Link href="/solutions/marketing" className="hover:text-white transition-colors">Marketing Teams</Link>
              <Link href="/solutions/development" className="hover:text-white transition-colors">Development Teams</Link>
              <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            </div>
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} Whatstask. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
