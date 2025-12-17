import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"

export const metadata: Metadata = {
  title: "About Whatstask – Our Mission & Vision | Tasks Made Simple",
  description:
    "Learn about Whatstask's mission to create intuitive task management tools that remove friction from workflows. Rock-solid security, open accessibility, no complexity.",
  openGraph: {
    title: "About Whatstask – Our Mission & Vision",
    description: "Intuitive task management tools that remove friction from workflows.",
    url: "https://www.whatstask.com/about",
    siteName: "Whatstask",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-brand-black text-white">
        {/* Header */}
        <header className="border-b border-white/10">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Whatstask" className="h-8 w-8" />
              <span className="text-xl font-bold">Whatstask</span>
            </Link>
            <Link href="/">
              <Button variant="ghost">Back to Home</Button>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-20 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8">About Whatstask</h1>

          <div className="space-y-12">
            {/* Mission */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                To create intuitive, friction-free task management tools that integrate seamlessly into existing
                workflows, helping individuals and teams stay organized without cognitive overload.
              </p>
            </section>

            {/* Vision */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                To become the universal hub for task creation—where users can manage to-dos via Telegram bots, web apps,
                and voice commands, all powered by AI that adapts to their unique needs.
              </p>
            </section>

            {/* Values */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Rock-Solid Security</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Your data is protected with end-to-end encryption. We never sell or share personal information.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Open Accessibility</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Core features remain free for everyone. No artificial limitations or paywalls for essential
                    functionality.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">No Complexity</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We reject feature bloat. Every tool is designed to solve one problem exceptionally well.
                  </p>
                </div>
              </div>
            </section>

            {/* Team */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Built by a Small Team</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Whatstask is developed by a lean team passionate about productivity tools. We listen to user feedback
                and ship updates fast. Have suggestions?{" "}
                <a href="mailto:contact@whatstask.com" className="text-white underline">
                  Let us know
                </a>
                .
              </p>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl font-bold mb-4">Ready to Simplify Your Tasks?</h2>
            <Button asChild className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6">
              <a href="https://t.me/whatstaskbot" target="_blank" rel="noopener noreferrer">
                Start on Telegram
              </a>
            </Button>
          </div>
        </main>
      </div>
    </>
  )
}
