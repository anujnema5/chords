import React from 'react'
import HeadingBox from '@/components/HeadingBox'
import SocialMedia from '@/components/SocialIcons'
import { featuredCategory, details } from '@/utils/data'
import '@/utils/helper'
import PostContainer from '@/components/PostContainer'

const Home = ({posts}) => {
  return (
    <div className='w-full sm:p-8 p-6'>
        {/* THE HOMEPAGE SSECTION WHERE WE INTRODUCE THE SITE TO THE USER */}
          <div className='  sm:w-2/3 w-full py-3'>
            <h1 className='sm:text-4xl text-2xl font-bold dark:text-gray-300 text-gray-700'>{details.title.capitalizedString()} - Lorem, ipsum <br />Lorem ipsumt..</h1>
            <p className='mt-4 dark:text-gray-300 text-gray-500'>{details.desc}</p>
            <div className='social-media mt-8 text-gray-600'>
              <SocialMedia />
            </div>
          </div>

          {/* HERE DISPLAYING THE POPULAR CATEGORY OF THE WEBSITE */}
          <div className='bg-gray-200 dark:bg-gray-700 rounded-3xl mt-8 flex flex-col justify-center items-start sm:w-[100%] w-[97%] mx-auto lg:sm:py-28 py-32 h-60 px-7'>
            
            <h1 className='sm:text-3xl text-2xl font-semibold mx-auto xl:mx-5 dark:text-gray-300 text-gray-700'>Popular on Feeds 🔥</h1>

            <div className='flex flex-wrap gap-5 mt-7'>
              {featuredCategory?.map((tags) => (

                <div key={tags.id} className='cursor-pointer mx-auto border sm:w-64 w-28 sm:h-10 h-9 rounded-md dark:hover:bg-gray-600 hover:bg-gray-300 hover:scale-105 flex items-center justify-center border-gray-400 whitespace-nowrap transition-all' >
                  <div className='flex justify-between'>                    
                    <h3 className='sm:text-sm text-xs font-medium text-gray-600 dark:text-gray-50'>{tags.title.capitalizedString()}</h3>
                  </div>
                
                </div>
              ))}
            </div>
          </div>

          {/* POST CONTAINER */}
          <div className='post-container mt-6 sm:mt-8'>
          <PostContainer title="Latest Post 💡" posts={posts}/>
          </div>
        </div>
  )
}

export default Home