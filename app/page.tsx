"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight, Check, MessageSquare, Calendar, Clock, List } from "lucide-react"
import LogoOrbit from "@/components/logo-orbit"
import AnimatedCard from "@/components/animated-card"
import PrivacyPolicy from "@/components/privacy-policy"
import Image from "next/image"

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, #333 0%, transparent 50%)",
            y: backgroundY,
          }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/5">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Whatstask Logo" width={32} height={32} className="w-8 h-8" />
            <span className="font-bold text-xl tracking-tight">Whatstask</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <motion.a
              href="#features"
              className="text-sm text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              Features
            </motion.a>
            <motion.a
              href="#how-it-works"
              className="text-sm text-gray-400 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              How It Works
            </motion.a>
            <Dialog>
              <DialogTrigger asChild>
                <motion.button
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                  whileHover={{ y: -2 }}
                >
                  Privacy
                </motion.button>
              </DialogTrigger>
              <DialogContent className="bg-black/95 border border-white/10 text-white max-w-2xl">
                <PrivacyPolicy />
              </DialogContent>
            </Dialog>
          </nav>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild className="bg-white text-black hover:bg-white/90 rounded-full px-6">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                <span>Start Instantly</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
            Manage Tasks. Launch Ideas.
            <br />
            <span className="text-gray-400">All from Telegram — Faster Than Ever.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            The most elegant way to organize your life without leaving your favorite messenger.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Button asChild className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                <span>Start Instantly</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative w-full max-w-2xl mx-auto mt-12"
        >
          <LogoOrbit />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="relative py-32 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Premium Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Designed for efficiency and elegance, Whatstask transforms how you manage tasks within Telegram.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedCard
              icon={<MessageSquare className="h-8 w-8" />}
              title="Natural Language Input"
              description="Create tasks using everyday language. Simply type what you need to do, and Whatstask understands."
              delay={0.1}
            />
            <AnimatedCard
              icon={<Calendar className="h-8 w-8" />}
              title="Smart Scheduling"
              description="Automatically detects dates and times in your messages to schedule tasks without extra steps."
              delay={0.2}
            />
            <AnimatedCard
              icon={<Clock className="h-8 w-8" />}
              title="Intelligent Reminders"
              description="Get notified at the perfect time with context-aware reminders that adapt to your habits."
              delay={0.3}
            />
            <AnimatedCard
              icon={<List className="h-8 w-8" />}
              title="Organized Categories"
              description="Keep work, personal, and project tasks separate with automatic categorization."
              delay={0.4}
            />
            <AnimatedCard
              icon={<Check className="h-8 w-8" />}
              title="One-Tap Completion"
              description="Mark tasks complete with a single tap, keeping your productivity flowing smoothly."
              delay={0.5}
            />
            <AnimatedCard
              icon={<MessageSquare className="h-8 w-8" />}
              title="Seamless Collaboration"
              description="Share tasks with friends or colleagues without them leaving Telegram."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-32 px-4 border-t border-white/5">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Three simple steps to revolutionize your task management experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Add to Telegram",
                description: "Start a conversation with Whatstask bot in your Telegram app.",
              },
              {
                step: "02",
                title: "Create Tasks",
                description: "Simply type your tasks in natural language. Whatstask handles the rest.",
              },
              {
                step: "03",
                title: "Stay Organized",
                description: "Receive smart reminders and manage everything without leaving Telegram.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className="text-5xl font-bold text-white/10 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Productivity?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Join thousands of users who have streamlined their task management with Whatstask.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Button asChild className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6 text-lg">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  <span>Start Instantly</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-white/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image src="/logo.png" alt="Whatstask Logo" width={24} height={24} className="w-6 h-6" />
              <span className="font-bold text-lg">Whatstask</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">
                How It Works
              </a>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</button>
                </DialogTrigger>
                <DialogContent className="bg-black/95 border border-white/10 text-white max-w-2xl">
                  <PrivacyPolicy />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Whatstask. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
