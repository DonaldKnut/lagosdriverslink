"use client";

import Link from "next/link";
import {
  User,
  LockKeyhole,
  Mail,
  Eye,
  EyeOff,
  Calendar,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/app/components/Toast";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { trigger } = useToast();
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      const updatedErrors = { ...errors };
      delete updatedErrors[name];
      setErrors(updatedErrors);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.dob) newErrors.dob = "Date of birth is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          dob: formData.dob,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        trigger("error", data.error || "Something went wrong.");
      } else {
        trigger("success", "Account created successfully!");
        router.push("/auth/login");
      }
    } catch {
      trigger("error", "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-black px-4 py-10 text-white">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-yellow-500 hover:text-yellow-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to home
        </Link>
      </div>

      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <User className="h-10 w-10 text-yellow-400" />
        </div>
        <h2 className="text-2xl font-bold text-yellow-200">Create Account</h2>
        <p className="text-yellow-300 mt-1">
          Join our network of trusted clients
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <label className="block">
          <span className="text-sm text-yellow-300">Full Name</span>
          <div className="relative mt-1">
            <User className="absolute left-3 top-3 h-5 w-5 text-yellow-500" />
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className={`w-full bg-black border ${
                errors.name ? "border-red-500" : "border-yellow-700"
              } rounded-lg py-3 pl-10 pr-4 text-yellow-100 placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500`}
            />
          </div>
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name}</p>
          )}
        </label>

        {/* Email */}
        <label className="block">
          <span className="text-sm text-yellow-300">Email</span>
          <div className="relative mt-1">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-yellow-500" />
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-black border ${
                errors.email ? "border-red-500" : "border-yellow-700"
              } rounded-lg py-3 pl-10 pr-4 text-yellow-100 placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500`}
            />
          </div>
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}
        </label>

        {/* Password */}
        <label className="block">
          <span className="text-sm text-yellow-300">Password</span>
          <div className="relative mt-1">
            <LockKeyhole className="absolute left-3 top-3 h-5 w-5 text-yellow-500" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              className={`w-full bg-black border ${
                errors.password ? "border-red-500" : "border-yellow-700"
              } rounded-lg py-3 pl-10 pr-12 text-yellow-100 placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-yellow-500" />
              ) : (
                <Eye className="h-5 w-5 text-yellow-500" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">{errors.password}</p>
          )}
        </label>

        {/* Confirm Password */}
        <label className="block">
          <span className="text-sm text-yellow-300">Confirm Password</span>
          <div className="relative mt-1">
            <LockKeyhole className="absolute left-3 top-3 h-5 w-5 text-yellow-500" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full bg-black border ${
                errors.confirmPassword ? "border-red-500" : "border-yellow-700"
              } rounded-lg py-3 pl-10 pr-12 text-yellow-100 placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5 text-yellow-500" />
              ) : (
                <Eye className="h-5 w-5 text-yellow-500" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-sm text-red-500 mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </label>

        {/* Date of Birth */}
        <label className="block">
          <span className="text-sm text-yellow-300">Date of Birth</span>
          <div className="relative mt-1">
            <Calendar className="absolute left-3 top-3 h-5 w-5 text-yellow-500" />
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className={`w-full bg-black border ${
                errors.dob ? "border-red-500" : "border-yellow-700"
              } rounded-lg py-3 pl-10 pr-4 text-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-500`}
            />
          </div>
          {errors.dob && (
            <p className="text-sm text-red-500 mt-1">{errors.dob}</p>
          )}
        </label>

        {/* Terms and Conditions */}
        <div className="flex items-center text-sm text-yellow-400">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-yellow-600 rounded bg-black"
            required
          />
          <label htmlFor="terms" className="ml-2">
            I agree to the{" "}
            <Link href="/terms" className="text-yellow-300 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-yellow-300 hover:underline">
              Privacy Policy
            </Link>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 px-4 rounded-lg font-medium text-black bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200 ${
            isLoading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Creating account..." : "Sign Up"}
        </button>

        {/* Redirect to login */}
        <p className="text-sm text-center text-yellow-400">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-medium text-yellow-300 hover:text-yellow-200 underline"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
