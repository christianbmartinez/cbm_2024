import { notFound } from "next/navigation"
import { Mdx, ReadingTimeIcon } from "@/components"
import { baseUrl } from "@/config"
import { formatDate, formatReadingTime, getPosts } from "@/lib"
import type { Params } from "@/types"

import { Badge } from "@/components/ui/badge"

export function generateStaticParams() {
  const posts = getPosts()
  return posts.map(({ slug }) => ({
    slug: slug,
  }))
}

export function generateMetadata({ params }: { params: Params }) {
  const post = getPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  const { slug } = post
  const ogImage = image ?? `${baseUrl}/og?title=${encodeURIComponent(title)}`
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Page({ params }: { params: Params }) {
  const post = getPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const { title, publishedAt, summary, image } = post.metadata
  const { content, slug } = post

  return (
    <article className="my-28 overflow-auto">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            datePublished: publishedAt,
            dateModified: publishedAt,
            description: summary,
            image: image
              ? `${baseUrl}${image}`
              : `/og?title=${encodeURIComponent(title)}`,
            url: `${baseUrl}/blog/${slug}`,
            author: {
              "@type": "Person",
              name: "Christian B. Martinez",
            },
          }),
        }}
      />
      <header>
        <Badge variant="outline" className="px-2 py-1 my-2 rounded-xl">
          <ReadingTimeIcon className="size-3" />
          &nbsp;
          {formatReadingTime(publishedAt)}
        </Badge>
        <h1 className="text-foreground">{title}</h1>
        <div className="mt-2 flex flex-row justify-between text-muted-foreground items-center w-full">
          <div className="flex flex-row justify-start items-center">
            <span className="text-sm font-medium">Christian B. Martinez</span>
            <span className="h-4 w-0.5 mx-2 rounded bg-zinc-700" />
            <time dateTime={publishedAt} className="text-muted-foreground">
              <span className="text-sm font-medium">
                {formatDate(publishedAt)}
              </span>
            </time>
          </div>
        </div>
      </header>
      <Mdx source={content} />
    </article>
  )
}
