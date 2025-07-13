"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, User, Home, Users, Phone } from "lucide-react";
import Image from "next/image";

// Navigation links configuration
const navigationLinks = [
  { name: "Home", href: "/", icon: <Home size={18} /> },
  { name: "Drivers", href: "/drivers", icon: <Users size={18} /> },
  { name: "Recruit", href: "/recruit", icon: <User size={18} /> },
  { name: "Contact", href: "/contact", icon: <Phone size={18} /> },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Always call hooks first
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only return null *after* hooks have been called
  if (pathname === "/auth/login" || pathname === "/auth/register") return null;

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-black/50 shadow-xl border-b border-white/10"
          : "bg-gradient-to-br from-white/70 to-gray-100/60 dark:from-gray-900/50 dark:to-black/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo Image */}
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 text-white dark:text-white">
            {navigationLinks.map(({ name, href }) => (
              <Link
                key={href}
                href={href}
                className={`relative group font-medium hover:text-yellow-400 transition-colors ${
                  pathname === href ? "text-yellow-400" : ""
                }`}
              >
                <span>{name}</span>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-400 transition-all duration-300 ${
                    pathname === href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="flex items-center space-x-4 ml-6">
            <Link
              href="/auth/login"
              className="px-5 py-2 rounded-lg border border-white/30 hover:bg-white hover:text-black transition-all text-sm font-medium hover:border-white"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="px-5 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all text-sm font-semibold shadow-md hover:shadow-lg"
            >
              Sign Up
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none p-1"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={28} className="text-yellow-400" />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-black to-gray-900/95 backdrop-blur-xl py-6 px-6 space-y-6">
          {navigationLinks.map(({ name, href, icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center space-x-4 text-white hover:text-yellow-400 text-lg transition ${
                pathname === href ? "text-yellow-400" : ""
              }`}
            >
              <span className="text-yellow-400">{icon}</span>
              <span className="font-medium">{name}</span>
            </Link>
          ))}

          <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
            <Link
              href="/auth/login"
              onClick={() => setMenuOpen(false)}
              className="block w-full px-6 py-3 text-center border border-white/30 rounded-lg hover:bg-white hover:text-black transition-all text-base font-medium"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              onClick={() => setMenuOpen(false)}
              className="block w-full px-6 py-3 text-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all text-base font-semibold shadow-lg"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
