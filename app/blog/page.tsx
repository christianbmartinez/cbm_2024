import { Posts } from '@/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Tutorials, hot takes, and news on full stack web development.',
}
export default function Page() {
  return (
    <section>
      <h2>Recent Posts</h2>
      <Posts />
    </section>
  )
}
