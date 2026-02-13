"use client";

import { useEffect, useRef } from "react";
import TopTenGameSlider from "@/components/TopTenGameSlider";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import GridSlider from "@/components/GridSlider";
import TopHittingGameSlider from "@/components/TopHittingGameSlider";
import SlotsGameSlider from "@/components/SlotsGameSlider";
import FishGameSlider from "@/components/FishGameSlider";
import KenoGamesSlider from "@/components/KenoGamesSlider";
import biggestjackpot from "@/public/images/biggestjackpot.gif";
import joinnow from "@/public/images/joinnow.gif";
import exclusivepromo from "@/public/images/exclusivepromo.gif";
import SocialCasinoSlider from "@/components/SocialCasinoSlider";
const menu = [
  {
    label: "Top Ten Games",
    icon: "/icons/topHitIcon.svg",
    href: "#TopTenGames",
  },
  {
    label: "Recently Played",
    icon: "/icons/clockIcon.svg",
    href: "#RecentlyPlayed",
  },
  {
    label: "Top Hitting Games",
    icon: "/icons/topHitIcon.svg",
    href: "#TopHittingGames",
  },
  {
    label: "Social Casino",
    icon: "/icons/homeIcon.svg",
    href: "#SocialCasino",
  },
  {
    label: "Slots Games",
    icon: "/icons/greenDotIcon.svg",
    href: "#SlotsGames",
  },
  { label: "Fish Games", icon: "/icons/giftIcon.svg", href: "#FishGames" },
  { label: "Keno Games", icon: "/icons/trustIcon.svg", href: "#KenoGames" },
  // { label: "24/7 Help", icon: "/icons/customerCareIcon.svg", href: "/help" },
];

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      videoRef.current?.play();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full text-white">
      <main className="flex-1 min-w-0 md:space-y-10 space-y-4">
        {/* Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden">
          <video
            ref={videoRef}
            muted
            loop
            autoPlay
            playsInline
            preload="auto"
            className="w-full max-h-[850px] object-cover rounded-2xl"
          >
            <source src="/videos/bannerVideo.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg_img flex items-center gap-2">
              <Image
                src={joinnow}
                alt="joinnow.gif"
                className="w-[75px] h-[75px] md:w-[200px] md:h-[200px] object-cover"
              />
              <Image
                src={biggestjackpot}
                alt="gifimg.gif"
                className="w-[75px] h-[75px] md:w-[200px] md:h-[200px] object-cover"
              />

              <Image
                src={exclusivepromo}
                alt="exclusivepromo.gif"
                className="w-[75px] h-[75px] md:w-[200px] md:h-[200px] object-cover"
              />
            </div>
            {/* <video
              muted
              loop
              autoPlay
              playsInline
              className="w-[75px] h-[75px] md:w-[200px] md:h-[200px] object-cover"
            >
              <source src="/videos/joinnow_video.mp4" type="video/mp4" />
            </video> */}

            {/* <Image src={gifimg} alt="gifimg.gif" />
            <Image src={gifimg} alt="gifimg.gif" />
            <Image src={gifimg} alt="gifimg.gif" /> */}

            {/* <video
              muted
              loop
              autoPlay
              playsInline
              className="w-[75px] h-[75px] md:w-[200px] md:h-[200px] object-cover"
            >
              <source src="/videos/biggestjackpot_video.mp4" type="video/mp4" />
            </video>

            <video
              muted
              loop
              autoPlay
              playsInline
              className="w-[75px] h-[75px] md:w-[200px] md:h-[200px] object-cover"
            >
              <source src="/videos/exclusivepromo_video.mp4" type="video/mp4" />
            </video> */}
          </div>
        </div>

        {/* Menu */}
        <div className="w-full border border-[#2D2D2D] bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] rounded-2xl p-4">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {menu.map(({ label, icon, href }) => (
              <Link
                key={label}
                className={clsx(
                  "flex items-center gap-2 whitespace-nowrap cursor-pointer",
                  "px-5 py-2.5 rounded-[20px]",
                  "bg-white/5 text-white",
                  "border-2 border-white/10",
                  "hover:bg-[#64008b] hover:border-[#bc13fe]",
                  "transition-all duration-500 ease-in-out"
                )}
                href={href}
              >
                <Image
                  src={icon}
                  alt={label}
                  width={24}
                  height={24}
                  className="min-w-[24px] min-h-[24px]"
                />
                <span className="text-sm font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Sliders */}
        <div className="w-full min-w-0 overflow-hidden">
          <TopTenGameSlider />
        </div>

        <div className="w-full min-w-0 overflow-hidden">
          <GridSlider />
        </div>

        <div className="w-full min-w-0 overflow-hidden">
          <TopHittingGameSlider />
        </div>

        <div className="w-full min-w-0 overflow-hidden">
          <SocialCasinoSlider />
        </div>

        <div className="w-full min-w-0 overflow-hidden">
          <SlotsGameSlider />
        </div>

        <div className="w-full min-w-0 overflow-hidden">
          <FishGameSlider />
        </div>

        <div className="w-full min-w-0 overflow-hidden">
          <KenoGamesSlider />
        </div>

        {/* Content Section */}
        <div>
          <h2 className="text-[22px] md:text-[32px] font-medium">
            Online Slots Official – Social Casino
          </h2>

          <p className="my-4 font-light text-sm leading-[160%]">
            Welcome to ONLINE SLOTS Official, where it’s zap, wow, and bam all
            the way to the top! Get ready for hundreds of electrifying social
            casino games designed to keep the excitement rolling nonstop.
          </p>

          <Link href="/" className="flex items-center gap-2">
            Read more
            <img src="/images/doubleArrow.png" alt="doubleArrow" />
          </Link>
        </div>
      </main>
    </div>
  );
}
