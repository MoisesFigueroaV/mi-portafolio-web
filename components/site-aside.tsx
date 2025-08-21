"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function SiteAside() {
  const { t } = useLanguage()

  return (
    <div className="sticky top-24 space-y-8 text-xs leading-5 text-gray-500 dark:text-[#4d4d4d]">
      <section>
        <h3 className="mb-2 font-bold uppercase tracking-wide text-gray-700 dark:text-[#cccccc]">{t("address")}</h3>
        <p className="whitespace-pre-line">{t("location")}</p>
      </section>

      <section>
        <h3 className="mb-2 font-bold uppercase tracking-wide text-gray-700 dark:text-[#cccccc]">{t("contact")}</h3>
        <ul className="space-y-1">
          <li>
            <a href={`mailto:${t("email")}`} className="underline hover:opacity-80">
              {t("email")}
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3 className="mb-2 font-bold uppercase tracking-wide text-gray-700 dark:text-[#cccccc]">{t("social")}</h3>
        <ul className="space-y-1">
          <li>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="underline hover:opacity-80">
              {t("github_link")}
            </a>
          </li>
          <li>
            <a href="#" className="underline hover:opacity-80">
              {t("twitter_link")}
            </a>
          </li>
        </ul>
      </section>

      <nav aria-label={t("navigation")} id="navigation">
        <h3 className="mb-2 font-bold uppercase tracking-wide text-gray-700 dark:text-[#cccccc]">{t("navigation")}</h3>
        <ul className="space-y-1">
          <li>
            <Link href="/" className="underline hover:opacity-80">
              {t("home")}
            </Link>
          </li>
          <li>
            <a href="#projects" className="underline hover:opacity-80">
              {t("projects")}
            </a>
          </li>
          <li>
            <a href="#blog" className="underline hover:opacity-80">
              {t("blog")}
            </a>
          </li>
          <li>
            <a href="#photos" className="underline hover:opacity-80">
              {t("photos")}
            </a>
          </li>
          <li>
            <a href="#stack" className="underline hover:opacity-80">
              {t("stack")}
            </a>
          </li>
          <li>
            <a href="#contact" className="underline hover:opacity-80">
              {t("contact")}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
