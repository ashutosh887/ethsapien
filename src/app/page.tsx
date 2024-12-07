"use client";

import Footer from "@/components/custom/footer";
import Loader from "@/components/custom/loader";
import { Button } from "@/components/ui/button";
import appConfig from "@/configs/appConfig";
import { routerConfig } from "@/configs/routerConfig";
import { Database, Globe, ShieldCheck } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const features = [
  {
    title: "AI-Powered Verification",
    description: "Leverage AI to analyze and verify credentials securely.",
    icon: ShieldCheck,
  },
  {
    title: "Privacy-Preserving Proofs",
    description: "zk-SNARKs and Semaphore ensure privacy for user data.",
    icon: Database,
  },
  {
    title: "Cross-Chain Compatibility",
    description:
      "Interact with credentials across Polkadot, StarkNet, and more.",
    icon: Globe,
  },
];

export default function HomePage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen pt-20">
      <section className="text-center px-4 py-16">
        <h1 className="text-5xl font-extrabold text-gray-800 dark:text-gray-200 mb-6">
          Welcome to {appConfig.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          {appConfig.description}
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            size="lg"
            onClick={() => router.push(routerConfig.signin.path)}
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => router.push(routerConfig.bounties.path)}
          >
            Learn More
          </Button>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 py-16 w-full">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              >
                <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
