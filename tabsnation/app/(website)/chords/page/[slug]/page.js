import React from 'react'
import { POSTS_PER_PAGE } from '@/app/(website)/posts/page';
import PostList from '@/components/PostList';
import { getChords } from '@/sanity/lib/client';

const page = async ({ params }) => {
    const posts = await getChords()

    const pageNumber = parseInt(params.slug);
    const initialDisplayPosts = posts.slice(POSTS_PER_PAGE * (pageNumber - 1), POSTS_PER_PAGE * pageNumber);

    const pagination = {
        currentPage : pageNumber,
        totalPages : Math.ceil(posts.length / POSTS_PER_PAGE)
    }

    return (
        <PostList params="chords" posts={posts} initialDisplayPosts={initialDisplayPosts} pagination={pagination} title="All Guitar/Ukulele Chords" />
    )
}

export default page