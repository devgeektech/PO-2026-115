import { Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <header className="header h-[120px] flex items-center justify-between gap-4 border-b border-white/10 bg-[#0f0f0f] px-4">
      <div className="flex items-center gap-4">
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

        <div className="">
          <MarqueeSlider />
        </div>
        {/* <div className="flex-1" /> */}
      </div>
      {/* Search */}
      <div className="search-wrapper relative max-w-[420px] w-full">
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
