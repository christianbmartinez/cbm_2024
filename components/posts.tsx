import { d, getPosts } from "@/lib"
import Link from "next/link"

export function Posts() {
  const posts = getPosts()
  return (
    <div>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post, i) => (
          <Link
            key={`posts_link-${i}`}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-muted-foreground w-[100px] tabular-nums">
                {d(post.metadata.publishedAt, false)}
              </p>
              <p className="text-foreground tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
