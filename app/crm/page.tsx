import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
import Script from "next/script"
import {
  ArrowRight,
  Check,
  Database,
  Users,
  MessageSquare,
  FileText,
  BarChart3,
  Shield,
  Layers,
  Filter,
  Kanban,
  Bell,
  Palette,
  GitMerge,
  History,
  Search,
} from "lucide-react"

export const metadata: Metadata = {
  title: "WhatsTask CRM: Custom Records, Pipelines, Team Chat & Document Templates",
  description:
    "The all-in-one CRM for service businesses. Custom records with 13 field types, visual pipelines, real-time team chat, PDF document templates, and formula fields. Free to start.",
  keywords: [
    "CRM for service businesses",
    "manpower agency CRM",
    "real estate CRM",
    "custom CRM platform",
    "team management software",
    "document template builder",
    "pipeline management",
    "free CRM",
    "multi-tenant CRM",
    "white-label CRM",
    "recruitment CRM",
    "sales pipeline CRM",
  ],
  openGraph: {
    title: "WhatsTask CRM — Custom Records, Pipelines & Document Templates",
    description:
      "The all-in-one CRM for service businesses. Manage records, teams, pipelines, and documents in one workspace.",
    url: "https://www.whatstask.com/crm",
    siteName: "WhatsTask",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsTask CRM — The CRM That Adapts to Any Business",
    description:
      "Custom records, visual pipelines, real-time chat, PDF templates. Free to start.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.whatstask.com/crm",
  },
}

