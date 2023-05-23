"use client"

import { urlForImage } from '@/sanity/lib/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Author from './Author';
import '../utils/helper';
import Tag from '../public/Tags.svg';
import Postcard from './Postcard';

const PostContainer = ({ title, posts }) => {

  return (
    <div className='h-auto py-2'>
      {title && (
        <div className='dark:bg-gray-700 bg-gray-200 dark:text-gray-200 text-gray-600 ml-4 py-1 px-5 inline-block rounded-3xl cursor-pointer border dark:border-gray-400'>
          <h2 className='sm:text-2xl text-lg font-medium inline-block'>{title}</h2>
        </div>
      )}

      <div className='flex flex-wrap gap-5 px-6 sm:px-0 mt-7 rounded-xl sm:justify-center'>
        {posts.length > 0 &&
          posts.map((post) => (
            <Postcard post={post}/>
          ))}
      </div>
    </div>
  );
};

export default PostContainer;

