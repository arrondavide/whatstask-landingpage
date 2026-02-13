import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
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
    },
    {
      number: "04",
      title: "Invite & Collaborate",
      description:
        "Invite team members, assign tasks, add comments, and track progress together. Real-time collaboration built-in.",
      details: [
        "Invite unlimited team members",
        "Assign tasks and set permissions",
        "Comment and mention teammates",
        "Track team time and productivity",
      ],
    },
  ]

  const examples = [
    {
      input: "Remind me to call mom tomorrow at 2pm",
      output: "Task created: Call mom\nTomorrow at 2:00 PM\nReminder set",
    },
    {
      input: "Team meeting every Monday at 10am",
      output: "Recurring task created: Team meeting\nEvery Monday at 10:00 AM\nWeekly reminder set",
    },
    {
      input: "Submit report by end of week",
      output: "Task created: Submit report\nFriday, Dec 29\nReminder set for Thursday evening",
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

  const advancedFeatures = [
    {
      title: "Recurring Tasks",
      description: "Set tasks to repeat daily, weekly, monthly, or on custom schedules. Perfect for habits and regular meetings.",
    },
    {
      title: "Categories & Tags",
      description: "Organize tasks into work, personal, or custom categories. Add tags for easy filtering and search.",
    },
    {
      title: "Completion Tracking",
      description: "View your productivity stats, completion rates, and streaks. Stay motivated with visual progress.",
    },
  ]

  const faqs = [
    {
      q: "Do I need to install an app?",
      a: "No. Whatstask works entirely within Telegram. Just add the bot and start chatting.",
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
  ]

  return (
    <>
      <PageLoader />
      <Navigation variant="dark" />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        <main className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">How It Works</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Get started in minutes
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
              Launch the Mini App, create your workspace, manage tasks & time, and invite your team.
            </p>
          </section>

          {/* Main Steps */}
          <section className="mb-24">
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="border border-white/10 rounded-2xl p-8 md:p-12 bg-white/5 hover:border-white/20 transition-all duration-300"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                      <span className="text-6xl font-light text-white/10 block mb-4">{step.number}</span>
                      <h2 className="text-2xl font-bold text-white mb-4">{step.title}</h2>
                      <p className="text-neutral-400 leading-relaxed mb-6">{step.description}</p>
                    </div>
                    <div>
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIdx) => (
                          <li key={detailIdx} className="flex items-start gap-3 text-sm text-neutral-300">
                            <div className="w-1 h-1 rounded-full bg-neutral-500 mt-2 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Natural Language Examples */}
          <section className="mb-24 bg-[#111] -mx-4 px-4 py-16 md:-mx-8 md:px-8 rounded-2xl">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Natural Language</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Just type what you're thinking</h2>
                <p className="text-neutral-400 text-lg font-light max-w-2xl mx-auto">
                  No need to learn complex syntax or commands. Whatstask understands how you naturally speak.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {examples.map((example, idx) => (
                  <div
                    key={idx}
                    className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="mb-6">
                      <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">You type</p>
                      <div className="bg-[#0a0a0a] rounded-lg p-4 font-mono text-sm text-neutral-300">
                        {example.input}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Whatstask creates</p>
                      <div className="bg-[#0a0a0a] rounded-lg p-4 text-sm text-neutral-400 whitespace-pre-line">
                        {example.output}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Commands */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Shortcuts</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Quick Commands</h2>
              <p className="text-neutral-400 text-lg font-light max-w-2xl mx-auto">
                Speed up your workflow with optional shortcuts. Natural language always works too.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {commands.map((cmd, idx) => (
                <div
                  key={idx}
                  className="border border-white/10 rounded-xl p-5 bg-white/5 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <code className="bg-violet-500/20 px-3 py-1 rounded text-violet-300 font-mono text-sm whitespace-nowrap flex-shrink-0">
                      {cmd.command}
                    </code>
                    <p className="text-neutral-400 text-sm">{cmd.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Advanced Features */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Capabilities</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Advanced Features</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {advancedFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="border border-white/10 rounded-2xl p-8 bg-white/5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Common Questions</h2>
            </div>
            <div className="space-y-4 max-w-3xl mx-auto">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
                >
                  <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="border border-violet-500/30 bg-violet-500/10 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get organized?</h2>
              <p className="text-neutral-300 mb-10 text-lg font-light">
                No signup required, no complexity - just results. Free to start.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    Start on Telegram
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 py-6 border-white/20 text-white hover:bg-white/10 bg-transparent">
                  <Link href="/features">View Features</Link>
                </Button>
              </div>
              <p className="text-sm text-neutral-500 mt-6">Takes less than 60 seconds to set up</p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
          </div>
        </footer>

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
                "Learn how to manage tasks in Telegram using Whatstask bot in 4 simple steps.",
              totalTime: "PT1M",
              step: [
                {
                  "@type": "HowToStep",
                  name: "Launch the Mini App",
                  text: "Open Telegram and search for @whatstaskbot to launch the Mini App.",
                  position: 1,
                },
                {
                  "@type": "HowToStep",
                  name: "Create Your Workspace",
                  text: "Set up your first company workspace or join an existing team.",
                  position: 2,
                },
                {
                  "@type": "HowToStep",
                  name: "Manage Tasks & Track Time",
                  text: "Create tasks, track time, and view analytics.",
                  position: 3,
                },
                {
                  "@type": "HowToStep",
                  name: "Invite & Collaborate",
                  text: "Invite team members and collaborate in real-time.",
                  position: 4,
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
