import { Users, Globe, Award, BarChart2 } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            About DrivePro
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Pioneering excellence in corporate transportation and logistics
            solutions across Nigeria.
          </p>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
              Our Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">
                Mission
              </h3>
              <p className="text-gray-300 mb-6">
                To revolutionize corporate transportation in Nigeria through
                innovative solutions, exceptional service, and uncompromising
                safety standards.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">
                Vision
              </h3>
              <p className="text-gray-300">
                To become Africa's most trusted corporate mobility partner,
                setting industry benchmarks for reliability and customer
                satisfaction.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <img
                src="/about-mission.jpg"
                alt="Our Team"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10 text-yellow-500" />,
                value: "500+",
                label: "Clients Served",
              },
              {
                icon: <Globe className="w-10 h-10 text-yellow-500" />,
                value: "12",
                label: "Cities Covered",
              },
              {
                icon: <Award className="w-10 h-10 text-yellow-500" />,
                value: "25",
                label: "Industry Awards",
              },
              {
                icon: <BarChart2 className="w-10 h-10 text-yellow-500" />,
                value: "99.7%",
                label: "On-Time Rate",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 text-center border border-gray-800"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">
                  {item.value}
                </div>
                <p className="text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
              Leadership Team
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Meet the visionary leaders driving DrivePro's success story.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Adetayo Johnson",
                role: "CEO & Founder",
                image: "/team-ceo.jpg",
              },
              { name: "Folake Adebayo", role: "COO", image: "/team-coo.jpg" },
              { name: "Emeka Okonkwo", role: "CTO", image: "/team-cto.jpg" },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-500/50 transition-colors"
              >
                <div className="h-64 bg-gray-700 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-yellow-500 mb-4">{member.role}</p>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
