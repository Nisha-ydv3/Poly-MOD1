// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/NFTSetup.sol/NFTSetup.json");

const contract_Address = "0xa0B5714098cB518417d4B16583110531151FDEe9"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x8E563Ee5B8CA083ef2bC889fC6Ff7314B90308BE"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, contract_Address);

    console.log("You have: " + await token.balanceOf(walletAddress) + " NFTs in your account!");
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });