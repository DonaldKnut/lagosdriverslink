import { sanityClient } from "@/lib/sanity";
import Image from "next/image";
import { GET_ALL_DRIVERS } from "@/lib/queries";

type Driver = {
  _id: string;
  name: string;
  experience?: string;
  location?: string;
  bio?: string;
  category?: string;
  availability?: boolean;
  rating?: number;
  photo?: string; // Changed from imageUrl to match GET_ALL_DRIVERS
};

async function getDrivers(): Promise<Driver[]> {
  try {
    const drivers = await sanityClient.fetch(GET_ALL_DRIVERS);
    console.log("Fetched drivers:", drivers); // Log for debugging on Netlify
    return drivers || [];
  } catch (error) {
    console.error("Error fetching drivers:", error);
    return [];
  }
}

export default async function DriverListPage() {
  const drivers = await getDrivers();

  if (!drivers.length) {
    return (
      <div className="ml-64 p-6 min-h-screen">
        <h2 className="text-2xl font-bold mb-6 text-[#fffb21]">
          Registered Drivers
        </h2>
        <p>No drivers found.</p>
      </div>
    );
  }

  return (
    <div className="ml-64 p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-[#fffb21]">
        Registered Drivers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {drivers.map((driver) => (
          <div
            key={driver._id}
            className="bg-white rounded-lg shadow p-4 hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              {driver.photo ? (
                <Image
                  src={driver.photo}
                  alt={driver.name || "Driver"}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-[60px] h-[60px] rounded-full bg-[#d6da09] flex items-center justify-center text-white font-bold">
                  {driver.name?.[0] || "?"}
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold">
                  {driver.name || "Unknown"}
                </h3>
                <p className="text-sm text-gray-600">
                  {driver.location || "Unknown location"}
                </p>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-700 space-y-1">
              {driver.experience && (
                <p>
                  <strong>Experience:</strong> {driver.experience}
                </p>
              )}
              {driver.category && (
                <p>
                  <strong>Category:</strong> {driver.category}
                </p>
              )}
              {driver.rating && (
                <p>
                  <strong>Rating:</strong> ⭐ {driver.rating}
                </p>
              )}
              {driver.bio && (
                <p>
                  <strong>Bio:</strong> {driver.bio}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
