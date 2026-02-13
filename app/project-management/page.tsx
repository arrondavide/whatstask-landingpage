import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Check,
  Zap,
  Clock,
  Users,
  BarChart3,
  List,
  Kanban,
  Calendar,
  GitBranch,
  Brain,
  ArrowRight,
} from "lucide-react"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Project Management - Simple, AI-Powered Task Management | Whatstask",
  description:
    "Project management that actually works. 4 views, free AI features, built-in time tracking. Works instantly in Telegram. For teams of any size - from freelancers to enterprises.",
  keywords: [
    "project management",
    "task management",
    "telegram project management",
    "AI task management",
    "simple project management",
    "team collaboration",
    "time tracking",
    "kanban board",
    "free project management",
    "clickup alternative",
    "monday alternative",
    "asana alternative",
  ],
  openGraph: {
    title: "Project Management - Simple, AI-Powered | Whatstask",
    description:
      "4 views. Free AI. Built-in time tracking. Works for 2 or 2000 people. The project management tool that gets out of your way.",
    url: "https://www.whatstask.com/project-management",
    siteName: "Whatstask",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Management - Simple Scales | Whatstask",
    description: "4 views. Free AI. No complexity. Project management for teams who want to work, not manage tools.",
  },
  alternates: {
    canonical: "https://www.whatstask.com/project-management",
  },
}

