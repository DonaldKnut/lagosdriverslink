"use client";

import Link from "next/link";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useToast } from "@/app/components/Toast";
import { useEffect } from "react";

// Error messages mapping
const errorMessages: Record<string, string> = {
  Configuration: "There's a problem with the server configuration.",
  AccessDenied: "You don't have permission to sign in.",
  Verification: "The token has expired or has already been used.",
  Default: "An error occurred while signing in.",
};

// Get friendly error message
function getErrorMessage(errorCode: string | null): string {
  if (!errorCode) return errorMessages.Default;
  return errorMessages[errorCode] || errorMessages.Default;
}

export default function AuthErrorClient() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const { trigger } = useToast();

  useEffect(() => {
    if (error) {
      trigger("error", getErrorMessage(error));
    }
  }, [error, trigger]);

  return (
    <div className="text-white w-full max-w-md mx-auto">
      <div className="mb-6">
        <Link
          href="/auth/login"
          className="inline-flex items-center text-sm text-gray-400 hover:text-amber-500 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to login
        </Link>
      </div>

      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <AlertTriangle className="h-10 w-10 text-red-500" />
        </div>
        <h2 className="text-3xl font-extrabold text-amber-100">Error</h2>
        <p className="text-amber-200 mt-1 text-sm">{getErrorMessage(error)}</p>
      </div>

      <div className="text-center mt-6">
        <Link
          href="/auth/login"
          className="inline-flex items-center justify-center px-4 py-2 bg-amber-600 hover:bg-amber-700 rounded-lg text-white transition-colors"
        >
          Try again
        </Link>
      </div>
    </div>
  );
}
