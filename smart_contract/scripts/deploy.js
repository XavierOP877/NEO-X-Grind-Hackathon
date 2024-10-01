const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Transactions = await ethers.getContractFactory("Transactions");

  // Set maxFeePerGas and maxPriorityFeePerGas for EIP-1559
  const maxPriorityFeePerGas = ethers.utils.parseUnits('20', 'gwei'); // 20 gwei priority fee
  const maxFeePerGas = ethers.utils.parseUnits('40', 'gwei'); // 40 gwei max fee (base fee + priority fee)
  
  console.log("Deploying CrowdFund contract...");
  const transactions = await Transactions.deploy({
    maxFeePerGas: maxFeePerGas,
    maxPriorityFeePerGas: maxPriorityFeePerGas
  });

  console.log("Waiting for deployment transaction to be mined...");
  await transactions.deployed();

  console.log("Transactions contract deployed to:", await transactions.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });