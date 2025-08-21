"use client"

import { useLanguage } from "@/components/language-provider"

export default function SkipLinks() {
  const { t } = useLanguage()

  return (
    <div className="sr-only focus-within:not-sr-only">
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-[60] rounded-md bg-gray-900 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-[#ffffff] dark:text-[#000000]"
      >
        {t("skip_to_content")}
      </a>
      <a
        href="#navigation"
        className="fixed top-4 left-32 z-[60] rounded-md bg-gray-900 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-[#ffffff] dark:text-[#000000]"
      >
        {t("skip_to_navigation")}
      </a>
    </div>
  )
}
