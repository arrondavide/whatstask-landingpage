"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { X, ArrowRight, ChevronDown, Check, FileText, Brain, Users, Zap, Globe, MessageSquare, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PrivacyPolicy from "@/components/privacy-policy"
import Navigation from "@/components/navigation"
import PageLoader from "@/components/page-loader"
import { PhoneMockup } from "@/components/phone-mockup"

export default function HomeClient() {
  const [privacyDialogOpen, setPrivacyDialogOpen] = useState(false)

  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3])

  useEffect(() => {
    if (privacyDialogOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [privacyDialogOpen])

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setPrivacyDialogOpen(true)
  }

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <PageLoader />

      {/* Header */}
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 w-full overflow-hidden bg-[#0a0a0a]">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_80%_50%,rgba(139,92,246,0.06),transparent)]" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Top edge glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

        <div className="container mx-auto max-w-6xl relative z-10 px-4">
          <div className="flex flex-col items-center">
            <motion.div style={{ opacity: heroOpacity }} className="text-center max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Simple Scales Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
                  <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                  <span className="text-white/70 text-sm font-medium tracking-wide">Simple Scales</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8 text-white">
                  AI-powered work
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">infrastructure</span>
                </h1>

                <p className="text-lg md:text-xl text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto mb-12">
                  Upload a document. AI creates every task and assigns your team.
                  <span className="text-neutral-300"> Connect your tools. Send notifications. All inside Telegram.</span>
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              >
                <Button asChild className="bg-white text-black hover:bg-neutral-100 rounded-full px-8 py-6 text-base font-semibold transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Start Free
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 rounded-full px-8 py-6 text-base font-medium bg-transparent transition-all">
                  <Link href="/how-it-works">
                    See AI in Action
                  </Link>
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500"
              >
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-green-500" />
                  Free forever tier
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-green-500" />
                  No credit card
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-green-500" />
                  Works in Telegram
                </span>
              </motion.div>
            </motion.div>

            {/* Phone Mockups */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative flex justify-center items-end mt-20"
            >
              {/* Glow effect under phones */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-violet-500/10 rounded-full blur-[100px]" />

              <div className="flex items-end relative">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="hidden sm:block scale-[0.6] md:scale-[0.7] origin-bottom -mr-6 md:-mr-10 opacity-80"
                >
                  <PhoneMockup src="/appui/app-projects.webp" alt="Projects Screen" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative z-10 scale-[0.75] md:scale-[0.85]"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-violet-500/20 blur-3xl rounded-3xl scale-90" />
                    <PhoneMockup src="/appui/app-onboarding.webp" alt="WhatsTask Onboarding" priority />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="hidden sm:block scale-[0.6] md:scale-[0.7] origin-bottom -ml-6 md:-ml-10 opacity-80"
                >
                  <PhoneMockup src="/appui/app-stats-personal.webp" alt="Statistics Screen" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center gap-2 text-neutral-600 mt-16"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="relative py-24 md:py-32 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-neutral-500 uppercase tracking-[0.2em] mb-4 font-medium">One Platform, Three Modes</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">
              Everything connects through Telegram
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Use it as your PM tool. Connect your existing tools. Send notifications from any app. All simple. All scales.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* AI Task Engine */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <div className="h-full p-8 bg-violet-500/10 rounded-2xl border border-violet-500/20 hover:border-violet-500/40 hover:bg-violet-500/15 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI Task Engine</h3>
                <p className="text-neutral-400 mb-6 leading-relaxed">
                  Upload documents, describe projects in plain language. AI creates tasks, sets priorities, and assigns your team intelligently.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-violet-400" />
                    </div>
                    <span className="text-sm text-neutral-300">Document → Tasks automatically</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-violet-400" />
                    </div>
                    <span className="text-sm text-neutral-300">Natural language commands</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-violet-400" />
                    </div>
                    <span className="text-sm text-neutral-300">Smart team assignment</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* PM Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="h-full p-8 bg-blue-500/10 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/15 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">PM Connect</h3>
                <p className="text-neutral-400 mb-6 leading-relaxed">
                  Already use Monday, ClickUp, or Asana? Bridge your existing PM tools to Telegram workers with one webhook.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-sm text-neutral-300">Monday.com integration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-sm text-neutral-300">ClickUp, Asana, Trello</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-sm text-neutral-300">Any webhook source</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Developer API */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="h-full p-8 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/15 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Developer API</h3>
                <p className="text-neutral-400 mb-6 leading-relaxed">
                  Send Telegram notifications from any application. CI/CD, payments, monitoring—one API call, instant delivery.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-sm text-neutral-300">Simple REST API</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-sm text-neutral-300">GitHub, Stripe, Vercel webhooks</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-sm text-neutral-300">Auto task creation</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-neutral-500 mt-12 text-sm"
          >
            All three capabilities built into one platform. Simple to start. Scales infinitely.
          </motion.p>
        </div>
      </section>

      {/* AI Features Deep Dive */}
      <section className="relative py-24 md:py-32 px-4 bg-[#111]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-neutral-500 uppercase tracking-[0.2em] mb-4 font-medium">AI That Works</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">
              You describe. AI builds.
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Stop creating tasks manually. Let AI handle the complexity while you stay focused on what matters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                icon: FileText,
                title: "Document → Tasks",
                simple: "Upload one file",
                scales: "AI extracts all tasks, subtasks, deadlines, and priorities automatically",
                color: "violet"
              },
              {
                icon: MessageSquare,
                title: "Natural Language",
                simple: "\"Create marketing tasks for Q2\"",
                scales: "AI builds entire project structure with intelligent organization",
                color: "blue"
              },
              {
                icon: Users,
                title: "Smart Assignment",
                simple: "Add team members",
                scales: "AI assigns based on skills, availability, and current workload",
                color: "emerald"
              },
              {
                icon: Clock,
                title: "Daily Digest",
                simple: "Open Telegram",
                scales: "AI summarizes what happened yesterday and what's coming up",
                color: "orange"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-full p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6`} style={{ backgroundColor: item.color === 'violet' ? 'rgba(139,92,246,0.2)' : item.color === 'blue' ? 'rgba(59,130,246,0.2)' : item.color === 'emerald' ? 'rgba(16,185,129,0.2)' : 'rgba(249,115,22,0.2)' }}>
                    <item.icon className="w-6 h-6" style={{ color: item.color === 'violet' ? '#a78bfa' : item.color === 'blue' ? '#60a5fa' : item.color === 'emerald' ? '#34d399' : '#fb923c' }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Simple</span>
                      <p className="text-neutral-300 mt-1">{item.simple}</p>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Scales</span>
                      <p className="text-neutral-300 mt-1">{item.scales}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="relative py-24 md:py-36 lg:py-48 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 md:mb-28 lg:mb-36"
          >
            <p className="text-sm text-neutral-500 uppercase tracking-[0.2em] mb-4 font-medium">See It In Action</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">
              A complete workspace in Telegram
            </h2>
            <p className="text-base md:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed">
              From project creation to team analytics, everything you need is accessible right from your chat app.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-10 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20">
            {[
              { src: "/appui/app-create-project.webp", label: "Create Projects", desc: "Set up new projects with AI assistance" },
              { src: "/appui/app-projects.webp", label: "Manage Tasks", desc: "View and organize all your work" },
              { src: "/appui/app-team-management.webp", label: "Team Management", desc: "Invite members and assign roles" },
              { src: "/appui/app-stats-team.webp", label: "Team Analytics", desc: "Track productivity across your team" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex flex-col items-center text-center group"
                style={{ width: '200px' }}
              >
                <div className="mb-8 transition-transform duration-300 group-hover:scale-[1.02]">
                  <PhoneMockup src={item.src} alt={item.label} />
                </div>
                <h3 className="font-semibold text-white text-base md:text-lg mb-2">{item.label}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PM Connect Deep Dive */}
      <section className="relative py-24 md:py-32 px-4 bg-[#111]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-blue-400 uppercase tracking-[0.2em] mb-4 font-medium">PM Connect</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
                Don't replace your tools.
                <br />Extend them.
              </h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Your managers use Monday.com. Your field workers live in Telegram. PM Connect bridges the gap without forcing anyone to switch.
              </p>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                One webhook URL. Tasks flow from your PM tool to Telegram workers instantly. They respond with updates, photos, and completion status—all synced back.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Monday.com, ClickUp, Asana, Trello supported",
                  "Workers receive tasks in Telegram instantly",
                  "Start, complete, report problems with one tap",
                  "Photos and notes sync back to your PM tool",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-5 transition-all hover:shadow-lg">
                <Link href="/pm-connect" className="flex items-center gap-2">
                  Learn about PM Connect
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Flow diagram */}
              <div className="bg-white/5 rounded-2xl border border-white/10 p-8">
                <div className="space-y-6">
                  {/* Source */}
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">PM</div>
                    <div>
                      <p className="font-semibold text-white">Your PM Tool</p>
                      <p className="text-sm text-neutral-500">Monday, ClickUp, Asana...</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-white/20 relative">
                      <ChevronDown className="w-5 h-5 text-neutral-500 absolute -bottom-2 left-1/2 -translate-x-1/2" />
                    </div>
                  </div>

                  {/* WhatsTask */}
                  <div className="flex items-center gap-4 p-4 bg-violet-500/10 rounded-xl border border-violet-500/20">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center">
                      <Image src="/logo.png" alt="WhatsTask" width={24} height={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">WhatsTask PM Connect</p>
                      <p className="text-sm text-neutral-500">Routes tasks to workers</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-white/20 relative">
                      <ChevronDown className="w-5 h-5 text-neutral-500 absolute -bottom-2 left-1/2 -translate-x-1/2" />
                    </div>
                  </div>

                  {/* Telegram */}
                  <div className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Field Workers</p>
                      <p className="text-sm text-neutral-500">Receive, complete, report</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Developer API Section */}
      <section className="relative py-24 md:py-32 px-4 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(139,92,246,0.08),transparent)]" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-emerald-400 uppercase tracking-[0.2em] mb-4 font-medium">Developer API</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
                Telegram notifications
                <br />in 3 lines of code
              </h2>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Send notifications to Telegram from any application. No bot management. No complexity. Just one API call.
              </p>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                Perfect for CI/CD pipelines, payment systems, monitoring tools, or any app that needs to reach your team on Telegram.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["GitHub", "Stripe", "Vercel", "Linear", "Custom"].map((service, index) => (
                  <span key={index} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-neutral-300">
                    {service}
                  </span>
                ))}
              </div>

              <Button asChild className="bg-white text-black hover:bg-neutral-100 rounded-full px-8 py-5 transition-all hover:shadow-lg">
                <Link href="/developers" className="flex items-center gap-2">
                  View API Docs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Code block */}
              <div className="bg-[#1a1a1a] rounded-2xl border border-white/10 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-neutral-500">send-notification.sh</span>
                </div>
                <pre className="p-6 text-sm overflow-x-auto">
                  <code className="text-neutral-300">
{`curl -X POST https://whatstask.com/api/v1/notify \\
  -H "Authorization: Bearer wt_your_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "telegram_id": "123456789",
    "title": "Deploy Complete",
    "message": "Production is live!",
    "priority": "high"
  }'`}
                  </code>
                </pre>
              </div>

              <p className="text-center text-neutral-500 text-sm mt-4">
                That's it. Message delivered to Telegram instantly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 md:py-32 px-4 bg-[#111]">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-neutral-500 uppercase tracking-[0.2em] mb-4 font-medium">Features</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">
              Everything you need, nothing you don't
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Built for simplicity. Designed for productivity. The essential tools without the bloat.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "5 Powerful Views",
                desc: "List, Kanban, Calendar, Timeline, Table. Switch between views instantly. Your data, multiple perspectives.",
              },
              {
                title: "Works in Telegram",
                desc: "No new apps to download. WhatsTask runs entirely inside Telegram, the messenger you already use daily.",
              },
              {
                title: "Built-in Analytics",
                desc: "Understand how your team works with productivity insights. Track progress and make data-driven decisions.",
              },
              {
                title: "Time Tracking",
                desc: "Track time with a single tap. Generate reports ready for client billing automatically.",
              },
              {
                title: "Team Collaboration",
                desc: "Add unlimited team members. Assign roles, track work, and keep everyone aligned in real-time.",
              },
              {
                title: "Multi-Company",
                desc: "Manage multiple companies or clients from one account. Switch between organizations seamlessly.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="h-full p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 group">
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-violet-400 transition-colors">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-neutral-400 text-sm font-medium hover:text-white transition-colors hover:gap-3"
            >
              View all features
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative py-24 md:py-32 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-neutral-500 uppercase tracking-[0.2em] mb-4 font-medium">Comparison</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
              Why teams choose WhatsTask
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              See how we compare to traditional project management tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="text-left p-4 font-semibold text-white">Feature</th>
                      <th className="p-4 font-semibold text-violet-400">WhatsTask</th>
                      <th className="p-4 font-semibold text-neutral-500">Trello</th>
                      <th className="p-4 font-semibold text-neutral-500">Asana</th>
                      <th className="p-4 font-semibold text-neutral-500">Monday</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "No app install required", whatstask: true, trello: false, asana: false, monday: false },
                      { feature: "Works inside Telegram", whatstask: true, trello: false, asana: false, monday: false },
                      { feature: "AI task creation from docs", whatstask: true, trello: false, asana: false, monday: false },
                      { feature: "AI smart assignment", whatstask: true, trello: false, asana: false, monday: false },
                      { feature: "Built-in notification API", whatstask: true, trello: false, asana: false, monday: false },
                      { feature: "Connect external PM tools", whatstask: true, trello: false, asana: false, monday: false },
                      { feature: "Multiple views", whatstask: "5", trello: "1", asana: "4", monday: "8" },
                      { feature: "Time tracking", whatstask: true, trello: "addon", asana: "addon", monday: "addon" },
                      { feature: "Free tier", whatstask: "Generous", trello: "Limited", asana: "Limited", monday: "Limited" },
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-white/5 last:border-0">
                        <td className="p-4 text-neutral-300">{row.feature}</td>
                        <td className="p-4 text-center">
                          {row.whatstask === true ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : row.whatstask === false ? (
                            <X className="w-5 h-5 text-neutral-600 mx-auto" />
                          ) : (
                            <span className="text-violet-400 font-medium">{row.whatstask}</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {row.trello === true ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : row.trello === false ? (
                            <X className="w-5 h-5 text-neutral-600 mx-auto" />
                          ) : (
                            <span className="text-neutral-500 text-sm">{row.trello}</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {row.asana === true ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : row.asana === false ? (
                            <X className="w-5 h-5 text-neutral-600 mx-auto" />
                          ) : (
                            <span className="text-neutral-500 text-sm">{row.asana}</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {row.monday === true ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : row.monday === false ? (
                            <X className="w-5 h-5 text-neutral-600 mx-auto" />
                          ) : (
                            <span className="text-neutral-500 text-sm">{row.monday}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-24 md:py-32 px-4 bg-[#111]">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-neutral-500 uppercase tracking-[0.2em] mb-4 font-medium">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
              From zero to productive in three steps
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              No lengthy onboarding. No complex setup. Just open Telegram and start.
            </p>
          </motion.div>

          <div className="space-y-20">
            {[
              {
                step: "01",
                title: "Open Telegram and find WhatsTask",
                desc: "Search for @whatstaskbot in Telegram and tap Start. That's it—no accounts to create, no apps to download. The bot guides you through a quick onboarding.",
                image: "/appui/app-onboarding.webp",
              },
              {
                step: "02",
                title: "Describe your project to the AI",
                desc: "Upload a document or describe your project in plain language. AI creates structured projects with tasks, deadlines, priorities, and even assigns your team intelligently.",
                image: "/appui/app-create-project.webp",
              },
              {
                step: "03",
                title: "Manage, track, and collaborate",
                desc: "Switch between views, assign tasks to team members, track time, and monitor progress. All without leaving your messenger.",
                image: "/appui/app-team-management.webp",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-bold text-neutral-700">{item.step}</span>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-neutral-400 leading-relaxed text-lg">{item.desc}</p>
                </div>
                <div className={`flex justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="scale-[0.85] transition-transform duration-300 hover:scale-[0.87]">
                    <PhoneMockup src={item.image} alt={item.title} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6 text-base transition-all hover:shadow-lg">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Start Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 md:py-32 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-neutral-500 uppercase tracking-[0.2em] mb-4 font-medium">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
              Common questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "What is a Telegram Mini App?",
                a: "Mini Apps are web applications that run inside Telegram. They look and feel native but are actually web pages. You don't need to install anything—just tap to open. It's like having an app inside your messenger."
              },
              {
                q: "Do I need to create a new account?",
                a: "No. WhatsTask uses your Telegram account for authentication. Just open the Mini App and you're logged in instantly. No passwords, no sign-up forms."
              },
              {
                q: "Is my data secure?",
                a: "Yes. We use industry-standard encryption. Your data is stored securely and never shared with third parties. We don't have access to your Telegram messages—only the data you create in WhatsTask."
              },
              {
                q: "Can I use WhatsTask on desktop?",
                a: "Yes! Telegram Desktop supports Mini Apps. WhatsTask works seamlessly on mobile and desktop."
              },
              {
                q: "How does AI task creation work?",
                a: "Upload a document (PDF, Word, etc.) or describe your project in plain language. Our AI reads the content, extracts tasks, sets priorities and deadlines, and can even assign team members based on their skills and availability."
              },
              {
                q: "What is PM Connect?",
                a: "PM Connect lets you bridge existing PM tools (Monday.com, ClickUp, Asana, Trello) to Telegram. Tasks from your PM tool automatically flow to workers on Telegram, and their updates sync back."
              },
              {
                q: "Can I export my data?",
                a: "Yes. You can export projects, tasks, and time logs as JSON or CSV at any time."
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="bg-white/5 rounded-xl border border-white/10 p-6 hover:border-white/20 transition-colors">
                  <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                  <p className="text-neutral-400 leading-relaxed">{item.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative py-24 md:py-32 px-4 bg-[#111]">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-neutral-500 uppercase tracking-[0.2em] mb-4 font-medium">Solutions</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
              Built for teams of any size
            </h2>
            <p className="text-lg text-neutral-400 max-w-xl mx-auto">
              From solo freelancers to enterprise teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Freelancers", desc: "Personal productivity", href: "/use-cases/freelancers" },
              { title: "Startups", desc: "Agile workflows", href: "/use-cases/startups" },
              { title: "Agencies", desc: "Client management", href: "/use-cases/agencies" },
              { title: "Enterprise", desc: "Scale with control", href: "/enterprise" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={item.href} className="block group">
                  <div className="border border-white/10 rounded-2xl p-6 h-full hover:border-violet-500/30 hover:bg-white/5 transition-all duration-300">
                    <h3 className="font-semibold text-white mb-1 group-hover:text-violet-400 transition-colors">{item.title}</h3>
                    <p className="text-sm text-neutral-500">{item.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative py-24 md:py-32 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-neutral-500 uppercase tracking-[0.2em] mb-4 font-medium">Products</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
              Two products, one philosophy
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Simple Scales. Work tools that grow with you.
            </p>
          </motion.div>

          {/* Project Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 lg:p-14 hover:border-white/20 transition-all duration-300 overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-8">
                  <p className="text-xs text-violet-400 uppercase tracking-[0.2em] mb-5 font-semibold">Core Product</p>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Project Management</h3>

                  <p className="text-neutral-400 mb-5 leading-relaxed">
                    AI-powered work infrastructure in Telegram. Create projects from documents, manage tasks with intelligent assignment, track time, and collaborate—all from your messenger.
                  </p>
                  <p className="text-neutral-400 mb-10 leading-relaxed">
                    Includes Developer API for notifications and PM Connect to bridge your existing tools.
                  </p>

                  <ul className="grid grid-cols-2 gap-x-8 gap-y-3 mb-10">
                    {[
                      "AI task creation from documents",
                      "5 views: List, Board, Calendar, Timeline, Table",
                      "Smart team assignment",
                      "Built-in time tracking",
                      "Developer API included",
                      "PM Connect included",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-neutral-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-5 pt-2">
                    <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-5 transition-all hover:shadow-lg">
                      <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                        Get Started Free
                      </a>
                    </Button>
                    <span className="text-sm text-neutral-500">No credit card required</span>
                  </div>
                </div>

                <div className="lg:col-span-4 hidden lg:flex justify-end items-center">
                  <div className="relative">
                    <div className="scale-[0.85]">
                      <PhoneMockup src="/appui/app-onboarding.webp" alt="Onboarding" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* GEO Analyzer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-10 lg:p-14 hover:border-white/20 transition-all duration-300">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-8">
                  <p className="text-xs text-violet-400 uppercase tracking-[0.2em] mb-5 font-semibold">AI Tool</p>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">GEO Analyzer</h3>

                  <p className="text-neutral-400 mb-5 leading-relaxed">
                    AI search optimization for the new era. As ChatGPT, Perplexity, and Google SGE become primary discovery channels, your content needs to be AI-readable.
                  </p>
                  <p className="text-neutral-400 mb-10 leading-relaxed">
                    Analyze any URL, get an AI readability score, and receive specific recommendations to improve visibility.
                  </p>

                  <ul className="grid grid-cols-2 gap-x-8 gap-y-3 mb-10">
                    {[
                      "Analyze AI readability score",
                      "Optimize for all AI engines",
                      "Track AI search performance",
                      "3 free analyses daily",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-neutral-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <Button asChild variant="outline" className="border-white/20 hover:bg-white/10 hover:border-white/30 rounded-full px-8 py-5 transition-all text-white bg-transparent">
                      <a href="https://geoanalyzer.whatstask.com" target="_blank" rel="noopener noreferrer">
                        Try Analyzer Free
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="hidden lg:flex lg:col-span-4 justify-center items-center">
                  <div className="w-full max-w-[200px] aspect-[3/4] bg-violet-500/10 rounded-2xl flex items-center justify-center border border-violet-500/20">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-violet-400 mb-2">GEO</div>
                      <div className="text-sm text-neutral-500">AI Search</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Free Tools Section */}
      <section className="relative py-24 px-4 bg-[#111]">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm text-neutral-500 uppercase tracking-[0.2em] mb-4 font-medium">Free Tools</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
              Productivity utilities
            </h2>
            <p className="text-neutral-400">PDF tools, QR codes, and more. Forever free.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
            {[
              { name: "PDF Merger", href: "/pdf-merger" },
              { name: "PDF Compressor", href: "/pdf-compressor" },
              { name: "PDF to JPG", href: "/pdf-to-jpg" },
              { name: "JPG to PDF", href: "/jpg-to-pdf" },
              { name: "PDF Splitter", href: "/pdf-splitter" },
              { name: "QR Code", href: "/qr-code-generator" },
            ].map((tool, index) => (
              <motion.a
                key={index}
                href={tool.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-violet-500/30 hover:bg-white/[0.07] transition-all duration-300">
                  <p className="text-sm text-neutral-300 font-medium">{tool.name}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 text-neutral-400 text-sm font-medium hover:text-white transition-colors hover:gap-3"
            >
              View all tools
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="relative py-24 md:py-32 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-neutral-500 uppercase tracking-[0.2em] mb-4 font-medium">Enterprise</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
                Need something custom?
              </h2>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                White-label solutions, custom integrations, and dedicated support for organizations with specific requirements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-6 py-5 transition-all hover:shadow-lg">
                  <Link href="/enterprise">Learn More</Link>
                </Button>
                <Button asChild variant="outline" className="border-white/20 hover:bg-white/10 hover:border-white/30 rounded-full px-6 py-5 transition-all text-white bg-transparent">
                  <a href="mailto:charlesaarondavid@gmail.com">Contact Sales</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Custom Integrations", desc: "Connect your tools" },
                  { title: "White-label", desc: "Your brand" },
                  { title: "Migration Support", desc: "Move from any tool" },
                  { title: "Team Training", desc: "Onboarding help" },
                ].map((item, index) => (
                  <div key={index} className="border border-white/10 rounded-2xl p-5 hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-neutral-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden bg-[#111]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(139,92,246,0.12),transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <span className="text-white/70 text-sm font-medium">Simple Scales</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">
              Simple to start. Scales when you're ready.
            </h2>
            <p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto">
              AI-powered work infrastructure that grows with your team.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-neutral-500">
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-green-500" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-green-500" />
                Free tier available
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-green-500" />
                Cancel anytime
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-black hover:bg-neutral-100 rounded-full px-8 py-6 text-base font-semibold transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 rounded-full px-8 py-6 text-base font-medium bg-transparent transition-all">
                <Link href="/contact">Talk to Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.png" alt="Whatstask Logo" width={24} height={24} />
                <span className="font-bold text-white">Whatstask</span>
              </div>
              <p className="text-sm text-neutral-500 mb-2 max-w-xs leading-relaxed">
                AI-powered work infrastructure for teams who want simplicity without sacrificing power.
              </p>
              <p className="text-xs text-neutral-600 mb-4 italic">Simple Scales</p>
              <p className="text-sm text-neutral-500">
                <a href="mailto:charlesaarondavid@gmail.com" className="hover:text-white transition-colors">
                  charlesaarondavid@gmail.com
                </a>
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold mb-4 text-sm text-white">Products</h4>
              <ul className="space-y-2">
                {[
                  { name: "Project Management", href: "/project-management" },
                  { name: "Developer API", href: "/developers" },
                  { name: "PM Connect", href: "/pm-connect" },
                  { name: "GEO Analyzer", href: "/geoanalyzer" },
                  { name: "Free Tools", href: "/tools" },
                  { name: "Pricing", href: "/pricing" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-sm text-neutral-500 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-semibold mb-4 text-sm text-white">Solutions</h4>
              <ul className="space-y-2">
                {[
                  { name: "Freelancers", href: "/use-cases/freelancers" },
                  { name: "Agencies", href: "/use-cases/agencies" },
                  { name: "Startups", href: "/use-cases/startups" },
                  { name: "Enterprise", href: "/enterprise" },
                ].map((link, index) => (
                  <li key={index}>
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
                  { name: "Documentation", href: "/docs" },
                  { name: "Contact", href: "/contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-sm text-neutral-500 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <button onClick={handlePrivacyClick} className="text-sm text-neutral-500 hover:text-white transition-colors">
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Compare Links */}
          <div className="border-t border-white/5 pt-8 mb-8">
            <div className="flex flex-wrap gap-6 text-xs text-neutral-600">
              {[
                { name: "vs ClickUp", href: "/compare/clickup" },
                { name: "vs Monday", href: "/compare/monday" },
                { name: "vs Asana", href: "/compare/asana" },
                { name: "vs Todoist", href: "/compare/todoist" },
                { name: "vs Notion", href: "/compare/notion" },
              ].map((link, index) => (
                <Link key={index} href={link.href} className="hover:text-neutral-400 transition-colors">
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
