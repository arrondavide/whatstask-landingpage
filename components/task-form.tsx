"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { CalendarIcon, CheckIcon, PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { createTask, getCompanyEmployees, type User } from "@/lib/api"

interface TaskFormProps {
  user: User
}

export default function TaskForm({ user }: TaskFormProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState<Date | undefined>()
  const [assignee, setAssignee] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [employees, setEmployees] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchEmployees = async () => {
      setIsLoading(true)
      try {
        const employeesData = await getCompanyEmployees(user.company_id)
        setEmployees(employeesData)
      } catch (error) {
        console.error("Error fetching employees:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchEmployees()
  }, [user.company_id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title || !description || !date || !assignee) {
      return
    }

    setIsSubmitting(true)

    try {
      const newTask = {
        title,
        description,
        due_date: format(date, "yyyy-MM-dd"),
        status: "pending",
        assigned_to: assignee,
        company_id: user.company_id,
      }

      const result = await createTask(newTask)

      if (result) {
        setSuccess(true)

        // Reset form after 2 seconds
        setTimeout(() => {
          setTitle("")
          setDescription("")
          setDate(undefined)
          setAssignee("")
          setSuccess(false)
        }, 2000)
      }
    } catch (error) {
      console.error("Error creating task:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Task</CardTitle>
        <CardDescription>Assign tasks to your team members</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Task Title
            </label>
            <Input
              id="title"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <Textarea
              id="description"
              placeholder="Enter task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px]"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Due Date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Assignee</label>
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-t-2 border-gray-200 rounded-full animate-spin border-t-teal-500"></div>
                  <span className="text-sm text-muted-foreground">Loading employees...</span>
                </div>
              ) : (
                <Select value={assignee} onValueChange={setAssignee}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select team member" />
                  </SelectTrigger>
                  <SelectContent>
                    {employees.map((employee) => (
                      <SelectItem key={employee.id} value={employee.id}>
                        {employee.full_name || `@${employee.username}`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting || success || isLoading || !title || !description || !date || !assignee}
          >
            {isSubmitting ? (
              <>Creating Task...</>
            ) : success ? (
              <>
                <CheckIcon className="mr-2 h-4 w-4" /> Task Created
              </>
            ) : (
              <>
                <PlusCircle className="mr-2 h-4 w-4" /> Create Task
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
