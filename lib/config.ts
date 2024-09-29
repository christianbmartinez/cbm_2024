export const siteConfig = {
  name: "Christian B. Martinez - Developer Portfolio and Blog",
  description:
    "Hi i\'m Christian, a full stack engineer from Utah! I build cutting edge web applications using modern web technologies.",
  url: "https://christianbmartinez.com",
  ogImage: "https://christianbmartinez.com/og",
  links: {
    x: "https://x.com/cbmonx",
    github: "https://github.com/cbmongithub",
    linkedin: "https://linkedin.com/in/cbmonlinkedn",
    codepen: "https://codepen.io/cbmoncodepen",
  },
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_URL}${path}`
}