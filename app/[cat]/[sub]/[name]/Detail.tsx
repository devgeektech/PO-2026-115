"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import createaccount from "@/public/images/createaccount_btn.gif";
import playnowimg from "@/public/images/biggestjackpot_video.gif";
import { useRouter } from "next/navigation";
import { TopTenGamesData } from "@/data/TopTenGamesData";
// import CommonSlider from "@/components/CommonGameSlider";
import Signup from "@/components/Signup";
// import JackpotSlider from "@/components/JackpotSlider";

import dynamic from "next/dynamic";

const CommonSlider = dynamic(
  () => import("@/components/CommonGameSlider"),
  { ssr: false, loading: () => <div className="h-40" /> }
);

const JackpotSlider = dynamic(
  () => import("@/components/JackpotSlider"),
  { ssr: false }
);


export default function Detail({
  cat,
  sub,
  name,
}: {
  cat: any;
  sub: any;
  name: any;
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  console.log(cat, "cat", sub, "sub", name, "name");

  const game: any = TopTenGamesData[cat]?.subcategoies?.[sub]?.find(
    (item: any) =>
      item.key.toLowerCase().replace(/\s+/g, "-") === name.toLowerCase(),
  );

  return (
    <>
      <div className="bg-black text-white">
        {/* Breadcrumb */}
        {/* <ul className="text-sm text-white mb-6 flex gap-2 items-center">
          <li>
            <Link className="text-sm text-white" href={"/"}>
              {name}
            </Link>
          </li>{" "}
        
        </ul> */}

        <h1
          className="flex gap-2 items-center text-[20px] font-normal mb-6 w-fit"
          onClick={() => router.push("/")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left-icon lucide-arrow-left"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>{" "}
          <label className="cursor-pointer capitalize">{name}</label>
        </h1>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="lg:col-span-1 rounded-xl">
            {/* <img
              className="w-full h-full object-cover rounded-xl"
              src={game.detailImage}
              // width={300}
              // height={400}
              alt="deepSeaPredator"
            /> */}
            <Image
              className="max-w-[1200px] w-full h-full object-cover rounded-xl"
              src={game.detailImage}
              width={1200}
              height={700}
              quality={60}
              alt="deepSeaPredator"
            />
          </div>

          {/* Game Info */}
          <div className="space-y-6">
            {/* <div className="grid grid-cols-1 sm:grid-cols-1 gap-6"> */}
            {/* Spin Info */}
            <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 gap-6 rounded-xl p-5 gap-4 border border-[#FFFFFF14]">
              <button
                className="cursor-pointer flex justify-center border-2 border-white/10 bg-[#240833] p-[10px] rounded-[1rem] w-fit transition-all duration-300 hover:bg-[#64008b] hover:border-[#bc13fe]"
                onClick={() => setOpen(true)}
              >
                <Image
                  src={createaccount}
                  className="max-w-[300px] h-auto w-full"
                  alt="signupimg"
                />
              </button>
              <button
                className="cursor-pointer flex justify-center border-2 border-white/10 bg-[#240833] px-[10px] rounded-[1rem] w-fit transition-all duration-300 hover:bg-[#64008b] hover:border-[#bc13fe]"
                onClick={() => {
                  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                    window.location.href = "sms:+12145515913";
                  } else {
                    setOpen(true); // desktop behavior
                  }
                }}
              >
                <Image
                  src={playnowimg}
                  className="max-w-[300px] h-auto w-full"
                  alt="playnowimg"
                />
              </button>
            </div>
            {/* Jackpot */}

            <JackpotSlider />
          </div>
        </div>

        {/* Best For You */}
        <CommonSlider
          title="Top Ten Games"
          data={TopTenGamesData}
          type="detail"
          initialCategory={cat}
        />
        {/* <Section title="Best For You" games={bestForYou} /> */}

        {/* New Releases */}
        {/* <Section title="New Releases" games={newReleases} /> */}
      </div>

      <Signup isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
