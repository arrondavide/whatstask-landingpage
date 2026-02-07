"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import {
  X,
  ArrowRight,
  ChevronDown,
  Zap,
  Clock,
  Users,
  BarChart3,
  MessageSquare,
  Sparkles,
  Check,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PrivacyPolicy from "@/components/privacy-policy"
import CustomCursor from "@/components/custom-cursor"
import Navigation from "@/components/navigation"
import PageLoader from "@/components/page-loader"
import { MagneticButton } from "@/components/interactive-card"
import { PhoneMockup } from "@/components/phone-mockup"
import { AnimatedTextCounter } from "@/components/animated-counter"

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

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setPrivacyDialogOpen(true)
  }

  return (
    <div className="relative min-h-screen bg-white text-slate-900 overflow-hidden">
      <PageLoader />
      <CustomCursor />

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

      {/* Hero Section - Dark */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 w-full bg-[#0D0D0D] overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-violet-600/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10 px-4">
          <div className="flex flex-col items-center">
            {/* Text content - centered */}
            <motion.div style={{ opacity: heroOpacity }} className="text-center max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Main Headline */}
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-8 text-white">
                  Task management
                  <br />
                  <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                    that just works
                  </span>
                </h1>

                {/* Feature badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12"
                >
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                    <span className="text-violet-400 text-sm font-medium">Free AI</span>
                    <span className="text-white/60 text-sm">task creation</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                    <span className="text-fuchsia-400 text-sm font-medium">Works in</span>
                    <span className="text-white/60 text-sm">Telegram</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                    <span className="text-pink-400 text-sm font-medium">Free</span>
                    <span className="text-white/60 text-sm">to start</span>
                  </div>
                </motion.div>

                <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                  Project management, AI tools, and free utilities in one ecosystem.
                  <br className="hidden md:block" />
                  <span className="text-white/80">Simple scales. Complex doesn't.</span>
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              >
                <MagneticButton magneticStrength={0.2}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button asChild className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600 rounded-full px-8 py-6 text-lg shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:shadow-[0_0_60px_rgba(139,92,246,0.6)] transition-all duration-300 border-0">
                      <Link href="/project-management" className="flex items-center gap-2">
                        <span className="font-semibold">Get Started Free</span>
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                  </motion.div>
                </MagneticButton>
                <MagneticButton magneticStrength={0.2}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      asChild
                      className="bg-white/10 text-white hover:bg-white/20 border border-white/20 rounded-full px-8 py-6 text-lg backdrop-blur-md transition-all duration-300"
                    >
                      <Link href="/geoanalyzer" className="flex items-center gap-2">
                        <span className="font-medium">Try GEO Analyzer</span>
                        <Sparkles className="h-5 w-5" />
                      </Link>
                    </Button>
                  </motion.div>
                </MagneticButton>
              </motion.div>
            </motion.div>

            {/* Phone Mockups */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative flex justify-center items-end"
            >
              <div className="flex items-end gap-[-20px] md:gap-[-30px]">
                {/* Left phone - slanted left */}
                <motion.div
                  initial={{ opacity: 0, y: 40, rotate: -12 }}
                  animate={{ opacity: 1, y: 0, rotate: -12 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ scale: 1.08, rotate: -6, y: -10 }}
                  className="hidden sm:block scale-[0.6] md:scale-[0.65] lg:scale-[0.7] origin-bottom -mr-8 md:-mr-12 cursor-pointer"
                >
                  <PhoneMockup src="/appui/app-projects.webp" alt="Projects Screen" />
                </motion.div>

                {/* Center phone - main, upright */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="relative z-10 scale-[0.75] md:scale-[0.8] lg:scale-[0.85] cursor-pointer"
                >
                  <PhoneMockup src="/appui/app-onboarding.webp" alt="WhatsTask Onboarding" priority />
                </motion.div>

                {/* Right phone - slanted right */}
                <motion.div
                  initial={{ opacity: 0, y: 40, rotate: 12 }}
                  animate={{ opacity: 1, y: 0, rotate: 12 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ scale: 1.08, rotate: 6, y: -10 }}
                  className="hidden sm:block scale-[0.6] md:scale-[0.65] lg:scale-[0.7] origin-bottom -ml-8 md:-ml-12 cursor-pointer"
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
            className="flex flex-col items-center gap-2 text-white/40 mt-12"
          >
            <span className="text-sm">Scroll to explore</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* A New Era Section - Dark */}
      <section className="relative py-32 px-4 bg-[#0D0D0D] overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-violet-950/20 to-[#0D0D0D]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-600/20 via-fuchsia-500/20 to-pink-500/20 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-white">Work smarter </span>
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">not harder.</span>
              <br />
              <span className="text-white">with </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AI assistance</span>
            </h2>
          </motion.div>

          {/* AI Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "AI Task Creation",
                desc: "Describe what you need. AI creates the tasks.",
                gradient: "from-violet-500 to-fuchsia-500",
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Works in Telegram",
                desc: "No new app to learn. Works where you already are.",
                gradient: "from-fuchsia-500 to-pink-500",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "AI Analytics",
                desc: "Insights that actually help you work better.",
                gradient: "from-cyan-500 to-blue-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.gradient} mb-6`}>
                    <span className="text-white">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-white/60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Big Product Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 via-fuchsia-500/30 to-pink-500/30 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-pink-500/20 border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <p className="text-sm text-white/40 uppercase tracking-widest mb-2">The only AI that works</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white">where you work</h3>
              </div>

              {/* Phone showcase in dark section */}
              <div className="flex justify-center gap-4 md:gap-8 overflow-x-auto pb-4">
                {[
                  { src: "/appui/app-team-management.webp", alt: "Team Management" },
                  { src: "/appui/app-create-project.webp", alt: "Create Project" },
                  { src: "/appui/app-stats-team.webp", alt: "Team Stats" },
                ].map((phone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex-shrink-0 scale-[0.7] md:scale-[0.8]"
                  >
                    <PhoneMockup src={phone.src} alt={phone.alt} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution for Every Team - Light */}
      <section className="relative py-32 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-slate-900">
              A solution for <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">every team.</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              From solo freelancers to enterprise teams. One platform that scales.
            </p>
          </motion.div>

          {/* Team type cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <Users className="w-6 h-6" />, title: "Freelancers", desc: "Personal task management" },
              { icon: <Zap className="w-6 h-6" />, title: "Startups", desc: "Fast, agile workflows" },
              { icon: <BarChart3 className="w-6 h-6" />, title: "Agencies", desc: "Client project tracking" },
              { icon: <Clock className="w-6 h-6" />, title: "Enterprise", desc: "Scale without complexity" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/use-cases/${item.title.toLowerCase()}`} className="block group">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 h-full hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100/50 transition-all duration-300">
                    <div className="inline-flex p-3 rounded-xl bg-violet-100 text-violet-600 mb-4 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              "Project Management",
              "Task Tracking",
              "Time Tracking",
              "AI Assistance",
              "Team Collaboration",
              "Analytics",
              "Telegram Integration",
              "Free Tools",
            ].map((feature, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-600 hover:border-violet-300 hover:text-violet-600 transition-colors cursor-default"
              >
                {feature}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why WhatsTask Section */}
      <section className="relative py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-slate-500 uppercase tracking-widest mb-4">Why WhatsTask</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-slate-900">
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Simple</span> by design
            </h2>
            <p className="text-xl text-slate-500">No bloat. No learning curve. Just productivity.</p>
          </motion.div>

          {/* Features grid */}
          <motion.div
            className="grid md:grid-cols-4 gap-6 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { stat: "4", suffix: "", desc: "views (all you need)" },
              { stat: "Free", suffix: "", desc: "AI task creation" },
              { stat: "30", suffix: "s", desc: "to get started" },
              { stat: "100", suffix: "%", desc: "free tier available" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <p className="text-5xl font-bold text-slate-900 mb-2">
                  <AnimatedTextCounter target={item.stat} />
                  <span className="text-violet-600">{item.suffix}</span>
                </p>
                <p className="text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Platform info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <p className="text-slate-600 text-center">
              Works directly in Telegram · No app download required
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section - Updated */}
      <section id="products" className="relative py-32 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
              Two products. <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">One philosophy.</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-xl mx-auto font-light">
              Powerful yet simple. Choose one, use both.
            </p>
          </motion.div>

          {/* Product Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-violet-50 to-fuchsia-50 border border-slate-200 rounded-3xl p-8 md:p-10 h-full hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/50 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 mb-6">
                    <Zap className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Project Management</h3>

                  <p className="text-slate-500 mb-8 leading-relaxed">
                    The complete task solution. Everything you need to manage projects and teams.
                  </p>

                  <div className="space-y-3 mb-10">
                    {[
                      "List, Kanban, Calendar, Timeline views",
                      "Free AI task creation",
                      "Built-in time tracking",
                      "Team roles & permissions",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-violet-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-4xl font-bold text-slate-900">Free</span>
                    <span className="text-slate-400 text-sm">forever</span>
                  </div>

                  <Button asChild className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600 rounded-xl py-6 shadow-lg shadow-violet-500/25">
                    <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Get Started <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* GEO Analyzer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-cyan-50 to-blue-50 border border-slate-200 rounded-3xl p-8 md:p-10 h-full hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-100/50 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 mb-6">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">GEO Analyzer</h3>

                  <p className="text-slate-500 mb-8 leading-relaxed">
                    AI search optimization. Get cited in ChatGPT, Perplexity, and Google SGE.
                  </p>

                  <div className="space-y-3 mb-10">
                    {[
                      "Analyze AI readability",
                      "Optimize for all AI engines",
                      "Track AI search performance",
                      "3 free analyses daily",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-cyan-500" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-4xl font-bold text-slate-900">Free</span>
                    <span className="text-slate-400 text-sm">forever</span>
                  </div>

                  <Button asChild className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 rounded-xl py-6 shadow-lg shadow-cyan-500/25">
                    <a href="https://geoanalyzer.whatstask.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Try Analyzer <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Save Time Section - Dark with gradient */}
      <section className="relative py-32 px-4 bg-[#0D0D0D] overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/50 via-fuchsia-950/50 to-violet-950/50" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-violet-400 uppercase tracking-widest mb-4">Why switch</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
                Less <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">complexity</span>
                <br />more work done.
              </h2>
              <p className="text-xl text-white/60 mb-8">
                Stop managing tools. Start doing work.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "No learning curve - works in Telegram",
                  "AI helps create tasks from text",
                  "4 views, not 15 (all you need)",
                  "Free AI included, no extra cost",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/80">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Button asChild className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600 rounded-full px-8 py-6 text-lg shadow-[0_0_40px_rgba(139,92,246,0.4)]">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Try It Free <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 rounded-3xl blur-2xl" />
                <div className="relative scale-[0.9]">
                  <PhoneMockup src="/appui/app-projects.webp" alt="Projects" priority />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Free Tools Section */}
      <section className="relative py-32 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-violet-600 uppercase tracking-widest mb-4">Bonus</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
              Free tools. <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">No limits.</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-xl mx-auto font-light">
              PDF tools, QR codes, and more. Forever free.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
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
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center hover:border-violet-300 hover:bg-violet-50 hover:shadow-md transition-all duration-300">
                  <p className="text-sm font-medium text-slate-700 group-hover:text-violet-600 transition-colors">
                    {tool.name}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 text-violet-600 text-sm hover:text-violet-700 transition-colors font-medium"
            >
              View all tools
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="relative py-32 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-violet-600 uppercase tracking-widest mb-4">Enterprise</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
              Need something <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">custom?</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-xl mx-auto font-light">
              White-label solutions and enterprise features
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Custom Integrations", desc: "Connect your existing tools" },
              { title: "White-label", desc: "Your brand, our platform" },
              { title: "Video calls", desc: "Built-in communication" },
              { title: "Migration", desc: "Move from any tool" },
              { title: "Team training", desc: "Onboarding support" },
              { title: "Unlimited users", desc: "No per-seat pricing" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full hover:border-violet-300 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 rounded-xl px-8 py-6">
              <Link href="/enterprise">Explore Enterprise</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-xl px-8 py-6 border-slate-300 hover:bg-white">
              <a href="mailto:charlesaarondavid@gmail.com">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-4 bg-[#0D0D0D] overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/30 to-[#0D0D0D]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-600/20 via-fuchsia-500/20 to-pink-500/20 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
              Ready to <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">simplify?</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Join teams who've chosen simplicity over complexity.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                "No credit card required",
                "Free forever tier",
                "Cancel anytime",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-white/40"
                >
                  <Check className="w-4 h-4 text-violet-400" />
                  {text}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white hover:from-violet-600 hover:to-fuchsia-600 rounded-full px-10 py-7 text-lg shadow-[0_0_60px_rgba(139,92,246,0.4)]">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Get Started Free <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-10 py-7 text-lg border-white/20 text-white hover:bg-white/10 bg-transparent">
                <Link href="/contact">Talk to Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 bg-[#0D0D0D] border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.png" alt="Whatstask Logo" width={24} height={24} />
                <span className="font-bold text-lg text-white">Whatstask</span>
              </div>
              <p className="text-sm text-white/40 mb-4 max-w-xs">
                Simple scales. Work tools for teams of any size who want to work, not manage tools.
              </p>
              <p className="text-sm text-white/40">
                Contact: <a href="mailto:charlesaarondavid@gmail.com" className="text-white/60 hover:text-white">charlesaarondavid@gmail.com</a>
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold mb-4 text-sm text-white">Products</h4>
              <ul className="space-y-2">
                {[
                  { name: "Project Management", href: "/project-management" },
                  { name: "GEO Analyzer", href: "/geoanalyzer" },
                  { name: "Free Tools", href: "/tools" },
                  { name: "Pricing", href: "/pricing" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-sm text-white/40 hover:text-white transition-colors">
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
                  { name: "For Freelancers", href: "/use-cases/freelancers" },
                  { name: "For Agencies", href: "/use-cases/agencies" },
                  { name: "For Startups", href: "/use-cases/startups" },
                  { name: "Enterprise", href: "/enterprise" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-sm text-white/40 hover:text-white transition-colors">
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
                  { name: "Founder", href: "/founder" },
                  { name: "Contact", href: "/contact" },
                  { name: "Blog", href: "/blog" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-sm text-white/40 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <button onClick={handlePrivacyClick} className="text-sm text-white/40 hover:text-white transition-colors">
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Compare Links */}
          <div className="border-t border-white/10 pt-8 mb-8">
            <p className="text-xs text-white/30 mb-3">Compare WhatsTask:</p>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "vs ClickUp", href: "/compare/clickup" },
                { name: "vs Monday", href: "/compare/monday" },
                { name: "vs Asana", href: "/compare/asana" },
                { name: "vs Todoist", href: "/compare/todoist" },
                { name: "vs Notion", href: "/compare/notion" },
              ].map((link, index) => (
                <Link key={index} href={link.href} className="text-xs text-white/30 hover:text-white transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-white/30">
            © {new Date().getFullYear()} Whatstask. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
