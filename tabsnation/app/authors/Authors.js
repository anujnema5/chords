import Postparent from '@/components/Postparent'
import React from 'react'
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import PortableText from 'react-portable-text';
import RichText from '@/components/Richtext';

const Authors = ({authors}) => {
  // console.log(authors[0].bio[0].children[0].text);
  const bio = authors[0].bio[0].children[0].text
  return (
    // <Postparent cards={authors} title={"Authors"}/>
    <div className='mt-8 flex flex-col sm:items-start items-center justify-center gap-6 px-5 sm:px-10 '>
            <h1 className='sm:text-4xl text-2xl font-semibold dark:text-gray-200 text-gray-700'>Authors</h1>

            <div class=" w-full flex sm:flex-row flex-col flex-wrap items-center justify-between gap-4 sm:mt-3">
                {authors.length > 0 && authors.map((card, index) => (
                    <Link href={`/author/${card.slug.current}/`} key={index + 1} className='flex items-center dark:bg-gray-700 rounded-xl border dark:border-gray-500 border-gray-300 px-2 sm:w-2/5
              w-full sm:min-h-34 h-28 hover:scale-105 cursor-pointer transition-all'>
                        {
                            card.image ? (
                                <Image
                                    src={urlForImage(card.image).width(200).url()}
                                    width={200}
                                    height={100}
                                    alt='Picture of the author'
                                    className=' sm:w-5/12 sm:h-24 w-2/6 h-4/5 rounded-lg '
                                />
                            ) : ""
                        }
                        <div className='p-3 flex flex-col gap-2'>
                            <h2 className='sm:text-xl text-base font-semibold dark:text-gray-200 text-gray-700'>{card.name}</h2>
                            {/* <PortableText content={card.bio} component={RichText}/> */}
                            <p className='text-sm'>{bio.slice(0,60)}...</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
  )
}

export default Authors