import React from 'react'
import Link from 'next/link'

const Pagination = () => {
    return (
        <div>
            <button rel="previous" className="cursor-auto disabled:opacity-50" >
                Previous
            </button>

            <Link href={`/blog/page/${1}`}>
                <button rel="next">Next</button>
            </Link>
        </div>
    )
}

export default Pagination