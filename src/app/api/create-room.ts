import appConfig from "@/configs/appConfig";
import { huddleConfig } from "@/providers/HuddleClientProvider";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data } = await axios.post(
      "https://api.huddle01.com/api/v1/create-room",
      { title: `${appConfig.title} Huddle Room` },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": huddleConfig.apiKey,
        },
      }
    );
    res.status(200).json(data);
  } catch (error) {
    console.error("Error creating room:", error);
    res.status(500).json({ error: "Failed to create room" });
  }
};

export default handler;
