import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Clock } from "lucide-react";
import iconyellow from "@/public/images/iconyellow.svg";
const initialVideos = [
  {
    src: "public/images/onlineSlots/jackpot_images/river_sweeps.jpg",
    shadow: "shadow-[inset_0px_0px_20px_#470203]",
    border: "border-[#8b5055]",
  },
  {
    src: "/images/onlineSlots/jackpot_images/river_sweeps.jpg",
    shadow: "shadow-[inset_0px_0px_20px_#6c3ad5]",
    border: "border-[#9967e4]",
  },
  {
    src: "/images/onlineSlots/jackpot_images/vblink.jpg",
    shadow: "shadow-[inset_0px_0px_20px_#5b1288]",
    border: "border-[#992cc1]",
  },
  {
    src: "/images/onlineSlots/jackpot_images/game_vault.jpg",
    shadow: "shadow-[inset_0px_0px_20px_#842158]",
    border: "border-[#ef70bb]",
  },
  {
    src: "/images/onlineSlots/jackpot_images/cash_frenzy.jpg",
    shadow: "shadow-[inset_0px_0px_20px_#470203]",
    border: "border-[#8b5055]",
  },
  {
    src: "/images/onlineSlots/jackpot_images/cash_machine.jpg",
    shadow: "shadow-[inset_0px_0px_20px_#72039a]",
    border: "border-[#ab499f]",
  },
  {
    src: "/images/onlineSlots/jackpot_images/fabuous_juwa.jpg",
    shadow: "shadow-[inset_0px_0px_20px_#0012f5]",
    border: "border-[#4285f6]",
  },
  {
    src: "/images/onlineSlots/jackpot_images/fire_kirin.jpg",
    shadow: "shadow-[inset_0px_0px_20px_#421d10]",
    border: "border-[#97696b]",
  },
  {
    src: "/images/onlineSlots/jackpot_images/game_room.jpg",
    shadow: "shadow-[inset_0px_0px_20px_#3e2000]",
    border: "border-[#e3ba52]",
  },
  {
    src: "/images/onlineSlots/jackpot_images/juwa.jpg",
    shadow: "shadow-[inset_0px_0px_20px_#4c1f45]",
    border: "border-[#d054b0]",
  },
  {
    src: "/images/onlineSlots/jackpot_images/miky_ways.jpg",
    shadow: "shadow-[inset_0px_0px_20px_#3b1c32]",
    border: "border-[#d29ea9]",
  },
  {
    src: "/images/onlineSlots/jackpot_images/orion_stars.jpg",
    shadow: "shadow-[inset_0px_0px_20px_#5f074c]",
    border: "border-[#f80094]",
  }
];

const JackpotSlider = () => {
  
  const shuffleArray = (array: typeof initialVideos) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  // ✅ Multiply + Shuffle
  const multiplyAndShuffle = (
    array: typeof initialVideos,
    times: number
  ) => {
    const expanded = Array.from({ length: times }, () => array).flat();
    return shuffleArray(expanded);
  };

  const [videos, setVideos] = useState(() =>
    shuffleArray(initialVideos)
  );

  const [liveData, setLiveData] = useState<
    { points: number; time: string }[]
  >([]);

  useEffect(() => {
    const generateRandomTime = () => {
      const totalSeconds =
        Math.floor(Math.random() * (300 - 5 + 1)) + 5;

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

    const data = videos.map(() => ({
      points: generateRandomPoints(),
      time: generateRandomTime(),
    }));

    setLiveData(data);
  }, [videos]);
  return (
    <>
      <div className="bg-neutral-900 rounded-xl">
        <h3 className="text-[20px] font-normal p-4">
          Real Players, Real Wins – Live!
        </h3>
        <div className="bg-neutral-800 marquee p-2 rounded-lg flex gap-2 items-center justify-between">
          <div className="marquee-track">
            {videos.map((video, index) => (
              <div key={index}>
                <div
                  className={`flex min-w-[300px] gap-3 relative rounded-[20px] items-center video_wrap ${video.shadow} p-4 border ${video.border}`}
                >
                  <div>
                    {/* <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="min-w-[75px] min-h-[75px] w-[75px] h-[75px] rounded-[6px] overflow-hidden"
                    >
                      <source src={video.src} type="video/mp4" />
                    </video> */}
                    <img className="min-w-[75px] min-h-[75px] w-[75px] h-[75px] rounded-[6px] overflow-hidden" src={video.src} alt={video.src} />
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
    </>
  );
};

export default JackpotSlider;
