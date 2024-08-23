import Link from 'next/link'

import { Button } from '@/components'

export default function NotFound() {
  return (
    <section>
      <div className='w-full h-full absolute top-0 left-0 flex flex-row justify-center items-center'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-sm sm:text-base font-semibold'>404</p>
          <h1 className='mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl'>
            Page not found
          </h1>
          <p className='mt-4 text-normal'>
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <Link href='/'>
            <Button
              role='link'
              variant='link'
              className='mt-4'
            >
              &larr; Go home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
