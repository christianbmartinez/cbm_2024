import { type ClassValue, clsx } from 'clsx'
import fs from 'fs'
import path from 'path'
import { twMerge } from 'tailwind-merge'

export type MdxProps = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

export type MdxPropsWithSlug = {
  metadata: MdxProps
  slug?: string
  content: string
}

// A function to parse frontmatter from .mdx files.
export function frontMatter(y: string): MdxPropsWithSlug {
  const p = /---\s*([\s\S]*?)\s*---/
  const x = p.exec(y)
  const m = x![1]
  const content = y.replace(p, '').trim()
  const l = m.trim().split('\n')
  const metadata: Partial<MdxProps> = {}

  l.forEach((line) => {
    const [x, ...y] = line.split(': ')
    let v = y.join(': ').trim()
    v = v.replace(/^['"](.*)['"]$/, '$1')
    metadata[x.trim() as keyof MdxProps] = v
  })

  return { metadata: metadata as MdxProps, content: content as string }
}

// A function to get all posts from the blog directory.
export function getPosts(): MdxPropsWithSlug[] {
  const d = path.join(process.cwd(), 'app', 'blog', 'posts')
  const x = fs
    .readdirSync(d)
    .filter((y) => path.extname(y) === '.mdx')
    .map((y) => {
      const { metadata, content } = frontMatter(
        fs.readFileSync(path.join(d, y), 'utf-8')
      )
      const slug = path.basename(y, path.extname(y))

      return {
        metadata,
        slug,
        content,
      }
    })
  return x
}

// A function to evaluate and merge tw classnames.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// A function to format a date with options.
// Param d=date(string) is the date to be formatted.
// Param r=relative(boolean) outputs a relative date.
export function formatDate(d: string, r = false) {
  const t = new Date(d)

  const f = t.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  // If not relative, return formatted date.
  if (!r) {
    return f
  }

  const n = new Date()

  const Y = n.getFullYear() - t.getFullYear()
  const M = n.getMonth() - t.getMonth()
  const D = n.getDate() - t.getDate()

  let x = ''

  if (Y > 0) {
    x = `${Y} ${Y > 1 ? 'years' : 'year'} ago`
  } else if (M > 0) {
    x = `${M} ${M > 1 ? 'months' : 'month'} ago`
  } else if (D > 0) {
    x = `${D} ${D > 1 ? 'days' : 'day'} ago`
  } else {
    x = 'Today'
  }
  // Return relative date
  return x
}
// A function to generate an approximated reading time.
// Param x=content(string) is the content.
export function rt(x: string) {
  const w = x.trim().split(/\s+/).length
  const m = w / 200
  const d = Math.ceil(m)
  return `${d} min read`
}
// A function to display a file size - Bytes, KB, MB, or GB.
// Param b=bytes(number) is the character length.
export function s(b: number) {
  if (b < 1) {
    return '0 Bytes'
  } else if (b === 1) {
    return '1 Byte'
  } else {
    const k = 1000 // KB(1000 or 10³) is more widely adopted than KiB(1024 or 2¹⁰).
    const i = Math.floor(Math.log(b) / Math.log(k))
    const s = [' B', ' KB', ' MB', ' GB']

    return `${parseFloat((b / Math.pow(k, i)).toFixed(2)) + s[i]}`
  }
}
