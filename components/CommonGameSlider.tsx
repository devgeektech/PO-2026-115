"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SlideCard from "./Slide";
import Link from "next/link";
import { useState } from "react";

export default function CommonSlider({ title, data, type }: any) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getInitialSubCategory = (category: string) => {
    const subs = data[category]?.subcategoies
      ? Object.keys(data[category].subcategoies)
      : [];

    return subs.length > 0 ? subs[0] : "";
  };

  const [selectedSubCategory, setSelectedSubCategory] = useState("");

  const mainCategories = Object.entries(data).map(([key, value]: any) => ({
    key,
    image: value.image,
    video: value.video,
    imageWidth: value.imageWidth,
    imageHeight: value.imageHeight,
  }));

  const subCategories = selectedCategory
    ? Object.entries(data[selectedCategory]?.subcategoies || {})
    : [];

  return (
    <>
      <div
        className="sliderwrapper relative singleLineSlider tophitgameslider"
        id="TopHittingGames"
      >
        <div className="absolute left-0 top-[15px] md:top-[10px] lg:top-0">
          <h2 className="text-[20px] md:text-[24px] lg:text-[32px] font-medium relative before:content-[''] before:absolute before:left-0 before:w-[5px] before:h-full before:bg-[#bc13fe] pl-4">
            {title}
          </h2>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation
          loop={true}
          spaceBetween={8}
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
          {mainCategories.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => {
                  setSelectedCategory(item.key);
                  setSelectedSubCategory(getInitialSubCategory(item.key));
                }}
                className="cursor-pointer"
              >
                <SlideCard slide={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedCategory &&
        subCategories.map(([subCategoryName, games]: any) =>
          games && games.length > 0 ? (
            <div
              key={subCategoryName}
              className="sliderwrapper relative singleLineSlider btn_include mb-10"
            >
              {/* Title */}
              <div className="absolute left-0 top-[15px] md:top-[10px] lg:top-0">
                <h2 className="text-[20px] md:text-[24px] lg:text-[32px] font-medium relative before:content-[''] before:absolute before:left-0 before:w-[5px] before:h-full before:bg-[#bc13fe] pl-4 capitalize">
                  {subCategoryName} Games
                </h2>
              </div>

              {/* See All Button */}
              <Link
                href={"/"}
                className="bg-white cursor-pointer z-[12] rounded-full md:px-5 md:py-2 px-2 py-1 md:text-[20px] text-[14px] md:top-[8px] top-[15px] text-[#bc13fe] absolute right-0"
              >
                See All
              </Link>

              {/* Swiper */}
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
                {games.map((item: any, index: number) => {
                  const normalizedItem = {
                    ...item,
                    image: item.image || item.icon,
                  };

                  return (
                    <SwiperSlide key={`${item.label}-${index}`}>
                      <SlideCard slide={normalizedItem} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          ) : null,
        )}
    </>
  );
}
