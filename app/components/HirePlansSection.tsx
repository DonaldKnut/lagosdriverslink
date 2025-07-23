"use client";

import { CheckCircle, Star, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const packages = [
  {
    title: "Management Contract (Regular)",
    price: "₦50,000",
    description:
      "The Management of Lagos Chaffeur Services is responsible for all admin and HR matters. Driver remains our staff. Up to 3 replacements per year.",
    features: [
      "Periodic Verification & Inspection",
      "Periodic Staff Training",
      "Replacements at Subsidised Rate",
      "Drivers' Salary and benefits",
    ],
    popular: false,
  },
  {
    title: "One-Off Recruitment (Direct)",
    price: "₦80,000",
    description:
      "You hire the driver directly. Includes full background data handover and 1 free replacement.",
    features: [
      "NIN & Guarantor Check",
      "Driver Address Verification",
      "1 Free Replacement (First Month)",
      "Background Check Report Transfer",
    ],
    popular: true,
  },
  {
    title: "Personal Driver (Monthly)",
    price: "From ₦140,000",
    description:
      "Hire a vetted driver permanently. Suitable for daily commutes, meetings, and private errands.",
    features: [
      "Monday–Friday: ₦140,000",
      "Monday–Saturday: ₦150,000",
      "Spy Driver: From ₦250,000",
      "Overtime billed ₦1,000/hr after 8PM",
    ],
    popular: false,
  },
];

// Properly typed motion variants
const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeIn: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function HirePlansSection() {
  return (
    <section className="bg-gradient-to-b from-black to-zinc-900 text-yellow-50 py-28 px-6 sm:px-12 md:px-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              Hire Professional & Vetted Drivers
            </span>
            <br />
            <span className="text-xl md:text-2xl font-medium text-yellow-200">
              Without the Stress and Headaches
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-6 rounded-full" />
          <p className="text-yellow-200 max-w-3xl mx-auto text-lg leading-relaxed">
            From full-time personal drivers to spy-class chauffeurs, we&apos;ve
            got a network of trained, background-checked drivers across Lagos.
            Choose a plan below to get started.
          </p>
        </motion.div>

        <motion.div variants={fadeIn} className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular
                  ? "border-2 border-yellow-400 bg-gradient-to-b from-zinc-900 to-zinc-800"
                  : "border border-yellow-700/50 bg-zinc-900/80"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-xs font-bold flex items-center">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                  {pkg.title}
                </h3>
                <p className="text-3xl font-extrabold text-yellow-500 mb-3">
                  {pkg.price}
                  {!pkg.price.startsWith("From") && (
                    <span className="text-sm font-normal text-yellow-400">
                      /one-time
                    </span>
                  )}
                </p>
                <p className="text-yellow-200 mb-4 text-sm leading-relaxed">
                  {pkg.description}
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-yellow-100 text-sm"
                  >
                    <CheckCircle className="text-yellow-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                  pkg.popular
                    ? "bg-yellow-500 text-black hover:bg-yellow-600"
                    : "bg-yellow-600/20 text-yellow-400 hover:bg-yellow-600/30 border border-yellow-600/50"
                }`}
              >
                Select Plan <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="mt-20 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-xl p-8 md:p-10 text-center shadow-2xl shadow-yellow-500/20"
        >
          <h4 className="text-2xl md:text-3xl font-bold mb-6">
            Our Simple 3-Step Process
          </h4>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-black/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-yellow-900 font-bold text-lg mb-3 flex items-center gap-2">
                <span className="bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  1
                </span>
                Reservation
              </div>
              <p className="text-black/90">
                Make your request using our streamlined hire form - takes less
                than 2 minutes.
              </p>
            </div>
            <div className="bg-black/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-yellow-900 font-bold text-lg mb-3 flex items-center gap-2">
                <span className="bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  2
                </span>
                Confirmation
              </div>
              <p className="text-black/90">
                Our team calls within 24 hours to confirm details and payment.
              </p>
            </div>
            <div className="bg-black/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-yellow-900 font-bold text-lg mb-3 flex items-center gap-2">
                <span className="bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  3
                </span>
                Meet Your Driver
              </div>
              <p className="text-black/90">
                Receive vetted driver options within 3-10 working days to test
                and choose.
              </p>
            </div>
          </div>
          <button className="mt-8 bg-black text-yellow-400 hover:bg-black/90 px-8 py-3 rounded-lg font-bold flex items-center gap-2 mx-auto transition-all">
            Get Started Now <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
