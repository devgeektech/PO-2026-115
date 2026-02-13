"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Slides } from "@/data/TopHitGameSlide";

import "swiper/css";
import "swiper/css/navigation";
import SlideCard from "./Slide";
import { Slides as FishSlides } from "@/data/FishGamesData";
import Link from "next/link";
import { useState } from "react";

const CategoriesMapping: any = {
  juwa: {
    image: "/images/Juwa/JuwaFishGamesLogo/BigBassBonzana.png",
    subcategoies: {
      fish: [
        {
          isNew: true,
          isExclusive: true,
          label: "Big Bass Bonzana",
          image: "/images/Juwa/JuwaFishGamesLogo/BigBassBonzana.png",
          href: "/",
        },
        {
          label: "Big Bass Bonzana",
          image: "/images/Juwa/JuwaFishGamesLogo/CashCow.png",
          href: "/",
        },
        {
          label: "Deep Sea",
          image: "/images/Juwa/JuwaFishGamesLogo/DeepSea.png",
          href: "/",
        },
        {
          isNew: true,
          label: "Deep Sea Predator",
          image: "/images/Juwa/JuwaFishGamesLogo/DeepSeaPredator.png",
          href: "/",
        },
        {
          label: "Dragon Treasure",
          image: "/images/Juwa/JuwaFishGamesLogo/DragonTreasure.png",
          href: "/",
        },
        {
          label: "Happy Fishing",
          image: "/images/Juwa/JuwaFishGamesLogo/HappyFishing.png",
          href: "/",
        },
      ],
      keno: [
        {
          label: "Social Casino",
          icon: "/images/Juwa/JuwaKenoGamesLogo/BuffaloKeno.png",
          href: "/",
        },
        {
          label: "Top Hitting Games",
          icon: "/images/Juwa/JuwaKenoGamesLogo/HexaKeno.png",
          href: "/",
        },
        {
          label: "Recently Played",
          icon: "/images/Juwa/JuwaKenoGamesLogo/SuperballKeno.png",
          href: "/",
        },
      ],
      slot: [
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/777Lucky.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/BlackWhiteDouble.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/BonusHot7_s.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/BurningHOT.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/CashZone.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/CherryValentine.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/CrystalClovers.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/DiamondRiches.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/EpicSummer.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/EpicVault.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/FarmLife.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/FruitMary.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/FortuneLion.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/Glitz.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/HexGems.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/HugeCash.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/JackpotInferno.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/KingKong_sRampage.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/LifeofLuxury.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/LoteriaDon.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/MegaballDeluxe.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/MegaMoneyMachine.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/MegsPay.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/MoolahBingo.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/OhmyGirls.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/PerfectPurpleJackpots.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/President45.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/RainbowRiches.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/SimpleTriple.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/SpinGoldenWheel.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/SuperStars.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/WildRoyaleGold.png",
          href: "/",
        },
        {
          label: "Social Casino",
          icon: "/images/Juwa/juwaSlotGamesLogo/WildWest.png",
          href: "/",
        },
      ],
    },
    imageWidth: 300,
    imageHeight: 200,
  },
  firekirin: {
    image: "/images/Juwa/JuwaFishGamesLogo/BigBassBonzana.png",
    subcategories: {},
    imageWidth: 300,
    imageHeight: 200,
  },
  gamevault: {
    image: "/images/Juwa/JuwaFishGamesLogo/BigBassBonzana.png",
    subcategories: {},
    imageWidth: 300,
    imageHeight: 200,
  },
  riversweeps: {
    image: "/images/Juwa/JuwaFishGamesLogo/BigBassBonzana.png",
    subcategories: {},
    imageWidth: 300,
    imageHeight: 200,
  },
  gamevault1: {
    image: "/images/Juwa/JuwaFishGamesLogo/BigBassBonzana.png",
    subcategories: {},
    imageWidth: 300,
    imageHeight: 200,
  },
  riversweeps1: {
    image: "/images/Juwa/JuwaFishGamesLogo/BigBassBonzana.png",
    subcategories: {},
    imageWidth: 300,
    imageHeight: 200,
  },
};

export default function TopHittingGameSlider() {
  const [selectedCategory, setSelectedCategory] = useState("juwa");

  // get first subcategory dynamically instead of hardcoding "fish"
  const getInitialSubCategory = (category: string) => {
    const subs = CategoriesMapping[category]?.subcategoies
      ? Object.keys(CategoriesMapping[category].subcategoies)
      : [];

    return subs.length > 0 ? subs[0] : "";
  };

  const [selectedSubCategory, setSelectedSubCategory] = useState(
    getInitialSubCategory("juwa")
  );

  // ✅ Main categories
  const mainCategories = Object.entries(CategoriesMapping).map(
    ([key, value]: any) => ({
      key,
      image: value.image,
      imageWidth: value.imageWidth,
      imageHeight: value.imageHeight,
    })
  );

  // ✅ Sub categories (FIXED)
  const subCategories = Object.keys(
    CategoriesMapping[selectedCategory]?.subcategoies || {}
  );

  const subCategorySlides = Object.entries(
    CategoriesMapping[selectedCategory]?.subcategoies || {}
  );

  return (
    <>
      <div
        className="sliderwrapper relative singleLineSlider tophitgameslider"
        id="TopHittingGames"
      >
        <div className="absolute left-0 top-[15px] md:top-[10px] lg:top-0">
          <h2 className="text-[20px] md:text-[24px] lg:text-[32px] font-medium relative before:content-[''] before:absolute before:left-0 before:w-[5px] before:h-full before:bg-[#bc13fe] pl-4">
            Top Hitting Games
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
              <SlideCard slide={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div
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
          {subCategorySlides.map((item: any) => (
            <SwiperSlide key={item.id}>
              <SlideCard slide={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
      {Object.entries(
        CategoriesMapping[selectedCategory]?.subcategoies || {}
      ).map(([subCategoryName, games]: any) => (
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
      ))}
    </>
  );
}
