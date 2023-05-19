import React from 'react'
import PostContainer from './PostContainer'

const PostList = ({posts, type}) => {

  return (
    <div className='border h-auto'>
        <h1 className='text-4xl font-medium'>All {type}</h1>
        <PostContainer posts={posts} />
    </div>
  )
}

export default PostList