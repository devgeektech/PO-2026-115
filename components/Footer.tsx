import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0f] border-t border-white/10 text-white/70">
      <div className="max-w-[1400px] mx-auto px-6 py-10 space-y-8">
        {/* Top */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Brand + About */}
          <div className="flex-1 space-y-3">
            <h3 className="text-xl font-extrabold text-orange-400">
              ONLINE SLOTS 717
            </h3>
            <p className="text-sm leading-relaxed">
              At OnlineSlots717.com, entry and gameplay are always 100% free.
              No purchase is ever required to play or win. Void where
              prohibited by law.
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <Link href="#" className="rounded-full border border-white/20 px-3 py-1 hover:border-orange-400">
                Terms of Service
              </Link>
              <Link href="#" className="rounded-full border border-white/20 px-3 py-1 hover:border-orange-400">
                Player Safety
              </Link>
              <Link href="#" className="rounded-full border border-white/20 px-3 py-1 hover:border-orange-400">
                Privacy Policy
              </Link>
              <Link href="#" className="rounded-full border border-white/20 px-3 py-1 hover:border-orange-400">
                Cookie Notice
              </Link>
            </div>
          </div>

          {/* Games */}
          <div className="flex-1">
            <h4 className="mb-3 font-semibold text-white">Games</h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                "Recommended Games",
                "Popular Games",
                "Live Dealer",
                "Hold & Win",
                "New Slots",
                "Slots",
                "Slot Themes",
                "Exclusive GC Games",
                "Arcade Games",
                "Unlimited Play",
                "Slot Volatility",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="border-t border-white/10 pt-6 text-sm">
          <p className="font-semibold text-white">Online support 24/7</p>
          <p>Contact Us</p>
          <p className="mt-1 text-xs">
            US Payment Related Queries: +1 (213) 456-7890
          </p>
        </div>

        {/* Legal */}
        <div className="border-t border-white/10 pt-6 text-xs leading-relaxed">
          <p>
            OnlineSlots717.com is operated by Two Operations Limited, a company
            incorporated in the Isle of Man under registration number 014837,
            with its registered office at Third Floor, 34 Hope Street, Douglas,
            Isle of Man, IM1 1AP.
          </p>
          <p className="mt-2">
            © 2026 OnlineSlots717.com | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
