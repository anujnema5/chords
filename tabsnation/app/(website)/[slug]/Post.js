"use client"
import React, { useState, useRef } from 'react'
import { PortableText } from '@portabletext/react'
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image'
import Richtext from '@/components/Richtext';
import { getAuthorForPost } from '@/sanity/lib/client';
import Link from 'next/link';
import Comment from '@/components/Comment';


const post = async ({ post }) => {
    const author = await getAuthorForPost(post.author._ref);
    const bio = author.bio[0].children[0].text



    return (
        <>
            <article className=' flex flex-col flex-wrap justify-center items-start px-5 mt-5' >
                <h1 className='sm:text-4xl font-medium text-left text-xl'>{post.title}</h1>

                <div className='flex items-center justify-center'>
                    <div className='flex author'>
                        <Link href={`/author/${author.slug.current}`} target='_blank' className=" flex border dark:border-gray-500 justify-center items-center dark:bg-gray-600 bg-gray-300 py-1 px-2 pr-6 my-6 gap-3 rounded-xl">

                            <Image
                                src={urlForImage(author.image).width(200).url()}
                                width={60}
                                height={120}
                                alt="Picture of the author"
                                className='object-cover h-10 w-10'
                                style={{ borderRadius: "50%" }}
                            />

                            <span className='text-sm hover:underline'>{author.name}</span>

                            <p className=' dark:text-gray-300 text-gray-500 text-sm'>{new Date(post._createdAt).toLocaleDateString("en-IN", {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}</p>

                        </Link>
                    </div>

                    <button className='fixed rounded-xl bottom-11 right-11 bg-green-700 w-20 h-7'>
                        Play
                    </button>
                </div>

                <div className='sm:w-2/3 w-full border dark:border-gray-500 mb-5'></div>
                <section className='w-full break-words'>
                    <PortableText value={post.body} components={Richtext} />
                </section>

                <div className='sm:w-8/12 lg:w-6/12 w-full dark:bg-gray-700 rounded-2xl py-4 px-4 mb-8 border dark:border-gray-600 border-gray-300 sm:mt-14 mt-10'>
                    <div className='flex justify-center items-center gap-3'>
                        <Image
                            src={urlForImage(author.image).width(200).url()}
                            width={70}
                            height={200}
                            alt="Picture of the author"
                            className='object-cover h-16 w-16 sm:w-20 sm:h-20'
                            style={{ borderRadius: "50%" }}
                        />

                        <div className='flex flex-col items-start justify-center gap-1'>
                            <Link href={`/author/${author.slug.current}`} className=' whitespace-nowrap sm:text-2xl text-lg font-medium dark:text-gray-300 text-gray-700 '>Author - &nbsp;
                                <span className='hover:underline'>{author.name}</span>
                            </Link>
                            <span className='dark:text-gray-300 text-gray-600 sm:text-sm text-xs'>{bio.slice(0, 100)}</span>
                        </div>

                    </div>
                </div>
            </article>
            {/* COMMENT SECTION */}
            <Comment />

        </>
    )
}

export default post