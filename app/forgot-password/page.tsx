import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
            Reset Your Password
          </h1>
          <p className="text-gray-400">
            Enter your email to receive a password reset link
          </p>
        </div>

        {/* Form */}
        <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-lg shadow-yellow-500/10">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="w-5 h-5 text-yellow-500" />
                </div>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 p-2.5"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg shadow-yellow-500/20"
            >
              <span className="relative z-10 flex items-center justify-center">
                Send Reset Link
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/auth/login"
              className="text-yellow-500 hover:text-yellow-400 text-sm font-medium inline-flex items-center"
            >
              <ArrowRight className="w-4 h-4 rotate-180 mr-1" />
              Back to login
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Need help?{" "}
            <Link
              href="/help"
              className="text-yellow-500 hover:text-yellow-400"
            >
              Contact support
            </Link>
          </p>
        </div>
      </div>

      {/* Background elements */}
      <div className="fixed -bottom-20 -right-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl -z-10"></div>
      <div className="fixed -top-20 -left-20 w-64 h-64 rounded-full bg-yellow-500/10 blur-3xl -z-10"></div>
    </div>
  );
};

export default ForgotPasswordPage;
