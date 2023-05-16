"use client"

import React from 'react'
import Image from 'next/image'
import { FacebookFilled, InstagramFilled, LinkOutlined, LinkedinFilled, LinkedinOutlined, MailFilled, MobileFilled, PhoneFilled, RedditCircleFilled, RedditSquareFilled } from '@ant-design/icons'
// import Facebook from '../public/Facebook.svg'

const SocialMedia = () => {
    return (
        <div className='flex gap-5 px-1'>
            <InstagramFilled className='text-slate-700 scale-150 rounded-2xl'/>
            <FacebookFilled className='text-slate-700 scale-150 rounded-2xl'/>
            <LinkedinFilled className='text-slate-700 scale-150 rounded-2xl'/>
            <RedditCircleFilled className='text-slate-700 scale-150 rounded-2xl'/>
        </div>
    )
}

export default SocialMedia