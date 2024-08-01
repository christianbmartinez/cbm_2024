import { notFound } from "next/navigation"
import { Mdx } from "@/components"
import { baseUrl } from "@/config"
import { formatDate, getPosts } from "@/lib"
import type { Params } from "@/types"

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
  console.log("Generating og image: ", ogImage, baseUrl + "is the base url.")
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
    <section>
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
      <article className="my-28 mdx flex flex-col justify-start items-left">
        <header className="flex flex-col">
          <h1 className="text-primary break-words">{title}</h1>
          <time
            dateTime={publishedAt}
            className="order-first flex items-center text-base text-muted-foreground"
          >
            <span className="h-4 w-0.5 rounded-full bg-zinc-700" />
            <span className="my-2 ml-2 text-sm font-medium text-muted-foreground">
              {formatDate(publishedAt)}
            </span>
          </time>
        </header>
        <Mdx source={content} />
      </article>
    </section>
  )
}
