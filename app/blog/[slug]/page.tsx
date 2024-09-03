import { Mdx, ReadingTimeIcon } from "@/components"
import { baseUrl, d, getPosts } from "@/lib"
import { notFound } from "next/navigation"
import type { NextApiRequest } from "next/types"

type BlogRouterParams =
  | NextApiRequest["query"]
  | {
      slug: string
    }

export function generateStaticParams() {
  const posts = getPosts()
  return posts.map(({ slug }) => ({
    slug: slug,
  }))
}

export function generateMetadata({ params }: { params: BlogRouterParams }) {
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

export default function Page({ params }: { params: BlogRouterParams }) {
  const post = getPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const { title, publishedAt, summary, image } = post.metadata
  const { content, slug } = post

  return (
    <article className="w-full max-w-mdx h-auto my-28 whitespace-normal">
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
              ? `${baseUrl}/${image}`
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
        <div className="my-3 flex flex-row justify-between items-center w-full cursor-default">
          <div className="flex flex-row justify-start items-center">
            <span className="text-sm font-medium text-muted-foreground">Christian B. Martinez</span>
          </div>
          <div className="flex flex-row justify-end items-center bg-transparent text-accent-foreground border border-accent-foreground rounded text-xs py-1 px-1.5">
          <ReadingTimeIcon />&nbsp;
          <time dateTime={publishedAt}>
              <span className="text-xs font-medium pb-2">
                {d(publishedAt)}
              </span>
            </time>
        </div>
        </div>
        <h1 className="text-foreground">{title}</h1>
      </header>
      { <Mdx source={content} /> /* Fix this shape stat */}
    </article>
  )
}
