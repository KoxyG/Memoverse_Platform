import React from "react";
import BlogPost from "@/app/Component/BlogPost";
import BlogDummy from "@/Utils/dummyData";
import View from "../../../../public/profile.jpeg";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/Component/Button";
import { GrFavorite } from "react-icons/gr";
import BlogImage from "../../../../public/B-frame4.png";
import Header from "@/app/Component/Header";
import Footer from "@/app/Component/Footer";

const page = ({params}) => {

  const id = params.id

  return (
    <main className="w-full bg-darkBrown">
      <Header />

      <section className="w-[90%] mx-auto py-6 grid sm:flex justify-between">
        {BlogDummy.filter((blog) => blog.id === +id).map((data) => (
          <div className="w-full sm:w-[57%] text-white" key={data.id}>
            <div className="text-center grid gap-5">
              <h1 className="font-bold text-3xl text-gold border-b border-white pb-10 relative">
                {data.title}
              </h1>
              <div className="bg-darkBrown absolute hidden   sm:top-[48%] sm:left-1/4 px-8 w-auto h-auto sm:grid">
                <span >
                  01/03/2023
                </span>
              </div>
              <div className="bg-darkBrown absolute sm:hidden  bottom-1/3 right-1/3 px-8 w-auto h-auto grid">
                <span >
                  01/03/2023
                </span>
              </div>

              <div className="text-center flex mx-auto justify-center">
                <p className="flex items-center gap-5">
                  By:{" "}
                  <span className="flex items-center gap-3">
                    <Image src={View} className="rounded-full" alt="" /> Primose
                    Roberts
                  </span>
                </p>
              </div>
              <div className="flex w-full sm:w-3/5 mx-auto justify-around">
                <Button
                  title="Edit Post"
                  type="button"
                  classname=" rounded border text-sm border-white bg-gold text-white"
                />
                <Button
                  title="Delete Post"
                  type="button"
                  classname="bg-transparent text-sm rounded border border-white text-white"
                />
                <p className="flex gap-2 items-center font-bold">
                  <GrFavorite color="white" />{" "}
                  <span className="text-gold ">26.6k</span> Likes
                </p>
              </div>

              <div className="py-5 grid gap-5">
                <Image
                  src={data.imgSrc}
                  className="w-full rounded-md h-[320px] block"
                />
                <div className="grid gap-5 text-justify">
                  <p>{data.content}</p>
                  <p>
                    From the iconic landmarks of bustling cities to the hidden
                    gems tucked away in remote corners of the world, each
                    destination has been a treasure trove of memories waiting to
                    be unraveled. As the sun dipped behind the horizon, painting
                    the sky with hues of orange and pink, I found myself
                    standing in awe before the majestic wonders of nature. The
                    towering mountains embraced me with their rugged beauty,
                    inviting me to conquer their peaks and embrace the thrill of
                    adventure.
                  </p>
                  <p>
                    Venturing into the heart of ancient civilizations, I
                    immersed myself in the rich history and cultural tapestry
                    that adorned the cobblestone streets. Conversations with
                    locals unfolded like lyrical poems, painting vivid pictures
                    of traditions and customs passed down through generations.
                    Everywhere I turned, there were moments of serendipity and
                    encounters with kindred spirits from all walks of life. We
                    bonded over shared laughter, exchanged stories, and
                    celebrated the joy of living in the present moment. But it
                    wasn't just the iconic landmarks or stunning vistas that
                    left an indelible mark on my heart. It was the essence of
                    each place—the smell of spices in bustling markets, the
                    warmth of the sun on my skin, and the symphony of languages
                    merging into a harmonious melody—that truly made each
                    experience unforgettable.
                    <p>
                      Capturing the essence of these adventures was both an
                      exhilarating and humbling experience. Through the lens of
                      my camera, I sought to freeze moments in time, preserving
                      the magic and emotions that come alive with every glance.
                      Each photograph in my gallery is a piece of my heart, a
                      fragment of my soul shared with you, dear readers. It is
                      my hope that these visual stories will inspire you to
                      embrace wanderlust and ignite the desire to explore the
                      beauty that lies beyond our comfort zones. So, as we
                      journey through these unforgettable adventures together,
                      let's celebrate the boundless spirit of exploration and
                      the unquenchable thirst for discovery.
                    </p>
                  </p>
                  <p>
                    Join me in embracing the beauty of wanderlust, for the world
                    is a canvas waiting to be painted with the brushstrokes of
                    our experiences. Let's set forth on this grand voyage, where
                    every twist and turn leads to the unexpected, and where
                    every encounter becomes a cherished memory. The world is
                    vast, and our hearts are boundless—let's embrace the magic
                    of unforgettable adventures around the world! 🌏🌟🚀
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="grid w-full sm:w-[39%]">
          <p className="font-bold text-white text-lg py-4 tracking-wide">
            Top match blogs for you
          </p>
          {BlogDummy.filter((data) => data.id !== +id).map((Blog) => (
            <BlogPost
              key={Blog.id} // Add the 'key' prop with a unique identifier
              imgSrc={Blog.imgSrc}
              title={Blog.title}
              content={Blog.content}
              more={Blog.more}
              classname="grid"
            />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;
