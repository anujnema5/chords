import PostList from '@/components/PostList'
import { getAllPost } from '@/sanity/lib/client'
import { initPagination } from '@/utils/helper'

const page = async () => {
    const posts = await getAllPost()
    const data = await initPagination(posts);

    return (
        <PostList  params="posts" title={"All Posts"} paginationData={data} />

    )
}

export default page