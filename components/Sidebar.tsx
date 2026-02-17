import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo777.png";
const menu = [
  {
    label: "Top Ten Games",
    icon: "/icons/topHitIcon.svg",
    href: "#TopTenGames",
  },
  {
    label: "Recently Played",
    icon: "/icons/clockIcon.svg",
    href: "#RecentlyPlayed",
  },
  {
    label: "Top Hitting Games",
    icon: "/icons/topHitIcon.svg",
    href: "#TopHittingGames",
  },
  {
    label: "Social Casino",
    icon: "/icons/homeIcon.svg",
    href: "#SocialCasino",
  },
  {
    label: "Slots Games",
    icon: "/icons/greenDotIcon.svg",
    href: "#SlotsGames",
  },
  { label: "Fish Games", icon: "/icons/giftIcon.svg", href: "#FishGames" },
  { label: "Keno Games", icon: "/icons/trustIcon.svg", href: "#KenoGames" },
];

export default function Sidebar({
  collapsed,
  mobileOpen,
  onCloseMobile,
}: {
  collapsed: boolean;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}) {
  return (
    <>
      {/* Mobile Overlay */}
      <div
        onClick={onCloseMobile}
        className={clsx(
          "fixed inset-0 bg-black/60  z-40 lg:hidden transition-opacity",
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      />

      <aside
        className={clsx(
          "fixed lg:static top-0 bottom-0 z-50 h-screen bg-[#060607] border-r border-white/10 transition-all duration-500",
          collapsed ? "lg:w-16" : "lg:w-[280px]",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0 w-[280px]"
        )}
      >
        <Link
          href="/"
          className="logosite flex items-center justify-center mt-[10px] mb-[25px]"
        >
          <Image
            width={collapsed ? 48 : 109}
            height={collapsed ? 40 : 90}
            className={clsx(
              "transition-all duration-500",
              collapsed ? "min-w-[48px]" : "min-w-[109px]"
            )}
            src={Logo}
            alt="Logo"
          />
        </Link>
        <nav
          className={clsx(
            "space-y-3 transition-all duration-500",
            collapsed ? "px-1" : "px-3"
          )}
        >
          {menu.map(({ label, icon, href }) => (
            <Link
              key={label}
              href={href}
              onClick={onCloseMobile}
              className={clsx(
                "relative group flex items-center gap-3 rounded-[20px] transition-all duration-500 ease-in-out hover:bg-[#64008b] hover:border-[#bc13fe] text-[16px] text-gray-300 border-2 border-white/10",
                collapsed ? "px-1 py-2 justify-center" : "px-3 py-3"
              )}
            >
              <Image
                src={icon}
                alt={label}
                className="min-w-[24px] min-h-[24px]"
                width={24}
                height={24}
              />

              {!collapsed && <span>{label}</span>}

              {/* Tooltip */}
              {collapsed && (
                <span className="absolute left-full ml-3 whitespace-nowrap bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  {label}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
