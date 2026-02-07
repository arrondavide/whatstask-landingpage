import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"
import Navigation from "@/components/navigation"
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
      <Navigation variant="solid" />
      <div className="min-h-screen bg-white text-slate-900 pt-16">
        <main className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Blog</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
              Insights & Guides
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
              Productivity tips, Telegram tutorials, and task management strategies.
            </p>
          </section>

          {/* Featured Posts */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Featured</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Latest Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter((post) => post.featured)
                .map((post, idx) => (
                  <Link
                    key={idx}
                    href={`/blog/${post.slug}`}
                    className="group border border-slate-200 rounded-2xl p-8 hover:border-slate-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                      <span className="bg-slate-100 px-3 py-1 rounded-full text-xs font-medium text-slate-600">
                        {post.category}
                      </span>
                      <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="text-sm font-medium text-slate-900">
                      Read Article →
                    </span>
                  </Link>
                ))}
            </div>
          </section>

          {/* Categories */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-600 mb-4">Categories</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Browse by Topic</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {["Guides", "Tutorials", "Productivity", "Case Studies"].map((category, idx) => (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-md transition-all duration-300 text-center"
                >
                  <h3 className="font-semibold text-slate-900">{category}</h3>
                  <p className="text-sm text-slate-400 mt-2">Coming soon</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="border border-slate-200 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Stay Updated</h2>
              <p className="text-slate-500 mb-10 text-lg font-light">
                New productivity tips and Telegram guides delivered weekly.
              </p>
              <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 rounded-lg px-8 py-6">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  Follow on Telegram
                </a>
              </Button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-100 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Whatstask. Simple scales.</p>
          </div>
        </footer>

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
