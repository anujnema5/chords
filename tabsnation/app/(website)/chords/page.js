import { getChords, getCurrentPost } from '@/sanity/lib/client';
import React from 'react'
import PostList from '@/components/PostList';
import { POSTS_PER_PAGE } from '../posts/page';

const page = async () => {
  const posts = await getChords();

  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)


  const pagination = {
      currentPage: 1,
      totalPages: Math.ceil(posts.length / POSTS_PER_PAGE)
  }

  return (
      <PostList params="chords" posts={posts} title={"All Guitar/Ukulele Posts"} pagination={pagination} initialDisplayPosts={initialDisplayPosts} />
  )
}

export default page