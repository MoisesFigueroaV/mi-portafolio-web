"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function MobileNav() {
  const { t } = useLanguage()

  return (
    <nav aria-label="Navegación móvil" className="mb-8 -mt-2">
      <div className="flex flex-wrap gap-2 text-xs">
        <Link
          href="/"
          className="px-2 py-1 text-gray-600 hover:text-gray-900 hover:bg-gray-200 active:bg-gray-300 dark:text-[#cccccc] dark:hover:text-[#ffffff] dark:hover:bg-[#1a1a1a] dark:active:bg-[#000000] transition-colors"
        >
          {t("home")}
        </Link>
        <span className="text-gray-400 dark:text-[#4d4d4d]">/</span>
        <Link
          href="/projects"
          className="px-2 py-1 text-gray-600 hover:text-gray-900 hover:bg-gray-200 active:bg-gray-300 dark:text-[#cccccc] dark:hover:text-[#ffffff] dark:hover:bg-[#1a1a1a] dark:active:bg-[#000000] transition-colors"
        >
          {t("projects")}
        </Link>
        <span className="text-gray-400 dark:text-[#4d4d4d]">/</span>
        <Link
          href="/blog"
          className="px-2 py-1 text-gray-600 hover:text-gray-900 hover:bg-gray-200 active:bg-gray-300 dark:text-[#cccccc] dark:hover:text-[#ffffff] dark:hover:bg-[#1a1a1a] dark:active:bg-[#000000] transition-colors"
        >
          {t("blog")}
        </Link>
        <span className="text-gray-400 dark:text-[#4d4d4d]">/</span>
        <Link
          href="/photos"
          className="px-2 py-1 text-gray-600 hover:text-gray-900 hover:bg-gray-200 active:bg-gray-300 dark:text-[#cccccc] dark:hover:text-[#ffffff] dark:hover:bg-[#1a1a1a] dark:active:bg-[#000000] transition-colors"
        >
          {t("photos")}
        </Link>
      </div>
    </nav>
  )
}
