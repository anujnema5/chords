import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'

const RichText = {
    types: {
        image: ({ value }) => {
            return (
                <div>
                    <Image
                        src={urlForImage(value)}
                        className='object-contain'
                        alt='Blog Post Image'
                        fill
                    />
                </div>
            )
        }
    },

    list: {
        bullet: (children) => (
            <ul className=''>{children}</ul>
        ),

        number: (children) => (
            <ol>{children}</ol>
        ),
    },

    block: {
        h1: ({ children }) => (
            <h1 className='text-2xl font-semibold text-slate-200'>{post.title}</h1>
        ),

        h2: ({ children }) => (
            <h2 className='text-2xl font-semibold py-3'>{children}</h2>
        ),

        h3: ({ children }) => (
            <h3 className='text-2xl font-semibold py-3'>{children}</h3>
        ),

        h4: ({ children }) => (
            <h4 className='text-xl font-semibold py-3'>{children}</h4>
        ),

        h5: ({ children }) => (
            <h5 className='text-2xl font-semibold py-3'>{children}</h5>
        ),

        h6: ({ children }) => (
            <h6 className='text-lg font-semibold py-3'>{children}</h6>
        ),

        normal: ({ children }) => (
            <span className='text dark:text-gray-200 text-gray-800 mb-5'>{children}</span>
        ),

        blockquote: ({ children }) => (
            <blockquote>{children}</blockquote>
        ),

        text : ({children}) => (
            <span className='text-orange-800'>{children}</span>
        )
    },
}
export default RichText;