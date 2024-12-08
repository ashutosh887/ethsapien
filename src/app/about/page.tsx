"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div
      className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center py-10 px-4"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <div className="w-full max-w-6xl">
        <Card className="bg-white dark:bg-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-gray-800 dark:text-gray-200 text-center">
              About ETHSapien
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400 text-center mt-4">
              Decentralized AI-Powered Credentialing System for On-Chain
              Identity Verification and Reputation
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-6">
            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                It is a decentralized platform that combines AI and
                zero-knowledge (ZK) proofs to aggregate, verify, and utilize
                on-chain credentials and reputations. With applications spanning
                hiring, credit scoring, and trust ecosystems, it emphasizes user
                privacy and scalability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Key Features
              </h2>
              <ul className="space-y-4">
                <li>
                  <Badge
                    variant="outline"
                    className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200"
                  >
                    AI-Powered Verification
                  </Badge>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Leverages AI to analyze and verify credentials while
                    ensuring privacy with zk-SNARKs.
                  </p>
                </li>
                <li>
                  <Badge
                    variant="outline"
                    className="bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-200"
                  >
                    Multi-Network Deployment
                  </Badge>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Operates across multiple blockchains like Polkadot, BNB
                    Chain, and StarkNet.
                  </p>
                </li>
                <li>
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200"
                  >
                    Secure and Composable
                  </Badge>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Combines **Lit Protocol** for data access and **Socket** for
                    cross-chain interoperability.
                  </p>
                </li>
              </ul>
            </section>

            <section className="text-center">
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Get Started
              </h2>
              <Link href="https://github.com/ashutosh887/ethsapien" passHref>
                <Button
                  variant="outline"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  Explore the Repository
                </Button>
              </Link>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
