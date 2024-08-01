import type { Metadata } from "next/types"
import { Posts } from "@/components"

import { CardAnimatedGradientBorder } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Christian Martinez - Full Stack Software Engineer",
  description: `Hello, i'm Christian! I am a full stack software engineer from Utah and a contributor to open source. I have contributed to react.dev, framer, and more, to name a few. Additionally, I am a father, husband, founder, and an avid web-tinkerer. I am passionate about learning and sharing about web development, design, tooling, and AI. I am always looking for new opportunities to learn and grow.`,
}

export default function Page() {
  return (
    <section>
      <CardAnimatedGradientBorder />
      <h1 className="text-4xl font-semibold tracking-tighter">{`Welcome!`}</h1>
      <p className="mb-4 text-sm lg:text:lg">
        {`Hi, my name is Christian! I am a full stack engineer from Utah and a
        contributor of open source. Additionally, I am also a father, a husband,
        an agency founder, and an avid web-tinkerer. I love learning, and
        sharing my knowledge with others. I am passionate about web development,
        design, tooling, and ai. I am always looking for new opportunities to
        learn and grow.`}
      </p>
      <Posts />
    </section>
  )
}
