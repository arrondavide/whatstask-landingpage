"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { X, ArrowRight, Check, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PrivacyPolicy from "@/components/privacy-policy"
import Navigation from "@/components/navigation"

export default function HomeClient() {
  const [privacyDialogOpen, setPrivacyDialogOpen] = useState(false)

  useEffect(() => {
    if (privacyDialogOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [privacyDialogOpen])

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white">
      <Navigation variant="dark" />

      {/* Privacy Dialog */}
      <Dialog open={privacyDialogOpen} onOpenChange={setPrivacyDialogOpen}>
        <DialogContent className="bg-[#111] border border-white/10 text-white w-[95vw] max-w-lg p-0 rounded-2xl">
          <div className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-white/10 bg-[#111] rounded-t-2xl">
            <h2 className="font-bold text-lg">Privacy Policy</h2>
            <DialogClose className="rounded-full p-2 hover:bg-white/10 transition-colors">
              <X className="h-5 w-5" />
            </DialogClose>
          </div>
          <div className="max-h-[70vh] overflow-y-auto">
            <PrivacyPolicy />
          </div>
        </DialogContent>
      </Dialog>

      {/* ===== LAYER 1: THE HOOK ===== */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.12),transparent)]" />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Your team is on Telegram.
              <br />
              <span className="text-neutral-400">Your work tools aren't.</span>
              <br />
              <span className="text-violet-400">We fix that.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Connect your PM tools to Telegram workers. Or send notifications from any app.
              In minutes, not months.
            </p>

            {/* Two CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button asChild className="bg-white text-black hover:bg-neutral-100 rounded-full px-8 py-6 text-base font-semibold">
                <Link href="/pm-connect" className="flex items-center gap-2">
                  Connect Your PM Tool
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base bg-transparent">
                <Link href="/developers">
                  View Developer API
                </Link>
              </Button>
            </div>

            {/* Trust Signals - HONEST, no fake metrics */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Free during early access
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Works inside Telegram
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Set up in 5 minutes
              </span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-16">
            <ChevronDown className="h-6 w-6 text-neutral-600 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ===== LAYER 2: THE THREE MODES ===== */}
      <section className="py-24 px-4 bg-[#111]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-sm text-neutral-500 uppercase tracking-widest mb-4">Three Ways to Use Whatstask</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              One platform. Multiple entry points.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* PM Connect Card */}
            <Link href="/pm-connect" className="group">
              <div className="h-full p-8 bg-blue-500/10 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/15 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">PM Connect</h3>
                <p className="text-neutral-400 mb-6 leading-relaxed">
                  Bridge your existing PM tools to Telegram workers. Monday.com, Asana, ClickUp, Trello — all supported.
                </p>
                <p className="text-sm text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                  Learn more →
                </p>
              </div>
            </Link>

            {/* Developer API Card */}
            <Link href="/developers" className="group">
              <div className="h-full p-8 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/15 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Developer API</h3>
                <p className="text-neutral-400 mb-6 leading-relaxed">
                  Send Telegram notifications from any app. 3 lines of code. GitHub, Stripe, CI/CD — anything with a webhook.
                </p>
                <p className="text-sm text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                  View docs →
                </p>
              </div>
            </Link>

            {/* Full Workspace Card */}
            <Link href="/workspace" className="group">
              <div className="h-full p-8 bg-violet-500/10 rounded-2xl border border-violet-500/20 hover:border-violet-500/40 hover:bg-violet-500/15 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Full Workspace</h3>
                <p className="text-neutral-400 mb-6 leading-relaxed">
                  Complete PM tool inside Telegram. Kanban boards, time tracking, AI task creation, team analytics.
                </p>
                <p className="text-sm text-violet-400 font-medium group-hover:text-violet-300 transition-colors">
                  Explore features →
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PM CONNECT SPOTLIGHT ===== */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-blue-400 uppercase tracking-widest mb-4">PM Connect</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't replace your PM tools.
                <br />Extend them to Telegram.
              </h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Your managers love Monday.com. Your field workers never open it.
                PM Connect bridges the gap — tasks flow from your PM tool to workers on Telegram,
                and their updates sync back automatically.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Monday.com, Asana, ClickUp, Trello supported",
                  "Workers receive tasks in Telegram instantly",
                  "One tap: Start, Complete, Report Problem",
                  "Photos and notes sync back to your PM tool",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-5">
                <Link href="/pm-connect" className="flex items-center gap-2">
                  Set Up PM Connect
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Flow Diagram */}
            <div className="bg-white/5 rounded-2xl border border-white/10 p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">PM</div>
                  <div>
                    <p className="font-semibold text-white">Your PM Tool</p>
                    <p className="text-sm text-neutral-500">Monday, ClickUp, Asana...</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-8 bg-white/20 relative">
                    <ChevronDown className="w-5 h-5 text-neutral-500 absolute -bottom-2 left-1/2 -translate-x-1/2" />
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-violet-500/10 rounded-xl border border-violet-500/20">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center">
                    <Image src="/logo.png" alt="Whatstask" width={24} height={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Whatstask PM Connect</p>
                    <p className="text-sm text-neutral-500">Routes tasks to workers</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-8 bg-white/20 relative">
                    <ChevronDown className="w-5 h-5 text-neutral-500 absolute -bottom-2 left-1/2 -translate-x-1/2" />
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Your Workers</p>
                    <p className="text-sm text-neutral-500">Receive, complete, report</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WORKS WITH SECTION ===== */}
      <section className="py-24 px-4 bg-[#111]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="text-sm text-neutral-500 uppercase tracking-widest mb-4">Works With Your Tools</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Use Whatstask WITH your PM tools, not instead of them
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              PM Connect bridges your existing tools to Telegram. Your managers keep using what they love.
              Your workers get tasks where they already are.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Monday.com", href: "/compare/monday" },
              { name: "Asana", href: "/compare/asana" },
              { name: "ClickUp", href: "/compare/clickup" },
              { name: "Trello", href: "/compare/trello" },
            ].map((tool, idx) => (
              <Link
                key={idx}
                href={tool.href}
                className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all text-center group"
              >
                <p className="font-medium text-white group-hover:text-violet-400 transition-colors">{tool.name}</p>
                <p className="text-xs text-neutral-500 mt-1">+ Telegram</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <p className="text-sm text-neutral-500 uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold">Common questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is PM Connect?",
                a: "PM Connect bridges your existing PM tools (Monday.com, Asana, ClickUp, Trello) to Telegram. Tasks flow from your PM tool to workers on Telegram, and their updates sync back automatically."
              },
              {
                q: "Do I need to replace my current PM tool?",
                a: "No. PM Connect works WITH your existing tools, not instead of them. Your managers keep using Monday.com or Asana. Your workers get tasks in Telegram."
              },
              {
                q: "How does the Developer API work?",
                a: "One API call sends a notification to any Telegram user. Perfect for CI/CD pipelines, payment systems, monitoring tools, or any app that needs to reach your team on Telegram."
              },
              {
                q: "What's the Full Workspace?",
                a: "If you don't use another PM tool, Whatstask is a complete project management solution inside Telegram. Kanban boards, time tracking, AI task creation, team analytics — all built in."
              },
              {
                q: "Is there a free tier?",
                a: "Yes. During early access, all core features are free. No credit card required. Just start using it."
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 rounded-xl border border-white/10 p-6 hover:border-white/20 transition-colors">
                <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                <p className="text-neutral-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24 px-4 bg-[#111]">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to connect your team?
          </h2>
          <p className="text-neutral-400 mb-10 text-lg">
            Start with PM Connect or the Developer API. Free during early access.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-black hover:bg-neutral-100 rounded-full px-8 py-6 text-base font-semibold">
              <Link href="/pm-connect" className="flex items-center gap-2">
                Connect Your PM Tool
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base bg-transparent">
              <Link href="/developers">
                View Developer API
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-16 px-4 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.png" alt="Whatstask Logo" width={24} height={24} />
                <span className="font-bold text-white">Whatstask</span>
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Connect your PM tools to Telegram workers. Or send notifications from any app.
              </p>
            </div>

            {/* Products */}
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

            {/* Free Tools */}
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

            {/* Company */}
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
                <li>
                  <button
                    onClick={() => setPrivacyDialogOpen(true)}
                    className="text-sm text-neutral-500 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Works With Links */}
          <div className="border-t border-white/5 pt-8 mb-8">
            <div className="flex flex-wrap gap-6 text-xs text-neutral-600">
              {[
                { name: "Monday.com + Telegram", href: "/compare/monday" },
                { name: "Asana + Telegram", href: "/compare/asana" },
                { name: "ClickUp + Telegram", href: "/compare/clickup" },
                { name: "Trello + Telegram", href: "/compare/trello" },
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="hover:text-neutral-400 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-neutral-600">
            © {new Date().getFullYear()} Whatstask. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
