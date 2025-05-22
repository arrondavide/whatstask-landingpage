import { NextResponse } from "next/server"
import crypto from "crypto"

// This function validates that the data actually came from Telegram
export async function POST(request: Request) {
  try {
    const { initData } = await request.json()

    // Parse the initData string
    const urlParams = new URLSearchParams(initData)
    const hash = urlParams.get("hash")
    urlParams.delete("hash")

    // Sort the params alphabetically
    const sortedParams: [string, string][] = []
    urlParams.forEach((value, key) => {
      sortedParams.push([key, value])
    })
    sortedParams.sort(([a], [b]) => a.localeCompare(b))

    // Create the data check string
    const dataCheckString = sortedParams.map(([key, value]) => `${key}=${value}`).join("\n")

    // Create the secret key using SHA256
    const BOT_TOKEN = process.env.BOT_TOKEN || ""
    const secretKey = crypto.createHash("sha256").update(BOT_TOKEN).digest()

    // Calculate the HMAC-SHA-256 signature
    const hmac = crypto.createHmac("sha256", secretKey).update(dataCheckString).digest("hex")

    // Compare the calculated signature with the provided hash
    const valid = hmac === hash

    return NextResponse.json({ valid })
  } catch (error) {
    console.error("Error validating Telegram data:", error)
    return NextResponse.json({ valid: false, error: "Invalid data" }, { status: 400 })
  }
}
