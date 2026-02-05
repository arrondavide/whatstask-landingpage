import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import PageLoader from "@/components/page-loader"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Blog - Productivity Tips & Telegram Guides | Whatstask",
  description:
    "Learn productivity tips, Telegram bot tutorials, and task management strategies. Expert guides on using Telegram for maximum productivity in 2025.",
  keywords:
    "telegram productivity blog, task management tips, telegram bot tutorials, productivity guides, remote work tips",
  openGraph: {
    title: "Blog - Productivity Tips & Telegram Guides | Whatstask",
    description: "Expert guides on Telegram productivity, task management, and workflow optimization.",
    url: "https://www.whatstask.com/blog",
    siteName: "Whatstask",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whatstask Blog - Productivity & Telegram Guides",
    description: "Learn how to master productivity with Telegram bots and task management tips.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/blog",
  },
}

// Blog posts data - will be dynamic in production
const blogPosts = [
  {
    slug: "ultimate-guide-telegram-bots-productivity",
    title: "The Ultimate Guide to Telegram Bots for Productivity",
    excerpt:
      "Discover the best Telegram bots that can transform your productivity in 2025. From task management to automation, learn which bots are worth your time.",
    date: "2025-12-30",
    readTime: "12 min read",
    category: "Guides",
    featured: true,
  },
  {
    slug: "how-to-set-up-task-reminders-telegram",
    title: "How to Set Up Task Reminders in Telegram (Step-by-Step)",
    excerpt:
      "Never miss a deadline again. Learn how to create smart reminders in Telegram using natural language. Complete tutorial with screenshots and examples.",
    date: "2025-12-30",
    readTime: "8 min read",
    category: "Tutorials",
    featured: true,
  },
]

export default function BlogPage() {
  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-white text-slate-900">
        {/* Header */}
        <header className="border-b border-slate-200">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo-black.png" alt="Whatstask Logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-bold">Whatstask</span>
            </Link>
            <Link href="/">
              <Button variant="ghost">Back to Home</Button>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Whatstask Blog</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Productivity tips, Telegram tutorials, and task management strategies to help you work smarter, not
              harder.
            </p>
          </div>

          {/* Featured Posts */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts
                .filter((post) => post.featured)
                .map((post, idx) => (
                  <Link
                    key={idx}
                    href={`/blog/${post.slug}`}
                    className="group bg-slate-50 backdrop-blur-lg rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs px-3 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-violet-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-violet-400 font-medium group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>

          {/* Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {["Guides", "Tutorials", "Productivity", "Case Studies"].map((category, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 backdrop-blur-lg rounded-xl p-6 border border-slate-200 hover:border-slate-300 transition-all cursor-pointer text-center"
                >
                  <h3 className="font-bold">{category}</h3>
                  <p className="text-sm text-slate-600 mt-2">Coming soon</p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-violet-500/10 to-white/5 backdrop-blur-lg rounded-2xl p-12 border border-violet-500/20 text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl text-slate-600 mb-8">
                New productivity tips and Telegram guides delivered weekly. Join our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button asChild className="bg-violet-500 text-white hover:bg-violet-700 rounded-full px-8 py-6">
                  <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                    Follow on Telegram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb Schema */}
        <Script
          id="schema-breadcrumb-blog"
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
                  name: "Blog",
                  item: "https://www.whatstask.com/blog",
                },
              ],
            }),
          }}
        />

        {/* Blog Schema */}
        <Script
          id="schema-blog"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "Whatstask Blog",
              description: "Productivity tips, Telegram tutorials, and task management strategies.",
              url: "https://www.whatstask.com/blog",
              publisher: {
                "@type": "Organization",
                name: "Whatstask",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.whatstask.com/logo-black.png",
                },
              },
            }),
          }}
        />
      </div>
    </>
  )
}
