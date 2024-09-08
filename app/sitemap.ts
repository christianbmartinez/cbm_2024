import { baseUrl } from "@/lib/config"
import { getPosts } from "@/lib/utils"

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
