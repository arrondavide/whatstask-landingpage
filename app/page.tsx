"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Check, MessageSquare, Calendar, Clock, List, Send, X } from "lucide-react"
import LogoOrbit from "@/components/logo-orbit"
import AnimatedCard from "@/components/animated-card"
import PrivacyPolicy from "@/components/privacy-policy"
import AnimatedText from "@/components/animated-text"
import FloatingParticles from "@/components/floating-particles"
import CustomCursor from "@/components/custom-cursor"
import MobileMenuButton from "@/components/mobile-menu-button"
import PageLoader from "@/components/page-loader"
import Image from "next/image"

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const howItWorksRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll()
  const { scrollY } = useScroll()

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const heroTextY = useTransform(scrollY, [0, 300], [0, 100])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3])

  // Check which section is active based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      if (heroRef.current && scrollPosition < heroRef.current.offsetTop + heroRef.current.offsetHeight) {
        setActiveSection("hero")
      } else if (
        featuresRef.current &&
        scrollPosition < featuresRef.current.offsetTop + featuresRef.current.offsetHeight
      ) {
        setActiveSection("features")
      } else if (
        howItWorksRef.current &&
        scrollPosition < howItWorksRef.current.offsetTop + howItWorksRef.current.offsetHeight
      ) {
        setActiveSection("how-it-works")
      } else {
        setActiveSection("cta")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent body scroll when mobile menu is open
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

  if (!mounted) return null

  // Animation variants
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

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Page Loader */}
      <PageLoader />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Animated background elements */}
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
            <Image src="/logo.png" alt="Whatstask Logo" width={32} height={32} className="w-8 h-8" />
            <span className="font-bold text-xl tracking-tight">Whatstask</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: "Features", href: "#features", section: "features" },
              { name: "How It Works", href: "#how-it-works", section: "how-it-works" },
              { name: "Privacy", href: "#", section: "privacy", isDialog: true },
            ].map((item) =>
              item.isDialog ? (
                <Dialog key={item.section}>
                  <DialogTrigger asChild>
                    <motion.button
                      className={`text-sm hover:text-white transition-colors tracking-wide ${
                        activeSection === item.section ? "text-white font-medium" : "text-gray-400"
                      }`}
                      whileHover={{ y: -2, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.button>
                  </DialogTrigger>
                  <DialogContent className="bg-black/95 border border-white/10 text-white max-w-2xl">
                    <PrivacyPolicy />
                  </DialogContent>
                </Dialog>
              ) : (
                <motion.a
                  key={item.section}
                  href={item.href}
                  className={`text-sm hover:text-white transition-colors tracking-wide ${
                    activeSection === item.section ? "text-white font-medium" : "text-gray-400"
                  }`}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ),
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
            <Button
              asChild
              className="bg-white text-black hover:bg-white/90 rounded-full px-6 relative overflow-hidden group"
            >
              <a
                href="https://t.me/whatstaskbot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-6"
              >
                <motion.span
                  className="absolute inset-0 bg-white/30"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <Send className="h-4 w-4 relative z-10" />
                <span className="font-medium tracking-wide relative z-10">Start on Telegram</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Menu - Full Screen Overlay */}
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
                    { name: "Features", href: "#features" },
                    { name: "How It Works", href: "#how-it-works" },
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.button
                        className="text-2xl font-medium tracking-wide text-right"
                        variants={fadeInUp}
                        custom={2}
                        onClick={() => setIsOpen(false)}
                      >
                        Privacy
                      </motion.button>
                    </DialogTrigger>
                    <DialogContent className="bg-black/95 border border-white/10 text-white max-w-2xl">
                      <PrivacyPolicy />
                    </DialogContent>
                  </Dialog>
                </motion.div>
              </div>

              <div className="p-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <Button asChild className="w-full bg-white text-black hover:bg-white/90 rounded-full">
                    <a
                      href="https://t.me/whatstaskbot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-6 text-lg"
                    >
                      <Send className="h-5 w-5" />
                      <span className="font-medium tracking-wide">Start on Telegram</span>
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 px-4"
      >
        <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="text-center max-w-4xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatedText
              text="Manage Tasks. Launch Ideas."
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-2"
              once
            />
            <AnimatedText
              text="All from Telegram — Faster Than Ever."
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-400 mb-6"
              once
              delay={0.5}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-light tracking-wide leading-relaxed"
          >
            The most elegant way to organize your life without leaving your favorite messenger.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              asChild
              className="bg-white text-black hover:bg-white/90 rounded-full px-8 relative overflow-hidden group"
            >
              <a
                href="https://t.me/whatstaskbot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-6 text-lg"
              >
                <motion.span
                  className="absolute inset-0 bg-white/30"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <Send className="h-5 w-5 relative z-10" />
                <span className="font-medium tracking-wide relative z-10">Start on Telegram</span>
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

      {/* Rest of the page content remains the same */}
      {/* Features Section */}
      <section id="features" ref={featuresRef} className="relative py-24 md:py-32 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <AnimatedText
              text="Premium Features"
              className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight"
              once
            />
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
              Designed for efficiency and elegance, Whatstask transforms how you manage tasks within Telegram.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                icon: <MessageSquare className="h-8 w-8" />,
                title: "Natural Language Input",
                description:
                  "Create tasks using everyday language. Simply type what you need to do, and Whatstask understands.",
              },
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "Smart Scheduling",
                description:
                  "Automatically detects dates and times in your messages to schedule tasks without extra steps.",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Intelligent Reminders",
                description: "Get notified at the perfect time with context-aware reminders that adapt to your habits.",
              },
              {
                icon: <List className="h-8 w-8" />,
                title: "Organized Categories",
                description: "Keep work, personal, and project tasks separate with automatic categorization.",
              },
              {
                icon: <Check className="h-8 w-8" />,
                title: "One-Tap Completion",
                description: "Mark tasks complete with a single tap, keeping your productivity flowing smoothly.",
              },
              {
                icon: <MessageSquare className="h-8 w-8" />,
                title: "Seamless Collaboration",
                description: "Share tasks with friends or colleagues without them leaving Telegram.",
              },
            ].map((feature, index) => (
              <AnimatedCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" ref={howItWorksRef} className="relative py-24 md:py-32 px-4 border-t border-white/5">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <AnimatedText
              text="How It Works"
              className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight"
              once
            />
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
              Three simple steps to revolutionize your task management experience.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
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
              <motion.div key={index} variants={fadeInUp} custom={index} className="relative">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className="text-5xl font-black text-white/10 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 font-light tracking-wide leading-relaxed">{item.description}</p>
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  />

                  {/* Animated corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-white/10"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Improved for mobile */}
      <section ref={ctaRef} className="relative py-24 md:py-32 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 text-center relative overflow-hidden"
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0"
              animate={{
                x: ["100%", "-100%"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 8,
                ease: "linear",
              }}
            />

            <div className="relative z-10">
              <AnimatedText
                text="Ready to Transform Your Productivity?"
                className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight"
                once
              />
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 font-light tracking-wide leading-relaxed">
                Join thousands of users who have streamlined their task management with Whatstask.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block w-full sm:w-auto"
              >
                <Button
                  asChild
                  className="w-full sm:w-auto bg-white text-black hover:bg-white/90 rounded-full px-8 relative overflow-hidden group"
                >
                  <a
                    href="https://t.me/whatstaskbot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-6 text-lg"
                  >
                    <motion.span
                      className="absolute inset-0 bg-white/30"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <Send className="h-5 w-5 relative z-10" />
                    <span className="font-medium tracking-wide relative z-10">Start on Telegram</span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-white/5">
        <div className="container mx-auto">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex items-center gap-2 mb-6 md:mb-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image src="/logo.png" alt="Whatstask Logo" width={24} height={24} className="w-6 h-6" />
              <span className="font-bold text-lg tracking-tight">Whatstask</span>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-6 md:mb-0">
              {[
                { name: "Features", href: "#features" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "Privacy Policy", href: "#", isDialog: true },
              ].map((item, index) =>
                item.isDialog ? (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <motion.button
                        className="text-sm text-gray-400 hover:text-white transition-colors tracking-wide"
                        whileHover={{ y: -2, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.name}
                      </motion.button>
                    </DialogTrigger>
                    <DialogContent className="bg-black/95 border border-white/10 text-white max-w-2xl">
                      <PrivacyPolicy />
                    </DialogContent>
                  </Dialog>
                ) : (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors tracking-wide"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                ),
              )}
            </div>
          </motion.div>
          <motion.div
            className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-gray-400 font-light tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            © {new Date().getFullYear()} Whatstask. All rights reserved.
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
