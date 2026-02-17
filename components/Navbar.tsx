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
    <header className="header h-[120px] flex items-center gap-4 border-b border-white/10 bg-[#0f0f0f] px-4">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
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
      <div className="search-wrapper relative w-full max-w-[420px] shrink-0">
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
