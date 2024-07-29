'use client'

import { formatDate } from '@/lib'
import type { ErrorReport } from '@/types'
import { EnvelopeClosedIcon, ReloadIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: ErrorReport): JSX.Element {
  const [errorReport, setErrorReport] = useState<ErrorReport['error']>({
    cause: '',
    name: '',
    message: '',
    digest: '',
    stack: '',
    timestamp: '',
  })

  useEffect(() => {
    setErrorReport({
      cause: error?.cause ?? 'The cause of the error is unknown.',
      name: error?.name ?? 'Error name not shown.',
      message: error?.message ?? 'Error message not shown.',
      digest: error?.digest ?? 'Error digest not shown.',
      stack: error?.stack ?? 'Error stack trace not shown.',
      timestamp: `Error thrown ${formatDate(new Date().toString(), true)}`,
    })
  }, [error])

  return (
    <div className='flex h-full items-center pt-16 sm:pt-32 bg-background rounded-md text-foreground'>
      <div className='flex flex-col items-center'>
        <h1 className='mt-4 text-4xl font-bold tracking-tight sm:text-5xl'>
          Error: {error?.name ?? 'Unknown'}
        </h1>
        <p className='mt-4'>
          {error?.message ??
            'An unknown error occurred while trying to load. Please try again.'}
        </p>
        <Button
          onClick={() => reset()}
          size='icon'
        >
          <ReloadIcon />
          Try again
        </Button>
        <Link target="_top" href={`mailto:${process.env.EMAIL}&subject=Error%20Report&body=${errorReport}`}>
        <Button
        onClick={() => setErrorReport(null)}
          variant='secondary'
          size='icon'
        >
          <EnvelopeClosedIcon />
          Email Report
        </Button>
        </Link>
      </div>
    </div>
  )
}
