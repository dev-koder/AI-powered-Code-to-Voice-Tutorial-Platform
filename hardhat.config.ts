require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_URL, // This will come from your .env file
      accounts: [process.env.PRIVATE_KEY] // This will come from your .env file
    }
  }
};