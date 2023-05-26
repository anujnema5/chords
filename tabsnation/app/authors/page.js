import Authors from './Authors';
import { getAuthors } from '@/sanity/lib/client'
import React from 'react'

const page = async () => {
  const authors = await getAuthors();

  return (
    <Authors authors={authors} />
  )
}

export default page