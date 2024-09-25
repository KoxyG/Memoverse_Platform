import LogIn from "../Component/LogIn";
import { gradientStyle } from "../Elements/GradientStyle";
import Image from "next/image";


export default function SignIn() {
  
  return (
    <div className="sm:grid sm:grid-cols-2">
      {/* right seection */}
      <section style={gradientStyle} className="">
        <div
          className="container
          mx-auto px-[60px] py-[80px]  text-center"
        >
          <h1 className=" text-orange-400 text-[30px] font-bold leading-[52px]">
            Unlock the Gateway to Your <br />
            Memories and Imagination!
          </h1>
          <p className="text-stone-950 pt-[10px] text-base font-normal leading-snug">
            Sign In now to preserve your precious moments, share your <br />
            adventures, and inspire others with your unique perspective
          </p>

          <Image
            src="/SignIn-Icon.png"
            width={350}
            height={350}
            alt="sigIn-Illustration"
            className="inline-block align-middle pt-[64px]"
          />
        </div>
      </section>

      {/* left section */}
      <section className="bg-stone-950">
        <div
          className="container
     mx-auto p-[60px]"
        >
          <Image className="" width={100} height={100} alt="logo" src="/MEMOVERSE (1).png" />
          <h1 className="text-center pt-[100px] pb-[70px] text-white text-[44px] font-bold leading-[58px]">
            Sign in
          </h1>
          <div className="flex justify-center pt-[50px]">
          <LogIn />
          </div>
        </div>
      </section>
    </div>
  );
}