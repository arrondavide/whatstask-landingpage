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
      <ol
        className="flex items-center gap-2 text-sm text-slate-600"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {/* Home link */}
        <li
          className="flex items-center gap-2"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link
            href="/"
            itemProp="item"
            className="flex items-center gap-1 hover:text-violet-400 transition-colors"
          >
            <Home className="h-4 w-4" />
            <span itemProp="name" className="sr-only">
              Home
            </span>
          </Link>
          <meta itemProp="position" content="1" />
          <ChevronRight className="h-4 w-4" />
        </li>

        {/* Dynamic breadcrumb items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li
              key={item.href}
              className="flex items-center gap-2"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {isLast ? (
                <>
                  <span className="text-white font-medium" itemProp="name" aria-current="page">
                    {item.label}
                  </span>
                  <meta itemProp="item" content={`https://www.whatstask.com${item.href}`} />
                </>
              ) : (
                <>
                  <Link
                    href={item.href}
                    itemProp="item"
                    className="hover:text-violet-400 transition-colors"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
              <meta itemProp="position" content={String(index + 2)} />
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
