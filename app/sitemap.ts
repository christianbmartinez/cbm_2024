import { getPosts } from "@/lib"
import { baseUrl } from "@/lib/config"

export default function sitemap() {
  const posts = getPosts().map(({ metadata: { publishedAt }, slug }) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: publishedAt,
  }))

  const routes = ["", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...posts]
}
