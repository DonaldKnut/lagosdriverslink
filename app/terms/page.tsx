import { FileText, Shield, Lock, AlertTriangle } from "lucide-react";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Terms &amp; Policies
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Legal information governing your use of DrivePro services.
          </p>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
              Our Policies
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FileText className="w-8 h-8 text-yellow-500" />,
                title: "Terms of Service",
                description: "General terms governing use of our services",
                link: "/terms/service",
              },
              {
                icon: <Shield className="w-8 h-8 text-yellow-500" />,
                title: "Privacy Policy",
                description: "How we collect and use your information",
                link: "/terms/privacy",
              },
              {
                icon: <Lock className="w-8 h-8 text-yellow-500" />,
                title: "Data Protection",
                description: "Our commitment to safeguarding your data",
                link: "/terms/data-protection",
              },
              {
                icon: <AlertTriangle className="w-8 h-8 text-yellow-500" />,
                title: "Safety Policy",
                description: "Our standards and procedures for safety",
                link: "/terms/safety",
              },
            ].map((policy, index) => (
              <a
                key={index}
                href={policy.link}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gray-700 mr-4">
                    {policy.icon}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-yellow-400 transition-colors">
                    {policy.title}
                  </h3>
                </div>
                <p className="text-gray-300">{policy.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">
              Terms of Service
            </h2>
            <p className="text-gray-300 mb-6">Last updated: June 15, 2023</p>

            <h3 className="text-xl font-bold mt-8 mb-4 text-yellow-300">
              1. Acceptance of Terms
            </h3>
            <p className="text-gray-300 mb-6">
              By accessing or using any services provided by DrivePro
              (&quot;Services&quot;), you agree to be bound by these Terms of
              Service (&quot;Terms&quot;). If you do not agree to these Terms,
              you may not use our Services.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4 text-yellow-300">
              2. Service Description
            </h3>
            <p className="text-gray-300 mb-6">
              DrivePro provides corporate transportation and logistics services,
              including but not limited to executive transportation, employee
              shuttles, and logistics management.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4 text-yellow-300">
              3. User Responsibilities
            </h3>
            <p className="text-gray-300 mb-6">
              Users of our Services agree to:
            </p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>
                Provide accurate and complete information when creating an
                account
              </li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not misuse or disrupt our Services</li>
              <li>
                Be responsible for all activities that occur under your account
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-4 text-yellow-300">
              4. Payments and Billing
            </h3>
            <p className="text-gray-300 mb-6">
              All fees for Services are as specified in your service agreement.
              DrivePro reserves the right to change prices and institute new
              charges at any time upon prior notice to you.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4 text-yellow-300">
              5. Cancellation Policy
            </h3>
            <p className="text-gray-300 mb-6">
              Cancellations must be made at least 24 hours prior to scheduled
              service to avoid cancellation fees. Same-day cancellations may be
              subject to a fee of up to 100% of the service cost.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4 text-yellow-300">
              6. Limitation of Liability
            </h3>
            <p className="text-gray-300 mb-6">
              DrivePro shall not be liable for any indirect, incidental,
              special, consequential or punitive damages, or any loss of profits
              or revenues, whether incurred directly or indirectly.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4 text-yellow-300">
              7. Governing Law
            </h3>
            <p className="text-gray-300 mb-6">
              These Terms shall be governed by and construed in accordance with
              the laws of the Federal Republic of Nigeria, without regard to its
              conflict of law provisions.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4 text-yellow-300">
              8. Changes to Terms
            </h3>
            <p className="text-gray-300 mb-6">
              DrivePro reserves the right to modify these Terms at any time. We
              will provide notice of any changes by posting the updated Terms on
              our website and updating the &quot;Last updated&quot; date.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4 text-yellow-300">
              9. Contact Information
            </h3>
            <p className="text-gray-300">
              For any questions about these Terms, please contact us at
              legal@drivepro.ng.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
