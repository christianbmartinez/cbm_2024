import Image from "next/image"
import { formatDate } from "@/lib"
import type { IconProps } from "@/types"

import { formatReadingTime } from "@/lib/helpers"
import { Card, CardContent } from "@/components/ui/card"

function CalendarIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>Calendar Icon</title>
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}

function ClockIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>Clock Icon</title>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

export function PostCard({
  title,
  imgSrc,
  publishedAt,
  readingTime,
  description,
}: {
  title: string
  imgSrc: string
  publishedAt: string
  readingTime: string
  description: string
}) {
  return (
    <Card className="w-full max-w-mdx overflow-hidden rounded-md shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <Image
          src={imgSrc}
          alt="Blog post cover image"
          width={600}
          height={300}
          className="object-cover aspect-[2/1]"
        />
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-gray-50 dark:bg-gray-50 dark:text-gray-900">
          <ClockIcon className="size-4" />
          <span>{formatReadingTime(readingTime)}</span>
        </div>
      </div>
      <CardContent className="space-y-2 p-4">
        <div className="flex items-center gap-2 text-sm text-muted">
          <CalendarIcon className="size-4" />
          <span>{formatDate(publishedAt)}</span>
        </div>
        <h3 className="text-lg text-foreground underline-none">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
