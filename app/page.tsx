"use client"

import { useEffect, useState } from "react"
import { initTelegramApp, getUserFromTelegram, validateTelegramWebAppData, hapticFeedback } from "@/lib/telegram"
import { AppProvider } from "./providers"
import Dashboard from "@/components/dashboard"
import TaskList from "@/components/task-list"
import TaskForm from "@/components/task-form"
import EmployeeForm from "@/components/employee-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeModeToggle } from "@/components/theme-mode-toggle"
import Header from "@/components/header"
import { supabase } from "@/lib/supabase"
import type { User } from "@/lib/api"

export default function Home() {
  const [telegramUser, setTelegramUser] = useState<any>(null)
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isValidating, setIsValidating] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Initialize Telegram Web App
    const tg = initTelegramApp()

    const initApp = async () => {
      if (tg) {
        // Get user data from Telegram
        const tgUser = getUserFromTelegram()
        setTelegramUser(tgUser)

        if (tgUser?.id) {
          setIsValidating(true)

          try {
            // Validate the Telegram data
            const isValid = await validateTelegramWebAppData(tg.initData)

            if (!isValid) {
              setError("Invalid Telegram data. Please try again.")
              setIsLoading(false)
              setIsValidating(false)
              return
            }

            // Fetch user data from Supabase
            const { data: userData, error: userError } = await supabase
              .from("users")
              .select("*")
              .eq("telegram_id", tgUser.id.toString())
              .single()

            if (userError) {
              if (userError.code === "PGRST116") {
                // User not found
                setUser(null)
              } else {
                console.error("Error fetching user:", userError)
                setError("Error fetching user data. Please try again.")
              }
            } else {
              setUser(userData)
            }
          } catch (err) {
            console.error("Error during initialization:", err)
            setError("An error occurred. Please try again.")
          } finally {
            setIsLoading(false)
            setIsValidating(false)
          }
        } else {
          setError("Could not get user data from Telegram.")
          setIsLoading(false)
        }
      } else {
        // Not running in Telegram WebApp
        setError("This app must be opened from Telegram.")
        setIsLoading(false)
      }
    }

    initApp()
  }, [])

  if (isLoading || isValidating) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-teal-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p className="text-center mb-6 text-red-500">{error}</p>
        <p className="text-sm text-muted-foreground text-center">Please try again or contact support.</p>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to WhatsTask</h1>
        <p className="text-center mb-6">
          Please start the WhatsTask bot in Telegram and use the /start command to register.
        </p>
        <p className="text-sm text-muted-foreground text-center">
          If you've already registered, please try refreshing the page.
        </p>
      </div>
    )
  }

  return (
    <AppProvider>
      <div className="flex flex-col min-h-screen">
        <Header user={user} />

        <main className="flex-grow container mx-auto px-4 py-6">
          <Tabs defaultValue="dashboard">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="dashboard" onClick={() => hapticFeedback("light")}>
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="tasks" onClick={() => hapticFeedback("light")}>
                Tasks
              </TabsTrigger>
              {user.is_admin && (
                <TabsTrigger value="new-task" onClick={() => hapticFeedback("light")}>
                  New Task
                </TabsTrigger>
              )}
              {user.is_admin && (
                <TabsTrigger value="add-employee" onClick={() => hapticFeedback("light")}>
                  Add Employee
                </TabsTrigger>
              )}
            </TabsList>

            <TabsContent value="dashboard">
              <Dashboard user={user} />
            </TabsContent>

            <TabsContent value="tasks">
              <TaskList user={user} />
            </TabsContent>

            {user.is_admin && (
              <TabsContent value="new-task">
                <TaskForm user={user} />
              </TabsContent>
            )}

            {user.is_admin && (
              <TabsContent value="add-employee">
                <EmployeeForm user={user} />
              </TabsContent>
            )}
          </Tabs>
        </main>

        <footer className="py-4 px-6 border-t">
          <div className="container mx-auto flex justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2025 WhatsTask</p>
            <ThemeModeToggle />
          </div>
        </footer>
      </div>
    </AppProvider>
  )
}
