import { sanityClient } from "@/lib/sanity";
import { GET_FEATURED_DRIVERS } from "@/lib/queries";
import Image from "next/image";

type Driver = {
  _id: string;
  name: string;
  experience: number;
  location: string;
  bio: string;
  category: string;
  rating: number;
  photo: string;
};

export default async function FeaturedDrivers() {
  const drivers: Driver[] = await sanityClient.fetch(GET_FEATURED_DRIVERS);

  if (!drivers.length) return null;

  return (
    <section className="py-16 px-6 sm:px-12 md:px-20 bg-white dark:bg-black text-black dark:text-white transition">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Featured Drivers
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {drivers.map((driver) => (
            <div
              key={driver._id}
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-xl border border-gray-100 dark:border-zinc-800 transition"
            >
              <Image
                src={driver.photo}
                alt={driver.name}
                width={400}
                height={250}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold">{driver.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {driver.experience} yrs • {driver.category} •{" "}
                  {driver.location}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {driver.bio}
                </p>
                <div className="text-yellow-400 font-bold pt-2">
                  ⭐ {driver.rating.toFixed(1)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
