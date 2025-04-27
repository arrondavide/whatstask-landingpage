"use client"

import { motion } from "framer-motion"

export default function PrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="p-6">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-2xl font-bold mb-6 tracking-tight"
      >
        Privacy Policy
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-sm text-gray-300 space-y-4 font-light tracking-wide leading-relaxed"
      >
        <motion.p variants={item} className="text-gray-400">
          Effective Date: {currentDate}
        </motion.p>

        <motion.p variants={item} className="font-medium text-white text-base">
          Welcome to Whatstask!
        </motion.p>

        <motion.p variants={item}>We care about your privacy. Here's the short version:</motion.p>

        <motion.ul variants={container} className="list-disc pl-5 space-y-2">
          <motion.li variants={item}>We do not store, sell, or share your private WhatsApp or Telegram data.</motion.li>
          <motion.li variants={item}>
            We only process the information necessary to create and manage your tasks.
          </motion.li>
          <motion.li variants={item}>No tracking, no selling your personal information to third parties.</motion.li>
          <motion.li variants={item}>Your chats are never saved outside your messaging app.</motion.li>
        </motion.ul>

        <motion.p variants={item}>We use Telegram APIs securely and responsibly.</motion.p>

        <motion.p variants={item}>By using Whatstask, you agree to this simple, transparent approach.</motion.p>

        <motion.p variants={item}>Have questions? Reach out at support@whatstask.com.</motion.p>

        <motion.p variants={item} className="font-medium">
          Stay productive, stay private. 🚀
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
