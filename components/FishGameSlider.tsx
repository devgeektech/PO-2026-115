"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Slides } from "@/data/FishGamesData";

import "swiper/css";
import "swiper/css/navigation";
import SlideCard from "./Slide";
import Link from "next/link";

export default function FishGameSlider() {
  return (
    <div
      className="sliderwrapper relative singleLineSlider btn_include"
      id="FishGames"
    >
      <div className="absolute left-0 top-[15px] md:top-[10px] lg:top-0">
        <h2 className="text-[20px] md:text-[24px] lg:text-[32px] font-medium relative before:content-[''] before:absolute before:left-0 before:w-[5px] before:h-full before:bg-[#bc13fe] pl-4">
          Fish Games
        </h2>
      </div>
      <Link
        href={"/"}
        className="bg-white cursor-pointer z-[12] rounded-full md:px-5 md:py-2 px-2 py-1 md:text-[20px] text-[14px] md:top-[8px] top-[15px] text-[#bc13fe] absolute right-0"
      >
        See All
      </Link>
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={16}
        slidesPerView={5}
        breakpoints={{
          0: { slidesPerView: 3, spaceBetween: 5 },
          480: { slidesPerView: 3 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1365: { slidesPerView: 4 },
          1400: { slidesPerView: 5 },
        }}
        className="mySwiper multiSlide"
      >
        {Slides.map((item) => (
          <SwiperSlide key={item.id}>
            <SlideCard selectedCategory="" slide={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
