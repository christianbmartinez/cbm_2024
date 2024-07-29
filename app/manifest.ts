import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Christian B. Martinez - Portfolio',
    short_name: 'CBM - Portfolio',
    description: `Hello, i'm Christian! I am a full stack software engineer from Utah and a contributor to open source. I have contributed to react.dev, framer, and more, to name a few. Additionally, I am a father, husband, founder, and an avid web-tinkerer. I am passionate about learning and sharing about web development, design, tooling, and AI. I am always looking for new opportunities to learn and grow.`,
    lang: 'en',
    start_url: '/',
    display: 'standalone',
    background_color: '#000',
    theme_color: '#000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
