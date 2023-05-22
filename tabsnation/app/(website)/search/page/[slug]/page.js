import { dynamicPagination } from '@/utils/helper'
import { getAllPost } from '@/sanity/lib/client'
import PostList from '@/components/PostList'

const page = async ({params}) => {
    const posts = await getAllPost()
    const data = await dynamicPagination(params, posts);

    return (
        <PostList posts={posts} title={"Search"} params="search" paginationData={data}/>
    )
}

export default page