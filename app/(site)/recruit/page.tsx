// app/recruit/page.tsx
import React from "react";
import Head from "next/head";
import Image from "next/image";

const RecruitPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Recruit Drivers with DrivePro | Partner With Us</title>
        <meta
          name="description"
          content="Partner with DrivePro to recruit experienced, professional drivers across Nigeria. Join our network and find trusted drivers fast."
        />
        <meta
          name="keywords"
          content="driver recruitment, hire drivers, driver hiring Nigeria, chauffeur recruitment, driving jobs"
        />
        <meta property="og:url" content="https://drivepro.ng/recruit" />
        <meta property="og:image" content="/og-image.jpg" />
      </Head>

      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Recruit Professional Drivers Easily
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Are you a company, household, or organization looking for trained
            and verified drivers? Let LagosDriversLink handle your driver
            recruitment with speed and reliability.
          </p>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden border-2 border-yellow-500/20">
            <Image
              src="/istockphoto-1218844586-612x612.jpg"
              alt="Recruit a driver"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">
              Why Recruit with LagosDriversLink?
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Access to a pool of pre-vetted, experienced drivers.",
              "Background checks, driving tests, and references provided.",
              "Flexible hiring options: full-time, part-time, or on-demand.",
              "Relationship manager to handle onboarding.",
              "Coverage across all major Nigerian cities.",
              "24/7 support for all your driver management needs.",
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-full bg-yellow-500 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">
              Start Recruiting Today
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Fill out the short form below and our team will contact you with
              qualified driver profiles that match your needs.
            </p>
          </div>

          <form className="space-y-6 bg-gray-900 p-8 md:p-10 rounded-xl border border-gray-800">
            <div>
              <label className="block mb-2 font-medium text-gray-300">
                Company/Individual Name
              </label>
              <input
                type="text"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your name or company"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="+234..."
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium text-gray-300">
                  Driver Type Needed
                </label>
                <select
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                >
                  <option value="">Select driver type</option>
                  <option value="personal">Personal Driver</option>
                  <option value="corporate">Corporate Driver</option>
                  <option value="chauffeur">Chauffeur</option>
                  <option value="delivery">Delivery Driver</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-300">
                  Location
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Lagos, Abuja, Port Harcourt..."
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-300">
                Additional Notes (Optional)
              </label>
              <textarea
                className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32"
                placeholder="Any special requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-yellow-500/20"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RecruitPage;
