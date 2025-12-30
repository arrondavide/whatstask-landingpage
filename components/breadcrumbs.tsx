"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-gray-400">
        {/* Home link */}
        <li className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-teal-400 transition-colors"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
          <ChevronRight className="h-4 w-4" />
        </li>

        {/* Dynamic breadcrumb items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span className="text-white font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
