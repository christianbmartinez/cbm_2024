import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Christian B. Martinez",
    short_name: "CBM",
    description: "Christian B. Martinez's personal website",
    lang: "en",
    start_url: ".",
    display: "browser",
    background_color: "#f8fafc",
    theme_color: "#020817",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
