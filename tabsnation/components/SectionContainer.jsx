import React from 'react'

import HeadingBox from '@/components/HeadingBox'
import MobileNav from '@/components/MobileNav'
import SearchNav from '@/components/SearchNav'
import SocialMedia from '@/components/SocialIcons'
import ThemeSwitch from '@/components/ThemeSwitch'
import { details, headerNavLinks } from '@/utils/data'
import Link from 'next/link'
import '../utils/helper'


const SectionContainer = ({ children }) => {
  return (

    <div className='xl:lg:max-w-5xl sm:max-w-3xl mx-auto transition-all border border-transparent' >
      <div className='min-h-screen flex flex-col'>

        <header className='w-full'>
          <nav className='flex items-center justify-between px-5 py-7 border-b dark:border-gray-600 border-gray-400'>
            <div>
              <Link href={'/'}>
                <h1 className='sm:text-3xl font-bold text-2xl dark:text-gray-200 text-gray-700'>{details.title.capitalizedString()}</h1>
              </Link>
            </div>

            <div className='hidden sm:flex gap-4'>
              {headerNavLinks?.map((link, index) => (
                <Link key={index} href={link.href} className='dark:text-slate-200 text-gray-700' style={{ fontWeight: "500", fontSize: "16px" }}>{link.title}</Link>
              ))}
            </div>

            <div className='flex items-center justify-between gap-3 '>
              <ThemeSwitch />
              <MobileNav />
              <SearchNav />
            </div>
          </nav>
        </header>

        <div className='flex-grow  flex flex-col'>
          {children}
        </div>

        <footer className='flex flex-col gap-4 p-2 pt-3 items-center justify-center border-t dark:border-gray-600   mt-6'>
          <div className='mt-3'>
          <SocialMedia footer={true} />
          </div>

          <div class="flex space-x-2 text-sm text-gray-500 dark:text-gray-400"><div>{details.title.capitalizedString()}</div><div> • </div><div>© 2023</div><div></div>All Rights Reserved</div>

          <div class="text-sm mb-2 text-gray-500 dark:text-gray-400 -mt-3">Designed • Developed by - <a href="">{details.developer.capitalizedString()}</a> </div>
        </footer>
      </div>
    </div>

  )
}

export default SectionContainer;