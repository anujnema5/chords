import PostList from '@/components/PostList'
import { getPostByAuthors, getPostByCategories } from '@/sanity/lib/client'
import { initPagination } from '@/utils/helper'
import '@/utils/helper'
import { dynamicPagination } from '@/utils/helper'
import { notFound } from 'next/navigation'
import React from 'react'
import { getPostByAuthorsSlug } from '@/sanity/lib/client'

const page = async ({ params }) => {
    const query = params.slug;

    let posts
    let data = [];

    if (query.length > 1) {
        posts = (await getPostByAuthorsSlug(query[0]))[0].posts
        data = await dynamicPagination(query[params.slug.length - 1], posts)


    } else {
        posts = (await getPostByAuthorsSlug(query[0]))[0].posts;
        data = await initPagination(posts);
    }

    return (
        posts.length > 0 ?
            <PostList params={`author/${query[0]}/`} title={`Author - ${query[0].capitalizedString().SplitJoin()}`} paginationData={data} /> : notFound()
    )
}

export default page