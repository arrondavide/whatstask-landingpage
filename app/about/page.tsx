import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Heart, Send } from "lucide-react"
import PageLoader from "@/components/page-loader"
import { Breadcrumbs } from "@/components/breadcrumbs"

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
      <div className="min-h-screen bg-white text-slate-900">
        {/* Header */}
        <header className="border-b border-slate-200">
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

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

          {/* Hero */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Simple scales.</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We build work tools for teams of any size who want to work, not manage tools.
            </p>
          </section>

          {/* The Belief */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-violet-500/10 to-white/5 rounded-3xl p-8 md:p-12 border border-violet-500/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">What we believe</h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  The software industry got it wrong. Somewhere along the way, "powerful" became
                  "impossible to use without training." ClickUp has 15+ views. Monday needs a
                  consultant to configure. Asana charges enterprise prices for basic AI.
                </p>
                <p>
                  We believe <strong className="text-white">simple scales</strong>.
                </p>
                <p>
                  A 5-person startup and a 500-person enterprise have the same core need: get work done.
                  They don't need different tools. They need the same tool—one that works.
                </p>
                <p className="text-violet-400 font-medium">
                  Simple isn't "less than." Simple is "exactly enough."
                </p>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Our values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: "No Complexity",
                  description:
                    "Every feature earns its place. If it doesn't help you finish work faster, it doesn't exist. We reject feature bloat.",
                },
                {
                  icon: Shield,
                  title: "Respect Your Time",
                  description:
                    "30-second setup, not 30-day onboarding. Tools should serve you, not the other way around.",
                },
                {
                  icon: Heart,
                  title: "Honest & Accessible",
                  description:
                    "Core features remain free. No artificial limitations. No dark patterns. No enterprise tax on basic functionality.",
                },
              ].map((value, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <value.icon className="h-8 w-8 text-violet-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What We Build */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">What we build</h2>
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold mb-2">Project Management</h3>
                <p className="text-slate-600 mb-4">
                  Full-featured task management with 4 views, free AI, and built-in time tracking.
                  Works instantly in Telegram or web. For teams of any size.
                </p>
                <Link href="/project-management" className="text-violet-400 hover:text-violet-300 inline-flex items-center gap-1">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold mb-2">GEO Analyzer</h3>
                <p className="text-slate-600 mb-4">
                  Generative Engine Optimization for the future of search. Optimize your content
                  for AI-powered search engines like ChatGPT, Perplexity, and Google SGE.
                </p>
                <Link href="/geoanalyzer" className="text-violet-400 hover:text-violet-300 inline-flex items-center gap-1">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold mb-2">Custom Enterprise Solutions</h3>
                <p className="text-slate-600 mb-4">
                  For teams with specific needs, we build custom project management solutions.
                  Same philosophy: simple, fast, no bloat. Just built exactly for you.
                </p>
                <Link href="/enterprise" className="text-violet-400 hover:text-violet-300 inline-flex items-center gap-1">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold mb-2">Free Tools</h3>
                <p className="text-slate-600 mb-4">
                  PDF merger, compressor, converter. QR code generator. SEO analyzer.
                  No signup, no limits, no catch. Just use them.
                </p>
                <Link href="/tools" className="text-violet-400 hover:text-violet-300 inline-flex items-center gap-1">
                  See all tools <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* The Team */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Built by a small team</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Whatstask is developed by a lean team passionate about productivity tools.
              We ship fast, listen to feedback, and believe that the best software
              comes from people who actually use what they build.
            </p>
            <p className="text-slate-600">
              Want to know more about our story?{" "}
              <Link href="/founder" className="text-violet-400 hover:underline">
                Read about our founder
              </Link>
              .
            </p>
          </section>

          {/* Contact */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
            <p className="text-lg text-slate-600 mb-6">
              Have questions, feedback, or ideas? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-white text-black hover:bg-white/90 rounded-full px-6">
                <a href="mailto:charlesaarondavid@gmail.com">
                  Email Us
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6 border-slate-300">
                <Link href="/contact">Contact Form</Link>
              </Button>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 md:p-12 border border-slate-200 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to simplify your work?</h2>
              <p className="text-slate-600 mb-8">
                Join teams who've chosen simplicity over complexity.
              </p>
              <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  <Send className="h-5 w-5 mr-2" />
                  Start Free
                </a>
              </Button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-100 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
