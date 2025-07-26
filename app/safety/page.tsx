import { Shield, AlertTriangle, Ambulance, Car, Camera } from "lucide-react";
import Image from "next/image";

const SafetyPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Safety First
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Our unwavering commitment to protecting our clients, employees, and
            communities.
          </p>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
        </div>
      </section>

      {/* Safety Commitment */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
              Our Safety Commitment
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              At DrivePro, safety isn&apos;t just a priority—it&apos;s the
              foundation of everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-10 h-10 text-yellow-500" />,
                title: "Vehicle Safety",
                description:
                  "Regular maintenance and inspections on all fleet vehicles",
              },
              {
                icon: <AlertTriangle className="w-10 h-10 text-yellow-500" />,
                title: "Driver Training",
                description:
                  "Rigorous certification and ongoing safety training",
              },
              {
                icon: <Ambulance className="w-10 h-10 text-yellow-500" />,
                title: "Emergency Preparedness",
                description: "Comprehensive protocols for any situation",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gray-700">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">
                Advanced Safety Features
              </h2>
              <p className="text-gray-300 mb-6">
                Our vehicles are equipped with state-of-the-art safety
                technology to ensure peace of mind.
              </p>
              <ul className="space-y-4">
                {[
                  "GPS tracking with real-time monitoring",
                  "Dash cams for incident recording",
                  "Emergency SOS buttons in all vehicles",
                  "Regular vehicle health diagnostics",
                  "24/7 roadside assistance",
                  "Two-way communication systems",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3 text-yellow-500">
                      ✓
                    </span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl p-2 border border-gray-700">
              <div className="bg-gray-900 rounded-lg overflow-hidden aspect-video relative">
                <Image
                  src="/safety-features.jpg"
                  alt="Safety Features"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Standards */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
              Driver Standards
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Car className="w-8 h-8 text-yellow-500" />,
                title: "Rigorous Screening",
                description:
                  "Comprehensive background checks and driving history verification",
              },
              {
                icon: <Shield className="w-8 h-8 text-yellow-500" />,
                title: "Certification",
                description:
                  "Defensive driving certification required for all drivers",
              },
              {
                icon: <Camera className="w-8 h-8 text-yellow-500" />,
                title: "Continuous Training",
                description: "Monthly safety training and performance reviews",
              },
              {
                icon: <AlertTriangle className="w-8 h-8 text-yellow-500" />,
                title: "Zero Tolerance",
                description:
                  "Strict policies against distracted or impaired driving",
              },
            ].map((standard, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gray-700 mr-4">
                    {standard.icon}
                  </div>
                  <h3 className="text-xl font-bold">{standard.title}</h3>
                </div>
                <p className="text-gray-300">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Certifications */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
              Certifications &amp; Compliance
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              "/cert-iso.png",
              "/cert-dot.png",
              "/cert-nsaf.png",
              "/cert-ohsas.png",
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700"
              >
                <div className="relative h-20 w-full">
                  <Image
                    src={cert}
                    alt="Certification"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SafetyPage;
