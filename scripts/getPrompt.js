const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/NFTSetup.sol/NFTSetup.json");

const contract_Address = "0xa0B5714098cB518417d4B16583110531151FDEe9"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x8E563Ee5B8CA083ef2bC889fC6Ff7314B90308BE"; 

async function main() {

    const myContract = await hre.ethers.getContractAt(tokenABI, contract_Address);
    const count = await myContract.balanceOf(walletAddress); // It will return number of NFTs in wallet

    for (let i = 0; i < count; i++) {
        const ID = await myContract.tokenOfOwnerByIndex(walletAddress, i);
        const prompt = await myContract.promptDescription(ID);
        console.log(`NFT with ID ${ID.toString()} has prompt: ${prompt}`);
      }

  }
  
  async function fetchNFTData() {
    try {
        await main();
    } catch (error) {
        console.error(error);
        process.exitCode = 1;
    }
}

fetchNFTData();