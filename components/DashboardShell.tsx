"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <div className="w-full lg:w-[calc(100%-280px)] flex flex-col flex-1 border-l border-l-[#FFFFFF14] ">
        <Navbar
          collapsed={collapsed}
          onToggle={() => setCollapsed((p) => !p)}
          onMobileToggle={() => setMobileOpen(true)}
        />

        <main className="p-8">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
