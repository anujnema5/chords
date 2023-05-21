import React from 'react'
import { POSTS_PER_PAGE } from '../../page'
import PostList from '@/components/PostList';
import { getAllPost } from '@/sanity/lib/client'; 

const page = async ({ params }) => {
    const posts = await getAllPost()

    const pageNumber = parseInt(params.slug);
    const initialDisplayPosts = posts.slice(POSTS_PER_PAGE * (pageNumber - 1), POSTS_PER_PAGE * pageNumber);

    const pagination = {
        currentPage : pageNumber,
        totalPages : Math.ceil(posts.length / POSTS_PER_PAGE)
    }

    return (
        <PostList params="posts" title={"All Posts"} posts={posts} initialDisplayPosts={initialDisplayPosts} pagination={pagination}  />
    )
}

export default page