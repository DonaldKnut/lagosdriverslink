import { User, Mail, Phone } from "lucide-react";

// Define the shape of the data prop
interface PersonalDetails {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  maritalStatus: string;
  preferredDriverLocation: string;
}

// Define the props interface for the component
interface PersonalDetailsFormProps {
  data: PersonalDetails;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export default function PersonalDetailsForm({
  data,
  handleInputChange,
}: PersonalDetailsFormProps) {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
        <User className="w-6 h-6" />
        Personal Information
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-yellow-300 font-medium">Full Name</label>
          <input
            required
            name="fullName"
            type="text"
            value={data.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white placeholder:text-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            placeholder="Your full name"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-yellow-300 font-medium flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Email Address
          </label>
          <input
            required
            name="emailAddress"
            type="email"
            value={data.emailAddress}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white placeholder:text-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            placeholder="Your email address"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-yellow-300 font-medium flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Phone Number
          </label>
          <input
            required
            name="phoneNumber"
            type="tel"
            value={data.phoneNumber}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white placeholder:text-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            placeholder="Your phone number"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-yellow-300 font-medium">
            Marital Status
          </label>
          <select
            name="maritalStatus"
            value={data.maritalStatus}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
          >
            <option value="no">Single</option>
            <option value="yes">Married</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="block text-yellow-300 font-medium">
            Preferred Driver Location
          </label>
          <input
            name="preferredDriverLocation"
            type="text"
            value={data.preferredDriverLocation}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white placeholder:text-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            placeholder="Preferred area for driver residence"
          />
        </div>
      </div>
    </div>
  );
}
