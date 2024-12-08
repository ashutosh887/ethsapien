// eslint-disable-next-line @typescript-eslint/no-require-imports
const { ethers } = require("hardhat");

async function main() {
  const CredentialsManager = await ethers.getContractFactory(
    "CredentialsManager"
  );

  // Deploy the contract
  const credentialsManager = await CredentialsManager.deploy();

  // Wait for the deployment to be mined
  console.log("Deploying CredentialsManager contract...");
  await credentialsManager.waitForDeployment();

  // Get the deployed contract address
  const contractAddress = await credentialsManager.getAddress();
  console.log("CredentialsManager deployed to:", contractAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
