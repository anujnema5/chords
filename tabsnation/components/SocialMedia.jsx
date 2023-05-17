"use client"

import React from 'react'
import Image from 'next/image'
import { FacebookFilled, GithubFilled, InstagramFilled, LinkOutlined, LinkedinFilled, LinkedinOutlined, MailFilled, MobileFilled, PhoneFilled, PlaySquareOutlined, RedditCircleFilled, RedditSquareFilled, YoutubeFilled } from '@ant-design/icons'
// import Facebook from '../public/Facebook.svg'

const SocialMedia = ({footer}) => {
    return (
        <div className={`flex ${footer ? "gap-4" : "gap-5"} px-3`}> 
            <InstagramFilled className={`dark:text-gray-200 text-gray-600  ${footer ? "scale-125" : "scale-150"} rounded-2xl`}/>
            <GithubFilled className={`dark:text-gray-200 text-gray-600  ${footer ? "scale-125" : "scale-150"} rounded-2xl`}/>
            <FacebookFilled className={`dark:text-gray-200 text-gray-600  ${footer ? "scale-125" : "scale-150"} rounded-2xl`}/>
            <RedditCircleFilled className={`dark:text-gray-200 text-gray-600  ${footer ? "scale-125" : "scale-150"} rounded-2xl`}/>
            <YoutubeFilled className={`dark:text-gray-200 text-gray-600  ${footer ? "scale-125" : "scale-150"} rounded-2xl`}/>
        </div>
    )
}

export default SocialMedia