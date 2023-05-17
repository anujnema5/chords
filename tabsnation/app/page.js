import HeadingBox from '@/components/HeadingBox'
import MobileNav from '@/components/MobileNav'
import SearchNav from '@/components/SearchNav'
import SectionContainer from '@/components/SectionContainer'
import SocialMedia from '@/components/SocialMedia'
import ThemeSwitch from '@/components/ThemeSwitch'
import { headerNavLinks, featuredCategory } from '@/data/headerNavLinks'
import Image from 'next/image'
import Link from 'next/link'
// import { InstagramOutlined } from '@ant-design/icons'
// import { MenuOutlined } from '@ant-design/icons'

export default function Home() {
  return (
    <SectionContainer>
      <div className='min-h-screen'>
        <header className='w-full  flex items-center justify-between px-5 py-7 border-b'>
          <div>
            <Link href={'/'}>
              <h1 className='sm:text-3xl font-bold text-2xl dark:text-light text-dark'>Tabsnation</h1>
            </Link>
          </div>

          <div className='hidden sm:flex gap-4'>
            {headerNavLinks?.map((link, index) => (
              <Link key={index} href={link.href} className='dark:text-white text-dark' style={{ fontWeight: "500", fontSize : "16px" }}>{link.title}</Link>
            ))}
          </div>

          <div>
            <div className='flex items-center justify-between gap-3 '>
              <ThemeSwitch />
              <MobileNav />
              <SearchNav />
            </div>
          </div>
        </header>

        <div className='w-full sm:p-8 p-6'>
          <div className='  sm:w-2/3 w-full py-3'>
            <h1 className='sm:text-4xl text-2xl font-bold text-dark dark:text-light'>Tabsnation - Lorem, ipsum <br />
              Lorem ipsumt.</h1>

            <p className='mt-4 dark:text-slate-300 text-slate-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quod et facilis saepe laboriosam dignissimos blanditiis hic consectetur autem. Repudiandae vero explicabo illo natus.</p>

            <div className='social-media mt-8'>
              <SocialMedia />
            </div>
          </div>

          <div className='bg-slate-200 dark:bg-slate-600 rounded-3xl mt-8 flex flex-col justify-center sm:w-[100%] w-[97%] mx-auto lg:sm:py-28 py-32 h-60 sm:px-7 px-9'>
            <h1 className='sm:text-3xl text-2xl font-semibold mx-auto xl:mx-0'>Popular Feeds 🔥</h1>

            <div className='flex flex-wrap gap-5 mt-6'>
              {featuredCategory?.map((tags) => (
                <div key={tags.id} className='cursor-pointer mx-auto border sm:w-64 w-28 sm:h-10 h-9 rounded-md dark:hover:bg-slate-500 hover:bg-slate-300 hover:scale-105 flex items-center justify-center border-slate-400 whitespace-nowrap transition-all' >
                  <div className='flex justify-between'>                    
                    <h1 className='sm:text-sm text-xs font-medium'>{tags.title}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-8 sm:mt-10'>
            <HeadingBox title="Latest Post 💡"/>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
