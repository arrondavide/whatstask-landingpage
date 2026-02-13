import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Task Management for Freelancers - Telegram Bot | Whatstask",
  description:
    "Manage client projects, deadlines, and invoices in Telegram. Perfect for freelancers who need simple task management without complex tools. Free to start.",
  keywords:
    "freelancer task management, telegram for freelancers, freelance productivity tools, client task tracking, freelancer telegram bot",
  openGraph: {
    title: "Task Management for Freelancers - Telegram Bot | Whatstask",
    description: "Manage clients, projects, and deadlines right in Telegram. Built for busy freelancers.",
    url: "https://www.whatstask.com/use-cases/freelancers",
    siteName: "Whatstask",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Task Management for Freelancers | Whatstask",
    description: "Simple task management for freelancers - all inside Telegram.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/use-cases/freelancers",
  },
}

export default function FreelancersPage() {
  const benefits = [
    {
      title: "No App Switching",
      description:
        "Manage tasks while chatting with clients in Telegram. No need to jump between apps - everything in one place.",
    },
    {
      title: "Quick Task Capture",
      description:
        'Client mentions a deadline? Type "Submit design by Friday 5pm" and Whatstask sets it up instantly.',
    },
    {
      title: "Free PDF Tools",
      description:
        "Merge invoices, compress portfolios, convert documents - all included. No separate subscriptions needed.",
    },
    {
      title: "Client-Specific Categories",
      description:
        "Organize tasks by client automatically. See all work for Client A in one view, Client B in another.",
    },
    {
      title: "Affordable Pricing",
      description: "Free forever for basic features. Pro at $4.99/mo - cheaper than coffee. No enterprise upsells.",
    },
    {
      title: "Share with Clients",
      description:
        "Need client approval? Share tasks directly in Telegram. They don't even need Whatstask installed.",
    },
  ]

  const workflows = [
    {
      scenario: "Client Request During Chat",
      problem: "Client asks for changes while you're messaging - easy to forget details",
      solution:
        'In the same Telegram chat, open Whatstask and type: "Update landing page header for ClientX by tomorrow". Done.',
    },
    {
      scenario: "Multiple Project Deadlines",
      problem: "Juggling 5 clients with overlapping deadlines causes stress",
      solution:
        'Type "/upcoming" in Whatstask to see the next 7 days of deadlines across all clients. Prioritize instantly.',
    },
    {
      scenario: "Invoice + Reminder Workflow",
      problem: "Need to send invoice and remember to follow up if not paid",
      solution:
        "Merge invoice PDFs in Whatstask web tools, create task: Remind to follow up on invoice in 7 days.",
    },
    {
      scenario: "Time Zone Confusion",
      problem: "International clients = timezone headaches for meetings",
      solution:
        'Say "Call with London client at 3pm their time". Whatstask auto-converts to your timezone.',
    },
  ]

  const comparisons = [
    {
      title: "Notion / Asana",
      description: "Too complex for freelancers. You need tasks done, not project management frameworks. Plus, they cost $10-20/mo for features you won't use.",
    },
    {
      title: "Pen & Paper",
      description: "Can't set reminders, no cross-device sync, easy to lose. Great for brainstorming, terrible for tracking client deadlines.",
    },
    {
      title: "Todoist / TickTick",
      description: "Good apps, but require switching contexts. Whatstask lives where you already work - in Telegram with your clients.",
    },
  ]

  return (
    <>
      <PageLoader />
      <Navigation variant="dark" />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        <main className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">For Freelancers</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Manage clients without leaving Telegram
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light mb-10">
              You're already chatting with clients in Telegram. Why not manage your tasks there too?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  Start Free
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-lg px-8 py-6 border-white/20 hover:bg-white/5">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
            <p className="text-sm text-neutral-400 mt-4">Free forever · No credit card · Setup in 60 seconds</p>
          </section>

          {/* Benefits */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Features</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why freelancers love Whatstask</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Workflows */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Real Workflows</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Freelancer problems, solved</h2>
            </div>
            <div className="space-y-4">
              {workflows.map((workflow, idx) => (
                <div
                  key={idx}
                  className="border border-white/10 rounded-xl p-6 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">{workflow.scenario}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">The problem</p>
                      <p className="text-neutral-300 text-sm">{workflow.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-violet-400 mb-2">With Whatstask</p>
                      <p className="text-neutral-300 text-sm">{workflow.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparisons */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Comparison</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why not just use...</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {comparisons.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-white/10 rounded-xl p-6 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <h3 className="font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Built for freelance budgets</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-2">Free Plan</h3>
                <p className="text-4xl font-light text-white mb-6">$0</p>
                <ul className="space-y-3 mb-6">
                  {["Unlimited tasks", "Natural language input", "Smart reminders", "Free PDF tools"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                      <div className="w-1 h-1 rounded-full bg-neutral-500 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-neutral-400">Perfect for starting out</p>
              </div>
              <div className="border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-2">Pro Plan</h3>
                <p className="text-4xl font-light text-white mb-6">$4.99<span className="text-lg text-neutral-400">/month</span></p>
                <ul className="space-y-3 mb-6">
                  {["Everything in Free", "AI-powered suggestions", "Advanced analytics", "Priority support"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                      <div className="w-1 h-1 rounded-full bg-neutral-500 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-neutral-400">For serious freelancers</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="border border-white/10 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start managing clients smarter</h2>
              <p className="text-neutral-400 mb-10 text-lg font-light">
                Join freelancers who simplified their workflows with Whatstask.
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
              <p className="text-sm text-neutral-400 mt-4">30 seconds to start · No credit card required</p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-neutral-400">
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
          </div>
        </footer>

        {/* FAQ Schema */}
        <Script
          id="schema-faq-freelancers"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is Whatstask good for freelancers?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! Whatstask is perfect for freelancers because it lives in Telegram where you already chat with clients. You can manage tasks, set deadlines, and use PDF tools without app switching. The free plan includes unlimited tasks.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does Whatstask cost for freelancers?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Whatstask is free forever for basic features. Pro costs $4.99/month and includes AI suggestions, analytics, and priority support - much cheaper than enterprise tools like Asana or Monday.com.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I organize tasks by client in Whatstask?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! You can create categories for each client and organize all their tasks separately. This makes it easy to see all work for a specific client in one view.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Breadcrumb Schema */}
        <Script
          id="schema-breadcrumb-freelancers"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.whatstask.com" },
                { "@type": "ListItem", position: 2, name: "Use Cases", item: "https://www.whatstask.com/use-cases" },
                { "@type": "ListItem", position: 3, name: "For Freelancers", item: "https://www.whatstask.com/use-cases/freelancers" },
              ],
            }),
          }}
        />
      </div>
    </>
  )
}