export default function CRMPage() {
  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Custom Records System",
      description:
        "Define your own data structure — no coding needed. 13 field types including text, number, email, phone, date, select, multi-select, file upload, URL, currency, boolean, and formula.",
      color: "violet",
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Visual Filters & Saved Views",
      description:
        "Build complex filters visually — pick field, operator, value. AND/OR filter groups. Save combos as named views. Pipeline stage tabs. Sortable columns.",
      color: "blue",
    },
    {
      icon: <Kanban className="w-6 h-6" />,
      title: "Pipeline / Kanban Board",
      description:
        "Configure custom stages (New Lead → Contacted → Qualified → Won → Lost). Visual kanban with drag-and-drop cards. Stage colors and ordering.",
      color: "emerald",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Management",
      description:
        "Invite via link (share on WhatsApp, email, anywhere). 4 roles: Admin, Manager, Employee, Viewer. 22 granular permissions enforced on UI and API.",
      color: "amber",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Real-Time Chat",
      description:
        "WhatsApp-style bubbles. Public and private groups. Edit and delete messages. Unread badges. Real-time delivery via Supabase Realtime.",
      color: "pink",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Template Builder",
      description:
        "Block-based visual editor (like Notion meets Canva). 8 block types. Upload logos, signatures, watermarks. Generate PDFs from any record with one click.",
      color: "cyan",
    },
    {
      icon: <GitMerge className="w-6 h-6" />,
      title: "Data Power Features",
      description:
        "Linked records, formula fields (IF, DATEDIFF, CONCAT), auto duplicate detection, record merge, full revision history with diff view, threaded comments.",
      color: "orange",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Activity & Audit Log",
      description:
        "Every action tracked: create, update, delete, invite, role change. Full field-level change diff. Paginated and filterable.",
      color: "indigo",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Real-Time Notifications",
      description:
        "Notification bell with unread count. Alerts for new messages, chat invites, record changes. Instant delivery via Supabase Realtime.",
      color: "red",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Multi-Workspace",
      description:
        "Belong to multiple companies. Switch workspaces from the sidebar. Each workspace is fully isolated — data, team, and settings.",
      color: "teal",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Full Customization",
      description:
        'Light/dark theme, 10 accent colors + custom picker. Rename "Records" to "Candidates", "Leads", "Properties". Company branding per workspace.',
      color: "fuchsia",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description:
        "Google OAuth via Supabase Auth. Row-level tenant isolation. Server-side permission checks on every API call. Zod validation. Soft-delete.",
      color: "slate",
    },
  ]

  const colorMap: Record<string, string> = {
    violet: "bg-violet-500/20 text-violet-400",
    blue: "bg-blue-500/20 text-blue-400",
    emerald: "bg-emerald-500/20 text-emerald-400",
    amber: "bg-amber-500/20 text-amber-400",
    pink: "bg-pink-500/20 text-pink-400",
    cyan: "bg-cyan-500/20 text-cyan-400",
    orange: "bg-orange-500/20 text-orange-400",
    indigo: "bg-indigo-500/20 text-indigo-400",
    red: "bg-red-500/20 text-red-400",
    teal: "bg-teal-500/20 text-teal-400",
    fuchsia: "bg-fuchsia-500/20 text-fuchsia-400",
    slate: "bg-slate-500/20 text-slate-400",
  }

  const useCases = [
    { title: "Manpower Agencies", desc: "Track workers, assignments, documents, and client records. Generate CVs and deployment letters from templates.", icon: "👷" },
    { title: "Real Estate Firms", desc: "Manage properties, leads, viewings, and contracts. Pipeline from inquiry to closing.", icon: "🏠" },
    { title: "Recruitment Agencies", desc: "Custom fields for candidates, positions, and clients. Duplicate detection on emails and phone numbers.", icon: "📋" },
    { title: "Sales Teams", desc: "Visual pipeline from lead to deal. Formula fields for deal value calculations. Activity tracking per contact.", icon: "💼" },
    { title: "Law Firms", desc: "Case management with revision history. Generate legal documents from templates. Role-based access for associates.", icon: "⚖️" },
    { title: "Schools & Clinics", desc: "Student/patient records with custom fields. Document templates for certificates and reports.", icon: "🏥" },
  ]

  const comparison = [
    { feature: "Custom Fields", crm: "13 types", hubspot: "Limited free", notion: "Database", airtable: "Yes" },
    { feature: "Pipeline/Kanban", crm: "Built-in", hubspot: "Paid", notion: "Manual", airtable: "Yes" },
    { feature: "Team Chat", crm: "Built-in", hubspot: "No", notion: "No", airtable: "No" },
    { feature: "Document Templates", crm: "Block editor + PDF", hubspot: "Paid add-on", notion: "No", airtable: "No" },
    { feature: "Formula Fields", crm: "Yes", hubspot: "Paid", notion: "Yes", airtable: "Yes" },
    { feature: "Duplicate Detection", crm: "Auto on create", hubspot: "Paid", notion: "No", airtable: "No" },
    { feature: "Revision History", crm: "Full diff + restore", hubspot: "Yes", notion: "Yes", airtable: "No" },
    { feature: "Multi-Workspace", crm: "Yes", hubspot: "Separate accounts", notion: "Yes", airtable: "Yes" },
    { feature: "White-Label", crm: "Yes", hubspot: "No", notion: "No", airtable: "No" },
    { feature: "Free Tier", crm: "Generous", hubspot: "Very limited", notion: "Yes", airtable: "Yes" },
  ]

  const steps = [
    { num: 1, title: "Sign Up", desc: "One-click Google OAuth. No forms, no verification emails." },
    { num: 2, title: "Create Workspace", desc: "Name your company, set your labels. Done in 10 seconds." },
    { num: 3, title: "Define Fields", desc: "Add the fields your business needs — 13 types to choose from." },
    { num: 4, title: "Add Records", desc: "Enter manually or bulk import from CSV." },
    { num: 5, title: "Invite Team", desc: "Share an invite link via WhatsApp, email, or anywhere." },
    { num: 6, title: "Go Live", desc: "Chat, assign, filter, pipeline, generate documents. All set." },
  ]

  const stats = [
    { value: "13", label: "Field Types" },
    { value: "22", label: "Granular Permissions" },
    { value: "100k+", label: "Records per Workspace" },
    { value: "8", label: "Template Block Types" },
    { value: "50+", label: "API Endpoints" },
    { value: "$0", label: "To Start" },
  ]

  const pricing = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: ["3 users", "500 records", "10 custom fields", "Basic pipeline", "Team chat"],
      cta: "Start Free",
      highlight: false,
    },
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      features: ["10 users", "10,000 records", "Unlimited fields", "Pipeline + Kanban", "Chat + Notifications", "CSV import/export"],
      cta: "Get Starter",
      highlight: false,
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      features: ["Unlimited users", "100,000 records", "Document templates", "Formula fields", "Duplicate detection", "Revision history", "Audit log"],
      cta: "Get Professional",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Unlimited everything", "Custom integrations", "SLA & priority support", "White-label branding", "Dedicated onboarding"],
      cta: "Contact Sales",
      highlight: false,
    },
  ]

  return (
    <>
      <PageLoader />
      <Navigation variant="dark" />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        <main className="container mx-auto px-4 py-16 max-w-6xl">
          {/* Hero */}
          <section className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 mb-6">
              <Database className="w-4 h-4 text-violet-400" />
              <span className="text-violet-400 text-sm font-medium">WhatsTask CRM</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white">
              The CRM That Adapts
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-200">
                to Any Business
              </span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light mb-10">
              Manage records, teams, pipelines, and documents in one workspace.
              Custom fields, real-time chat, PDF templates, formula fields — built for service businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6 text-base font-semibold">
                <a href="https://crm.whatstask.com" target="_blank" rel="noopener noreferrer">
                  Open CRM Free
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 border-white/20 text-white hover:bg-white/10 bg-transparent">
                <a href="#features">See All Features</a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-green-500" />
                Free forever tier
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-green-500" />
                No credit card
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-green-500" />
                Google sign-in
              </span>
            </div>
          </section>

          {/* Stats */}
          <section className="mb-24">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-6 border border-white/10 rounded-2xl bg-white/5">
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section id="features" className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4 font-medium">Features</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Everything Your Business Needs in One Platform</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:bg-white/[0.03] transition-all">
                  <div className={`w-12 h-12 rounded-xl ${colorMap[feature.color]} flex items-center justify-center mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Document Templates Deep Dive */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4 font-medium">Highlight</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Generate Any Document from Any Record</h2>
              <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
                Design templates with a block-based editor. Insert record data dynamically. Export as PDF. Works for CVs, invoices, contracts, letters, certificates — anything.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
                <h3 className="text-lg font-semibold text-white mb-4">8 Block Types</h3>
                <div className="space-y-3">
                  {["Header — titles and section headings", "Text — paragraphs with rich formatting", "Field Value — pull data from any record field", "Static Image — logos, signatures, watermarks", "Record Image — photos attached to the record", "Field Table — tabular display of record data", "Divider — visual separation", "Spacer — control layout spacing"].map((block, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-300">{block}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
                <h3 className="text-lg font-semibold text-white mb-4">Output Options</h3>
                <div className="space-y-3">
                  {["A4, Letter, Legal page sizes", "Portrait and landscape orientation", "Style each block: font, bold, alignment, color, background", "Live preview with real record data", "One-click PDF generation", "Use for: CVs, invoices, letters, contracts, certificates"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4 font-medium">Getting Started</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Up and Running in Minutes</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((step) => (
                <div key={step.num} className="border border-white/10 rounded-2xl p-6 relative">
                  <div className="w-10 h-10 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold text-sm mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-neutral-400 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4 font-medium">Use Cases</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Built for Service Businesses</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((uc, i) => (
                <div key={i} className="border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:bg-white/[0.03] transition-all">
                  <div className="text-3xl mb-4">{uc.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{uc.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{uc.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4 font-medium">Comparison</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">WhatsTask CRM vs HubSpot vs Notion vs Airtable</h2>
            </div>

            <div className="border border-white/10 rounded-2xl overflow-hidden overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="text-left p-5 font-semibold text-white">Feature</th>
                    <th className="text-center p-5 font-semibold text-violet-400">WhatsTask CRM</th>
                    <th className="text-center p-5 font-medium text-neutral-500">HubSpot</th>
                    <th className="text-center p-5 font-medium text-neutral-500">Notion</th>
                    <th className="text-center p-5 font-medium text-neutral-500">Airtable</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 last:border-0">
                      <td className="p-5 text-neutral-300">{row.feature}</td>
                      <td className="p-5 text-center text-white font-medium">{row.crm}</td>
                      <td className="p-5 text-center text-neutral-500">{row.hubspot}</td>
                      <td className="p-5 text-center text-neutral-500">{row.notion}</td>
                      <td className="p-5 text-center text-neutral-500">{row.airtable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4 font-medium">Under the Hood</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Modern Tech Stack</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { layer: "Framework", tech: "Next.js 15" },
                { layer: "UI", tech: "React 19 + Tailwind" },
                { layer: "Database", tech: "PostgreSQL" },
                { layer: "ORM", tech: "Drizzle (type-safe)" },
                { layer: "Auth", tech: "Google OAuth" },
                { layer: "Real-time", tech: "Supabase Realtime" },
                { layer: "Validation", tech: "Zod" },
                { layer: "Hosting", tech: "Vercel" },
              ].map((item, i) => (
                <div key={i} className="border border-white/10 rounded-xl p-4 text-center">
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">{item.layer}</p>
                  <p className="text-white font-medium">{item.tech}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="mb-24">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4 font-medium">Pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Simple, Transparent Pricing</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricing.map((plan, i) => (
                <div
                  key={i}
                  className={`border rounded-2xl p-6 ${
                    plan.highlight
                      ? "border-violet-500/50 bg-violet-500/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  {plan.highlight && (
                    <div className="text-xs font-medium text-violet-400 uppercase tracking-wider mb-3">Most Popular</div>
                  )}
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-neutral-500 text-sm">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-neutral-300">
                        <Check className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full rounded-full ${
                      plan.highlight
                        ? "bg-white text-black hover:bg-neutral-200"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    <a href="https://crm.whatstask.com" target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="border border-violet-500/30 bg-violet-500/10 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Your business, your way. One platform.
              </h2>
              <p className="text-neutral-300 mb-10 text-lg font-light max-w-2xl mx-auto">
                Stop paying for features you don't need. Start with a CRM that adapts to how you actually work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6 text-base font-semibold">
                  <a href="https://crm.whatstask.com" target="_blank" rel="noopener noreferrer">
                    Start Free — No Credit Card
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-neutral-500">
            <p>&copy; {new Date().getFullYear()} WhatsTask. Simple scales.</p>
          </div>
        </footer>
      </div>

      {/* Schemas */}
      <Script
        id="schema-crm"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                name: "WhatsTask CRM",
                image: "https://www.whatstask.com/og-image.png",
                applicationCategory: "BusinessApplication",
                applicationSubCategory: "CRM Software",
                operatingSystem: "Web",
                url: "https://crm.whatstask.com",
                description: "The all-in-one CRM for service businesses. Custom records, pipelines, team chat, document templates.",
                offers: [
                  {
                    "@type": "Offer",
                    name: "Free",
                    price: "0",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    hasMerchantReturnPolicy: { "@type": "MerchantReturnPolicy", applicableCountry: "US", returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted" },
                    shippingDetails: { "@type": "OfferShippingDetails", shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "USD" }, shippingDestination: { "@type": "DefinedRegion", addressCountry: "US" }, deliveryTime: { "@type": "ShippingDeliveryTime", handlingTime: { "@type": "QuantitativeValue", minValue: "0", maxValue: "0", unitCode: "d" }, transitTime: { "@type": "QuantitativeValue", minValue: "0", maxValue: "0", unitCode: "d" } } },
                    description: "3 users, 500 records, 10 fields",
                  },
                  {
                    "@type": "Offer",
                    name: "Starter",
                    price: "19",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    hasMerchantReturnPolicy: { "@type": "MerchantReturnPolicy", applicableCountry: "US", returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted" },
                    shippingDetails: { "@type": "OfferShippingDetails", shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "USD" }, shippingDestination: { "@type": "DefinedRegion", addressCountry: "US" }, deliveryTime: { "@type": "ShippingDeliveryTime", handlingTime: { "@type": "QuantitativeValue", minValue: "0", maxValue: "0", unitCode: "d" }, transitTime: { "@type": "QuantitativeValue", minValue: "0", maxValue: "0", unitCode: "d" } } },
                    description: "10 users, 10k records, pipeline, chat",
                  },
                  {
                    "@type": "Offer",
                    name: "Professional",
                    price: "49",
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    hasMerchantReturnPolicy: { "@type": "MerchantReturnPolicy", applicableCountry: "US", returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted" },
                    shippingDetails: { "@type": "OfferShippingDetails", shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "USD" }, shippingDestination: { "@type": "DefinedRegion", addressCountry: "US" }, deliveryTime: { "@type": "ShippingDeliveryTime", handlingTime: { "@type": "QuantitativeValue", minValue: "0", maxValue: "0", unitCode: "d" }, transitTime: { "@type": "QuantitativeValue", minValue: "0", maxValue: "0", unitCode: "d" } } },
                    description: "Unlimited users, 100k records, templates, formulas",
                  },
                ],
                featureList: [
                  "13 custom field types",
                  "Visual pipeline / Kanban board",
                  "Real-time team chat",
                  "Document template builder with PDF export",
                  "Formula fields",
                  "Duplicate detection and record merge",
                  "Revision history with diff view",
                  "22 granular permissions",
                  "Multi-workspace support",
                ],
                provider: {
                  "@type": "Organization",
                  name: "WhatsTask",
                  url: "https://www.whatstask.com",
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is WhatsTask CRM?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "WhatsTask CRM is an all-in-one CRM platform for service businesses. It offers custom records with 13 field types, visual pipelines, real-time team chat, document template builder with PDF export, formula fields, and multi-workspace support.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Who is WhatsTask CRM for?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "WhatsTask CRM is built for service businesses including manpower agencies, real estate firms, recruitment agencies, sales teams, law firms, schools, clinics, and any business that manages people and data.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How much does WhatsTask CRM cost?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "WhatsTask CRM has a free tier with 3 users and 500 records. Starter is $19/month for 10 users and 10k records. Professional is $49/month for unlimited users and 100k records. Enterprise pricing is custom.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I generate documents from CRM records?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. WhatsTask CRM includes a block-based document template builder with 8 block types. You can design templates with logos, signatures, and dynamic record data, then generate PDFs with one click. Works for CVs, invoices, contracts, certificates, and more.",
                    },
                  },
                ],
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.whatstask.com" },
                  { "@type": "ListItem", position: 2, name: "CRM", item: "https://www.whatstask.com/crm" },
                ],
              },
            ],
          }),
        }}
      />
    </>
  )
}
