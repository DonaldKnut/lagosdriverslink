import {
  HelpCircle,
  Phone,
  Mail,
  MessageSquare,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

const HelpPage = () => {
  const faqs = [
    {
      question: "How do I book a corporate transportation service?",
      answer:
        "You can book through our website, mobile app, or by calling our customer service line. Corporate accounts have access to dedicated account managers.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, bank transfers, and corporate billing arrangements. Payment methods can be configured in your account settings.",
    },
    {
      question: "How can I track my vehicle?",
      answer:
        "All bookings include real-time tracking which can be accessed through your account dashboard or mobile app.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellations made more than 24 hours in advance receive a full refund. Same-day cancellations may incur a fee depending on the service type.",
    },
    {
      question: "Do you provide services outside major cities?",
      answer:
        "Yes, we operate nationwide with coverage in all 36 states. Some remote areas may require advance notice for service.",
    },
    {
      question: "How do I become a DrivePro driver?",
      answer:
        "Visit our Careers page to view current openings and application requirements for driver positions.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Help Center
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Find answers to common questions or contact our support team.
          </p>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
              Support Options
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Phone className="w-10 h-10 text-yellow-500" />,
                title: "Phone Support",
                description: "Available 24/7 for urgent matters",
                contact: "+234 812 345 6789",
                action: "Call Now",
              },
              {
                icon: <Mail className="w-10 h-10 text-yellow-500" />,
                title: "Email Support",
                description: "Typically responds within 2 hours",
                contact: "support@drivepro.ng",
                action: "Send Email",
              },
              {
                icon: <MessageSquare className="w-10 h-10 text-yellow-500" />,
                title: "Live Chat",
                description: "Available Mon-Fri, 8am-6pm WAT",
                contact: "Start chat from any page",
                action: "Chat Now",
              },
            ].map((option, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gray-700">
                    {option.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-300 text-center mb-2">
                  {option.description}
                </p>
                <p className="text-yellow-400 text-center mb-4 font-medium">
                  {option.contact}
                </p>
                <div className="flex justify-center">
                  <a
                    href={
                      index === 0
                        ? "tel:+2348123456789"
                        : index === 1
                          ? "mailto:support@drivepro.ng"
                          : "#"
                    }
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-lg transition-colors duration-300 inline-flex items-center"
                  >
                    {option.action}
                    {index !== 2 && <ArrowRight className="ml-2 w-4 h-4" />}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800"
              >
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <HelpCircle className="w-5 h-5 text-yellow-500 mr-3" />
                  {faq.question}
                </h3>
                <p className="text-gray-300 ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-600/20 to-yellow-800/20 rounded-xl p-8 md:p-12 border border-yellow-500/30">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <div className="bg-yellow-500/20 p-4 rounded-full">
                <AlertCircle className="w-12 h-12 text-yellow-500" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400">
                Emergency Assistance
              </h2>
              <p className="text-gray-300 mb-6">
                For immediate assistance with an active booking, please call our
                24/7 emergency line.
              </p>
              <a
                href="tel:+2348123456789"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg inline-flex items-center transition-colors duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency Line: +234 812 345 6789
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpPage;
