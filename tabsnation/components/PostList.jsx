"use client"

import React, { useState } from 'react'
import PostContainer from './PostContainer'
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';
import Pagination from './Pagination';

const PostList = ({ posts, title, pagination, initialDisplayPosts=[] }) => {
  const filteredBlogPosts = [];
  const [searchValue, setSearchValue] = useState(false); 

  const displayPosts = initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts;

  // console.log(displayPosts);

  return (
    <div className='h-auto'>
      <div className='mt-8 flex flex-col gap-6 px-5 sm:px-2'>
        <h1 className='text-4xl font-semibold'>All {title}</h1>
        <div class="relative max-w-lg"><input aria-label="Search articles" type="text" placeholder="Search articles" className="  block w-full  rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-700 dark:text-gray-100" /><svg class="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div>
        {/* <hr /> */}

        <div className='w-2/3 border border-gray-700'></div>
      </div>

      <div className='h-auto py-2'>

        <div className='flex flex-wrap gap-5 px-6 sm:px-0 mt-7 rounded-xl sm:justify-center'>
          {displayPosts.length > 0 &&
            displayPosts.map((post) => (
              <article
                href={`/${post.slug.current}`}
                className='w-full lg:w-80 sm:w-5/12 rounded-xl flex flex-col relative border dark:border-gray-500 border-gray-300 dark:bg-gray-700 bg-gray-200 items-center min-h-96 py-4'
                key={post.slug.current}
              >
                {post.mainImage && (
                  <Image
                    src={urlForImage(post.mainImage).width(200).url()}
                    width={400}
                    height={500}
                    alt='Picture of the author'
                    className='lg:w-80 lg:h-48 sm:w-11/12 sm:h-56 -top-64 rounded-3xl px-2'
                  />
                )}
                <div className='w-full h-full flex flex-col justify-center items-start gap-3 px-5 mt-5 '>
                  <Link href={`/${post.slug.current}`} className='text-xl font-medium dark:text-gray-200 text-gray-600 '>
                    {post.title}
                  </Link>
                  <p className='text-base dark:text-gray-400 text-gray-500'>Lorem ipsum dolor sit ...</p>

                  <div className='flex flex-wrap gap-2 whitespace-nowrap'>
                    {post?.tags?.slice(0, 2).map((tag, index) => (
                      <Link
                        href={'/tags'}
                        key={index}
                        className='flex px-2 py-0.5 border rounded-md dark:bg-gray-700 dark:border-gray-500 border-gray-400 hover:dark:bg-gray-600 hover:bg-gray-300 dark:text-gray-400 text-gray-500 transition-all'
                      >
                        {tag.capitalizedString()}
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
        </div>
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />

      </div>
    </div>

  )
}

export default PostList