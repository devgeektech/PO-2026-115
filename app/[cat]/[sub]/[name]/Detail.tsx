"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import signupimg from "@/public/images/signup-btn.png";
import playnowimg from "@/public/images/playnow-btn.png";
import iconyellow from "@/public/images/iconyellow.svg";
import jackpot from "@/public/images/jackpot.png";
import infoicon from "@/public/images/infoicon.svg";
import deepSeaPredator from "@/public/images/Juwa/InGamePhotos/FishGames/deepSeaPredator.jpg";
import Modal from "@/components/Signup";
import FishGameSlider from "@/components/FishGameSlider";
import { ChevronDown, CrossIcon, Eye, EyeOff, XCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { TopTenGamesData } from "@/data/TopTenGamesData";
import CommonSlider from "@/components/CommonGameSlider";
import Signup from "@/components/Signup";

export default function Detail({
  cat,
  sub,
  name,
}: {
  cat: any;
  sub: any;
  name: any;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  console.log(cat, "cat", sub, "sub", name, "name");

  const [showPassword, setShowPassword] = useState(false);
  const [showReferral, setShowReferral] = useState(false);

  const game: any = TopTenGamesData[cat]?.subcategoies?.[sub]?.find(
    (item: any) =>
      item.key.toLowerCase().replace(/\s+/g, "-") === name.toLowerCase()
  );
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      videoRef.current?.play();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
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
          className="flex gap-2 items-center text-[20px] font-normal mb-6"
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
          {name}
        </h1>

        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="lg:col-span-1 rounded-xl">
            <Image
              className="w-full h-full object-cover rounded-xl"
              src={game.detailImage}
              width={300}
              height={400}
              alt="deepSeaPredator"
            />
          </div>

          {/* Game Info */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
              {/* Spin Info */}
              <div className="bg-neutral-900 rounded-xl p-5 flex items-center justify-center flex-col gap-4 border border-[#FFFFFF14]">
                <button
                  className="cursor-pointer flex justify-center border-2 border-white/10 bg-[#240833] p-[10px] rounded-[1rem] w-fit transition-all duration-300 hover:bg-[#64008b] hover:border-[#bc13fe]"
                  onClick={() => setOpen(true)}
                >
                  <Image
                    src={signupimg}
                    className="w-auto h-auto"
                    alt="signupimg"
                  />
                </button>
                {/* <button
                  className="cursor-pointer w-full"
                  onClick={() => setOpen(true)}
                >
                  <Image
                    src={playnowimg}
                    className="w-full h-auto"
                    alt="playnowimg"
                  />
                </button> */}
              </div>

              <div className="bg-neutral-900  rounded-xl p-5 flex items-center justify-center flex-col gap-4 border border-[#FFFFFF14]">
                {/* <button
                  className="cursor-pointer w-full"
                  onClick={() => setOpen(true)}
                >
                  <Image
                    src={signupimg}
                    className="w-full h-auto"
                    alt="signupimg"
                  />
                </button> */}
                <button
                  className="cursor-pointer flex justify-center border-2 border-white/10 bg-[#240833] p-[10px] rounded-[1rem] w-fit transition-all duration-300 hover:bg-[#64008b] hover:border-[#bc13fe]"
                  onClick={() => setOpen(true)}
                >
                  <Image
                    src={playnowimg}
                    className="w-auto h-auto"
                    alt="playnowimg"
                  />
                </button>
              </div>

              {/* Volatility */}
              {/* <div className="bg-neutral-900 rounded-xl p-5 border border-[#FFFFFF14]">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-400">Volatility</span>
                <span>Medium</span>
              </div>
              <div className="flex gap-1 bg-[#3C3B3B] border border-[#FFFFFF14] p-2 rounded-[4px]">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-[18px] w-[30px] flex-1 rounded ${
                      i < 4
                        ? "bg-gradient-to-b from-[#F8F961] to-[#A4FE61]"
                        : "bg-[#575757]"
                    }`}
                  />
                ))}
              </div>
            </div> */}
            </div>
            {/* Jackpot */}
            <div className="bg-neutral-900 rounded-xl ">
              <h3 className="text-[20px] font-normal p-4">
                Opt-In For A Chance To Win
              </h3>
              <div className="bg-neutral-800 p-2 rounded-lg flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <div className="">
                    <Image src={jackpot} alt="jackpot.png" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="font-medium text-[22px] flex gap-2">
                      Gold Coins Jackpot{" "}
                      <Image src={infoicon} alt="iconyellow.svg" />
                    </span>
                    <span className="text-yellow-400 text-[22px] font-bold flex gap-2">
                      <Image src={iconyellow} alt="infoicon.svg" />{" "}
                      GC6,982,948,542
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        {/* <div className="mb-12">
          <h2 className="text-lg font-semibold mb-4">
            Wild West Jackpot Features
          </h2>
          <div className="flex flex-wrap gap-3">
            {["OnlyPlay", "New Slots", "High Volatility", "Wild West"].map(
              (tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-neutral-900 rounded-full text-sm text-gray-300 cursor-pointer"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div> */}

        {/* Best For You */}
        <CommonSlider
          title="Top Ten Games"
          data={TopTenGamesData}
          type="detail"
          initialCategory={cat}
        />
        {/* <FishGameSlider /> */}
        {/* <Section title="Best For You" games={bestForYou} /> */}

        {/* New Releases */}
        {/* <Section title="New Releases" games={newReleases} /> */}
      </div>

      {/* <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className="flex justify-between items-start gap-2 flex-wrap">
          <h2 className="text-white text-xl font-semibold mb-4">SignUp</h2>
          <button
            className="cursor-pointer rounded-full p-2"
            onClick={() => setOpen(false)}
          >
            <XCircleIcon />
          </button>
        </div>

        <div className="">
          <form>
            <div className="w-full max-w-md mx-auto rounded-md bg-black text-white p-6 space-y-5">

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#bc13fe]"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#bc13fe]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <p className="text-xs text-gray-400">
                8-20 characters. At least one number & one uppercase letter.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#bc13fe]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#bc13fe]"
                />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Date of birth</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="relative">
                    <select className="w-full rounded-md appearance-none bg-[#2c2c2c] border border-[#444] px-4 py-3 text-white focus:outline-none focus:border-[#bc13fe]">
                      <option>Month</option>
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Day"
                    className="bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#bc13fe]"
                  />

                  <input
                    type="text"
                    placeholder="Year"
                    className="bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#bc13fe]"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowReferral(!showReferral)}
                className="cursor-pointer flex items-center gap-2 text-sm text-gray-400"
              >
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    showReferral ? "rotate-90" : ""
                  }`}
                />
                Referral code (optional)
              </button>

              {showReferral && (
                <input
                  type="text"
                  placeholder="Enter referral code"
                  className="w-full bg-[#2c2c2c] rounded-md border border-[#444] px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:border-[#bc13fe]"
                />
              )}
              <button
                onClick={() => setOpen(false)}
                className="cursor-pointer w-full bg-[#64008b] border-2 border-[#bc13fe]  text-white py-3 rounded-md font-semibold"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </Modal> */}
      <Signup isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}

/* ---------- Reusable Section Component ---------- */

function Section({
  title,
  games,
}: {
  title: string;
  games: { title: string; provider: string; image: string }[];
}) {
  return (
    <div className="mb-14">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button className="text-sm text-red-500 hover:text-red-400">
          See All
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {games.map((game, index) => (
          <div
            key={index}
            className="bg-neutral-900 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <Image
              src={game.image}
              alt={game.title}
              width={300}
              height={400}
              className="w-full h-52 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-medium">{game.title}</h3>
              <p className="text-xs text-gray-400">{game.provider}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
