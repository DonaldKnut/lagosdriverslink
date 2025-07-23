import { User, Calendar, DollarSign, Clock } from "lucide-react";

// Define the shape of the data prop
interface ProjectDetails {
  driverType: string;
  contractDuration: string;
  salaryPackage: string;
  workSchedule: string;
  accommodationProvided: string;
  dutiesDescription: string;
  resumptionDate: string;
  resumptionTime: string;
  closingTime: string;
}

// Define the shape of the salaryRates prop
interface SalaryRates {
  weekdays: number;
  weekdaysSaturday: number;
  fullWeek: number;
  shift: number;
}

// Define the props interface for the component
interface ProjectDetailsFormProps {
  data: ProjectDetails;
  handleInputChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  salaryRates: SalaryRates;
}

export default function ProjectDetailsForm({
  data,
  handleInputChange,
  salaryRates,
}: ProjectDetailsFormProps) {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
        <User className="w-6 h-6" />
        Project Details
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-yellow-300 font-medium">
            Type of Driver Needed
          </label>
          <select
            name="driverType"
            value={data.driverType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
          >
            <option value="personal">Personal/Family Driver</option>
            <option value="corporate">Corporate Driver</option>
            <option value="executive">Executive Chauffeur</option>
            <option value="spy">Spy Police Driver</option>
            <option value="part-time">Part-Time Driver</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="block text-yellow-300 font-medium flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Contract Duration
          </label>
          <select
            name="contractDuration"
            value={data.contractDuration}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
          >
            <option value="3-months">3 Months</option>
            <option value="6-months">6 Months</option>
            <option value="1-year">1 Year</option>
            <option value="2-years">2 Years</option>
            <option value="permanent">Permanent</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="block text-yellow-300 font-medium flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            Salary Package (Monthly)
          </label>
          <input
            name="salaryPackage"
            type="text"
            value={`₦${parseInt(data.salaryPackage).toLocaleString()}`}
            readOnly
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white focus:outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-yellow-300 font-medium">
            Work Schedule
          </label>
          <select
            name="workSchedule"
            value={data.workSchedule}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
          >
            <option value="weekdays">Monday-Friday</option>
            <option value="weekdaysSaturday">Monday-Saturday</option>
            <option value="fullWeek">Monday-Sunday</option>
            <option value="shift">Daily Service</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="block text-yellow-300 font-medium">
            Accommodation Provided?
          </label>
          <select
            name="accommodationProvided"
            value={data.accommodationProvided}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
          >
            <option value="no">No Accommodation</option>
            <option value="yes">Full Accommodation</option>
            <option value="partial">Partial/Allowance</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="block text-yellow-300 font-medium flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Project Start Date
          </label>
          <input
            name="resumptionDate"
            type="date"
            value={data.resumptionDate}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white placeholder:text-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            placeholder="Select project start date"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-yellow-300 font-medium flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Daily Start Time
          </label>
          <input
            name="resumptionTime"
            type="time"
            value={data.resumptionTime}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white placeholder:text-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            placeholder="Select daily start time"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-yellow-300 font-medium flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Daily End Time
          </label>
          <input
            name="closingTime"
            type="time"
            value={data.closingTime}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white placeholder:text-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
            placeholder="Select daily end time"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="block text-yellow-300 font-medium">
          Project Description
        </label>
        <textarea
          name="dutiesDescription"
          value={data.dutiesDescription}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-yellow-600/30 text-white placeholder:text-yellow-200/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
          placeholder="Describe the project requirements, special conditions, and any other relevant details..."
        />
      </div>
    </div>
  );
}
