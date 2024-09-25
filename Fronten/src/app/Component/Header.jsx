"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gradientStyle } from "../Elements/GradientStyle";
import { useState } from "react";
import Logo1 from "../../../public/MEMOVERSE (1).png"
import Logo2 from "../../../public/MEMOVERSE (2).png"
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import path from "path";




export default function Header() {


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="">
      <nav className="sm:grid sm:grid-cols-2">
        <div className="" style={gradientStyle}>
          <div
            className=" sm:container
        sm:mx-auto  pt-[60px] pb-[20px] sm:pb-[0] sm:pt-[60px]"
          >

            <div className=" sm:pl-[80px] flex justify-between container mx-auto px-6">
              {/* <img
                className="w-[126px] h-[26px]"
                alt="logo"
                src={`./MEMOVERSE (${path === "/" ? 2 : 1}).png`}
              /> */}
              {path === "/" ? (
                <Image
                  src={Logo1}
                  width={126}
                  height={26}
                  className="w-[126px] h-[26px]"
                  alt="Logo"
                />
              ) : (
                <Image
                  src={Logo2}
                  width={126}
                  height={26}
                  className="w-[126px] h-[26px]"
                  alt="Logo"
                />
              )}



              <div
              className="hidden sm:flex text-semibold font-medium  text-darkBrown space-x-6"
               
              >
                <Link
                  href="/"
                  className="text-black text-bold"
                >


                  <button className="">Home</button>
                </Link>

                <Link
                  href="/explore"
                  className="text-black text-bold"
                >
                  <button>Explore</button>
                </Link>

                <Link
                  href="/about-us"
                  className="text-black text-bold"
                >
                  <button>About us</button>
                </Link>

                

                
              </div>

              <div className="md:hidden mb-4 ">
                <button className="text-dark" onClick={toggleMenu}>
                  {isOpen ? (
                    <FaTimes className="text-2xl" />
                  ) : (
                    <FaBars className="text-2xl" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:grid bg-stone-950 ">
          <div
            className=" sm:container
        mx-auto p-[60px]"
          >
            <div className="hidden sm:grid justify-items-end">
              <Link href="/SignIn">
                <button
                  className="bg-gradient-to-r from-orange-400 px-5 py-2.5 
                  to-orange-400 text-white rounded-sm text-center"
                >
                  Connect Wallet
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed z-20 top-0 bg-stone-950
         right-0 bottom-0 left-0 flex flex-col 
         items-center gap-6 justify-center"
        >
          <button
            className="text-white absolute top-[60px] right-[40px]"
            onClick={toggleMenu}
          >
            <FaTimes className="text-2xl" />
          </button>

          <h3 className="text-white text-sm font-normal leading-none">
            <Link href="/">Home</Link>
          </h3>
          

          <h3 className="text-white text-sm font-normal leading-none">
          <Link href="/explore">
                  <button>Explore</button>
                </Link>
          </h3>
          
          <h3 className="text-white text-sm font-normal leading-none">
                <Link href="/about-us">
                  <button>About us</button>
                </Link>
          </h3>


          <Link href="/SignIn">
            <div className="flex">
              <button className=" bg-gradient-to-r from-orange-400 px-5 py-2.5  to-orange-400 text-white rounded-sm text-center ">
                Connect Wallet
              </button>
            </div>
          </Link>
        </div>
      )}
    </header>
  );
}