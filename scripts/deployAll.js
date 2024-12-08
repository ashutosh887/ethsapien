const { ethers } = require("hardhat");

const deployments = {};

async function deployContract(contractName, networkName) {
  console.log(`Deploying ${contractName} to ${networkName}...`);
  const ContractFactory = await ethers.getContractFactory(contractName);
  const contract = await ContractFactory.deploy();
  await contract.deployed();
  console.log(
    `${contractName} deployed to: ${contract.address} on ${networkName}`
  );
  deployments[contractName] = {
    address: contract.address,
    network: networkName,
  };
}

async function main() {
  // Sepolia Deployments
  await deployContract("AdvancedCredentialsManager", "Sepolia");
  await deployContract("CredentialsManager", "Sepolia");
  await deployContract("LitAccessManager", "Sepolia");

  // Base Deployments
  await deployContract("BaseCredentialManager", "Base");

  // Polygon Deployments
  await deployContract("CredentialIndex", "Polygon");

  // BNB Deployments
  await deployContract("CrossChainCredentialManager", "BNB");

  // Polygon zkEVM and StarkNet Deployments
  await deployContract("ZKCredentialVerifier", "zkEVM");
  await deployContract("ZKCredentialVerifier", "StarkNet");

  // Ethereum Mainnet Deployments
  await deployContract("EASCredentialAttester", "Mainnet");

  console.log("Deployment complete. Summary:");
  console.log(JSON.stringify(deployments, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
