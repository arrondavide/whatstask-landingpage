"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowRight,
  ExternalLink,
  Search,
  Brain,
  Sparkles,
  Target,
  BarChart3,
  Zap,
  Globe,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import PageLoader from "@/components/page-loader"
import Grainient from "@/components/grainient"
import Script from "next/script"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description:
      "Deep analysis of your content structure, semantics, and readability for large language models like GPT-4, Claude, and Gemini.",
  },
  {
    icon: BarChart3,
    title: "GEO Score & Metrics",
    description:
      "Get a comprehensive GEO score with actionable metrics showing how well your content is optimized for AI search engines.",
  },
  {
    icon: Sparkles,
    title: "Smart Recommendations",
    description:
      "Receive intelligent suggestions to improve your content's visibility in AI-generated responses and search results.",
  },
  {
    icon: Target,
    title: "Competitive Analysis",
    description:
      "Compare your content against competitors and understand what makes top-ranking content perform in AI search.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "Get immediate feedback on your content. No waiting, no signup required. Analyze and optimize in real-time.",
  },
  {
    icon: Globe,
    title: "Multi-Platform Ready",
    description:
      "Optimize for Google SGE, ChatGPT, Perplexity, Claude, Bing Copilot, and other AI-powered search experiences.",
  },
]

const useCases = [
  {
    title: "Content Creators & Bloggers",
    description:
      "Ensure your articles, blog posts, and guides are optimized to appear in AI-generated summaries and featured snippets.",
  },
  {
    title: "SEO Professionals",
    description:
      "Stay ahead of the curve by mastering Generative Engine Optimization alongside traditional SEO strategies.",
  },
  {
    title: "Marketing Teams",
    description:
      "Optimize landing pages, product descriptions, and marketing content for maximum AI search visibility.",
  },
  {
    title: "AI & Tech Companies",
    description:
      "Ensure your technical documentation and product pages are properly understood and cited by AI systems.",
  },
]

const benefits = [
  "Rank higher in AI-powered search results",
  "Get cited by ChatGPT, Claude, and other LLMs",
  "Appear in Google SGE AI overviews",
  "Increase organic traffic from AI search",
  "Future-proof your content strategy",
  "Stay ahead of competitors in AI search",
]

const faqs = [
  {
    question: "What is Generative Engine Optimization (GEO)?",
    answer:
      "Generative Engine Optimization (GEO) is the practice of optimizing content specifically for AI-powered search engines and large language models. Unlike traditional SEO which focuses on keywords and backlinks, GEO emphasizes content structure, clarity, factual accuracy, and semantic relevance to ensure your content is properly understood, cited, and surfaced by AI systems like ChatGPT, Google SGE, Perplexity, and Claude.",
  },
  {
    question: "How is GEO different from traditional SEO?",
    answer:
      "Traditional SEO focuses on ranking in search engine results pages (SERPs) through keywords, backlinks, and technical optimization. GEO goes further by optimizing for AI comprehension and citation. AI systems prioritize well-structured, authoritative, and clearly written content that directly answers questions. GEO ensures your content is the source AI systems choose to reference in their responses.",
  },
  {
    question: "Why should I optimize for AI search in 2026?",
    answer:
      "AI search is rapidly transforming how people find information. Google SGE, ChatGPT with browsing, Perplexity, and other AI tools are becoming primary search interfaces. Studies show that AI-generated answers increasingly replace traditional click-through searches. If your content isn't optimized for GEO, you risk losing significant traffic and visibility as users shift to AI-powered search experiences.",
  },
  {
    question: "What platforms does GEO Analyzer optimize for?",
    answer:
      "GEO Analyzer helps optimize your content for all major AI search platforms including Google SGE (Search Generative Experience), ChatGPT, Claude, Perplexity, Bing Copilot, and other emerging AI-powered search engines. The optimization principles apply across all LLM-based systems.",
  },
  {
    question: "Is GEO Analyzer free to use?",
    answer:
      "Yes! GEO Analyzer offers 3 free analyses per day with no signup required. This generous daily limit lets you optimize your most important content without any hidden fees or subscriptions.",
  },
  {
    question: "How do I improve my GEO score?",
    answer:
      "To improve your GEO score, focus on: clear and concise writing, well-structured content with proper headings, factual accuracy with citations, comprehensive coverage of topics, natural language that answers questions directly, and proper use of schema markup. GEO Analyzer provides specific recommendations tailored to your content.",
  },
  {
    question: "Can GEO help my business get more traffic?",
    answer:
      "Absolutely. As AI search becomes more prevalent, businesses with GEO-optimized content will capture traffic that would otherwise go to AI-generated responses without citation. By being the authoritative source that AI systems cite, you can drive significant referral traffic and establish thought leadership in your industry.",
  },
  {
    question: "Who created GEO Analyzer?",
    answer:
      "GEO Analyzer is built by Whatstask, a productivity and tools company focused on helping individuals and businesses work smarter. We also offer task management solutions through Telegram and various free online tools. Our mission is to provide accessible, high-quality tools for the modern digital landscape.",
  },
]

