"use client"

import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Author from './Author';
import '../utils/helper';
import Tag from '../public/Tags.svg';

const PostContainer = ({ title, posts }) => {

  return (
    <div className='h-auto py-2'>
      {title && (
        <div className='dark:bg-gray-700 bg-gray-200 dark:text-gray-200 text-gray-600 ml-4 py-1 px-5 inline-block rounded-3xl cursor-pointer border dark:border-gray-400'>
          <h2 className='sm:text-2xl text-lg font-medium inline-block'>{title}</h2>
        </div>
      )}

      <div className='flex flex-wrap gap-5 px-6 sm:px-0 mt-7 rounded-xl sm:justify-center'>
        {posts.length > 0 &&
          posts.map((post) => (
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
    </div>
  );
};

export default PostContainer;

