import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check, X, DollarSign, Zap, Users, Shield, Send } from "lucide-react"
import PageLoader from "@/components/page-loader"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Whatstask vs Skeddy: Best Telegram Task Bot Comparison [2025]",
  description:
    "Complete comparison: Whatstask Mini App vs Skeddy Telegram bot. Features, pricing, time tracking, team collaboration. Why Whatstask wins on friction, features & price. Free comparison guide.",
  keywords:
    "whatstask vs skeddy, telegram task management bot, skeddy alternative, best telegram bot 2025, task bot comparison, time tracking telegram, team collaboration telegram",
  openGraph: {
    title: "Whatstask vs Skeddy: Which Telegram Task Bot is Better? 2025",
    description:
      "Whatstask Mini App vs Skeddy: Compare features, pricing, UI/UX, natural language, PDF tools. Why WhatsTask wins for individuals and teams.",
    url: "https://www.whatstask.com/compare/skeddy",
    siteName: "Whatstask",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whatstask vs Skeddy: Which Telegram Bot is Better?",
    description: "Detailed comparison to help you choose the right Telegram task management bot.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/compare/skeddy",
  },
}

export default function WhatstaskVsSkeddyPage() {
  const comparison = [
    {
      category: "Platform Type",
      whatstask: "Full Mini App (complete modern UI/UX)",
      skeddy: "Bot (command-based interface)",
      winner: "whatstask",
      whyWhatstask: "Full Mini App feels like a native app, no command learning needed"
    },
    {
      category: "Pricing",
      whatstask: "Free + $4.99/mo Pro",
      skeddy: "Free + $9.99/mo Premium",
      winner: "whatstask",
      whyWhatstask: "50% cheaper - save $60/year per user"
    },
    {
      category: "Time Tracking",
      whatstask: "Built-in (clock in/out, detailed reports)",
      skeddy: "Not available (need external tool)",
      winner: "whatstask",
      whyWhatstask: "One-tap timer, automatic duration tracking, invoicing-ready reports"
    },
    {
      category: "Team Collaboration with Roles",
      whatstask: "3-tier roles (Admin/Manager/Employee) - Free",
      skeddy: "Limited (Premium only)",
      winner: "whatstask",
      whyWhatstask: "Full team management included in free tier"
    },
    {
      category: "Multi-Company Workspaces",
      whatstask: "Unlimited companies/projects",
      skeddy: "Not available",
      winner: "whatstask",
      whyWhatstask: "Perfect for freelancers & agencies managing multiple clients"
    },
    {
      category: "Subtasks & Checklists",
      whatstask: "Full nested subtasks with progress",
      skeddy: "Limited subtask support",
      winner: "whatstask",
      whyWhatstask: "Better for complex project management"
    },
    {
      category: "Analytics Dashboard",
      whatstask: "Personal & team productivity metrics",
      skeddy: "Basic stats only",
      winner: "whatstask",
      whyWhatstask: "Time tracking analytics, completion rates, team insights"
    },
    {
      category: "PDF Tools Included",
      whatstask: "Yes (merge, compress, convert) - Free",
      skeddy: "Not available",
      winner: "whatstask",
      whyWhatstask: "Save $10-20/month on separate PDF tool subscriptions"
    },
    {
      category: "Natural Language Processing",
      whatstask: "AI-powered (understands context)",
      skeddy: "Basic parsing",
      winner: "whatstask",
      whyWhatstask: "Type naturally, AI understands dates, priorities, context"
    },
    {
      category: "Mobile Experience",
      whatstask: "Mini App in Telegram (responsive, fast)",
      skeddy: "Telegram bot (text-based)",
      winner: "whatstask",
      whyWhatstask: "Visual interface, buttons, modern design"
    },
    {
      category: "Offline Mode",
      whatstask: "Yes (with auto-sync)",
      skeddy: "Limited",
      winner: "whatstask",
      whyWhatstask: "Works without internet, syncs when connection returns"
    },
    {
      category: "Setup Time",
      whatstask: "< 30 seconds",
      skeddy: "~2 minutes",
      winner: "whatstask",
      whyWhatstask: "Just add bot and open - no forms or configuration"
    },
    {
      category: "Recurring Tasks",
      whatstask: "Daily/Weekly/Monthly",
      skeddy: "Daily/Weekly/Monthly",
      winner: "tie",
    },
  ]

  const prosAndCons = {
    whatstask: {
      pros: [
        "50% cheaper pricing ($4.99 vs $9.99/mo)",
        "Built-in time tracking with invoicing",
        "AI-powered natural language understanding",
        "Free PDF tools (save $10-20/mo elsewhere)",
        "Unlimited team members on free plan",
        "Multi-company workspaces for freelancers",
        "Modern Mini App interface, not just commands",
        "Faster setup (30 seconds vs 2 minutes)",
        "Better analytics dashboard",
        "Offline mode with auto-sync",
      ],
      cons: [
        "Newer product (but rapidly improving)",
        "Fewer third-party integrations (focus on Telegram ecosystem)",
        "Some advanced integrations coming soon",
      ],
    },
    skeddy: {
      pros: [
        "Established user base (since 2019)",
        "Some third-party integrations available",
        "Familiar to existing Skeddy users",
      ],
      cons: [
        "2x more expensive ($9.99 vs $4.99/mo)",
        "No built-in time tracking",
        "No PDF tools included",
        "Limited natural language support",
        "Text-based interface (not visual)",
        "Manual time zone configuration",
        "Longer setup process",
        "Limited analytics",
        "Team features locked behind premium",
      ],
    },
  }

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

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Whatstask vs Skeddy: Which Telegram Bot is Better?
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Comprehensive comparison of the two leading Telegram task management bots. Updated for 2025.
            </p>
          </div>

          {/* Quick Verdict */}
          <div className="bg-gradient-to-br from-violet-500/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-violet-500/20 max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Zap className="h-6 w-6 text-violet-500" />
              Quick Verdict: Whatstask Wins
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              <strong className="text-violet-400">Whatstask is the clear winner</strong> for anyone wanting modern task management without friction. It's 50% cheaper, includes time tracking & PDF tools, and has a beautiful Mini App interface instead of command-based interaction.
            </p>
            <div className="bg-slate-50 rounded-lg p-4 mb-4 border border-slate-200">
              <p className="text-slate-700 mb-2"><strong>Bottom Line:</strong></p>
              <ul className="space-y-2 text-slate-700">
                <li>💰 Save $60/year per user compared to Skeddy</li>
                <li>⏱️ Built-in time tracking (Skeddy doesn't have this)</li>
                <li>📄 Free PDF tools included</li>
                <li>AI understands natural language</li>
                <li>👥 Unlimited team members (even on free tier)</li>
              </ul>
            </div>
            <p className="text-slate-600 text-sm">
              The only reason to choose Skeddy: if you already use it and want continuity. Otherwise, Whatstask is objectively better for teams and individuals.
            </p>
          </div>

          {/* Why Whatstask Wins Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Whatstask Wins in 2025</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
              <div className="bg-gradient-to-br from-violet-500/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-violet-500/20">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">💸</span>
                  Better Value (50% Cheaper)
                </h3>
                <p className="text-slate-700 mb-3">Whatstask Pro is $4.99/month vs Skeddy's $9.99/month</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>Done: Unlimited tasks (both)</li>
                  <li>Done: Time tracking (Whatstask only)</li>
                  <li>Done: Free PDF tools (Whatstask only)</li>
                  <li>Done: Team features free (Whatstask); paid (Skeddy)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-violet-500/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-violet-500/20">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">⏱️</span>
                  Built-in Time Tracking
                </h3>
                <p className="text-slate-700 mb-3">Track billable hours directly in the task app</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>Done: One-tap clock in/out</li>
                  <li>Done: Automatic duration calculation</li>
                  <li>Done: Invoicing-ready reports</li>
                  <li>Done: No external tool needed</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-violet-500/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-violet-500/20">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl"></span>
                  AI Understands Your Language
                </h3>
                <p className="text-slate-700 mb-3">Natural language processing that actually works</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>Done: Type: "meeting with Sarah tomorrow 2pm"</li>
                  <li>Done: AI extracts: task, person, date, time</li>
                  <li>Done: No special commands needed</li>
                  <li>Done: Detects priority from context</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-violet-500/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-violet-500/20">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  Modern Mini App vs Text Bot
                </h3>
                <p className="text-slate-700 mb-3">Whatstask feels like a real app, not a chatbot</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>Done: Visual interface with buttons</li>
                  <li>Done: Task cards and drag-and-drop</li>
                  <li>Done: Real-time status updates</li>
                  <li>Done: No learning curve</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Comparison Table */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Complete Feature Comparison</h2>
            <div className="bg-slate-50 backdrop-blur-lg rounded-2xl border border-slate-200 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="text-left p-4 font-bold">Feature</th>
                    <th className="text-center p-4 font-bold text-violet-400">Whatstask</th>
                    <th className="text-center p-4 font-bold">Skeddy</th>
                    <th className="text-left p-4 font-bold text-sm">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-200 last:border-0 hover:bg-slate-50 transition">
                      <td className="p-4 font-medium text-sm">{row.category}</td>
                      <td className={`p-4 text-center text-sm font-medium ${row.winner === "whatstask" ? "bg-violet-500/10" : ""}`}>
                        <div>{row.whatstask}</div>
                        {row.winner === "whatstask" && (
                          <span className="text-violet-400 text-xs mt-1 block">Done: Winner</span>
                        )}
                      </td>
                      <td className={`p-4 text-center text-sm font-medium ${row.winner === "skeddy" ? "bg-blue-500/10" : ""}`}>
                        <div>{row.skeddy}</div>
                        {row.winner === "skeddy" && (
                          <span className="text-blue-400 text-xs mt-1 block">Done: Winner</span>
                        )}
                      </td>
                      <td className="p-4 text-xs text-slate-600">{row.whyWhatstask || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Pros & Cons</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Whatstask Pros/Cons */}
              <div className="bg-slate-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Image src="/logo-black.png" alt="Whatstask Logo" width={24} height={24} className="h-6 w-6" />
                  Whatstask
                </h3>
                <div className="mb-6">
                  <h4 className="font-bold mb-3 text-green-400 flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {prosAndCons.whatstask.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-red-400 flex items-center gap-2">
                    <X className="h-5 w-5" />
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {prosAndCons.whatstask.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600">
                        <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Skeddy Pros/Cons */}
              <div className="bg-slate-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold mb-6">Skeddy</h3>
                <div className="mb-6">
                  <h4 className="font-bold mb-3 text-green-400 flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {prosAndCons.skeddy.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-red-400 flex items-center gap-2">
                    <X className="h-5 w-5" />
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {prosAndCons.skeddy.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600">
                        <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Breakdown */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Pricing Comparison</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-violet-500/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border-2 border-violet-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Whatstask</h3>
                  <span className="bg-violet-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                    Better Value
                  </span>
                </div>
                <div className="mb-6">
                  <div className="text-4xl font-extrabold mb-2">$0</div>
                  <div className="text-slate-600 mb-4">Free Forever Plan</div>
                  <div className="text-3xl font-extrabold mb-2">$4.99<span className="text-lg">/mo</span></div>
                  <div className="text-slate-600">Pro Plan</div>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Unlimited tasks (Free)
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    AI reminders (Pro)
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Free PDF tools
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold mb-4">Skeddy</h3>
                <div className="mb-6">
                  <div className="text-4xl font-extrabold mb-2">$0</div>
                  <div className="text-slate-600 mb-4">Basic Plan</div>
                  <div className="text-3xl font-extrabold mb-2">$9.99<span className="text-lg">/mo</span></div>
                  <div className="text-slate-600">Premium Plan</div>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Limited tasks (Free)
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    Basic reminders
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                    No PDF tools
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Use Case Recommendations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Which Should You Choose?</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-violet-500/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-violet-500/20">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="h-6 w-6 text-violet-500" />
                  Choose Whatstask if:
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You need a full Mini App interface (not just bot commands)
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You want built-in time tracking for billing clients
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You need team collaboration with roles and permissions
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You manage multiple companies or client workspaces
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You want unlimited team members on the free tier
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You need analytics dashboards and productivity reports
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-blue-500" />
                  Choose Skeddy if:
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You need many third-party integrations
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You prefer an established product
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Budget is not a concern
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    You don't need natural language
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-br from-violet-500/10 to-white/5 backdrop-blur-lg rounded-2xl p-12 border border-violet-500/20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Try Whatstask?</h2>
            <p className="text-xl text-slate-600 mb-8">
              Start free today - no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  <Send className="h-5 w-5 mr-2" />
                  Start Free
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300">
                <Link href="/project-management">Learn More</Link>
              </Button>
            </div>
            <p className="text-sm text-slate-500 mt-4">30 seconds to start</p>
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
          id="schema-faq-comparison"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is the main difference between Whatstask and Skeddy?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Whatstask offers better natural language processing, includes free PDF tools, and costs less ($4.99/mo vs $9.99/mo for premium). Skeddy has more third-party integrations but lacks AI-powered features and PDF tools.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which is cheaper: Whatstask or Skeddy?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Whatstask is significantly cheaper. The Pro plan costs $4.99/month compared to Skeddy's Premium at $9.99/month. Both offer free tiers, but Whatstask includes more features in the free plan.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I switch from Skeddy to Whatstask?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! You can start using Whatstask immediately by adding @whatstaskbot on Telegram. Both bots can coexist, so you can test Whatstask before fully switching from Skeddy.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Breadcrumb Schema */}
        <Script
          id="schema-breadcrumb-comparison"
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
                  name: "Compare",
                  item: "https://www.whatstask.com/compare",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Whatstask vs Skeddy",
                  item: "https://www.whatstask.com/compare/skeddy",
                },
              ],
            }),
          }}
        />
      </div>
    </>
  )
}
