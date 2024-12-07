"use client";

import { wagmiConfig } from "@/configs/wagmiConfig";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { RainbowKitSiweNextAuthProvider } from "@rainbow-me/rainbowkit-siwe-next-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { WagmiProvider } from "wagmi";

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

export default function RainbowProvider({ children }: Props) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <SessionProvider refetchInterval={0}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitSiweNextAuthProvider>
            <RainbowKitProvider modalSize="compact">
              {children}
            </RainbowKitProvider>
          </RainbowKitSiweNextAuthProvider>
        </QueryClientProvider>
      </SessionProvider>
    </WagmiProvider>
  );
}
