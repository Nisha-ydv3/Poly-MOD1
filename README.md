# ERC721 Goerli to Mumbai Bridge Using fxPortal
In this repository I have made a f solidity file for transfering NFTs over FXPortal Bridge from Goerli to Mumbai Testnet. Used Hardhat Scripts to deploy, mint, approve and deposit the NFTs.

## Functions Used
### mint function
I've used a hardhat script for minting  NFTs. In this project I've minted all the NFT's at once.

### getBalance
I've used this script to return the balance of the wallet addressas given.

### getPrompt
Here I'll be returning the prompts that is used to generate the images.

### approveDeposit
This script is used to approve the transfer of token and Deposit them on Mumbai Testnet.

## Steps involved
1. Install all the dependencies by using command- npm i
2. Compile the contract and generate json file by using command- npx hardhat compile
3. Deploying on Goerli testnet to generate contract address by using command- npx hardhat run scripts/deploy.js --network goerli (make sure hardhat.config.js contains url and private key for deploy)
4. Mint NFTs on Goerly testnet by using this command - npx hardhat run scripts/mint.js --network goerli
5. Approve and Deposit to Mumbai Tesnet by using this command - npx hardhat run scripts/approveDeposit.js --network goerli
6. getBalance of Mumbai testnet by using this command- npx hardhat run scripts/getBalance.js --network mumbai

## Authors
Work done by Nisha- nishaneha924@gmail.com



