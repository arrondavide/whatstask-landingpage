"use client"

import type React from "react"

import { useState } from "react"
import { AtSign, CheckIcon, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { addEmployee, type User } from "@/lib/api"

interface EmployeeFormProps {
  user: User
}

export default function EmployeeForm({ user }: EmployeeFormProps) {
  const [username, setUsername] = useState("")
  const [role, setRole] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!username) {
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      // Remove @ if present
      const cleanUsername = username.replace("@", "")

      const result = await addEmployee(user.company_id, cleanUsername, role)

      if (result) {
        setSuccess(true)

        // Reset form after 2 seconds
        setTimeout(() => {
          setUsername("")
          setRole("")
          setSuccess(false)
        }, 2000)
      } else {
        setError("Failed to add employee. Please try again.")
      }
    } catch (error) {
      console.error("Error adding employee:", error)
      setError("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Team Member</CardTitle>
        <CardDescription>Add employees to your WhatsTask workspace</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <Alert className="bg-teal-50 text-teal-800 border-teal-200">
            <AlertDescription>
              Enter the Telegram username of the employee. They will need to use /start command with the bot to complete
              registration.
            </AlertDescription>
          </Alert>

          {error && (
            <Alert className="bg-red-50 text-red-800 border-red-200">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium">
              Telegram Username
            </label>
            <div className="relative">
              <AtSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="pl-9"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Role</label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="developer">Developer</SelectItem>
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={isSubmitting || success || !username}>
            {isSubmitting ? (
              <>Adding Employee...</>
            ) : success ? (
              <>
                <CheckIcon className="mr-2 h-4 w-4" /> Employee Added
              </>
            ) : (
              <>
                <UserPlus className="mr-2 h-4 w-4" /> Add Employee
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
