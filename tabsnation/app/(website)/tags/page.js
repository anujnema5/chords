
import { getTags } from '@/sanity/lib/client'
import Link from 'next/link';
import React from 'react'
import '../../../utils/helper';

const page = async () => {
  const tags = await getTags();

  const result = Array.from(tags.reduce((map, tag) => {
    map.set(tag, (map.get(tag) || 0) + 1);
    return map;
  }, new Map()), ([tags, length]) => ({ tags, length }));



  return (
    <>
      <div className='w-full  flex flex-col justify-center items-center '>
        <h1 className='text-4xl font-semibold mx-auto sm:mt-12 mt-10'>Tags</h1>
        <div className='flex gap-4 flex-wrap justify-center mt-7'>
          {result.length > 0 && result?.map((tag, index) => (
            <div class="tag">
              <Link href={`/tag/${tag.tags.kebabCase()}`} class="no-underline relative inline-block text-sm font-medium text-slate-100 group">
                <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 dark:bg-gray-100 bg-gray-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>
                <span class="relative block px-4 py-2 dark:bg-gray-600 bg-slate-100 border border-current dark:text-gray-200 text-gray-600">#{tag.tags.kebabCase().capitalizedString()} ({tag.length})</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default page