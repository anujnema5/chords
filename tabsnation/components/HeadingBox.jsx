import React from 'react'

const HeadingBox = ({title}) => {
    return (
        <div className='dark:bg-slate-600 bg-slate-300 ml-4 py-1 px-5 inline-block rounded-3xl cursor-pointer border dark:border-slate-400'>
            <h2 className='sm:text-2xl text-lg font-medium inline-block'>{title}</h2>
        </div>
    )
}

export default HeadingBox