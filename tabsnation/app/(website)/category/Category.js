import Postparent from '@/components/Postparent'
import Image from 'next/image'
import Link from 'next/link'


const category = ({categories}) => {
    return (
        <Postparent cards={categories} title={"Categories"}/>
    )
}

export default category