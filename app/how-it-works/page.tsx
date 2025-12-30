import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Send, MessageSquare, Bell, Check, Calendar, ArrowRight } from "lucide-react"
import PageLoader from "@/components/page-loader"
import Script from "next/script"

export const metadata: Metadata = {
  title: "How It Works - Telegram Mini App Setup | Whatstask",
  description:
    "Get started with Whatstask in 4 simple steps: Launch Mini App, create workspace, manage tasks & time, invite team. Complete guide to work management in Telegram.",
  keywords:
    "how to use telegram mini app, telegram webapp tutorial, whatstask setup, work management guide, telegram mini app onboarding, team setup telegram",
  openGraph: {
    title: "How It Works - Telegram Mini App Setup | Whatstask",
    description: "Launch Mini App → Create workspace → Manage work → Invite team. Complete work management in Telegram.",
    url: "https://www.whatstask.com/how-it-works",
    siteName: "Whatstask",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works - Telegram Mini App Setup | Whatstask",
    description: "Complete guide to work management with Whatstask Mini App in Telegram.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/how-it-works",
  },
}

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Launch the Mini App",
      description: "Open Telegram and search for @whatstaskbot. Tap to open the full Mini App interface - no installation needed.",
      details: [
        "Works on iOS, Android, and Desktop",
        "Full app interface in Telegram",
        "One-tap authentication with Telegram",
        "Free to start - no credit card needed",
      ],
      icon: <Send className="h-12 w-12" />,
    },
    {
      number: "02",
      title: "Create Your Workspace",
      description: "Set up your first company workspace or join an existing team using an 8-character invitation code.",
      details: [
        "Create unlimited companies/workspaces",
        "Join teams with invitation codes",
        "Switch between workspaces easily",
        "Choose your role: Admin, Manager, or Employee",
      ],
      icon: <MessageSquare className="h-12 w-12" />,
    },
    {
      number: "03",
      title: "Manage Tasks & Track Time",
      description:
        "Create tasks with subtasks, priorities, and due dates. Clock in/out to track time. View analytics and reports.",
      details: [
        "Create tasks with full details and attachments",
        "One-tap time tracking with clock in/out",
        "Add subtasks and recurring schedules",
        "View productivity statistics and reports",
      ],
      icon: <Check className="h-12 w-12" />,
    },
    {
      number: "04",
      title: "Invite & Collaborate with Your Team",
      description:
        "Invite team members, assign tasks, add comments, and track progress together. Real-time collaboration built-in.",
      details: [
        "Invite unlimited team members",
        "Assign tasks and set permissions",
        "Comment and mention teammates",
        "Track team time and productivity",
      ],
      icon: <Bell className="h-12 w-12" />,
    },
  ]

  const examples = [
    {
      input: "Remind me to call mom tomorrow at 2pm",
      output: "✅ Task created: Call mom\n📅 Tomorrow at 2:00 PM\n🔔 Reminder set",
    },
    {
      input: "Team meeting every Monday at 10am",
      output: "✅ Recurring task created: Team meeting\n📅 Every Monday at 10:00 AM\n🔔 Weekly reminder set",
    },
    {
      input: "Submit report by end of week",
      output: "✅ Task created: Submit report\n📅 Friday, Dec 29\n🔔 Reminder set for Thursday evening",
    },
  ]

  const commands = [
    { command: "/start", description: "Start using Whatstask and see the main menu" },
    { command: "/today", description: "View all tasks due today" },
    { command: "/upcoming", description: "See tasks for the next 7 days" },
    { command: "/done", description: "Mark recent tasks as complete" },
    { command: "/list", description: "View all active tasks organized by category" },
    { command: "/help", description: "Get help and see all available commands" },
  ]

  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-black text-white">
        {/* Header */}
        <header className="border-b border-white/10">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Whatstask Logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-bold">Whatstask</span>
            </Link>
            <Link href="/">
              <Button variant="ghost">Back to Home</Button>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Get Started in 4 Simple Steps</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Launch the Mini App, create your workspace, manage tasks & time, and invite your team. Complete work management in Telegram - ready in minutes.
            </p>
          </div>

          {/* Main Steps */}
          <div className="space-y-16 max-w-5xl mx-auto mb-20">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="grid md:grid-cols-2 gap-8 items-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10"
              >
                <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                  <div className="text-6xl font-black text-white/10 mb-4">{step.number}</div>
                  <div className="text-teal-500 mb-4">{step.icon}</div>
                  <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
                  <p className="text-lg text-gray-400 leading-relaxed mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                  <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 flex items-center justify-center min-h-[300px]">
                    <div className="text-center">
                      <div className="text-6xl mb-4">
                        {idx === 0 && "💬"}
                        {idx === 1 && "✍️"}
                        {idx === 2 && "🔔"}
                      </div>
                      <p className="text-gray-400 text-sm">Visual coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Natural Language Examples */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Natural Language in Action</h2>
            <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              Whatstask understands how you naturally speak. No need to learn complex syntax or commands - just type
              what you're thinking.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {examples.map((example, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="mb-4">
                    <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide">You type:</div>
                    <div className="bg-black/40 rounded-lg p-3 font-mono text-sm text-gray-300">
                      {example.input}
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-teal-500 mx-auto mb-4" />
                  <div>
                    <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Whatstask creates:</div>
                    <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-3 text-sm whitespace-pre-line">
                      {example.output}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Commands */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Quick Commands</h2>
            <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              Speed up your workflow with these optional shortcuts. Natural language always works too!
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {commands.map((cmd, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <code className="bg-black/40 px-3 py-1 rounded text-teal-400 font-mono text-sm whitespace-nowrap flex-shrink-0">
                      {cmd.command}
                    </code>
                    <p className="text-gray-400 text-sm leading-relaxed">{cmd.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Features */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Advanced Features</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <Calendar className="h-8 w-8 text-teal-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Recurring Tasks</h3>
                <p className="text-gray-400 leading-relaxed">
                  Set tasks to repeat daily, weekly, monthly, or on custom schedules. Perfect for habits and regular
                  meetings.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <MessageSquare className="h-8 w-8 text-teal-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Categories & Tags</h3>
                <p className="text-gray-400 leading-relaxed">
                  Organize tasks into work, personal, or custom categories. Add tags for easy filtering and search.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <Check className="h-8 w-8 text-teal-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Completion Tracking</h3>
                <p className="text-gray-400 leading-relaxed">
                  View your productivity stats, completion rates, and streaks. Stay motivated with visual progress.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Common Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Do I need to install an app?",
                  a: "No! Whatstask works entirely within Telegram. Just add the bot and start chatting.",
                },
                {
                  q: "Can I use Whatstask on multiple devices?",
                  a: "Yes. Since it's a Telegram bot, your tasks sync automatically across all your devices - phone, tablet, and desktop.",
                },
                {
                  q: "What if I make a mistake?",
                  a: "You can edit or delete tasks anytime. Just type /list to see all tasks and manage them easily.",
                },
                {
                  q: "Does it work offline?",
                  a: "You need an internet connection to create and sync tasks, but you can view your task list offline in Telegram.",
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all"
                >
                  <h3 className="font-bold mb-2">{faq.q}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-br from-teal-500/10 to-white/5 backdrop-blur-lg rounded-2xl p-12 border border-teal-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Organized?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join 10,000+ users who manage tasks smarter. No signup, no complexity - just results.
            </p>
            <Button asChild className="bg-teal-500 text-white hover:bg-teal-700 rounded-full px-8 py-6 text-lg">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                <Send className="h-5 w-5 mr-2" />
                Start on Telegram
              </a>
            </Button>
            <p className="text-sm text-gray-500 mt-4">Takes less than 60 seconds to set up</p>
          </div>
        </section>

        {/* HowTo Schema */}
        <Script
          id="schema-howto"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Use Whatstask Telegram Task Bot",
              description:
                "Learn how to manage tasks in Telegram using Whatstask bot in 3 simple steps.",
              totalTime: "PT1M",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Add Whatstask to Telegram",
                  text: "Open Telegram and search for @whatstaskbot to start the bot.",
                  position: 1,
                },
                {
                  "@type": "HowToStep",
                  name: "Create Your First Task",
                  text: "Type your task in natural language, like 'Meeting with Sarah tomorrow at 3pm'.",
                  position: 2,
                },
                {
                  "@type": "HowToStep",
                  name: "Get Smart Reminders",
                  text: "Receive automatic notifications at the right time based on your task schedule.",
                  position: 3,
                },
              ],
            }),
          }}
        />

        {/* FAQ Schema */}
        <Script
          id="schema-faq-howto"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Do I need to install an app to use Whatstask?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No! Whatstask works entirely within Telegram. Just add the bot and start chatting - no separate app installation required.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I use Whatstask on multiple devices?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Since Whatstask is a Telegram bot, your tasks sync automatically across all your devices - phone, tablet, and desktop.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I create a task in Whatstask?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Simply type your task in natural language. For example: 'Meeting with Sarah tomorrow at 3pm' or 'Buy groceries this weekend'. Whatstask automatically understands dates, times, and context.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Breadcrumb Schema */}
        <Script
          id="schema-breadcrumb-howto"
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
                  name: "How It Works",
                  item: "https://www.whatstask.com/how-it-works",
                },
              ],
            }),
          }}
        />
      </div>
    </>
  )
}
