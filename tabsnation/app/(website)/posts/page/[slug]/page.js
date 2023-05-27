import React from 'react'
import { POSTS_PER_PAGE } from '../../page'
import PostList from '@/components/PostList';
import { getAllPost } from '@/sanity/lib/client'; 
import { dynamicPagination } from '@/utils/helper';

const page = async ({ params }) => {
    const posts = await getAllPost()
    const data = await dynamicPagination(params.slug, posts)

    return (
        <PostList params={"posts"} title={`All Posts`} paginationData={data}/>
    )
}

export default page