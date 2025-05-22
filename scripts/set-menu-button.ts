// This script sets up the menu button for your Telegram bot
// Run it with: npx tsx scripts/set-menu-button.ts

import fetch from "node-fetch"
import dotenv from "dotenv"

// Load environment variables
dotenv.config()

const BOT_TOKEN = process.env.BOT_TOKEN
const WEBAPP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://your-app.vercel.app"

if (!BOT_TOKEN) {
  console.error("BOT_TOKEN is not defined")
  process.exit(1)
}

async function setMenuButton() {
  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/setChatMenuButton`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        menu_button: {
          type: "web_app",
          text: "Open WhatsTask",
          web_app: {
            url: WEBAPP_URL,
          },
        },
      }),
    })

    const result = await response.json()

    if (result.ok) {
      console.log("Menu button set successfully!")
      console.log(`WebApp URL: ${WEBAPP_URL}`)
    } else {
      console.error("Failed to set menu button:", result.description)
    }
  } catch (error) {
    console.error("Error setting menu button:", error)
  }
}

// Set the menu button
setMenuButton()
