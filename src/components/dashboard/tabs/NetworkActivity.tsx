import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

const supportedChains = {
  56: "BNB Chain",
  97: "BNB Chain Testnet",
  8453: "Base",
  84531: "Base Goerli Testnet",
};

const NetworkActivity = () => {
  const [network, setNetwork] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);

  useEffect(() => {
    const fetchNetwork = async () => {
      if (!window.ethereum) {
        setNetwork("MetaMask not detected");
        return;
      }

      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const networkInfo = await provider.getNetwork();

        // Convert bigint chainId to number
        const chainIdAsNumber = Number(networkInfo.chainId);

        setChainId(chainIdAsNumber);
        // TODO
        // setNetwork(supportedChains[chainIdAsNumber] || "Unsupported Network");
        setNetwork("No Network");
      } catch (error) {
        console.error("Error fetching network:", error);
        setNetwork("Error fetching network");
        setChainId(null);
      }
    };

    fetchNetwork();

    window.ethereum?.on("chainChanged", fetchNetwork);

    return () => {
      window.ethereum?.removeListener("chainChanged", fetchNetwork);
    };
  }, []);

  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Network Activity</CardTitle>
        <CardDescription>
          Monitor the connected blockchain network.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <strong>Network:</strong> {network || "Fetching..."}
        </p>
        <p>
          <strong>Chain ID:</strong>{" "}
          {chainId !== null ? chainId : "Fetching..."}
        </p>
      </CardContent>
    </Card>
  );
};

export default NetworkActivity;
