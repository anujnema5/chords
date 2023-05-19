"use client"

import React from 'react'
import { PortableText } from '@portabletext/react'

const Author = ({post}) => {
  return (
    <div className='border-2'>
    <PortableText value={post.author} />
    </div>
  )
}

export default Author