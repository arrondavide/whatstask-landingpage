import { CheckCircle, Clock, AlertCircle, BarChart2, Loader2 } from "lucide-react"
import type { TaskStats as TaskStatsType } from "@/lib/api"

interface StatsProps {
  stats: TaskStatsType
}

export function TaskStats({ stats }: StatsProps) {
  return (
    <div className="grid gap-4 grid-cols-2">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <BarChart2 className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Total Tasks</span>
        </div>
        <p className="text-2xl font-bold">{stats.total}</p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-amber-500" />
          <span className="text-sm font-medium">Pending</span>
        </div>
        <p className="text-2xl font-bold">{stats.pending}</p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 text-blue-500" />
          <span className="text-sm font-medium">In Progress</span>
        </div>
        <p className="text-2xl font-bold">{stats.in_progress}</p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-teal-500" />
          <span className="text-sm font-medium">Completed</span>
        </div>
        <p className="text-2xl font-bold">{stats.completed}</p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-red-500" />
          <span className="text-sm font-medium">Blocked</span>
        </div>
        <p className="text-2xl font-bold">{stats.blocked}</p>
      </div>
    </div>
  )
}
