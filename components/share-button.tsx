"use client"

import { useState } from "react"
import { Share2, Check } from "lucide-react"

export default function ShareButton({ title, url }: { title: string; url?: string }) {
  const [copied, setCopied] = useState(false)

  async function handleShare() {
    const shareUrl = url || window.location.href

    if (navigator.share) {
      try {
        await navigator.share({ title, url: shareUrl })
      } catch (err) {
        // Fallback to copy
        copyToClipboard(shareUrl)
      }
    } else {
      copyToClipboard(shareUrl)
    }
  }

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <button
      onClick={handleShare}
  className="inline-flex items-center gap-2 px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-200 focus-visible:outline-none dark:text-[#cccccc] dark:hover:bg-[#1a1a1a]"
    >
      {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
      {copied ? "Copiado" : "Compartir"}
    </button>
  )
}
