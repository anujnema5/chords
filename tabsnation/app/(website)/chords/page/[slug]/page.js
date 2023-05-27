import React from 'react'
import { POSTS_PER_PAGE } from '@/app/(website)/posts/page';
import PostList from '@/components/PostList';
import { getChords } from '@/sanity/lib/client';
import { dynamicPagination } from '@/utils/helper';

const page = async ({ params }) => {
    const posts = await getChords()
    const data = await dynamicPagination(params.slug, posts);

    return (
        <PostList params="chords" title={`All Guitar/Ukulele Chords`} paginationData={data}/>
    )
}

export default page