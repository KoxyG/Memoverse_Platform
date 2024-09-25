"use client"

import React, { useState } from "react";
import Logo from "../Component/Logo";
import Link from "next/link"
import Image from "next/image"
import Profile from "../../../public/profile.jpeg";
import { usePathname } from "next/navigation";
import { NavObject } from "@/Utils/dummyData";
import { GrSettingsOption, GrMenu, GrClose } from "react-icons/gr";
import Footer from "../Component/Footer";

const layout = ({ children }) => {

  const [open, setOpen] = useState(false)

   const showNav = () => {
     setOpen((prev) => !open);
    //  console.log("clicked")
   };

   const path = usePathname()
  //  console.log(path)
  return (
    <main>
      <section className="flex bg-darkBrown justify-between w-full pb-10 h-screen">
        {/* FOR MOBILE */}
        <div className="block sm:hidden pt-6 pl-3 z-20" onClick={showNav}>
          {open ? (
            <GrClose color="white" size={26} />
          ) : (
            <GrMenu size={26} color="white" />
          )}
        </div>

        {/* FOR THE SIDE PANE */}
        <nav
          className={`bg-brown rounded sm:grid ${
            open ? "grid" : "hidden"
          } justify-between text-white pl-10 py-[60px] w-[260px] absolute sm:relative `}
        >
          {/* FOR THE NAV LINKS */}

          <div className="grid justify-between place-content-between">
            <div className="grid gap-5">
              <Logo />
              {/* FOR THE ACTUAL NAV LINKS */}
              <ul className="grid gap-4">
                {NavObject.map((data) => (
                  <Link href={`${data.to}`} key={data.id} onClick={showNav}>
                    <li
                      className={` ${
                        path === data.to ? "text-gold" : ""
                      }  flex items-center gap-4 text-[16px] cursor-pointer`}
                      key={data.id}
                    >
                      {data.icon} {data.name}
                    </li>
                  </Link>
                ))}
              </ul>
              <div className="grid gap-4">
                <p className="font-bold text-lg">SETTINGS</p>
                <Link
                  href="/dashboard/settings"
                  className={`flex items-center gap-4 text-[16px] cursor-pointer ${
                    path === "/dashboard/settings" ? "text-gold" : ""
                  }`}
                  onClick={showNav}
                >
                  <GrSettingsOption size={24} /> Edit Profile
                </Link>
              </div>
            </div>

            {/* FOR THE LAST PART OF THE NAV BAR THAT CONTAINS THE PROFILE DETAILS */}
            <div className="text-[12px]">
              <div className="mb-4">
                <p className="font-bold">Wallet Address:</p>
                <p className="text-lightGold">
                  0x f768 912a 2016 45nn q710 o0c6 81b6 ny85 1776 934j
                </p>
              </div>
              <div>
                <p className="font-bold">Available Balance:</p>
                <p className="text-lightGold">765.8 ETH</p>
              </div>
            </div>
          </div>
        </nav>

        {/* FOR THE EVRYTHING ELSE IN THE DASHBOARD */}

        <section className="w-full px-4 pt-14 overflow-auto hide-scrollbar">
          <div className="grid sm:flex justify-between text-white pl-5 sm:pl-10">
            <div className=" w-full grid gap-2">
              <h2>Welcome to Memoverse.</h2>
              <p className="text-sm font-thin">Hello Primrose, welcome back!</p>
            </div>

            <div className=" w-full grid gap-2">
              <div className="sm:flex grid justify-evenly items-center">
                <div className="flex items-center gap-3">
                  <Image
                    src={Profile}
                    alt="logged in user's profile picture"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-full w-8 h-8"
                  />
                  <p>Primrose Roberts</p>
                  <p className="text-sm font-thin">
                    Follow my journey explorers
                  </p>
                </div>
                <div className="font-bold text-gold flex justify-between mt-3 sm:mt-0 gap-5">
                  <p>
                    120{" "}
                    <span className="font-normal text-white ">Blog Posts</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {children}
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default layout;
