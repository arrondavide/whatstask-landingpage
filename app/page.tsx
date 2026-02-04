"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import {
  Check,
  Send,
  X,
  ArrowRight,
  Zap,
  Users,
  BarChart3,
  Brain,
  FileText,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import PrivacyPolicy from "@/components/privacy-policy"
import FloatingParticles from "@/components/floating-particles"
import CustomCursor from "@/components/custom-cursor"
import MobileMenuButton from "@/components/mobile-menu-button"
import PageLoader from "@/components/page-loader"

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [privacyDialogOpen, setPrivacyDialogOpen] = useState(false)

  const { scrollYProgress } = useScroll()
  const { scrollY } = useScroll()

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

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
        ease: "easeOut",
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

  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "Enterprise", href: "/enterprise" },
    { name: "Pricing", href: "/pricing" },
    { name: "Tools", href: "/tools" },
  ]

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <PageLoader />
      <CustomCursor />

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, #333 0%, transparent 50%)",
            y: backgroundY,
          }}
        />
        <FloatingParticles />
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/5"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Whatstask Logo" width={32} height={32} className="w-8 h-8" />
              <span className="font-bold text-xl tracking-tight">Whatstask</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition-colors tracking-wide"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          <div className="md:hidden">
            <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
            <Button asChild className="bg-white text-black hover:bg-white/90 rounded-full px-6">
              <Link href="/contact" className="flex items-center gap-2 py-6">
                <span className="font-medium tracking-wide">Contact Us</span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Privacy Dialog */}
      <Dialog open={privacyDialogOpen} onOpenChange={setPrivacyDialogOpen}>
        <DialogContent className="bg-black/95 border border-white/10 text-white w-[95vw] max-w-lg p-0">
          <div className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-white/10 bg-black/95">
            <h2 className="font-bold text-lg">Privacy Policy</h2>
            <DialogClose className="rounded-full p-2 hover:bg-white/10">
              <X className="h-5 w-5" />
            </DialogClose>
          </div>
          <div className="max-h-[70vh] overflow-y-auto">
            <PrivacyPolicy />
          </div>
        </DialogContent>
      </Dialog>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 flex flex-col h-full bg-black"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Image src="/logo.png" alt="Whatstask Logo" width={24} height={24} className="w-6 h-6" />
                  <span className="font-bold text-lg tracking-tight">Whatstask</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center p-8">
                <motion.div
                  className="flex flex-col items-end gap-6"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {[
                    { name: "Project Management", href: "/project-management" },
                    { name: "GEO Analyzer", href: "/geoanalyzer" },
                    { name: "Enterprise", href: "/enterprise" },
                    { name: "Pricing", href: "/pricing" },
                    { name: "Tools", href: "/tools" },
                    { name: "Contact", href: "/contact" },
                  ].map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      className="text-2xl font-medium tracking-wide"
                      onClick={() => setIsOpen(false)}
                      variants={fadeInUp}
                      custom={index}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4">
        <motion.div style={{ opacity: heroOpacity }} className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
            >
              <span className="text-sm text-gray-400">Work tools that respect your time</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight mb-6">
              Simple scales.
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto mb-4">
              Project management and AI tools for teams of any size who want to work, not manage tools.
            </p>

            <p className="text-lg text-gray-500 font-light mb-10">
              Your 500-person company doesn't need 50 features. They need 4 that work.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-teal-500 text-white hover:bg-teal-600 rounded-full px-8 py-6 text-lg">
                <Link href="/project-management" className="flex items-center gap-2">
                  <span className="font-medium">Try Project Management</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-white/10 text-white hover:bg-white/20 border border-white/20 rounded-full px-8 py-6 text-lg"
              >
                <Link href="/geoanalyzer" className="flex items-center gap-2">
                  <span className="font-medium">Try GEO Analyzer</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-sm">See what we build</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* The Problem Section */}
      <section className="relative py-24 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">The industry got it wrong</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              ClickUp has 15+ views. Monday needs a consultant. Asana charges enterprise prices for basic AI.
              <br className="hidden md:block" />
              Somewhere along the way, "powerful" became "impossible to use."
            </p>
          </motion.div>

          {/* Comparison Grid */}
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
                className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center"
              >
                <p className="text-sm text-gray-500 mb-2">{item.label}</p>
                <p className="text-4xl font-bold mb-2">{item.stat}</p>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* WhatsTask difference */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-500/10 to-white/5 rounded-3xl p-8 md:p-12 border border-teal-500/20 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">WhatsTask is different</h3>
            <div className="grid md:grid-cols-4 gap-8 mt-8">
              {[
                { stat: "4", desc: "views that matter" },
                { stat: "Free", desc: "AI features included" },
                { stat: "30s", desc: "to get started" },
                { stat: "Any", desc: "team size" },
              ].map((item, index) => (
                <div key={index}>
                  <p className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">{item.stat}</p>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative py-24 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Two products. One philosophy.</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Everything we build follows one rule: if it doesn't help you finish work faster, it doesn't exist.
            </p>
          </motion.div>

          {/* Product Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Management */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-teal-400" />
                </div>
                <h3 className="text-2xl font-bold">Project Management</h3>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
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
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-teal-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-teal-500 text-white hover:bg-teal-600 rounded-full px-6">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    <Send className="h-4 w-4 mr-2" />
                    Launch in Telegram
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-6 border-white/20">
                  <Link href="/project-management">Learn More</Link>
                </Button>
              </div>
            </motion.div>

            {/* GEO Analyzer */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-3xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">GEO Analyzer</h3>
                  <span className="text-xs text-cyan-400 font-medium">Future of Marketing</span>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
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
                  <div key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 rounded-full px-6"
                >
                  <a href="https://geoanalyzer.whatstask.com" target="_blank" rel="noopener noreferrer">
                    Launch GEO Analyzer
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-6 border-white/20">
                  <Link href="/geoanalyzer">Learn More</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="relative py-24 px-4 border-t border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <Users className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-400">B2B Custom Solutions</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Need something custom?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light mb-8">
              We build custom project management solutions for teams with specific needs. Same philosophy: simple, fast,
              no bloat.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Zap, title: "Custom Development", desc: "Tailored PM tools for your workflow" },
                { icon: FileText, title: "White-Label", desc: "Your brand, our infrastructure" },
                { icon: BarChart3, title: "Integrations", desc: "Connect with your existing tools" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 rounded-2xl p-6 border border-white/10"
                >
                  <item.icon className="h-8 w-8 text-gray-400 mb-4" />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6">
                <Link href="/enterprise">Explore Enterprise</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 border-white/20">
                <a href="mailto:charlesaarondavid@gmail.com">Contact Us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Free Tools Section */}
      <section className="relative py-24 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Free tools that just work</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
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
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -4 }}
                className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all text-center"
              >
                <span className="text-sm font-medium">{tool.name}</span>
              </motion.a>
            ))}
          </motion.div>

          <div className="text-center mt-8">
            <Link href="/tools" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2">
              View all tools <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="relative py-24 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-teal-500/10 to-white/5 rounded-3xl p-8 md:p-12 border border-teal-500/20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Built for how you actually work</h2>
                <p className="text-gray-400 leading-relaxed mb-6">
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
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-teal-400" />
                      <span>{item}</span>
                    </li>
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
                  <div key={index} className="bg-black/30 rounded-2xl p-6 text-center">
                    <p className="text-2xl md:text-3xl font-bold text-teal-400 mb-1">{item.stat}</p>
                    <p className="text-sm text-gray-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Ready to simplify?</h2>
            <p className="text-xl text-gray-400 mb-10 font-light">
              Join teams who've chosen simplicity over complexity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-teal-500 text-white hover:bg-teal-600 rounded-full px-8 py-6 text-lg">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  <Send className="h-5 w-5 mr-2" />
                  Start Free
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 text-lg border-white/20">
                <Link href="/contact">Talk to Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/logo.png" alt="Whatstask Logo" width={24} height={24} />
                <span className="font-bold text-lg">Whatstask</span>
              </div>
              <p className="text-sm text-gray-500 mb-4 max-w-xs">
                Simple scales. Work tools for teams of any size who want to work, not manage tools.
              </p>
              <p className="text-sm text-gray-600">
                Contact: <a href="mailto:charlesaarondavid@gmail.com" className="text-gray-400 hover:text-white">charlesaarondavid@gmail.com</a>
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
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">
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
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">
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
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <button onClick={handlePrivacyClick} className="text-sm text-gray-500 hover:text-white transition-colors">
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Compare Links */}
          <div className="border-t border-white/5 pt-8 mb-8">
            <p className="text-xs text-gray-600 mb-3">Compare WhatsTask:</p>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "vs ClickUp", href: "/compare/clickup" },
                { name: "vs Monday", href: "/compare/monday" },
                { name: "vs Asana", href: "/compare/asana" },
                { name: "vs Todoist", href: "/compare/todoist" },
                { name: "vs Notion", href: "/compare/notion" },
              ].map((link, index) => (
                <Link key={index} href={link.href} className="text-xs text-gray-500 hover:text-white transition-colors">
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