export default function ProjectManagementPage() {
  const features = [
    {
      icon: List,
      title: "List View",
      description: "Classic task list with priorities, due dates, and assignees. Sort, filter, and organize your way.",
    },
    {
      icon: Kanban,
      title: "Kanban Board",
      description: "Visual workflow management. Drag and drop tasks between columns. See progress at a glance.",
    },
    {
      icon: Calendar,
      title: "Calendar View",
      description: "See all deadlines in one place. Plan your week, month, or quarter. Never miss a due date.",
    },
    {
      icon: GitBranch,
      title: "Timeline / Gantt",
      description: "Plan projects with dependencies. Visualize timelines. Perfect for complex projects.",
    },
  ]

  const capabilities = [
    {
      icon: Brain,
      title: "Free AI Features",
      description:
        "Natural language task creation, smart suggestions, daily digest, and risk detection. No $28/user fees.",
      highlight: true,
    },
    {
      icon: Clock,
      title: "Built-in Time Tracking",
      description: "Clock in/out with one tap. Track hours per task. Generate reports. Bill clients accurately.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Assign tasks, manage roles (Admin/Manager/Employee), add comments, track progress together.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Personal and team productivity metrics. Time reports. Task completion trends.",
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "No app download. No signup forms. Open Telegram, start the bot, create your first task in 30 seconds.",
    },
    {
      icon: Users,
      title: "Multi-Company Workspaces",
      description: "Switch between multiple companies or projects. Perfect for freelancers and agencies.",
    },
  ]

  const comparison = [
    { feature: "List View", whatstask: true, clickup: true, monday: true, asana: true },
    { feature: "Kanban Board", whatstask: true, clickup: true, monday: true, asana: true },
    { feature: "Calendar View", whatstask: true, clickup: true, monday: true, asana: true },
    { feature: "Timeline/Gantt", whatstask: true, clickup: true, monday: "Paid", asana: true },
    { feature: "AI Task Creation", whatstask: "Free", clickup: "$28/user", monday: "$12/seat", asana: "Enterprise" },
    { feature: "Time Tracking", whatstask: "Built-in", clickup: true, monday: "Add-on", asana: "Add-on" },
    { feature: "Mobile-First", whatstask: true, clickup: false, monday: false, asana: false },
    { feature: "No App Download", whatstask: true, clickup: false, monday: false, asana: false },
    { feature: "Setup Time", whatstask: "30 seconds", clickup: "Days", monday: "Days", asana: "Days" },
  ]

  return (
    <>
      <PageLoader />
      <Navigation variant="dark" />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        <main className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Project Management</p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Project management that gets out of your way
            </h1>

            <p className="text-xl text-neutral-400 mb-4 leading-relaxed font-light">
              4 views. Free AI. Built-in time tracking. No complexity.
            </p>
            <p className="text-lg text-neutral-500 mb-10">
              Works for a 2-person startup or a 2000-person enterprise. Same simplicity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6 text-lg">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  Launch in Telegram
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 text-lg border-white/20 text-white hover:bg-white/10 bg-transparent">
                <Link href="/compare/clickup">Compare with ClickUp</Link>
              </Button>
            </div>
          </section>

          {/* The Problem */}
          <section className="mb-20">
            <div className="border border-white/10 rounded-2xl p-10 md:p-16 bg-white/5">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4 text-center">Philosophy</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
                Why we built this
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-red-400 mb-3">The Problem</h3>
                  <ul className="space-y-2 text-neutral-400">
                    <li>• ClickUp has 15+ views you'll never use</li>
                    <li>• Monday charges $12/seat for basic AI</li>
                    <li>• Asana takes weeks to set up properly</li>
                    <li>• Teams spend more time managing tools than working</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-violet-400 mb-3">Our Solution</h3>
                  <ul className="space-y-2 text-neutral-400">
                    <li>• 4 views that actually matter</li>
                    <li>• AI features included free</li>
                    <li>• Set up in 30 seconds, not 30 days</li>
                    <li>• Built for work, not for demos</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 4 Views */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Views</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">4 views. That's it.</h2>
              <p className="text-neutral-400 text-lg font-light">
                Every feature earns its place. If it doesn't help you finish work, it doesn't exist.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <feature.icon className="h-10 w-10 text-violet-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Capabilities */}
          <section className="mb-20 bg-[#111] -mx-4 px-4 py-16 md:-mx-8 md:px-8 rounded-2xl">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Capabilities</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything you need. Nothing you don't.</h2>
                <p className="text-neutral-400 text-lg font-light">
                  Full-featured doesn't have to mean complicated.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {capabilities.map((cap, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl p-6 border transition-all duration-300 ${
                      cap.highlight
                        ? "border-violet-500/50 bg-violet-500/10"
                        : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]"
                    }`}
                  >
                    <cap.icon className={`h-8 w-8 mb-4 ${cap.highlight ? "text-violet-400" : "text-neutral-400"}`} />
                    <h3 className="text-lg font-semibold text-white mb-2">{cap.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{cap.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Comparison</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See how we compare</h2>
              <p className="text-neutral-400 text-lg font-light">
                Same features. Less complexity. Better price.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl overflow-hidden overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left p-4 font-semibold text-white">Feature</th>
                    <th className="text-center p-4 font-semibold text-violet-400">Whatstask</th>
                    <th className="text-center p-4 font-medium text-neutral-500">ClickUp</th>
                    <th className="text-center p-4 font-medium text-neutral-500">Monday</th>
                    <th className="text-center p-4 font-medium text-neutral-500">Asana</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-white/5 last:border-0">
                      <td className="p-4 font-medium text-neutral-300">{row.feature}</td>
                      <td className="p-4 text-center">
                        {row.whatstask === true ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-white font-medium">{row.whatstask}</span>
                        )}
                      </td>
                      <td className="p-4 text-center text-neutral-500">
                        {row.clickup === true ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : row.clickup === false ? (
                          <span className="text-neutral-600">-</span>
                        ) : (
                          <span>{row.clickup}</span>
                        )}
                      </td>
                      <td className="p-4 text-center text-neutral-500">
                        {row.monday === true ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : row.monday === false ? (
                          <span className="text-neutral-600">-</span>
                        ) : (
                          <span>{row.monday}</span>
                        )}
                      </td>
                      <td className="p-4 text-center text-neutral-500">
                        {row.asana === true ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : row.asana === false ? (
                          <span className="text-neutral-600">-</span>
                        ) : (
                          <span>{row.asana}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-8">
              <Link href="/compare/clickup" className="inline-flex items-center gap-2 text-neutral-400 text-sm hover:text-white transition-colors">
                See full comparison <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* Who It's For */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Use Cases</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for everyone</h2>
              <p className="text-neutral-400 text-lg font-light">
                Same tool. Same simplicity. Any team size.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Freelancers",
                  description: "Track projects, log hours, manage multiple clients. All in one place.",
                  href: "/use-cases/freelancers",
                },
                {
                  title: "Small Teams",
                  description: "Collaborate without complexity. Assign tasks, track progress, stay aligned.",
                  href: "/use-cases/startups",
                },
                {
                  title: "Enterprises",
                  description: "Scale without bloat. Custom solutions available for specific needs.",
                  href: "/enterprise",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 group"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-4">{item.description}</p>
                  <span className="text-neutral-500 text-sm inline-flex items-center gap-2 group-hover:text-white transition-colors">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="border border-violet-500/30 bg-violet-500/10 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to simplify?</h2>
              <p className="text-neutral-300 mb-10 text-lg font-light">
                No credit card. No signup forms. Just open Telegram and start working.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6 text-lg">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    Start Free in Telegram
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 py-6 text-lg border-white/20 text-white hover:bg-white/10 bg-transparent">
                  <Link href="/contact">Talk to Sales</Link>
                </Button>
              </div>

              <p className="text-sm text-neutral-500 mt-6">
                Need custom solutions?{" "}
                <Link href="/enterprise" className="text-violet-400 hover:underline">
                  Explore enterprise options
                </Link>
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
          </div>
        </footer>
      </div>

      {/* Schema Markup */}
      <Script
        id="schema-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Whatstask Project Management",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Project Management Software",
            operatingSystem: "Telegram Mini App, Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description:
              "Simple project management with 4 views, free AI features, and built-in time tracking. Works instantly in Telegram.",
            featureList: [
              "List View",
              "Kanban Board",
              "Calendar View",
              "Timeline/Gantt",
              "Free AI Task Creation",
              "Built-in Time Tracking",
              "Team Collaboration",
              "Multi-Company Workspaces",
            ],
          }),
        }}
      />

      <Script
        id="schema-breadcrumb"
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
                name: "Project Management",
                item: "https://www.whatstask.com/project-management",
              },
            ],
          }),
        }}
      />
    </>
  )
}
