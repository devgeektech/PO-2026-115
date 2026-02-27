import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navbar from "@/components/Navbar";
import DashboardShell from "@/components/DashboardShell";

/* ---------------- Google Font ---------------- */
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-ubuntu",
});

/* ---------------- Metadata ---------------- */
export const metadata: Metadata = {
  metadataBase: new URL("http://3.151.125.192:3000"),

  title: {
    default: "Online Slots Official – Social Casino Games",
    template: "%s | Online Slots Official",
  },

  description:
    "Play hundreds of exciting social casino games including slots, fish games, keno, and top hitting games. No purchase required. Pure entertainment and nonstop fun!",

  keywords: [
    "online slots",
    "social casino",
    "slot games",
    "fish games",
    "keno games",
    "top hitting games",
    "free casino games",
  ],

  authors: [{ name: "Online Slots Official" }],

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      {
        url: "/favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Online Slots Official – Social Casino",
    description:
      "Experience electrifying social casino games and exciting jackpot thrills.",
    url: "http://3.151.125.192:3000",
    siteName: "Online Slots Official",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online Slots Official – Social Casino",
    description:
      "Play top social casino games online with nonstop entertainment.",
  },
};


/* ---------------- Root Layout ---------------- */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.variable}>
        <DashboardShell>{children}</DashboardShell>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
