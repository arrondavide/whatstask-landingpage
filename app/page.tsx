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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PrivacyPolicy from "@/components/privacy-policy"
import CustomCursor from "@/components/custom-cursor"
import Navigation from "@/components/navigation"
import PageLoader from "@/components/page-loader"
import Grainient from "@/components/grainient"
import { MagneticButton } from "@/components/interactive-card"
import { BlurText, GradientText } from "@/components/animated-text"
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 w-full">
        {/* Grainient Background - Full width edge to edge */}
        <div className="absolute inset-0 z-0 w-screen left-1/2 -translate-x-1/2">
          <Grainient
            color1="#8B5CF6"
            color2="#A78BFA"
            color3="#E9D5FF"
            grainAmount={0.20}
            grainScale={0.8}
            grainAnimated={true}
            timeSpeed={0.3}
            warpStrength={1.2}
            warpFrequency={3.0}
            warpSpeed={1.0}
            warpAmplitude={40.0}
            rotationAmount={360.0}
            contrast={1.3}
            saturation={1.4}
            className="opacity-60"
          />
        </div>
        {/* Gradient fade at bottom of hero - full width */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-32 bg-gradient-to-t from-white to-transparent z-[1]" />

        <div className="container mx-auto max-w-7xl relative z-10 px-4">
          <div className="flex flex-col items-center">
            {/* Text content - centered */}
            <motion.div style={{ opacity: heroOpacity }} className="text-center max-w-4xl">
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
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
                  <GradientText
                    text="Simple scales."
                    from="#7C3AED"
                    via="#8B5CF6"
                    to="#A78BFA"
                    animate={true}
                  />
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto mb-4">
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
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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
            </motion.div>

            {/* Phone Mockups - Below text with slanted effect */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative flex justify-center items-end mt-12 lg:mt-16"
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

          {/* Scroll indicator - centered below */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center gap-2 text-slate-500 mt-12 lg:mt-16"
          >
            <span className="text-sm">See what we build</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="relative py-32 px-4 border-t border-slate-100">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
              The industry got it wrong
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
              Somewhere along the way, "powerful" became "impossible to use."
            </p>
          </motion.div>

          {/* Minimal Stats Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-px bg-slate-200 rounded-2xl overflow-hidden mb-20"
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
                className="bg-white p-10 text-center"
              >
                <p className="text-xs uppercase tracking-widest text-slate-400 mb-4">{item.label}</p>
                <p className="text-5xl font-light text-slate-900 mb-2">
                  <AnimatedTextCounter target={item.stat} />
                </p>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* WhatsTask difference - Clean minimal design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-slate-200 rounded-2xl p-10 md:p-16"
          >
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">WhatsTask</p>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                Built different. Works better.
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { stat: "4", title: "Views", desc: "That actually matter" },
                { stat: "Free", title: "AI", desc: "No extra charges" },
                { stat: "30s", title: "Setup", desc: "Not weeks" },
                { stat: "Any", title: "Team size", desc: "2 to 2000" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl font-light text-slate-900 mb-2">
                    <AnimatedTextCounter target={item.stat} />
                  </p>
                  <p className="text-sm font-medium text-slate-900 mb-1">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative py-32 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
              Two products. One philosophy.
            </h2>
            <p className="text-xl text-slate-500 max-w-xl mx-auto font-light">
              Powerful yet simple. Choose one, use both.
            </p>
          </motion.div>

          {/* Product Cards - Clean minimal design */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 h-full hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                <p className="text-xs uppercase tracking-widest text-violet-600 mb-6">Project Management</p>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">The complete task solution</h3>

                <p className="text-slate-500 mb-8 leading-relaxed">
                  Everything you need to manage projects and teams. Simple, fast, no bloat.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    "List, Kanban, Calendar, Timeline views",
                    "Free AI task creation",
                    "Built-in time tracking",
                    "Team roles & permissions",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-1 h-1 rounded-full bg-slate-400" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl font-light text-slate-900">Free</span>
                  <span className="text-slate-400 text-sm">forever</span>
                </div>

                <Button asChild className="w-full bg-slate-900 text-white hover:bg-slate-800 rounded-lg py-6">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
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
              <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 h-full hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                <p className="text-xs uppercase tracking-widest text-violet-600 mb-6">GEO Analyzer</p>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">AI search optimization</h3>

                <p className="text-slate-500 mb-8 leading-relaxed">
                  Optimize content for ChatGPT, Perplexity, and Google SGE. Get cited in AI responses.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    "Analyze AI readability",
                    "Optimize for all AI engines",
                    "Track AI search performance",
                    "3 free analyses daily",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-1 h-1 rounded-full bg-slate-400" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl font-light text-slate-900">Free</span>
                  <span className="text-slate-400 text-sm">forever</span>
                </div>

                <Button asChild variant="outline" className="w-full border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white rounded-lg py-6">
                  <a href="https://geoanalyzer.whatstask.com" target="_blank" rel="noopener noreferrer">
                    Try Analyzer
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="relative py-24 px-4 border-t border-slate-100 overflow-hidden">
        {/* Subtle Grainient background */}
        <div className="absolute inset-0 z-0">
          <Grainient
            color1="#F5F3FF"
            color2="#EDE9FE"
            color3="#DDD6FE"
            grainAmount={0.15}
            grainScale={1.0}
            grainAnimated={false}
            timeSpeed={0.1}
            warpStrength={0.5}
            warpFrequency={2.0}
            warpSpeed={0.3}
            warpAmplitude={20.0}
            rotationAmount={180.0}
            contrast={1.1}
            saturation={1.0}
            className="opacity-40"
          />
        </div>
        <div className="container mx-auto max-w-7xl relative z-10">
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

          {/* Phone Showcase - All Screenshots */}
          <div className="relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-violet-500/10 to-transparent rounded-3xl pointer-events-none" />

            {/* Scrollable container */}
            <div className="overflow-x-auto pb-8 scrollbar-hide">
              <div className="flex gap-6 md:gap-8 px-4 min-w-max justify-start md:justify-center">
                {[
                  { src: "/appui/app-onboarding.webp", alt: "Onboarding", label: "Quick onboarding" },
                  { src: "/appui/app-projects.webp", alt: "Projects", label: "View projects" },
                  { src: "/appui/app-create-project.webp", alt: "Create Project", label: "Create projects" },
                  { src: "/appui/app-team-management.webp", alt: "Team Management", label: "Manage team" },
                  { src: "/appui/app-stats-personal.webp", alt: "Personal Stats", label: "Personal stats" },
                  { src: "/appui/app-stats-team.webp", alt: "Team Stats", label: "Team analytics" },
                  { src: "/appui/app-profile.webp", alt: "Profile", label: "Your profile" },
                ].map((phone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <div className="scale-[0.8] md:scale-[0.85] transition-transform duration-300">
                      <PhoneMockup src={phone.src} alt={phone.alt} priority={index < 3} />
                    </div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="text-center mt-4 text-sm font-medium text-slate-600"
                    >
                      {phone.label}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Scroll hint for mobile */}
            <div className="flex justify-center mt-4 md:hidden">
              <p className="text-xs text-slate-400">Swipe to see more</p>
            </div>
          </div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mt-12"
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
      <section className="relative py-32 px-4 border-t border-slate-100 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Enterprise</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
              Need something custom?
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
                <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full hover:border-slate-300 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-8 py-6">
              <Link href="/enterprise">Explore Enterprise</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-lg px-8 py-6 border-slate-300 hover:bg-white">
              <a href="mailto:charlesaarondavid@gmail.com">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Free Tools Section */}
      <section className="relative py-32 px-4 border-t border-slate-100">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Free Tools</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
              Tools that just work
            </h2>
            <p className="text-xl text-slate-500 max-w-xl mx-auto font-light">
              No limits. Forever free.
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
                <div className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:border-slate-300 hover:shadow-md transition-all duration-300">
                  <p className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
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
              className="inline-flex items-center gap-2 text-slate-500 text-sm hover:text-slate-900 transition-colors"
            >
              View all tools
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-32 px-4 border-t border-slate-100 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Philosophy</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
                Built for how you work
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8 text-lg font-light">
                Simple tools that scale. From freelancers to enterprises.
              </p>
              <ul className="space-y-4">
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
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <div className="w-1 h-1 rounded-full bg-slate-400" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { stat: "800M+", label: "Telegram users" },
                { stat: "Free", label: "to start" },
                { stat: "30s", label: "setup time" },
                { stat: "24/7", label: "availability" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:border-slate-300 hover:shadow-md transition-all duration-300"
                >
                  <p className="text-3xl md:text-4xl font-light text-slate-900 mb-1">
                    <AnimatedTextCounter target={item.stat} />
                  </p>
                  <p className="text-sm text-slate-500">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-4 border-t border-slate-100">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-slate-200 rounded-2xl p-10 md:p-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">
              Ready to simplify?
            </h2>
            <p className="text-xl text-slate-500 mb-10 font-light">
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
                  className="flex items-center gap-2 text-sm text-slate-500"
                >
                  <div className="w-1 h-1 rounded-full bg-slate-400" />
                  {text}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-8 py-6 text-lg">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-lg px-8 py-6 text-lg border-slate-300 hover:bg-slate-50">
                <Link href="/contact">Talk to Us</Link>
              </Button>
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
