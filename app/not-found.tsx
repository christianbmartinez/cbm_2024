import Link from 'next/link'

import { Button } from '@/components/ui'

export default function NotFound() {
  return (
    <section>
      <div className='flex h-full items-center pt-16 sm:pt-32'>
        <div className='flex flex-col items-center'>
          <p className='text-base font-semibold'>404</p>
          <h1 className='mt-4 text-4xl font-bold tracking-tight sm:text-5xl'>
            Page not found
          </h1>
          <p className='mt-4 text-base'>
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <Link href='/'>
            <Button
              role='link'
              variant='secondary'
              className='mt-4'
            >
              Go home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
