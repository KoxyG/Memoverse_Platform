import React from 'react'
import Image from "next/image"
import Link from "next/link"
import memoverse from "../../../public/MEMOVERSE (1).png"

const Logo = () => {
  return (
   <Link href="/">
    <Image
    src={memoverse}
    objectFit='cover'
    objectPosition='center'
    alt='Memoverse logo'
    className=''
    />
   </Link>
  )
}

export default Logo