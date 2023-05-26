
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'
import '../utils/helper'

const Postcard = ({ post }) => {
  return (
    <article
      href={`/${post.slug.current}`}
      className='w-full lg:w-80 sm:w-5/12 rounded-xl flex flex-col relative border dark:border-gray-500 border-gray-300 dark:bg-gray-700 bg-gray-200 items-center min-h-96 py-4 hover:scale-105 transition-all'
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
      <div className='w-full h-full flex flex-col justify-center items-start gap-4 px-5 mt-5 '>
        <Link href={`/${post.slug.current}`} className='text-xl font-medium dark:text-gray-200 text-gray-600 hover:underline'>
          {post.title}
        </Link>

        <div className='flex flex-wrap gap-2 whitespace-nowrap'>
          {post?.tags?.slice(0, 2).map((tag, index) => (
            <Link
              href={`/tag/${tag.kebabCase()}`}
              key={index}
              className='flex px-2 py-0.5 border rounded-md dark:bg-gray-700 dark:border-gray-500 border-gray-400 hover:dark:bg-gray-600 hover:bg-gray-300 dark:text-gray-400 text-gray-500 transition-all'
            >
              {tag.capitalizedString()}
            </Link>
          ))}
        </div>

        {/* <Link className='cursor-pointer border bg-gray-200 text-gray-800' href={`/${post.slug.current}`}>Read More</Link> */}
      </div>
    </article>
  )
}

export default Postcard