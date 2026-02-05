import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"

export const metadata: Metadata = {
  title: "Privacy Policy | Whatstask",
  description: "Whatstask privacy policy. Learn how we collect, use, and protect your data.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-white text-slate-900">
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

        <main className="container mx-auto px-4 py-12 max-w-3xl">
          <h1 className="text-4xl font-extrabold mb-8">Privacy Policy</h1>
          <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-slate-700 leading-relaxed">
                Whatstask ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you use our
                services, including our project management tools, GEO Analyzer, and free PDF tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-2 mt-4">Information you provide:</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Account information (name, email, Telegram ID)</li>
                <li>Task and project data you create</li>
                <li>Time tracking records</li>
                <li>Communications with us</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 mt-4">Information collected automatically:</h3>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Device information and browser type</li>
                <li>IP address and general location</li>
                <li>Usage data and analytics</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-slate-700 leading-relaxed mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Provide and maintain our services</li>
                <li>Process your tasks and projects</li>
                <li>Send notifications and reminders</li>
                <li>Improve our services and develop new features</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Detect and prevent fraud or abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Sharing</h2>
              <p className="text-slate-700 leading-relaxed">
                We do not sell your personal information. We may share your data with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-4">
                <li>Service providers who assist in operating our services</li>
                <li>Analytics providers (in anonymized form)</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="text-slate-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your data,
                including encryption in transit and at rest, access controls, and regular security assessments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="text-slate-700 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Delete your data</li>
                <li>Export your data</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Cookies</h2>
              <p className="text-slate-700 leading-relaxed">
                We use cookies to improve your experience, analyze usage, and deliver personalized content.
                You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Third-Party Services</h2>
              <p className="text-slate-700 leading-relaxed">
                Our services integrate with Telegram and may use third-party analytics and advertising services
                (Google Analytics, Google AdSense). These services have their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
              <p className="text-slate-700 leading-relaxed">
                Our services are not intended for children under 13. We do not knowingly collect
                information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
              <p className="text-slate-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of significant
                changes by posting the new policy on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
              <p className="text-slate-700 leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:{" "}
                <a href="mailto:charlesaarondavid@gmail.com" className="text-violet-400 hover:underline">
                  charlesaarondavid@gmail.com
                </a>
              </p>
            </section>
          </div>
        </main>

        <footer className="border-t border-slate-100 mt-20 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Whatstask. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
