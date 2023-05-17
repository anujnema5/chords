import React from 'react'

const HeadingBox = ({title}) => {
    return (
        <div className='dark:bg-gray-700 bg-gray-200 dark:text-gray-200 text-gray-600 ml-4 py-1 px-5 inline-block rounded-3xl cursor-pointer border dark:border-gray-400'>
            <h2 className='sm:text-2xl text-lg font-medium inline-block'>{title}</h2>
        </div>
    )
}

export default HeadingBox