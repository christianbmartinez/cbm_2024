import Link from "next/link"
import { formatDate, getPosts } from "@/lib"

export function Posts() {
  const posts = getPosts()
  return (
    <>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata?.publishedAt) >
            new Date(b.metadata?.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map(({ metadata: { title, publishedAt }, slug }, i) => (
          <Link
            key={`posts_Link-${i}`}
            className="mb-4 flex flex-col space-y-1"
            href={`/blog/${slug}`}
          >
            <div className="flex w-full flex-col space-x-0 md:flex-row md:space-x-2">
              <p className="w-[100px] tabular-nums text-muted-foreground">
                {formatDate(publishedAt)}
              </p>
              <p className="tracking-tight text-foreground">{title}</p>
            </div>
          </Link>
        ))}
    </>
  )
}
