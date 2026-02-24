import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo777.png";

const menu = [
  {
    label: "Top Ten Games",
    icon: "/icons/topTenIcon.svg",
    href: "#TopTenGames",
  },
  {
    label: "Top Hitting Games",
    icon: "/icons/topHitIcon.svg",
    href: "#Top-hittingGames",
  },
  { label: "Slots Games", icon: "/icons/slotsIcon.svg", href: "#SlotGames" },
  { label: "Fish Games", icon: "/icons/fishIcon.svg", href: "#FishGames" },
  { label: "Keno Games", icon: "/icons/kenoGames.svg", href: "#KenoGames" },
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
          "fixed inset-0 bg-black/60 z-[110] lg:hidden transition-opacity",
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      />

      <aside
        className={clsx(
          "bg-[#060607] border-r border-white/10 transition-all duration-500",

          // Sticky behavior for desktop
          "lg:sticky lg:top-0 lg:h-screen",

          // Width handling
          collapsed ? "lg:w-16" : "lg:w-[280px]",
          "w-[280px]",

          // Mobile slide behavior
          "fixed lg:relative top-0 left-0 z-[120] h-screen",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0"
        )}
      >
        <Link
          href="/"
          className="flex items-center justify-center mt-[10px] mb-[25px]"
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
                "relative group flex items-center gap-3 rounded-[20px] transition-all duration-300 hover:bg-[#64008b] text-gray-300 border-2 border-white/10",
                collapsed ? "px-1 py-2 justify-center" : "px-3 py-2 lg:py-3"
              )}
            >
              <Image
                src={icon}
                alt={label}
                width={24}
                height={24}
                className="min-w-[24px]"
              />

              {!collapsed && <span>{label}</span>}

              {/* Tooltip when collapsed */}
              {collapsed && (
                <span className="absolute left-full ml-3 whitespace-nowrap bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-[999]">
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
