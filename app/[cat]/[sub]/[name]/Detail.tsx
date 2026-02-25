"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import createaccount from "@/public/images/createaccount_btn.gif";
import playnowimg from "@/public/images/biggestjackpot_video.gif";
import iconyellow from "@/public/images/iconyellow.svg";
import jackpot from "@/public/images/jackpot.png";
import infoicon from "@/public/images/infoicon.svg";
import deepSeaPredator from "@/public/images/Juwa/InGamePhotos/FishGames/deepSeaPredator.jpg";
import Modal from "@/components/Signup";
import {
  ChevronDown,
  Clock,
  CrossIcon,
  Eye,
  EyeOff,
  XCircleIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { TopTenGamesData } from "@/data/TopTenGamesData";
import CommonSlider from "@/components/CommonGameSlider";
import Signup from "@/components/Signup";
import TextType from "@/components/TextType";

const initialVideos = [
  {
    src: "/images/onlineSlots/GamesLogoAnimation/pandaMaster.mp4",
    shadow: "shadow-[inset_0px_0px_20px_#470203]",
    border: "border-[#8b5055]",
  },
  {
    src: "/images/onlineSlots/GamesLogoAnimation/riversweeps.mp4",
    shadow: "shadow-[inset_0px_0px_20px_#6c3ad5]",
    border: "border-[#9967e4]",
  },
  {
    src: "/images/onlineSlots/GamesLogoAnimation/vblink.mp4",
    shadow: "shadow-[inset_0px_0px_20px_#5b1288]",
    border: "border-[#992cc1]",
  },
  {
    src: "/images/onlineSlots/GamesLogoAnimation/gameVault.mp4",
    shadow: "shadow-[inset_0px_0px_20px_#842158]",
    border: "border-[#ef70bb]",
  },
  {
    src: "/images/onlineSlots/GamesLogoAnimation/cashFrenzy.mp4",
    shadow: "shadow-[inset_0px_0px_20px_#470203]",
    border: "border-[#8b5055]",
  },
  {
    src: "/images/onlineSlots/GamesLogoAnimation/cashMachine.mp4",
    shadow: "shadow-[inset_0px_0px_20px_#72039a]",
    border: "border-[#ab499f]",
  },
  {
    src: "/images/onlineSlots/GamesLogoAnimation/fabulourJuwa.mp4",
    shadow: "shadow-[inset_0px_0px_20px_#0012f5]",
    border: "border-[#4285f6]",
  },
  {
    src: "/images/onlineSlots/GamesLogoAnimation/FireKerin.mp4",
    shadow: "shadow-[inset_0px_0px_20px_#421d10]",
    border: "border-[#97696b]",
  },
  {
    src: "/images/onlineSlots/GamesLogoAnimation/gameRoom.mp4",
    shadow: "shadow-[inset_0px_0px_20px_#3e2000]",
    border: "border-[#e3ba52]",
  },
  {
    src: "/images/onlineSlots/GamesLogoAnimation/Juwa.mp4",
    shadow: "shadow-[inset_0px_0px_20px_#4c1f45]",
    border: "border-[#d054b0]",
  },
  {
    src: "/images/onlineSlots/GamesLogoAnimation/milkyWays.mp4",
    shadow: "shadow-[inset_0px_0px_20px_#3b1c32]",
    border: "border-[#d29ea9]",
  },
  {
    src: "/images/onlineSlots/GamesLogoAnimation/orionstars.mp4",
    shadow: "shadow-[inset_0px_0px_20px_#5f074c]",
    border: "border-[#f80094]",
  },
  {
    src: "/images/onlineSlots/GamesLogoAnimation/wegasweaps.mp4",
    shadow: "shadow-[inset_0px_0px_20px_#6e0735]",
    border: "border-[#fba7f6]",
  },
];
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
  const shuffleArray = (array: typeof initialVideos) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const [videos, setVideos] = useState(() => shuffleArray(initialVideos));
  const game: any = TopTenGamesData[cat]?.subcategoies?.[sub]?.find(
    (item: any) =>
      item.key.toLowerCase().replace(/\s+/g, "-") === name.toLowerCase()
  );

  const [liveData, setLiveData] = useState<{ points: number; time: string }[]>(
    []
  );

  useEffect(() => {
    const generateRandomTime = () => {
      // total seconds between 5 sec and 5 min (300 sec)
      const totalSeconds = Math.floor(Math.random() * (300 - 5 + 1)) + 5;

      if (totalSeconds < 60) {
        return `${totalSeconds} seconds ago`;
      } else {
        const minutes = Math.floor(totalSeconds / 60);
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
      }
    };

    const generateRandomPoints = () => {
      return Math.floor(Math.random() * (4500 - 60 + 1)) + 60;
    };

    const data = Array(9)
      .fill(null)
      .map(() => ({
        points: generateRandomPoints(),
        time: generateRandomTime(),
      }));

    setLiveData(data);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVideos((prev) => shuffleArray(prev));
    }, 40000);

    return () => clearInterval(interval);
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
            <img
              className="w-full h-full object-cover rounded-xl"
              src={game.detailImage}
              // width={300}
              // height={400}
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
            <div className="bg-neutral-900 rounded-xl">
              <h3 className="text-[20px] font-normal p-4">
                Real Players, Real Wins – Live!
              </h3>
              <div className="bg-neutral-800 marquee p-2 rounded-lg flex gap-2 items-center justify-between">
                <div className="marquee-track">
                  {videos.map((video, index) => (
                    <div key={index}>
                      <div
                        className={`flex min-w-[250px] gap-3 relative rounded-[20px] items-center video_wrap ${video.shadow} p-4 border ${video.border}`}
                      >
                        <div>
                          <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="min-w-[75px] min-h-[75px] w-[75px] h-[75px] rounded-[6px] overflow-hidden"
                          >
                            <source src={video.src} type="video/mp4" />
                          </video>
                        </div>

                        <div className="flex flex-col gap-3">
                          <span className="text-[#979797] absolute right-4 top-1 text-[12px] flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {liveData[index]?.time}
                          </span>

                          <span className="font-medium text-[18px] flex gap-2 mt-2 whitespace-nowrap">
                            Live hits
                          </span>

                          <span className="text-yellow-400 text-[16px] flex-wrap lg:text-[18px] font-bold flex gap-2">
                            <Image src={iconyellow} alt="infoicon.svg" />
                            {liveData[index]?.points} pts
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
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
