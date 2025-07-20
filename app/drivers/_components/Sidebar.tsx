"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, Search, LayoutDashboard } from "lucide-react";
import Image from "next/image";

const navLinks = [
  {
    name: "Dashboard",
    href: "/drivers",
    icon: LayoutDashboard,
  },
  {
    name: "Drivers",
    href: "/drivers/operators",
    icon: Users,
  },
  {
    name: "Search",
    href: "/dashboard/search",
    icon: Search,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-[#363635] text-white shadow-lg flex flex-col justify-between">
      <div className="p-6">
        <Link
          href="/"
          className="flex items-center w-[120px] h-[80px] relative"
        >
          <Image
            src="/ldl_logo.png"
            alt="Lagos Drivers Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
        <nav className="space-y-3">
          {navLinks.map(({ name, href, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-4 py-2 rounded-md mt-4 font-medium transition-colors ${
                  isActive
                    ? "bg-white text-[#161E64]"
                    : "hover:bg-white/10 text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                {name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-6 text-sm text-gray-300">
        &copy; {new Date().getFullYear()} LagosDriversLink
      </div>
    </aside>
  );
}
