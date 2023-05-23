"use client"

import { headerNavLinks } from '@/utils/data';
import Link from 'next/link';
import React, { useState } from 'react'

const MobileNav = () => {
    const [navShow, setNavShow] = useState(false);

    const handleToggle = () => {
        setNavShow(!navShow)
    }

    return (
        <div className='cursor-pointer sm:hidden block'>
            <button onClick={handleToggle}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-7 mt-1"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            <div className={`fixed top-0 left-0 h-full w-full dark:bg-gray-800 bg-slate-200 z-40 opacity-95 ease-in-out duration-300 ${navShow ? "translate-x-0" : "translate-x-full"}`}>
                <div className='flex justify-end -mt-4 px-3'>
                    <button
                        type="button"
                        className="mr-5 mt-11 h-8 w-8 rounded"
                        aria-label="Toggle Menu"
                        onClick={handleToggle}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="text-gray-900 dark:text-gray-100"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                <nav>
                    {headerNavLinks?.map((link)=>(
                         <div key={link.title} className="px-12 py-4">
                         <Link
                           href={link.href}
                           className="text-2xl font-semibold tracking-widest text-gray-900 dark:text-gray-100"
                           onClick={handleToggle}
                         >
                           {link.title}
                         </Link>
                       </div>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export default MobileNav