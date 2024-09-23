import { getPosts } from '@/lib/utils'

export function GET() {
  const itemsXml = getPosts()
    .sort((a, b) => {
      if (
        new Date(a.metadata?.publishedAt) > new Date(b.metadata?.publishedAt)
      ) {
        return -1
      }
      return 1
    })
    .map(({ metadata: { title, summary, publishedAt }, slug }) => {
      return `<item>
            <title>${title}</title>
            <link>${process.env.NEXT_PUBLIC_BASE_URL}/blog/${slug}</link>
            <description>${summary ?? 'Technical blog article written by Christian B. Martinez'}</description>
            <pubDate>${new Date(publishedAt).toUTCString()}</pubDate>
          </item>
        `
    })
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>RSS Feed</title>
        <link>${process.env.NEXT_PUBLIC_BASE_URL}/rss.xml</link>
        <description>Welcome to CBM RSS feed. Lets cross the bridge into the vast world of web development together. Please enjoy your stay, and thanks for stopping by!</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
