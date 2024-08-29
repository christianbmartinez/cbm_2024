import { type ClassValue, clsx } from 'clsx';
import fs from 'fs';
import path from 'path';
import { twMerge } from 'tailwind-merge';

type MdxProps = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

// A function to parse frontmatter from .mdx files.
function fm(y: string) {
    const p = /---\s*([\s\S]*?)\s*---/
    const x = p.exec(y)
    const m = x![1]
    const c = y.replace(p, '').trim()
    const l = m.trim().split('\n')
    const md: Partial<MdxProps> = {}
  
    l.forEach((line) => {
      const [x, ...y] = line.split(': ')
      let v = y.join(': ').trim()
      v = v.replace(/^['"](.*)['"]$/, '$1')
      md[x.trim() as keyof MdxProps] = v
    })
  
    return { metadata: md as MdxProps, content: c as string }
  }
  // A function to get all posts from the blog directory.
  export function getPosts() {
    const d = path.join(process.cwd(), 'app', 'blog', 'posts')
    const x = fs
      .readdirSync(d)
      .filter((y) => path.extname(y) === '.mdx')
      .map((y) => {
        const { metadata, content } = fm(
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
    x = `${Y} ${Y > 1 ? "years" : "year"} ago`
  } else if (M > 0) {
    x = `${M} ${M > 1 ? "months" : "month"} ago`
  } else if (D > 0) {
    x = `${D} ${D > 1 ? "days" : "day"} ago`
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
// A function to generate bytes
// Param b=bytes(number) is char length.
export function gb(b: number) {
  if (b === 0) {
    return '0 Bytes'
  }
  const k = 1024
  const i = Math.floor(Math.log(b) / Math.log(k))
  const s = [' Bytes', ' KB', ' MB' , ' GB'] 

  return `${parseFloat((b / Math.pow(k, i)).toFixed(2)) + s[i]}`
}