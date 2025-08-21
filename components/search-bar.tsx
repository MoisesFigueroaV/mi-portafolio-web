"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import { projects, posts } from "@/lib/data"

type SearchResult = {
  type: "project" | "post"
  title: string
  description?: string
  excerpt?: string
  tags?: string[]
  onClick: () => void
}

export default function SearchBar({ onResultClick }: { onResultClick?: (result: SearchResult) => void }) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const searchResults: SearchResult[] = []
    const lowerQuery = query.toLowerCase()

    // Buscar en proyectos
    projects.forEach((p) => {
      const matches =
        p.title.toLowerCase().includes(lowerQuery) ||
        p.description?.toLowerCase().includes(lowerQuery) ||
        p.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))

      if (matches) {
        searchResults.push({
          type: "project",
          title: p.title,
          description: p.description,
          tags: p.tags,
          onClick: () =>
            onResultClick?.({
              type: "project",
              title: p.title,
              description: p.description,
              tags: p.tags,
              onClick: () => {},
            }),
        })
      }
    })

    // Buscar en posts
    posts.forEach((p) => {
      const matches =
        p.title.toLowerCase().includes(lowerQuery) ||
        p.excerpt?.toLowerCase().includes(lowerQuery) ||
        p.content.toLowerCase().includes(lowerQuery)

      if (matches) {
        searchResults.push({
          type: "post",
          title: p.title,
          excerpt: p.excerpt,
          onClick: () => onResultClick?.({ type: "post", title: p.title, excerpt: p.excerpt, onClick: () => {} }),
        })
      }
    })

    setResults(searchResults.slice(0, 6))
  }, [query, onResultClick])

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-[#4d4d4d]" />
        <input
          type="text"
          placeholder="Buscar proyectos, posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          className="w-full rounded-md border border-gray-300 bg-white pl-10 pr-10 py-2 text-sm focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:border-[#4d4d4d] dark:bg-[#1a1a1a] dark:text-[#cccccc] dark:focus:border-[#cccccc]"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("")
              setResults([])
              setIsOpen(false)
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-[#4d4d4d] dark:hover:text-[#cccccc]"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-md border border-gray-300 bg-white shadow-lg dark:border-[#4d4d4d] dark:bg-[#1a1a1a]">
          {results.map((result, i) => (
            <button
              key={i}
              onClick={() => {
                result.onClick()
                setIsOpen(false)
              }}
              className="w-full px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-[#000000] first:rounded-t-md last:rounded-b-md"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 dark:text-[#4d4d4d]">
                  {result.type === "project" ? "Proyecto" : "Post"}
                </span>
              </div>
              <div className="font-medium text-sm">{result.title}</div>
              {(result.description || result.excerpt) && (
                <div className="text-xs text-gray-500 dark:text-[#4d4d4d] mt-1 line-clamp-1">
                  {result.description || result.excerpt}
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
