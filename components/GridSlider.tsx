"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import { Grid, Navigation, Pagination } from "swiper/modules";
import { Slides } from "@/data/GridSlideData";
import type { GridSlide } from "@/data/GridSlideData";
import Link from "next/link";

export default function GridSlider() {
  return (
    <div className="sliderwrapper relative gridSlider">
      <div className="absolute left-0 top-0">
        <h2 className=" text-[32px] font-medium relative before:content-[''] before:absolute before:left-0 before:w-[5px] before:h-full before:bg-[#C3282E] pl-4">
          Recently Played
        </h2>
      </div>
      <Link href={"/"}>See All</Link>
      <Swiper
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Grid, Pagination, Navigation]}
        navigation
        className="mySwiper multiSlide"
        slidesPerView={5}
        breakpoints={{
          0: {
            slidesPerView: 1,
            grid: { rows: 2 },
          },
          640: {
            slidesPerView: 2,
            grid: { rows: 2 },
          },
          1024: {
            slidesPerView: 5,
            grid: { rows: 2 },
          },
        }}
      >
        {Slides.map((item: GridSlide) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
