import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, Search, FileText, MessageSquare, Sparkles } from "lucide-react"

export default function NotFound() {
  const popularPages = [
    { name: "Features", href: "/features", icon: <Sparkles className="h-5 w-5" /> },
    { name: "Blog", href: "/blog", icon: <FileText className="h-5 w-5" /> },
    { name: "How It Works", href: "/how-it-works", icon: <MessageSquare className="h-5 w-5" /> },
    { name: "Pricing", href: "/pricing", icon: <Sparkles className="h-5 w-5" /> },
  ]

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <Image src="/logo.png" alt="Whatstask Logo" width={48} height={48} className="h-12 w-12" />
            <span className="text-2xl font-bold">Whatstask</span>
          </Link>

          {/* 404 Error */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-extrabold text-teal-500 mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-400 mb-8">
              Oops! The page you're looking for seems to have wandered off. Let's get you back on track.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 py-6">
              <Link href="/">
                <Home className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 rounded-full px-8 py-6">
              <Link href="/blog">
                <Search className="h-5 w-5 mr-2" />
                Browse Blog
              </Link>
            </Button>
          </div>

          {/* Popular Pages */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-lg font-bold mb-6">Popular Pages</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {popularPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-teal-500/50 transition-all group"
                >
                  <div className="text-teal-400 group-hover:scale-110 transition-transform">{page.icon}</div>
                  <span className="font-medium">{page.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Helpful Links */}
          <div className="mt-8 text-sm text-gray-400">
            <p>
              Need help?{" "}
              <a
                href="https://t.me/whatstaskbot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline"
              >
                Chat with our Telegram bot
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
