"use client"

import { motion } from "framer-motion"

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="p-6">
      <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
      <div className="text-sm text-gray-300 space-y-4">
        <p className="text-gray-400">Effective Date: {currentDate}</p>

        <p className="font-medium text-white text-base">Welcome to Whatstask!</p>

        <p>We care about your privacy. Here's the short version:</p>

        <ul className="list-disc pl-5 space-y-2">
          <li>We do not store, sell, or share your private WhatsApp or Telegram data.</li>
          <li>We only process the information necessary to create and manage your tasks.</li>
          <li>No tracking, no selling your personal information to third parties.</li>
          <li>Your chats are never saved outside your messaging app.</li>
        </ul>

        <p>We use Telegram APIs securely and responsibly.</p>

        <p>By using Whatstask, you agree to this simple, transparent approach.</p>

        <p>Have questions? Reach out at support@whatstask.com.</p>

        <p className="font-medium">Stay productive, stay private. 🚀</p>
      </div>
    </motion.div>
  )
}
