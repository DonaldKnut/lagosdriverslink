"use client";
import Image from "next/image";

export default function HeroSection({
  heroTitle,
  heroSubtitle,
  heroImage,
  ctaText,
  ctaLink,
}: {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  ctaText: string;
  ctaLink: string;
}) {
  return (
    <section className="min-h-[85vh] mt-[88px] flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-12 md:px-16 lg:px-24 py-12 gap-8 bg-black transition-all duration-500">
      {/* Left: Text */}
      <div className="max-w-lg text-center md:text-left space-y-5">
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-yellow-800">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-300">
              {heroTitle}
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-yellow-100 italic">
            {heroSubtitle}
          </h2>
        </div>

        <p className="text-base md:text-lg text-white leading-relaxed">
          Vetted professionals for private, corporate, and logistics needs.
          <span className="block mt-2 font-semibold text-yellow-400">
            Safety · Reliability · Excellence
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-1">
          <a
            href={ctaLink}
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-lg font-medium text-sm hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-md hover:shadow-yellow-500/50"
          >
            {ctaText}
          </a>
          <a
            href="/hire"
            className="px-6 py-3 border border-yellow-500 text-yellow-300 rounded-lg font-medium text-sm hover:bg-yellow-500/10 transition-all duration-300"
          >
            Need a Driver?
          </a>
        </div>

        <div className="flex items-center gap-3 pt-3 justify-center md:justify-start">
          <div className="flex -space-x-2">
            {[
              "960x0.webp",
              "180820-hodge-mn-1115.webp",
              "istockphoto-981750034-612x612.jpg",
            ].map((img, idx) => (
              <div
                key={idx}
                className="relative w-8 h-8 rounded-full border-2 border-yellow-300 overflow-hidden"
              >
                <Image
                  src={`/${img}`}
                  alt={`Happy client ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-xs text-yellow-400">
            <span className="font-bold text-yellow-300">200+</span> happy
            clients this month
          </p>
        </div>
      </div>

      {/* Right: Hero Image */}
      <div className="w-full max-w-md lg:max-w-lg relative">
        <div className="absolute -top-6 -right-6 w-28 h-28 bg-yellow-400 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-yellow-600 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative z-10">
          <Image
            src={heroImage}
            alt="Professional driver illustration"
            width={600}
            height={600}
            className="w-full h-auto object-contain rounded-lg shadow-xl"
            priority
          />
        </div>

        <div className="absolute -bottom-4 -right-4 bg-black p-3 rounded-lg shadow-md z-20 border border-yellow-700">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-xs font-mono font-semibold text-yellow-400">
              DRIVERS ONLINE
            </p>
          </div>
          <p className="text-xl font-bold text-yellow-200 mt-1">47+</p>
        </div>
      </div>
    </section>
  );
}
