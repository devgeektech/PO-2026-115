"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import signupimg from "@/public/images/signup-btn.png";
import playnowimg from "@/public/images/playnow-btn.png";
import deepSeaPredator from "@/public/images/Juwa/InGamePhotos/FishGames/deepSeaPredator.jpg";
const bestForYou = [
  {
    title: "Spirit of the Buffalo",
    provider: "UROC Studios",
    image: "/images/game1.jpg",
  },
  {
    title: "Pink Elephants",
    provider: "Thunderkick",
    image: "/images/game2.jpg",
  },
  { title: "Golden Till", provider: "ELA Games", image: "/images/game3.jpg" },
  {
    title: "Trout's Treasure",
    provider: "Spinomenal",
    image: "/images/game4.jpg",
  },
  { title: "Lore of Thunder", provider: "3 Oaks", image: "/images/game5.jpg" },
];

const newReleases = [
  { title: "Coinsweeper", provider: "Reel Riot", image: "/images/game6.jpg" },
  { title: "Fruits & Jokers", provider: "Playson", image: "/images/game7.jpg" },
  {
    title: "Zeus Almighty",
    provider: "Golden Gopher",
    image: "/images/game8.jpg",
  },
  {
    title: "Triple Valentine",
    provider: "Red Rake",
    image: "/images/game9.jpg",
  },
  {
    title: "Blazing Horses",
    provider: "Kalamba Games",
    image: "/images/game10.jpg",
  },
];

export default function Detail() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      videoRef.current?.play();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-black text-white">
      {/* Breadcrumb */}
      <ul className="text-sm text-white mb-6 flex gap-2 items-center">
        <li>
          <Link className="text-sm text-white" href={"/"}>
            Games
          </Link>
        </li>{" "}
        <span className="dot w-[7px] h-[7px] bg-white rounded-full"></span>
        <li>Slots</li>
      </ul>

      {/* Game Title */}
      <h1 className="flex gap-2 items-center text-[20px] font-normal mb-6">
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
        Play Wild West Jackpot Slot
      </h1>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Game Preview */}
        <div className="lg:col-span-1 rounded-xl overflow-hidden bg-neutral-900">
          <Image src={deepSeaPredator} alt="deepSeaPredator" />
          {/* <video
            ref={videoRef}
            muted
            loop
            autoPlay
            playsInline
            preload="auto"
            className="w-full max-h-[480px] object-cover rounded-2xl"
          >
            <source src="/videos/bannerVideo.mp4" type="video/mp4" />
          </video> */}
        </div>

        {/* Game Info */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
            {/* Spin Info */}
            <div className="bg-neutral-900 rounded-xl p-5 flex gap-4 border border-[#FFFFFF14]">
              {/* <div className="flex justify-between border-b border-[#FFFFFFCC] pb-2">
                <span className="text-gray-400">Min Spin</span>
                <span>GC 50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Max Spin</span>
                <span>GC 10,000</span>
              </div> */}
              <button className="cursor-pointer w-full">
                <Image
                  src={signupimg}
                  className="w-full h-auto"
                  alt="signupimg"
                />
              </button>
              <button className="cursor-pointer w-full">
                <Image
                  src={playnowimg}
                  className="w-full h-auto"
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
          <div className="bg-neutral-900 rounded-xl p-5">
            <h3 className="text-lg font-medium mb-3">
              Opt-In For A Chance To Win
            </h3>
            <div className="bg-neutral-800 p-4 rounded-lg flex items-center justify-between">
              <span className="font-medium">Gold Coins Jackpot</span>
              <span className="text-yellow-400 font-bold">GC6,982,948,542</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold mb-4">
          Wild West Jackpot Features
        </h2>
        <div className="flex flex-wrap gap-3">
          {["OnlyPlay", "New Slots", "High Volatility", "Wild West"].map(
            (tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-neutral-900 rounded-full text-sm text-gray-300"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      {/* Best For You */}
      <Section title="Best For You" games={bestForYou} />

      {/* New Releases */}
      <Section title="New Releases" games={newReleases} />

      {/* Footer */}
      <footer className="mt-16 pt-10 border-t border-neutral-800 text-sm text-gray-400">
        <p className="mb-4">
          OnlineSlots777.com, entry and gameplay are always 100% free. No
          purchase is ever required to play or win.
        </p>
        <p>© 2026 OnlineSlots777. All rights reserved.</p>
      </footer>
    </div>
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
