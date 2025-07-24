"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  HelpCircle,
  Shield,
  FileText,
  Heart,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function PremiumFooter() {
  const categories = [
    {
      title: "Services",
      links: [
        { name: "Private Drivers", href: "/services/private" },
        { name: "Corporate Drivers", href: "/services/corporate" },
        { name: "Logistics Drivers", href: "/services/logistics" },
        { name: "Event Drivers", href: "/services/events" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Partnerships", href: "/partners" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Safety", href: "/safety" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Driver Handbook", href: "/handbook" },
        { name: "Community", href: "/community" },
        { name: "FAQs", href: "/faq" },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Logo and Social */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">
              Lagos<span className="text-yellow-500">Drivers</span>Link
            </h2>
            <p className="text-gray-300 mb-6">
              Connecting you with trusted professional drivers in Lagos since
              2023.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition"
              >
                <Facebook className="text-black hover:text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition"
              >
                <Twitter className="text-black hover:text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition"
              >
                <Instagram className="text-black hover:text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition"
              >
                <Linkedin className="text-black hover:text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-yellow-500 rounded-full hover:bg-yellow-600 transition"
              >
                <Youtube className="text-black hover:text-white" />
              </a>
            </div>
          </div>

          {/* Category Links */}
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4 text-lg">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <span className="text-gray-300 text-sm">
              © 2023 LagosDriversLink
            </span>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-yellow-500" />
              <span className="text-gray-300 text-sm">English</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-300 text-sm">₦ NGN</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#"
              className="flex items-center text-gray-300 hover:text-yellow-500 text-sm"
            >
              <Shield className="h-4 w-4 mr-1 text-yellow-500" /> Safety
            </Link>
            <Link
              href="#"
              className="flex items-center text-gray-300 hover:text-yellow-500 text-sm"
            >
              <FileText className="h-4 w-4 mr-1 text-yellow-500" /> Terms
            </Link>
            <Link
              href="#"
              className="flex items-center text-gray-300 hover:text-yellow-500 text-sm"
            >
              <HelpCircle className="h-4 w-4 mr-1 text-yellow-500" /> Help
            </Link>
            <Link
              href="mailto:samsonenoch@lagosdriverslink.com"
              className="flex items-center text-gray-300 hover:text-yellow-500 text-sm"
            >
              <Mail className="h-4 w-4 mr-1 text-yellow-500" />{" "}
              teams@lagosdriverslink.com
            </Link>
            <Link
              href="tel:+2349032702233"
              className="flex items-center text-gray-300 hover:text-yellow-500 text-sm"
            >
              <Phone className="h-4 w-4 mr-1 text-yellow-500" /> +234 903 270
              2233
            </Link>
            <Link
              href="#"
              className="flex items-center text-gray-300 hover:text-yellow-500 text-sm"
            >
              <Heart className="h-4 w-4 mr-1 text-yellow-500" /> Donate
            </Link>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center mt-8 space-x-6">
          <div className="bg-yellow-500 px-4 py-2 rounded-lg flex items-center">
            <span className="text-black text-sm font-medium">
              ✓ Verified Drivers
            </span>
          </div>
          <div className="bg-yellow-500 px-4 py-2 rounded-lg flex items-center">
            <span className="text-black text-sm font-medium">
              🔒 Secure Payments
            </span>
          </div>
          <div className="bg-yellow-500 px-4 py-2 rounded-lg flex items-center">
            <span className="text-black text-sm font-medium">
              ⭐ 4.9/5 Ratings
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
