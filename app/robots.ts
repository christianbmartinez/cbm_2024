import type { MetadataRoute } from "next"
import { baseUrl } from "@/config"

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
