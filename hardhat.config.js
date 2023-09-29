require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const SWISSTRONIK_RPC_URL = process.env.SWISSTRONIK_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: SWISSTRONIK_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};