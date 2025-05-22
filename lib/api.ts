import { supabase } from "./supabase"

// Types based on your Supabase schema
export interface User {
  id: string
  telegram_id: string
  full_name: string
  username: string
  company_id: string
  is_admin: boolean
}

export interface Task {
  id: string
  title: string
  description: string
  status: string
  due_date: string
  assigned_to: string
  company_id: string
  users?: {
    full_name: string
    username: string
  }
}

export interface Company {
  id: string
  name: string
}

export interface TaskUpdate {
  id: string
  task_id: string
  user_id: string
  status: string
  message: string
  created_at: string
  user?: {
    full_name: string
    username: string
  }
  task?: {
    title: string
  }
}

export interface TaskStats {
  total: number
  pending: number
  in_progress: number
  completed: number
  blocked: number
}

// API functions
export async function getCurrentUser(telegramId: string): Promise<User | null> {
  try {
    const { data, error } = await supabase.from("users").select("*").eq("telegram_id", telegramId).single()

    if (error) {
      console.error("Error fetching current user:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error fetching current user:", error)
    return null
  }
}

export async function getTasks(companyId: string, userId: string, isAdmin: boolean): Promise<Task[]> {
  try {
    let query = supabase.from("tasks").select("*, users:assigned_to(full_name, username)").eq("company_id", companyId)

    // If not admin, only show tasks assigned to the user
    if (!isAdmin) {
      query = query.eq("assigned_to", userId)
    }

    const { data, error } = await query.order("due_date")

    if (error) {
      console.error("Error fetching tasks:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error fetching tasks:", error)
    return []
  }
}

export async function getTaskStats(companyId: string, userId: string, isAdmin: boolean): Promise<TaskStats> {
  try {
    let query = supabase.from("tasks").select("status").eq("company_id", companyId)

    // If not admin, only count tasks assigned to the user
    if (!isAdmin) {
      query = query.eq("assigned_to", userId)
    }

    const { data, error } = await query

    if (error) {
      console.error("Error fetching task stats:", error)
      return {
        total: 0,
        pending: 0,
        in_progress: 0,
        completed: 0,
        blocked: 0,
      }
    }

    // Calculate stats
    const stats = {
      total: data.length,
      pending: data.filter((task) => task.status === "pending").length,
      in_progress: data.filter((task) => task.status === "in_progress").length,
      completed: data.filter((task) => task.status === "completed").length,
      blocked: data.filter((task) => task.status === "blocked").length,
    }

    return stats
  } catch (error) {
    console.error("Error calculating task stats:", error)
    return {
      total: 0,
      pending: 0,
      in_progress: 0,
      completed: 0,
      blocked: 0,
    }
  }
}

export async function getRecentActivities(companyId: string, limit = 10): Promise<TaskUpdate[]> {
  try {
    const { data, error } = await supabase
      .from("updates")
      .select("*, user:user_id(full_name, username), task:task_id(title)")
      .eq("company_id", companyId)
      .order("created_at", { ascending: false })
      .limit(limit)

    if (error) {
      console.error("Error fetching recent activities:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error fetching recent activities:", error)
    return []
  }
}

export async function createTask(task: Omit<Task, "id">): Promise<Task | null> {
  try {
    const { data, error } = await supabase.from("tasks").insert([task]).select().single()

    if (error) {
      console.error("Error creating task:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error creating task:", error)
    return null
  }
}

export async function updateTaskStatus(taskId: string, userId: string, status: string, message = ""): Promise<boolean> {
  try {
    // First update the task status
    const { error: taskError } = await supabase.from("tasks").update({ status }).eq("id", taskId)

    if (taskError) {
      console.error("Error updating task status:", taskError)
      return false
    }

    // Then add an update record
    const { error: updateError } = await supabase.from("updates").insert([
      {
        task_id: taskId,
        user_id: userId,
        status,
        message,
      },
    ])

    if (updateError) {
      console.error("Error creating update record:", updateError)
      return false
    }

    return true
  } catch (error) {
    console.error("Error updating task status:", error)
    return false
  }
}

export async function getCompanyEmployees(companyId: string): Promise<User[]> {
  try {
    const { data, error } = await supabase.from("users").select("*").eq("company_id", companyId).order("full_name")

    if (error) {
      console.error("Error fetching company employees:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error fetching company employees:", error)
    return []
  }
}

export async function addEmployee(companyId: string, username: string, role = ""): Promise<User | null> {
  try {
    // Check if user already exists
    const { data: existingUser, error: checkError } = await supabase
      .from("users")
      .select("*")
      .eq("username", username)
      .single()

    if (existingUser) {
      console.error("User already exists")
      return null
    }

    // Create employee with temporary values for required fields
    // The employee will update these when they start the bot
    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          username: username,
          telegram_id: `pending_${Date.now()}`, // Temporary value that meets NOT NULL
          full_name: `Pending User`, // Temporary value that meets NOT NULL
          company_id: companyId,
          is_admin: false,
        },
      ])
      .select()
      .single()

    if (error) {
      console.error("Error adding employee:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Error adding employee:", error)
    return null
  }
}
