import { getAllPost } from "@/sanity/lib/client"
import HomePage from "./Home"

export default async function Home() {
  const posts = await getAllPost();
  return <HomePage posts={posts}/>
}
