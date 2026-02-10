"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Slides } from "@/data/KenoGamesData";

import "swiper/css";
import "swiper/css/navigation";
import SlideCard from "./Slide";
import Link from "next/link";

export default function KenoGamesSlider() {
  return (
    <div className="sliderwrapper relative singleLineSlider btn_include">
      <div className="absolute left-0 top-0">
        <h2 className=" text-[32px] font-medium relative before:content-[''] before:absolute before:left-0 before:w-[5px] before:h-full before:bg-[#C3282E] pl-4">
          Slots Games
        </h2>
      </div>
      <Link
        href={"/"}
        className="bg-white cursor-pointer z-[12] rounded-full px-5 py-2 text-[20px] text-[#C3282E] absolute right-0 top-[8px]"
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
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 5 },
        }}
        className="mySwiper multiSlide"
      >
        {Slides.map((item) => (
          <SwiperSlide key={item.id}>
            <SlideCard slide={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
