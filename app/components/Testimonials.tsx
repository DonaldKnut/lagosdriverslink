"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Olumide A.",
    role: "Lagos Business Owner",
    quote:
      "Hiring a driver has never been this seamless. The professionalism was top-notch.",
    photo: "/Fanta_blog_2020-08-28-Traore-29-Edit-800x533.jpg",
  },
  {
    name: "Sarah K.",
    role: "Event Planner",
    quote:
      "I needed a reliable chauffeur for a wedding — LagosDriversLink.com came through big time!",
    photo: "/360_F_246149382_KHkt8Mw8pptlmVuiqmhavvHBC4SEqBu1.jpg",
  },
  {
    name: "Tolu A.",
    role: "Corporate HR",
    quote:
      "We now outsource all our office drivers via this platform. Safe, smart, experienced guys.",
    photo: "/rose.jpeg",
  },
  {
    name: "Godman A.",
    role: "Corporate HR",
    quote:
      "We now outsource all our office drivers via this platform. Safe, smart, experienced guys.",
    photo: "/istockphoto-1081381240-612x612.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handlePrevious = () => {
    setDirection("left");
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection("right");
    setIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[index];

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-24 px-6 sm:px-12 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-white">
          Trusted by <span className="text-yellow-500">Lagos Elite</span>
        </h2>

        <div className="relative h-[460px] md:h-[520px]">
          <AnimatePresence initial={false}>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: direction === "right" ? 150 : -150,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: direction === "right" ? -150 : 150,
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 400,
                duration: 0.5,
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-full">
                <div className="bg-gradient-to-br from-gray-800 to-black border border-yellow-500/30 p-8 md:p-12 rounded-3xl shadow-2xl shadow-yellow-500/20 w-full max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative w-36 h-36 flex-shrink-0 group">
                      <Image
                        src={currentTestimonial.photo}
                        alt={currentTestimonial.name}
                        fill
                        className="rounded-full object-cover border-4 border-yellow-500 shadow-lg group-hover:border-yellow-400 group-hover:shadow-yellow-500/50 transition-all duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-all duration-300"></div>
                    </div>
                    <div className="text-center md:text-left">
                      <p className="text-lg md:text-xl italic text-gray-200 mb-6 leading-relaxed">
                        “{currentTestimonial.quote}”
                      </p>
                      <div>
                        <div className="font-bold text-2xl text-yellow-500 tracking-tight">
                          {currentTestimonial.name}
                        </div>
                        <div className="text-sm text-gray-400 font-medium">
                          {currentTestimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrevious}
            className="absolute left-0 md:-left-20 top-1/2 -translate-y-1/2 p-4 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-20 top-1/2 -translate-y-1/2 p-4 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, testimonialIndex) => (
            <button
              key={testimonialIndex}
              onClick={() => {
                setDirection(testimonialIndex > index ? "right" : "left");
                setIndex(testimonialIndex);
              }}
              className={`h-4 rounded-full transition-all duration-300 ${
                testimonialIndex === index
                  ? "bg-yellow-500 w-8 shadow-yellow-500/50"
                  : "bg-gray-600 hover:bg-gray-500 w-4"
              }`}
              aria-label={`Go to testimonial ${testimonialIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
