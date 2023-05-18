
import { urlForImage } from '@/sanity/lib/image'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
// import { PortableText } from '@portabletext/react'


const PostContainer = async ({ title, posts }) => {
  // posts.map((post)=>{
  //   console.log(post);
  // })

  // console.log(posts[3].categories[0]);
  return (
    <div className='h-auto '>

      {/* CATEGORY HEADING */}
      <div className='dark:bg-gray-700 bg-gray-200 dark:text-gray-200 text-gray-600 ml-4 py-1 px-5 inline-block rounded-3xl cursor-pointer border dark:border-gray-400'>
        <h2 className='sm:text-2xl text-lg font-medium inline-block'>{title}</h2>
      </div>

      {/* FETHCING THHE POSTS */}
      <div className='flex flex-wrap gap-5 justify-between px-5 items-center py-5 mt-5 rounded-2xl '>
        {posts?.length && posts?.map((post) => (
          <Link href={`/${post.slug.current}`} className='dark:bg-gray-700 border-2 bg-gray-100 sm:w-[31%] sm:h-96 w-full rounded-2xl'>
            <article className='flex flex-col justify-evenly items-center h-full px-3 py-3  gap-6'>
              <Image
                src={urlForImage(post.mainImage).width(200).url()}
                width={500}
                height={300}
                alt="Picture of the author"
                className='overflow-hidden'
              />
              <h2 className='text-lg '>{post.title}</h2>
              <div className='w-full flex justify-between px-4'>
                <button className='bg-white dark:text-gray-700 px-3 py-1 text-xs rounded-lg' >Read More</button>
                <p className='text-sm text-gray-700 dark:text-slate-500'>{new Date(post._createdAt).toLocaleDateString(
                  "en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                }
                )}</p>
                {/* <PortableText value={post.body} /> */}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PostContainer