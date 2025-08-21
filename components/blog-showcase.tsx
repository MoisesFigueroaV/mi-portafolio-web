"use client"

import { useViewer } from "@/components/viewer-provider"
import type { Post } from "@/lib/data"

export default function BlogShowcase({ posts = [] as Post[] }) {
  const { openPost } = useViewer()
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {posts.map((p, i) => (
        <button
          key={p.title}
          onClick={() => openPost(p)}
          className={[
            "group w-full p-3 text-left",
            "bg-white transition-all hover:-translate-y-0.5",
            "dark:bg-[#1a1a1a] dark:hover:bg-[#cccccc]",
            "focus-visible:outline-none",
          ].join(" ")}
          style={{ animationDelay: `${60 + i * 40}ms` }}
          aria-label={`Leer post: ${p.title}`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="truncate text-sm font-bold">{p.title}</h3>
              {p.excerpt && <p className="mt-1 line-clamp-2 text-xs text-gray-500 dark:text-[#4d4d4d]">{p.excerpt}</p>}
            </div>
            {p.readingTime && (
              <span className="shrink-0 text-xs text-gray-500 dark:text-[#4d4d4d]">{p.readingTime}</span>
            )}
          </div>
        </button>
      ))}
    </div>
  )
}
