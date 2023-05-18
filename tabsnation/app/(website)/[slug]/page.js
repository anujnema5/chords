import { getCurrentPost } from '@/sanity/lib/client';
import React from 'react'
import Post from './Post';

const page = async ({ params }) => {
  const post = await getCurrentPost(params.slug);
  return <Post post={post}/>
}

export default page