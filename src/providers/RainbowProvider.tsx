"use client";

import { wagmiConfig } from "@/configs/wagmiConfig";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

export default function RainbowProvider({ children }: Props) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          modalSize="compact"
          // TODO: fix rainbow kit theme & configurations
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
      </QueryClientProvider>
    </WagmiProvider>
  );
}
