"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const bounties = [
  {
    partner: "ETHIndia",
    track: "Open Track",
    description: "Holistic and innovative decentralized project.",
  },
  {
    partner: "Base",
    track: "Consumer Apps",
    description: "Consumer-facing app with seamless onboarding.",
  },
  {
    partner: "Coinbase",
    track: "AI x Crypto",
    description: "Credential verification using AI-driven insights.",
  },
  {
    partner: "Polygon",
    track: "zkEVM",
    description: "ZK proofs for private credentialing.",
  },
  {
    partner: "Privacy + Scaling Explorations",
    track: "Anon Aadhaar, Semaphore, MACI, ZK Email",
    description: "Private credentialing via ZK technologies.",
  },
  {
    partner: "Huddle01",
    track: "AI, Unity, JS Tracks",
    description:
      "Real-time credential verification via decentralized video communication.",
  },
  {
    partner: "Socket",
    track: "Horizontally Scaled App",
    description: "Cross-chain functionality via Socket.",
  },
  {
    partner: "Polkadot",
    track: "Best Deployed Project",
    description: "Multi-network compatibility.",
  },
  {
    partner: "The Graph",
    track: "Subgraphs, Substreams",
    description: "Efficient data querying and real-time updates.",
  },
  {
    partner: "Ethereum Attestation Service",
    track: "AI Agent Attestations",
    description: "Issuing decentralized attestations for credentials.",
  },
  {
    partner: "True Network",
    track: "Attestation Service",
    description: "Reputation modeling for credentials.",
  },
  {
    partner: "Lit Protocol",
    track: "Innovative Use",
    description: "Secure access control for private credential sharing.",
  },
  {
    partner: "Okto",
    track: "Consumer Apps",
    description: "Wallet integration and incentives.",
  },
];

export default function BountiesPage() {
  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-200 mb-6 text-center">
        Targeted Bounties
      </h1>
      <Tabs defaultValue="all">
        <TabsList className="flex justify-center mb-8">
          <TabsTrigger value="all">All Bounties</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bounties.map((bounty, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{bounty.partner}</CardTitle>
                  <CardDescription>{bounty.track}</CardDescription>
                </CardHeader>
                <p className="px-4 pb-4">{bounty.description}</p>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
