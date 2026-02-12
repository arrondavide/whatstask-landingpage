"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  X,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface NavItem {
  name: string
  href?: string
  hasDropdown?: boolean
}

const navItems: NavItem[] = [
  { name: "Products", hasDropdown: true },
  { name: "Solutions", hasDropdown: true },
  { name: "GEO Analyzer", href: "/geoanalyzer" },
  { name: "Tools", href: "/tools" },
  { name: "Resources", hasDropdown: true },
  { name: "Pricing", href: "/pricing" },
]

interface NavigationProps {
  variant?: 'default' | 'solid'  // 'solid' always shows black logo/text for non-hero pages
}

export default function Navigation({ variant = 'default' }: NavigationProps) {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileActiveSection, setMobileActiveSection] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(variant === 'solid')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    // For solid variant, always keep scrolled appearance
    if (variant === 'solid') {
      setScrolled(true)
    } else {
      setScrolled(latest > 50)
    }
  })

  useEffect(() => {
    setMounted(true)
  }, [])

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

  if (!mounted) return null

  const ProductsDropdown = () => (
    <div className="grid grid-cols-3 gap-8 p-8">
      {/* Work Management Column */}
      <div>
        <h3 className={`text-xs font-semibold uppercase tracking-[0.15em] mb-4 ${scrolled ? 'text-neutral-400' : 'text-neutral-500'}`}>Work Management</h3>
        <div className="space-y-1">
          <DropdownLink href="/project-management" title="Project Management" description="Tasks, boards, and timelines" dark={!scrolled} />
          <DropdownLink href="/features" title="All Features" description="Everything Whatstask offers" dark={!scrolled} />
          <DropdownLink href="/project-management#time-tracking" title="Time Tracking" description="Track hours and productivity" dark={!scrolled} />
          <DropdownLink href="/project-management#collaboration" title="Team Collaboration" description="Work together seamlessly" dark={!scrolled} />
          <DropdownLink href="/project-management#views" title="Multiple Views" description="List, Kanban, Calendar, Timeline" dark={!scrolled} />
        </div>
      </div>

      {/* AI Tools Column */}
      <div>
        <h3 className={`text-xs font-semibold uppercase tracking-[0.15em] mb-4 ${scrolled ? 'text-neutral-400' : 'text-neutral-500'}`}>AI Tools</h3>
        <div className="space-y-1">
          <DropdownLink href="/project-management#ai" title="AI Task Creation" description="Create tasks with natural language" highlight dark={!scrolled} />
          <DropdownLink href="/geoanalyzer" title="GEO Analyzer" description="AI search optimization tool" highlight dark={!scrolled} />
          <DropdownLink href="/geoanalyzer/guide" title="GEO Guide" description="Learn about AI search" dark={!scrolled} />
        </div>

        <h3 className={`text-xs font-semibold uppercase tracking-wider mb-4 mt-8 ${scrolled ? 'text-slate-600' : 'text-slate-400'}`}>Free PDF Tools</h3>
        <div className="space-y-1">
          <DropdownLink href="/tools" title="All Tools" description="PDF & QR utilities" dark={!scrolled} />
          <DropdownLink href="/pdf-merger" title="PDF Merger" description="Combine PDFs" dark={!scrolled} />
          <DropdownLink href="/pdf-compressor" title="PDF Compressor" description="Reduce file size" dark={!scrolled} />
        </div>
      </div>

      {/* Featured Column */}
      <div className={`relative rounded-2xl p-5 ${scrolled ? 'bg-neutral-50 border border-neutral-100' : 'bg-white/5 border border-white/10'}`}>
        <p className={`text-sm font-semibold mb-2 ${scrolled ? 'text-neutral-900' : 'text-white'}`}>Try Whatstask Free</p>
        <p className={`text-sm mb-4 ${scrolled ? 'text-neutral-500' : 'text-neutral-400'}`}>
          Get started in 30 seconds. No credit card required.
        </p>
        <Button asChild className="w-full bg-neutral-900 hover:bg-neutral-800 text-white rounded-full transition-all hover:shadow-lg">
          <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
            Launch in Telegram
          </a>
        </Button>
        <p className={`text-xs mt-3 text-center ${scrolled ? 'text-neutral-400' : 'text-neutral-500'}`}>Free forever · No credit card</p>
      </div>
    </div>
  )

  const SolutionsDropdown = () => (
    <div className="grid grid-cols-3 gap-8 p-8">
      {/* By Team Column */}
      <div>
        <h3 className={`text-xs font-semibold uppercase tracking-[0.15em] mb-4 ${scrolled ? 'text-neutral-400' : 'text-neutral-500'}`}>By Team</h3>
        <div className="space-y-1">
          <DropdownLink href="/solutions/marketing" title="Marketing Teams" description="Campaigns, content, launches" dark={!scrolled} />
          <DropdownLink href="/solutions/development" title="Development Teams" description="Sprints, bugs, roadmaps" dark={!scrolled} />
          <DropdownLink href="/solutions/remote" title="Remote Teams" description="Async collaboration" dark={!scrolled} />
          <DropdownLink href="/solutions/operations" title="Operations" description="Process management" dark={!scrolled} />
        </div>
      </div>

      {/* By Company Size Column */}
      <div>
        <h3 className={`text-xs font-semibold uppercase tracking-[0.15em] mb-4 ${scrolled ? 'text-neutral-400' : 'text-neutral-500'}`}>By Company Size</h3>
        <div className="space-y-1">
          <DropdownLink href="/use-cases/freelancers" title="Freelancers" description="Solo productivity" dark={!scrolled} />
          <DropdownLink href="/solutions/small-teams" title="Small Teams" description="2-10 people" dark={!scrolled} />
          <DropdownLink href="/use-cases/startups" title="Startups" description="Move fast, stay organized" dark={!scrolled} />
          <DropdownLink href="/use-cases/agencies" title="Agencies" description="Client work management" dark={!scrolled} />
          <DropdownLink href="/enterprise" title="Enterprise" description="Custom solutions" dark={!scrolled} />
        </div>
      </div>

      {/* Use Cases Column */}
      <div>
        <h3 className={`text-xs font-semibold uppercase tracking-[0.15em] mb-4 ${scrolled ? 'text-neutral-400' : 'text-neutral-500'}`}>Use Cases</h3>
        <div className="space-y-1">
          <DropdownLink href="/how-it-works" title="How It Works" description="See Whatstask in action" dark={!scrolled} />
          <DropdownLink href="/project-management" title="Project Management" description="Plan and execute projects" dark={!scrolled} />
          <DropdownLink href="/project-management#time-tracking" title="Time Tracking" description="Track billable hours" dark={!scrolled} />
        </div>

        <div className={`mt-6 p-3 rounded-lg ${scrolled ? 'bg-gradient-to-br from-violet-50/80 to-violet-100/40' : 'bg-slate-800/50 border border-slate-700/50'}`}>
          <p className={`text-sm font-medium mb-1 ${scrolled ? 'text-slate-800' : 'text-white'}`}>Not sure which solution?</p>
          <p className={`text-xs mb-2 ${scrolled ? 'text-slate-600' : 'text-slate-300'}`}>Talk to us about your team's needs.</p>
          <Link href="/contact" className={`text-sm font-medium transition-colors ${scrolled ? 'text-violet-600 hover:text-violet-700' : 'text-violet-400 hover:text-violet-300'}`}>
            Contact Sales →
          </Link>
        </div>
      </div>
    </div>
  )

  const ResourcesDropdown = () => (
    <div className="grid grid-cols-3 gap-8 p-8">
      {/* Learn Column */}
      <div>
        <h3 className={`text-xs font-semibold uppercase tracking-[0.15em] mb-4 ${scrolled ? 'text-neutral-400' : 'text-neutral-500'}`}>Learn</h3>
        <div className="space-y-1">
          <DropdownLink href="/blog" title="Blog" description="Tips, guides, and updates" dark={!scrolled} />
          <DropdownLink href="/templates" title="Templates" description="Ready-to-use project templates" dark={!scrolled} />
          <DropdownLink href="/geoanalyzer/guide" title="GEO Guide" description="Master AI search optimization" dark={!scrolled} />
          <DropdownLink href="/how-it-works" title="Getting Started" description="Quick start guide" dark={!scrolled} />
        </div>
      </div>

      {/* Support Column */}
      <div>
        <h3 className={`text-xs font-semibold uppercase tracking-[0.15em] mb-4 ${scrolled ? 'text-neutral-400' : 'text-neutral-500'}`}>Support</h3>
        <div className="space-y-1">
          <DropdownLink href="/help" title="Help Center" description="FAQs and documentation" dark={!scrolled} />
          <DropdownLink href="/contact" title="Contact Support" description="Get help from our team" dark={!scrolled} />
          <DropdownLink href="/security" title="Security" description="How we protect your data" dark={!scrolled} />
        </div>

        <h3 className={`text-xs font-semibold uppercase tracking-wider mb-4 mt-8 ${scrolled ? 'text-slate-600' : 'text-slate-400'}`}>Company</h3>
        <div className="space-y-1">
          <DropdownLink href="/about" title="About Us" description="Our mission and values" dark={!scrolled} />
          <DropdownLink href="/founder" title="Founder Story" description="Why we built Whatstask" dark={!scrolled} />
        </div>
      </div>

      {/* Compare Column */}
      <div>
        <h3 className={`text-xs font-semibold uppercase tracking-[0.15em] mb-4 ${scrolled ? 'text-neutral-400' : 'text-neutral-500'}`}>Compare</h3>
        <div className="space-y-1">
          <DropdownLink href="/compare/clickup" title="vs ClickUp" description="Simpler alternative" dark={!scrolled} />
          <DropdownLink href="/compare/monday" title="vs Monday.com" description="More affordable" dark={!scrolled} />
          <DropdownLink href="/compare/asana" title="vs Asana" description="Less complexity" dark={!scrolled} />
          <DropdownLink href="/compare/notion" title="vs Notion" description="Task-focused" dark={!scrolled} />
          <DropdownLink href="/compare/todoist" title="vs Todoist" description="Team features included" dark={!scrolled} />
        </div>
        <Link href="/compare/clickup" className={`inline-block mt-4 text-sm font-medium transition-colors ${scrolled ? 'text-violet-600 hover:text-violet-700' : 'text-violet-400 hover:text-violet-300'}`}>
          See all comparisons →
        </Link>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Header - Premium */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
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
                  src={scrolled ? "/logo-black.png" : "/logo.png"}
                  alt="Whatstask Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 transition-all duration-300"
                />
                <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled ? "text-neutral-900" : "text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]"}`}>Whatstask</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
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
                        scrolled
                          ? "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                          : "text-white/90 hover:text-white hover:bg-white/10 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full relative ${
                        activeDropdown === item.name
                          ? scrolled ? "text-neutral-900 bg-neutral-100" : "text-white bg-white/20 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]"
                          : scrolled
                            ? "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                            : "text-white/90 hover:text-white hover:bg-white/10 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                      {/* Active indicator triangle */}
                      {activeDropdown === item.name && (
                        <span className={`absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] ${scrolled ? 'border-b-white' : 'border-b-slate-950'}`} />
                      )}
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTAs - Premium */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className={`text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full ${
                  scrolled
                    ? "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                    : "text-white/90 hover:text-white hover:bg-white/10 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]"
                }`}
              >
                Contact Sales
              </Link>
              <Button asChild className="bg-neutral-900 hover:bg-neutral-800 text-white rounded-full px-6 transition-all hover:shadow-lg">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <span className="font-medium">Start Free</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 ${
                scrolled
                  ? "bg-slate-100 border border-slate-200"
                  : "bg-white/20 backdrop-blur-sm border border-white/30"
              }`}
            >
              {mobileMenuOpen ? <X className={`w-5 h-5 ${scrolled ? "text-slate-900" : "text-white"}`} /> : (
                <div className="flex flex-col gap-1.5">
                  <span className={`w-5 h-0.5 ${scrolled ? "bg-slate-900" : "bg-white"}`}></span>
                  <span className={`w-5 h-0.5 ${scrolled ? "bg-slate-900" : "bg-white"}`}></span>
                  <span className={`w-3 h-0.5 ${scrolled ? "bg-slate-900" : "bg-white"}`}></span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Dropdown Menus - Premium */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className={`absolute top-full left-0 right-0 backdrop-blur-2xl ${
                scrolled
                  ? 'bg-white/98 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border-t border-neutral-100'
                  : 'bg-[#0a0a0a]/98 border-t border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              }`}
              onMouseEnter={() => timeoutRef.current && clearTimeout(timeoutRef.current)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Connecting bridge to prevent hover gap */}
              <div className="absolute -top-2 left-0 right-0 h-3 bg-transparent" />
              <div className="container mx-auto relative z-10">
                {activeDropdown === "Products" && <ProductsDropdown />}
                {activeDropdown === "Solutions" && <SolutionsDropdown />}
                {activeDropdown === "Resources" && <ResourcesDropdown />}
              </div>
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
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white border-l border-slate-200 overflow-y-auto"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-200">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <Image src="/logo-black.png" alt="Whatstask Logo" width={28} height={28} />
                  <span className="font-bold text-lg">Whatstask</span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-50"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Nav Items */}
              <div className="p-4 space-y-2">
                {/* Products Section */}
                <MobileNavSection
                  title="Products"
                  isOpen={mobileActiveSection === "Products"}
                  onToggle={() => setMobileActiveSection(mobileActiveSection === "Products" ? null : "Products")}
                >
                  <MobileNavLink href="/project-management" onClick={() => setMobileMenuOpen(false)}>Project Management</MobileNavLink>
                  <MobileNavLink href="/features" onClick={() => setMobileMenuOpen(false)}>All Features</MobileNavLink>
                  <MobileNavLink href="/geoanalyzer" onClick={() => setMobileMenuOpen(false)}>GEO Analyzer</MobileNavLink>
                  <MobileNavLink href="/tools" onClick={() => setMobileMenuOpen(false)}>Free Tools</MobileNavLink>
                </MobileNavSection>

                {/* Solutions Section */}
                <MobileNavSection
                  title="Solutions"
                  isOpen={mobileActiveSection === "Solutions"}
                  onToggle={() => setMobileActiveSection(mobileActiveSection === "Solutions" ? null : "Solutions")}
                >
                  <MobileNavLink href="/solutions/marketing" onClick={() => setMobileMenuOpen(false)}>Marketing Teams</MobileNavLink>
                  <MobileNavLink href="/solutions/development" onClick={() => setMobileMenuOpen(false)}>Development Teams</MobileNavLink>
                  <MobileNavLink href="/solutions/remote" onClick={() => setMobileMenuOpen(false)}>Remote Teams</MobileNavLink>
                  <MobileNavLink href="/solutions/small-teams" onClick={() => setMobileMenuOpen(false)}>Small Teams</MobileNavLink>
                  <MobileNavLink href="/use-cases/freelancers" onClick={() => setMobileMenuOpen(false)}>Freelancers</MobileNavLink>
                  <MobileNavLink href="/use-cases/agencies" onClick={() => setMobileMenuOpen(false)}>Agencies</MobileNavLink>
                </MobileNavSection>

                {/* Resources Section */}
                <MobileNavSection
                  title="Resources"
                  isOpen={mobileActiveSection === "Resources"}
                  onToggle={() => setMobileActiveSection(mobileActiveSection === "Resources" ? null : "Resources")}
                >
                  <MobileNavLink href="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</MobileNavLink>
                  <MobileNavLink href="/templates" onClick={() => setMobileMenuOpen(false)}>Templates</MobileNavLink>
                  <MobileNavLink href="/help" onClick={() => setMobileMenuOpen(false)}>Help Center</MobileNavLink>
                  <MobileNavLink href="/security" onClick={() => setMobileMenuOpen(false)}>Security</MobileNavLink>
                  <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
                </MobileNavSection>

                {/* Direct Links */}
                <Link
                  href="/pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-slate-900 font-medium hover:bg-slate-50 rounded-lg"
                >
                  Pricing
                </Link>
                <Link
                  href="/enterprise"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-slate-900 font-medium hover:bg-slate-50 rounded-lg"
                >
                  Enterprise
                </Link>

                {/* Compare Section */}
                <MobileNavSection
                  title="Compare"
                  isOpen={mobileActiveSection === "Compare"}
                  onToggle={() => setMobileActiveSection(mobileActiveSection === "Compare" ? null : "Compare")}
                >
                  <MobileNavLink href="/compare/clickup" onClick={() => setMobileMenuOpen(false)}>vs ClickUp</MobileNavLink>
                  <MobileNavLink href="/compare/monday" onClick={() => setMobileMenuOpen(false)}>vs Monday</MobileNavLink>
                  <MobileNavLink href="/compare/asana" onClick={() => setMobileMenuOpen(false)}>vs Asana</MobileNavLink>
                  <MobileNavLink href="/compare/notion" onClick={() => setMobileMenuOpen(false)}>vs Notion</MobileNavLink>
                </MobileNavSection>
              </div>

              {/* Mobile CTAs - Premium */}
              <div className="p-4 border-t border-neutral-200 space-y-3">
                <Button asChild className="w-full bg-neutral-900 hover:bg-neutral-800 text-white rounded-full py-6 transition-all">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    Start Free in Telegram
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full rounded-full py-6 border-neutral-300 hover:border-neutral-400 transition-all">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Contact Sales
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Dropdown Link Component - Interactive Hover
function DropdownLink({
  href,
  title,
  description,
  highlight,
  dark,
}: {
  href: string
  title: string
  description: string
  highlight?: boolean
  dark?: boolean
}) {
  return (
    <Link
      href={href}
      className={`block p-3 rounded-lg transition-all duration-200 group relative hover:translate-x-1 border-l-2 border-transparent ${
        dark
          ? 'hover:bg-white/10 hover:border-violet-400'
          : 'hover:bg-violet-500/[0.08] hover:border-violet-500'
      }`}
    >
      <p className={`text-sm font-medium transition-colors ${
        dark
          ? highlight
            ? "text-violet-400 group-hover:text-violet-300"
            : "text-white group-hover:text-slate-200"
          : highlight
            ? "text-violet-600 group-hover:text-violet-700"
            : "text-slate-800 group-hover:text-slate-900"
      }`}>{title}</p>
      <p className={`text-xs mt-0.5 transition-colors ${
        dark
          ? 'text-slate-400 group-hover:text-slate-300'
          : 'text-slate-500 group-hover:text-slate-600'
      }`}>{description}</p>
    </Link>
  )
}

// Mobile Nav Section Component
function MobileNavSection({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <div className="border-b border-slate-100">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 text-slate-900 font-medium hover:bg-slate-50 rounded-lg"
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-2 space-y-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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
      className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-violet-500/[0.08] hover:translate-x-1 transition-all duration-200 rounded-lg border-l-2 border-transparent hover:border-violet-500"
    >
      {children}
    </Link>
  )
}
