"use client"

export default function ProjectTile({
  title = "Proyecto",
  subtitle = "Subtítulo",
  image = "/placeholder-otu6i.png",
  tags = ["Tag"],
  description = "Descripción del proyecto.",
  delay = 0,
  onSelect,
  siteUrl,
  repoUrl,
}: {
  title?: string
  subtitle?: string
  image?: string
  tags?: string[]
  description?: string
  delay?: number
  onSelect?: () => void
  siteUrl?: string
  repoUrl?: string
}) {
  return (
    <button
      onClick={onSelect}
      className={[
        "group w-full overflow-hidden rounded-lg text-left",
        "ring-1 ring-gray-300/80 bg-white transition-all",
        "hover:-translate-y-0.5 hover:ring-gray-400",
        "dark:ring-[#4d4d4d] dark:bg-[#1a1a1a] dark:hover:ring-[#cccccc]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:focus-visible:ring-[#4d4d4d]",
      ].join(" ")}
      style={{ animationDelay: `${delay}ms` }}
      aria-label={`Ver proyecto: ${title}`}
    >
      <figure className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-40 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </figure>
      <div className="space-y-1 p-3">
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="text-xs text-gray-500 dark:text-[#4d4d4d]">{subtitle}</p>
        <p className="line-clamp-2 text-xs text-gray-500 dark:text-[#4d4d4d]">{description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {tags?.map((t) => (
            <span
              key={t}
              className="rounded px-2 py-0.5 text-[10px] text-gray-500 ring-1 ring-gray-300/80 dark:text-[#4d4d4d] dark:ring-[#4d4d4d]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}
