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

        <main className="flex-1 min-w-0 p-2 md:p-8 overflow-x-hidden">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}
