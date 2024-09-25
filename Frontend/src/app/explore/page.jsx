"use client"

import React from "react";
import Link from "next/link";
import BlogDummy from "@/Utils/dummyData";
import BlogPost from "../Component/BlogPost";
import Header from "../Component/Header";

const page = () => {
  return (
    <section className="bg-darkBrown">
      {/* THIS SECTION IS FOR THE TOP MOST LAYER OF THE MAIN BODY OF THE DASHBOARD */}
    
    <Header/>
      {/* THIS SECTION IS FOR THE POST A BLOG AND HOW TO POST A BLOG INSTRUCTION BANNER */}
      

      {/* THIS SECTION IS FOR THE FEATURED BLOG POSTS */}
      <div className="sm:w-5/5 w-full pt-3 sm:px-5">
        <p className="flex items-center gap-4 font-bold">
        </p>
        <div>
          <div className="sm:grid grid-cols-1 gap-5 sm:grid-cols-3">
            {BlogDummy.map((Blog) => (
              <Link href={`/explore/${Blog.id}`}>
              <BlogPost
                key={Blog.id} // Add the 'key' prop with a unique identifier
                imgSrc={Blog.imgSrc}
                title={Blog.title}
                content={Blog.content}
                more={Blog.more}
                classname="px-6"
                />
                </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
