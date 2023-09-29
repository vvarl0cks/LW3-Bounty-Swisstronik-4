// Import necessary modules from Hardhat and SwisstronikJS
const hre = require("hardhat");
require("dotenv").config({ path: ".env" });
const { encryptDataField, decryptNodeResponse } = require("@swisstronik/swisstronik.js");

// Function to send a shielded transaction using the provided signer, destination, data, and value
const sendShieldedTransaction = async (signer, destination, data, value) => {
  // Get the RPC link from the network configuration
  const rpcLink = hre.network.config.url;

  // Encrypt transaction data
  const [encryptedData] = await encryptDataField(rpcLink, data);

  // Construct and sign transaction with encrypted data
  return await signer.sendTransaction({
    from: signer.address,
    to: destination,
    data: encryptedData,
    value,
  });
};

async function main() {
  // Address of the deployed contract
  const contractAddress = "0x455A58369F3e6106fc632C0620b63B0c8e3E5EDF";

  // Get the signer (your account)
  const [signer] = await hre.ethers.getSigners();

  // Create a contract instance
  const contractFactory = await hre.ethers.getContractFactory("Warlocks");
  const contract = contractFactory.attach(contractAddress);

  // Send a shielded transaction to mint tokens in the contract
  const functionName = "mint";
  const mintTx = await sendShieldedTransaction(signer, contractAddress, contract.interface.encodeFunctionData(functionName), 0);

  await mintTx.wait();

  // It should return a TransactionReceipt object
  // console.log("Transaction Receipt: ", mintTx);
}

// Using async/await pattern to handle errors properly
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});