import { Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo777.png";
import MarqueeSlider from "./MarqueeSlider";

export default function Navbar({
  collapsed,
  onToggle,
  onMobileToggle,
}: {
  collapsed: boolean;
  onToggle: () => void;
  onMobileToggle: () => void;
}) {
  return (
    <header className="h-[120px] flex items-center gap-4 border-b border-white/10 bg-[#0f0f0f] px-4">
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

      <Link href="/" className="flex items-center gap-3">
        <Image
          width={109}
          height={90}
          className="min-w-[109px]"
          src={Logo}
          alt="Logo"
        />
      </Link>
      <div className="">
        {/* <div className="marquee">
          <div className="marquee__inner">
            <span className="">
              JUWA, MILKWAY, FIREKIRIN, ORIONSTAR, GAME VAULT, VEGASSWEEP,
              VBLINK, ULTRAPANDA, PANDAMASTER, RIVERSWEEPS
            </span>
          </div>
        </div> */}
        {/* <div className="marquee-container">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={5000} // Adjust speed (ms) for transition duration
            slidesPerView="auto" // Allows slides to fit their content width
            spaceBetween={30}
            allowTouchMove={false} // Makes it non-interactive like a marquee
            autoplay={{
              delay: 0, // No delay between transitions
              disableOnInteraction: false,
            }}
            className="my-marquee"
          >
            {["React", "TypeScript", "Swiper", "Marquee", "Frontend"].map(
              (text, i) => (
                <SwiperSlide key={i} style={{ width: "auto" }}>
                  <span style={{ fontSize: "2rem", fontWeight: "bold" }}>
                    {text}
                  </span>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div> */}
        <MarqueeSlider />
      </div>
      <div className="flex-1" />

      {/* Search */}
      <div className="relative max-w-[420px] w-full hidden md:block">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          placeholder="Search games and game providers"
          className="w-full bg-[#171718] rounded-full border border-white/10 pl-9 pr-3 py-4 text-sm text-[#E5E5E5] outline-none focus:border-white/20"
        />
      </div>
    </header>
  );
}
