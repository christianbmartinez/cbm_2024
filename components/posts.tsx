import { d, getPosts } from "@/lib/utils"
import Link from "next/link"

export function Posts() {
  const posts = getPosts()
  return (
    <>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map(({slug, metadata}, i) => (
            <div
            key={`post-${i}`}
            className="w-full flex flex-row justify-start items-center my-6">
             <time dateTime={metadata.publishedAt}>
              <span className="font-medium mr-6">
                {d(metadata.publishedAt)}
              </span>
            </time>
              <Link
            href={`/blog/${slug}`}
            className="text-muted-foreground hover:text-accent-foreground hover:underline"
          >
                {metadata.title}
              </Link>
            </div>
        ))}
    </>
  )
}
