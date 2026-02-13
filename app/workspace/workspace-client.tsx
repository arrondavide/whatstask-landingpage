"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Clock, LayoutGrid, Users, Zap, BarChart3, MessageSquare, Calendar, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function WorkspaceClient() {
  const features = [
    {
      icon: LayoutGrid,
      title: "Kanban Boards",
      description: "Visual task boards with drag-and-drop. Organize work by status, priority, or custom columns.",
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Track time spent on tasks with one tap. Generate reports for billing or productivity analysis.",
    },
    {
      icon: Zap,
      title: "AI Task Creation",
      description: "Describe what needs to be done in natural language. AI creates structured tasks with due dates and assignments.",
    },
    {
      icon: BarChart3,
      title: "Team Analytics",
      description: "See who's doing what. Track completion rates, response times, and team workload at a glance.",
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Invite team members via Telegram. Assign roles, set permissions, manage access.",
    },
    {
      icon: Calendar,
      title: "Due Dates & Reminders",
      description: "Set deadlines that actually work. Automatic reminders in Telegram when tasks are due.",
    },
  ]

  const workflowSteps = [
    {
      step: "1",
      title: "Create a workspace",
      description: "Start the bot, create a workspace in seconds. Invite your team via Telegram link.",
    },
    {
      step: "2",
      title: "Add tasks",
      description: "Type tasks naturally or use AI to generate them. Set due dates, priorities, and assignees.",
    },
    {
      step: "3",
      title: "Work together",
      description: "Team members receive assignments in Telegram. Update status, add notes, track time — all in chat.",
    },
    {
      step: "4",
      title: "Track progress",
      description: "View dashboards, completion rates, and team analytics. Export reports when needed.",
    },
  ]

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white">
      <Navigation variant="dark" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.12),transparent)]" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center">
            <p className="text-sm text-violet-400 uppercase tracking-widest mb-4">Whatstask Workspace</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              Complete PM tool
              <br />
              <span className="text-neutral-400">inside Telegram</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Don't use another PM tool? Whatstask is a full-featured workspace.
              Kanban boards, time tracking, AI tasks, team analytics — all without leaving Telegram.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button asChild className="bg-white text-black hover:bg-neutral-100 rounded-full px-8 py-6 text-base font-semibold">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Start Free Workspace
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base bg-transparent">
                <Link href="/pm-connect">
                  Already have a PM tool?
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Free during early access
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                No app to download
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Works in Telegram
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 bg-[#111]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm text-neutral-500 uppercase tracking-widest mb-4">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Everything you need to manage work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm text-neutral-500 uppercase tracking-widest mb-4">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Set up in minutes, not days
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {workflowSteps.map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 text-violet-400 font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Telegram Section */}
      <section className="py-24 px-4 bg-[#111]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-violet-400 uppercase tracking-widest mb-4">Why Telegram?</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your team already uses Telegram.
                <br />Meet them there.
              </h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Most PM tools fail because workers don't log in. Telegram is where your team
                already communicates. Tasks arrive as messages. Updates happen in chat.
                No new app to download, no new login to remember.
              </p>

              <div className="space-y-3">
                {[
                  "No app download required",
                  "Works on any device with Telegram",
                  "Notifications you actually see",
                  "Reply to tasks from the chat",
                  "Share files, photos, voice notes",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-violet-400" />
                    </div>
                    <span className="text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl border border-white/10 p-8">
              <div className="space-y-4">
                {/* Simulated Telegram message */}
                <div className="bg-violet-500/10 rounded-xl p-4 border border-violet-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-violet-500/30 flex items-center justify-center">
                      <Image src="/logo.png" alt="Whatstask" width={20} height={20} />
                    </div>
                    <span className="font-medium text-white">Whatstask</span>
                    <span className="text-xs text-neutral-500">10:32 AM</span>
                  </div>
                  <p className="text-neutral-300 text-sm">
                    <span className="font-medium text-white">New task assigned:</span> Complete quarterly report
                  </p>
                  <p className="text-xs text-neutral-500 mt-2">Due: Tomorrow 5:00 PM</p>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-2 px-4 bg-green-500/20 text-green-400 rounded-lg text-sm font-medium">
                    Start Task
                  </button>
                  <button className="flex-1 py-2 px-4 bg-white/10 text-neutral-300 rounded-lg text-sm font-medium">
                    View Details
                  </button>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center text-blue-400 text-xs font-bold">
                      JD
                    </div>
                    <span className="font-medium text-white">You</span>
                    <span className="text-xs text-neutral-500">10:34 AM</span>
                  </div>
                  <p className="text-neutral-300 text-sm">Started working on it!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm text-neutral-500 uppercase tracking-widest mb-4">Choose Your Path</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Workspace vs PM Connect
            </h2>
            <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
              Not sure which to use? Here's a quick comparison.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Workspace Card */}
            <div className="p-8 bg-violet-500/10 rounded-2xl border border-violet-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Full Workspace</h3>
              <p className="text-neutral-400 mb-6">For teams that don't use another PM tool</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Complete PM solution in Telegram",
                  "Kanban boards, time tracking, analytics",
                  "AI task creation",
                  "No external tool needed",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-neutral-300">
                    <Check className="w-4 h-4 text-violet-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-white text-black hover:bg-neutral-200 rounded-full py-5">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  Start Workspace
                </a>
              </Button>
            </div>

            {/* PM Connect Card */}
            <div className="p-8 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">PM Connect</h3>
              <p className="text-neutral-400 mb-6">For teams already using Monday, Asana, etc.</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Bridges existing PM to Telegram",
                  "Managers stay in their tool",
                  "Workers get tasks in Telegram",
                  "Two-way sync",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-neutral-300">
                    <Check className="w-4 h-4 text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full border-blue-500/30 text-white hover:bg-blue-500/10 rounded-full py-5 bg-transparent">
                <Link href="/pm-connect">
                  Learn About PM Connect
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-[#111]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start your workspace today
          </h2>
          <p className="text-neutral-400 mb-10 text-lg">
            Free during early access. No credit card required.
          </p>

          <Button asChild className="bg-white text-black hover:bg-neutral-100 rounded-full px-10 py-6 text-lg font-semibold">
            <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Launch on Telegram
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.png" alt="Whatstask Logo" width={24} height={24} />
                <span className="font-bold text-white">Whatstask</span>
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Connect your PM tools to Telegram workers. Or use our full workspace.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm text-white">Products</h4>
              <ul className="space-y-2">
                {[
                  { name: "PM Connect", href: "/pm-connect" },
                  { name: "Developer API", href: "/developers" },
                  { name: "Workspace", href: "/workspace" },
                  { name: "Pricing", href: "/pricing" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-sm text-neutral-500 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm text-white">Free Tools</h4>
              <ul className="space-y-2">
                {[
                  { name: "GEO Analyzer", href: "/geoanalyzer" },
                  { name: "PDF Tools", href: "/tools" },
                  { name: "QR Generator", href: "/qr-code-generator" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-sm text-neutral-500 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm text-white">Company</h4>
              <ul className="space-y-2">
                {[
                  { name: "About", href: "/about" },
                  { name: "Blog", href: "/blog" },
                  { name: "Contact", href: "/contact" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-sm text-neutral-500 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center text-sm text-neutral-600">
            © {new Date().getFullYear()} Whatstask. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
