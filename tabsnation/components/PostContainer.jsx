
import { urlForImage } from '@/sanity/lib/image'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Author from './Author'
import '../utils/helper'
import Tag from '../public/Tags.svg'


const PostContainer = async ({ title, posts }) => {
  return (
    <div className='h-auto  py-2 '>

      {/* CATEGORY HEADING */}
      {
        title &&
        <div className='dark:bg-gray-700 bg-gray-200 dark:text-gray-200 text-gray-600 ml-4 py-1 px-5 inline-block rounded-3xl cursor-pointer border dark:border-gray-400'>
          <h2 className='sm:text-2xl text-lg font-medium inline-block'>{title}</h2>
        </div>
      }

      {/* FETHCING THHE POSTS */}
      <div className='flex flex-wrap gap-5 px-6 sm:px-0 mt-7 rounded-2xl sm:justify-center '>
        {posts?.length && posts?.map((post) => (
          <article href={`/${post.slug.current}`} className='w-full lg:w-80 sm:w-5/12 rounded-2xl flex flex-col relative border dark:border-gray-500 border-gray-300 dark:bg-gray-700 bg-gray-200 items-center min-h-96 py-4'>


            <Image
              src={urlForImage(post.mainImage).width(200).url()}
              width={400}
              height={500}
              alt="Picture of the author"
              className='lg:w-80 lg:h-48 sm:w-11/12 sm:h-56 -top-64 rounded-3xl px-2'
            />
            <div className='w-full h-full flex flex-col justify-center items-start gap-4 px-5 mt-5 '>
              <Link href={`/${post.slug.current}`} className='text-xl font-medium dark:text-gray-200 text-gray-600 '>{post.title}</Link>
              <p className='text-base dark:text-gray-400 text-gray-500'>Lorem ipsum dolor sit amet consectetur Libero sed vitae ...</p>

              <div className='flex flex-wrap gap-2 whitespace-nowrap'>
                {post?.tags?.slice(0, 2).map((tag, index) => (
                  <Link href={'/tags'} key={index} className='flex px-2 py-0.5 border rounded-md dark:border-gray-500 border-gray-400 hover:dark:bg-gray-600 hover:bg-gray-300 dark:text-gray-300 text-gray-500 transition-all'>{tag.capitalizedString()}</Link>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default PostContainer









{/* <Link href={`/${post.slug.current}`} className=' sm:w-[31%] overflow-hidden'>
            <article className='flex flex-col justify-evenly items-center h-full px-3 py-3 gap-6'>
              <div className='flex flex-col justify-center items-center gap-4'>
                <Image
                  src={urlForImage(post.mainImage).width(200).url()}
                  width={200}
                  height={100}
                  
                  alt="Picture of the author"
                  className='overflow-hidden rounded-xl w-32'
                />
                
              </div>
              <div className='flex flex-col dark:bg-gray-700  bg-gray-100'>
                <h3 className='text-sm '>{post.title}</h3>
                <p className='text-xs'>By Anuj nema</p>
                </div>
              <div className='w-full flex justify-end px-4'>
                <p className='text-sm text-gray-700 dark:text-slate-500'>{new Date(post._createdAt).toLocaleDateString(
                  "en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                }
                )}</p>
              </div>
            </article>
          </Link> */}