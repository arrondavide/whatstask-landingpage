import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "Help Center | Whatstask",
  description:
    "Get help with Whatstask. Find guides, tutorials, FAQs, and contact support. Learn how to manage tasks, track time, and collaborate with your team.",
  keywords:
    "whatstask help, whatstask support, telegram task management help, whatstask guide, whatstask tutorial",
  openGraph: {
    title: "Help Center | Whatstask",
    description:
      "Guides, tutorials, and support for Whatstask users.",
    url: "https://www.whatstask.com/help",
    siteName: "Whatstask",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Center | Whatstask",
    description: "Guides, tutorials, and support for Whatstask users.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/help",
  },
}

export default function HelpPage() {
  const quickStartSteps = [
    {
      step: 1,
      title: "Open Telegram",
      description: "Search for @whatstaskbot in Telegram or click the button below.",
    },
    {
      step: 2,
      title: "Start the Bot",
      description: 'Click "Start" to begin using Whatstask. No signup required.',
    },
    {
      step: 3,
      title: "Create Your First Task",
      description: 'Type a task like "Finish report by Friday" and Whatstask will create it.',
    },
    {
      step: 4,
      title: "Invite Your Team",
      description: "Share your workspace link to collaborate with teammates.",
    },
  ]

  const helpCategories = [
    {
      title: "Getting Started",
      description: "New to Whatstask? Start here.",
      links: [
        { title: "Quick Start Guide", href: "/how-it-works" },
        { title: "Creating Your First Task", href: "/how-it-works" },
        { title: "Inviting Team Members", href: "/how-it-works" },
      ],
    },
    {
      title: "Tasks & Projects",
      description: "Learn to manage tasks effectively.",
      links: [
        { title: "Creating Tasks", href: "/features" },
        { title: "Using Subtasks", href: "/features" },
        { title: "Setting Deadlines", href: "/features" },
        { title: "Task Views (List, Kanban, Calendar)", href: "/features" },
      ],
    },
    {
      title: "Team Collaboration",
      description: "Work together seamlessly.",
      links: [
        { title: "Assigning Tasks", href: "/features" },
        { title: "Comments & Mentions", href: "/features" },
        { title: "Team Roles & Permissions", href: "/features" },
      ],
    },
    {
      title: "Time Tracking",
      description: "Track and report time.",
      links: [
        { title: "Starting a Timer", href: "/features" },
        { title: "Manual Time Entry", href: "/features" },
        { title: "Time Reports", href: "/features" },
      ],
    },
    {
      title: "Notifications",
      description: "Stay updated on what matters.",
      links: [
        { title: "Notification Settings", href: "/features" },
        { title: "Reminders", href: "/features" },
        { title: "Daily Digest", href: "/features" },
      ],
    },
    {
      title: "Account & Settings",
      description: "Manage your account.",
      links: [
        { title: "Account Settings", href: "/features" },
        { title: "Workspace Settings", href: "/features" },
        { title: "Billing & Subscription", href: "/pricing" },
      ],
    },
  ]

  const faqs = [
    {
      question: "Is Whatstask free?",
      answer: "Yes! Whatstask is free to start with all basic features. Pro plans start at $4.99/user/month for advanced features like unlimited projects and priority support.",
    },
    {
      question: "Do I need to download an app?",
      answer: "No. Whatstask works entirely within Telegram. If you have Telegram, you already have everything you need.",
    },
    {
      question: "How do I invite my team?",
      answer: "After creating a workspace, you'll get a shareable invite link. Send it to your teammates via Telegram or any other method. They can join instantly.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes. We use end-to-end encryption, and your data is stored securely. We never sell your data or share it with third parties. See our Security page for details.",
    },
    {
      question: "Can I use Whatstask offline?",
      answer: "Whatstask requires an internet connection to sync tasks. However, Telegram's offline mode will queue your messages and sync when you're back online.",
    },
    {
      question: "How do I contact support?",
      answer: "You can reach us through the Contact page, email us at support@whatstask.com, or message us directly in Telegram.",
    },
  ]

  return (
    <>
      <Navigation variant="solid" />
      <div className="min-h-screen bg-white text-slate-900 pt-16">
        {/* Hero */}
        <section className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Help Center", href: "/help" },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mt-8 mb-16">
          <p className="text-sm text-slate-500 mb-6">Help Center</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            How Can We Help?
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Find guides, tutorials, and answers to common questions. Can't find what you're looking
            for? Contact our support team.
          </p>

          {/* Search placeholder */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-500" />
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full bg-slate-50 border border-slate-200 rounded-full py-4 pl-12 pr-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-violet-500/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Quick Start Guide</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {quickStartSteps.map((item) => (
              <div key={item.step} className="text-center">
                <p className="text-xl font-bold text-slate-900 mb-2">Step {item.step}</p>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild className="bg-violet-500 hover:bg-violet-600 text-white rounded-full px-8 py-6">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                Start Now in Telegram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Browse by Topic</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helpCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-violet-500/30 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-700 hover:text-violet-500 transition-colors"
                    >
                      → {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Quick answers to common questions about Whatstask.
        </p>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6"
            >
              <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Additional Resources</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-violet-500/30 transition-colors text-center group"
          >
            <h3 className="font-semibold text-lg mb-2 group-hover:text-violet-500 transition-colors">Blog</h3>
            <p className="text-sm text-slate-600">Tips, guides, and product updates</p>
          </Link>
          <Link
            href="/templates"
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-violet-500/30 transition-colors text-center group"
          >
            <h3 className="font-semibold text-lg mb-2 group-hover:text-violet-500 transition-colors">Templates</h3>
            <p className="text-sm text-slate-600">Ready-to-use project templates</p>
          </Link>
          <Link
            href="/security"
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-violet-500/30 transition-colors text-center group"
          >
            <h3 className="font-semibold text-lg mb-2 group-hover:text-violet-500 transition-colors">Security</h3>
            <p className="text-sm text-slate-600">How we protect your data</p>
          </Link>
        </div>
      </section>

      {/* Contact Support */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-violet-500/20 to-violet-500/5 border border-violet-500/20 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Our support team is here to help. Reach out and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-violet-500 hover:bg-violet-600 text-white rounded-full px-8 py-6">
              <Link href="/contact">
                Contact Support
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300">
              <a href="mailto:support@whatstask.com">
                support@whatstask.com
              </a>
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
              <Link href="/features" className="hover:text-slate-900 transition-colors">Features</Link>
              <Link href="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
              <Link href="/security" className="hover:text-slate-900 transition-colors">Security</Link>
              <Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link>
            </div>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Whatstask. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}
