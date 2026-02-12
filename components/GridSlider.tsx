"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

import { Grid, Navigation } from "swiper/modules";
import { Slides } from "@/data/GridSlideData";
import Link from "next/link";
import SlideCard from "./Slide";

export default function GridSlider() {
  return (
    <div
      className="sliderwrapper relative gridSlider btn_include"
      id="RecentlyPlayed"
    >
      <div className="absolute left-0 top-[15px] md:top-[10px] lg:top-0">
        <h2 className="text-[20px] md:text-[24px] lg:text-[32px] font-medium relative before:content-[''] before:absolute before:left-0 before:w-[5px] before:h-full before:bg-[#bc13fe] pl-4">
          Recently Played
        </h2>
      </div>
      <Link
        href={"/"}
        className="bg-white cursor-pointer z-[12] rounded-full md:px-5 md:py-2 px-2 py-1 md:text-[20px] text-[14px] md:top-[8px] top-[15px] text-[#bc13fe] absolute right-0"
      >
        See All
      </Link>
      <Swiper
        spaceBetween={20}
        loop={true}
        // pagination={{ clickable: true }}
        modules={[Grid, Navigation]}
        navigation
        className="mySwiper multiSlide"
        slidesPerView={5}
        breakpoints={{
          0: {
            slidesPerView: 3,
            grid: { rows: 2 },
          },
          480: {
            slidesPerView: 3,
            grid: { rows: 2 },
          },
          640: {
            slidesPerView: 3,
            grid: { rows: 2 },
          },
          1024: {
            slidesPerView: 3,
            grid: { rows: 2 },
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 4,
            grid: { rows: 2 },
          },
          1365: {
            slidesPerView: 4,
            grid: { rows: 2 },
          },
          1400: {
            slidesPerView: 5,
            grid: { rows: 2 },
          },
        }}
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
