"use client"

import { useEffect, useState } from "react"
import { formatDate } from "@/lib"
import type { ErrorReport } from "@/types"
import { EnvelopeClosedIcon, ReloadIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui"

export default function Error({ error, reset }: ErrorReport): JSX.Element {
  const [errorReport, setErrorReport] = useState<ErrorReport["error"]>({
    cause: "",
    name: "",
    message: "",
    digest: "",
    stack: "",
    timestamp: "",
  })

  useEffect(() => {
    setErrorReport({
      cause: error?.cause ?? "The cause of the error is unknown.",
      name: error?.name ?? "Error name not shown.",
      message: error?.message ?? "Error message not shown.",
      digest: error?.digest ?? "Error digest not shown.",
      stack: error?.stack ?? "Error stack trace not shown.",
      timestamp: `Error thrown ${formatDate(new Date().toString(), true)}`,
    })
  }, [error])

  return (
    <div className="flex h-auto w-96 mx-auto justify-center items-center p-4 border-solid border-border bg-background rounded-md text-foreground">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {error?.name ?? "Unknown Error"}
        </h1>
        <p className="mt-4">
          {error?.message ??
            "An unknown error occurred while trying to load. Please try again."}
        </p>
        <div className="mt-4 flex flex-row justify-between items-center space-x-4 w-full">
          <Button
            variant="default"
            className="inline-flex w-6/12"
            onClick={() => reset()}
            size="icon"
          >
            <ReloadIcon />
            &nbsp;Reload Page
          </Button>
          <Button
            variant="secondary"
            className="inline-flex w-6/12"
            onClick={() => setErrorReport(null)}
            size="icon"
          >
            <EnvelopeClosedIcon />
            &nbsp;Send Report
          </Button>
        </div>
      </div>
    </div>
  )
}
