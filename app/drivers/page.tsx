import { sanityClient } from "@/lib/sanity";
import Image from "next/image";

type Driver = {
  _id: string;
  name: string;
  licenseNumber: string;
  phone: string;
  imageUrl: string;
  location?: string;
  experience?: string;
};

async function getDrivers(): Promise<Driver[]> {
  const query = `*[_type == "driver"]{
    _id,
    name,
    licenseNumber,
    phone,
    "imageUrl": image.asset->url,
    location,
    experience
  } | order(_createdAt desc)`;

  return await sanityClient.fetch(query);
}

export default async function DriverListPage() {
  const drivers = await getDrivers();

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
              {driver.imageUrl ? (
                <Image
                  src={driver.imageUrl}
                  alt={driver.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-[60px] h-[60px] rounded-full bg-[#d6da09] flex items-center justify-center text-white font-bold">
                  {driver.name[0]}
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold">{driver.name}</h3>
                <p className="text-sm text-gray-600">
                  {driver.location || "Unknown location"}
                </p>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-700 space-y-1">
              <p>
                <strong>License:</strong> {driver.licenseNumber}
              </p>
              <p>
                <strong>Phone:</strong> {driver.phone}
              </p>
              {driver.experience && (
                <p>
                  <strong>Experience:</strong> {driver.experience}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
