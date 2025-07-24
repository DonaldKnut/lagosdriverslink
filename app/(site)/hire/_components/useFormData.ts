// _components/useFormData.ts
import { useState, ChangeEvent } from "react";

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

// Rename to FormDataType to match the import, or keep as FormData
export interface FormDataType {
  personalDetails: PersonalDetails;
  projectDetails: ProjectDetails;
  vehicleDetails: VehicleDetails;
  addressInformation: AddressInformation;
}

const initialFormData: FormDataType = {
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
};

const salaryRates = {
  weekdays: 155000,
  weekdaysSaturday: 175000,
  fullWeek: 200000,
  shift: 30000,
};

export default function useFormData() {
  const [formData, setFormData] = useState<FormDataType>(initialFormData);

  const handleInputChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    section: keyof FormDataType
  ) => {
    const { name, value } = event.target;

    if (section === "projectDetails" && name === "workSchedule") {
      setFormData((previousData) => ({
        ...previousData,
        projectDetails: {
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

  return { formData, handleInputChange };
}
