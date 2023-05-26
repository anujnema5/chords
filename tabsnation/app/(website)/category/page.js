import { getCategories } from '@/sanity/lib/client'
import Category from './Category'
const page = async () => {
const categories = await getCategories()

  return (
    <Category categories={categories} />
  )
}

export default page