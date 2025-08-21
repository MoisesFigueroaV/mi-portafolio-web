"use client"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

type Skill = { name: string; note?: string }
type TechCloudProps = { skills?: Skill[] }

export default function TechCloud({
  skills = [
    { name: "React", note: "SPA/SSR" },
    { name: "Next.js", note: "App Router" },
    { name: "Astro", note: "Islands" },
  ],
}: TechCloudProps) {
  return (
    <div className="reveal grid grid-cols-2 gap-2 sm:grid-cols-3" style={{ animationDelay: "60ms" }}>
      {skills.map((s) => (
        <HoverCard key={s.name} openDelay={80} closeDelay={60}>
          <HoverCardTrigger asChild>
            <span
              tabIndex={0}
              className="inline-flex cursor-default select-none items-center justify-center rounded-md px-3 py-1.5 text-xs text-gray-700 ring-1 ring-gray-300/80 transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 dark:text-[#cccccc] dark:ring-[#4d4d4d] dark:hover:bg-[#000000] dark:focus-visible:ring-[#4d4d4d]"
            >
              {s.name}
            </span>
          </HoverCardTrigger>
          <HoverCardContent
            align="start"
            sideOffset={8}
            className="w-56 rounded-md ring-1 ring-gray-300/80 bg-white text-gray-700 dark:ring-[#4d4d4d] dark:bg-[#1a1a1a] dark:text-[#cccccc]"
          >
            <p className="text-xs text-gray-500 dark:text-[#4d4d4d]">{s.note || "Tecnología"}</p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
