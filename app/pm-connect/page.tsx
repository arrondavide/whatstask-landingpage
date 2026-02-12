import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
import Script from "next/script"
import { ArrowRight, Check, Globe, Users, Zap, MessageSquare, Camera, Clock, ChevronDown, Settings, Bell, CheckCircle } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "PM Connect - Bridge Your PM Tools to Telegram Workers | WhatsTask",
  description:
    "Connect Monday.com, ClickUp, Asana, Trello to Telegram. Send tasks to field workers instantly. Receive updates, photos, completion status. No app switching.",
  keywords:
    "monday telegram integration, clickup telegram, asana telegram, trello telegram, field worker app, task dispatch telegram, pm tool integration, worker management telegram",
  openGraph: {
    title: "PM Connect - Bridge Your PM Tools to Telegram Workers | WhatsTask",
    description:
      "Connect Monday.com, ClickUp, Asana, Trello to Telegram. Send tasks to field workers instantly.",
    url: "https://www.whatstask.com/pm-connect",
    siteName: "Whatstask",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PM Connect - Bridge Your PM Tools to Telegram Workers | WhatsTask",
    description: "Connect Monday.com, ClickUp, Asana, Trello to Telegram. Send tasks to field workers instantly.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/pm-connect",
  },
}

export default function PMConnectPage() {
  return (
    <>
      <PageLoader />
      <Navigation variant="solid" />
      <div className="min-h-screen bg-white text-slate-900 pt-16">
        <main className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 mb-6">
              <Globe className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">PM Connect</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
              Don't replace your tools.
              <br />Extend them to Telegram.
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light mb-10">
              Your managers use Monday.com. Your field workers live in Telegram. PM Connect bridges the gap without forcing anyone to switch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-8 py-6">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  Set Up PM Connect
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-lg px-8 py-6 border-slate-300 hover:bg-slate-50">
                <a href="#how-it-works">See How It Works</a>
              </Button>
            </div>
          </section>

          {/* The Problem */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-blue-600 mb-4">The Problem</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Two worlds that don't connect</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-slate-200 rounded-2xl p-8 bg-slate-50">
                <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Office managers use PM tools</h3>
                <p className="text-slate-500 leading-relaxed">
                  Monday.com, ClickUp, Asana, Trello. Great for planning, tracking, and reporting. But your field workers don't use these tools.
                </p>
              </div>

              <div className="border border-slate-200 rounded-2xl p-8 bg-slate-50">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Field workers live in Telegram</h3>
                <p className="text-slate-500 leading-relaxed">
                  Technicians, drivers, cleaners, contractors. They're on their phones, in Telegram. They won't download another app.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-500">
                <strong className="text-slate-900">The result?</strong> Manual task dispatch. Phone calls. WhatsApp messages. No tracking. No visibility.
              </p>
            </div>
          </section>

          {/* The Solution */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-blue-600 mb-4">The Solution</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">PM Connect bridges both worlds</h2>
            </div>

            <div className="border border-blue-200 bg-blue-50 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* PM Tool */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <span className="text-2xl font-bold text-slate-400">PM</span>
                  </div>
                  <p className="font-semibold text-slate-900">Your PM Tool</p>
                  <p className="text-sm text-slate-500">Monday, ClickUp, Asana...</p>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center">
                  <div className="hidden md:flex items-center gap-2">
                    <div className="w-20 h-px bg-blue-300" />
                    <ArrowRight className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="md:hidden flex flex-col items-center gap-2">
                    <div className="h-8 w-px bg-blue-300" />
                    <ChevronDown className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-blue-300 flex items-center justify-center my-2">
                    <Image src="/logo.png" alt="WhatsTask" width={24} height={24} />
                  </div>
                  <p className="text-xs text-blue-600 font-medium">PM Connect</p>
                  <div className="hidden md:flex items-center gap-2 mt-2">
                    <div className="w-20 h-px bg-blue-300" />
                    <ArrowRight className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="md:hidden flex flex-col items-center gap-2 mt-2">
                    <div className="h-8 w-px bg-blue-300" />
                    <ChevronDown className="w-5 h-5 text-blue-400" />
                  </div>
                </div>

                {/* Telegram */}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                    </svg>
                  </div>
                  <p className="font-semibold text-slate-900">Field Workers</p>
                  <p className="text-sm text-slate-500">Receive, complete, report</p>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section id="how-it-works" className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-blue-600 mb-4">How It Works</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Set up in 5 minutes</h2>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="border border-slate-200 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold flex-shrink-0">1</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Create an integration in WhatsTask</h3>
                    <p className="text-slate-500 mb-4">
                      Open WhatsTask in Telegram. Go to <strong>Profile → PM Connect → Create Integration</strong>. Select your PM tool (Monday, ClickUp, Asana, Trello, or Generic).
                    </p>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-sm text-slate-600">You'll receive a unique webhook URL like:</p>
                      <code className="text-sm text-blue-600 block mt-2">https://whatstask.com/api/webhook/int_abc123xyz</code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="border border-slate-200 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold flex-shrink-0">2</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Add workers to the integration</h3>
                    <p className="text-slate-500 mb-4">
                      Add your field workers by their Telegram ID. Workers need to start the WhatsTask bot first (<strong>@whatstaskbot</strong>) to get their ID.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 rounded-xl p-4">
                        <p className="text-sm font-medium text-slate-900 mb-1">Worker gets their ID</p>
                        <p className="text-sm text-slate-500">Send /start to @whatstaskbot → See Telegram ID</p>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-4">
                        <p className="text-sm font-medium text-slate-900 mb-1">You add them</p>
                        <p className="text-sm text-slate-500">PM Connect → Add Worker → Enter their ID</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="border border-slate-200 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold flex-shrink-0">3</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Configure your PM tool webhook</h3>
                    <p className="text-slate-500 mb-4">
                      Paste your WhatsTask webhook URL into your PM tool. Each platform has different settings:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-slate-200 rounded-xl p-4">
                        <p className="font-medium text-slate-900 mb-2">Monday.com</p>
                        <p className="text-sm text-slate-500">Board → Integrations → Webhooks → Add webhook URL</p>
                      </div>
                      <div className="border border-slate-200 rounded-xl p-4">
                        <p className="font-medium text-slate-900 mb-2">ClickUp</p>
                        <p className="text-sm text-slate-500">Space Settings → Webhooks → Create webhook</p>
                      </div>
                      <div className="border border-slate-200 rounded-xl p-4">
                        <p className="font-medium text-slate-900 mb-2">Asana</p>
                        <p className="text-sm text-slate-500">Project → Apps → Add app → Webhook</p>
                      </div>
                      <div className="border border-slate-200 rounded-xl p-4">
                        <p className="font-medium text-slate-900 mb-2">Trello</p>
                        <p className="text-sm text-slate-500">Power-Ups → Webhooks → Add endpoint</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="border border-slate-200 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold flex-shrink-0">4</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">Tasks flow automatically</h3>
                    <p className="text-slate-500">
                      When a task is created or assigned in your PM tool, the assigned worker receives it instantly in Telegram. They can start, complete, or report problems—all synced back.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Worker Experience */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-blue-600 mb-4">Worker Experience</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What workers see in Telegram</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Task Notification */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                  <p className="font-semibold text-slate-900">Task Notification</p>
                </div>
                <div className="p-6">
                  <div className="bg-blue-50 rounded-xl p-4 mb-4">
                    <p className="font-semibold text-slate-900 mb-2">🔔 New Task Assigned</p>
                    <p className="text-slate-700 mb-3"><strong>Fix AC unit at Building A</strong></p>
                    <p className="text-sm text-slate-500 mb-1">📍 123 Main St, Suite 400</p>
                    <p className="text-sm text-slate-500 mb-1">📅 Due: Today, 3:00 PM</p>
                    <p className="text-sm text-slate-500">⚡ Priority: High</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-green-500 text-white rounded-lg py-2 text-sm font-medium">▶️ Start</button>
                    <button className="flex-1 bg-slate-200 text-slate-700 rounded-lg py-2 text-sm font-medium">❌ Problem</button>
                  </div>
                </div>
              </div>

              {/* Worker Actions */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                  <p className="font-semibold text-slate-900">Worker Actions</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {[
                      { icon: Zap, action: "Start task", desc: "Tap button or type 'start'" },
                      { icon: Camera, action: "Send photos", desc: "Take photos of work progress" },
                      { icon: MessageSquare, action: "Add notes", desc: "Type notes about the job" },
                      { icon: CheckCircle, action: "Complete task", desc: "Tap button or type 'done'" },
                      { icon: Bell, action: "Report problem", desc: "Tap button or type 'problem'" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">{item.action}</p>
                          <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What Syncs Back */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-blue-600 mb-4">Two-Way Sync</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Everything syncs back to your PM tool</h2>
            </div>

            <div className="border border-slate-200 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="text-left p-6 font-semibold text-slate-900">Worker Action</th>
                    <th className="text-left p-6 font-semibold text-slate-900">What You See in PM Tool</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { action: "Taps 'Start'", result: "Task status changes to 'In Progress', timestamp recorded" },
                    { action: "Sends photo", result: "Photo attached to task as comment/attachment" },
                    { action: "Types notes", result: "Notes added as task comment" },
                    { action: "Taps 'Done'", result: "Task marked complete, completion time recorded" },
                    { action: "Reports problem", result: "Task flagged, manager notified, notes attached" },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-slate-100 last:border-0">
                      <td className="p-6">
                        <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                          {row.action}
                        </span>
                      </td>
                      <td className="p-6 text-slate-600">{row.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Supported Platforms */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-blue-600 mb-4">Supported Platforms</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Works with your tools</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Monday.com", status: "Full support", features: ["Tasks", "Subtasks", "Status sync", "Comments"] },
                { name: "ClickUp", status: "Full support", features: ["Tasks", "Subtasks", "Priority", "Due dates"] },
                { name: "Asana", status: "Full support", features: ["Tasks", "Projects", "Assignees", "Due dates"] },
                { name: "Trello", status: "Full support", features: ["Cards", "Checklists", "Labels", "Due dates"] },
              ].map((platform, index) => (
                <div key={index} className="border border-slate-200 rounded-2xl p-6 hover:border-blue-300 transition-colors">
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{platform.name}</h3>
                  <p className="text-sm text-green-600 mb-4">{platform.status}</p>
                  <ul className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm">
                <span>Don't see your tool?</span>
                <span className="font-medium text-slate-900">Generic webhook works with any JSON payload</span>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-blue-600 mb-4">Use Cases</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Who uses PM Connect?</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Field Service Companies",
                  desc: "HVAC, plumbing, electrical. Dispatch technicians from Monday.com, track job completion in real-time.",
                  workers: "Technicians",
                },
                {
                  title: "Cleaning Services",
                  desc: "Schedule cleanings in Asana, workers receive jobs on Telegram with location and instructions.",
                  workers: "Cleaners",
                },
                {
                  title: "Delivery & Logistics",
                  desc: "Manage routes in ClickUp, drivers get delivery tasks with addresses and ETAs.",
                  workers: "Drivers",
                },
                {
                  title: "Construction",
                  desc: "Assign tasks in Trello, crews on-site get instructions without needing app access.",
                  workers: "Crew members",
                },
                {
                  title: "Property Management",
                  desc: "Track maintenance in Monday.com, contractors receive work orders instantly.",
                  workers: "Contractors",
                },
                {
                  title: "Agencies",
                  desc: "Manage projects in Asana, freelancers get assignments without full tool access.",
                  workers: "Freelancers",
                },
              ].map((useCase, index) => (
                <div key={index} className="border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-colors">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{useCase.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{useCase.desc}</p>
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    <Users className="w-3 h-3" />
                    {useCase.workers}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Webhook Payload Examples */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-blue-600 mb-4">Technical Details</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Webhook payload formats</h2>
              <p className="text-slate-500 mt-4">We auto-parse these formats. Or use the generic format for custom integrations.</p>
            </div>

            <div className="space-y-6">
              {/* Monday.com */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
                  <span className="font-semibold text-slate-900">Monday.com</span>
                </div>
                <pre className="p-6 text-sm overflow-x-auto bg-[#1a1a1a]">
                  <code className="text-neutral-300">
{`{
  "event": {
    "pulseId": "12345",
    "pulseName": "Fix AC unit at Building A",
    "userId": "user_123",
    "boardId": "board_456",
    "columnValues": {
      "text": { "value": "Customer reported AC not cooling" },
      "priority": { "label": "High" },
      "location": { "value": "123 Main St, Suite 400" }
    }
  }
}`}
                  </code>
                </pre>
              </div>

              {/* Generic */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
                  <span className="font-semibold text-slate-900">Generic (works with any system)</span>
                </div>
                <pre className="p-6 text-sm overflow-x-auto bg-[#1a1a1a]">
                  <code className="text-neutral-300">
{`{
  "title": "Fix AC unit at Building A",
  "description": "Customer reported AC not cooling",
  "priority": "high",
  "due_date": "2026-02-12T15:00:00Z",
  "assignee_id": "telegram_123456789",
  "location": "123 Main St, Suite 400"
}`}
                  </code>
                </pre>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-blue-600 mb-4">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Common questions</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Do workers need to install an app?",
                  a: "No. Workers only need Telegram, which they likely already have. They just need to start the @whatstaskbot once to register.",
                },
                {
                  q: "How do workers get assigned to tasks?",
                  a: "Tasks are routed based on the assignee in your PM tool. Map your PM tool user IDs to Telegram IDs in the PM Connect settings.",
                },
                {
                  q: "Can workers see all tasks or just theirs?",
                  a: "Workers only see tasks assigned to them. They never see other workers' tasks or sensitive project information.",
                },
                {
                  q: "What if a worker doesn't have Telegram?",
                  a: "Telegram is free and available on all platforms. Most field workers prefer it over installing company-specific apps.",
                },
                {
                  q: "Is there a limit to how many workers I can add?",
                  a: "Free tier includes up to 5 workers per integration. Pro tier has unlimited workers.",
                },
                {
                  q: "Can managers see task progress in real-time?",
                  a: "Yes. When workers start, complete, or report problems, the status syncs back to your PM tool instantly.",
                },
              ].map((item, index) => (
                <div key={index} className="border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                  <p className="text-slate-500">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="border border-blue-200 bg-blue-50 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ready to connect your teams?</h2>
              <p className="text-slate-600 mb-10 text-lg font-light">
                Set up PM Connect in 5 minutes. Bridge your PM tools to Telegram workers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-8 py-6">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    Set Up PM Connect
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-lg px-8 py-6 border-slate-300 hover:bg-white">
                  <a href="mailto:charlesaarondavid@gmail.com">Talk to Sales</a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-100 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
          </div>
        </footer>

        {/* Schema */}
        <Script
          id="schema-pm-connect"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "WhatsTask PM Connect",
              description: "Bridge your PM tools (Monday.com, ClickUp, Asana, Trello) to Telegram workers.",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Telegram",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </div>
    </>
  )
}
