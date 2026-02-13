import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "About Whatstask - Simple Scales | Our Mission & Philosophy",
  description:
    "Whatstask builds simple work tools for teams of any size. Our philosophy: if it doesn't help you finish work faster, it doesn't exist. Learn about our mission.",
  openGraph: {
    title: "About Whatstask - Simple Scales",
    description: "Work tools for teams who want to work, not manage tools. Our story and philosophy.",
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
      <PageLoader />
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
              We build work tools for teams of any size who want to work, not manage tools.
            </p>
          </section>

          {/* The Belief */}
          <section className="mb-20">
            <div className="border border-white/10 rounded-2xl p-10 md:p-16 bg-white/5">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Philosophy</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">What we believe</h2>
              <div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
                <p>
                  The software industry got it wrong. Somewhere along the way, "powerful" became
                  "impossible to use without training." ClickUp has 15+ views. Monday needs a
                  consultant to configure. Asana charges enterprise prices for basic AI.
                </p>
                <p className="text-white font-medium">
                  We believe simple scales.
                </p>
                <p>
                  A 5-person startup and a 500-person enterprise have the same core need: get work done.
                  They don't need different tools. They need the same tool—one that works.
                </p>
                <p className="text-white font-medium">
                  Simple isn't "less than." Simple is "exactly enough."
                </p>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Values</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">What guides us</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "No Complexity",
                  description:
                    "Every feature earns its place. If it doesn't help you finish work faster, it doesn't exist.",
                },
                {
                  title: "Respect Your Time",
                  description:
                    "30-second setup, not 30-day onboarding. Tools should serve you, not the other way around.",
                },
                {
                  title: "Honest & Accessible",
                  description:
                    "Core features remain free. No artificial limitations. No dark patterns.",
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
                    title: "Project Management",
                    description: "Full-featured task management with 4 views, free AI, and built-in time tracking. Works instantly in Telegram or web.",
                    href: "/project-management",
                  },
                  {
                    title: "GEO Analyzer",
                    description: "Generative Engine Optimization for the future of search. Optimize your content for AI-powered search engines.",
                    href: "/geoanalyzer",
                  },
                  {
                    title: "Enterprise Solutions",
                    description: "For teams with specific needs, we build custom project management solutions. Same philosophy: simple, fast, no bloat.",
                    href: "/enterprise",
                  },
                  {
                    title: "Free Tools",
                    description: "PDF merger, compressor, converter. QR code generator. No signup, no limits, no catch.",
                    href: "/tools",
                  },
                ].map((product, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300">
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
                Whatstask is developed by a lean team passionate about productivity tools.
                We ship fast, listen to feedback, and believe that the best software
                comes from people who actually use what they build.
              </p>
              <Link href="/founder" className="inline-flex items-center gap-2 text-neutral-400 text-sm hover:text-white transition-colors">
                Read about our founder
                <ArrowRight className="h-4 w-4" />
              </Link>
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
            <div className="border border-violet-500/30 bg-violet-500/10 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to simplify your work?
              </h2>
              <p className="text-neutral-300 mb-10 text-lg font-light">
                Join teams who've chosen simplicity over complexity.
              </p>
              <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6 text-lg">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  Start Free
                </a>
              </Button>
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
