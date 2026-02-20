"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import Lottie from "lottie-react";
import telegramIcon from "@/public/animations/telegram.json";
import whatsappIcon from "@/public/animations/whatsapp.json";
import messengerIcon from "@/public/animations/messenger.json";
import facebookIcon from "@/public/animations/facebook.json";
import { SearchProvider } from "@/context/SearchContext";
export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  return (
     <SearchProvider>
    <div className="flex min-h-screen bg-black text-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-w-0 border-l border-l-[#FFFFFF14]">
        <Navbar
          collapsed={collapsed}
          onToggle={() => setCollapsed((p) => !p)}
          onMobileToggle={() => setMobileOpen(true)}
        />

        <main className="flex-1 min-w-0 p-2 md:p-8">
          <div className=" fixed socialMenu top-[100px] md:top-[120px] lg:top-[400px] right-0 z-[105] w-auto h-auto rounded-[6px]">
            <ul className="flex flex-col justify-center items-center">
              <li>
                <Link
                  target="_blank"
                  href={"https://web.telegram.org/k/"}
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
                  href={"https://web.whatsapp.com/"}
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
            </ul>
          </div>
          {React.isValidElement(children)
            ? React.cloneElement(children as React.ReactElement<any>, {
                searchTerm,
              })
            : children}
        </main>

        <Footer />
      </div>
    </div>
    </SearchProvider>
  );
}
