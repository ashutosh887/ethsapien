import { huddleConfig } from "@/providers/HuddleClientProvider";
import { AccessToken, Role } from "@huddle01/server-sdk/auth";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { roomId } = req.query;

  if (!roomId) {
    return res.status(400).json({ error: "roomId is required" });
  }

  try {
    const accessToken = new AccessToken({
      apiKey: huddleConfig.apiKey,
      roomId: roomId as string,
      role: Role.HOST,
      permissions: {
        admin: true,
        canConsume: true,
        canProduce: true,
        canProduceSources: { cam: true, mic: true, screen: true },
      },
    });

    const token = await accessToken.toJwt();
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error generating access token:", error);
    res.status(500).json({ error: "Failed to generate access token" });
  }
};

export default handler;
