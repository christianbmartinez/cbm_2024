import type { MdxMetadata } from '@/lib/types'
import fs from 'fs'
import path from 'path'

function parseMatter(file: string) {
  const exp = /---\s*([\s\S]*?)\s*---/
  const match = exp.exec(file)
  const matter = match![1]
  const content = file.replace(exp, '').trim()
  const lines = matter.trim().split('\n')
  const mdxMetadata: Partial<MdxMetadata> = {}

  lines.forEach((line) => {
    const [x, ...y] = line.split(': ')
    let value = y.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1')
    mdxMetadata[x.trim() as keyof MdxMetadata] = value
  })

  return { metadata: mdxMetadata as MdxMetadata, content: content as string }
}

export function getPosts() {
  const dir = path.join(process.cwd(), 'app', 'blog', 'posts')
  const files = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === '.mdx')
    .map((file) => {
      const { metadata, content } = parseMatter(
        fs.readFileSync(path.join(dir, file), 'utf-8')
      )
      const slug = path.basename(file, path.extname(file))

      return {
        metadata,
        slug,
        content,
      }
    })
  return files
}
