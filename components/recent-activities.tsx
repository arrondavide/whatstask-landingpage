"use client"

import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle, Clock, AlertCircle, Loader2 } from "lucide-react"
import { getRecentActivities, type TaskUpdate, type User } from "@/lib/api"

interface RecentActivitiesProps {
  user: User
}

export function RecentActivities({ user }: RecentActivitiesProps) {
  const [activities, setActivities] = useState<TaskUpdate[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchActivities = async () => {
      setIsLoading(true)
      try {
        const activitiesData = await getRecentActivities(user.company_id)
        setActivities(activitiesData)
      } catch (error) {
        console.error("Error fetching activities:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchActivities()
  }, [user.company_id])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-teal-500" />
      case "in_progress":
        return <Loader2 className="h-4 w-4 text-blue-500" />
      case "blocked":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-amber-500" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "completed"
      case "in_progress":
        return "in progress"
      case "blocked":
        return "blocked"
      default:
        return "pending"
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <div className="w-6 h-6 border-2 border-t-2 border-gray-200 rounded-full animate-spin border-t-teal-500"></div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {activities.length === 0 ? (
        <p className="text-center text-muted-foreground py-4">No recent activities</p>
      ) : (
        activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4 py-2 border-b last:border-0">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt={activity.user?.full_name || ""} />
              <AvatarFallback>{getInitials(activity.user?.full_name || "")}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">
                <span className="font-semibold">{activity.user?.full_name || activity.user?.username}</span> marked{" "}
                <span className="font-medium">"{activity.task?.title}"</span> as{" "}
                <span className="inline-flex items-center gap-1">
                  {getStatusIcon(activity.status)}
                  {getStatusText(activity.status)}
                </span>
              </p>
              <p className="text-xs text-muted-foreground">{new Date(activity.created_at).toLocaleString()}</p>
              {activity.message && <p className="text-xs mt-1 p-2 bg-muted rounded-md">{activity.message}</p>}
            </div>
          </div>
        ))
      )}
    </div>
  )
}
