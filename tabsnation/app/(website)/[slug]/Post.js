"use client"
import React from 'react'
import { PortableText } from '@portabletext/react'
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image'


const post = async ({ post }) => {
    // console.log(post);
    return (
        <div className=''> 
            <h1>{post.title}</h1>
            {post.mainImage && <Image
                src={urlForImage(post.mainImage).width(200).url()}
                width={500}
                height={300}
                alt="Picture of the author"
                className='overflow-hidden'
            />}
            <PortableText value={post.body} />
            {/* <PortableText value={post.categories} /> */}
        </div>

    )
}

export default post