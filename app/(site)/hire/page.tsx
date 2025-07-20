"use client";

import { useState } from "react";
import { SendHorizonal } from "lucide-react";

export default function HireDriverPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    requestDetails: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/hire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white py-24 px-6 sm:px-12 md:px-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">
          Request a Driver
        </h1>
        <p className="text-yellow-200 mb-12">
          Fill out the form below and our team will match you with a trusted,
          professional driver.
        </p>

        {submitted ? (
          <div className="bg-yellow-500 text-black text-center p-10 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold">Request Submitted 🎉</h2>
            <p className="mt-2">
              We&apos;ll get back to you within a few hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { label: "Full Name", name: "fullName", type: "text" },
              { label: "Email Address", name: "email", type: "email" },
              { label: "Phone Number", name: "phone", type: "tel" },
              { label: "Preferred Location", name: "location", type: "text" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-yellow-300 mb-1 font-medium">
                  {field.label}
                </label>
                <input
                  required
                  name={field.name}
                  type={field.type}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md bg-zinc-900 border border-yellow-600 text-yellow-100 placeholder:text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder={`Enter ${field.label.toLowerCase()}...`}
                />
              </div>
            ))}

            <div>
              <label className="block text-yellow-300 mb-1 font-medium">
                Describe Your Need
              </label>
              <textarea
                name="requestDetails"
                value={form.requestDetails}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-md bg-zinc-900 border border-yellow-600 text-yellow-100 placeholder:text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Tell us when, where, and what type of driver you need..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-3 px-6 rounded-md transition-all shadow-lg hover:shadow-yellow-500/50 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit Request"}
              {!loading && <SendHorizonal size={18} />}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
