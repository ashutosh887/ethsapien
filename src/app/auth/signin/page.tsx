"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SignInPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push(callbackUrl);
    }
  }, [status, callbackUrl, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
          Sign In to ETHSapien
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 text-center">
          Please connect your wallet to sign in and access the dashboard.
        </p>
        <div className="w-full flex justify-center">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
