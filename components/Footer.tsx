import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo777.png";
import PlayNow from "@/public/images/biggestjackpot_video.gif";
import CreateAccount from "@/public/images/createaccount_btn.gif";
const aboutLinks = ["Terms of Service", "Privacy Policy"];

const gameLinks = [
  {
    label: "Top Ten Games",
    href: "#TopTenGames",
  },
  {
    label: "Recently Played",
    href: "#RecentlyPlayed",
  },
  {
    label: "Top Hitting Games",
    href: "#TopHittingGames",
  },
  {
    label: "Social Casino",
    href: "#SocialCasino",
  },
  {
    label: "Slots Games",
    href: "#SlotsGames",
  },
  { label: "Fish Games", href: "#FishGames" },
  { label: "Keno Games", href: "#KenoGames" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-white">
      <div className="mx-auto px-6 py-12">
        {/* Logo + Description */}
        <div className="mb-10">
          <Link href={"/"}>
            <Image
              width={109}
              height={100}
              className="min-w-[109px]"
              src={Logo}
              alt="Logo"
            />
          </Link>
          <p className="text-sm text-white font-light mt-[20px]">
            At onlineslotsofficial.com, entry and gameplay are always 100% free.
            No purchase is ever required to play or win. Void where prohibited
            by law. Terms of Service apply.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-white/10 pb-10">
          {/* About */}
          <div>
            <h4 className="mb-4 font-normal text-[18px]">About</h4>
            <div className="flex flex-wrap gap-4">
              {aboutLinks.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="px-4 py-2 text-[12px] rounded-full border border-white/30 hover:bg-white hover:text-black transition"
                >
                  {item}
                </Link>
              ))}

              <span className="px-4 py-2 text-sm rounded-full border border-white/30 flex items-center gap-2">
                Your Privacy Choices
                {/* <span className="bg-blue-600 text-xs px-2 py-0.5 rounded">
                  ✓✓
                </span> */}
              </span>
            </div>
          </div>

          {/* Games */}
          <div>
            <h4 className="mb-4 font-normal text-[18px]">Games</h4>
            <div className="flex flex-wrap gap-2">
              {gameLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="px-4 py-2 text-[12px] rounded-full border border-white/30 hover:bg-white hover:text-black transition"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="py-8 border-b border-white/10">
          <h4 className="font-semibold mb-2">
            Online support 24/7: Contact Us
          </h4>
          <p className="text-sm text-white/70">
            US Payment Related Queries (24/7):{" "}
            <Link href={"tel:11234567890"}>+1 (123) 456-7890</Link>
          </p>
          <p className="text-xs text-white/50 mt-2">
            Please use the applicable number for your country of residence.
            Calls to the incorrect number may incur additional charges.
          </p>
        </div>

        {/* Bottom Legal */}
        <div className="pt-6 text-xs text-white/50 space-y-2">
          <p>
            OnlineSlotsofficial.com is operated by B-Two Operations Limited, a
            company incorporated in the Isle of Man under registration number
            021483V, with its registered office at Third Floor, 34 Hope Street,
            Douglas, Isle of Man, IM1 1AP.
          </p>
          <p>© 2026 onlineslotsofficial.com | All rights reserved.</p>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-[101] sm:p-4 p-2 bg-neutral-900">
        <div className="flex gap-3 p-4 bg-[#64008b80]">
          <button className="cursor-pointer px-2 py-1 rounded-[5px] transition-all duration-500 ease-in-out hover:bg-[#64008b] hover:border-[#bc13fe] text-[16px] text-gray-300 border-2 border-white/10">
            <Image
              src={PlayNow}
              alt="PlayNow"
              width={150}
              height={52}
              className="sm:w-[150px] w-[100px] h-auto"
            />
          </button>
          <button className="cursor-pointer px-2 py-1 rounded-[5px] transition-all duration-500 ease-in-out hover:bg-[#64008b] hover:border-[#bc13fe] text-[16px] text-gray-300 border-2 border-white/10">
            <Image
              src={CreateAccount}
              alt="CreateAccount"
              width={150}
              height={52}
              className="sm:w-[150px] w-[100px] h-auto"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
