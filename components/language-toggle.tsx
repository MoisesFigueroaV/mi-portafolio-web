"use client"

import { useEffect, useState } from "react"
import { Globe } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <button
        className="inline-flex h-9 w-9 items-center justify-center rounded border border-gray-300 text-xs hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:border-[#4d4d4d] dark:hover:bg-[#1a1a1a] dark:focus-visible:ring-[#4d4d4d]"
        aria-label="Change language"
        title="Change language"
      >
        <Globe className="h-4 w-4" />
      </button>
    )
  }

  function toggleLanguage() {
    const root = document.documentElement
    root.classList.add("theme-transition")
    window.setTimeout(() => root.classList.remove("theme-transition"), 450)
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="inline-flex h-9 w-9 items-center justify-center rounded border border-gray-300 text-xs hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:border-[#4d4d4d] dark:hover:bg-[#1a1a1a] dark:focus-visible:ring-[#4d4d4d]"
      aria-label={t("change_language")}
      title={t("change_language")}
    >
      <span className="text-xs font-mono font-bold">{language.toUpperCase()}</span>
    </button>
  )
}
