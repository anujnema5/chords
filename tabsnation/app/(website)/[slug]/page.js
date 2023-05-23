import { getCurrentPost } from '@/sanity/lib/client';
import React from 'react'
import Post from './Post';
import { notFound } from 'next/navigation';

const page = async ({ params }) => {
  const post = await getCurrentPost(params.slug);
  return (Object.keys(post).length > 0 ? <Post post={post} /> : notFound()

  )
}

export default page