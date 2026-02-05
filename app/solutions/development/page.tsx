import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Send,
  ArrowRight,
  CheckCircle2,
  Code,
  GitBranch,
  Bug,
  Rocket,
  Clock,
  Users,
  Zap,
  Target,
  Repeat,
  Terminal,
} from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Project Management for Development Teams | Whatstask",
  description:
    "Manage sprints, track bugs, and ship features faster. Simple project management for dev teams who prefer Telegram over heavyweight tools.",
  keywords:
    "developer project management, agile task management, sprint planning tool, bug tracking telegram, dev team collaboration",
  openGraph: {
    title: "Project Management for Development Teams | Whatstask",
    description:
      "Sprint planning, bug tracking, and feature shipping - all in Telegram.",
    url: "https://www.whatstask.com/solutions/development",
    siteName: "Whatstask",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Management for Development Teams | Whatstask",
    description: "Simple project management for dev teams.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/solutions/development",
  },
}

export default function DevelopmentSolutionPage() {
  const features = [
    {
      icon: <Repeat className="h-8 w-8" />,
      title: "Sprint Planning",
      description:
        "Plan sprints with backlog grooming, story points, and velocity tracking. Kanban boards adapt to your workflow.",
    },
    {
      icon: <Bug className="h-8 w-8" />,
      title: "Bug Tracking",
      description:
        "Track bugs with severity, assignees, and status. Link issues to features and never lose context.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Roadmap Planning",
      description:
        "Plan features, set milestones, and track progress. Timeline view shows dependencies at a glance.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Time Tracking",
      description:
        "Track development time per task, feature, or project. Export reports for standups and retrospectives.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Coordination",
      description:
        "Assign tasks, share updates, and @mention teammates. Everyone stays aligned without meetings.",
    },
    {
      icon: <Terminal className="h-8 w-8" />,
      title: "Developer-Friendly",
      description:
        "Works where you already are - Telegram. No heavy desktop app, no browser tabs, just chat-based productivity.",
    },
  ]

  const workflows = [
    {
      title: "Agile Sprint Workflow",
      steps: [
        "Create sprint with tasks from backlog",
        "Assign story points and owners",
        "Track progress through Kanban",
        "Run retrospective with completed items",
      ],
    },
    {
      title: "Bug Triage Process",
      steps: [
        "Log bug with severity and steps to reproduce",
        "Assign to developer for investigation",
        "Link to related feature or sprint",
        "Track through fix, review, and deploy",
      ],
    },
    {
      title: "Feature Development",
      steps: [
        "Break feature into subtasks",
        "Set dependencies and deadlines",
        "Track development progress",
        "Coordinate testing and release",
      ],
    },
  ]

  const whySwitch = [
    {
      problem: "Jira is too complex",
      solution: "4 views instead of 40. Simple boards that just work.",
    },
    {
      problem: "Too many tools",
      solution: "Telegram is already open. No extra apps to manage.",
    },
    {
      problem: "Setup takes forever",
      solution: "Start a sprint in 30 seconds. No training required.",
    },
    {
      problem: "Expensive per-seat pricing",
      solution: "Free to start. Pro is $4.99/user. That's it.",
    },
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
            { label: "Solutions", href: "/solutions/development" },
            { label: "Development Teams", href: "/solutions/development" },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-16 mt-8">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <Code className="h-4 w-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">For Development Teams</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Ship Faster Without the Overhead
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            You don't need another heavyweight tool. Whatstask gives dev teams sprint planning, bug
            tracking, and collaboration—right in Telegram where you're already working.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                Start Free on Telegram
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300">
              <Link href="/templates">View Dev Templates</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Everything Dev Teams Need</h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Sprint planning, bug tracking, and team coordination without the enterprise bloat.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-blue-500/30 transition-colors"
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflows */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Development Workflows</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {workflows.map((workflow, index) => (
            <div key={index} className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <GitBranch className="h-6 w-6 text-blue-400" />
                <h3 className="text-xl font-semibold">{workflow.title}</h3>
              </div>
              <ol className="space-y-4">
                {workflow.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-sm flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-slate-700 text-sm">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* Why Switch */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Why Dev Teams Switch to Whatstask</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whySwitch.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-black/30 rounded-xl p-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center">
                  ✕
                </div>
                <div>
                  <p className="text-slate-600 line-through mb-2">{item.problem}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5" />
                    <p className="text-white">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Block Style Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Start a Sprint in Seconds</h2>
          <div className="bg-gray-900 rounded-2xl p-6 font-mono text-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-4 text-slate-500">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="ml-2">Telegram</span>
            </div>
            <div className="space-y-2">
              <p><span className="text-blue-400">You:</span> Create sprint "v2.0 Release"</p>
              <p><span className="text-green-400">Whatstask:</span> Done: Sprint created! Add tasks or import from backlog?</p>
              <p><span className="text-blue-400">You:</span> Add "Implement auth flow" @sarah</p>
              <p><span className="text-green-400">Whatstask:</span> Done: Task added, assigned to Sarah</p>
              <p><span className="text-blue-400">You:</span> Add "Fix login bug" priority:high</p>
              <p><span className="text-green-400">Whatstask:</span> Done: High priority bug added to sprint</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Ship Faster?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Join dev teams who've ditched heavyweight tools for Whatstask's simple approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-violet-500 hover:bg-violet-600 text-white rounded-full px-8 py-6">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                Start Free in Telegram
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300">
              <Link href="/compare/clickup" className="flex items-center gap-2">
                Compare to ClickUp
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
