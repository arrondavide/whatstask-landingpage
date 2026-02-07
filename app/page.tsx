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
  Zap,
  Sparkles,
  Timer,
  Target,
  MessageSquare,
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
      <section className="relative py-24 px-4 border-t border-slate-100 overflow-hidden bg-gradient-to-b from-violet-50/50 via-white to-purple-50/30">
        {/* Decorative blob backgrounds */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-violet-600 bg-clip-text text-transparent">
                The industry got it wrong
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              ClickUp has 15+ views. Monday needs a consultant. Asana charges enterprise prices for basic AI.
              <br className="hidden md:block" />
              Somewhere along the way, "powerful" became "impossible to use."
            </p>
          </motion.div>

          {/* Comparison Grid - Dramatic Gradient Cards with Emojis */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { label: "ClickUp", stat: "15+", desc: "views to learn", emoji: "👥", gradient: "from-purple-500 via-pink-500 to-purple-600" },
              { label: "Monday", stat: "$12", desc: "per seat for AI", emoji: "💰", gradient: "from-blue-500 via-purple-500 to-pink-500" },
              { label: "Asana", stat: "Weeks", desc: "to set up", emoji: "⏳", gradient: "from-pink-500 via-purple-500 to-blue-500" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                <div className="relative bg-white rounded-3xl p-8 border border-slate-200/60 text-center shadow-xl hover:shadow-2xl transition-all duration-300 cursor-default overflow-hidden">
                  {/* Gradient border effect on hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  {/* Decorative corner gradient */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-10 rounded-bl-full blur-2xl`} />

                  <div className="relative z-10">
                    {/* Emoji with glow */}
                    <div className="relative inline-block mb-4">
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                      <div className="relative text-6xl transform group-hover:scale-110 transition-transform duration-300">
                        {item.emoji}
                      </div>
                    </div>

                    <p className="text-sm text-slate-500 font-medium mb-2">{item.label}</p>
                    <p className={`text-5xl md:text-6xl font-black mb-2 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                      <AnimatedTextCounter target={item.stat} />
                    </p>
                    <p className="text-slate-600 font-medium">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* WhatsTask difference - Bento Box Grid with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background gradient mesh */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-transparent to-pink-100/50 rounded-3xl opacity-50" />

            <div className="relative z-10">
              <div className="text-center mb-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-bold mb-4 shadow-lg"
                >
                  <Sparkles className="w-4 h-4" />
                  The WhatsTask Way
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Built different. Works better.
                </h3>
              </div>

              {/* Bento Grid Layout */}
              <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-5">
                {[
                  { stat: "4", title: "Simple views", desc: "Core principles that guide everything", emoji: "🎯", gradient: "from-purple-500 to-pink-500", bgGradient: "from-purple-100 to-pink-50", position: "md:col-span-2 md:row-span-2" },
                  { stat: "Free", title: "Forever free", desc: "No credit card, no surprises", emoji: "💎", gradient: "from-blue-500 to-purple-500", bgGradient: "from-blue-50 to-purple-50", position: "col-span-1 row-span-1" },
                  { stat: "30s", title: "To get started", desc: "Setup in seconds, not days", emoji: "⚡", gradient: "from-pink-500 to-orange-500", bgGradient: "from-pink-50 to-orange-50", position: "col-span-1 row-span-1" },
                  { stat: "Any", title: "Team size", desc: "From solo to enterprise", emoji: "🌍", gradient: "from-emerald-500 to-teal-500", bgGradient: "from-emerald-50 to-teal-50", position: "col-span-2 row-span-1" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className={`${item.position} group relative`}
                  >
                    {/* Glassmorphism card */}
                    <div className={`h-full p-6 md:p-8 rounded-3xl bg-gradient-to-br ${item.bgGradient} backdrop-blur-lg border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden`}>
                      {/* Animated gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />

                      <div className="relative z-10">
                        {/* Emoji with glow */}
                        <div className="relative inline-block mb-4">
                          <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                          <div className="relative text-5xl md:text-6xl transform group-hover:scale-110 transition-transform duration-300">
                            {item.emoji}
                          </div>
                        </div>

                        {/* Gradient badge */}
                        <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${item.gradient} text-white font-bold text-xl md:text-2xl mb-3 shadow-lg`}>
                          <AnimatedTextCounter target={item.stat} />
                        </div>

                        <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>

                      {/* Decorative circles */}
                      <div className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-20 rounded-full blur-2xl`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative py-24 px-4 border-t border-slate-100 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
        {/* Decorative gradient orbs */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
                Two products. One philosophy.
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Powerful yet simple. Choose one, use both. No limits.
            </p>
          </motion.div>

          {/* Product Cards - 3D Gradient Border Effects */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Management */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group relative"
            >
              {/* Outer glow on hover */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl" />

              {/* Card with gradient border */}
              <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-slate-200 to-slate-100 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-500">
                <div className="relative bg-white rounded-3xl p-8 md:p-10 overflow-hidden">
                  {/* Badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold tracking-wider shadow-lg flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    MOST POPULAR
                  </div>

                  {/* Icon container with glow */}
                  <div className="relative w-20 h-20 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 rounded-3xl blur-2xl group-hover:opacity-40 transition-opacity duration-300" />
                    <div className="relative w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                      📊
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900 mb-2">Project Management</h3>
                  <p className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    The complete task solution
                  </p>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Everything you need to manage projects and teams in one beautiful, simple interface.
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
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-5xl font-black text-slate-900">Free</span>
                    <span className="text-slate-500">forever</span>
                  </div>

                  {/* CTA Button */}
                  <Button asChild className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 rounded-2xl relative overflow-hidden group/btn">
                    <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Send className="h-5 w-5" />
                        Try Project Management
                      </span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
                    </a>
                  </Button>

                  {/* Decorative gradient corner */}
                  <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 opacity-5 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>

            {/* GEO Analyzer */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.1 }}
              className="group relative"
            >
              {/* Outer glow on hover */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl" />

              {/* Card with gradient border */}
              <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-slate-200 to-slate-100 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-500">
                <div className="relative bg-white rounded-3xl p-8 md:p-10 overflow-hidden">
                  {/* Badge */}
                  <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold tracking-wider shadow-lg">
                    NEW
                  </div>

                  {/* Icon container with glow */}
                  <div className="relative w-20 h-20 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 rounded-3xl blur-2xl group-hover:opacity-40 transition-opacity duration-300" />
                    <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                      🎯
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900 mb-2">GEO Analyzer</h3>
                  <p className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                    Goals that actually get done
                  </p>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Generative Engine Optimization. Optimize your content for AI-powered search. Get cited by ChatGPT, Perplexity, and Google SGE.
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
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-5xl font-black text-slate-900">Free</span>
                    <span className="text-slate-500">forever</span>
                  </div>

                  {/* CTA Button */}
                  <Button asChild className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 rounded-2xl relative overflow-hidden group/btn">
                    <a href="https://geoanalyzer.whatstask.com" target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Sparkles className="h-5 w-5" />
                        Try GEO Analyzer
                      </span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
                    </a>
                  </Button>

                  {/* Decorative gradient corner */}
                  <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-5 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500" />
                </div>
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
      <section className="relative py-24 px-4 border-t border-slate-100 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-slate-500 mb-6">B2B Custom Solutions</p>

            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
                Need something custom?
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light mb-12">
              We offer custom integrations, white-label solutions, and enterprise features
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Custom Integrations",
                  desc: "Connect your existing tools",
                  emoji: "🔗",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "White-label",
                  desc: "Your brand, our platform",
                  emoji: "🎨",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Video calls",
                  desc: "Built-in communication",
                  emoji: "📹",
                  gradient: "from-pink-500 to-orange-500"
                },
                {
                  title: "Migration",
                  desc: "Move from any tool",
                  emoji: "🚀",
                  gradient: "from-green-500 to-teal-500"
                },
                {
                  title: "Team training",
                  desc: "Onboarding support",
                  emoji: "👥",
                  gradient: "from-indigo-500 to-purple-500"
                },
                {
                  title: "Unlimited users",
                  desc: "No per-seat pricing",
                  emoji: "♾️",
                  gradient: "from-pink-500 to-rose-500"
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative p-8 rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    {/* Gradient glow on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`} />

                    {/* Emoji with gradient background */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                      <div className={`relative w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-4xl shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        {item.emoji}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>

                    {/* Description */}
                    <p className="text-slate-600">{item.desc}</p>

                    {/* Arrow indicator on hover */}
                    <div className={`mt-4 flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                <Link href="/enterprise">Explore Enterprise</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 border-slate-300 hover:bg-slate-50">
                <a href="mailto:charlesaarondavid@gmail.com">Contact Us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Free Tools Section */}
      <section className="relative py-24 px-4 border-t border-slate-100 overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
                Free tools that just work
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              All features. No limits. Forever free.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {[
              { name: "PDF Merger", href: "/pdf-merger", emoji: "📄", gradient: "from-purple-500 to-pink-500" },
              { name: "PDF Compressor", href: "/pdf-compressor", emoji: "🗜️", gradient: "from-blue-500 to-cyan-500" },
              { name: "PDF to JPG", href: "/pdf-to-jpg", emoji: "🖼️", gradient: "from-pink-500 to-orange-500" },
              { name: "JPG to PDF", href: "/jpg-to-pdf", emoji: "📑", gradient: "from-green-500 to-teal-500" },
              { name: "PDF Splitter", href: "/pdf-splitter", emoji: "✂️", gradient: "from-indigo-500 to-purple-500" },
              { name: "QR Code", href: "/qr-code-generator", emoji: "📱", gradient: "from-rose-500 to-pink-500" },
            ].map((tool, index) => (
              <motion.a
                key={index}
                href={tool.href}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="group flex flex-col items-center"
              >
                {/* Gradient emoji container */}
                <div className="relative mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />
                  <div className={`relative w-24 h-24 bg-gradient-to-br ${tool.gradient} rounded-3xl flex items-center justify-center text-5xl shadow-xl transform group-hover:shadow-2xl transition-all duration-300`}>
                    {tool.emoji}
                  </div>
                </div>

                {/* Tool name */}
                <p className="text-sm font-semibold text-slate-700 text-center group-hover:text-purple-600 transition-colors">
                  {tool.name}
                </p>
              </motion.a>
            ))}
          </div>

          {/* View all link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:gap-4 transition-all duration-300"
            >
              View all 30+ integrations
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Stats - Enhanced Visual Hierarchy */}
      <section className="relative py-24 px-4 border-t border-slate-100 overflow-hidden">
        {/* Subtle floating particles background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-violet-400/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-pink-500/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-violet-300/30 shadow-[0_8px_32px_rgba(139,92,246,0.12),inset_0_1px_0_rgba(255,255,255,0.5)] overflow-hidden"
          >
            {/* Decorative gradient orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-500/10 rounded-full text-violet-600 text-sm font-medium mb-4">
                  <Target className="w-4 h-4" />
                  Our Philosophy
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for how you actually work</h2>
                <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                  We're not trying to be everything to everyone. We're building simple tools that scale - from
                  freelancers to enterprises.
                </p>
                <ul className="space-y-4">
                  {[
                    { text: "No learning curve", desc: "Start in seconds" },
                    { text: "No feature bloat", desc: "Only what you need" },
                    { text: "No enterprise complexity", desc: "Simple pricing, simple tools" },
                    { text: "Just tools that work", desc: "Built for real work" },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-violet-500/25">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-800">{item.text}</span>
                        <span className="text-slate-500 ml-2 text-sm">{item.desc}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "800M+", label: "Telegram users", Icon: MessageSquare, gradient: "from-violet-500 to-purple-600" },
                  { stat: "Free", label: "to start", Icon: Sparkles, gradient: "from-pink-500 to-rose-600" },
                  { stat: "30s", label: "setup time", Icon: Timer, gradient: "from-amber-500 to-orange-600" },
                  { stat: "24/7", label: "availability", Icon: Zap, gradient: "from-emerald-500 to-teal-600" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_4px_16px_rgba(139,92,246,0.08)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_12px_32px_rgba(139,92,246,0.18)] transition-all duration-300 overflow-hidden group"
                  >
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Small icon indicator */}
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <item.Icon className="w-5 h-5 text-white" />
                    </div>

                    <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-1">
                      <AnimatedTextCounter target={item.stat} />
                    </p>
                    <p className="text-sm text-slate-500 font-medium">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Liquid Glass with Grainient */}
      <section className="relative py-24 px-4 border-t border-slate-100 overflow-hidden">
        {/* Subtle Grainient background */}
        <div className="absolute inset-0 z-0">
          <Grainient
            color1="#8B5CF6"
            color2="#A78BFA"
            color3="#E9D5FF"
            grainAmount={0.12}
            grainScale={0.9}
            grainAnimated={true}
            timeSpeed={0.2}
            warpStrength={0.8}
            warpFrequency={2.5}
            warpSpeed={0.5}
            warpAmplitude={30.0}
            rotationAmount={270.0}
            contrast={1.2}
            saturation={1.2}
            className="opacity-30"
          />
        </div>
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white/80 backdrop-blur-md rounded-3xl p-10 md:p-16 border border-violet-200/50 shadow-[0_8px_32px_rgba(139,92,246,0.15),inset_0_1px_0_rgba(255,255,255,0.8)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready to simplify?</h2>
              <p className="text-xl text-slate-600 mb-8 font-light">
                Join teams who've chosen simplicity over complexity.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {[
                  { text: "No credit card required", icon: "✓" },
                  { text: "Free forever tier", icon: "✓" },
                  { text: "Cancel anytime", icon: "✓" },
                ].map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 bg-violet-50/80 rounded-full border border-violet-100"
                  >
                    <span className="w-5 h-5 rounded-full bg-violet-500 text-white text-xs flex items-center justify-center font-bold">
                      {badge.icon}
                    </span>
                    <span className="text-sm text-slate-700 font-medium">{badge.text}</span>
                  </motion.div>
                ))}
              </div>

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
                  <Button asChild className="bg-white/70 text-slate-900 hover:bg-white/90 border border-slate-200 rounded-full px-8 py-6 text-lg backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all">
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
