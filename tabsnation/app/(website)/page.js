import { getAllPost, getPostHome } from "@/sanity/lib/client"
import HomePage from "./Home"

export default async function Home() {
  const posts = await getPostHome();
  return <HomePage posts={posts}/>
}
