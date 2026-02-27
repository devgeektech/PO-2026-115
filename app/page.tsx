import HomeClient from "@/components/HomeClient";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Online Slots Official – Social Casino Games",
  description:
    "Play hundreds of exciting social casino games including slots, fish, keno and top hitting games. No purchase required. Pure entertainment and nonstop fun!",
  keywords: [
    "online slots",
    "social casino",
    "slot games",
    "fish games",
    "keno games",
    "top ten games",
  ],
  openGraph: {
    title: "Online Slots Official – Social Casino",
    description:
      "Experience electrifying social casino games and big jackpot thrills.",
    url: "http://3.151.125.192:3000/",
    siteName: "Online Slots Official",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Slots Official – Social Casino",
    description:
      "Play top social casino games online with nonstop entertainment.",
  },
};

export default function HomePage() {
  return <HomeClient />;
}