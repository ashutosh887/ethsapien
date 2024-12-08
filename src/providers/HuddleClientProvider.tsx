"use client";

import { HuddleClient, HuddleProvider } from "@huddle01/react";

export const huddleConfig = {
  projectId: process.env.NEXT_PUBLIC_HUDDLE_PROJECT_ID!,
  apiKey: process.env.NEXT_PUBLIC_HUDDLE_API_KEY!,
};

export const huddleClient = new HuddleClient({
  projectId: process.env.NEXT_PUBLIC_HUDDLE_PROJECT_ID!,
  options: {
    activeSpeakers: { size: 12 },
  },
});

const HuddleClientProvider = ({ children }: { children: React.ReactNode }) => {
  return <HuddleProvider client={huddleClient}>{children}</HuddleProvider>;
};

export default HuddleClientProvider;
