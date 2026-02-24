"use client";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import biggestjackpot from "@/public/images/biggestjackpot.gif";
import joinnow from "@/public/images/joinnow.gif";
import exclusivepromo from "@/public/images/exclusivepromo.gif";
import { TopTenGamesData } from "@/data/TopTenGamesData";
import dynamic from "next/dynamic";
import { useSearch } from "@/context/SearchContext";
const CommonSlider = dynamic(() => import("@/components/CommonGameSlider"), {
  ssr: false, // important because Swiper uses window
  loading: () => <div className="h-[300px]" />, // skeleton placeholder
});

type menu = {
  label: string;
  icon: string;
  href: string;
};

const menu = [
  {
    label: "Top Ten Games",
    icon: "/icons/topTenIcon.svg",
    href: "#TopTenGames",
  },
  {
    label: "Top Hitting Games",
    icon: "/icons/topHitIcon.svg",
    href: "#Top-hittingGames",
  },
  {
    label: "Slots Games",
    icon: "/icons/slotsIcon.svg",
    href: "#SlotsGames",
  },
  { label: "Fish Games", icon: "/icons/fishIcon.svg", href: "#FishGames" },
  { label: "Keno Games", icon: "/icons/kenoGames.svg", href: "#KenoGames" },
];

export default function HomePage() {
  const { searchTerm } = useSearch();

  console.log("HomePage Search:", searchTerm);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      videoRef.current?.play();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full text-white">
      {/* Main Content */}
      <main className="flex-1 min-w-0 md:space-y-10 space-y-4">
        {/* Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden">
          <video
            ref={videoRef}
            muted
            loop
            autoPlay
            playsInline
            preload="none"
            style={{
              width: "100%",
              maxHeight: "850px",
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "20px",
            }}
          >
            <source src="/videos/bannerVideo.mp4" type="video/mp4" />
          </video>
          <div className="w-max absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-3">
            <div className="bg_img w-max flex items-center gap-2">
              <Image
                src={joinnow}
                alt="joinnow.gif"
                className="w-[75px] h-[75px] md:w-[200px] md:h-[200px] object-cover"
              />
            </div>
            <div className="bg_img w-max flex items-center gap-2">
              <Image
                src={biggestjackpot}
                alt="gifimg.gif"
                className="w-[75px] h-[75px] md:w-[200px] md:h-[200px] object-cover"
              />
            </div>
            <div className="bg_img w-max flex items-center gap-2">
              <Image
                src={exclusivepromo}
                alt="exclusivepromo.gif"
                className="w-[75px] h-[75px] md:w-[200px] md:h-[200px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="sticky top-0 z-[102]">
          <div className="w-full border border-[#2D2D2D] bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] rounded-2xl md:p-4 p-2">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {menu.map(({ label, icon, href }) => (
                <Link
                  key={label}
                  className={clsx(
                    "flex items-center gap-2 whitespace-nowrap cursor-pointer",
                    "md:px-5 px-4 md:py-2.5 py-1.5 md:rounded-[20px] rounded-[10px]",
                    "bg-white/5 text-white",
                    "border-2 border-white/10",
                    "hover:bg-[#64008b] hover:border-[#bc13fe]",
                    "transition-all duration-200"
                  )}
                  href={href}
                >
                  <Image
                    src={icon}
                    alt={label}
                    className="min-w-[24px] min-h-[24px]"
                    width={24}
                    height={24}
                  />
                  <span className="text-sm font-medium" id={`${label}Games`}>
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full min-w-0 overflow-hidden">
          {" "}
          <CommonSlider
            title="Top Ten Games"
            data={TopTenGamesData}
            type="topTen"
          />
        </div>

        <div className="">
          <h2 className="lg:text-[32px] md:text-[24px] text-[20px] leading-[120%] font-medium">
            Online Slots official – Social Casino
          </h2>
          <p className="my-4 font-light text-sm leading-[160%]">
            Welcome to ONLINE SLOTS official, where it’s zap, wow, and bam all
            the way to the top! Get ready for hundreds of electrifying social
            casino games designed to keep the excitement rolling nonstop. From
            high-energy online slots to immersive live dealer experiences, we
            bring you the perfect blend of action, fun, and nonstop
            entertainment.
          </p>
          <p className="my-4 font-light text-sm leading-[160%]">
            Whether you’re chasing the thrill of a big jackpot or just here for
            some laid-back fun, you’re in for a wham-bam good time. No pressure
            just pure enjoyment. So go ahead, hit that spin button with
            confidence, and say hello to millions of exciting chances to win at
            ONLINE SLOTS official! 🎰⚡
          </p>
          <h2 className="lg:text-[32px] md:text-[24px] text-[20px] leading-[120%] font-medium my-4">
            Explore Hundreds of Social Casino Games
          </h2>
          <p className="my-4 font-light text-sm leading-[160%]">
            Our social casino is filled with hundreds of exciting games made for
            every type of player.
          </p>
          <p className="my-4 font-light text-sm leading-[160%]">
            Whether you love spinning the reels or trying your luck with card
            and wheel games, our wide selection delivers all the energy of a
            real casino—right at your fingertips. No matter how you like to
            play, you’ll find plenty of fun options, and there’s no purchase
            required. Find new favorites, keep the excitement alive, and dive
            into hundreds of thrilling social casino games today! 🎰✨
          </p>
          <Link href={"/"} className="flex items-center w-fit">
            Read more <img src="./images/doubleArrow.png" alt="doubleArrow" />
          </Link>
        </div>
      </main>
    </div>
  );
}
