import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import Image from "next/image"
import Profile from "../../../public/profile.jpeg"
// import Placeholder from "../../../public/Signin-Icon.png"
import Button from '../Component/Button'
import BlogDummy from '@/Utils/dummyData'
import BlogPost from '../Component/BlogPost'
import Link from 'next/link'

const page = () => {
  return (
    <section className="text-white">
      {/* THIS SECTION IS FOR THE TOP MOST LAYER OF THE MAIN BODY OF THE DASHBOARD */}
     

      {/* THIS SECTION IS FOR THE POST A BLOG AND HOW TO POST A BLOG INSTRUCTION BANNER */}
      <div className="sm:flex sm:gap-7 grid gap-3 justify-between mt-6">
        {/* FOR THE POST A BLOG POST BANNER */}
        <div className="bg-lightGold sm:flex grid justify-between gap-2 sm:gap-5 w-full sm:w-3/5 rounded-2xl p-3">
          <Image
            src="/placeholder.png"
            alt="Digital creative illustration"
            objectFit="cover"
            objectPosition="center"
            width={200}
            height={200}
            priority
            className="block w-[60%] m-auto sm:w-1/2 h-auto"
          />
          <div className="grid justify-between place-items-center">
            <h2 className="text-gold font-bold sm:text-2xl text-lg">
              Memoverse - empower your Your Memories and Stories
            </h2>
            <p className="text-black text-xs font-semibold my-1">
              A Decentralized Application for Creative Expression and Eternal
              Photo Albums
            </p>
            <Link href="/post-blog">
            <Button title="Post a blog" classname="w-full rounded-md py-1 px-2 text-sm" />
            </Link>
          </div>
        </div>

        {/* FOR THE HOW TO POST A BLOG POST INSTRUCTION */}
        <div className="w-full sm:w-2/5 bg-lightGold grid gap-3 rounded-2xl p-6">
          <h2 className="font-bold text-gold tracking-wider">
            How to create new blog post or photo ablum{" "}
          </h2>
          <ul className="text-black text-sm  grid gap-1 sm:text-base list-disc sm:pt-2 pt-1">
            <li>Create New Blog Post</li>
            <li>Fill out the form and input all the necessary details </li>
            <li>Compose Your Masterpiece</li>
            <li>
              {" "}
              Viola! 🎉 Let Memoverse create the magic as you hit the "Publish"
              button
            </li>
          </ul>
        </div>
      </div>

      {/* THIS SECTION IS FOR THE FEATURED BLOG POSTS */}
      <div className='sm:w-3/5 w-full pt-5'>
        <p className='flex items-center gap-4 font-bold'>
          Top Match Blog For You <IoIosArrowDown />
        </p>
        <div>
          <div className="sm:grid ">
            {BlogDummy.map((Blog) => (
              <BlogPost
                key={Blog.id} // Add the 'key' prop with a unique identifier
                imgSrc={Blog.imgSrc}
                title={Blog.title}
                content={Blog.content}
                more={Blog.more}
                classname="-px-6"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default page