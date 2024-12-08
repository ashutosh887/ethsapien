// eslint-disable-next-line @typescript-eslint/no-require-imports
require("@nomicfoundation/hardhat-toolbox");
// eslint-disable-next-line @typescript-eslint/no-require-imports
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
