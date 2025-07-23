"use client";

import { useState, FormEvent, ChangeEvent, JSX } from "react";
import { SendHorizontal, CheckCircle, User, Car, Home } from "lucide-react";
import DriverRequirementsForm from "@/app/components/DriverRequirementsForm";
import PersonalDetailsForm from "@/app/components/PersonalDetailsForm";
import VehicleDetailsForm from "@/app/components/VehicleDetailsForm";
import AddressInformationForm from "@/app/components/AddressInformationForm";

type FormSection = "personal" | "driver" | "vehicle" | "address";

interface PersonalDetails {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  maritalStatus: string;
  preferredDriverLocation: string;
}

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

interface VehicleDetails {
  providesVehicle: string;
  vehicleType: string;
  transmissionType: string;
  insuranceType: string;
  vehicleBrand: string;
  vehicleModel: string;
  vehicleYear: string;
}

interface AddressInformation {
  homeAddress: string;
  officeAddress: string;
  regularPickupLocations: string;
}

interface FormData {
  personalDetails: PersonalDetails;
  projectDetails: ProjectDetails;
  vehicleDetails: VehicleDetails;
  addressInformation: AddressInformation;
}

export default function HireDriverPage() {
  const [formData, setFormData] = useState<FormData>({
    personalDetails: {
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      maritalStatus: "no",
      preferredDriverLocation: "",
    },
    projectDetails: {
      driverType: "personal",
      contractDuration: "6-months",
      salaryPackage: "155000",
      workSchedule: "weekdays",
      accommodationProvided: "no",
      dutiesDescription: "",
      resumptionDate: "",
      resumptionTime: "",
      closingTime: "",
    },
    vehicleDetails: {
      providesVehicle: "yes",
      vehicleType: "sedan",
      transmissionType: "automatic",
      insuranceType: "comprehensive",
      vehicleBrand: "",
      vehicleModel: "",
      vehicleYear: "",
    },
    addressInformation: {
      homeAddress: "",
      officeAddress: "",
      regularPickupLocations: "",
    },
  });

  const [activeSection, setActiveSection] = useState<FormSection>("personal");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const salaryRates = {
    weekdays: 155000,
    weekdaysSaturday: 175000,
    fullWeek: 200000,
    shift: 30000,
  };

  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    section: keyof FormData
  ) => {
    const { name, value } = event.target;

    if (section === "projectDetails" && name === "workSchedule") {
      setFormData((previousData) => ({
        ...previousData,
        driverRequirements: {
          ...previousData.projectDetails,
          workSchedule: value,
          salaryPackage:
            salaryRates[value as keyof typeof salaryRates].toString(),
        },
      }));
    } else {
      setFormData((previousData) => ({
        ...previousData,
        [section]: {
          ...previousData[section],
          [name]: value,
        },
      }));
    }
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/hire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formSections: {
    id: FormSection;
    label: string;
    icon: JSX.Element;
  }[] = [
    { id: "personal", label: "Personal Details", icon: <User size={18} /> },
    { id: "driver", label: "Project Details", icon: <User size={18} /> },
    { id: "vehicle", label: "Vehicle Details", icon: <Car size={18} /> },
    { id: "address", label: "Address Information", icon: <Home size={18} /> },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white py-24 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Professional Driver Request Form
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-6 rounded-full" />
          <p className="text-yellow-200 max-w-2xl mx-auto text-lg">
            Complete this form to get matched with a vetted professional driver
            within 24 hours
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-black text-center p-12 rounded-xl shadow-2xl border-2 border-yellow-400">
            <CheckCircle className="w-14 h-14 mx-auto mb-6 text-yellow-800" />
            <h2 className="text-3xl font-bold mb-4">
              Request Submitted Successfully!
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Our team will contact you within 24 hours to discuss your driver
              requirements and begin the matching process.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleFormSubmit}
            className="bg-zinc-900/70 rounded-xl shadow-2xl overflow-hidden border border-yellow-600/30"
          >
            <div className="grid grid-cols-4 border-b border-yellow-600/20">
              {formSections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center justify-center gap-2 py-4 px-2 text-sm font-medium transition-all ${
                    activeSection === section.id
                      ? "bg-yellow-600/20 text-yellow-400"
                      : "text-yellow-200 hover:bg-zinc-800"
                  }`}
                >
                  {section.icon}
                  <span className="hidden sm:inline">{section.label}</span>
                </button>
              ))}
            </div>

            <div className="p-8">
              {activeSection === "personal" && (
                <PersonalDetailsForm
                  data={formData.personalDetails}
                  handleInputChange={(event) =>
                    handleInputChange(event, "personalDetails")
                  }
                />
              )}
              {activeSection === "driver" && (
                <DriverRequirementsForm
                  data={formData.projectDetails}
                  handleInputChange={(event) =>
                    handleInputChange(event, "projectDetails")
                  }
                  salaryRates={salaryRates}
                />
              )}
              {activeSection === "vehicle" && (
                <VehicleDetailsForm
                  data={formData.vehicleDetails}
                  handleInputChange={(event) =>
                    handleInputChange(event, "vehicleDetails")
                  }
                />
              )}
              {activeSection === "address" && (
                <AddressInformationForm
                  data={formData.addressInformation}
                  handleInputChange={(event) =>
                    handleInputChange(event, "addressInformation")
                  }
                />
              )}

              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-12 pt-6 border-t border-yellow-600/20">
                {activeSection !== "personal" && (
                  <button
                    type="button"
                    onClick={() => {
                      const currentIndex = formSections.findIndex(
                        (section) => section.id === activeSection
                      );
                      if (currentIndex > 0) {
                        setActiveSection(formSections[currentIndex - 1].id);
                      }
                    }}
                    className="px-6 py-3 rounded-lg border border-yellow-600/50 text-yellow-400 hover:bg-yellow-600/10 transition-all"
                  >
                    Previous
                  </button>
                )}
                {activeSection !== "address" ? (
                  <button
                    type="button"
                    onClick={() => {
                      const currentIndex = formSections.findIndex(
                        (section) => section.id === activeSection
                      );
                      if (currentIndex < formSections.length - 1) {
                        setActiveSection(formSections[currentIndex + 1].id);
                      }
                    }}
                    className="px-6 py-3 rounded-lg bg-yellow-600/80 text-white hover:bg-yellow-600 transition-all ml-auto"
                  >
                    Next Section
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-lg hover:shadow-yellow-500/30 disabled:opacity-70 flex items-center justify-center gap-2 ml-auto"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5where.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <SendHorizontal className="w-5 h-5" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
