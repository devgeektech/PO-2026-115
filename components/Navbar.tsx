import { Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Logo from "@/public/images/logo777.png";
import MarqueeSlider from "./MarqueeSlider";
import { useSearch } from "@/context/SearchContext";
import { useMemo } from "react";
import { TopTenGamesData } from "@/data/TopTenGamesData";
import SlideCard from "./Slide";
export default function Navbar({
  collapsed,
  onToggle,
  onMobileToggle,
}: {
  collapsed: boolean;
  onToggle: () => void;
  onMobileToggle: () => void;
}) {
  const { searchTerm, setSearchTerm } = useSearch();
  const allGames = useMemo(() => {
    const result: any[] = [];

    Object.values(TopTenGamesData || {}).forEach((category: any) => {
      if (category.subcategoies) {
        Object.values(category.subcategoies).forEach((games: any) => {
          result.push(...games);
        });
      }
    });

    return result;
  }, []);

  const filteredGames = searchTerm
    ? allGames.filter((item: any) =>
        item.label?.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : [];

  return (
    <header className="header h-[120px] flex items-center gap-4 border-b border-white/10 bg-[#0f0f0f] py-4 pe-0 ps-0 lg:ps-4">
      {/* LEFT SECTION */}
      <div className="flex topheader items-center gap-4 flex-1 min-w-0">
        <div className="logo lg:hidden">
          <Image width={79} height={60} src={Logo} alt="Logo" />
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
      <div className="search-wrapper relative w-full max-w-[420px] shrink-0 mx-4">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
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
          <div className="absolute left-0 top-full mt-3 w-[700px] bg-[#a32626] p-6 rounded-md shadow-2xl z-50">
            <h3 className="text-white text-lg mb-4 font-semibold">Results</h3>

            {filteredGames.length > 0 ? (
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation
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
                      setSearchTerm(""); // ✅ Clear search → closes dropdown
                    }}
                    key={`${item.label}-${index}`}
                  >
                    <SlideCard
                      slide={{
                        ...item,
                        image: item.image || item.icon,
                      }}
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
    </header>
  );
}
