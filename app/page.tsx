import { Posts } from '@/app/blog/_components/mdx-posts'
import Link from 'next/link'
import type { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'Christian Martinez - Full Stack Software Engineer',
  description:
    "Hello, i'm Christian! I am a full stack software engineer from Utah and a contributor to open source. I have contributed to react.dev, framer, and more, to name a few. Additionally, I am a father, husband, founder, and an avid web-tinkerer. I am passionate about learning and sharing about web development, design, tooling, and AI. I am always looking for new opportunities to learn and grow.",
}

export default function Page() {
  return (
    <section>
      <h1>Hello World</h1>
      <p className="mb-4 text-base">
        Hey, I&apos;m Christian! A full stack engineer and open source
        contributor from Utah. Currently building{' '}
        <Link
          className="text-foreground underline hover:text-accent-foreground transition-colors"
          href="https://www.astrocatagency.com"
          target="_blank">
          Astrocat
        </Link>{' '}
        Agency. In my free time, you can find me playing with my kids and more
        than likely stepping on legos.
      </p>
      <Posts />
    </section>
  )
}
