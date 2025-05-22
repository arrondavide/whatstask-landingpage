// Telegram Web App integration utilities

// Type definitions for Telegram WebApp
interface TelegramUser {
  id: number
  first_name: string
  last_name?: string
  username?: string
  language_code?: string
  is_premium?: boolean
}

interface TelegramWebApp {
  initData: string
  initDataUnsafe: {
    query_id?: string
    user?: TelegramUser
    auth_date?: number
    hash?: string
  }
  version: string
  platform: string
  colorScheme: "light" | "dark"
  themeParams: Record<string, string>
  isExpanded: boolean
  viewportHeight: number
  viewportStableHeight: number
  headerColor: string
  backgroundColor: string
  ready: () => void
  expand: () => void
  close: () => void
  showAlert: (message: string, callback?: () => void) => void
  showConfirm: (message: string, callback: (confirmed: boolean) => void) => void
  showPopup: (params: any, callback: (buttonId: string) => void) => void
  enableClosingConfirmation: () => void
  disableClosingConfirmation: () => void
  setHeaderColor: (color: string) => void
  setBackgroundColor: (color: string) => void
  MainButton: {
    text: string
    color: string
    textColor: string
    isVisible: boolean
    isActive: boolean
    isProgressVisible: boolean
    setText: (text: string) => void
    onClick: (callback: () => void) => void
    show: () => void
    hide: () => void
    enable: () => void
    disable: () => void
    showProgress: (leaveActive: boolean) => void
    hideProgress: () => void
  }
  BackButton: {
    isVisible: boolean
    onClick: (callback: () => void) => void
    show: () => void
    hide: () => void
  }
  HapticFeedback: {
    impactOccurred: (style: "light" | "medium" | "heavy" | "rigid" | "soft") => void
    notificationOccurred: (type: "error" | "success" | "warning") => void
    selectionChanged: () => void
  }
}

// Extend Window interface to include Telegram WebApp
declare global {
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp
    }
  }
}

// Get the Telegram WebApp instance
export const telegram = typeof window !== "undefined" ? window.Telegram?.WebApp : null

// Initialize the Telegram WebApp
export function initTelegramApp() {
  if (!telegram) return null

  // Expand the Web App to full height
  telegram.expand()

  // Set theme colors based on Telegram theme
  document.documentElement.classList.toggle("dark", telegram.colorScheme === "dark")

  return telegram
}

// Get user data from Telegram
export function getUserFromTelegram() {
  if (!telegram) return null
  return telegram.initDataUnsafe?.user || null
}

// Show an alert using Telegram's native UI
export function showAlert(message: string, callback?: () => void) {
  if (!telegram) return
  telegram.showAlert(message, callback)
}

// Show a confirmation dialog using Telegram's native UI
export function showConfirm(message: string, callback: (confirmed: boolean) => void) {
  if (!telegram) return
  telegram.showConfirm(message, callback)
}

// Close the WebApp
export function closeApp() {
  if (!telegram) return
  telegram.close()
}

// Trigger haptic feedback
export function hapticFeedback(type: "success" | "error" | "warning" | "light" | "medium" | "heavy" | "selection") {
  if (!telegram || !telegram.HapticFeedback) return

  if (type === "success" || type === "error" || type === "warning") {
    telegram.HapticFeedback.notificationOccurred(type)
  } else if (type === "selection") {
    telegram.HapticFeedback.selectionChanged()
  } else {
    telegram.HapticFeedback.impactOccurred(type as any)
  }
}

// Show the main button
export function showMainButton(text: string, callback: () => void) {
  if (!telegram || !telegram.MainButton) return

  telegram.MainButton.setText(text)
  telegram.MainButton.onClick(callback)
  telegram.MainButton.show()
}

// Hide the main button
export function hideMainButton() {
  if (!telegram || !telegram.MainButton) return
  telegram.MainButton.hide()
}

// Validate Telegram WebApp data
export async function validateTelegramWebAppData(initData: string): Promise<boolean> {
  try {
    // In a real app, you would send this to your backend for validation
    const response = await fetch("/api/validate-telegram-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ initData }),
    })

    const result = await response.json()
    return result.valid
  } catch (error) {
    console.error("Error validating Telegram data:", error)
    return false
  }
}
