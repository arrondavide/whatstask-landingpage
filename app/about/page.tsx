import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "About Whatstask - Simple Scales | Our Story",
  description:
    "Whatstask bridges PM tools to Telegram workers. Built by a founder who watched field workers struggle with enterprise software. Our philosophy: meet workers where they are.",
  openGraph: {
    title: "About Whatstask - Simple Scales",
    description: "We bridge PM tools to Telegram workers. Our story and philosophy.",
    url: "https://www.whatstask.com/about",
    siteName: "Whatstask",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <Navigation variant="dark" />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        <main className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Hero */}
          <section className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">About</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Simple scales.
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
              We bridge PM tools to workers on Telegram. Because the best software meets people where they already are.
            </p>
          </section>

          {/* The Origin Story */}
          <section className="mb-20">
            <div className="border border-white/10 rounded-2xl p-10 md:p-16 bg-white/5">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Origin Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Why we built this</h2>
              <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
                <p>
                  I watched field service companies struggle with a simple problem: their office managers
                  loved Monday.com, but their technicians wouldn't use it. The technicians weren't being
                  difficult—they were busy doing actual work, on the road, with their phones.
                </p>
                <p>
                  The solution wasn't to force workers into another app. It was to bring work to
                  where workers already are: <span className="text-white font-medium">Telegram</span>.
                </p>
                <p>
                  Whatstask started as a simple bridge. PM tools on one side. Telegram workers on the other.
                  Tasks flow down. Updates sync back. No one has to change how they work.
                </p>
                <p className="text-white font-medium">
                  The best software doesn't ask people to change. It adapts to them.
                </p>
              </div>
            </div>
          </section>

          {/* What We Believe */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Philosophy</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">What we believe</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Bridge, don't replace",
                  description:
                    "Your managers love their PM tools. Don't make them switch. Connect those tools to workers where they already are.",
                },
                {
                  title: "Meet workers where they are",
                  description:
                    "Field workers live in Telegram. They won't download another app. Bring work to them.",
                },
                {
                  title: "Simple is powerful",
                  description:
                    "One tap to start. One tap to complete. One tap to report a problem. That's all workers need.",
                },
                {
                  title: "Free during early access",
                  description:
                    "We're building in public. Use it free while we refine. No credit card, no tricks.",
                },
              ].map((value, index) => (
                <div key={index} className="border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What We Build */}
          <section className="mb-20 bg-[#111] -mx-4 px-4 py-16 md:-mx-8 md:px-8 rounded-2xl">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Products</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white">What we build</h2>
              </div>
              <div className="space-y-6">
                {[
                  {
                    title: "PM Connect",
                    description: "Bridge Monday.com, Asana, ClickUp, or Trello to your Telegram workers. Tasks flow to workers, updates sync back. Two-way, automatic.",
                    href: "/pm-connect",
                    highlight: true,
                  },
                  {
                    title: "Developer API",
                    description: "Send Telegram notifications from any app. 3 lines of code. GitHub, Stripe, CI/CD pipelines—anything with a webhook.",
                    href: "/developers",
                  },
                  {
                    title: "Full Workspace",
                    description: "Don't use another PM tool? Whatstask is a complete workspace inside Telegram. Kanban boards, time tracking, AI tasks, team analytics.",
                    href: "/workspace",
                  },
                  {
                    title: "Free Tools",
                    description: "PDF tools, QR generator, GEO analyzer. No signup, no limits. Just free tools that work.",
                    href: "/tools",
                  },
                ].map((product, index) => (
                  <div key={index} className={`border rounded-2xl p-8 transition-all duration-300 ${
                    product.highlight
                      ? "bg-blue-500/10 border-blue-500/30 hover:border-blue-500/50"
                      : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]"
                  }`}>
                    <h3 className="text-xl font-semibold text-white mb-3">{product.title}</h3>
                    <p className="text-neutral-400 mb-4">{product.description}</p>
                    <Link href={product.href} className="inline-flex items-center gap-2 text-neutral-400 text-sm hover:text-white transition-colors">
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* The Team */}
          <section className="mb-20">
            <div className="border border-white/10 rounded-2xl p-10 md:p-16 bg-white/5">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Team</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Built by a small team</h2>
              <p className="text-lg text-neutral-400 leading-relaxed mb-6">
                Whatstask is built by a lean team who believe the best software comes from people who
                actually use what they build. We ship fast, listen to feedback, and iterate constantly.
              </p>
              <p className="text-lg text-neutral-400 leading-relaxed">
                We're not trying to be the next unicorn. We're trying to solve a real problem for
                teams who have workers in the field and managers in the office.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Contact</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in touch</h2>
              <p className="text-neutral-400 text-lg font-light">
                Have questions, feedback, or ideas? We'd love to hear from you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6">
                <a href="mailto:charlesaarondavid@gmail.com">Email Us</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 border-white/20 text-white hover:bg-white/10 bg-transparent">
                <Link href="/contact">Contact Form</Link>
              </Button>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="border border-blue-500/30 bg-blue-500/10 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to connect your team?
              </h2>
              <p className="text-neutral-300 mb-10 text-lg font-light">
                Bridge your PM tools to Telegram workers. Free during early access.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6 text-lg">
                  <Link href="/pm-connect">
                    Set Up PM Connect
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 py-6 border-white/20 text-white hover:bg-white/10 bg-transparent">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    Try on Telegram
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/5 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
