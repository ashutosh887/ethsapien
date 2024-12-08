import { BrowserProvider, Contract } from "ethers";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const MyCredentials = () => {
  const { address, isConnected } = useAccount();
  const [credentials, setCredentials] = useState<
    { name: string; description: string; issuedAt: number }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCredentials = async () => {
    if (!address) return;

    const contractAddress = "DEPLOYED_CONTRACT_ADDRESS";
    const abi = [
      "function getCredentials(address user) view returns (tuple(string name, string description, uint256 issuedAt)[])",
    ];

    try {
      setIsLoading(true);
      const provider = new BrowserProvider(window.ethereum); // For Ethers 6.x
      const signer = await provider.getSigner();
      const contract = new Contract(contractAddress, abi, signer);

      const data = await contract.getCredentials(address);
      setCredentials(data);
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
    <div>
      {isConnected ? (
        <div>
          <p>Wallet Address: {address}</p>
          {isLoading ? (
            <p>Loading credentials...</p>
          ) : credentials.length > 0 ? (
            <ul>
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
