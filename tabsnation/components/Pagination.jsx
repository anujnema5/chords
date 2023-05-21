import React from 'react'
import Link from 'next/link'

const Pagination = ({ currentPage, totalPages, params }) => {
    const prevPage = currentPage - 1 > 0;
    const nextPage = currentPage + 1 <= totalPages;

    return (
        <div className='w-full pt-6 dark:text-slate-300 flex justify-between px-9 sm:px-5'>
            {prevPage && <Link href={currentPage - 1 === 1 ? `/${params}/` : `/${params}/page/${currentPage - 1}`}>
                <button rel="previous">Previous</button>
            </Link>}

            {!prevPage &&
                <button className='dark:text-gray-500' rel="previous" disabled={true}>Previous</button>
            }

            <span>
                {currentPage} of {totalPages}
            </span>


            {nextPage && (<Link href={`/${params}/page/${currentPage + 1}`}>
                <button rel="next">Next</button>
            </Link>)}


            {!nextPage && (
                <button className='dark:text-gray-500' rel="previous" disabled={true}>Next</button>
            )}
        </div>
    )
}

export default Pagination