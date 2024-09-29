import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// A function to evaluate and merge tw classnames.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// A function to format dates (with a relative option).
export function formatDate(d: string | number, r = false) {
  const t = new Date(d)

  const f = t.toLocaleString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
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
export function rt(x: string) {
  const w = x.length * 0.03
  const wpm = 200
  const m = Math.ceil(w / wpm)
  return `${m} min read`
}