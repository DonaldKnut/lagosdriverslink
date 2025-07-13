// app/auth/layout.tsx
"use client";

import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const backgroundImages = [
  // "/istockphoto-1218844586-612x612.jpg",
  "/young-black-handsome-cab-driver-600nw-1434428810.webp",
  "/blog-post-ZA-1024x536.webp",
  "/dreamstime_xxl_99965748-600x400.jpg",
];

export default function AuthLayout({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    setProgress(0);
  }, [index]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Background */}
      <div className="relative w-1/2 hidden md:block">
        {backgroundImages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="Lagos Driver Agency Background"
            fill
            className={clsx(
              "object-cover absolute inset-0 transition-opacity duration-1000",
              i === index ? "opacity-100 z-10" : "opacity-0"
            )}
          />
        ))}
        <div className="absolute inset-0 bg-black/60 z-20" />
        <div className="absolute inset-0 z-30 text-white p-10 flex flex-col justify-center">
          {/* Logo */}
          <div className="mb-4">
            <Image
              src="/ldl_logo.png"
              alt="Lagos Drivers Logo"
              width={148}
              height={148}
              className="mb-2"
            />
          </div>
          <h1 className="text-4xl font-extrabold leading-tight text-yellow-400 drop-shadow">
            Lagos Drivers Link
          </h1>
          <p className="mt-2 text-lg text-gray-200 max-w-sm">
            Trusted. Verified. Available across Lagos.
          </p>
        </div>

        {/* Animated dots with progress bars */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-40">
          {backgroundImages.map((_, i) => (
            <div
              key={i}
              className="relative h-2 w-10 bg-black rounded overflow-hidden"
            >
              <div
                className={clsx(
                  "absolute top-0 left-0 h-full bg-yellow-400 transition-all",
                  {
                    "w-full": i < index,
                    "w-0": i > index,
                    "w-[length:var(--progress)%]": i === index,
                  }
                )}
                style={i === index ? { width: `${progress}%` } : {}}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="w-full md:w-1/2 h-full overflow-y-auto bg-gray-900 text-white px-6 py-10 flex flex-col items-center justify-start">
        <div className="w-full max-w-md mt-6">{children}</div>
      </div>
    </div>
  );
}
