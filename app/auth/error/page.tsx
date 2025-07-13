// app/auth/error/page.tsx
import { Suspense } from "react";
import AuthErrorClient from "./_components/AuthErrorClient";

export default function AuthErrorPage() {
  return (
    <Suspense
      fallback={<div className="text-center text-white">Loading error...</div>}
    >
      <AuthErrorClient />
    </Suspense>
  );
}
