"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, X, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface NavItem {
  name: string
  href?: string
  hasDropdown?: boolean
}

// Simplified navigation: 5 items only
const navItems: NavItem[] = [
  { name: "PM Connect", href: "/pm-connect" },
  { name: "Developer API", href: "/developers" },
  { name: "Workspace", href: "/workspace" },
  { name: "Pricing", href: "/pricing" },
  { name: "Tools", hasDropdown: true },
]

interface NavigationProps {
  variant?: 'default' | 'solid' | 'dark'
}

export default function Navigation({ variant = 'dark' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(variant === 'solid')
  const isDark = variant === 'dark'
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (variant === 'solid') {
      setScrolled(true)
    } else if (variant === 'dark') {
      setScrolled(false)
    } else {
      setScrolled(latest > 50)
    }
  })

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown(name)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  // Simple Tools dropdown
  const ToolsDropdown = () => (
    <div className="p-6 min-w-[280px]">
      <div className="space-y-1">
        <DropdownLink
          href="/geoanalyzer"
          title="GEO Analyzer"
          description="AI search optimization tool"
          dark={!scrolled}
        />
        <DropdownLink
          href="/tools"
          title="PDF Tools"
          description="Merge, compress, convert PDFs"
          dark={!scrolled}
        />
        <DropdownLink
          href="/qr-code-generator"
          title="QR Generator"
          description="Create QR codes instantly"
          dark={!scrolled}
        />
      </div>
      <div className={`mt-4 pt-4 border-t ${isDark || !scrolled ? 'border-white/10' : 'border-neutral-200'}`}>
        <p className={`text-xs ${isDark || !scrolled ? 'text-neutral-500' : 'text-neutral-400'}`}>
          Free tools by Whatstask. No signup required.
        </p>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isDark
            ? "backdrop-blur-xl bg-[#0a0a0a]/95 border-b border-white/5"
            : scrolled
              ? "backdrop-blur-xl bg-white/95 border-b border-neutral-200/50 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
              : "backdrop-blur-sm border-b border-white/10"
        }`}
        ref={dropdownRef}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src={isDark ? "/logo.png" : scrolled ? "/logo-black.png" : "/logo.png"}
                  alt="Whatstask Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 transition-all duration-300"
                />
                <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${isDark ? "text-white" : scrolled ? "text-neutral-900" : "text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]"}`}>
                  Whatstask
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation - 5 items */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                        isDark
                          ? "text-white/80 hover:text-white hover:bg-white/10"
                          : scrolled
                            ? "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full relative ${
                        activeDropdown === item.name
                          ? isDark ? "text-white bg-white/20" : scrolled ? "text-neutral-900 bg-neutral-100" : "text-white bg-white/20"
                          : isDark
                            ? "text-white/80 hover:text-white hover:bg-white/10"
                            : scrolled
                              ? "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                              : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button asChild className="bg-white text-black hover:bg-neutral-100 rounded-full px-6 transition-all hover:shadow-lg">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <span className="font-medium">Connect PM Tool</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
                isDark
                  ? "bg-white/10 border border-white/20"
                  : scrolled
                    ? "bg-slate-100 border border-slate-200"
                    : "bg-white/20 backdrop-blur-sm border border-white/30"
              }`}
            >
              {mobileMenuOpen ? (
                <X className={`w-5 h-5 ${isDark ? "text-white" : scrolled ? "text-slate-900" : "text-white"}`} />
              ) : (
                <div className="flex flex-col gap-1.5">
                  <span className={`w-5 h-0.5 ${isDark ? "bg-white" : scrolled ? "bg-slate-900" : "bg-white"}`}></span>
                  <span className={`w-5 h-0.5 ${isDark ? "bg-white" : scrolled ? "bg-slate-900" : "bg-white"}`}></span>
                  <span className={`w-3 h-0.5 ${isDark ? "bg-white" : scrolled ? "bg-slate-900" : "bg-white"}`}></span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Tools Dropdown */}
        <AnimatePresence>
          {activeDropdown === "Tools" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className={`absolute top-full right-0 mr-4 mt-2 rounded-xl ${
                isDark || !scrolled
                  ? 'bg-[#0a0a0a] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
                  : 'bg-white border border-neutral-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)]'
              }`}
              onMouseEnter={() => timeoutRef.current && clearTimeout(timeoutRef.current)}
              onMouseLeave={handleMouseLeave}
            >
              <ToolsDropdown />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80" onClick={() => setMobileMenuOpen(false)} />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#0a0a0a] border-l border-white/10 overflow-y-auto"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <Image src="/logo.png" alt="Whatstask Logo" width={28} height={28} />
                  <span className="font-bold text-lg text-white">Whatstask</span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Mobile Nav Items - Simple list */}
              <div className="p-4 space-y-1">
                <MobileNavLink href="/pm-connect" onClick={() => setMobileMenuOpen(false)}>
                  PM Connect
                </MobileNavLink>
                <MobileNavLink href="/developers" onClick={() => setMobileMenuOpen(false)}>
                  Developer API
                </MobileNavLink>
                <MobileNavLink href="/workspace" onClick={() => setMobileMenuOpen(false)}>
                  Workspace
                </MobileNavLink>
                <MobileNavLink href="/pricing" onClick={() => setMobileMenuOpen(false)}>
                  Pricing
                </MobileNavLink>

                <div className="pt-4 mt-4 border-t border-white/10">
                  <p className="px-4 py-2 text-xs uppercase tracking-wider text-neutral-500">Free Tools</p>
                  <MobileNavLink href="/geoanalyzer" onClick={() => setMobileMenuOpen(false)}>
                    GEO Analyzer
                  </MobileNavLink>
                  <MobileNavLink href="/tools" onClick={() => setMobileMenuOpen(false)}>
                    PDF Tools
                  </MobileNavLink>
                  <MobileNavLink href="/qr-code-generator" onClick={() => setMobileMenuOpen(false)}>
                    QR Generator
                  </MobileNavLink>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10">
                  <p className="px-4 py-2 text-xs uppercase tracking-wider text-neutral-500">Company</p>
                  <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>
                    About
                  </MobileNavLink>
                  <MobileNavLink href="/blog" onClick={() => setMobileMenuOpen(false)}>
                    Blog
                  </MobileNavLink>
                  <MobileNavLink href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </MobileNavLink>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="p-4 border-t border-white/10">
                <Button asChild className="w-full bg-white text-black hover:bg-neutral-100 rounded-full py-6 transition-all">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    Connect Your PM Tool
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Dropdown Link Component
function DropdownLink({
  href,
  title,
  description,
  dark,
}: {
  href: string
  title: string
  description: string
  dark?: boolean
}) {
  return (
    <Link
      href={href}
      className={`block p-3 rounded-lg transition-all duration-200 group ${
        dark
          ? 'hover:bg-white/10'
          : 'hover:bg-neutral-100'
      }`}
    >
      <p className={`text-sm font-medium ${dark ? "text-white" : "text-neutral-900"}`}>
        {title}
      </p>
      <p className={`text-xs mt-0.5 ${dark ? 'text-neutral-400' : 'text-neutral-500'}`}>
        {description}
      </p>
    </Link>
  )
}

// Mobile Nav Link Component
function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-all duration-200"
    >
      {children}
    </Link>
  )
}
