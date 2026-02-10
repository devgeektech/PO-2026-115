import clsx from "clsx";
import Image from "next/image";

const menu = [
  { label: "Social Casino", icon: "/icons/homeIcon.svg", href: "/" },
  { label: "Top Hitting Games", icon: "/icons/topHitIcon.svg", href: "/" },
  { label: "Recently Played", icon: "/icons/clockIcon.svg", href: "/" },
  { label: "Live Winners Update", icon: "/icons/greenDotIcon.svg", href: "/" },
  { label: "Promos", icon: "/icons/giftIcon.svg", href: "/promotions" },
  { label: "Trust & Safety", icon: "/icons/trustIcon.svg", href: "/trust" },
  { label: "24/7 Help", icon: "/icons/customerCareIcon.svg", href: "/help" },
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
          "fixed lg:static z-50 h-screen bg-[#060607] border-r border-white/10 transition-all duration-300",
          collapsed ? "lg:w-16" : "lg:w-[280px]",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0 w-[280px]"
        )}
      >
        <nav className="px-3 space-y-3 mt-12">
          {menu.map(({ label, icon, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-3 px-3 py-3 rounded-[20px] hover:bg-[#C3282E] text-[16px] text-gray-300 border border-white/10"
              onClick={onCloseMobile}
            >
              <Image
                src={icon}
                alt={label}
                className="min-w-[24px] min-h-[24px]"
                width={24}
                height={24}
              />
              {!collapsed && <span>{label}</span>}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
