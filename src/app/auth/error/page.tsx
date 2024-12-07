"use client";

import Loader from "@/components/custom/loader"; // Adjust the path if necessary
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function ErrorPage() {
  return (
    <Suspense fallback={<Loader />}>
      <ErrorComponent />
    </Suspense>
  );
}

function ErrorComponent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const errorMessages: Record<string, string> = {
    Configuration: "There is a configuration issue. Please contact support.",
    AccessDenied: "Access was denied. Please check your permissions.",
    Verification: "The verification token is invalid or expired.",
    Default: "An unknown error occurred. Please try again.",
  };

  const message = errorMessages[error || "Default"];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="ETHSapien Logo"
          width={80}
          height={80}
          className="mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Authentication Error
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{message}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => window.location.replace("/auth/signin")}
        >
          Go to Sign In
        </button>
      </div>
    </div>
  );
}
