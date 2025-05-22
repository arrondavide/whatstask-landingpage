"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TaskStats } from "@/components/task-stats"
import { TaskStatusChart } from "@/components/task-status-chart"
import { RecentActivities } from "@/components/recent-activities"
import { getTaskStats, type TaskStats as TaskStatsType, type User } from "@/lib/api"

interface DashboardProps {
  user: User
}

export default function Dashboard({ user }: DashboardProps) {
  const [stats, setStats] = useState<TaskStatsType>({
    total: 0,
    pending: 0,
    in_progress: 0,
    completed: 0,
    blocked: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      setIsLoading(true)
      try {
        const statsData = await getTaskStats(user.company_id, user.id, user.is_admin)
        setStats(statsData)
      } catch (error) {
        console.error("Error fetching stats:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [user])

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Task Overview</CardTitle>
          <CardDescription>
            {user.is_admin ? "Summary of all company tasks" : "Summary of your assigned tasks"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="w-6 h-6 border-2 border-t-2 border-gray-200 rounded-full animate-spin border-t-teal-500"></div>
            </div>
          ) : (
            <TaskStats stats={stats} />
          )}
        </CardContent>
      </Card>

      <Card className="lg:col-span-4">
        <CardHeader>
          <CardTitle>Task Status Distribution</CardTitle>
          <CardDescription>Current status breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="w-6 h-6 border-2 border-t-2 border-gray-200 rounded-full animate-spin border-t-teal-500"></div>
            </div>
          ) : (
            <TaskStatusChart stats={stats} />
          )}
        </CardContent>
      </Card>

      <Card className="md:col-span-2 lg:col-span-7">
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
          <CardDescription>Latest task updates and assignments</CardDescription>
        </CardHeader>
        <CardContent>
          <RecentActivities user={user} />
        </CardContent>
      </Card>
    </div>
  )
}
