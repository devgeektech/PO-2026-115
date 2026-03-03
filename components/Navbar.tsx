import Link from "next/link";
import { Menu, Search } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Logo from "@/public/images/logo777.png";
import MarqueeSlider from "./MarqueeSlider";
import { useSearch } from "@/context/SearchContext";
import { useMemo, useState } from "react";
import { TopTenGamesData } from "@/data/TopTenGamesData";
import SlideCard from "./Slide";
import Lottie from "lottie-react";
import PlayNow from "@/public/animations/playnow.json";
import Signup from "./Signup";
export default function Navbar({
  collapsed,
  onToggle,
  onMobileToggle,
}: {
  collapsed: boolean;
  onToggle: () => void;
  onMobileToggle: () => void;
}) {
  const [open, setOpen] = useState(false);
  const { searchTerm, setSearchTerm } = useSearch();
  const allGames = useMemo(() => {
    const result: any[] = [];

    Object.values(TopTenGamesData || {}).forEach((category: any) => {
      if (category.subcategoies) {
        Object.entries(category.subcategoies).forEach(
          ([subCategoryName, games]: [string, any]) => {
            if (subCategoryName !== "top-hitting") {
              result.push(...games);
            }
          }
        );
      }
    });

    return result;
  }, []);

  const filteredGames = searchTerm
    ? allGames.filter((item: any) =>
        item.label?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <>
      <header className="overflow-hidden relative header h-[120px] flex items-center gap-4 border-b border-white/10 bg-[#0f0f0f] py-4 pe-0 ps-0 lg:ps-4">
        {/* LEFT SECTION */}
        <div className="flex topheader items-center gap-4 flex-1 min-w-0">
          <div className="logo lg:hidden">
            <Link href={"/"}>
              <Image width={79} height={60} src={Logo} alt="Logo" />
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={onMobileToggle}
            className="lg:hidden text-gray-300 hover:text-white"
          >
            <Menu size={22} />
          </button>

          {/* Desktop Collapse Button */}
          <button
            onClick={onToggle}
            className="hidden lg:block text-gray-300 hover:text-white cursor-pointer"
          >
            <Menu size={20} />
          </button>

          {/* Marquee */}
          <div className="flex-1 min-w-0 overflow-hidden">
            <MarqueeSlider />
          </div>
        </div>

        {/* RIGHT SECTION - Search */}
        {/* <div className="search-wrapper relative w-full max-w-[420px] shrink-0 mx-4">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value); console.log("Search Term Updated:", e.target.value);}}
          placeholder="Search games and game providers"
          className="w-full bg-[#171718] rounded-full border border-white/10 pl-9 pr-3 py-4 text-sm text-[#E5E5E5] outline-none focus:border-white/20"
        />
      </div> */}

        {/* RIGHT SECTION - Search */}
        <div className="search-wrapper w-full max-w-[420px] shrink-0 mx-4">
          {/* <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        /> */}
          <div className="">
            <input
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                console.log("Search Term Updated:", e.target.value);
              }}
              placeholder="Search games and game providers"
              className="w-full bg-[#171718] rounded-full border border-white/10 pl-9 pr-3 py-4 text-sm text-[#E5E5E5] outline-none focus:border-white/20"
            />

            {/* 🔴 SEARCH DROPDOWN */}
            {searchTerm && (
              <div className="absolute left-0 top-full mt-3 w-full bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] p-6 rounded-md shadow-2xl z-50">
                <h3 className="text-white text-lg mb-4 font-semibold">
                  Results
                </h3>

                {filteredGames.length > 0 ? (
                  <Swiper
                    modules={[Autoplay]}
                    // navigation
                    loop={false}
                    spaceBetween={16}
                    slidesPerView={5}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                      0: { slidesPerView: 3, spaceBetween: 5 },
                      640: { slidesPerView: 3 },
                      1024: { slidesPerView: 4 },
                      1400: { slidesPerView: 5 },
                    }}
                    className="mySwiper"
                  >
                    {filteredGames.map((item: any, index: number) => (
                      <SwiperSlide
                        onClick={() => {
                          setSearchTerm("");
                        }}
                        key={`${item.label}-${index}`}
                      >
                        <SlideCard
                          selectedCategory=""
                          slide={{
                            ...item,
                            image: item.image || item.icon,
                          }}
                          fromSearchComponent={true}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <p className="text-white">No games found</p>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center justify-center hidden mobile_view mx-auto">
            <div className="w-[300px] overflow-hidden h-[80px] max-h-[80px] mx-auto">
              <button
                className="mobile_btn relative bottom-[55px]"
                onClick={() => {
                  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                    window.location.href = "sms:+12145515913";
                  } else {
                    setOpen(true); // desktop behavior
                  }
                }}
              >
                <Lottie
                  animationData={PlayNow}
                  loop={true}
                  autoplay={true}
                  className=""
                ></Lottie>
              </button>
            </div>
          </div>
        </div>
      </header>
      <Signup isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
