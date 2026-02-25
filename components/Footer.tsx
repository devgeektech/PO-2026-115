import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo777.png";
// import PlayNow from "@/public/images/biggestjackpot_video.gif";
// import CreateAccount from "@/public/images/createaccount_btn.gif";
import telegramIcon from "@/public/animations/telegram.json";
import whatsappIcon from "@/public/animations/whatsapp.json";
import messengerIcon from "@/public/animations/messenger.json";
import facebookIcon from "@/public/animations/facebook.json";
import smsIcon from "@/public/animations/sms.json";
import Lottie from "lottie-react";
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
    <footer className="footer bg-[#0f0f0f] text-white">
      <div className="mx-auto px-2 md:px-6 md:py-12 py-6">
        {/* Logo + Description */}
        <div className="mb-10">
          <Link href={"/"} className="inline-block">
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
      <div className="fixed bottom-0 left-0 right-0 z-[101] md:hidden">
        <div className="bg_trans flex justify-center gap-3 bg-[#0f0f0f]">
          <div className="bg-[#64008b80] p-2 w-full">
            <div className="socialMenu w-auto h-auto rounded-[6px]">
              <ul className="flex justify-center items-center">
                <li>
                  <Link
                    target="_blank"
                    href={"http://t.me/onlineslotsofficial"}
                    className="w-[75px] h-[75px] overflow-hidden flex items-center justify-center"
                  >
                    <Lottie
                      animationData={telegramIcon}
                      loop={true}
                      autoplay={true}
                      className="scale-130"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"https://wa.me/qr/OG5BNF6LOMCNP1"}
                    className="w-[75px] h-[75px] overflow-hidden flex items-center justify-center"
                  >
                    <Lottie
                      animationData={whatsappIcon}
                      loop={true}
                      autoplay={true}
                      className="scale-130"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"https://www.messenger.com/"}
                    className="w-[75px] h-[75px] overflow-hidden flex items-center justify-center"
                  >
                    <Lottie
                      animationData={messengerIcon}
                      loop={true}
                      autoplay={true}
                      className="scale-130"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href={"https://www.facebook.com/"}
                    className="w-[75px] h-[75px] overflow-hidden flex items-center justify-center"
                  >
                    <Lottie
                      animationData={facebookIcon}
                      loop={true}
                      autoplay={true}
                      className="scale-130"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="sms:+12145515913"
                    className="w-[75px] h-[75px] overflow-hidden flex items-center justify-center"
                  >
                    <Lottie
                      animationData={smsIcon}
                      loop={true}
                      autoplay={true}
                      className="scale-130"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
