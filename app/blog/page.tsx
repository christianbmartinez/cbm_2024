import { Posts } from '@/components'

export const metadata = {
  title: 'Blog',
  description: 'Tutorials, hot takes, and news on full stack web development.',
}

export default function Page() {
  return (
    <section>
      <h1 className='font-semibold text-2xl mb-8 tracking-tighter'>
        Recent Posts
      </h1>
      <Posts />
    </section>
  )
}
