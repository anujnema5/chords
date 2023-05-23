import { getCategories } from '@/sanity/lib/client'
import React from 'react'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

const page = async () => {
  const categories = await getCategories()

  return (
    <div className='mt-8 flex flex-col sm:items-start items-center justify-center gap-6 px-5 sm:px-10 '>
      <h1 className='sm:text-4xl text-2xl font-semibold dark:text-gray-200 text-gray-700'>Categories</h1>

      <div class=" w-full flex sm:flex-row flex-col flex-wrap items-center justify-between gap-4 sm:mt-3">
        {categories.length > 0 && categories.map((category) => (
          <Link href={`/category/${category.slug.current}/`} className='flex items-center dark:bg-gray-700 rounded-xl border dark:border-gray-500 border-gray-300 px-2 sm:w-2/5
              w-full sm:min-h-34 h-28 hover:scale-105 cursor-pointer transition-all'>
            {
              category.mainImage ? (
                <Image
                  src={urlForImage(category.mainImage).width(200).url()}
                  width={200}
                  height={100}
                  alt='Picture of the author'
                  className=' sm:w-5/12 sm:h-24 w-2/6 h-4/5 rounded-lg '
                />
              ) : ""
            }
            <div className='p-3 flex flex-col gap-2'>
              <h2 className='sm:text-xl text-base font-semibold dark:text-gray-200 text-gray-700'>{category.title}</h2>
              <p className='text-sm dark:text-gray-400 text-gray-500'>{category.description.slice(0, 25)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default page