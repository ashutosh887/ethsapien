"use client";

import credentialsManagerABI from "@/abi/credentialsManager.json";
import { useContract } from "@/hooks/useContract";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

interface Credential {
  name: string;
  description: string;
  issuedAt: number;
}

const MyCredentials = () => {
  const { address, isConnected } = useAccount();
  const [credentials, setCredentials] = useState<Credential[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { getContract } = useContract();

  const fetchCredentials = async () => {
    if (!address) return;

    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";

    try {
      setIsLoading(true);
      const contract = await getContract(
        contractAddress,
        credentialsManagerABI
      );
      const data = await contract.getCredentials(address);

      // Parse the returned data
      setCredentials(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.map((cred: any) => ({
          name: cred.name,
          description: cred.description,
          issuedAt: Number(cred.issuedAt),
        }))
      );
    } catch (error) {
      console.error("Error fetching credentials:", error);
      alert("Failed to fetch credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isConnected) {
      fetchCredentials();
    }
  }, [isConnected, address]);

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 border rounded shadow">
      {isConnected ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">My Credentials</h2>
          <p>Wallet Address: {address}</p>
          {isLoading ? (
            <p>Loading credentials...</p>
          ) : credentials.length > 0 ? (
            <ul className="mt-4">
              {credentials.map((cred, index) => (
                <li key={index} className="mb-2 p-4 border rounded-lg">
                  <strong>{cred.name}</strong> - {cred.description} <br />
                  <small>
                    Issued: {new Date(cred.issuedAt * 1000).toLocaleString()}
                  </small>
                </li>
              ))}
            </ul>
          ) : (
            <p>No credentials found.</p>
          )}
        </div>
      ) : (
        <p>Please connect your wallet via RainbowKit.</p>
      )}
    </div>
  );
};

export default MyCredentials;
