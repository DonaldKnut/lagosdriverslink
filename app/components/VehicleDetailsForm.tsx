import { ChangeEvent } from "react";
import { Car, Shield } from "lucide-react";

interface VehicleDetails {
  providesVehicle: string;
  vehicleType: string;
  transmissionType: string;
  insuranceType: string;
  vehicleBrand: string;
  vehicleModel: string;
  vehicleYear: string;
}

interface VehicleDetailsFormProps {
  data: VehicleDetails;
  handleInputChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

export default function VehicleDetailsForm({
  data,
  handleInputChange,
}: VehicleDetailsFormProps) {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
        <Car className="w-6 h-6" />
        Vehicle Information
      </h3>
      <div className="space-y-2">
        <label className="block text-yellow-300 font-medium">
          Will you provide a vehicle?
        </label>
        <select
          name="providesVehicle"
          value={data.providesVehicle}
          onChange={handleInputChange}
          className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
        >
          <option value="yes">Yes, we&apos;ll provide vehicle</option>
          <option value="no">No, driver should use their own</option>
          <option value="negotiable">To be discussed</option>
        </select>
      </div>
      {data.providesVehicle === "yes" && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-yellow-300 font-medium">
              Vehicle Type
            </label>
            <select
              name="vehicleType"
              value={data.vehicleType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            >
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="truck">Truck</option>
              <option value="van">Van</option>
              <option value="luxury">Luxury Vehicle</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-yellow-300 font-medium">
              Transmission Type
            </label>
            <select
              name="transmissionType"
              value={data.transmissionType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            >
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
              <option value="both">Both</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-yellow-300 font-medium flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Insurance Type
            </label>
            <select
              name="insuranceType"
              value={data.insuranceType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            >
              <option value="comprehensive">Comprehensive</option>
              <option value="third-party">Third Party</option>
              <option value="none">None</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-yellow-300 font-medium">
              Vehicle Brand
            </label>
            <input
              name="vehicleBrand"
              type="text"
              value={data.vehicleBrand}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white placeholder:text-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
              placeholder="e.g. Toyota, Mercedes"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-yellow-300 font-medium">
              Vehicle Model
            </label>
            <input
              name="vehicleModel"
              type="text"
              value={data.vehicleModel}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white placeholder:text-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
              placeholder="e.g. Camry, G-Wagon"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-yellow-300 font-medium">
              Vehicle Year
            </label>
            <input
              name="vehicleYear"
              type="text"
              value={data.vehicleYear}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white placeholder:text-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
              placeholder="e.g. 2020"
            />
          </div>
        </div>
      )}
    </div>
  );
}
