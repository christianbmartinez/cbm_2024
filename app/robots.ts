import { baseUrl } from "@/lib/config"
import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "Applebot",
          "Googlebot",
          "GoogleNewsBot",
          "GoogleAdsBot",
          "Bingbot",
          "DuckDuckBot",
          "facebot",
        ],
        allow: ["/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
