"use client"
import React from 'react'
import { PortableText } from '@portabletext/react'
import { slice } from 'lodash'


const CardDescription = ({post}) => {
    let {body} = post;
    
  let first50Words = slice(body, 0, 30);
  
  return (
    <PortableText value={first50Words}/>
  )
}

export default CardDescription
