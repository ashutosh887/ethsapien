import { BrowserProvider, Contract } from "ethers";

export const useContract = () => {
  const getProvider = () => {
    if (!window.ethereum) {
      throw new Error("MetaMask is not installed");
    }
    return new BrowserProvider(window.ethereum);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getContract = async (contractAddress: string, abi: any) => {
    const provider = getProvider();
    const signer = await provider.getSigner();
    return new Contract(contractAddress, abi, signer);
  };

  return { getContract };
};
