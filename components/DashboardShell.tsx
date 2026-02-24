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
      <div className="flex h-full bg-black text-white">
        {/* Sidebar */}
        <Sidebar
          collapsed={collapsed}
          mobileOpen={mobileOpen}
          onCloseMobile={() => setMobileOpen(false)}
        />

        {/* Main Content Area */}
        <div className="flex flex-col flex-1 min-w-0 border-l border-l-[#FFFFFF14] overflow-hidden">
          <Navbar
            collapsed={collapsed}
            onToggle={() => setCollapsed((p) => !p)}
            onMobileToggle={() => setMobileOpen(true)}
          />

          {/* Scrollable Content */}
          <main className="flex-1 overflow-y-auto p-2 md:p-8 relative">
            {/* Social Menu */}
            <div className="fixed right-0 z-[105] hidden md:block top-[200px]">
              <ul className="flex flex-col items-center">
                <li>
                  <Link
                    target="_blank"
                    href="https://web.telegram.org/k/"
                    className="w-[75px] h-[75px] flex items-center justify-center"
                  >
                    <Lottie animationData={telegramIcon} loop autoplay />
                  </Link>
                </li>

                <li>
                  <Link
                    target="_blank"
                    href="https://web.whatsapp.com/"
                    className="w-[75px] h-[75px] flex items-center justify-center"
                  >
                    <Lottie animationData={whatsappIcon} loop autoplay />
                  </Link>
                </li>

                <li>
                  <Link
                    target="_blank"
                    href="https://www.messenger.com/"
                    className="w-[75px] h-[75px] flex items-center justify-center"
                  >
                    <Lottie animationData={messengerIcon} loop autoplay />
                  </Link>
                </li>

                <li>
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/"
                    className="w-[75px] h-[75px] flex items-center justify-center"
                  >
                    <Lottie animationData={facebookIcon} loop autoplay />
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
