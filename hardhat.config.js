// eslint-disable-next-line @typescript-eslint/no-require-imports
require("@nomicfoundation/hardhat-toolbox");
// eslint-disable-next-line @typescript-eslint/no-require-imports
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    base: {
      url: "https://mainnet.base.org",
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    bnb: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    zkEVM: {
      url: `https://zkevm-rpc.polygon.io`,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    starknet: {
      url: `https://starknet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.SEPOLIA_ETHERSCAN_API_KEY,
      polygon: process.env.POLYGONSCAN_API_KEY,
      bnb: process.env.BSCSCAN_API_KEY,
      zkEVM: process.env.ZKEVM_ETHERSCAN_API_KEY,
    },
  },
};
