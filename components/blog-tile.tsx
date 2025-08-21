"use client"

export default function BlogTile({
  title = "Post",
  readingTime = "3 min",
  excerpt = "Resumen del artículo",
  content = "Contenido",
  delay = 0,
  onSelect,
}: {
  title?: string
  readingTime?: string
  excerpt?: string
  content?: string
  delay?: number
  onSelect?: () => void
}) {
  return (
    <button
      onClick={onSelect}
      className={[
  "group w-full p-4 text-left",
        "ring-1 ring-gray-300/80 bg-white transition-all hover:-translate-y-0.5 hover:ring-gray-400",
        "dark:ring-[#4d4d4d] dark:bg-[#1a1a1a] dark:hover:ring-[#cccccc]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:focus-visible:ring-[#4d4d4d]",
      ].join(" ")}
      style={{ animationDelay: `${delay}ms` }}
      aria-label={`Leer post: ${title}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-bold leading-tight">{title}</h3>
          {excerpt && (
            <p className="mt-2 line-clamp-3 text-xs text-gray-500 dark:text-[#4d4d4d] leading-relaxed">{excerpt}</p>
          )}
        </div>
        {readingTime && (
          <span className="shrink-0 text-xs text-gray-500 dark:text-[#4d4d4d] mt-0.5">{readingTime}</span>
        )}
      </div>
    </button>
  )
}
