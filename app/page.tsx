"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import {
  Check,
  Send,
  X,
  ArrowRight,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PrivacyPolicy from "@/components/privacy-policy"
import CustomCursor from "@/components/custom-cursor"
import Navigation from "@/components/navigation"
import PageLoader from "@/components/page-loader"
import Grainient from "@/components/grainient"
import { InteractiveCard, MagneticButton } from "@/components/interactive-card"
import { BlurText, GradientText } from "@/components/animated-text"
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
        {/* Grainient Background - Contained to Hero */}
        <div className="absolute inset-0 z-0">
          <Grainient
            color1="#8B5CF6"
            color2="#A78BFA"
            color3="#E9D5FF"
            grainAmount={0.08}
            grainAnimated={true}
            timeSpeed={0.3}
            warpStrength={1.2}
            warpFrequency={3.0}
            warpSpeed={1.0}
            warpAmplitude={40.0}
            rotationAmount={360.0}
            contrast={1.2}
            saturation={1.3}
            className="opacity-40"
          />
        </div>
        {/* Gradient fade at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[1]" />

        <motion.div style={{ opacity: heroOpacity }} className="text-center max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Tagline Badge - Liquid Glass */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white/50 rounded-full px-5 py-2.5 mb-8 shadow-[0_4px_16px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
              <span className="text-sm text-slate-700 font-medium">Work tools that respect your time</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight mb-6">
              <GradientText
                text="Simple scales."
                from="#7C3AED"
                via="#8B5CF6"
                to="#A78BFA"
                animate={true}
              />
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto mb-4">
              <BlurText text="Project management and AI tools for teams of any size who want to work, not manage tools." delay={0.3} />
            </p>

            <p className="text-lg text-slate-500 font-light mb-10">
              Your 500-person company doesn't need 50 features. They need 4 that work.
            </p>
          </motion.div>

          {/* CTA Buttons - Liquid Glass with Magnetic Effect */}
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
                <Button asChild className="bg-violet-500/90 text-white hover:bg-violet-600 rounded-full px-8 py-6 text-lg backdrop-blur-sm shadow-[0_8px_32px_rgba(139,92,246,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.45),inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-300">
                  <Link href="/project-management" className="flex items-center gap-2">
                    <span className="font-medium">Try Project Management</span>
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
                  className="bg-white/70 text-slate-900 hover:bg-white/90 border border-white/50 rounded-full px-8 py-6 text-lg backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-300"
                >
                  <Link href="/geoanalyzer" className="flex items-center gap-2">
                    <span className="font-medium">Try GEO Analyzer</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </MagneticButton>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center gap-2 text-slate-500"
          >
            <span className="text-sm">See what we build</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* The Problem Section */}
      <section className="relative py-24 px-4 border-t border-slate-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">The industry got it wrong</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              ClickUp has 15+ views. Monday needs a consultant. Asana charges enterprise prices for basic AI.
              <br className="hidden md:block" />
              Somewhere along the way, "powerful" became "impossible to use."
            </p>
          </motion.div>

          {/* Comparison Grid - Interactive Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { label: "ClickUp", stat: "15+", desc: "views to learn" },
              { label: "Monday", stat: "$12", desc: "per seat for AI" },
              { label: "Asana", stat: "Weeks", desc: "to set up" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 text-center shadow-[0_4px_24px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] transition-shadow duration-300 cursor-default"
              >
                <p className="text-sm text-slate-500 mb-2">{item.label}</p>
                <p className="text-4xl font-bold mb-2 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">{item.stat}</p>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* WhatsTask difference - Liquid Glass */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-violet-500/15 to-violet-400/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-violet-300/30 text-center shadow-[0_8px_32px_rgba(139,92,246,0.12),inset_0_1px_0_rgba(255,255,255,0.6)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">WhatsTask is different</h3>
              <div className="grid md:grid-cols-4 gap-8 mt-8">
                {[
                  { stat: "4", desc: "views that matter" },
                  { stat: "Free", desc: "AI features included" },
                  { stat: "30s", desc: "to get started" },
                  { stat: "Any", desc: "team size" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="p-4 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] hover:shadow-[0_8px_24px_rgba(139,92,246,0.15),inset_0_1px_0_rgba(255,255,255,0.6)] transition-shadow duration-300"
                  >
                    <p className="text-3xl md:text-4xl font-bold text-violet-500 mb-2">{item.stat}</p>
                    <p className="text-slate-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative py-24 px-4 border-t border-slate-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Two products. One philosophy.</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Everything we build follows one rule: if it doesn't help you finish work faster, it doesn't exist.
            </p>
          </motion.div>

          {/* Product Cards - Interactive Liquid Glass */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Management */}
            <InteractiveCard
              spotlightColor="rgba(139, 92, 246, 0.12)"
              tiltAmount={5}
              className="rounded-3xl"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-slate-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_20px_50px_rgba(139,92,246,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-500 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <h3 className="text-2xl font-bold mb-6">Project Management</h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  Full-featured project management with AI built-in. Tasks, time tracking, team collaboration. Works
                  instantly in Telegram or web.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "4 views: List, Kanban, Calendar, Timeline",
                    "Free AI task creation & suggestions",
                    "Built-in time tracking",
                    "Team roles & permissions",
                    "Works for 2 or 2000 people",
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center">
                        <Check className="h-4 w-4 text-violet-500 flex-shrink-0" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="bg-violet-500/90 text-white hover:bg-violet-600 rounded-full px-6 shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-500/30 transition-all">
                    <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                      <Send className="h-4 w-4 mr-2" />
                      Launch in Telegram
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full px-6 border-slate-300 hover:bg-white/80 hover:border-slate-400 transition-all">
                    <Link href="/project-management">Learn More</Link>
                  </Button>
                </div>
              </motion.div>
            </InteractiveCard>

            {/* GEO Analyzer */}
            <InteractiveCard
              spotlightColor="rgba(6, 182, 212, 0.12)"
              tiltAmount={5}
              className="rounded-3xl"
            >
              <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-slate-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_20px_50px_rgba(6,182,212,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-500 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold">GEO Analyzer</h3>
                  <span className="text-xs text-cyan-600 font-medium bg-cyan-50 px-2 py-0.5 rounded-full">Future of Marketing</span>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  Generative Engine Optimization. Optimize your content for AI-powered search. Get cited by ChatGPT,
                  Perplexity, and Google SGE.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Analyze content for AI readability",
                    "Optimize for ChatGPT & Perplexity",
                    "Track AI search performance",
                    "Get cited in AI responses",
                    "3 free analyses per day",
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center">
                        <Check className="h-4 w-4 text-cyan-500 flex-shrink-0" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:from-violet-600 hover:to-cyan-600 rounded-full px-6 shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-cyan-500/30 transition-all"
                  >
                    <a href="https://geoanalyzer.whatstask.com" target="_blank" rel="noopener noreferrer">
                      Launch GEO Analyzer
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full px-6 border-slate-300 hover:bg-white/80 hover:border-slate-400 transition-all">
                    <Link href="/geoanalyzer">Learn More</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
            </InteractiveCard>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="relative py-24 px-4 border-t border-slate-100 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">See it in action</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Clean, simple interface. Works right in Telegram. No app download required.
            </p>
          </motion.div>

          {/* Phone Showcase */}
          <div className="relative h-[650px] md:h-[750px]">
            {/* Center phone - main focus */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <PhoneMockup src="/appui/app-onboarding.webp" alt="WhatsTask App Onboarding" priority />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center mt-6 text-sm font-medium text-slate-600"
              >
                Quick onboarding
              </motion.p>
            </motion.div>

            {/* Left phone */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 0.8, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute left-[2%] md:left-[10%] top-1/2 -translate-y-1/2 z-10 scale-[0.85] -rotate-6 hidden sm:block"
            >
              <PhoneMockup src="/appui/app-create-project.webp" alt="Create Project Screen" />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-center mt-6 text-sm font-medium text-slate-500"
              >
                Create projects
              </motion.p>
            </motion.div>

            {/* Right phone */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 0.8, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute right-[2%] md:right-[10%] top-1/2 -translate-y-1/2 z-10 scale-[0.85] rotate-6 hidden sm:block"
            >
              <PhoneMockup src="/appui/app-stats-personal.webp" alt="Statistics Screen" />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-center mt-6 text-sm font-medium text-slate-500"
              >
                Track progress
              </motion.p>
            </motion.div>

            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-radial from-violet-500/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {[
              "Team Management",
              "Project Tracking",
              "Statistics & Analytics",
              "Profile & Settings",
              "Telegram Integration",
            ].map((feature, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-full text-sm text-slate-600 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                {feature}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="relative py-24 px-4 border-t border-slate-100 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-slate-500 mb-6">B2B Custom Solutions</p>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Need something custom?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light mb-8">
              We build custom project management solutions for teams with specific needs. Same philosophy: simple, fast,
              no bloat.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { title: "Custom Development", desc: "Tailored PM tools for your workflow", icon: "🛠️" },
                { title: "White-Label", desc: "Your brand, our infrastructure", icon: "🏷️" },
                { title: "Integrations", desc: "Connect with your existing tools", icon: "🔗" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-[0_4px_16px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] transition-shadow duration-300 cursor-default"
                >
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6">
                <Link href="/enterprise">Explore Enterprise</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300">
                <a href="mailto:charlesaarondavid@gmail.com">Contact Us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Free Tools Section */}
      <section className="relative py-24 px-4 border-t border-slate-100">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Free tools that just work</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              No signup. No limits. No catch. Just use them.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { name: "PDF Merger", href: "/pdf-merger", icon: "📑" },
              { name: "PDF Compressor", href: "/pdf-compressor", icon: "📦" },
              { name: "PDF to JPG", href: "/pdf-to-jpg", icon: "🖼️" },
              { name: "JPG to PDF", href: "/jpg-to-pdf", icon: "📄" },
              { name: "PDF Splitter", href: "/pdf-splitter", icon: "✂️" },
              { name: "QR Code", href: "/qr-code-generator", icon: "📱" },
            ].map((tool, index) => (
              <motion.a
                key={index}
                href={tool.href}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -6, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-slate-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_8px_24px_rgba(139,92,246,0.1),inset_0_1px_0_rgba(255,255,255,0.9)] transition-shadow duration-300 text-center group"
              >
                <span className="text-xl mb-2 block group-hover:scale-110 transition-transform duration-300">{tool.icon}</span>
                <span className="text-sm font-medium text-slate-700 group-hover:text-violet-600 transition-colors">{tool.name}</span>
              </motion.a>
            ))}
          </motion.div>

          <div className="text-center mt-8">
            <Link href="/tools" className="text-slate-600 hover:text-slate-900 transition-colors inline-flex items-center gap-2">
              View all tools <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats - Liquid Glass */}
      <section className="relative py-24 px-4 border-t border-slate-100">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-violet-500/10 to-violet-400/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-violet-300/30 shadow-[0_8px_32px_rgba(139,92,246,0.08),inset_0_1px_0_rgba(255,255,255,0.5)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Built for how you actually work</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  We're not trying to be everything to everyone. We're building simple tools that scale - from
                  freelancers to enterprises.
                </p>
                <ul className="space-y-3">
                  {[
                    "No learning curve",
                    "No feature bloat",
                    "No enterprise complexity",
                    "Just tools that work",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center">
                        <Check className="h-4 w-4 text-violet-500" />
                      </div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "800M+", label: "Telegram users" },
                  { stat: "Free", label: "to start" },
                  { stat: "30s", label: "setup time" },
                  { stat: "24/7", label: "availability" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_4px_16px_rgba(139,92,246,0.08)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_24px_rgba(139,92,246,0.15)] transition-shadow duration-300"
                  >
                    <p className="text-2xl md:text-3xl font-bold text-violet-500 mb-1">{item.stat}</p>
                    <p className="text-sm text-slate-500">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Liquid Glass */}
      <section className="relative py-24 px-4 border-t border-slate-100">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-violet-500/10 to-violet-400/5 backdrop-blur-sm rounded-3xl p-10 md:p-16 border border-violet-300/30 shadow-[0_8px_32px_rgba(139,92,246,0.1),inset_0_1px_0_rgba(255,255,255,0.5)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready to simplify?</h2>
              <p className="text-xl text-slate-600 mb-10 font-light">
                Join teams who've chosen simplicity over complexity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button asChild className="bg-violet-500/90 text-white hover:bg-violet-600 rounded-full px-8 py-6 text-lg shadow-[0_8px_24px_rgba(139,92,246,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_12px_32px_rgba(139,92,246,0.45)] transition-all">
                    <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                      <Send className="h-5 w-5 mr-2" />
                      Start Free
                    </a>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button asChild className="bg-white/70 text-slate-900 hover:bg-white/90 border border-white/50 rounded-full px-8 py-6 text-lg backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all">
                    <Link href="/contact">Talk to Us</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 border-t border-slate-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo-black.png" alt="Whatstask Logo" width={24} height={24} />
                <span className="font-bold text-lg">Whatstask</span>
              </div>
              <p className="text-sm text-slate-500 mb-4 max-w-xs">
                Simple scales. Work tools for teams of any size who want to work, not manage tools.
              </p>
              <p className="text-sm text-gray-600">
                Contact: <a href="mailto:charlesaarondavid@gmail.com" className="text-slate-600 hover:text-slate-900">charlesaarondavid@gmail.com</a>
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Products</h4>
              <ul className="space-y-2">
                {[
                  { name: "Project Management", href: "/project-management" },
                  { name: "GEO Analyzer", href: "/geoanalyzer" },
                  { name: "Free Tools", href: "/tools" },
                  { name: "Pricing", href: "/pricing" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Solutions</h4>
              <ul className="space-y-2">
                {[
                  { name: "For Freelancers", href: "/use-cases/freelancers" },
                  { name: "For Agencies", href: "/use-cases/agencies" },
                  { name: "For Startups", href: "/use-cases/startups" },
                  { name: "Enterprise", href: "/enterprise" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2">
                {[
                  { name: "About", href: "/about" },
                  { name: "Founder", href: "/founder" },
                  { name: "Contact", href: "/contact" },
                  { name: "Blog", href: "/blog" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <button onClick={handlePrivacyClick} className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Compare Links */}
          <div className="border-t border-slate-100 pt-8 mb-8">
            <p className="text-xs text-gray-600 mb-3">Compare WhatsTask:</p>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "vs ClickUp", href: "/compare/clickup" },
                { name: "vs Monday", href: "/compare/monday" },
                { name: "vs Asana", href: "/compare/asana" },
                { name: "vs Todoist", href: "/compare/todoist" },
                { name: "vs Notion", href: "/compare/notion" },
              ].map((link, index) => (
                <Link key={index} href={link.href} className="text-xs text-slate-500 hover:text-slate-900 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Whatstask. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
