"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

type BreadcrumbItem = {
  label: string
  href?: string
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-xs text-gray-500 dark:text-[#4d4d4d]">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <ChevronRight className="h-3 w-3" />}
            {item.href ? (
              <Link href={item.href} className="hover:text-gray-700 dark:hover:text-[#cccccc]">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700 dark:text-[#cccccc]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
