import PostList from '@/components/PostList'
import { getAllPost } from '@/sanity/lib/client'
import React from 'react'

export const POSTS_PER_PAGE = 6

const page = async () => {
    const posts = await getAllPost()
    // const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)


    // const pagination = {
    //     currentPage: 1,
    //     totalPages: Math.ceil(posts.length / POSTS_PER_PAGE)
    // }

    return (
      <PostList posts={posts} title={"Search"} />
      // <h1>Hello</h1>
    )
}

export default page