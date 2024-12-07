"use client";

import appConfig from "@/configs/appConfig";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
        {appConfig.title}
      </h1>
      <div className="flex justify-center items-center">
        <ConnectButton
          showBalance={{
            smallScreen: true,
            largeScreen: true,
          }}
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
          chainStatus="icon"
        />
      </div>
    </div>
  );
}
