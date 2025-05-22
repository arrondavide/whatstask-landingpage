export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      companies: {
        Row: {
          id: string
          name: string
          created_at?: string
        }
        Insert: {
          id?: string
          name: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          created_at?: string
        }
      }
      tasks: {
        Row: {
          id: string
          title: string
          description: string
          status: string
          due_date: string
          assigned_to: string
          company_id: string
          created_at?: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          status: string
          due_date: string
          assigned_to: string
          company_id: string
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          status?: string
          due_date?: string
          assigned_to?: string
          company_id?: string
          created_at?: string
        }
      }
      updates: {
        Row: {
          id: string
          task_id: string
          user_id: string
          status: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          task_id: string
          user_id: string
          status: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          task_id?: string
          user_id?: string
          status?: string
          message?: string
          created_at?: string
        }
      }
      users: {
        Row: {
          id: string
          telegram_id: string
          full_name: string
          username: string
          company_id: string
          is_admin: boolean
          created_at?: string
        }
        Insert: {
          id?: string
          telegram_id: string
          full_name: string
          username: string
          company_id: string
          is_admin: boolean
          created_at?: string
        }
        Update: {
          id?: string
          telegram_id?: string
          full_name?: string
          username?: string
          company_id?: string
          is_admin?: boolean
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
