"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Slides } from "@/data/SlideData";

import "swiper/css";
import "swiper/css/navigation";
import SlideCard from "./Slide";

export default function TopTenGameSlider() {
  return (
    <div className="sliderwrapper relative singleLineSlider">
      <div className="absolute left-0 top-0">
        <h2 className=" text-[32px] font-medium relative before:content-[''] before:absolute before:left-0 before:w-[5px] before:h-full before:bg-[#C3282E] pl-4">
          Top 10 Games
        </h2>
      </div>
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
