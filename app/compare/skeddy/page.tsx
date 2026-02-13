import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Whatstask vs Skeddy: Best Telegram Task Bot Comparison [2026]",
  description:
    "Complete comparison: Whatstask Mini App vs Skeddy Telegram bot. Features, pricing, time tracking, team collaboration. Free comparison guide.",
  keywords:
    "whatstask vs skeddy, telegram task management bot, skeddy alternative, best telegram bot 2026, task bot comparison, time tracking telegram, team collaboration telegram",
  openGraph: {
    title: "Whatstask vs Skeddy: Which Telegram Task Bot is Better?",
    description:
      "Whatstask Mini App vs Skeddy: Compare features, pricing, UI/UX, natural language, PDF tools.",
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
    { category: "Platform Type", whatstask: "Full Mini App (complete modern UI/UX)", skeddy: "Bot (command-based interface)", winner: "whatstask" },
    { category: "Pricing", whatstask: "Free + $4.99/mo Pro", skeddy: "Free + $9.99/mo Premium", winner: "whatstask" },
    { category: "Time Tracking", whatstask: "Built-in (clock in/out, detailed reports)", skeddy: "Not available", winner: "whatstask" },
    { category: "Team Collaboration", whatstask: "3-tier roles (Admin/Manager/Employee) - Free", skeddy: "Limited (Premium only)", winner: "whatstask" },
    { category: "Multi-Company Workspaces", whatstask: "Unlimited companies/projects", skeddy: "Not available", winner: "whatstask" },
    { category: "Subtasks & Checklists", whatstask: "Full nested subtasks with progress", skeddy: "Limited subtask support", winner: "whatstask" },
    { category: "Analytics Dashboard", whatstask: "Personal & team productivity metrics", skeddy: "Basic stats only", winner: "whatstask" },
    { category: "PDF Tools Included", whatstask: "Yes (merge, compress, convert) - Free", skeddy: "Not available", winner: "whatstask" },
    { category: "Natural Language Processing", whatstask: "AI-powered (understands context)", skeddy: "Basic parsing", winner: "whatstask" },
    { category: "Mobile Experience", whatstask: "Mini App in Telegram (responsive, fast)", skeddy: "Telegram bot (text-based)", winner: "whatstask" },
    { category: "Setup Time", whatstask: "Less than 30 seconds", skeddy: "~2 minutes", winner: "whatstask" },
    { category: "Recurring Tasks", whatstask: "Daily/Weekly/Monthly", skeddy: "Daily/Weekly/Monthly", winner: "tie" },
  ]

  const keyDifferences = [
    { title: "Better Value", skeddy: "$9.99/month Premium", whatstask: "$4.99/month Pro (50% cheaper)" },
    { title: "Time Tracking", skeddy: "Not available", whatstask: "Built-in with invoicing-ready reports" },
    { title: "Interface", skeddy: "Text-based bot commands", whatstask: "Modern Mini App with visual UI" },
  ]

  const whatstaskPros = [
    "50% cheaper pricing ($4.99 vs $9.99/mo)",
    "Built-in time tracking with invoicing",
    "AI-powered natural language understanding",
    "Free PDF tools (save $10-20/mo elsewhere)",
    "Unlimited team members on free plan",
    "Multi-company workspaces for freelancers",
    "Modern Mini App interface, not just commands",
    "Faster setup (30 seconds vs 2 minutes)",
    "Better analytics dashboard",
  ]

  const whatstaskCons = [
    "Newer product (but rapidly improving)",
    "Fewer third-party integrations (focus on Telegram)",
    "Some advanced integrations coming soon",
  ]

  const skeddyPros = [
    "Established user base (since 2019)",
    "Some third-party integrations available",
    "Familiar to existing Skeddy users",
  ]

  const skeddyCons = [
    "2x more expensive ($9.99 vs $4.99/mo)",
    "No built-in time tracking",
    "No PDF tools included",
    "Limited natural language support",
    "Text-based interface (not visual)",
    "Longer setup process",
    "Limited analytics",
    "Team features locked behind premium",
  ]

  return (
    <>
      <PageLoader />
      <Navigation variant="dark" />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        <main className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Comparison</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Whatstask vs Skeddy
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
              Comprehensive comparison of the two leading Telegram task management bots.
            </p>
          </section>

          {/* Quick Verdict */}
          <section className="mb-24">
            <div className="border border-white/10 rounded-2xl p-10 md:p-12">
              <div className="text-center mb-10">
                <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Quick Verdict</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Whatstask wins</h2>
              </div>
              <p className="text-neutral-400 leading-relaxed text-center mb-8 font-light max-w-3xl mx-auto">
                Whatstask is the clear winner for anyone wanting modern task management without friction.
                It's 50% cheaper, includes time tracking & PDF tools, and has a beautiful Mini App interface
                instead of command-based interaction.
              </p>
              <div className="border border-white/10 rounded-xl p-6 max-w-2xl mx-auto">
                <p className="text-white font-medium mb-3">Bottom Line:</p>
                <ul className="space-y-2">
                  {[
                    "Save $60/year per user compared to Skeddy",
                    "Built-in time tracking (Skeddy doesn't have this)",
                    "Free PDF tools included",
                    "AI understands natural language",
                    "Unlimited team members (even on free tier)",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                      <div className="w-1 h-1 rounded-full bg-neutral-500 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-neutral-500 text-sm mt-6 text-center">
                The only reason to choose Skeddy: if you already use it and want continuity.
              </p>
            </div>
          </section>

          {/* Key Differences */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Overview</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Why Whatstask wins</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {keyDifferences.map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 text-center"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-neutral-400 text-sm mb-2">Skeddy: {item.skeddy}</p>
                  <p className="text-white text-sm font-medium">Whatstask: {item.whatstask}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Feature Comparison Table */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Details</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Complete feature comparison</h2>
            </div>
            <div className="border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left p-6 font-semibold text-white">Feature</th>
                    <th className="text-center p-6 font-semibold text-white">Whatstask</th>
                    <th className="text-center p-6 font-medium text-neutral-400">Skeddy</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-white/5 last:border-0">
                      <td className="p-6 text-white">{row.category}</td>
                      <td className={`p-6 text-center ${row.winner === "whatstask" ? "text-white font-medium" : "text-neutral-400"}`}>
                        {row.whatstask}
                      </td>
                      <td className={`p-6 text-center ${row.winner === "skeddy" ? "text-white font-medium" : "text-neutral-400"}`}>
                        {row.skeddy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Pros & Cons */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Analysis</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Pros & cons</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Whatstask */}
              <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300">
                <h3 className="font-semibold text-white mb-6 text-xl">Whatstask</h3>
                <div className="mb-6">
                  <p className="text-sm font-medium text-white mb-3">Pros</p>
                  <ul className="space-y-2">
                    {whatstaskPros.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                        <div className="w-1 h-1 rounded-full bg-neutral-500 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-400 mb-3">Cons</p>
                  <ul className="space-y-2">
                    {whatstaskCons.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-neutral-500">
                        <div className="w-1 h-1 rounded-full bg-neutral-600 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Skeddy */}
              <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300">
                <h3 className="font-semibold text-neutral-400 mb-6 text-xl">Skeddy</h3>
                <div className="mb-6">
                  <p className="text-sm font-medium text-neutral-400 mb-3">Pros</p>
                  <ul className="space-y-2">
                    {skeddyPros.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-neutral-400">
                        <div className="w-1 h-1 rounded-full bg-neutral-600 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-500 mb-3">Cons</p>
                  <ul className="space-y-2">
                    {skeddyCons.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-neutral-500">
                        <div className="w-1 h-1 rounded-full bg-neutral-600 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Comparison */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Pricing comparison</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Whatstask</h3>
                  <span className="bg-violet-500/20 text-violet-300 text-xs px-3 py-1 rounded-full">Better Value</span>
                </div>
                <div className="mb-6">
                  <p className="text-4xl font-light text-white mb-1">$0</p>
                  <p className="text-neutral-400 text-sm mb-4">Free Forever Plan</p>
                  <p className="text-3xl font-light text-white mb-1">$4.99<span className="text-lg">/mo</span></p>
                  <p className="text-neutral-400 text-sm">Pro Plan</p>
                </div>
                <ul className="space-y-2">
                  {[
                    "Unlimited tasks (Free)",
                    "AI reminders (Pro)",
                    "Free PDF tools",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                      <div className="w-1 h-1 rounded-full bg-neutral-500 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300">
                <h3 className="text-xl font-semibold text-neutral-400 mb-6">Skeddy</h3>
                <div className="mb-6">
                  <p className="text-4xl font-light text-neutral-400 mb-1">$0</p>
                  <p className="text-neutral-500 text-sm mb-4">Basic Plan</p>
                  <p className="text-3xl font-light text-neutral-400 mb-1">$9.99<span className="text-lg">/mo</span></p>
                  <p className="text-neutral-500 text-sm">Premium Plan</p>
                </div>
                <ul className="space-y-2">
                  {[
                    "Limited tasks (Free)",
                    "Basic reminders",
                    "No PDF tools",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-400">
                      <div className="w-1 h-1 rounded-full bg-neutral-600 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Which Should You Choose? */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Decision</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Which should you choose?</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300">
                <h3 className="font-semibold text-white mb-4">Choose Whatstask if:</h3>
                <ul className="space-y-2">
                  {[
                    "You need a full Mini App interface (not just bot commands)",
                    "You want built-in time tracking for billing clients",
                    "You need team collaboration with roles and permissions",
                    "You manage multiple companies or client workspaces",
                    "You want unlimited team members on the free tier",
                    "You need analytics dashboards and productivity reports",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-300">
                      <div className="w-1 h-1 rounded-full bg-neutral-500 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300">
                <h3 className="font-semibold text-neutral-400 mb-4">Choose Skeddy if:</h3>
                <ul className="space-y-2">
                  {[
                    "You need many third-party integrations",
                    "You prefer an established product",
                    "Budget is not a concern",
                    "You don't need natural language processing",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-400">
                      <div className="w-1 h-1 rounded-full bg-neutral-600 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="border border-white/10 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to try Whatstask?</h2>
              <p className="text-neutral-400 mb-10 text-lg font-light">
                Start free today - no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    Start Free
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-lg px-8 py-6 border-white/20 hover:bg-white/5">
                  <Link href="/project-management">Learn More</Link>
                </Button>
              </div>
              <p className="text-sm text-neutral-500 mt-6">30 seconds to start</p>
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
