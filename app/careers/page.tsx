import { Briefcase, DollarSign, Award, ArrowRight } from "lucide-react";
import Image from "next/image";

const CareersPage = () => {
  const openPositions = [
    {
      title: "Logistics Manager",
      type: "Full-time",
      location: "Lagos",
      department: "Operations",
      salary: "₦400,000 - ₦600,000/mo",
    },
    {
      title: "Fleet Maintenance Technician",
      type: "Full-time",
      location: "Abuja",
      department: "Maintenance",
      salary: "₦250,000 - ₦350,000/mo",
    },
    {
      title: "Customer Success Representative",
      type: "Full-time",
      location: "Port Harcourt",
      department: "Customer Service",
      salary: "₦180,000 - ₦250,000/mo",
    },
    {
      title: "Business Development Executive",
      type: "Full-time",
      location: "Lagos",
      department: "Sales",
      salary: "₦300,000 + Commission",
    },
    {
      title: "Mobile App Developer",
      type: "Contract",
      location: "Remote",
      department: "Technology",
      salary: "Negotiable",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Careers at DrivePro
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Join our team and help shape the future of corporate transportation
            in Africa.
          </p>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
              Why Join DrivePro?
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="w-10 h-10 text-yellow-500" />,
                title: "Competitive Compensation",
                description:
                  "We offer industry-leading salaries and benefits packages.",
              },
              {
                icon: <Award className="w-10 h-10 text-yellow-500" />,
                title: "Growth Opportunities",
                description:
                  "Clear career paths and professional development programs.",
              },
              {
                icon: <Briefcase className="w-10 h-10 text-yellow-500" />,
                title: "Impactful Work",
                description:
                  "Contribute to transforming transportation across Africa.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gray-700">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
              Current Openings
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore opportunities to join our growing team.
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
            <div className="grid grid-cols-12 bg-gray-800 p-4 border-b border-gray-700">
              <div className="col-span-5 font-bold">Position</div>
              <div className="col-span-2 font-bold">Type</div>
              <div className="col-span-2 font-bold">Location</div>
              <div className="col-span-2 font-bold">Salary</div>
              <div className="col-span-1"></div>
            </div>

            {openPositions.map((position, index) => (
              <div
                key={index}
                className="grid grid-cols-12 p-4 border-b border-gray-800 hover:bg-gray-800/50 transition-colors"
              >
                <div className="col-span-5 font-medium">{position.title}</div>
                <div className="col-span-2 text-gray-400">{position.type}</div>
                <div className="col-span-2 text-gray-400">
                  {position.location}
                </div>
                <div className="col-span-2 text-yellow-500">
                  {position.salary}
                </div>
                <div className="col-span-1 text-right">
                  <a href="#" className="text-yellow-500 hover:text-yellow-400">
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">
                Our Culture
              </h2>
              <p className="text-gray-300 mb-6">
                At DrivePro, we foster an environment of innovation,
                collaboration, and excellence. Our team is our greatest asset,
                and we&apos;re committed to creating a workplace where everyone
                can thrive.
              </p>
              <div className="space-y-4">
                {[
                  "Competitive salaries and benefits",
                  "Flexible work arrangements",
                  "Continuous learning opportunities",
                  "Employee recognition programs",
                  "Team building activities",
                  "Health and wellness initiatives",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3 text-yellow-500">
                      ✓
                    </span>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg overflow-hidden aspect-square relative">
                <Image
                  src="/culture-1.jpg"
                  alt="Team Culture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gray-800 rounded-lg overflow-hidden aspect-square relative">
                <Image
                  src="/culture-2.jpg"
                  alt="Team Culture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gray-800 rounded-lg overflow-hidden aspect-square relative">
                <Image
                  src="/culture-3.jpg"
                  alt="Team Culture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gray-800 rounded-lg overflow-hidden aspect-square relative">
                <Image
                  src="/culture-4.jpg"
                  alt="Team Culture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
