import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, Clock, DollarSign, Users, Zap, FileText, Calendar, MessageSquare, Send } from "lucide-react"
import PageLoader from "@/components/page-loader"
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
      icon: <Zap className="h-8 w-8" />,
      title: "No App Switching",
      description:
        "Manage tasks while chatting with clients in Telegram. No need to jump between apps - everything in one place.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Quick Task Capture",
      description:
        'Client mentions a deadline? Type "Submit design by Friday 5pm" and Whatstask sets it up instantly.',
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Free PDF Tools",
      description:
        "Merge invoices, compress portfolios, convert documents - all included. No separate subscriptions needed.",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Client-Specific Categories",
      description:
        "Organize tasks by client automatically. See all work for Client A in one view, Client B in another.",
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Affordable Pricing",
      description: "Free forever for basic features. Pro at $4.99/mo - cheaper than coffee. No enterprise upsells.",
    },
    {
      icon: <Users className="h-8 w-8" />,
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
        'In the same Telegram chat, open Whatstask and type: "Update landing page header for ClientX by tomorrow". Done. No context switching.',
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
        "Merge invoice PDFs in Whatstask web tools, create task: Remind to follow up on invoice in 7 days. All in one tool.",
    },
    {
      scenario: "Time Zone Confusion",
      problem: "International clients = timezone headaches for meetings",
      solution:
        'Say "Call with London client at 3pm their time". Whatstask auto-converts to your timezone. Never miss a call.',
    },
  ]

  return (
    <>
      <PageLoader />
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
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-violet-400 text-sm font-medium">For Freelancers</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Manage Clients & Deadlines Without Leaving Telegram
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              You're already chatting with clients in Telegram. Why not manage your tasks there too? Whatstask keeps
              your freelance workflow simple and focused.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-violet-500 text-white hover:bg-violet-700 rounded-full px-8 py-6">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  Start Free on Telegram
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-4">Free forever • No credit card • Setup in 60 seconds</p>
          </div>

          {/* Benefits Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Freelancers Love Whatstask</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all"
                >
                  <div className="text-violet-500 mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Real Workflows */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Freelancer Workflows That Just Work</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {workflows.map((workflow, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all"
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-violet-500" />
                    {workflow.scenario}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-red-400 font-medium">Problem: </span>
                      <span className="text-slate-600">{workflow.problem}</span>
                    </div>
                    <div>
                      <span className="text-green-400 font-medium">With Whatstask: </span>
                      <span className="text-slate-700">{workflow.solution}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Example Day */}
          <div className="mb-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">A Day in the Life</h2>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-slate-200">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-violet-500 font-mono text-sm whitespace-nowrap">8:00 AM</div>
                  <div>
                    <p className="text-slate-700">Check today's tasks: <code className="bg-black/40 px-2 py-1 rounded text-violet-400 text-sm">/today</code></p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-violet-500 font-mono text-sm whitespace-nowrap">10:30 AM</div>
                  <div>
                    <p className="text-slate-700">
                      Client messages: "Can you update the homepage?" → Immediately add task without leaving chat
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-violet-500 font-mono text-sm whitespace-nowrap">2:00 PM</div>
                  <div>
                    <p className="text-slate-700">Merge 3 invoices using Whatstask PDF tools → Send to client</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-violet-500 font-mono text-sm whitespace-nowrap">4:00 PM</div>
                  <div>
                    <p className="text-slate-700">
                      Create recurring task: "Send weekly progress update every Friday 9am"
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-violet-500 font-mono text-sm whitespace-nowrap">6:00 PM</div>
                  <div>
                    <p className="text-slate-700">Mark completed tasks, check upcoming deadlines for tomorrow</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-slate-600 italic">
                  Total time spent on task management: <strong className="text-white">Less than 5 minutes</strong>.
                  Zero app switching. Zero friction.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison with Alternatives */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Not Just Use...</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-slate-50 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold mb-3">Notion / Asana</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Too complex for freelancers. You need tasks done, not project management frameworks. Plus, they
                  cost $10-20/mo for features you won't use.
                </p>
              </div>

              <div className="bg-slate-50 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold mb-3">Pen & Paper</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Can't set reminders, no cross-device sync, easy to lose. Great for brainstorming, terrible for
                  tracking client deadlines.
                </p>
              </div>

              <div className="bg-slate-50 backdrop-blur-lg rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold mb-3">Todoist / TickTick</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Good apps, but require switching contexts. Whatstask lives where you already work - in Telegram
                  with your clients.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial-style section */}
          <div className="mb-20 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-violet-500/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-violet-500/20">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4"></div>
                <h3 className="text-2xl font-bold mb-4">The Freelancer's Dream Workflow</h3>
              </div>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  "As a freelance designer with 8 active clients, I live in Telegram. Whatstask means I never lose
                  track of a deadline because I can add tasks <strong>in the moment</strong> - right when a client
                  mentions something."
                </p>
                <p>
                  "The PDF tools are a game-changer. I merge invoices, compress portfolios for email, and convert
                  design files without opening separate apps. Everything I need is <strong>right there</strong>."
                </p>
                <p>
                  "Best part? It's <strong>$4.99/month</strong> for Pro features. I've saved hundreds compared to
                  premium project management tools I never fully used."
                </p>
              </div>
            </div>
          </div>

          {/* Pricing for Freelancers */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Pricing Built for Freelance Budgets</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold mb-4">Free Plan</h3>
                <div className="text-4xl font-extrabold mb-6">$0</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Unlimited tasks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Natural language input</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Smart reminders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Free PDF tools</span>
                  </li>
                </ul>
                <p className="text-sm text-slate-600">Perfect for starting out or light freelance work</p>
              </div>

              <div className="bg-gradient-to-br from-violet-500/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border-2 border-violet-500/20 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Recommended
                </div>
                <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
                <div className="text-4xl font-extrabold mb-6">
                  $4.99<span className="text-lg text-slate-600">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Everything in Free</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>AI-powered task suggestions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <p className="text-sm text-slate-600">For serious freelancers managing multiple clients</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-br from-violet-500/10 to-white/5 backdrop-blur-lg rounded-2xl p-12 border border-violet-500/20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Managing Clients Smarter</h2>
            <p className="text-xl text-slate-600 mb-8">
              Join freelancers who simplified their workflows with Whatstask. Free to start, upgrade
              anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6 text-lg">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  <Send className="h-5 w-5 mr-2" />
                  Start Free
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300">
                <Link href="/pricing">See Pricing</Link>
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-4">30 seconds to start • No credit card required</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-100 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-slate-500">
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
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.whatstask.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Use Cases",
                  item: "https://www.whatstask.com/use-cases",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "For Freelancers",
                  item: "https://www.whatstask.com/use-cases/freelancers",
                },
              ],
            }),
          }}
        />
      </div>
    </>
  )
}
