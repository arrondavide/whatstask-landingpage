import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Mail, Globe, Code, Zap, Users, Award } from "lucide-react"
import PageLoader from "@/components/page-loader"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Charles Aaron David - Founder of Whatstask | AI Engineer & Entrepreneur",
  description:
    "Meet Charles Aaron David, founder of Whatstask. AI engineer, entrepreneur, and innovator who built 150+ applications serving 10M+ users. Expertise in AI, Telegram Mini Apps, and Web3.",
  keywords:
    "charles aaron david, charles david, charles aaron, whatstask founder, ai engineer dubai, telegram mini app developer, ai entrepreneur, web3 developer, charles david ai engineer",
  openGraph: {
    title: "Charles Aaron David - Founder of Whatstask",
    description: "AI engineer and entrepreneur who built Whatstask, serving thousands of users worldwide.",
    url: "https://www.whatstask.com/founder",
    siteName: "Whatstask",
    type: "profile",
    images: [
      {
        url: "https://www.whatstask.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Charles Aaron David - Whatstask Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charles Aaron David - Founder of Whatstask",
    description: "AI engineer who built 150+ apps serving 10M+ users. Creator of Whatstask.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/founder",
  },
}

export default function FounderPage() {
  const achievements = [
    {
      icon: <Code className="h-8 w-8 text-violet-500" />,
      number: "150+",
      label: "Applications Built",
      description: "Created diverse AI and Web3 solutions",
    },
    {
      icon: <Users className="h-8 w-8 text-violet-500" />,
      number: "10M+",
      label: "Users Served",
      description: "Global reach across multiple platforms",
    },
    {
      icon: <Zap className="h-8 w-8 text-violet-500" />,
      number: "5+",
      label: "Years Experience",
      description: "In AI and software engineering",
    },
    {
      icon: <Award className="h-8 w-8 text-violet-500" />,
      number: "Multiple",
      label: "Successful Products",
      description: "From concept to thousands of users",
    },
  ]

  const journey = [
    {
      year: "Early Career",
      title: "Building Foundation",
      description:
        "Started journey in software engineering, building applications and learning cutting-edge technologies. Developed passion for creating user-centric solutions.",
    },
    {
      year: "2020-2023",
      title: "Scaling Impact",
      description:
        "Built 150+ applications serving over 10 million users globally. Specialized in AI systems, Web3 technologies, and decentralized applications. Worked on medical AI solutions and RWA tokenization.",
    },
    {
      year: "2024",
      title: "Creating Whatstask",
      description:
        "Identified the need for a powerful work management platform inside Telegram. Built Whatstask as a full-featured Mini App with task management, time tracking, and team collaboration.",
    },
    {
      year: "2025",
      title: "Growing Community",
      description:
        "Whatstask now serves thousands of users worldwide, helping teams and freelancers manage their work efficiently without leaving Telegram. Continuously expanding features based on user feedback.",
    },
  ]

  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-white text-slate-900">
        {/* Header */}
        <header className="border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Image src="/logo-black.png" alt="Whatstask" width={40} height={40} className="rounded-lg" />
                <span className="text-xl font-bold text-slate-900">Whatstask</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/features" className="text-slate-600 hover:text-violet-500 transition-colors">
                  Features
                </Link>
                <Link href="/how-it-works" className="text-slate-600 hover:text-violet-500 transition-colors">
                  How It Works
                </Link>
                <Link href="/blog" className="text-slate-600 hover:text-violet-500 transition-colors">
                  Blog
                </Link>
                <Button asChild className="bg-violet-500 hover:bg-violet-600 text-white rounded-full">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    Launch Mini App
                  </a>
                </Button>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
                Charles Aaron David
              </h1>
              <p className="text-2xl lg:text-3xl text-slate-600 mb-6">
                Founder & Creator of Whatstask
              </p>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                AI engineer and entrepreneur building tools that empower teams to work smarter. Creator of 150+
                applications serving over 10 million users worldwide.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-16">
              <a
                href="https://charlesaarondavid.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 hover:bg-slate-200 rounded-full border border-slate-200 transition-colors"
                aria-label="Website"
              >
                <Globe className="h-6 w-6 text-slate-700" />
              </a>
              <a
                href="https://linkedin.com/in/charlesaarondavid"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 hover:bg-slate-200 rounded-full border border-slate-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-slate-700" />
              </a>
              <a
                href="https://twitter.com/charlesaarond"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 hover:bg-slate-200 rounded-full border border-slate-200 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6 text-slate-700" />
              </a>
            </div>

            {/* Achievements Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-slate-200 text-center hover:border-violet-500/50 hover:shadow-lg transition-all"
                >
                  <div className="flex justify-center mb-4">{achievement.icon}</div>
                  <div className="text-4xl font-bold mb-2 text-slate-900">{achievement.number}</div>
                  <div className="text-lg font-semibold mb-2 text-slate-800">{achievement.label}</div>
                  <div className="text-sm text-slate-500">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto px-4 py-20 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-slate-900">About Charles</h2>
            <div className="bg-slate-50 rounded-2xl p-8 lg:p-12 border border-slate-200 mb-12">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Charles Aaron David is an AI engineer, entrepreneur, and the founder of{" "}
                <strong className="text-violet-500">Whatstask</strong> - a comprehensive work management platform built as
                a Telegram Mini App. With a passion for creating user-centric solutions, Charles has built over 150
                applications that collectively serve more than 10 million users worldwide.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                His expertise spans artificial intelligence, large language models, Telegram Mini App development,
                Web3 technologies, and full-stack engineering. Charles specializes in building sophisticated systems
                that solve real-world problems at scale.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Before founding Whatstask, Charles worked on diverse projects including medical AI solutions with
                retrieval-augmented generation systems, blockchain-based applications, gaming platforms, and AI
                automation tools. His experience ranges from autonomous AI agents to voice emotion analysis systems.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Charles created Whatstask to address a critical need: empowering teams and freelancers to manage
                tasks, track time, and collaborate efficiently - all within Telegram, where they already communicate.
                The result is a full-featured Mini App that eliminates app-switching and brings powerful work
                management capabilities directly into users' daily workflow.
              </p>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="container mx-auto px-4 py-20 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">The Journey</h2>
            <div className="space-y-8">
              {journey.map((milestone, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-violet-500/50 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-violet-500 text-white font-bold px-4 py-2 rounded-full text-sm whitespace-nowrap">
                      {milestone.year}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-slate-900">{milestone.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="container mx-auto px-4 py-20 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-slate-900">Vision for Whatstask</h2>
            <div className="bg-gradient-to-br from-violet-500/10 to-blue-500/10 rounded-2xl p-8 lg:p-12 border border-violet-200">
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                "I built Whatstask because I believe work management should be effortless. Teams shouldn't need to
                juggle multiple apps, pay for expensive tools, or waste time switching contexts. Everything you need -
                tasks, time tracking, team collaboration - should be right where you already communicate."
              </p>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                "Telegram Mini Apps unlock incredible potential. With Whatstask, I'm proving that you can build
                enterprise-grade work management tools that are as easy to use as sending a message, yet powerful
                enough for serious teams and businesses."
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                "My goal is to help 100,000+ teams worldwide work smarter, faster, and more efficiently - all within
                an app they already love."
              </p>
              <div className="text-right mt-6">
                <p className="text-lg font-semibold text-violet-600">- Charles Aaron David</p>
                <p className="text-sm text-slate-500">Founder, Whatstask</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 border-t border-slate-100">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-violet-500/10 to-violet-400/5 rounded-2xl p-12 border border-violet-200">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Experience What Charles Built</h2>
            <p className="text-xl text-slate-600 mb-8">
              Try Whatstask and see how powerful work management can be when it's built right into Telegram.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-violet-500 text-white hover:bg-violet-600 rounded-full px-8 py-6 text-lg">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  Launch Whatstask Mini App
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 text-lg border-slate-300 text-slate-700 hover:bg-slate-50">
                <Link href="/features">Explore Features</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-slate-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-slate-600 mb-4">
                Want to learn more about Charles or collaborate?
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://charlesaarondavid.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-600 hover:text-violet-700 transition-colors"
                >
                  Visit Personal Website
                </a>
              </div>
              <p className="text-slate-500 text-sm mt-8">
                © {new Date().getFullYear()} Whatstask. Built with passion by Charles Aaron David.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Person Schema for SEO */}
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Charles Aaron David",
            alternateName: ["Charles David", "Charles Aaron"],
            jobTitle: "Founder & AI Engineer",
            description:
              "AI engineer and entrepreneur, founder of Whatstask. Built 150+ applications serving 10M+ users worldwide. Specializes in AI, Telegram Mini Apps, and Web3 technologies.",
            url: "https://www.whatstask.com/founder",
            sameAs: [
              "https://charlesaarondavid.com",
              "https://linkedin.com/in/charlesaarondavid",
              "https://twitter.com/charlesaarond",
            ],
            worksFor: {
              "@type": "Organization",
              name: "Whatstask",
              url: "https://www.whatstask.com",
            },
            founder: {
              "@type": "Organization",
              name: "Whatstask",
              url: "https://www.whatstask.com",
            },
            knowsAbout: [
              "Artificial Intelligence",
              "Machine Learning",
              "Large Language Models",
              "Telegram Mini Apps",
              "Web3 Technologies",
              "Full-Stack Development",
              "Product Development",
              "Software Engineering",
            ],
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: "Founder - Charles Aaron David",
                item: "https://www.whatstask.com/founder",
              },
            ],
          }),
        }}
      />
    </>
  )
}
