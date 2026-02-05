import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Send,
  ArrowRight,
  Sun,
  Moon,
} from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Project Management for Remote Teams | Whatstask",
  description:
    "Async-first project management for distributed teams. Collaborate across time zones with Telegram-based task management that works when you do.",
  keywords:
    "remote team project management, async collaboration, distributed team tools, remote work telegram, timezone management",
  openGraph: {
    title: "Project Management for Remote Teams | Whatstask",
    description:
      "Async-first collaboration for distributed teams across any timezone.",
    url: "https://www.whatstask.com/solutions/remote",
    siteName: "Whatstask",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Management for Remote Teams | Whatstask",
    description: "Async-first collaboration for distributed teams.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/solutions/remote",
  },
}

export default function RemoteSolutionPage() {
  const features = [
    {
      title: "Works Across Time Zones",
      description:
        "Team in Tokyo, London, and New York? Whatstask shows deadlines in everyone's local time automatically.",
    },
    {
      title: "Async-First Communication",
      description:
        "Leave updates, comments, and context on tasks. Your team catches up when they come online.",
    },
    {
      title: "Smart Notifications",
      description:
        "Get notified in Telegram when you're mentioned or tasks update. No need to check another app.",
    },
    {
      title: "Time Tracking",
      description:
        "Track hours worked across the team. See who's working when and manage capacity fairly.",
    },
    {
      title: "Clear Ownership",
      description:
        "Every task has an owner. No confusion about who's responsible when you can't tap someone on the shoulder.",
    },
    {
      title: "Deadline Visibility",
      description:
        "Calendar and timeline views show what's coming up. Plan handoffs between team members in different zones.",
    },
  ]

  const asyncBenefits = [
    {
      title: "No More Sync Meetings",
      description: "Update tasks with context so meetings become optional, not mandatory.",
    },
    {
      title: "Work When You're Productive",
      description: "Night owl or early bird? Work when you do your best work.",
    },
    {
      title: "Documentation Built-In",
      description: "Task history and comments create automatic documentation.",
    },
    {
      title: "Respect Everyone's Time",
      description: "No 6am calls. No midnight Slacks. Just tasks that wait for you.",
    },
  ]

  const timezones = [
    { city: "San Francisco", time: "6:00 AM", status: "starting" },
    { city: "New York", time: "9:00 AM", status: "working" },
    { city: "London", time: "2:00 PM", status: "working" },
    { city: "Tokyo", time: "11:00 PM", status: "ending" },
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
            { label: "Solutions", href: "/solutions/remote" },
            { label: "Remote Teams", href: "/solutions/remote" },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-16 mt-8">
          <p className="text-sm text-slate-500 mb-6">For Remote Teams</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Async Collaboration That Actually Works
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Your team is spread across time zones. Your project management should embrace that, not
            fight it. Whatstask is built async-first for distributed teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                Start Free on Telegram
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300">
              <Link href="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Timezone Visualization */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-8">Your Team, Across the World</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {timezones.map((tz, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-black/30">
                <div className="mb-2">
                  {tz.status === "starting" && <Sun className="h-6 w-6 text-orange-400 mx-auto" />}
                  {tz.status === "working" && <Sun className="h-6 w-6 text-yellow-400 mx-auto" />}
                  {tz.status === "ending" && <Moon className="h-6 w-6 text-purple-400 mx-auto" />}
                </div>
                <p className="text-2xl font-bold">{tz.time}</p>
                <p className="text-sm text-slate-600">{tz.city}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 mt-6 text-sm">
            Whatstask shows deadlines in each team member's local timezone automatically.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Built for Distributed Teams</h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          No more timezone math. No more "did you see my message?" Just work that flows.
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

      {/* Async Benefits */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">The Async Advantage</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {asyncBenefits.map((benefit, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Async Works */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Async Handoffs Work</h2>
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <p className="text-slate-700 mb-2">
                <span className="font-semibold">1. Sarah (SF) at 5pm:</span> Completes the design mockups
              </p>
              <p className="text-sm text-slate-500">Updates task with notes: "Ready for dev. Used the new color palette. Questions? Leave a comment."</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <p className="text-slate-700 mb-2">
                <span className="font-semibold">2. Alex (London) at 9am:</span> Sees the notification, starts implementing
              </p>
              <p className="text-sm text-slate-500">Everything needed is in the task. No need to schedule a call.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <p className="text-slate-700 mb-2">
                <span className="font-semibold">3. Yuki (Tokyo) at 6pm:</span> Reviews the implementation, ships to staging
              </p>
              <p className="text-sm text-slate-500">When Sarah wakes up, it's already live for testing. 24-hour progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Telegram Advantage */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Telegram for Remote Teams?</h2>
            <ul className="space-y-4">
              {[
                "800M+ users worldwide - your team is already there",
                "Works on any device, any network, any country",
                "Fast even on slow connections",
                "No VPN issues, no corporate firewalls",
                "End-to-end encryption for sensitive projects",
              ].map((item, index) => (
                <li key={index} className="text-slate-700">• {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center">
            <p className="text-5xl font-bold text-slate-900 mb-2">800M+</p>
            <p className="text-slate-600 mb-6">Telegram users worldwide</p>
            <p className="text-5xl font-bold text-slate-900 mb-2">200+</p>
            <p className="text-slate-600">Countries with active users</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Go Async?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Join distributed teams who've found a better way to work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-violet-500 hover:bg-violet-600 text-white rounded-full px-8 py-6">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                Start Free in Telegram
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300">
              <Link href="/pricing" className="flex items-center gap-2">
                View Pricing
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
              <Link href="/solutions/marketing" className="hover:text-slate-900 transition-colors">Marketing Teams</Link>
              <Link href="/solutions/development" className="hover:text-slate-900 transition-colors">Development Teams</Link>
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
