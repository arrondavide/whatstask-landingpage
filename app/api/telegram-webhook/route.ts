import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(request: Request) {
  try {
    const update = await request.json()

    // Process the Telegram update
    if (update.message) {
      const { message } = update
      const chatId = message.chat.id
      const text = message.text
      const userId = message.from.id.toString()

      // Handle /start command
      if (text === "/start") {
        // Check if user exists in database
        const { data: existingUser } = await supabase.from("users").select("*").eq("telegram_id", userId).single()

        if (existingUser) {
          // User exists, send welcome back message
          await sendTelegramMessage(chatId, `Welcome back to WhatsTask! Use /mytasks to see your assigned tasks.`)
        } else {
          // Check if there's a pending user with matching username
          if (message.from.username) {
            const { data: pendingUser } = await supabase
              .from("users")
              .select("*")
              .eq("username", message.from.username)
              .like("telegram_id", "pending_%")
              .single()

            if (pendingUser) {
              // Update the pending user with real telegram_id and full_name
              const fullName = `${message.from.first_name} ${message.from.last_name || ""}`.trim()

              await supabase
                .from("users")
                .update({
                  telegram_id: userId,
                  full_name: fullName,
                })
                .eq("id", pendingUser.id)

              await sendTelegramMessage(
                chatId,
                `Welcome to WhatsTask! Your account has been activated. Use /mytasks to see your assigned tasks.`,
              )
              return NextResponse.json({ success: true })
            }
          }

          // New user, ask if admin or employee
          await sendTelegramMessage(chatId, `Welcome to WhatsTask! Are you registering as an admin or an employee?`, {
            reply_markup: {
              inline_keyboard: [
                [
                  { text: "👨‍💼 Admin", callback_data: "register_admin" },
                  { text: "👷 Employee", callback_data: "register_employee" },
                ],
              ],
            },
          })
        }
      }

      // Handle other commands here...
    }

    // Handle callback queries (button clicks)
    if (update.callback_query) {
      const { callback_query } = update
      const data = callback_query.data
      const chatId = callback_query.message.chat.id
      const userId = callback_query.from.id.toString()

      if (data === "register_admin") {
        // Handle admin registration
        await sendTelegramMessage(
          chatId,
          `Great! To register as an admin, you'll need to create a company. What's your company name?`,
        )

        // Store user state
        // In a real app, you would store this in a database
      }

      if (data === "register_employee") {
        // Handle employee registration
        await sendTelegramMessage(
          chatId,
          `To register as an employee, please ask your admin to add you using the /addemployee command. They'll need your Telegram username.`,
        )
      }

      // Handle task status updates
      if (data.startsWith("status_")) {
        const [_, taskId, status] = data.split("_")

        // Get user
        const { data: user } = await supabase.from("users").select("id, company_id").eq("telegram_id", userId).single()

        if (!user) {
          await sendTelegramMessage(chatId, "User not found.")
          return NextResponse.json({ success: false })
        }

        // Verify task exists and belongs to user
        const { data: task } = await supabase.from("tasks").select("*").eq("id", taskId).single()

        if (!task) {
          await sendTelegramMessage(chatId, "Task not found. Please try again or contact your admin.")
          return NextResponse.json({ success: false })
        }

        if (task.assigned_to !== user.id) {
          await sendTelegramMessage(chatId, "You can only update tasks assigned to you.")
          return NextResponse.json({ success: false })
        }

        // Update task status
        await supabase.from("tasks").update({ status }).eq("id", taskId)

        // Add update record
        await supabase.from("updates").insert([
          {
            task_id: taskId,
            user_id: user.id,
            status,
            message: "",
          },
        ])

        // Notify admin about the status change
        const { data: admins } = await supabase
          .from("users")
          .select("telegram_id")
          .eq("company_id", user.company_id)
          .eq("is_admin", true)

        if (admins && admins.length > 0) {
          // Get user's name for the notification message
          const { data: employeeData } = await supabase
            .from("users")
            .select("full_name, username")
            .eq("id", user.id)
            .single()

          const employeeName =
            employeeData?.full_name || (employeeData?.username ? `@${employeeData.username}` : "An employee")

          // Send notification to each admin
          admins.forEach((admin) => {
            if (admin.telegram_id && !admin.telegram_id.startsWith("pending_")) {
              sendTelegramMessage(
                admin.telegram_id,
                `📊 *Status Update*\n\n${employeeName} has marked task "${task.title}" as *${status.replace("_", " ")}*`,
                { parse_mode: "Markdown" },
              )
            }
          })
        }

        // Update the message to show new status
        await sendTelegramMessage(
          chatId,
          `📋 Task Status Updated:\n\n*${task.title}*\n${task.description}\nDue: ${task.due_date}\nStatus: *${status.replace("_", " ")}*\n\n✅ Your update has been sent to admin.`,
          {
            parse_mode: "Markdown",
            reply_markup: {
              inline_keyboard: [
                [
                  { text: "▶️ Start", callback_data: `status_${task.id}_started` },
                  { text: "🏗️ In Progress", callback_data: `status_${task.id}_in_progress` },
                ],
                [
                  { text: "✅ Complete", callback_data: `status_${task.id}_completed` },
                  { text: "🚫 Blocked", callback_data: `status_${task.id}_blocked` },
                ],
              ],
            },
          },
        )
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing Telegram update:", error)
    return NextResponse.json({ success: false, error: "Error processing update" }, { status: 500 })
  }
}

// Helper function to send messages via Telegram Bot API
async function sendTelegramMessage(chatId: string | number, text: string, options = {}) {
  const BOT_TOKEN = process.env.BOT_TOKEN

  if (!BOT_TOKEN) {
    console.error("BOT_TOKEN is not defined")
    return
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        ...options,
      }),
    })

    return await response.json()
  } catch (error) {
    console.error("Error sending Telegram message:", error)
  }
}
