"use client"

import { MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

type TimelineItem = {
  year: string
  titleKey: string
  companyKey: string
  locationKey: string
  descriptionKey: string
  current?: boolean
}

export default function Timeline() {
  const { t } = useLanguage()

  const timelineData: TimelineItem[] = [
    {
      year: "2024",
      titleKey: "senior_frontend",
      companyKey: "tech_startup",
      locationKey: "remote",
      descriptionKey: "senior_description",
      current: true,
    },
    {
      year: "2022",
      titleKey: "frontend_dev",
      companyKey: "digital_agency",
      locationKey: "city",
      descriptionKey: "frontend_description",
    },
    {
      year: "2020",
      titleKey: "ui_designer",
      companyKey: "freelance",
      locationKey: "remote",
      descriptionKey: "designer_description",
    },
  ]

  return (
    <div className="space-y-8">
      {timelineData.map((item, i) => (
        <div key={i} className="relative flex gap-6">
          {/* Timeline line */}
          <div className="flex flex-col items-center">
            <div
              className={`w-3 h-3 ${item.current ? "bg-gray-900 dark:bg-[#ffffff]" : "bg-gray-400 dark:bg-[#4d4d4d]"}`}
            />
            {i < timelineData.length - 1 && <div className="w-px h-16 bg-gray-300 dark:bg-[#4d4d4d] mt-2" />}
          </div>

          {/* Content */}
          <div className="flex-1 pb-8">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-gray-500 dark:text-[#4d4d4d]">{item.year}</span>
              {item.current && (
                <span className="text-xs bg-gray-900 text-white dark:bg-[#ffffff] dark:text-[#000000] px-2 py-0.5">
                  {t("current")}
                </span>
              )}
            </div>
            <h3 className="font-bold text-sm">{t(item.titleKey as any)}</h3>
            <p className="text-sm text-gray-600 dark:text-[#cccccc]">{t(item.companyKey as any)}</p>
            <div className="flex items-center gap-1 mt-1 text-xs text-gray-500 dark:text-[#4d4d4d]">
              <MapPin className="h-3 w-3" />
              {t(item.locationKey as any)}
            </div>
            <p className="text-sm text-gray-600 dark:text-[#cccccc] mt-2">{t(item.descriptionKey as any)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
