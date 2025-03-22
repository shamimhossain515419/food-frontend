"use client";
import { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSiteBar from "./AdminSiteBar";
export default function AdminLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <AdminSiteBar isOpen={isSidebarOpen} />
      <div className="flex-1 md:ml-64 transition-all">
        <AdminNavbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
