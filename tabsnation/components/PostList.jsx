"use client"

import React, { useState } from 'react'
import Pagination from './Pagination';
import Postcard from './Postcard';
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'
import '../utils/helper'


const PostList = ({ title, params, paginationData }) => {
  const {initialDisplayPosts, posts} = paginationData;
  const {currentPage, totalPages} = paginationData.pagination;
  const pagination = paginationData.pagination;

  const [searchValue, setSearchValue] = useState('');

  const filteredBlogPosts =
    posts?.filter((post) => {
      const allContent = post.title + post.tags.join(" ");
      return allContent.toLowerCase().includes(searchValue.toLowerCase());
    });


  const displayPosts = initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts;


  return (
    <div className='h-auto'>
      <div className='mt-8 flex flex-col gap-6 px-5 sm:px-2'>
        <h1 className='text-3xl font-semibold'>{title}</h1>

        <div class="relative max-w-lg">
          <input aria-label="Search articles" onChange={(e)=>setSearchValue(e.target.value)} type="text" placeholder="Search any post" className="block w-full  rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-700 dark:text-gray-100" /><svg class="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div>
        <hr />

        {/* <div className='w-2/3 border dark:border-gray-700 border-gray-300'></div> */}
      </div>

      <div className='h-auto py-2'>

        <div className='flex flex-wrap gap-5 px-6 sm:px-0 mt-7 rounded-xl sm:justify-center'>
          {displayPosts?.length > 0 && 
            displayPosts?.map((post) => (
              <Postcard post={post}/>
            ))}
        </div>
        {pagination && pagination.totalPages > 1 && !searchValue && (
          <Pagination currentPage={currentPage} totalPages={totalPages} params={params}/>
        )}
      </div>
    </div>

  )
}

export default PostList