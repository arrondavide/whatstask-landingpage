"use client"

import { useEffect, useRef } from "react"
import type { TaskStats } from "@/lib/api"

interface TaskStatusChartProps {
  stats: TaskStats
}

export function TaskStatusChart({ stats }: TaskStatusChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const drawChart = () => {
      if (!canvasRef.current) return

      const ctx = canvasRef.current.getContext("2d")
      if (!ctx) return

      // Simple canvas drawing to create a pie chart
      const centerX = canvasRef.current.width / 2
      const centerY = canvasRef.current.height / 2
      const radius = Math.min(centerX, centerY) - 10

      const total = stats.pending + stats.in_progress + stats.completed + stats.blocked
      if (total === 0) return

      const colors = ["#f59e0b", "#3b82f6", "#10b981", "#ef4444"]
      const data = [stats.pending / total, stats.in_progress / total, stats.completed / total, stats.blocked / total]

      let startAngle = 0

      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

      data.forEach((slice, i) => {
        const endAngle = startAngle + slice * 2 * Math.PI

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.arc(centerX, centerY, radius, startAngle, endAngle)
        ctx.fillStyle = colors[i]
        ctx.fill()

        startAngle = endAngle
      })

      // Draw center circle for donut chart
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI)
      ctx.fillStyle = "white"
      ctx.fill()

      // Draw text in center
      ctx.fillStyle = "#000000"
      ctx.font = "bold 14px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(`${total} Tasks`, centerX, centerY)
    }

    drawChart()
  }, [stats]) // Ensure we only depend on stats

  return (
    <div className="flex flex-col items-center">
      <canvas ref={canvasRef} width={200} height={200} className="max-w-full" />
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <span className="text-sm">Pending ({stats.pending})</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-sm">In Progress ({stats.in_progress})</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-teal-500"></div>
          <span className="text-sm">Completed ({stats.completed})</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="text-sm">Blocked ({stats.blocked})</span>
        </div>
      </div>
    </div>
  )
}
