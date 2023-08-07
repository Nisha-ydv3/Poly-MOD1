const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/NFTSetup.sol/NFTSetup.json");
require('dotenv').config()

const data = [
  {
    prompt: "people attending orientation",
    cid: "QmVx5oVk3Gvh11dWYVpNnwdPu2XmFcEWBhyzQDybeTmpZu",
  },
  {
    prompt: "Ancient people playing pubg",
    cid: "QmdGc3K7w4iceFWo2fhdGGdYAsNsahpdQ83fVTi8kZauLC",
  },
  {
    prompt: "stock market",
    cid: "QmdxzDrLy8hnqtKMeHsyacNEJ73dempQ3BcmwY9zna7cFp",
  },
  {
    prompt: "blockchain crash",
    cid: "QmUqcY55ohac2DoNwz1YfqqM4CUm1vbw53M8m62xYDg2Zj",
  },
  {
    prompt:"nerd using laptop",
    cid: "QmbdEAu9LxGUpXTzrUk4YbyHAgMiAzaFpjkusE7PvBhmFG"
  },
]

const contractAddress = "0xa0B5714098cB518417d4B16583110531151FDEe9";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x8E563Ee5B8CA083ef2bC889fC6Ff7314B90308BE"; // place your public address for your wallet here

async function main() {
  const contract = await hre.ethers.getContractAt(tokenABI, contractAddress);
  let ID = 0;

  for (const { prompt, cid } of data) {
    const tx = await contract.mint(walletAddress, cid);
    await tx.wait();
    console.log("NFT minted with cid: ", cid);

    const promptSet = await contract.setPrompt(ID, prompt);
    await promptSet.wait();

    console.log("Prompt set for NFT with ID: ", ID);
    ID++;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