const stats = [
  { value: "40%", label: "of searches will be AI-powered by 2026" },
  { value: "3x", label: "more likely to be cited with GEO optimization" },
  { value: "Free", label: "3 free analyses per day, no signup" },
]

export default function GeoAnalyzerClient() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
  })

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GEO Analyzer",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Free Generative Engine Optimization tool to analyze and optimize content for AI-powered search engines like ChatGPT, Google SGE, and Perplexity.",
    featureList: [
      "AI-powered content analysis",
      "GEO score calculation",
      "Smart optimization recommendations",
      "Multi-platform optimization",
      "Instant results",
      "No signup required",
    ],
    creator: {
      "@type": "Organization",
      name: "Whatstask",
      url: "https://www.whatstask.com",
    },
    url: "https://geoanalyzer.whatstask.com",
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Whatstask",
    url: "https://www.whatstask.com",
    logo: "https://www.whatstask.com/logo-black.png",
    sameAs: ["https://geoanalyzer.whatstask.com"],
    offers: {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: "GEO Analyzer",
        url: "https://geoanalyzer.whatstask.com",
      },
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.whatstask.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "GEO Analyzer",
        item: "https://www.whatstask.com/geoanalyzer",
      },
    ],
  }

  return (
    <>
      <PageLoader />

      <Script
        id="schema-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="relative min-h-screen bg-white text-slate-900 overflow-hidden">
        {/* Grainient Background - Hero Section */}
        <div className="fixed inset-0 overflow-hidden z-0 h-screen">
          <Grainient
            color1="#0EA5E9"
            color2="#0284C7"
            color3="#7DD3FC"
            grainAmount={0.06}
            grainAnimated={true}
            timeSpeed={0.2}
            warpStrength={1.0}
            warpFrequency={4.0}
            warpSpeed={0.8}
            warpAmplitude={35.0}
            rotationAmount={400.0}
            contrast={1.3}
            saturation={1.2}
            className="opacity-50"
          />
        </div>

        {/* Header - Transparent on hero */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled
              ? "backdrop-blur-md bg-white/90 border-b border-slate-200/50 shadow-sm"
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/logo-black.png" alt="Whatstask Logo" width={32} height={32} className="w-8 h-8" />
                <span className="text-xl font-bold text-slate-900">Whatstask</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link
                  href="/project-management"
                  className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                    scrolled
                      ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                      : "text-slate-700 hover:text-slate-900 hover:bg-white/40"
                  }`}
                >
                  Project Management
                </Link>
                <Link
                  href="/geoanalyzer"
                  className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                    scrolled
                      ? "text-sky-600 bg-sky-50"
                      : "text-sky-700 bg-white/40"
                  }`}
                >
                  GEO Analyzer
                </Link>
                <Link
                  href="/tools"
                  className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                    scrolled
                      ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                      : "text-slate-700 hover:text-slate-900 hover:bg-white/40"
                  }`}
                >
                  Free Tools
                </Link>
                <Link
                  href="/pricing"
                  className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                    scrolled
                      ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                      : "text-slate-700 hover:text-slate-900 hover:bg-white/40"
                  }`}
                >
                  Pricing
                </Link>
              </nav>
              <Button
                asChild
                className="bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700 rounded-full px-6 shadow-lg shadow-sky-500/25"
              >
                <a href="https://geoanalyzer.whatstask.com" target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-2">
                    Launch App
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </a>
              </Button>
            </div>
          </div>
        </motion.header>

        <main>
          {/* Hero Section */}
          <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 px-4">
            <div className="container mx-auto max-w-5xl relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-sky-200/50 rounded-full px-4 py-2 mb-8"
                >
                  <Sparkles className="w-4 h-4 text-sky-500" />
                  <span className="text-sm font-medium text-slate-700">Free AI Search Optimization Tool</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1]">
                  <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    GEO Analyzer
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-4 leading-relaxed font-light">
                  Optimize your content for AI-powered search engines
                </p>

                <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">
                  Get cited by{" "}
                  <span className="text-sky-600 font-medium">ChatGPT</span>,{" "}
                  <span className="text-sky-600 font-medium">Google SGE</span>,{" "}
                  <span className="text-sky-600 font-medium">Perplexity</span>, and more.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-8 mb-12">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="text-center bg-white/50 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/60"
                    >
                      <div className="text-3xl md:text-4xl font-black text-sky-600">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700 rounded-full px-8 py-6 text-lg font-semibold shadow-xl shadow-sky-500/30"
                  >
                    <a href="https://geoanalyzer.whatstask.com" target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center gap-2">
                        Start Analyzing Free
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-white/60 backdrop-blur-sm border-slate-300 text-slate-700 hover:bg-white/80 rounded-full px-8 py-6 text-lg"
                  >
                    <a href="#features">
                      <span className="flex items-center gap-2">
                        Learn More
                        <Search className="w-5 h-5" />
                      </span>
                    </a>
                  </Button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="flex flex-col items-center gap-2 text-slate-500"
                >
                  <span className="text-sm">Discover the future of SEO</span>
                  <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* What is GEO Section */}
          <section className="relative py-24 md:py-32 px-4 bg-white border-t border-slate-100">
            <div className="container mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  What is <span className="text-sky-500">Generative Engine Optimization</span>?
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                  GEO is the next evolution of SEO. As AI systems like ChatGPT, Google SGE, and Perplexity become
                  primary search interfaces, traditional SEO isn't enough. GEO optimizes your content to be
                  understood, cited, and surfaced by AI-powered search engines.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-sky-100"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <span className="text-red-500">Traditional SEO</span>
                    </h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start gap-3">
                        <span className="text-red-400 mt-1 text-lg">×</span>
                        Focuses on keywords and backlinks
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400 mt-1 text-lg">×</span>
                        Optimizes for SERP rankings
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400 mt-1 text-lg">×</span>
                        Click-through dependent
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400 mt-1 text-lg">×</span>
                        May not be understood by AI
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <span className="text-sky-500">GEO Optimization</span>
                    </h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start gap-3">
                        <span className="text-sky-500 mt-0.5 text-lg">✓</span>
                        Optimizes for AI comprehension
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-sky-500 mt-0.5 text-lg">✓</span>
                        Gets cited in AI responses
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-sky-500 mt-0.5 text-lg">✓</span>
                        Direct traffic from AI search
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-sky-500 mt-0.5 text-lg">✓</span>
                        Future-proof strategy
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="relative py-24 md:py-32 px-4 bg-slate-50 border-t border-slate-100">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  Powerful Features for <span className="text-sky-500">AI Search Success</span>
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Everything you need to optimize your content for the new era of AI-powered search.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-sky-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-slate-600 font-light leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-sky-50 to-white border-t border-slate-100">
            <div className="container mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  Why Optimize for <span className="text-sky-500">AI Search</span>?
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-white rounded-xl p-5 border border-slate-200 hover:border-sky-200 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-sky-600 font-bold">✓</span>
                    </div>
                    <span className="text-lg text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mt-12"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700 rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-sky-500/25"
                >
                  <a href="https://geoanalyzer.whatstask.com" target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center gap-2">
                      Try GEO Analyzer Free
                      <ExternalLink className="w-5 h-5" />
                    </span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="relative py-24 md:py-32 px-4 bg-white border-t border-slate-100">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  Who Uses <span className="text-sky-500">GEO Analyzer</span>?
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  From individual bloggers to enterprise marketing teams, GEO Analyzer helps everyone succeed in AI search.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:bg-sky-50 hover:border-sky-200 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-slate-600 font-light leading-relaxed">{useCase.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="relative py-24 md:py-32 px-4 bg-slate-50 border-t border-slate-100">
            <div className="container mx-auto max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  Frequently Asked <span className="text-sky-500">Questions</span>
                </h2>
              </motion.div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <AccordionItem
                      value={`faq-${index}`}
                      className="border border-slate-200 rounded-xl px-6 bg-white"
                    >
                      <AccordionTrigger className="text-lg font-semibold py-5 hover:text-sky-500 transition-colors text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 font-light leading-relaxed pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="relative py-24 md:py-32 px-4 bg-white border-t border-slate-100">
            <div className="container mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                    Ready to Dominate AI Search?
                  </h2>
                  <p className="text-xl text-sky-100 max-w-2xl mx-auto mb-8 font-light">
                    Start optimizing your content for ChatGPT, Google SGE, Perplexity, and other AI search engines today. It's free, fast, and powerful.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-sky-600 hover:bg-sky-50 rounded-full px-10 py-7 text-xl font-semibold shadow-xl"
                  >
                    <a href="https://geoanalyzer.whatstask.com" target="_blank" rel="noopener noreferrer">
                      <span className="flex items-center gap-3">
                        Launch GEO Analyzer
                        <ExternalLink className="w-6 h-6" />
                      </span>
                    </a>
                  </Button>
                  <p className="text-sm text-sky-200 mt-4">No signup required. 3 free analyses per day.</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Whatstask Products */}
          <section className="relative py-24 md:py-32 px-4 bg-slate-50 border-t border-slate-100">
            <div className="container mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold mb-4 tracking-tight">More from Whatstask</h2>
                <p className="text-slate-600">Simple tools that scale with you.</p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-violet-300 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold mb-2">Project Management</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Simple project management with free AI. List, Kanban, Calendar, Timeline views.
                  </p>
                  <Link href="/project-management" className="text-violet-500 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-violet-300 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold mb-2">Free PDF Tools</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Merge, compress, split, and convert PDFs online. No signup required.
                  </p>
                  <Link href="/tools" className="text-violet-500 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                    Explore tools <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-violet-300 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold mb-2">Enterprise Solutions</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Custom development, white-label solutions, and B2B integrations.
                  </p>
                  <Link
                    href="/enterprise"
                    className="text-violet-500 font-medium flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Contact us <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="relative border-t border-slate-200 bg-white py-12 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <Image src="/logo-black.png" alt="Whatstask Logo" width={24} height={24} className="w-6 h-6" />
                  <span className="font-bold text-slate-900">Whatstask</span>
                </Link>
                <p className="text-slate-600 font-light text-sm">
                  Simple scales.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Products</h4>
                <ul className="space-y-2 text-sm text-slate-600 font-light">
                  <li>
                    <Link href="/project-management" className="hover:text-slate-900 transition">
                      Project Management
                    </Link>
                  </li>
                  <li>
                    <Link href="/geoanalyzer" className="hover:text-slate-900 transition">
                      GEO Analyzer
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="hover:text-slate-900 transition">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/enterprise" className="hover:text-slate-900 transition">
                      Enterprise
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Free Tools</h4>
                <ul className="space-y-2 text-sm text-slate-600 font-light">
                  <li>
                    <Link href="/tools" className="hover:text-slate-900 transition">
                      All Tools
                    </Link>
                  </li>
                  <li>
                    <Link href="/pdf-merger" className="hover:text-slate-900 transition">
                      PDF Merger
                    </Link>
                  </li>
                  <li>
                    <Link href="/qr-code-generator" className="hover:text-slate-900 transition">
                      QR Generator
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-slate-600 font-light">
                  <li>
                    <Link href="/about" className="hover:text-slate-900 transition">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-slate-900 transition">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-slate-900 transition">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-slate-900 transition">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-200 pt-8 text-center text-slate-500 font-light text-sm">
              <p>&copy; {new Date().getFullYear()} Whatstask. Simple scales.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
