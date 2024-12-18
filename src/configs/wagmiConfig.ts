"use client";

import appConfig from "@/configs/appConfig";
import { Chain, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { cookieStorage, createStorage, http } from "wagmi";
import { blastSepolia, bscTestnet, sepolia } from "wagmi/chains";

const projectId = `${process.env.NEXT_PUBLIC_PROJECT_ID}`;

const supportedChains: Chain[] = [sepolia, bscTestnet, blastSepolia];

export const wagmiConfig = getDefaultConfig({
  appName: appConfig.title,
  projectId,
  // TODO: Fix any error on supportedChains
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chains: supportedChains as any,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: supportedChains.reduce(
    (obj, chain) => ({ ...obj, [chain.id]: http() }),
    {}
  ),

  // TODO: add support for only some wallets - Metamask, Coinbase, WalletConnect
});
