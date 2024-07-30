import { Mdx } from "@/components"
import { BASE_URL } from "@/config"
import { formatDate, getPosts } from "@/lib"
import type { Params } from "@/types"
import { notFound } from "next/navigation"

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
  const ogImage = image ?? `${BASE_URL}/og?title=${encodeURIComponent(title)}`
  console.log("Generating og image: ", ogImage, BASE_URL + "is the base url.")
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${BASE_URL}/blog/${slug}`,
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
              ? `${BASE_URL}${image}`
              : `/og?title=${encodeURIComponent(title)}`,
            url: `${BASE_URL}/blog/${slug}`,
            author: {
              "@type": "Person",
              name: "Christian B. Martinez",
            },
          }),
        }}
      />
      <article className="mdx">
        <header className="flex flex-col">
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {title}
          </h1>
          <time
            dateTime={publishedAt}
            className="order-first flex items-center text-base text-muted-foreground"
          >
            <span className="h-4 w-0.5 rounded-full bg-secondary" />
            <span className="ml-3">{formatDate(publishedAt)}</span>
          </time>
        </header>
        <Mdx source={content} />
      </article>
    </section>
  )
}
