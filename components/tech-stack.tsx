"use client"

import { BadgeCheck } from "lucide-react"

export type StackItem = {
  name: string
  description: string
  tags?: string[]
  role?: "frontend" | "backend" | "tools" | "content"
}

export default function TechStack({
  items = [
    { name: "Astro", description: "Islands + contenido estático rápido.", tags: ["Islands", "MDX"], role: "frontend" },
  ],
}: {
  items?: StackItem[]
}) {
  return (
    <div className="grid gap-4 sm:gap-3 sm:grid-cols-2">
      {items.map((it) => (
        <div
          key={it.name}
          className="rounded-md p-3 ring-1 ring-gray-300/80 bg-white text-gray-700 dark:ring-[#4d4d4d] dark:bg-[#1a1a1a] dark:text-[#cccccc]"
        >
          <div className="mb-1 flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-green-500" />
            <h3 className="text-sm font-bold">{it.name}</h3>
          </div>
          <p className="text-xs text-gray-600 dark:text-[#cccccc]">{it.description}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {it.tags?.map((t) => (
              <span
                key={t}
                className="rounded px-2 py-0.5 text-[10px] text-gray-500 ring-1 ring-gray-300/80 dark:text-[#4d4d4d] dark:ring-[#4d4d4d]"
              >
                {t}
              </span>
            ))}
            {it.role && (
              <span className="rounded px-2 py-0.5 text-[10px] text-gray-500 ring-1 ring-gray-300/80 dark:text-[#4d4d4d] dark:ring-[#4d4d4d]">
                {it.role}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
