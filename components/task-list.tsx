"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AlertCircle, CheckCircle, Clock, Loader2, MoreVertical, ArrowUpDown, Search } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { getTasks, updateTaskStatus, type Task, type User } from "@/lib/api"

interface TaskListProps {
  user: User
}

export default function TaskList({ user }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortOrder, setSortOrder] = useState("due")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchTasks = async () => {
      setIsLoading(true)
      try {
        const tasksData = await getTasks(user.company_id, user.id, user.is_admin)
        setTasks(tasksData)
      } catch (error) {
        console.error("Error fetching tasks:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTasks()
  }, [user])

  const handleUpdateStatus = async (taskId: string, status: string) => {
    const success = await updateTaskStatus(taskId, user.id, status)
    if (success) {
      // Update the local state
      setTasks((prevTasks) => prevTasks.map((task) => (task.id === taskId ? { ...task, status } : task)))
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-teal-500"
      case "in_progress":
        return "bg-blue-500"
      case "blocked":
        return "bg-red-500"
      default:
        return "bg-amber-500"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4" />
      case "in_progress":
        return <Loader2 className="h-4 w-4" />
      case "blocked":
        return <AlertCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const getStatusBadge = (status: string) => {
    const color = getStatusColor(status).replace("bg-", "")

    return (
      <Badge variant="outline" className={`flex items-center gap-1 border-${color} text-${color}`}>
        {getStatusIcon(status)}
        <span>{status.replace("_", " ")}</span>
      </Badge>
    )
  }

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortOrder === "due") {
      return new Date(a.due_date).getTime() - new Date(b.due_date).getTime()
    } else if (sortOrder === "title") {
      return a.title.localeCompare(b.title)
    } else {
      return a.status.localeCompare(b.status)
    }
  })

  const pendingTasks = sortedTasks.filter((task) => task.status === "pending")
  const inProgressTasks = sortedTasks.filter((task) => task.status === "in_progress")
  const completedTasks = sortedTasks.filter((task) => task.status === "completed")
  const blockedTasks = sortedTasks.filter((task) => task.status === "blocked")

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <div className="w-6 h-6 border-2 border-t-2 border-gray-200 rounded-full animate-spin border-t-teal-500"></div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search tasks..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <ArrowUpDown className="h-4 w-4" />
              Sort
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setSortOrder("due")}>Due Date</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortOrder("title")}>Task Name</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortOrder("status")}>Status</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid grid-cols-5">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="blocked">Blocked</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <ScrollArea className="h-[60vh]">
            <div className="space-y-4 p-1">
              {sortedTasks.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No tasks found</p>
                </div>
              ) : (
                sortedTasks.map((task) => (
                  <TaskCard key={task.id} task={task} isAdmin={user.is_admin} onUpdateStatus={handleUpdateStatus} />
                ))
              )}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="pending">
          <ScrollArea className="h-[60vh]">
            <div className="space-y-4 p-1">
              {pendingTasks.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No pending tasks</p>
                </div>
              ) : (
                pendingTasks.map((task) => (
                  <TaskCard key={task.id} task={task} isAdmin={user.is_admin} onUpdateStatus={handleUpdateStatus} />
                ))
              )}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="progress">
          <ScrollArea className="h-[60vh]">
            <div className="space-y-4 p-1">
              {inProgressTasks.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No tasks in progress</p>
                </div>
              ) : (
                inProgressTasks.map((task) => (
                  <TaskCard key={task.id} task={task} isAdmin={user.is_admin} onUpdateStatus={handleUpdateStatus} />
                ))
              )}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="completed">
          <ScrollArea className="h-[60vh]">
            <div className="space-y-4 p-1">
              {completedTasks.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No completed tasks</p>
                </div>
              ) : (
                completedTasks.map((task) => (
                  <TaskCard key={task.id} task={task} isAdmin={user.is_admin} onUpdateStatus={handleUpdateStatus} />
                ))
              )}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="blocked">
          <ScrollArea className="h-[60vh]">
            <div className="space-y-4 p-1">
              {blockedTasks.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No blocked tasks</p>
                </div>
              ) : (
                blockedTasks.map((task) => (
                  <TaskCard key={task.id} task={task} isAdmin={user.is_admin} onUpdateStatus={handleUpdateStatus} />
                ))
              )}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface TaskCardProps {
  task: Task
  isAdmin: boolean
  onUpdateStatus: (taskId: string, status: string) => void
}

function TaskCard({ task, isAdmin, onUpdateStatus }: TaskCardProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-teal-500"
      case "in_progress":
        return "bg-blue-500"
      case "blocked":
        return "bg-red-500"
      default:
        return "bg-amber-500"
    }
  }

  const getInitials = (name: string) => {
    if (!name) return "?"
    return name
      .split(" ")
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{task.title}</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onUpdateStatus(task.id, "pending")}>Mark as Pending</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onUpdateStatus(task.id, "in_progress")}>
                Mark as In Progress
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onUpdateStatus(task.id, "completed")}>
                Mark as Completed
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onUpdateStatus(task.id, "blocked")}>Mark as Blocked</DropdownMenuItem>
              {isAdmin && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Edit Task</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-500">Delete Task</DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${getStatusColor(task.status)}`}></div>
            <span className="text-xs font-medium">{task.status.replace("_", " ")}</span>
          </div>
          <div className="text-xs">Due: {formatDate(task.due_date)}</div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex justify-between">
        {task.users && (
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt={task.users.full_name || task.users.username}
              />
              <AvatarFallback>{getInitials(task.users.full_name || task.users.username)}</AvatarFallback>
            </Avatar>
            <span className="text-xs">{task.users.full_name || `@${task.users.username}`}</span>
          </div>
        )}
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                Update
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onUpdateStatus(task.id, "pending")}>Mark as Pending</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onUpdateStatus(task.id, "in_progress")}>
                Mark as In Progress
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onUpdateStatus(task.id, "completed")}>
                Mark as Completed
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onUpdateStatus(task.id, "blocked")}>Mark as Blocked</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardFooter>
    </Card>
  )
}
