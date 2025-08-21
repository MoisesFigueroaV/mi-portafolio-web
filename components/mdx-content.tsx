"use client"

import type React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github.css"

export default function MdxContent({ children = "" }: { children?: string }) {
  return (
    <div
      className={[
        "prose prose-sm max-w-none",
        "prose-headings:font-bold prose-p:leading-6",
        "prose-code:before:content-[''] prose-code:after:content-['']",
        "prose-a:underline hover:prose-a:opacity-80",
        "text-gray-700 dark:prose-invert dark:text-[#cccccc]",
      ].join(" ")}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          code(props) {
            const { children: codeChildren, className } = props as { children: React.ReactNode; className?: string }
            const isBlock = (className || "").includes("language-")
            if (isBlock) {
              return (
                <pre
                  className={[
                    "my-3 overflow-x-auto rounded-md p-3",
                    "ring-1 ring-gray-300/80 bg-gray-100",
                    "dark:ring-[#4d4d4d] dark:bg-[#1a1a1a]",
                  ].join(" ")}
                >
                  <code className={className}>{codeChildren}</code>
                </pre>
              )
            }
            return (
              <code
                className={[
                  "rounded px-1 py-0.5",
                  "bg-gray-100 ring-1 ring-gray-300/80",
                  "dark:bg-[#1a1a1a] dark:ring-[#4d4d4d]",
                ].join(" ")}
              >
                {codeChildren}
              </code>
            )
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
