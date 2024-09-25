
"use client"

import { usePathname } from "next/navigation";
import Image from "next/image"



function BlogPost(props) {
  const path = usePathname()
  // console.log(props.imgSrc);

  const style = `
   ${path !== "/dashboard" ? "grid" : "sm:flex grid"}  
  text-xs m-2  gap-4 py-[20px]
  ${props.classname}
`;

  return (
    <div className="flex">
      {/* first blog */}
      <div className={style}>

        {/* <img alt="" className='w-[249px] h-[240px]' src={props.imgSrc} /> */}
        <Image className="max-w-full h-[auto]" alt="blog post image" src={props.imgSrc}/>
        <div>
          <h3 className="text-orange-300 text-xl font-semibold leading-7">
            {props.title}
          </h3>
          <p className="text-justify py-[12px] text-white text-opacity-80 text-base font-normal leading-snug">
            {props.content}
          </p>
          <p className="text-orange-300 flex items-center gap-3 text-base font-normal leading-snug">
            Read More
          {props.more}
          </p>
        </div>
      </div>
    </div>
  );
}



export default BlogPost;