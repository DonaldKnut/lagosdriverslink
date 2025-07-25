import { Briefcase, Shield, Clock, Users, ArrowRight } from "lucide-react";

const CorporateServicesPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Corporate Services
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Premium transportation solutions tailored for your business needs.
          </p>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
              Our Corporate Solutions
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive services designed for businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="w-8 h-8 text-yellow-500" />,
                title: "Executive Transportation",
                description:
                  "Premium chauffeured services for your leadership team and VIP guests.",
                features: [
                  "Luxury vehicles",
                  "Professional drivers",
                  "24/7 availability",
                ],
              },
              {
                icon: <Users className="w-8 h-8 text-yellow-500" />,
                title: "Employee Shuttle",
                description:
                  "Reliable daily transportation for your workforce across multiple locations.",
                features: [
                  "Custom routes",
                  "Real-time tracking",
                  "Dedicated fleet",
                ],
              },
              {
                icon: <Shield className="w-8 h-8 text-yellow-500" />,
                title: "Secure Transport",
                description:
                  "Discreet and protected movement for sensitive personnel and assets.",
                features: [
                  "Armored options",
                  "Trained personnel",
                  "Confidentiality",
                ],
              },
              {
                icon: <Clock className="w-8 h-8 text-yellow-500" />,
                title: "Event Transportation",
                description:
                  "Seamless logistics for corporate events, conferences, and meetings.",
                features: [
                  "Group coordination",
                  "On-site management",
                  "Flexible scheduling",
                ],
              },
              {
                icon: <Briefcase className="w-8 h-8 text-yellow-500" />,
                title: "Airport Transfers",
                description:
                  "Punctual and comfortable transfers to/from all major airports.",
                features: [
                  "Flight tracking",
                  "Meet & greet",
                  "Luggage handling",
                ],
              },
              {
                icon: <Briefcase className="w-8 h-8 text-yellow-500" />,
                title: "Custom Solutions",
                description:
                  "Tailored programs designed for your specific business requirements.",
                features: [
                  "Needs assessment",
                  "Dedicated account manager",
                  "Reporting",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gray-700 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center text-yellow-500 font-medium group hover:text-yellow-400 transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-600/20 to-yellow-800/20 rounded-xl p-8 md:p-12 border border-yellow-500/30 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400">
            Ready to Elevate Your Corporate Transportation?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is ready to design a custom solution that meets your exact
            business requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Contact Sales
            </a>
            <a
              href="tel:+2348123456789"
              className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateServicesPage;
