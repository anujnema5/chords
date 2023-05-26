"use client"

import React from 'react'
import Image from 'next/image'
import { FacebookFilled, GithubFilled, InstagramFilled, LinkOutlined, LinkedinFilled, LinkedinOutlined, MailFilled, MobileFilled, PhoneFilled, PlaySquareOutlined, RedditCircleFilled, RedditSquareFilled, YoutubeFilled } from '@ant-design/icons'
import Link from 'next/link'
// import Facebook from '../public/Facebook.svg'

const SocialIcons = ({ footer }) => {
    return (
        <div className={`flex ${footer ? "gap-4" : "gap-5"} px-3`}>
            <Link href={'https://instagram.com'} target="_blank">
                <InstagramFilled className={`dark:text-gray-200 text-gray-600  ${footer ? "scale-125" : "scale-150"} rounded-2xl`} />
            </Link>
            <Link href={'https://github.com'} target="_blank">
                <GithubFilled className={`dark:text-gray-200 text-gray-600  ${footer ? "scale-125" : "scale-150"} rounded-2xl`} />
            </Link>

            <Link href={'https://facebook.com'} target="_blank">
                <FacebookFilled className={`dark:text-gray-200 text-gray-600  ${footer ? "scale-125" : "scale-150"} rounded-2xl`} />
            </Link>

            <Link href={'https://reddit.com'} target="_blank">
                <RedditCircleFilled className={`dark:text-gray-200 text-gray-600  ${footer ? "scale-125" : "scale-150"} rounded-2xl`} />
            </Link>

            <Link href={'https://youtube.com/'} target="_blank">
                <YoutubeFilled className={`dark:text-gray-200 text-gray-600  ${footer ? "scale-125" : "scale-150"} rounded-2xl`} />
            </Link>
        </div>
    )
}

export default SocialIcons