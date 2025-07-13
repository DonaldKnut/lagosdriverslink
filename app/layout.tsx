// app/layout.tsx
import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import { Poppins } from "next/font/google";
import "./globals.css";

// Configure Poppins with desired weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lagos Drivers Link",
  description: "Outsource professional Lagos drivers on-demand",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
