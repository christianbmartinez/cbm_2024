import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Christian B. Martinez - Portfolio",
    short_name: "CBM - Portfolio",
    description: `Hi, i'm Christian! I am a full stack software engineer from Utah with a passion for open source and AI. Further, I am a father, husband, technical writer, and curious tinkerer.`,
    lang: "en",
    start_url: "/",
    display: "standalone",
    background_color: "#000",
    theme_color: "#000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
