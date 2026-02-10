"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { X, ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PrivacyPolicy from "@/components/privacy-policy"
import Navigation from "@/components/navigation"
import PageLoader from "@/components/page-loader"
import { PhoneMockup } from "@/components/phone-mockup"

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)
  const [privacyDialogOpen, setPrivacyDialogOpen] = useState(false)

  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (privacyDialogOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [privacyDialogOpen])

  if (!mounted) return null

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setPrivacyDialogOpen(true)
  }

  return (
    <div className="relative min-h-screen bg-white text-slate-900 overflow-hidden">
      <PageLoader />

      {/* Header */}
      <Navigation />

      {/* Privacy Dialog */}
      <Dialog open={privacyDialogOpen} onOpenChange={setPrivacyDialogOpen}>
        <DialogContent className="bg-white border border-slate-200 text-slate-900 w-[95vw] max-w-lg p-0">
          <div className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-slate-200 bg-white">
            <h2 className="font-bold text-lg">Privacy Policy</h2>
            <DialogClose className="rounded-full p-2 hover:bg-slate-100">
              <X className="h-5 w-5" />
            </DialogClose>
          </div>
          <div className="max-h-[70vh] overflow-y-auto">
            <PrivacyPolicy />
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 w-full bg-slate-950 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        <div className="container mx-auto max-w-6xl relative z-10 px-4">
          <div className="flex flex-col items-center">
            <motion.div style={{ opacity: heroOpacity }} className="text-center max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Tagline */}
                <p className="text-slate-400 text-sm tracking-widest uppercase mb-6">
                  Project Management for Modern Teams
                </p>

                {/* Main Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-[1.1] tracking-tight mb-8 text-white">
                  Task management that
                  <br />
                  <span className="text-slate-400">actually works</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                  Project management, AI-powered task creation, and free productivity tools.
                  Built for teams who want to work, not manage software.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              >
                <Button asChild className="bg-white text-slate-900 hover:bg-slate-100 rounded-lg px-8 py-6 text-base font-medium transition-colors">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Get Started Free
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg px-8 py-6 text-base font-medium bg-transparent transition-colors">
                  <Link href="/how-it-works">
                    See How It Works
                  </Link>
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-8 text-sm text-slate-500"
              >
                <span>Free to start</span>
                <span className="hidden sm:inline">·</span>
                <span>No credit card required</span>
                <span className="hidden sm:inline">·</span>
                <span>Works in Telegram</span>
              </motion.div>
            </motion.div>

            {/* Phone Mockups */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative flex justify-center items-end mt-16"
            >
              <div className="flex items-end">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="hidden sm:block scale-[0.6] md:scale-[0.7] origin-bottom -mr-6 md:-mr-10"
                >
                  <PhoneMockup src="/appui/app-projects.webp" alt="Projects Screen" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative z-10 scale-[0.75] md:scale-[0.85]"
                >
                  <PhoneMockup src="/appui/app-onboarding.webp" alt="WhatsTask Onboarding" priority />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="hidden sm:block scale-[0.6] md:scale-[0.7] origin-bottom -ml-6 md:-ml-10"
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
            transition={{ delay: 1 }}
            className="flex flex-col items-center gap-2 text-slate-600 mt-12"
          >
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="relative py-24 md:py-36 lg:py-48 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 md:mb-28 lg:mb-36"
          >
            <p className="text-sm text-slate-500 uppercase tracking-widest mb-4">See It In Action</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-tight text-slate-900">
              A complete workspace in Telegram
            </h2>
            <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto">
              From project creation to team analytics, everything you need is accessible right from your chat app.
            </p>
          </motion.div>

          {/* App Screenshots - Flexbox for perfect centering */}
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
                className="flex flex-col items-center text-center"
                style={{ width: '200px' }}
              >
                <div className="mb-8">
                  <PhoneMockup src={item.src} alt={item.label} />
                </div>
                <h3 className="font-semibold text-slate-900 text-base md:text-lg mb-2">{item.label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 md:py-32 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-slate-500 uppercase tracking-widest mb-4">Features</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-tight text-slate-900">
              Everything you need, nothing you don't
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Built for simplicity. Designed for productivity. WhatsTask gives you the essential tools without the bloat of traditional project management software.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "AI Task Creation",
                desc: "Simply describe your project or task in plain language. Our AI understands context, breaks down complex work into actionable items, sets priorities, and creates subtasks automatically. No more manual data entry.",
              },
              {
                title: "Works in Telegram",
                desc: "No new apps to download, no new accounts to create. WhatsTask runs entirely inside Telegram, the messenger you already use daily. Start a conversation with our bot and you're ready to go.",
              },
              {
                title: "Built-in Analytics",
                desc: "Understand how your team works with detailed productivity insights. See time spent on tasks, identify bottlenecks, track project progress, and make data-driven decisions to improve workflow.",
              },
              {
                title: "Multiple Views",
                desc: "Work the way you prefer. Switch between List view for quick scanning, Kanban for visual workflows, Calendar for time-based planning, and Timeline for project scheduling. All your data, multiple perspectives.",
              },
              {
                title: "Time Tracking",
                desc: "Track time spent on tasks with a single tap. Clock in when you start, clock out when you're done. WhatsTask automatically calculates durations and generates reports ready for client billing.",
              },
              {
                title: "Team Collaboration",
                desc: "Add unlimited team members at no extra cost. Assign roles with different permissions, track who's working on what, and keep everyone aligned. Real-time updates keep your whole team in sync.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="h-full p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
                  <h3 className="text-lg font-medium text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
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
              className="inline-flex items-center gap-2 text-slate-600 text-sm hover:text-slate-900 transition-colors"
            >
              View all features
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="relative py-24 md:py-32 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* First Row */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-start mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5 pt-8"
            >
              <p className="text-sm text-slate-500 uppercase tracking-widest mb-6">The Product</p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight text-slate-900">
                Simple by design
              </h2>
              <p className="text-slate-500 mb-5 leading-relaxed">
                Other tools give you 15 views and 50 features you'll never use. We give you 4 views that cover everything,
                with AI that handles the rest.
              </p>
              <p className="text-slate-500 mb-10 leading-relaxed">
                Everything runs inside Telegram. No browser tabs to manage, no desktop apps to install. Just open your messenger and start working.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  "4 views: List, Kanban, Calendar, Timeline",
                  "AI-powered task creation from natural language",
                  "Works entirely within Telegram",
                  "Free tier with no artificial limits",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-8 py-5">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Try It Free
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 flex justify-center md:justify-end"
            >
              <div className="flex items-end gap-[-20px]">
                <div className="hidden md:block relative" style={{ marginRight: '-40px' }}>
                  <div className="scale-[0.75] origin-bottom-right opacity-90">
                    <PhoneMockup src="/appui/app-profile.webp" alt="Profile" />
                  </div>
                </div>
                <div className="relative z-10">
                  <PhoneMockup src="/appui/app-projects.webp" alt="Projects" priority />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second Row - Reversed */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 flex justify-center md:justify-start order-2 md:order-1"
            >
              <div className="flex items-end">
                <div className="relative z-10">
                  <PhoneMockup src="/appui/app-stats-team.webp" alt="Team Stats" />
                </div>
                <div className="hidden md:block relative" style={{ marginLeft: '-40px' }}>
                  <div className="scale-[0.75] origin-bottom-left opacity-90">
                    <PhoneMockup src="/appui/app-stats-personal.webp" alt="Personal Stats" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5 order-1 md:order-2 pt-8"
            >
              <p className="text-sm text-slate-500 uppercase tracking-widest mb-6">Analytics</p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight text-slate-900">
                Data that drives decisions
              </h2>
              <p className="text-slate-500 mb-5 leading-relaxed">
                Understand how your team works with built-in analytics. See who's working on what, how long tasks take, and where bottlenecks occur.
              </p>
              <p className="text-slate-500 mb-10 leading-relaxed">
                Generate reports for clients, track billable hours, and make informed decisions about resource allocation.
              </p>

              <ul className="space-y-3">
                {[
                  "Personal productivity dashboards",
                  "Team-wide performance insights",
                  "Time tracking with automatic reports",
                  "Project progress visualization",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-24 md:py-32 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-slate-500 uppercase tracking-widest mb-4">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-slate-900">
              From zero to productive in three steps
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              No lengthy onboarding. No complex setup. Just open Telegram and start.
            </p>
          </motion.div>

          <div className="space-y-16">
            {[
              {
                step: "01",
                title: "Open Telegram and find WhatsTask",
                desc: "Search for @whatstaskbot in Telegram and tap Start. That's it—no accounts to create, no apps to download. The bot guides you through a quick onboarding to understand your needs.",
                image: "/appui/app-onboarding.webp",
              },
              {
                step: "02",
                title: "Describe your project to the AI",
                desc: "Just tell the AI what you're working on in plain language. 'I'm launching a marketing campaign next month' or 'We need to redesign our website.' The AI creates structured projects with tasks, deadlines, and priorities.",
                image: "/appui/app-create-project.webp",
              },
              {
                step: "03",
                title: "Manage, track, and collaborate",
                desc: "Switch between views, assign tasks to team members, track time, and monitor progress. Get daily summaries and reminders. Generate reports when you need them. All without leaving your messenger.",
                image: "/appui/app-team-management.webp",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-light text-slate-300">{item.step}</span>
                    <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
                <div className={`flex justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="scale-[0.8]">
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
            className="text-center mt-16"
          >
            <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-8 py-6 text-base">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Start Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight text-slate-900">
              Built different
            </h2>
            <p className="text-slate-500">No bloat. No learning curve. Just the tools you need.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { stat: "4", desc: "views (all you need)" },
              { stat: "Free", desc: "AI task creation" },
              { stat: "30s", desc: "to get started" },
              { stat: "100%", desc: "free tier available" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-light text-slate-900 mb-2">{item.stat}</p>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative py-24 md:py-32 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-slate-500 uppercase tracking-widest mb-4">Products</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-slate-900">
              Two products, one philosophy
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Powerful yet simple. Work tools that get out of your way.
            </p>
          </motion.div>

          {/* Project Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="bg-white border border-slate-200 rounded-2xl p-10 lg:p-14 hover:border-slate-300 transition-colors overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Text Content - 8 columns */}
                <div className="lg:col-span-8">
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-5">Core Product</p>

                  <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">Project Management</h3>

                  <p className="text-slate-500 mb-5 leading-relaxed">
                    Complete task management solution powered by AI. Create projects, assign tasks, track time, and collaborate with your team—all from Telegram.
                  </p>
                  <p className="text-slate-500 mb-10 leading-relaxed">
                    Perfect for freelancers, startups, agencies, or enterprise teams needing simplicity without sacrificing power.
                  </p>

                  <ul className="grid grid-cols-2 gap-x-8 gap-y-3 mb-10">
                    {[
                      "List, Kanban, Calendar, Timeline",
                      "AI-powered task creation",
                      "Built-in time tracking",
                      "Team roles and permissions",
                      "Project templates",
                      "Recurring tasks",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-900 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-5 pt-2">
                    <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-8 py-5">
                      <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                        Get Started Free
                      </a>
                    </Button>
                    <span className="text-sm text-slate-400">No credit card required</span>
                  </div>
                </div>

                {/* Phone Mockup - 4 columns */}
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
            <div className="bg-white border border-slate-200 rounded-2xl p-10 lg:p-14 hover:border-slate-300 transition-colors">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Text Content - 8 columns */}
                <div className="lg:col-span-8">
                  <p className="text-xs text-slate-400 uppercase tracking-widest mb-5">AI Tool</p>

                  <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">GEO Analyzer</h3>

                  <p className="text-slate-500 mb-5 leading-relaxed">
                    AI search optimization for the new era. As ChatGPT, Perplexity, and Google SGE become primary discovery channels, your content needs to be AI-readable.
                  </p>
                  <p className="text-slate-500 mb-10 leading-relaxed">
                    Analyze any URL, get an AI readability score, and receive specific recommendations to improve visibility.
                  </p>

                  <ul className="grid grid-cols-2 gap-x-8 gap-y-3 mb-10">
                    {[
                      "Analyze AI readability score",
                      "Optimize for all AI engines",
                      "Track AI search performance",
                      "3 free analyses daily",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-900 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <Button asChild variant="outline" className="border-slate-300 hover:bg-slate-50 rounded-lg px-8 py-5">
                      <a href="https://geoanalyzer.whatstask.com" target="_blank" rel="noopener noreferrer">
                        Try Analyzer Free
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Visual - 4 columns */}
                <div className="hidden lg:flex lg:col-span-4 justify-center items-center">
                  <div className="w-full max-w-[200px] aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl flex items-center justify-center border border-slate-200">
                    <div className="text-center">
                      <div className="text-4xl font-light text-slate-400 mb-2">GEO</div>
                      <div className="text-sm text-slate-500">AI Search</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative py-24 md:py-32 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-slate-500 uppercase tracking-widest mb-4">Solutions</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-slate-900">
              Built for teams of any size
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
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
                  <div className="border border-slate-200 rounded-xl p-6 h-full hover:border-slate-300 transition-colors">
                    <h3 className="font-medium text-slate-900 mb-1 group-hover:text-slate-700">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Tools Section */}
      <section className="relative py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm text-slate-500 uppercase tracking-widest mb-4">Free Tools</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight text-slate-900">
              Productivity utilities
            </h2>
            <p className="text-slate-500">PDF tools, QR codes, and more. Forever free.</p>
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
                <div className="bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-slate-300 transition-colors">
                  <p className="text-sm text-slate-600">{tool.name}</p>
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
              className="inline-flex items-center gap-2 text-slate-600 text-sm hover:text-slate-900 transition-colors"
            >
              View all tools
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="relative py-24 md:py-32 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-slate-500 uppercase tracking-widest mb-4">Enterprise</p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-slate-900">
                Need something custom?
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                White-label solutions, custom integrations, and dedicated support for organizations with specific requirements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-6 py-5">
                  <Link href="/enterprise">Learn More</Link>
                </Button>
                <Button asChild variant="outline" className="border-slate-300 hover:bg-slate-50 rounded-lg px-6 py-5">
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
                  <div key={index} className="border border-slate-200 rounded-xl p-5">
                    <h3 className="font-medium text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 px-4 bg-slate-950">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-tight text-white">
              Ready to simplify your workflow?
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
              Join teams who've chosen simplicity over complexity.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-slate-500">
              <span>No credit card required</span>
              <span className="hidden sm:inline">·</span>
              <span>Free tier available</span>
              <span className="hidden sm:inline">·</span>
              <span>Cancel anytime</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-slate-900 hover:bg-slate-100 rounded-lg px-8 py-6 text-base font-medium">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg px-8 py-6 text-base bg-transparent">
                <Link href="/contact">Talk to Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.png" alt="Whatstask Logo" width={24} height={24} />
                <span className="font-semibold text-white">Whatstask</span>
              </div>
              <p className="text-sm text-slate-500 mb-4 max-w-xs">
                Work tools for teams who want to work, not manage software.
              </p>
              <p className="text-sm text-slate-500">
                <a href="mailto:charlesaarondavid@gmail.com" className="hover:text-slate-300 transition-colors">
                  charlesaarondavid@gmail.com
                </a>
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-medium mb-4 text-sm text-white">Products</h4>
              <ul className="space-y-2">
                {[
                  { name: "Project Management", href: "/project-management" },
                  { name: "GEO Analyzer", href: "/geoanalyzer" },
                  { name: "Free Tools", href: "/tools" },
                  { name: "Pricing", href: "/pricing" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-medium mb-4 text-sm text-white">Solutions</h4>
              <ul className="space-y-2">
                {[
                  { name: "Freelancers", href: "/use-cases/freelancers" },
                  { name: "Agencies", href: "/use-cases/agencies" },
                  { name: "Startups", href: "/use-cases/startups" },
                  { name: "Enterprise", href: "/enterprise" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-medium mb-4 text-sm text-white">Company</h4>
              <ul className="space-y-2">
                {[
                  { name: "About", href: "/about" },
                  { name: "Blog", href: "/blog" },
                  { name: "Contact", href: "/contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <button onClick={handlePrivacyClick} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Compare Links */}
          <div className="border-t border-slate-800 pt-8 mb-8">
            <div className="flex flex-wrap gap-6 text-xs text-slate-600">
              {[
                { name: "vs ClickUp", href: "/compare/clickup" },
                { name: "vs Monday", href: "/compare/monday" },
                { name: "vs Asana", href: "/compare/asana" },
                { name: "vs Todoist", href: "/compare/todoist" },
                { name: "vs Notion", href: "/compare/notion" },
              ].map((link, index) => (
                <Link key={index} href={link.href} className="hover:text-slate-400 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-slate-600">
            © {new Date().getFullYear()} Whatstask. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
