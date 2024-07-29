import type { MetadataRoute } from 'next'
import { BASE_URL } from '@/config'

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
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
