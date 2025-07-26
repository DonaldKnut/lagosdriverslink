import { Truck, Package, Warehouse, Globe, Clock } from "lucide-react";
import Image from "next/image";

const LogisticsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Logistics Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            End-to-end supply chain management for businesses across Nigeria.
          </p>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
              Comprehensive Logistics Services
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Truck className="w-10 h-10 text-yellow-500" />,
                title: "Distribution",
                description:
                  "Nationwide distribution network with real-time tracking.",
              },
              {
                icon: <Package className="w-10 h-10 text-yellow-500" />,
                title: "Warehousing",
                description:
                  "Secure storage facilities with inventory management.",
              },
              {
                icon: <Warehouse className="w-10 h-10 text-yellow-500" />,
                title: "Fulfillment",
                description: "End-to-end order processing and fulfillment.",
              },
              {
                icon: <Globe className="w-10 h-10 text-yellow-500" />,
                title: "Import/Export",
                description: "Customs clearance and international shipping.",
              },
              {
                icon: <Clock className="w-10 h-10 text-yellow-500" />,
                title: "Just-in-Time",
                description: "Precision delivery for manufacturing and retail.",
              },
              {
                icon: <Truck className="w-10 h-10 text-yellow-500" />,
                title: "Cold Chain",
                description:
                  "Temperature-controlled logistics for sensitive goods.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gray-700 mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">
              Advanced Logistics Technology
            </h2>
            <p className="text-gray-300 mb-6">
              Our proprietary logistics platform provides real-time visibility
              and control over your supply chain.
            </p>
            <ul className="space-y-4">
              {[
                "Real-time GPS tracking of all shipments",
                "Automated inventory management",
                "Custom reporting and analytics",
                "API integration with your systems",
                "Predictive analytics for demand planning",
                "Mobile app for on-the-go management",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3 text-yellow-500">
                    ✓
                  </span>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800 rounded-xl p-2 border border-gray-700">
            <div className="bg-gray-900 rounded-lg overflow-hidden aspect-video relative">
              <Image
                src="/logistics-dashboard.jpg"
                alt="Logistics Dashboard"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
              Industry Specializations
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Retail", icon: "🛍️" },
              { name: "Healthcare", icon: "🏥" },
              { name: "Manufacturing", icon: "🏭" },
              { name: "E-commerce", icon: "📦" },
              { name: "Agriculture", icon: "🌾" },
              { name: "Oil & Gas", icon: "⛽" },
              { name: "FMCG", icon: "🛒" },
              { name: "Construction", icon: "🏗️" },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700 hover:border-yellow-500/50 transition-colors"
              >
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="font-bold">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogisticsPage;
