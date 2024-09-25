import BlogDummy from '@/Utils/dummyData';
import BlogPost from '@/app/Component/BlogPost';
import React from 'react'
import Link from "next/link"

const page = () => {
  return (
    <div className="sm:w-5/5 w-full pt-3">
      <p className="flex items-center gap-4 font-bold"></p>
      <div>
        <div className="sm:grid grid-cols-1 gap-3 sm:grid-cols-2">
          {BlogDummy.map((Blog) => (
            
            <Link href={`/dashboard/explore/${Blog.id}`}>
            <BlogPost
              key={Blog.id} // Add the 'key' prop with a unique identifier
              imgSrc={Blog.imgSrc}
              title={Blog.title}
              content={Blog.content}
              more={Blog.more}
              classname="px-6 grid"
            />
              </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page