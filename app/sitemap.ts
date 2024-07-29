import { getPosts } from '@/lib'

import { BASE_URL } from '@/config'

export default function sitemap() {
  const posts = getPosts().map(({ metadata: { publishedAt }, slug }) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: publishedAt,
  }))

  const routes = ['', '/blog'].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...posts]
}
