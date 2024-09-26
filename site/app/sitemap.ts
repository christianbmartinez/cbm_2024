import { getPosts } from '@/lib/utils'

export default function sitemap() {
  const posts = getPosts().map(({ metadata: { publishedAt }, slug }) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}`,
    lastModified: publishedAt,
  }))

  const routes = ['', '/blog'].map((route) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...posts]
}
