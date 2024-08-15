import { type NextApiRequest } from "next/types"

export type NavLinks = {
  title: string
  href?: string | URL
  disabled?: boolean
  external?: boolean
}

export type NavProps = {
  items?: NavLinks[]
}

export type SocialLinks = {
  title: string
  icon: (props: IconProps) => JSX.Element
  href: string
}

export type IconProps = React.SVGProps<SVGSVGElement>

export type BlogRouterParams =
  | NextApiRequest["query"]
  | {
      slug: string
    }

export type MdxMetadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}