export function formatDate(d?: string, e = false) {
  const t = new Date(d!!)

  const f = t.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

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

  return `${f} (${x})`
}

export function formatReadingTime(x: string) {
  const w = x.trim().split(/\s+/).length
  const m = w / 200
  const d = Math.ceil(m)
  return `${d} min read`
}

// Might use this later. For n, we can leave it out of the bundle.
// export function formatFileSize(bytes: number) {
//   if (bytes === 0) return '0 Bytes'

//   const k = 1024
//   const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
//   const i = Math.floor(Math.log(bytes) / Math.log(k))

//   return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
// }
