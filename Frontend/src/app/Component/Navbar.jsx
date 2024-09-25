import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" hidden sm:flex text-bold font-medium  space-x-20 text-white px-20 py-10 ">
      
      <Link href="/">
        <button className="">Home</button>
      </Link>

      <Link href="/explore">
        <button>Explore</button>
      </Link>

      <Link href="/about-us">
        <button>About us</button>
      </Link>

      <Link href="/dashboard">
        <button>Dashboard</button>
      </Link>
      <Link href="/SignIn">
        <div className="flex">
          <button className=" bg-gradient-to-r from-orange-400 px-10 py-2.5  to-orange-400 text-white rounded-sm text-center mx-24">
            Connect Wallet
          </button>
        </div>
      </Link>
     
    </div>
  );
}