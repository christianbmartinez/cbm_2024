import { baseUrl, getPosts } from "@/lib"

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
            <link>${baseUrl}/blog/${slug}</link>
            <description>${summary || ""}</description>
            <pubDate>${new Date(publishedAt).toUTCString()}</pubDate>
          </item>
        `
    })
    .join("\n")

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>My Portfolio</title>
        <link>${baseUrl}</link>
        <description>This is my portfolio RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  })
}
