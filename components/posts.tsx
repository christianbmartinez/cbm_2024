import Link from "next/link"
import { getPosts } from "@/lib"

import { PostCard } from "./post-card"

export function Posts() {
  const posts = getPosts()
  return (
    <div className="flex flex-row w-full justify-center items-center">
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
            <PostCard
              title={title}
              publishedAt={publishedAt}
              readingTime={publishedAt}
              description={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
              imgSrc={"http://localhost:3000/placeholder.svg"}
            />
          </Link>
        ))}
    </div>
  )
}
