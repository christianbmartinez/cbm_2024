import { MdxComponents } from '@/components/mdx-components'
import { ReadingTimeIcon } from '@/components/ui/icons'
import { formatDate, getPosts } from '@/lib/utils'
import { notFound } from 'next/navigation'
import { type NextApiRequest } from 'next/types'

const posts = getPosts()

if (!posts) {
  notFound()
}

type BlogRouterParams =
  | NextApiRequest['query']
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
    title: title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  const { slug } = post
  const ogImage =
    image ??
    `${process.env.NEXT_PUBLIC_BASE_URL}/og?title=${encodeURIComponent(title)}`
  return {
    title: title,
    description,
    openGraph: {
      title: title,
      description,
      type: 'article',
      publishedTime,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
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

  const { publishedAt, summary, title, image } = post.metadata
  const { content, slug } = post

  return (
    <article
      role="article"
      aria-label={`An article by Christian B. Martinez titled ${title}`}
      className="w-full max-w-mdx h-auto my-28 whitespace-normal">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: title,
            datePublished: publishedAt,
            dateModified: publishedAt,
            description: summary,
            image: image
              ? `${process.env.NEXT_PUBLIC_BASE_URL}/${image}`
              : `/og?title=${encodeURIComponent(title)}`,
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
            author: {
              '@type': 'Person',
              name: 'Christian B. Martinez',
            },
          }),
        }}
      />
      <header>
        <div className="my-3 flex flex-row justify-between items-center w-full cursor-default">
          <div className="flex flex-row justify-start items-center">
            <span className="text-sm font-medium text-muted-foreground">
              Christian B. Martinez
            </span>
          </div>
          <div className="flex flex-row justify-end items-center bg-transparent text-accent-foreground border border-accent-foreground rounded text-xs py-1 px-1.5">
            <ReadingTimeIcon />
            &nbsp;
            <time dateTime={publishedAt}>
              <span className="text-xs font-medium pb-2">
                {formatDate(publishedAt)}
              </span>
            </time>
          </div>
        </div>
        <h1 className="text-foreground">{title}</h1>
      </header>
      <MdxComponents source={content} />
    </article>
  )
}
