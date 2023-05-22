import PostList from '@/components/PostList'
import { getAllPost } from '@/sanity/lib/client'
import { initPagination } from '@/utils/helper'
import React from 'react'

export const POSTS_PER_PAGE = 6

const page = async () => {
  const posts = await getAllPost()
  const data = await initPagination(posts);

  return (
    <PostList posts={posts} params="search" title={"Search"} paginationData={data} />
  )
}

export default page