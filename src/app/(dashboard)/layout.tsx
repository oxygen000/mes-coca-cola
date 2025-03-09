"use client";

import Sidebar from "@/components/Sidebar";
import NavBar from "@/components/Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <NavBar />
        <main className="flex-1 p-6 overflow-auto bg-[#F4F7FE] opacity-100">{children}</main>
      </div>
    </div>
  );
}
