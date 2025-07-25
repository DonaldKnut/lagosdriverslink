import { Newspaper, Mic, Tv, Award, Download, ArrowRight } from "lucide-react";

const PressPage = () => {
  const pressReleases = [
    {
      title: "DrivePro Expands Fleet with 50 New Luxury Vehicles",
      date: "May 15, 2023",
      category: "Company News",
    },
    {
      title:
        "DrivePro Named 'Logistics Company of the Year' at Industry Awards",
      date: "March 28, 2023",
      category: "Awards",
    },
    {
      title: "DrivePro Launches Eco-Friendly Transportation Initiative",
      date: "February 10, 2023",
      category: "Sustainability",
    },
    {
      title: "DrivePro Secures $10M in Series B Funding",
      date: "November 5, 2022",
      category: "Funding",
    },
  ];

  const mediaCoverage = [
    {
      outlet: "Business Day",
      title: "How DrivePro is Revolutionizing Corporate Transport in Nigeria",
      date: "April 3, 2023",
      type: "Print",
    },
    {
      outlet: "TechCabal",
      title: "The Tech Behind DrivePro's Logistics Dominance",
      date: "January 18, 2023",
      type: "Online",
    },
    {
      outlet: "Channels TV",
      title: "DrivePro CEO Discusses Expansion Plans on Business Morning",
      date: "December 7, 2022",
      type: "TV",
    },
    {
      outlet: "The Guardian",
      title: "DrivePro's Safety Initiatives Set New Industry Standards",
      date: "October 22, 2022",
      type: "Print",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Press Center
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            News, media resources, and company announcements from DrivePro.
          </p>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
        </div>
      </section>

      {/* Press Resources */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
              Press Resources
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Newspaper className="w-10 h-10 text-yellow-500" />,
                title: "Press Kit",
                description:
                  "Download our company overview, logos, and executive bios.",
              },
              {
                icon: <Mic className="w-10 h-10 text-yellow-500" />,
                title: "Media Inquiries",
                description:
                  "Contact our PR team for interviews and information.",
              },
              {
                icon: <Tv className="w-10 h-10 text-yellow-500" />,
                title: "Brand Assets",
                description:
                  "Access approved images, videos, and brand guidelines.",
              },
            ].map((resource, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gray-700">
                    {resource.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-300 text-center mb-4">
                  {resource.description}
                </p>
                <div className="flex justify-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-yellow-500 font-medium group hover:text-yellow-400 transition-colors"
                  >
                    Access Now
                    <Download className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-yellow-400">
            Press Releases
          </h2>

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-yellow-500/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{release.title}</h3>
                    <div className="flex items-center text-sm text-gray-400">
                      <span>{release.date}</span>
                      <span className="mx-2">•</span>
                      <span className="text-yellow-500">
                        {release.category}
                      </span>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="mt-4 md:mt-0 inline-flex items-center text-yellow-500 font-medium group hover:text-yellow-400 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-yellow-400">
            Media Coverage
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {mediaCoverage.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-500/50 transition-colors"
              >
                <div className="flex items-center mb-3">
                  <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    {item.type === "TV" ? (
                      <Tv className="w-5 h-5 text-yellow-500" />
                    ) : item.type === "Online" ? (
                      <Globe className="w-5 h-5 text-yellow-500" />
                    ) : (
                      <Newspaper className="w-5 h-5 text-yellow-500" />
                    )}
                  </div>
                  <h3 className="font-bold">{item.outlet}</h3>
                </div>
                <h4 className="text-lg mb-2">{item.title}</h4>
                <div className="flex items-center text-sm text-gray-400">
                  <span>{item.date}</span>
                  <span className="mx-2">•</span>
                  <span>{item.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressPage;
