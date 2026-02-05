import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import PageLoader from "@/components/page-loader"

export const metadata: Metadata = {
  title: "Terms of Service | Whatstask",
  description: "Whatstask terms of service. The rules and guidelines for using our services.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.whatstask.com/terms",
  },
}

export default function TermsPage() {
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
          <h1 className="text-4xl font-extrabold mb-8">Terms of Service</h1>
          <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-700 leading-relaxed">
                By accessing or using Whatstask services, including our project management tools,
                GEO Analyzer, and free PDF tools, you agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
              <p className="text-slate-700 leading-relaxed">
                Whatstask provides:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-4">
                <li>Project management and task tracking tools</li>
                <li>GEO Analyzer for AI search optimization</li>
                <li>Free PDF tools (merger, compressor, converter, etc.)</li>
                <li>Team collaboration features</li>
                <li>Time tracking capabilities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
              <p className="text-slate-700 leading-relaxed">
                Some features require a Telegram account. You are responsible for maintaining
                the confidentiality of your account and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Acceptable Use</h2>
              <p className="text-slate-700 leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Use our services for any illegal purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Upload malicious content or malware</li>
                <li>Violate the intellectual property rights of others</li>
                <li>Use automated tools to scrape or abuse our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              <p className="text-slate-700 leading-relaxed">
                Whatstask and its original content, features, and functionality are owned by Whatstask
                and are protected by copyright, trademark, and other intellectual property laws.
                You retain ownership of the content you create using our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. User Content</h2>
              <p className="text-slate-700 leading-relaxed">
                You are responsible for the content you create, upload, or share through our services.
                By using our services, you grant us a limited license to process your content as
                necessary to provide the services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Payment and Billing</h2>
              <p className="text-slate-700 leading-relaxed">
                For paid plans, you agree to pay all applicable fees. Prices are subject to change
                with notice. Subscriptions auto-renew unless cancelled. Refunds are handled on a
                case-by-case basis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
              <p className="text-slate-700 leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior
                notice, for conduct that we believe violates these Terms or is harmful to other users,
                us, or third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Disclaimer of Warranties</h2>
              <p className="text-slate-700 leading-relaxed">
                Our services are provided "as is" without warranties of any kind, either express
                or implied. We do not guarantee that our services will be uninterrupted, secure,
                or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
              <p className="text-slate-700 leading-relaxed">
                To the maximum extent permitted by law, Whatstask shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages resulting from
                your use of or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
              <p className="text-slate-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will provide notice of
                significant changes. Your continued use of our services after changes constitutes
                acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
              <p className="text-slate-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws,
                without regard to conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Contact</h2>
              <p className="text-slate-700 leading-relaxed">
                If you have questions about these Terms, please contact us at:{" "}
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
