"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import {
  Home,
  UserCircle,
  LogOut,
  Settings,
  Menu,
  X,
  ShieldCheck,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { useToast } from "@/app/components/Toast";

const navItems = [
  { name: "Overview", href: "/dashboard", icon: <Home className="w-5 h-5" /> },
  {
    name: "My Profile",
    href: "/dashboard/profile",
    icon: <UserCircle className="w-5 h-5" />,
  },
  {
    name: "Clients",
    href: "/dashboard/clients",
    icon: <Users className="w-5 h-5" />,
  },
  {
    name: "Approvals",
    href: "/dashboard/approvals",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: <Settings className="w-5 h-5" />,
  },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { trigger } = useToast();

  const handleLogout = async () => {
    try {
      await signOut({ callbackUrl: "/auth/login" });
      trigger("success", "Logged out successfully!");
    } catch (error) {
      console.error("Logout error:", error);
      trigger("error", "Failed to log out. Please try again.");
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside
        className={`${
          open ? "w-64" : "w-20"
        } bg-gray-800 p-4 transition-all duration-300 flex flex-col justify-between`}
      >
        <div>
          <button onClick={() => setOpen(!open)} className="mb-6">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <nav className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-amber-600/20 transition ${
                  pathname === item.href ? "bg-amber-600/30 font-semibold" : ""
                }`}
              >
                {item.icon}
                {open && <span>{item.name}</span>}
              </Link>
            ))}
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 text-sm hover:text-amber-400"
        >
          <LogOut className="w-5 h-5" />
          {open && "Logout"}
        </button>
      </aside>

      {/* Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="h-16 bg-gray-800 border-b border-gray-700 flex items-center justify-between px-6">
          <h1 className="text-lg font-bold">Lagos Drivers Admin</h1>
          <div className="text-sm text-gray-300">Logged in as Admin</div>
        </header>

        <div className="flex-1 p-6 overflow-y-auto">{children}</div>
      </main>
    </div>
  );
}
