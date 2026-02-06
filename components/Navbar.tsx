import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0b0b0f]/90 backdrop-blur border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-lg font-extrabold tracking-wide text-orange-400"
        >
          ONLINE SLOTS
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="text-white/80 hover:text-white transition"
          >
            Home
          </Link>
          <Link
            href="/recommended"
            className="text-white/80 hover:text-white transition"
          >
            Recommended
          </Link>
          <Link
            href="/promotions"
            className="text-white/80 hover:text-white transition"
          >
            Promotions
          </Link>
          <Link
            href="/help"
            className="text-white/80 hover:text-white transition"
          >
            Help
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-semibold text-white/80 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-black hover:bg-orange-400 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
