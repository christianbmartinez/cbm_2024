import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          'Applebot',
          'Googlebot',
          'GoogleNewsBot',
          'GoogleAdsBot',
          'Bingbot',
          'DuckDuckBot',
          'facebot',
        ],
        allow: ['/'],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  }
}
