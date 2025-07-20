// app/(site)/drivers/page.tsx OR app/drivers/page.tsx
"use client";

import { sanityClient } from "@/lib/sanity";
import { GET_ALL_DRIVERS } from "@/lib/queries";
import Image from "next/image";
import {
  Star,
  MapPin,
  CheckCircle2,
  XCircle,
  Search,
  Filter,
} from "lucide-react";
import { useState, useEffect } from "react";

type Driver = {
  _id: string;
  name: string;
  experience: number;
  location: string;
  bio: string;
  category: string;
  availability: boolean;
  rating: number;
  photo: string;
  languages?: string[];
  vehicleType?: string;
};

export default function DriversPage() {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const data = await sanityClient.fetch(GET_ALL_DRIVERS);
        setDrivers(data);
      } catch (error) {
        console.error("Error fetching drivers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDrivers();
  }, []);

  const filteredDrivers = drivers.filter(
    (driver) =>
      driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white">Driver Management</h1>
          <p className="text-gray-400 mt-2">
            Browse and manage your professional drivers
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter Bar */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search drivers by name, location or category..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
              <Filter className="h-5 w-5" />
              Filters
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-gray-400 text-sm font-medium">
                Total Drivers
              </h3>
              <p className="text-3xl font-bold text-white mt-2">
                {drivers.length}
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-gray-400 text-sm font-medium">
                Available Now
              </h3>
              <p className="text-3xl font-bold text-white mt-2">
                {drivers.filter((d) => d.availability).length}
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-gray-400 text-sm font-medium">
                Average Rating
              </h3>
              <p className="text-3xl font-bold text-white mt-2">
                {drivers.length > 0
                  ? (
                      drivers.reduce((acc, d) => acc + d.rating, 0) /
                      drivers.length
                    ).toFixed(1)
                  : "0.0"}
              </p>
            </div>
          </div>

          {/* Drivers Grid */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDrivers.map((driver) => (
                <div
                  key={driver._id}
                  className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 bg-gray-700">
                    <Image
                      src={driver.photo}
                      alt={driver.name}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                      <div
                        className={`p-1.5 rounded-full ${
                          driver.availability ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {driver.availability ? (
                          <CheckCircle2 className="h-4 w-4 text-white" />
                        ) : (
                          <XCircle className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <span className="text-sm font-medium text-white">
                        {driver.availability ? "Available" : "Unavailable"}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{driver.name}</h3>
                      <div className="flex items-center bg-yellow-500/10 px-2 py-1 rounded">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="font-bold text-yellow-500">
                          {driver.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-400 mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{driver.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {driver.category}
                      </span>
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {driver.experience} years exp
                      </span>
                      {driver.vehicleType && (
                        <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                          {driver.vehicleType}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                      {driver.bio}
                    </p>

                    <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-2 px-4 rounded-lg transition-all duration-300">
                      Hire Driver
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
