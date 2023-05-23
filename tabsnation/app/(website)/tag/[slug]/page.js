import React from 'react'
import '../../../../utils/helper';
import { getPostByTags } from '@/sanity/lib/client';
import PostList from '@/components/PostList';
import { initPagination } from '../../../../utils/helper';
import { notFound } from 'next/navigation';

const page = async ({ params }) => {
    const queryString = params.slug.split("-").join(" ")
    const posts = await getPostByTags(queryString);
    const data = await initPagination(posts);

    return (
        <div>
            {posts.length > 0 ?
                <PostList params={params.slug} title={`Tag - #${params.slug.capitalizedString()}`} paginationData={data} /> :
                notFound()
            }
        </div>
    )
}

export default page