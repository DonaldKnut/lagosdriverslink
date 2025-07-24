import { Car, Home, User } from "lucide-react";
import { JSX } from "react";

type FormSection = "personal" | "driver" | "vehicle" | "address";

interface FormNavigationProps {
  activeSection: FormSection;
  setActiveSection: (section: FormSection) => void;
}

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

export default function FormNavigation({
  activeSection,
  setActiveSection,
}: FormNavigationProps) {
  return (
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
  );
}
