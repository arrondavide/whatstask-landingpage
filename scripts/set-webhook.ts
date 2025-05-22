// This script sets up the webhook for your Telegram bot
// Run it with: npx tsx scripts/set-webhook.ts

import fetch from "node-fetch"
import dotenv from "dotenv"

// Load environment variables
dotenv.config()

const BOT_TOKEN = process.env.BOT_TOKEN
const WEBHOOK_URL = process.env.WEBHOOK_URL || "https://your-app.vercel.app/api/telegram-webhook"

if (!BOT_TOKEN) {
  console.error("BOT_TOKEN is not defined")
  process.exit(1)
}

async function setWebhook() {
  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/setWebhook`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: WEBHOOK_URL,
        allowed_updates: ["message", "callback_query"],
      }),
    })

    const result = await response.json()

    if (result.ok) {
      console.log("Webhook set successfully!")
      console.log(`Webhook URL: ${WEBHOOK_URL}`)
    } else {
      console.error("Failed to set webhook:", result.description)
    }
  } catch (error) {
    console.error("Error setting webhook:", error)
  }
}

// Set the webhook
setWebhook()
