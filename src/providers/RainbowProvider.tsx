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
        {/* Added RainbowKitSiweNextAuthProvider for SIWE authentication */}
        <QueryClientProvider client={queryClient}>
          <RainbowKitSiweNextAuthProvider>
            <RainbowKitProvider
              modalSize="compact"
              // TODO: fix rainbow kit theme & configurations
              // Uncomment and customize the theme below as needed
              // theme={darkTheme({
              //   accentColor: "#0E76FD",
              //   accentColorForeground: "white",
              //   borderRadius: "large",
              //   fontStack: "system",
              //   overlayBlur: "small",
              // })}
            >
              {children}
            </RainbowKitProvider>
          </RainbowKitSiweNextAuthProvider>
        </QueryClientProvider>
      </SessionProvider>
    </WagmiProvider>
  );
}
