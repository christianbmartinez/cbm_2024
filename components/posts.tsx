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
          <Link key={`post_item-${i}`} href={`/blog/${slug}`}>
            <div className="w-full pb-4 flex flex-row justify-start items-center space-x-2 animate-slide duration-400 hover:translate-x-2">
              <p className="w-3/12 tabular-nums text-muted-foreground">
                {formatDate(publishedAt)}
              </p>
              <p className="w-9/12 tracking-tight text-foreground text-wrap">
                {title}
              </p>
            </div>
          </Link>
        ))}
    </>
  )
}
