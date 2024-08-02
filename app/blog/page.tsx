import { Posts } from "@/components"

export const metadata = {
  title: "Blog",
  description: "Tutorials, hot takes, and news on full stack web development.",
}
// We need a filter component here, where users can
// filter the posts by tags, categories, etc.

// We also need a different header component
// so the user can filter the posts by date, popularity, etc.
export default function Page() {
  return (
    <section>
      <h2>Recent Posts</h2>
      <Posts />
    </section>
  )
}
