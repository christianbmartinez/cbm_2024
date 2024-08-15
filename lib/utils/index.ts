import type { MdxMetadata } from '@/types'
import { type ClassValue as CV, clsx as c } from 'clsx/lite'
import _f from 'fs'
import _p from 'path'
import { twMerge as m } from 'tailwind-merge'

// A function to parse frontmatter from .mdx files.
function fm(y: string) {
    const p = /---\s*([\s\S]*?)\s*---/
    const x = p.exec(y)
    const m = x![1]
    const c = y.replace(p, '').trim()
    const l = m.trim().split('\n')
    const md: Partial<MdxMetadata> = {}
  
    l.forEach((line) => {
      const [x, ...y] = line.split(': ')
      let v = y.join(': ').trim()
      v = v.replace(/^['"](.*)['"]$/, '$1')
      md[x.trim() as keyof MdxMetadata] = v
    })
  
    return { metadata: md as MdxMetadata, content: c as string }
  }
  // A function to get all posts from the blog directory.
  export function getPosts() {
    const d = _p.join(process.cwd(), 'app', 'blog', 'posts')
    const x = _f
      .readdirSync(d)
      .filter((y) => _p.extname(y) === '.mdx')
      .map((y) => {
        const { metadata, content } = fm(
          _f.readFileSync(_p.join(d, y), 'utf-8')
        )
        const slug = _p.basename(y, _p.extname(y))
  
        return {
            metadata,
            slug,
            content,
          }
        })
    return x
  }

// A function to evaluate and merge tw classnames.
export function cn(...i: CV[]) {
  return m(c(i))
}
// A function to format a date with options. 
// Param d=date(string) is the date to be formatted.
// Param e=relative(boolean) outputs a relative date.
export function d(d: string, e=false) {
  const t = new Date(d)

  const f = t.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
  // If not relative (most common use case), 
  // return date here and save processing time.
  if (!e) {
    return f
  }

  const n = new Date()

  const Y = n.getFullYear() - t.getFullYear()
  const M = n.getMonth() - t.getMonth()
  const D = n.getDate() - t.getDate()

  let x = ""

  if (Y > 0) {
    x = `${Y > 1 ? "years" : "year"} ago`
  } else if (M > 0) {
    x = `${M > 1 ? "months" : "month"} ago`
  } else if (D > 0) {
    x = `${D > 1 ? "days" : "day"} ago`
  } else {
    x = "Today"
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
// A function to generate file size.
// Param b=bytes(number) is the file character length.
export function fs(b: number) {
  if (b === 0) {
    return '0 Bytes'
  }
  const k = 1024
  const i = Math.floor(Math.log(b) / Math.log(k))
  const s = [' Bytes', ' KB', ' MB'] 

  return parseFloat((b / Math.pow(k, i)).toFixed(2)) + " " + s[i]
}