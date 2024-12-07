"use client";

import { Button } from "@/components/ui/button";
import appConfig from "@/configs/appConfig";
import { routerConfig } from "@/configs/routerConfig";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "./themeToggle";

export default function Navbar() {
  const { status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const isSignInPage = pathname === routerConfig.signin.path;
  const isHomePage = pathname === routerConfig.home.path;

  return (
    <nav className="sticky top-0 z-50 bg-gray-100 dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1
          className="text-xl font-bold text-gray-800 dark:text-gray-200 cursor-pointer"
          onClick={() => router.push(routerConfig.home.path)}
        >
          {appConfig.title}
        </h1>
        <div className="flex items-center space-x-4">
          {isHomePage && (
            <button
              className="text-gray-800 dark:text-gray-200 hover:underline"
              onClick={() => router.push(routerConfig.bounties.path)}
            >
              Bounties
            </button>
          )}
          <ThemeToggle />
          {status === "authenticated" ? (
            <ConnectButton
              showBalance={{
                smallScreen: false,
                largeScreen: true,
              }}
              chainStatus="icon"
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "full",
              }}
            />
          ) : (
            !isSignInPage && (
              <Button
                variant="outline"
                onClick={() => router.push(routerConfig.signin.path)}
              >
                Sign In
              </Button>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
