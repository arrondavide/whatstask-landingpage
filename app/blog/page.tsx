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
      <Navigation variant="dark" />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-16">
        <main className="container mx-auto px-4 py-16 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Blog</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
              Insights & Guides
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
              Productivity tips, Telegram tutorials, and task management strategies.
            </p>
          </section>

          {/* Featured Posts */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Featured</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Latest Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter((post) => post.featured)
                .map((post, idx) => (
                  <Link
                    key={idx}
                    href={`/blog/${post.slug}`}
                    className="group border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4 text-sm text-neutral-400">
                      <span className="bg-white/5 px-3 py-1 rounded-full text-xs font-medium text-neutral-300">
                        {post.category}
                      </span>
                      <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neutral-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="text-sm font-medium text-white">
                      Read Article →
                    </span>
                  </Link>
                ))}
            </div>
          </section>

          {/* Categories */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-violet-400 mb-4">Categories</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Browse by Topic</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {["Guides", "Tutorials", "Productivity", "Case Studies"].map((category, idx) => (
                <div
                  key={idx}
                  className="border border-white/10 rounded-xl p-6 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 text-center"
                >
                  <h3 className="font-semibold text-white">{category}</h3>
                  <p className="text-sm text-neutral-400 mt-2">Coming soon</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="border border-white/10 rounded-2xl p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-neutral-400 mb-10 text-lg font-light">
                New productivity tips and Telegram guides delivered weekly.
              </p>
              <Button asChild className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6">
                <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                  Follow on Telegram
                </a>
              </Button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-neutral-400">
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
