import PostList from '@/components/PostList'
import { getPostByCategories } from '@/sanity/lib/client'
import { initPagination } from '@/utils/helper'
import '@/utils/helper'
import { dynamicPagination } from '@/utils/helper'
import { notFound } from 'next/navigation'
import React from 'react'

const page = async ({ params }) => {
    const query = params.slug;

    let categories
    let data = [];

    if (query.length > 1) {
        categories = await getPostByCategories(query[0]);
        data = await dynamicPagination(query[params.slug.length - 1], categories)


    } else {
        categories = await getPostByCategories(query);
        // console.log(categories);
        data = await initPagination(categories);
    }

    return (
        categories.length > 0 ? 
            <PostList params={`category/${query[0]}/`} title={`Category - ${query[0].capitalizedString().SplitJoin()}`} paginationData={data} /> : notFound()
        

    )
}

export default page