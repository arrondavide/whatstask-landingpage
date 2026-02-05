"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ChevronDown,
  X,
  Send,
  CheckSquare,
  Clock,
  Users,
  Calendar,
  LayoutGrid,
  Brain,
  Search,
  FileText,
  QrCode,
  ImageIcon,
  Scissors,
  Minimize2,
  Megaphone,
  Code,
  Wifi,
  UserCircle,
  Building2,
  Rocket,
  Briefcase,
  BookOpen,
  HelpCircle,
  MessageSquare,
  Shield,
  ArrowRight,
  BarChart3,
  Layers,
  Zap,
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
  { name: "Resources", hasDropdown: true },
  { name: "Pricing", href: "/pricing" },
  { name: "Enterprise", href: "/enterprise" },
]

export default function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileActiveSection, setMobileActiveSection] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

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
        <h3 className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-4">Work Management</h3>
        <div className="space-y-1">
          <DropdownLink href="/project-management" icon={<CheckSquare className="h-5 w-5" />} title="Project Management" description="Tasks, boards, and timelines" />
          <DropdownLink href="/features" icon={<LayoutGrid className="h-5 w-5" />} title="All Features" description="Everything Whatstask offers" />
          <DropdownLink href="/project-management#time-tracking" icon={<Clock className="h-5 w-5" />} title="Time Tracking" description="Track hours and productivity" />
          <DropdownLink href="/project-management#collaboration" icon={<Users className="h-5 w-5" />} title="Team Collaboration" description="Work together seamlessly" />
          <DropdownLink href="/project-management#views" icon={<Calendar className="h-5 w-5" />} title="Multiple Views" description="List, Kanban, Calendar, Timeline" />
        </div>
      </div>

      {/* AI Tools Column */}
      <div>
        <h3 className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-4">AI Tools</h3>
        <div className="space-y-1">
          <DropdownLink href="/project-management#ai" icon={<Brain className="h-5 w-5" />} title="AI Task Creation" description="Create tasks with natural language" highlight />
          <DropdownLink href="/geoanalyzer" icon={<Search className="h-5 w-5" />} title="GEO Analyzer" description="AI search optimization tool" highlight />
          <DropdownLink href="/geoanalyzer/guide" icon={<BookOpen className="h-5 w-5" />} title="GEO Guide" description="Learn about AI search" />
        </div>

        <h3 className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-4 mt-8">Free PDF Tools</h3>
        <div className="space-y-1">
          <DropdownLink href="/tools" icon={<FileText className="h-5 w-5" />} title="All Tools" description="PDF & QR utilities" />
          <DropdownLink href="/pdf-merger" icon={<Layers className="h-5 w-5" />} title="PDF Merger" description="Combine PDFs" />
          <DropdownLink href="/pdf-compressor" icon={<Minimize2 className="h-5 w-5" />} title="PDF Compressor" description="Reduce file size" />
        </div>
      </div>

      {/* Featured Column */}
      <div className="bg-gradient-to-br from-violet-500/10 to-violet-500/5 rounded-xl p-6 border border-violet-500/20">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="h-5 w-5 text-violet-400" />
          <span className="text-sm font-semibold text-violet-400">Try Whatstask Free</span>
        </div>
        <p className="text-sm text-slate-600 mb-4">
          Get started in 30 seconds. No credit card required. Works right in Telegram.
        </p>
        <Button asChild className="w-full bg-violet-500 hover:bg-violet-600 text-white rounded-full">
          <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            <Send className="h-4 w-4" />
            Launch in Telegram
          </a>
        </Button>
        <div className="mt-4 pt-4 border-t border-slate-200">
          <p className="text-xs text-slate-500">Trusted by 10,000+ teams</p>
        </div>
      </div>
    </div>
  )

  const SolutionsDropdown = () => (
    <div className="grid grid-cols-3 gap-8 p-8">
      {/* By Team Column */}
      <div>
        <h3 className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-4">By Team</h3>
        <div className="space-y-1">
          <DropdownLink href="/solutions/marketing" icon={<Megaphone className="h-5 w-5" />} title="Marketing Teams" description="Campaigns, content, launches" />
          <DropdownLink href="/solutions/development" icon={<Code className="h-5 w-5" />} title="Development Teams" description="Sprints, bugs, roadmaps" />
          <DropdownLink href="/solutions/remote" icon={<Wifi className="h-5 w-5" />} title="Remote Teams" description="Async collaboration" />
          <DropdownLink href="/solutions/operations" icon={<BarChart3 className="h-5 w-5" />} title="Operations" description="Process management" />
        </div>
      </div>

      {/* By Company Size Column */}
      <div>
        <h3 className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-4">By Company Size</h3>
        <div className="space-y-1">
          <DropdownLink href="/use-cases/freelancers" icon={<UserCircle className="h-5 w-5" />} title="Freelancers" description="Solo productivity" />
          <DropdownLink href="/solutions/small-teams" icon={<Users className="h-5 w-5" />} title="Small Teams" description="2-10 people" />
          <DropdownLink href="/use-cases/startups" icon={<Rocket className="h-5 w-5" />} title="Startups" description="Move fast, stay organized" />
          <DropdownLink href="/use-cases/agencies" icon={<Briefcase className="h-5 w-5" />} title="Agencies" description="Client work management" />
          <DropdownLink href="/enterprise" icon={<Building2 className="h-5 w-5" />} title="Enterprise" description="Custom solutions" />
        </div>
      </div>

      {/* Use Cases Column */}
      <div>
        <h3 className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-4">Use Cases</h3>
        <div className="space-y-1">
          <DropdownLink href="/how-it-works" icon={<Zap className="h-5 w-5" />} title="How It Works" description="See Whatstask in action" />
          <DropdownLink href="/project-management" icon={<CheckSquare className="h-5 w-5" />} title="Project Management" description="Plan and execute projects" />
          <DropdownLink href="/project-management#time-tracking" icon={<Clock className="h-5 w-5" />} title="Time Tracking" description="Track billable hours" />
        </div>

        <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
          <p className="text-sm font-medium mb-2">Not sure which solution?</p>
          <p className="text-xs text-slate-600 mb-3">Talk to us about your team's needs.</p>
          <Link href="/contact" className="text-sm text-violet-400 hover:text-violet-300 flex items-center gap-1">
            Contact Sales <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  )

  const ResourcesDropdown = () => (
    <div className="grid grid-cols-3 gap-8 p-8">
      {/* Learn Column */}
      <div>
        <h3 className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-4">Learn</h3>
        <div className="space-y-1">
          <DropdownLink href="/blog" icon={<BookOpen className="h-5 w-5" />} title="Blog" description="Tips, guides, and updates" />
          <DropdownLink href="/templates" icon={<FileText className="h-5 w-5" />} title="Templates" description="Ready-to-use project templates" />
          <DropdownLink href="/geoanalyzer/guide" icon={<Search className="h-5 w-5" />} title="GEO Guide" description="Master AI search optimization" />
          <DropdownLink href="/how-it-works" icon={<Zap className="h-5 w-5" />} title="Getting Started" description="Quick start guide" />
        </div>
      </div>

      {/* Support Column */}
      <div>
        <h3 className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-4">Support</h3>
        <div className="space-y-1">
          <DropdownLink href="/help" icon={<HelpCircle className="h-5 w-5" />} title="Help Center" description="FAQs and documentation" />
          <DropdownLink href="/contact" icon={<MessageSquare className="h-5 w-5" />} title="Contact Support" description="Get help from our team" />
          <DropdownLink href="/security" icon={<Shield className="h-5 w-5" />} title="Security" description="How we protect your data" />
        </div>

        <h3 className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-4 mt-8">Company</h3>
        <div className="space-y-1">
          <DropdownLink href="/about" icon={<Building2 className="h-5 w-5" />} title="About Us" description="Our mission and values" />
          <DropdownLink href="/founder" icon={<UserCircle className="h-5 w-5" />} title="Founder Story" description="Why we built Whatstask" />
        </div>
      </div>

      {/* Compare Column */}
      <div>
        <h3 className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-4">Compare</h3>
        <div className="space-y-1">
          <DropdownLink href="/compare/clickup" title="vs ClickUp" description="Simpler alternative" />
          <DropdownLink href="/compare/monday" title="vs Monday.com" description="More affordable" />
          <DropdownLink href="/compare/asana" title="vs Asana" description="Less complexity" />
          <DropdownLink href="/compare/notion" title="vs Notion" description="Task-focused" />
          <DropdownLink href="/compare/todoist" title="vs Todoist" description="Team features included" />
        </div>
        <Link href="/compare/clickup" className="mt-4 text-sm text-violet-400 hover:text-violet-300 flex items-center gap-1">
          See all comparisons <ArrowRight className="h-3 w-3" />
        </Link>
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
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200"
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
                <Image src="/logo.png" alt="Whatstask Logo" width={32} height={32} className="w-8 h-8" />
                <span className="font-bold text-xl tracking-tight">Whatstask</span>
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
                      className="flex items-center gap-1 px-4 py-2 text-sm text-slate-700 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-50"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm transition-colors rounded-lg ${
                        activeDropdown === item.name
                          ? "text-slate-900 bg-slate-100"
                          : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
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

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="text-sm text-slate-700 hover:text-slate-900 transition-colors px-4 py-2"
              >
                Contact Sales
              </Link>
              <Button asChild className="bg-violet-500 hover:bg-violet-600 text-white rounded-full px-6">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <span className="font-medium">Start Free</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-slate-50 border border-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : (
                <div className="flex flex-col gap-1.5">
                  <span className="w-5 h-0.5 bg-slate-900"></span>
                  <span className="w-5 h-0.5 bg-slate-900"></span>
                  <span className="w-3 h-0.5 bg-slate-900"></span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Dropdown Menus */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white backdrop-blur-xl border-b border-slate-200 shadow-2xl"
              onMouseEnter={() => timeoutRef.current && clearTimeout(timeoutRef.current)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="container mx-auto">
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
                  <Image src="/logo.png" alt="Whatstask Logo" width={28} height={28} />
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

              {/* Mobile CTAs */}
              <div className="p-4 border-t border-slate-200 space-y-3">
                <Button asChild className="w-full bg-violet-500 hover:bg-violet-600 text-white rounded-full py-6">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    Start Free in Telegram
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full rounded-full py-6 border-slate-300">
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

// Dropdown Link Component
function DropdownLink({
  href,
  icon,
  title,
  description,
  highlight,
}: {
  href: string
  icon?: React.ReactNode
  title: string
  description: string
  highlight?: boolean
}) {
  return (
    <Link
      href={href}
      className={`flex items-start gap-3 p-3 rounded-lg transition-colors group ${
        highlight ? "hover:bg-violet-500/10" : "hover:bg-slate-50"
      }`}
    >
      {icon && (
        <div className={`mt-0.5 ${highlight ? "text-violet-400" : "text-slate-600 group-hover:text-slate-900"}`}>
          {icon}
        </div>
      )}
      <div>
        <p className={`text-sm font-medium ${highlight ? "text-violet-600" : "text-slate-900"}`}>{title}</p>
        <p className="text-xs text-slate-500 mt-0.5">{description}</p>
      </div>
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
      className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
    >
      {children}
    </Link>
  )
}
