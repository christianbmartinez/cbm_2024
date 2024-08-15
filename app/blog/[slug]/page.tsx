import { Mdx, ReadingTimeIcon } from "@/components"
import { d, getPosts, rt } from "@/lib"
import { baseUrl } from "@/lib/config"
import type { BlogRouterParams } from "@/types"
import { notFound } from "next/navigation"

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
    <article className="my-28 w-full">
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
        <div className="flex flex-row px-2 py-3 bg-foreground text-bg border border-foreground border-solid hover:accent-foreground hover:border-none transition-colors duration-300 ease-in-out">
          <ReadingTimeIcon className="size-3 mr-4" />
          {rt(publishedAt)}
        </div>
        <div className="my-3 flex flex-row justify-between text-muted-foreground items-center w-full">
          <div className="flex flex-row justify-start items-center">
            <span className="text-sm font-medium">Christian B. Martinez</span>
            <span className="h-4 w-0.5 mx-2 rounded bg-zinc-700" />
            <time dateTime={publishedAt} className="text-muted-foreground">
              <span className="text-sm font-medium">
                {d(publishedAt)}
              </span>
            </time>
          </div>
        </div>
        <h1 className="text-foreground">{title}</h1>
      </header>
      <Mdx source={content} />
    </article>
  )
}
