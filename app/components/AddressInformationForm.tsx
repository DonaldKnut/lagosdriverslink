import { ChangeEvent } from "react";
import { Home, Briefcase } from "lucide-react";

interface AddressInformation {
  homeAddress: string;
  officeAddress: string;
  regularPickupLocations: string;
}

interface AddressInformationFormProps {
  data: AddressInformation;
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function AddressInformationForm({
  data,
  handleInputChange,
}: AddressInformationFormProps) {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
        <Home className="w-6 h-6" />
        Address Information
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-yellow-300 font-medium flex items-center gap-2">
            <Home className="w-4 h-4" />
            Home Address
          </label>
          <input
            required
            name="homeAddress"
            type="text"
            value={data.homeAddress}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white placeholder:text-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            placeholder="Your residential address"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-yellow-300 font-medium flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Office Address
          </label>
          <input
            name="officeAddress"
            type="text"
            value={data.officeAddress}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white placeholder:text-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            placeholder="Your office address"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label className="block text-yellow-300 font-medium">
            Regular Pickup Locations
          </label>
          <textarea
            name="regularPickupLocations"
            value={data.regularPickupLocations}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white placeholder:text-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            placeholder="List regular pickup locations (schools, clubs, other frequent destinations)"
          />
        </div>
      </div>
    </div>
  );
}
